const { rosapi } = require("../lib")
const { tokenStore } = require("../lib/store")

const api = new rosapi("https://api.dev.ros-cloud.at")

api.token().set("eyJhbGciOiJSUzI1NiIsImtpZCI6IjczNzVhZmY3MGRmZTNjMzNlOTBjYTM2OWUzYTBlZjQxMzE3MmZkODIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcm9zLWNsb3VkLWNjNzExIiwiYXVkIjoicm9zLWNsb3VkLWNjNzExIiwiYXV0aF90aW1lIjoxNjAwNzAzNTM5LCJ1c2VyX2lkIjoiZUxnZU5Ydm1VaFNaODFza1NtdFdlU0hiR3BFMyIsInN1YiI6ImVMZ2VOWHZtVWhTWjgxc2tTbXRXZVNIYkdwRTMiLCJpYXQiOjE2MDA3MDM1MzksImV4cCI6MTYwMDcwNzEzOSwiZW1haWwiOiIxMjEyMTIxMjEyZWpvaXdlcmZAdGVzdG1haWwubmV0IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIjEyMTIxMjEyMTJlam9pd2VyZkB0ZXN0bWFpbC5uZXQiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.KjSFDrEqIsyysCVZxR6xXVChsS-H26YywSZAUru4akbNCwdCfVnp4j87sRpVW8UgsHsjF3daGGpG-NHVilCEQOCxRVDdx0XHdRAEGMqqoDvtTTMT_JdQ8wT-laLBBrMQvVci50aF7994y5so80NUgkOfUo3c1a23cjR9_6smQVkw_iKT2t-4aJlVxrFRo8lLAyIHXD4tAJ33FzMm8jpo_C7L2yTS57FyHBUmCRqGpsELVpmWKgHKOeoA0uMaU1kHewbt1wf7dkaItR_rVynyASx5KLINoDAH4_CSPvQTnX1hUEb0EsyC8kxWwTAKv7cVGyOQeJUQjye7eqeWdAYYrw")

// api.user().authenticate("login")
// .then(response => {
//     console.log(response)
//     console.log("everything went awesome")
// })
// .catch(err => {
//     console.log("an error occured")
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

api.object().createDir("/Doc2", "Doc1")
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})

