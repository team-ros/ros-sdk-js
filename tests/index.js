const { rosapi } = require("../lib")

const api = new rosapi("https://api.dev.ros-cloud.at")

api.token().set("eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlNjYzOGY4NDlkODVhNWVkMGQ1M2NkNDI1MzE0Y2Q1MGYwYjY1YWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcm9zLWNsb3VkLWNjNzExIiwiYXVkIjoicm9zLWNsb3VkLWNjNzExIiwiYXV0aF90aW1lIjoxNjAwNzc3MjczLCJ1c2VyX2lkIjoiU1loeFN0eUpWYVJSNjNtVmJUNnRCZkt1bVNwMSIsInN1YiI6IlNZaHhTdHlKVmFSUjYzbVZiVDZ0QmZLdW1TcDEiLCJpYXQiOjE2MDA3NzcyNzMsImV4cCI6MTYwMDc4MDg3MywiZW1haWwiOiI0NTY0NXQ0NXQyZmRnQHR3ZWVrLm5ldCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyI0NTY0NXQ0NXQyZmRnQHR3ZWVrLm5ldCJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.P7Ql7tU7DU0EY2jANEWlTNmTHm-4ji91HB_swj0kGUhgrHP7QF0VJPzAvSt-wbIwhpFyXQvTW_7EtqppGUkQXTDnrtrxwBnAdt8vfBsCk2bPs-uYUC87xlY1o1cHRnN4ui4SPTXBqCslmCTQy_vT5B6F6QG0Mi_Qqvk6_vQnNPr2JcDMIai4JnYnuxT61PyBRT623rLzPwFeCHnuceCWxNrk_FDt0UwcEA77AsIEezbyT-zL4RIFPPf_kZJixoutCsWw2RmKNpVI1wQeEcLffQDjwbb0245L7es0KPaTXfu9ygMP5dpbsmw6J7WmPvQnyHLW1IjYJ8aB3_sXVss6FA")

// api.user().authenticate("login")
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

