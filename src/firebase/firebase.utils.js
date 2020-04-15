import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCnhxQ_aLIBKi833Xe1qHUFvIpq7zolBDw",
	authDomain: "e-commerce-db-596bb.firebaseapp.com",
	databaseURL: "https://e-commerce-db-596bb.firebaseio.com",
	projectId: "e-commerce-db-596bb",
	storageBucket: "e-commerce-db-596bb.appspot.com",
	messagingSenderId: "200994850967",
	appId: "1:200994850967:web:8fa2e2954770f7cfa0c1d2",
	measurementId: "G-0CPEP0L7HM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
