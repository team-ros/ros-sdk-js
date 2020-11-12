import firebaseApp from "firebase/app"


export interface IFirebaseOptions {
    apiKey: string
    authDomain: string
    databaseURL?: string
    projectId: string
    storageBucket?: string
    messagingSenderId: string
    appId: string
    measurementId: string
    authPersistance?: 'LOCAL' | "SESSION" | "NONE"
}

class firebaseStore {

    public firebase = firebaseApp

    public async initializeApp(options: IFirebaseOptions) {
        try {
            this.firebase.initializeApp(options)
            await this.firebase.auth().setPersistence(options.authPersistance ? this.firebase.auth.Auth.Persistence[options.authPersistance] : this.firebase.auth.Auth.Persistence.LOCAL)
        }
        catch(err) {
            console.log("ROS-SDK-ERROR", err)
        }
    }
}

export const firebase =  new firebaseStore()
