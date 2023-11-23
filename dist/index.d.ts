import { DocumentData, UpdateData } from 'firebase/firestore';
import { Observable } from 'rxjs';
declare class DataService<T extends DocumentData> {
    private app;
    private firestore;
    constructor(firebaseConfig: Object);
    getData(collectionName: string): Observable<T[]>;
    getDataById(collectionName: string, id: string): Observable<T>;
    addData(collectionName: string, data: T): Observable<string>;
    deleteData(collectionName: string, id: string): Observable<void>;
    updateData(collectionName: string, id: string, data: UpdateData<T>): Observable<void>;
}
export default DataService;
