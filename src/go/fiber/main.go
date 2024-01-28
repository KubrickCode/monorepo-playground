package main

import (
	"db"

	"github.com/gofiber/fiber/v2"
)
 
func main() {
    config := fiber.Config{
        AppName: "App",
    }
   
    app := fiber.New(config)

    api := app.Group("/go")

    userAPI := api.Group("/users")
 
    userAPI.Get("", func(c *fiber.Ctx) error {
        users, err := db.GetUsers()
        if err != nil {
            return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
                "error": "Could not fetch users",
            })
        }

        return c.JSON(users)
    })

    userAPI.Post("", func(c *fiber.Ctx) error {
        var body struct {
            Name string `json:"name"`
        }

        if err := c.BodyParser(&body); err != nil {
            return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
                "error": "Could not parse JSON",
            })
        }

        user, err := db.CreateUser(body.Name)
        if err != nil {
            return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
                "error": "Could not create user",
            })
        }

        return c.JSON(user)
    })
 
    app.Listen(":3002")
}
