# ROS-sdk-js

This is the official ROS Javascript SDK.

## Usage

This short guide introduces you to the basics of this library.

# Initialization

To initialize the SDK you first have to import it and set the endpoint in the constructor.
To be able to use the API you need a valid token. This you can get from firebase.
After storing the token locally in state, you should save it into localStorage.
```js
import { rosApi } from "ros-sdk-js"

const api = new rosApi("https://api.dev.ros-cloud.at")
api.token().setToken("<JWT-TOKEN>")
api.token().saveToken()
```

# Authentiation
If your 