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
 
    api.Get("/", func(c *fiber.Ctx) error {
        users, err := db.GetUsers()
        if err != nil {
            return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
                "error": "Could not fetch users",
            })
        }

        return c.JSON(users)
    })
 
    app.Listen(":3002")
}
