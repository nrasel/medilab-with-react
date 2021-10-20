import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    }


    const signUpUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user)
                window.location.reload()
                updateProfile(auth.currentUser, {
                    displayName: name
                })
            })
            .finally(() => setIsLoading(false))

    }


    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user);
                window.location.reload()
            })
            .finally(() => setIsLoading(false))

    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, [auth])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        signUpUser,
        signInUser
    }
}
export default useFirebase;