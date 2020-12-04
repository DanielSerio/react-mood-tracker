import { createContext, useContext, useEffect, useState } from 'react';
import firebase from './config';
import { Auth, Firestore, PageAuth, FirebaseUser } from './types';

export const auth: Auth = firebase.auth();
export const db: Firestore = firebase.firestore();

export async function login(email: string, password: string): Promise<void> {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (e) { return await e; }
}

export async function logout(): Promise<void> {
  try {
    await auth.signOut();
  } catch (e) { return await e; }
}

const userContext = createContext<PageAuth>({
  user: null,
  initializing: true
});

export const useSession = () => {
  const { user } = useContext(userContext);
  return user
};

export const useAuth = () => {
  const [state, setState] = useState(() => { 
    const user = firebase.auth().currentUser;

    return { initializing: !user, user, } 
  })
  function onChange(user: FirebaseUser|null) {
    setState({ initializing: false, user })
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange)
    return () => unsubscribe()
  }, [])

  return state
};
