
# ros-sdk-js

This is the official JavaScript SDK for ROS Cloud. It is fully written in TypeScript 3.9.* and should be compatible with everything above and probably below.

  

# Index

This is the api documentation index. If you cannot find something in here that solves your problem, you can ask in the issues tab or contact us at support@ros-cloud.at .

  

-  [Initialize](#Initialization)

-  [User](#User)
	-  [Authenticate](#User-Authenticate)
	- [Delete](#User-Delete)
	- [Update](#User-Update)
-  [Object](#Object)

  

## Initialization

To initialize the sdk you have to provide it with the endpoint url of the api and the JWT token you got from firebase.

```js
import { API } from  'ros-sdk-js'

// initialize the API class with the API endpoint URL in the constructor
const  api = new  API("<API-ENDPOINT>")

// temporarily store the JWT Token in LocalStorage
api.storeToken("<JWT-TOKEN>")

/*

API methods ...

*/

```
## User

The User method allows you to modify the current logged in user. Specifically it allows you to create, delete and edit a user.

  

# User-Index

-  [Authenticate (create) ](#User-Authenticate)

-  [Delete](#User-Delete)

-  [Edit](#User-Edit)

  

## User-Authenticate

The User-Authenticate method allows you to create the user outside of firebase inside the ROS-Database.

To use it you only have to provide the state of this method call "login" | "register" and of course initialize the API Instance explained above.

  

```js
api.user().authenticate("login" | "register")
.then( result  => {
	if( result.status ) {
		// Authentication was successful
		// ...
	}
	if( !result.status ) {
		// Authentication was not successful
		// ...
	}
})
.catch(err => { /* Error Handling */})

```

  

## User-Delete
The User-Delete method allows you to delete the currently logged in user.
If you call this method you also have to call the equivilant method in firebase.

```js
api.user().delete()
.then(response => {
	if( response.status ) {
		// User was successfully deleted
	}
	if( !response.status ) {
		// User couldn't be deleted
	}
})
.catch(err => { /* Error Handling */})
```

## User-Edit (deprecated)
To edit a user it is recommended that you make this api call directly to firebase. For the purpose of backwards compatibility it is still in the API and this documentation.

```js
api.user().edit({
	email: <NEW EMAIL ADDRESS>,
	phoneNumber: <NEW PHONE NUMBER>,
	password: <NEW PASSWORD>,
	displayName: <NEW NAME>,
	phontURL: <NEW PROFILE PICTURE URL>
})
.then( response => {
	if( response.status ) {
		// User was successfully updated
	}
	if( !response.status ) {
		// User couldn't be updated
	}
})
.catch(err => { /* Error Handling */})
```