package main

import (
	"db"
	"strconv"

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

    userAPI.Put("/:id", func(c *fiber.Ctx) error {
        var body struct {
            Name string `json:"name"`
        }

        if err := c.BodyParser(&body); err != nil {
            return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
                "error": "Could not parse JSON",
            })
        }

        id, _ := strconv.Atoi(c.Params("id", ""))

        user, err := db.UpdateUser(id, body.Name)
        if err != nil {
            return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
                "error": "Could not update user",
            })
        }

        return c.JSON(user)
    })

    userAPI.Delete("/:id", func(c *fiber.Ctx) error {
        id, _ := strconv.Atoi(c.Params("id", ""))

        err := db.DeleteUser(id)
        if err != nil {
            return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
                "error": "Could not delete user",
            })
        }

        return c.SendStatus(fiber.StatusNoContent)
    })
 
    app.Listen(":3002")
}
