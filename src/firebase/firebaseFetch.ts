import { db } from '../firebase/firebase';
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { Projects } from '../types/example';


const q = query(collection(db, 'projects'), orderBy('date', 'desc')); export async function FetchProjects() {
    const querySnapshot = await getDocs(q)
    const projectsData: Projects[] = [];

    querySnapshot.forEach((doc) => {
        projectsData.push({ id: doc.id, ...doc.data() } as Projects);
    })
    return projectsData
}