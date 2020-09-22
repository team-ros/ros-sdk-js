# ROS-sdk-js

Das ist die offizielle ROS-SDK (js/ts) und ist dafür gedacht, Applikationen auf Basis der ROS-Cloud Plattform zu entwickeln.

# Benutzung

Um die API zu initialisieren muss sie importiert und initialisiert werden.
Der Endpoint (z.B. https://api.dev.ros-cloud.at) muss im Constructor als Argument angegeben werden.

```js
import { rosapi } from "ros-sdk-js"

const api = new rosapi("<ENDPOINT>")
```

# Token Speichern
Wenn der Token mithilfe von Firebase erstellt wurde, muss er in der sdk gespeichert werden, um die API auch nutzen zu können.

```js
try {
    api.token().set("token")
}
catch(err) {
    // wenn der token invalid ist
}
```

# Token löschen
Wenn der Benutzer sich ausloggt, muss der Token auch gelöscht werden.

```js
api.token().delete()
```

# Authentifizierung
Wenn ein Benutzer sich neu registriert, muss zuerst ein neuer S3 Bucket erstellt werden. 

Benutzer neu Registrieren:
```js
api.user().authenticate("register")
.then(response => {
    // example response if the user is new
    {
        status: true,
        bucket: true,
        database: true,
        user_data: {
            iss: 'https://securetoken.google.com/ros-cloud-cc711',
            aud: 'ros-cloud-cc711',
            auth_time: 1600772629,
            user_id: 'ZxMByPJPPbSt0mdP4ukFrhNEtDs2',
            sub: 'ZxMByPJPPbSt0mdP4ukFrhNEtDs2',
            iat: 1600772629,
            exp: 1600776229,
            email: 'johndoewe23@johnmail.net',
            email_verified: false,
            firebase: { 
                identities: [Object], 
                sign_in_provider: 'password' 
            },
            uid: 'ZxMByPJPPbSt0mdP4ukFrhNEtDs2'
        }
    }

    // example response if the user already exists
    { status: false, user: 'existing' }
})
```

Benutzer einloggen:
```js
api.user().authenticate("login")
.then(response => {
    // example response
    {
        status: true,
        login: true,
        user_data: {
            iss: 'https://securetoken.google.com/ros-cloud-cc711',
            aud: 'ros-cloud-cc711',
            auth_time: 1600773270,
            user_id: 'biCRN3fA6mYF0TRemT1QQoW5T833',
            sub: 'biCRN3fA6mYF0TRemT1QQoW5T833',
            iat: 1600773270,
            exp: 1600776870,
            email: 'gregrgqergegr@gmail.com',
            email_verified: false,
            firebase: { 
                identities: [Object], 
                sign_in_provider: 'password' 
                },
            uid: 'biCRN3fA6mYF0TRemT1QQoW5T833'
        },
        storage_data: []
    }

    // Example response if the user isn't registered yet
    { status: false, user: 'not existing' }
})
```






