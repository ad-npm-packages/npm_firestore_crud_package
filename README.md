Certainly! Here's the entire README.md content enclosed within triple backticks for easy copying:

perlCopy code
# Firestore CRUD Service

    A simple and efficient Node.js package for performing CRUD (Create, Read, Update, Delete) operations on Google Firestore. This package provides a generic `DataService` class that can be used with any Firestore collection.
    
    ## Features
    
    - Easy-to-use CRUD operations for Firestore.
    - Generic implementation that can work with any data structure.
    - TypeScript support for strong typing and IntelliSense in IDEs.
    
    ## Installation
    
    To install the package, run the following command in your Node.js project:
    
    ```bash
    npm install @addisu/firestore_crud
    
Setup
Before using the DataService, ensure you have set up Firebase in your project and have your Firebase configuration object ready.

Usage
Here's a quick example to get you started:

typescriptCopy code
import DataService from '@addisu/firestore_crud';
    import { DocumentData } from 'firebase/firestore';
    
    // Define your data type (optional)
    interface MyData extends DocumentData {
      name: string;
      age: number;
    }
    
    // Firebase configuration
    const firebaseConfig = {
      // your firebase configuration object
    };
    
    // Initialize the DataService
    const dataService = new DataService<MyData>(firebaseConfig);
    
    // Example usage
    async function demo() {
      // Add data
      const docId = await dataService.addData('myCollection', { name: 'John Doe', age: 30 });
    
      // Get data
      const data = await dataService.getData('myCollection');
      console.log(data);
    
      // Update data
      await dataService.updateData('myCollection', docId, { age: 31 });
    
      // Delete data
      await dataService.deleteData('myCollection', docId);
    }
    
    demo();
    
API Reference
getData(collectionName: string): Promise<T[]>
Fetches all documents from the specified collection.

getDataById(collectionName: string, id: string): Promise<T>
Fetches a single document by its ID from the specified collection.

addData(collectionName: string, data: T): Promise<string>
Adds a new document to the specified collection and returns the new document's ID.

updateData(collectionName: string, id: string, data: Partial<T>): Promise<void>
Updates the specified fields of a document in the specified collection.

deleteData(collectionName: string, id: string): Promise<void>
Deletes a document from the specified collection.

Contributing
Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

License
ISC

This README is a basic template and should be modified to better fit your package's functionality and usage.

cssCopy code

    This format is ready for use in a Markdown file, such as a `README.md` for a GitHub repository.
    