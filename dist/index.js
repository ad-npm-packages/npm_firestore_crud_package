"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const rxjs_1 = require("rxjs");
class DataService {
    constructor(firebaseConfig) {
        if (!(0, app_1.getApps)().length) {
            this.app = (0, app_1.initializeApp)(firebaseConfig);
        }
        else {
            this.app = (0, app_1.getApp)(); // if already initialized, use that one
        }
        this.firestore = (0, firestore_1.getFirestore)(this.app);
    }
    getData(collectionName) {
        const dataRef = (0, firestore_1.collection)(this.firestore, collectionName);
        return (0, rxjs_1.from)((0, firestore_1.getDocs)(dataRef)).pipe((0, rxjs_1.map)(snapshot => snapshot.docs.map(doc => (Object.assign({ id: doc.id }, doc.data())))));
    }
    getDataById(collectionName, id) {
        const dataRef = (0, firestore_1.doc)(this.firestore, collectionName, id);
        return (0, rxjs_1.from)((0, firestore_1.getDoc)(dataRef)).pipe((0, rxjs_1.map)(docSnapshot => {
            if (docSnapshot.exists()) {
                return Object.assign({ id: docSnapshot.id }, docSnapshot.data());
            }
            else {
                throw new Error('Document not found');
            }
        }));
    }
    addData(collectionName, data) {
        const dataRef = (0, firestore_1.collection)(this.firestore, collectionName);
        return (0, rxjs_1.from)((0, firestore_1.addDoc)(dataRef, data)).pipe((0, rxjs_1.map)(docRef => docRef.id));
    }
    deleteData(collectionName, id) {
        const dataRef = (0, firestore_1.doc)(this.firestore, collectionName, id);
        return (0, rxjs_1.from)((0, firestore_1.deleteDoc)(dataRef));
    }
    updateData(collectionName, id, data) {
        const dataRef = (0, firestore_1.doc)(this.firestore, collectionName, id);
        return (0, rxjs_1.from)((0, firestore_1.updateDoc)(dataRef, data));
    }
}
exports.default = DataService;
//# sourceMappingURL=index.js.map