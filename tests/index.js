const { rosapi } = require("../lib")

const api = new rosapi("https://api.dev.ros-cloud.at")

api.token().set("eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlNjYzOGY4NDlkODVhNWVkMGQ1M2NkNDI1MzE0Y2Q1MGYwYjY1YWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcm9zLWNsb3VkLWNjNzExIiwiYXVkIjoicm9zLWNsb3VkLWNjNzExIiwiYXV0aF90aW1lIjoxNjAwNzgxNzQyLCJ1c2VyX2lkIjoiMHg0Y3JRd2VRMFB0Um0zWGJMdVI0ZmdYU1V3MiIsInN1YiI6IjB4NGNyUXdlUTBQdFJtM1hiTHVSNGZnWFNVdzIiLCJpYXQiOjE2MDA3ODE3NDIsImV4cCI6MTYwMDc4NTM0MiwiZW1haWwiOiJqb2huZGRmb2UyM0Bqb2hubWFpbC5uZXQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiam9obmRkZm9lMjNAam9obm1haWwubmV0Il19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.eqHU-aHA5hsf_QPs34Kt86l-qI3-BG4chstvY21ATNSGVCiEEqhSPpgWUnzjYs22mMXMzk5XL-cr6MV3x3pXnPD24ciMCXmN7X_Iq96ssi3MJcSPheH9ZqBoiQM6GbTSU9DdcDJebUz9N9R4i968OPhYLUZ1ozzneY-CFY0HB1qBVDHYFVfVqjikrWeB4CJxVqrhm482j4YzHtgRftMkhuARZANtAnlWclECfk9kLXQxyy9hzfIT5cXmbeFeYmHkU25i7ZfN-MvJdYflqPdfSSgclJCMMjigz7bLyLeLHlRZBytspnXB_ZnMM9_ChIxDfD6lJmh0xk667q5xEnYLrw")

// api.user().authenticate("register")
// .then(response => {
//     console.log(response)
// })
// .catch(err => {
//     console.log("an error occured")
//     console.log(err)
// })

api.user().deleteNow()
.then(response => {
    console.log(response)
    console.log("everything went awesome")
})
.catch(err => {
    console.log("an error occured")
    console.log(err)
})

// api.object().createDir("/Doc2", "Doc1")
// .then(response => {
//     console.log(response)
// })
// .catch(err => {
//     console.log(err)
// })

