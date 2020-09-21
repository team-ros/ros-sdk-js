const { rosapi } = require("../lib")
const { tokenStore } = require("../lib/store")

const api = new rosapi("https://api.dev.ros-cloud.at")

api.token().set("eyJhbGciOiJSUzI1NiIsImtpZCI6IjczNzVhZmY3MGRmZTNjMzNlOTBjYTM2OWUzYTBlZjQxMzE3MmZkODIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcm9zLWNsb3VkLWNjNzExIiwiYXVkIjoicm9zLWNsb3VkLWNjNzExIiwiYXV0aF90aW1lIjoxNjAwNjAwMzg1LCJ1c2VyX2lkIjoiVmdMZkVFdENER1BUZWNHeWJLQlI5TVFrTnpYMiIsInN1YiI6IlZnTGZFRXRDREdQVGVjR3liS0JSOU1Ra056WDIiLCJpYXQiOjE2MDA2MDAzODUsImV4cCI6MTYwMDYwMzk4NSwiZW1haWwiOiJtb2hoYW1lZGxlZUBsZWVtYWlsLm5ldCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2hoYW1lZGxlZUBsZWVtYWlsLm5ldCJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.An_vKVa9PRpfnVOOK_cj60oLhXBGDUetfZWVPAq76x-3DyecPC_oSrMjxJyGq2wznfJdgll9aJjaswZHU6GoMfv_5-vQhcfIO0JpImoO634ECVnCqKjNlJGcxMWSq_W3kNMDOQuaon4H8lk2PsV60sda9F8QYm-KvRU3sTlt-MsMUZ7h01vo7hiU4kRUfY7xs1_fJR5pQKK40VXgsssPrLRwnPOf-chUV6UoDcf3SHIibcIOxD6vjV4Xm7uV4DgXSgQx4rwmzSwPiiAvbJiI0OjHbpXQNXxTgSY1yqk67li4leO85pIfdZ62uYfq77DYao82oT5on-WuEofz---TKw")

api.user().authenticate("login")
.then(response => {
    console.log(response)
    console.log("everything went awesome")
})
.catch(err => {
    console.log("an error occured")
    console.log(err)
})

api.object().createDir("/", "documents")
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})

