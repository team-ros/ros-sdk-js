// const { rosapi } = require("../lib")
// const fs = require("fs")

// const api = new rosapi("https://ros-api-v2.herokuapp.com")

// api.token().set("eyJhbGciOiJSUzI1NiIsImtpZCI6IjIzNzA1ZmNmY2NjMTg4Njg2ZjhhZjkyYWJiZjAxYzRmMjZiZDVlODMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcm9zLWNsb3VkLWNjNzExIiwiYXVkIjoicm9zLWNsb3VkLWNjNzExIiwiYXV0aF90aW1lIjoxNjAyNDM2MzY5LCJ1c2VyX2lkIjoiWm5JaTZ3VHVzRU5mZjlyOU5OS0FNTEs0Mk5CMyIsInN1YiI6IlpuSWk2d1R1c0VOZmY5cjlOTktBTUxLNDJOQjMiLCJpYXQiOjE2MDI0MzYzNjksImV4cCI6MTYwMjQzOTk2OSwiZW1haWwiOiJnenVobGtAYWxpYmFiLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJnenVobGtAYWxpYmFiLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Is8XNit5tF5P_x7eTFmGLb71Ym3oII93qnchI0dBpz1jBBMuIvE3V6jTasK40RZUlcNeTIgjD-d7hlau_cyKnZCN2pRnPiTEA5bS3TTgVRDf1T9U5s9stI__obQQGRfu3WVNgdCkcr1FlCcUQ_ZtqIGxOdzYSVA626kmWrWjIvs_nxAeCBFvbnZzZkTzCckFnLyPOyN6uPNGHNtThvoDMxWCEhDS49hqJr-a1CUGT-dTfmlYbMT_JjNU4qIMdJT23oNO6y7zLvtH3DM1PH2hxvQn1UsYy9hCGqPm4WBdk9XaJnUjUDWg8vF_pL4cfx8saNb58xTwTNUD1jw6NzfdTQ")


// const resting = async () => {

//     // Start Login Test
//     console.log("Testing login")
//     try {
//         const loginResponse = await api.user().login("")
//         console.log("Success Response", loginResponse)
//     }
//     catch(err) {
//         console.log("Error Response", err)
//     }
//     console.log("------------------------------------------")
//     // End Login Test

//     // Start create_dir Test
//     console.log("Testing create_dir")
//     try {
//         const create_dirResponse = await api.object().createDir("Docs")
//         console.log("Success Response", create_dirResponse)
//     }
//     catch(err) {
//         console.log("Error Response", err)
//     }
//     console.log("------------------------------------------")
//     // End Login Test

//     // Start get Test
//     console.log("Testing get")
//     try {
//         const getResponse = await api.object().get()
//         console.log("Success Response", getResponse)
//     }
//     catch(err) {
//         console.log("Error Response", err)
//     }
//     console.log("------------------------------------------")
//     // End get Test

//     // Start upload Test
//     console.log("Testing upload")
//     try {
//         const file = fs.createReadStream("/workspaces/ros-sdk-js/tsconfig.json")
//         const getResponse = await api.object().upload(file)
//         console.log("Success Response", getResponse)
//     }
//     catch(err) {
//         console.log("Error Response", err)
//     }
//     console.log("------------------------------------------")
//     // End upload Test

// }
// api.user().login("tim@apple.com")
// .then(response => {
// console.log(response)
// })
// .catch(err => {
// console.log(err)
// })

// const file = fs.createReadStream("/workspaces/ros-sdk-js/tsconfig.json")

// api.object().upload(file)
// .then(response => {
// console.log(response)
// })
// .catch(err => {
// console.log(err)
// })

// api.object().get()
// .then(response => {
//     console.log(response)
// })
// .catch(err => {
//     console.log(err)
// })

// api.user().deleteNow()
// .then(response => {
//     console.log(response)
//     console.log("everything went awesome")
// })
// .catch(err => {
//     console.log("an error occured")
//     console.log(err)
// })

// api.object().createDir("Docs", null)
// .then(response => {
//     console.log(response)
// })
// .catch(err => {
//     console.log(err)
// })

