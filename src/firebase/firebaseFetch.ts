import { db } from '../firebase/firebase';
import { collection, query, getDocs, orderBy, doc, setDoc, getDoc, addDoc } from "firebase/firestore";
import { Learneds, Projects } from '../types/types';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


const projectQuery = query(collection(db, 'projects'), orderBy('date', 'desc'));

const learnedQuery = query(collection(db, 'learned'));

export async function FetchProjects() {
    const querySnapshot = await getDocs(projectQuery)
    const learnedData: Projects[] = [];

    querySnapshot.forEach((doc) => {
        learnedData.push({ id: doc.id, ...doc.data() } as Projects);
    })
    return learnedData
}

export async function InsertProject(projectData: Projects): Promise<void> {
    const projectDocRef = doc(db, 'projects', projectData.id);
    try {
        const projectDocSnapshot = await getDoc(projectDocRef);
        if (projectDocSnapshot.exists()) {
            throw `Project with id ${projectData.id} already exists`
        }

        await setDoc(projectDocRef, projectData);
        console.log('Project inserted successfully:', projectData);
    } catch (error) {
        throw error;
    }
}


export async function FetchLearned() {
    const querySnapshot = await getDocs(learnedQuery)
    const projectsData: Learneds[] = [];

    querySnapshot.forEach((doc) => {
        projectsData.push({ id: doc.id, ...doc.data() } as Learneds);
    })
    return projectsData
}

export async function InsertLearned(projectData: Learneds): Promise<void> {
    const projectDocRef = doc(db, 'learned', projectData.id);
    try {
        const projectDocSnapshot = await getDoc(projectDocRef);
        if (projectDocSnapshot.exists()) {
            throw `Project with id ${projectData.id} already exists`
        }

        await setDoc(projectDocRef, projectData);
        console.log('Project inserted successfully:', projectData);
    } catch (error) {
        throw error;
    }
}

export async function LoginUser(userId: string, userPwd: string) {
    const auth = getAuth();

    try {
        const userCredential = await signInWithEmailAndPassword(auth, userId, userPwd);
        const user = userCredential.user;
        // console.log('User logged in:', user.uid);
        return user;
    } catch (error) {
        // Handle login error
        console.error('Login failed:');
        throw error;
    }
}

export async function RegisterUser(email: string, password: string) {
    const auth = getAuth();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        throw error;
    }
};