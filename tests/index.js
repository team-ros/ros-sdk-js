const { rosapi } = require("../lib")

const api = new rosapi("https://api.dev.ros-cloud.at")

api.token().set("eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlNjYzOGY4NDlkODVhNWVkMGQ1M2NkNDI1MzE0Y2Q1MGYwYjY1YWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcm9zLWNsb3VkLWNjNzExIiwiYXVkIjoicm9zLWNsb3VkLWNjNzExIiwiYXV0aF90aW1lIjoxNjAwNzczNDQ3LCJ1c2VyX2lkIjoiYkw5dHpMMlBGSlB1OFBXTnFQSFlBNWFnSDRmMiIsInN1YiI6ImJMOXR6TDJQRkpQdThQV05xUEhZQTVhZ0g0ZjIiLCJpYXQiOjE2MDA3NzM0NDcsImV4cCI6MTYwMDc3NzA0NywiZW1haWwiOiJ0dTM1Njd1NTZ1QHR1bWFpbC5uZXQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidHUzNTY3dTU2dUB0dW1haWwubmV0Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ODCvPmPo3HVg1pIS_d4Zvsp5ozQKxloZweSVwYNRo2PYhEAHcUnfXh47OASwu6cXhVubrJynvOUOlmwagLYdLx6WnmrHgpsp-SpWshHCfY_wUoETX9aDTYV5SZmHKwztnvGE1AFb6YhubyPc5HNK729YL2W9a7hrxILNyPwRySIPAvcBvcXE6kfk2tbKWb-ez4ulLIpxdDLnIfigw-x1UBWRsgV4NDStEQpAQSD9mY9Uhp6U8jUcwBz_AwtemG7fLtoJwQ4pLobUaDcS7xZJjLw6iUla9yQ5up58IlMf8Mgix3FURNzDiRnSW8uZ8oDfmoLkn6Q8NB455yBAvgQnLw")

api.user().authenticate("login")
.then(response => {
    console.log(response)
    console.log("everything went awesome")
})
.catch(err => {
    console.log("an error occured")
    console.log(err)
})

// api.user().deleteNow()
// .then(response => {
//     console.log(response)
//     console.log("everything went awesome")
// })
// .catch(err => {
//     console.log("an error occured")
//     console.log(err)
// })

// api.object().createDir("/Doc2", "Doc1")
// .then(response => {
//     console.log(response)
// })
// .catch(err => {
//     console.log(err)
// })

