package main

import (
	userRouter "fiber-server/user"

	"github.com/gofiber/fiber/v2"
)
 
func main() {
    config := fiber.Config{
        AppName: "App",
    }
   
    app := fiber.New(config)

    api := app.Group("/go")

    userRouter.SetupUserRoutes(api)
 
    app.Listen(":3002")
}
