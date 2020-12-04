import firebase from "firebase";

export type Auth = firebase.auth.Auth;
export type Firestore = firebase.firestore.Firestore;

export type FirebaseUser = firebase.User;
export type UserCredential = firebase.auth.UserCredential;

export interface PageAuth {
  user?: FirebaseUser|null;
  initializing?: boolean;
}

export type DocumentData = firebase.firestore.DocumentData;