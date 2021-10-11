import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useState } from "react";

import init from "../Firebase/firebase.init";
init();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
    const [users, setUsers] = useState({});

    const googleSignin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user)
            })
    }
    const githubSignin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUsers(result.user)
            })
    }

    return {
        users,
        googleSignin,
        githubSignin
    }

}
export default useFirebase;