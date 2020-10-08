const { rosapi } = require("../lib")

const api = new rosapi("https://ros-api-v2.herokuapp.com")

api.token().set("eyJhbGciOiJSUzI1NiIsImtpZCI6IjIzNzA1ZmNmY2NjMTg4Njg2ZjhhZjkyYWJiZjAxYzRmMjZiZDVlODMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcm9zLWNsb3VkLWNjNzExIiwiYXVkIjoicm9zLWNsb3VkLWNjNzExIiwiYXV0aF90aW1lIjoxNjAyMTUzNTg3LCJ1c2VyX2lkIjoicExjekQzdWNVWk9CVWl4ZHpHZWx1cjAxejlGMyIsInN1YiI6InBMY3pEM3VjVVpPQlVpeGR6R2VsdXIwMXo5RjMiLCJpYXQiOjE2MDIxNTM1ODcsImV4cCI6MTYwMjE1NzE4NywiZW1haWwiOiJqb2huZG9lMnMzQGpvaG5tYWlsLm5ldCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJqb2huZG9lMnMzQGpvaG5tYWlsLm5ldCJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GxQnQFuhPexHbmx5X6Wt4xndE-UkQShHFiH5uYUZj7i_TpMZlOA8tqMDDvsJzZ6IrLujJA7mqD0VrFdNWgtOH_evdfaeMFTmRMnCWFP7Y95TTmCAVeWH384q4KXOh6O61tR5Ks4rQYhfR0NN7zPafeuxPaNOHYhIdQ98jK4TD7FhPsuVUpO8P7uh6SrUQuNpObKmvcHsnvmgxhrQPMrEZAtWo09OqJu5bZ97TX5djfmoIgrq3cMcOa5vL8E41CT4qtcVKMvqm35Xgd0KMb8J7kgrFooKPt7nDhiRLLxrhk8phN8LbwkUE-k82rZyhmfJ8_v-3M8WX642HXTNugGVng")

// api.user().login("tim@apple.com")
// .then(response => {
//     console.log(response)
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

api.object().createDir("Docs", null)
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})

