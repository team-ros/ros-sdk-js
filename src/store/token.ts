import firebase from "firebase/app"

class tokenStore {
    private firebase: firebase.auth.Auth | undefined

    setFirebase(firebase: firebase.auth.Auth) {
        this.firebase = firebase
    }

    async getToken() {

        if(!this.firebase) return false

        try {
            const userToken = await this.firebase.currentUser?.getIdToken()
            if(!userToken) return false
            return userToken
        }
        catch(err) {
            console.log(err)
            return false
        }
    }
}

export const store = new tokenStore