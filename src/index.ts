import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { Firestore, getFirestore, collection, getDocs, addDoc, doc, deleteDoc, updateDoc, getDoc, DocumentData, DocumentReference, UpdateData } from 'firebase/firestore';
import { Observable, from, map } from 'rxjs';

class DataService<T extends DocumentData> {
  private app: FirebaseApp;
  private firestore: Firestore;

  constructor(firebaseConfig: Object) {
    if (!getApps().length) {
      this.app = initializeApp(firebaseConfig);
    } else {
      this.app = getApp(); // if already initialized, use that one
    }
    this.firestore = getFirestore(this.app);
  }

  getData(collectionName: string): Observable<T[]> {
    const dataRef = collection(this.firestore, collectionName);
    return from(getDocs(dataRef)).pipe(
      map(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as unknown as T))
    );
  }

  getDataById(collectionName: string, id: string): Observable<T> {
    const dataRef = doc(this.firestore, collectionName, id);
    return from(getDoc(dataRef)).pipe(
      map(docSnapshot => {
        if (docSnapshot.exists()) {
          return { id: docSnapshot.id, ...docSnapshot.data() } as unknown as T;
        } else {
          throw new Error('Document not found');
        }
      })
    );
  }

  addData(collectionName: string, data: T): Observable<string> {
    const dataRef = collection(this.firestore, collectionName);
    return from(addDoc(dataRef, data)).pipe(
      map(docRef => docRef.id)
    );
  }

  deleteData(collectionName: string, id: string): Observable<void> {
    const dataRef = doc(this.firestore, collectionName, id);
    return from(deleteDoc(dataRef));
  }

  updateData(collectionName: string, id: string, data: UpdateData<T>): Observable<void> {
    const dataRef = doc(this.firestore, collectionName, id) as DocumentReference<DocumentData, T>;
    return from(updateDoc(dataRef, data));
  }
}

export default DataService;
