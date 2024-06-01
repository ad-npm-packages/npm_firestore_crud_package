# Firebase CRUD Package

This package provides a simplified way to perform CRUD (Create, Read, Update, Delete) operations in Firebase using RxJS observables. It's designed to make working with Firebase more intuitive and straightforward in your web and mobile applications.

## Installation

To install the Firebase CRUD package, run the following command:

```sh
npm install firebase_crud
```

## Usage

Here's a quick example to get you started with the Firebase CRUD package:

```typescript
import DataService from 'firebase_crud';


// Define an interface for your data model
interface User extends DocumentData {
  id?: string;
  name: string;
  email: string;
}

// Initialize the DataService with your data model and default collection
const userService = new DataService<User>(firebaseConfig, 'users');

// Function to add a new user
const addUser = () => {
  const subscription: Subscription = userService.addData({ name: 'John Doe', email: 'john.doe@example.com' })
    .subscribe({
      next: userId => console.log(`User added with ID: ${userId}`),
      error: error => console.error('Error adding user:', error),
      complete: () => subscription.unsubscribe()
    });
};

// Function to get all users
const getUsers = () => {
  const subscription: Subscription = userService.getData()
    .subscribe({
      next: users => console.log('Users:', users),
      error: error => console.error('Error fetching users:', error),
      complete: () => subscription.unsubscribe()
    });
};

// Function to get a user by ID
const getUserById = (id: string) => {
  const subscription: Subscription = userService.getDataById(id)
    .subscribe({
      next: user => console.log('User:', user),
      error: error => console.error('Error fetching user by ID:', error),
      complete: () => subscription.unsubscribe()
    });
};

// Function to update a user
const updateUser = (id: string, data: Partial<User>) => {
  const subscription: Subscription = userService.updateData(id, data)
    .subscribe({
      next: () => console.log(`User with ID: ${id} updated`),
      error: error => console.error('Error updating user:', error),
      complete: () => subscription.unsubscribe()
    });
};

// Function to delete a user
const deleteUser = (id: string) => {
  const subscription: Subscription = userService.deleteData(id)
    .subscribe({
      next: () => console.log(`User with ID: ${id} deleted`),
      error: error => console.error('Error deleting user:', error),
      complete: () => subscription.unsubscribe()
    });
};

// Example usage
addUser();
getUsers();
const userId = 'some-user-id'; // Replace with actual user ID
getUserById(userId);
updateUser(userId, { name: 'Jane Doe' });
deleteUser(userId);
```

## Features

- Easy to set up and integrate with Firebase.
- Simplified methods for CRUD operations using RxJS observables.
- Support for handling asynchronous operations with subscriptions.
- Secure data manipulation in line with Firebase's security rules.

## Contributing

Contributions to the Firebase CRUD package are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-new-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## License

MIT License

```

MIT License

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
```
