package main

import "github.com/gofiber/fiber/v2"
 
func main() {
    config := fiber.Config{
        AppName: "App",
    }
   
    app := fiber.New(config)

    api := app.Group("/go")
 
    api.Get("/", func(c *fiber.Ctx) error {
        return c.SendString("Hello World")
    })
 
    app.Listen(":3002")
}
