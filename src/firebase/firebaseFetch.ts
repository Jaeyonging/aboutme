import { db } from '../firebase/firebase';
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { Projects } from '../types/example';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


const projectQuery = query(collection(db, 'projects'), orderBy('date', 'desc'));


export async function FetchProjects() {
    const querySnapshot = await getDocs(projectQuery)
    const projectsData: Projects[] = [];

    querySnapshot.forEach((doc) => {
        projectsData.push({ id: doc.id, ...doc.data() } as Projects);
    })
    return projectsData
}

export async function LoginUser(userId: string, userPwd: string) {
    const auth = getAuth();

    try {
        const userCredential = await signInWithEmailAndPassword(auth, userId, userPwd);
        const user = userCredential.user;
        console.log('User logged in:', user.uid);
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