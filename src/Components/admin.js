import React from "react"
import firebase from "firebase";
import {Link,Redirect} from "react-router-dom";
import {
    FirebaseAuthProvider,
    IfFirebaseAuthed,
    IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import '../ComponentsCSS/admin.css'

export default class admin extends React.Component{

    
    constructor(props) {
        super(props);
        this.auth = false
        this.firebaseConfig = {
            apiKey: "AIzaSyCLVMM8vmHBNT--ldKCBZmmUi5IEv-Ed1o",
            authDomain: "webportf-f8d66.firebaseapp.com",
            databaseURL: "https://webportf-f8d66.firebaseio.com",
            projectId: "webportf-f8d66",
            storageBucket: "webportf-f8d66.appspot.com",
            messagingSenderId: "26027074277",
            appId: "1:26027074277:web:448a6046ae80ce973aea0c",
            measurementId: "G-LXZBXVH5S6"
        };

    }
    
componentDidMount() {


}

    render() {

        return (
            <><div className={'loginPage'}>

                <h1 id={'title'}> ADMIN Login</h1>

                <FirebaseAuthProvider {...this.firebaseConfig} firebase={firebase}>
                    <div className = {'btnContainer'}>
                       <Link to={'/'}> <button id = {'back'}>
                            Back to Home

                       </button></Link>
                        <button id = {'Sbutton'}
                            onClick={() => {
                                const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                                firebase.auth().signInWithPopup(googleAuthProvider);
                            }}
                        >
                            Sign In with Google
                        </button>

                        <button id = {'Obutton'}
                            onClick={() => {
                                firebase.auth().signOut();
                            }}
                        >

                            Sign Out
                        </button>


                        <div>

                            <IfFirebaseAuthedAnd
                                filter={({ providerId }) => providerId !== "anonymous"}
                            >
                                {({ providerId }) => {
                                    return <div id = {'auth'}>You are authenticated with {providerId}</div>;
                                }}
                            </IfFirebaseAuthedAnd>
                        </div>
                        <IfFirebaseAuthed>
                            {() => {
                                return <Link to={'/dashboard'} id={'Link'} >Press To Be Redirected</Link>
                            }}
                        </IfFirebaseAuthed>
                    </div>
                </FirebaseAuthProvider>




                </div>

                </>
        )

    }
};