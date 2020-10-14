const { rosapi } = require("../lib")
const fs = require("fs")

const api = new rosapi("https://ros-api-v2.herokuapp.com")

api.token().set("eyJhbGciOiJSUzI1NiIsImtpZCI6IjIzNzA1ZmNmY2NjMTg4Njg2ZjhhZjkyYWJiZjAxYzRmMjZiZDVlODMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcm9zLWNsb3VkLWNjNzExIiwiYXVkIjoicm9zLWNsb3VkLWNjNzExIiwiYXV0aF90aW1lIjoxNjAyNjgzNTk2LCJ1c2VyX2lkIjoiZmlVVjJ3eGo2WGFDQTVmUndycU42c1VEbkYzMiIsInN1YiI6ImZpVVYyd3hqNlhhQ0E1ZlJ3cnFONnNVRG5GMzIiLCJpYXQiOjE2MDI2ODM1OTYsImV4cCI6MTYwMjY4NzE5NiwiZW1haWwiOiJkZnNnZHNmZ2RAdGVzdG1haWwubmV0IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRmc2dkc2ZnZEB0ZXN0bWFpbC5uZXQiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.B4tF7ZH_2FYpZXbBYS5AGpOH5Qo1l5eibP59pd3pQHokGqkuhwnG1Rwo5FJcLAOHWyYFUGCq6NQlgTNiQcAUDZPabhvOMhueCagSfJyYMSLjrB6bhtoQhHkht2lrsoRERDZan7n5XlXyjEnPzvMxhL_7mWFJkq3P-C-KesFLm-3DhCtnv3Xl4gA1dWIc4h5yeSKvmqII-XM7400HZ8Eq17tCbqoaQhOOzHRJvikbE0uaw04_vAYhLY5ARArmpg3xLM51z7E1SobP3ZOtJ2oS1ldEY4de6EZJhhi4xoDtAmWjVgXc-rZ8OG54vL9TSe-1RrXzMs1HZOuq8NEQNDY2mw")

api.user().login("johndoe@testmail.net")
.then(response => {
    if(response.status) {
        if(response.exists) console.log("user exists")
        else console.log("user does not exist")
    }
    else console.log("error while requesting")
})
.catch(err => {
    console.log(err)
})

api.object().createDir("Dir 5")
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})

api.object().get()
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})

api.object().upload(fs.createReadStream("/workspaces/ros-sdk-js/tsconfig.json"), null)
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})

api.object().move("8cefe536-a2f1-4535-80f0-e1588d37b949", "Tests2", "aed1c92a-96de-4c5e-bb81-e3fba9cbe15c")
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})

api.object().remove("85b40ddb-1725-4b88-b827-ab063d756591")
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})