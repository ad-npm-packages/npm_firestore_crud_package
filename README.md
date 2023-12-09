# Firebase CRUD Package

This package provides a simplified way to perform CRUD (Create, Read, Update, Delete) operations in Firebase. It's designed to make working with Firebase more intuitive and straightforward in your web and mobile applications.

## Installation

To install the Firebase CRUD package, run the following command:

``` npm install firebase_crud```
## Usage

Here's a quick example to get you started with the Firebase CRUD package:

```import DataService from 'firebase_crud';```


``` const db = new DataService(yourFirebaseConfig); ```

// Create data

``` db.create('collectionName', { field: 'value' }); ```

// Read data

``` db.read('collectionName', 'documentId'); ```

// Update data

``` db.update('collectionName', 'documentId', { updatedField: 'newValue' }); ```

// Delete data

``` db.delete('collectionName', 'documentId'); ```

## Features

- Easy to set up and integrate with Firebase.
- Simplified methods for CRUD operations.
- Realtime data synchronization capabilities.
- Support for batch operations.
- Secure data manipulation in line with Firebase's security rules.

## Contributing

Contributions to the Firebase CRUD package are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch: ``` git checkout -b my-new-feature ```
3. Make your changes and commit them: ``` git commit -am 'Add some feature' ```
4. Push to the branch: ``` git push origin my-new-feature ```
5. Submit a pull request.

## License

MIT License

Copyright (c) 2023 Addisu Alemu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
