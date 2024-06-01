import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { Firestore, getFirestore, collection, getDocs, addDoc, doc, deleteDoc, updateDoc, getDoc, DocumentData, DocumentReference, UpdateData } from 'firebase/firestore';
import { Observable, from, map, catchError, throwError } from 'rxjs';

class DataService<T extends DocumentData> {
  private app: FirebaseApp;
  private firestore: Firestore;
  private collectionName: string;

  constructor(firebaseConfig: Object, collectionName: string) {
    if (!getApps().length) {
      this.app = initializeApp(firebaseConfig);
    } else {
      this.app = getApp();
    }
    this.firestore = getFirestore(this.app);
    this.collectionName = collectionName;
  }

  private getCollectionRef() {
    return collection(this.firestore, this.collectionName);
  }

  private getDocRef(id: string) {
    return doc(this.firestore, this.collectionName, id);
  }

  getData(): Observable<T[]> {
    const dataRef = this.getCollectionRef();
    return from(getDocs(dataRef)).pipe(
      map(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as unknown as T)),
      catchError(error => throwError(() => new Error(`Failed to fetch data: ${error.message}`)))
    );
  }

  getDataById(id: string): Observable<T> {
    const dataRef = this.getDocRef(id);
    return from(getDoc(dataRef)).pipe(
      map(docSnapshot => {
        if (docSnapshot.exists()) {
          return { id: docSnapshot.id, ...docSnapshot.data() } as unknown as T;
        } else {
          throw new Error('Document not found');
        }
      }),
      catchError(error => throwError(() => new Error(`Failed to fetch document by ID: ${error.message}`)))
    );
  }

  addData(data: T): Observable<string> {
    const dataRef = this.getCollectionRef();
    return from(addDoc(dataRef, data)).pipe(
      map(docRef => docRef.id),
      catchError(error => throwError(() => new Error(`Failed to add data: ${error.message}`)))
    );
  }

  deleteData(id: string): Observable<void> {
    const dataRef = this.getDocRef(id);
    return from(deleteDoc(dataRef)).pipe(
      catchError(error => throwError(() => new Error(`Failed to delete document: ${error.message}`)))
    );
  }

  updateData(id: string, data: UpdateData<T>): Observable<void> {
    const dataRef = this.getDocRef(id) as DocumentReference<DocumentData, T>;
    return from(updateDoc(dataRef, data)).pipe(
      catchError(error => throwError(() => new Error(`Failed to update document: ${error.message}`)))
    );
  }
}

export default DataService;
