package db

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

type User struct {
  ID int `gorm:"column:id;primaryKey" json:"id"`
	Name string `gorm:"column:name;unique" json:"name"`
}

var DB *gorm.DB

func init() {
    var err error
    DB, err = gorm.Open(postgres.Open(
				"host=localhost user=postgres password=postgres dbname=postgres port=5432 sslmode=disable",
		), &gorm.Config{
			NamingStrategy: schema.NamingStrategy{
				SingularTable: true,
		},
		})
    if err != nil {
        panic("Failed to connect to database")
    }
}

func GetUsers() ([]User, error) {
    var users []User
    result := DB.Find(&users)
    return users, result.Error
}