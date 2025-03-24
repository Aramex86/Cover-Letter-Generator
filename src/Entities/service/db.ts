import { UserType } from "../types";

let request: IDBOpenDBRequest;
let db: IDBDatabase;
const version = 1;

export interface User {
  id: string;
  name: string;
  email: string;
}

export enum Stores {
  Users = "users",
}

export const initDB = async (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    // open the connection
    request = indexedDB.open("myDB", version);

    request.onupgradeneeded = (event) => {
      db = (event.target as IDBOpenDBRequest).result;

      // if the data object store doesn't exist, create it
      if (!db.objectStoreNames.contains(Stores.Users)) {
        console.log("Creating users store");
        db.createObjectStore(Stores.Users, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
      // no need to resolve here
    };

    request.onsuccess = () => resolve(request.result);

    request.onerror = () => reject(request.error);
  });
};

export const getUser = async (): Promise<User[]> => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(Stores.Users, "readonly");
    const store = transaction.objectStore(Stores.Users);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};
export const getUserById = async (id: string): Promise<User[]> => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(Stores.Users, "readonly");
    const store = transaction.objectStore(Stores.Users);
    const request = store.get(id);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};
export const addUser = async (user: UserType): Promise<void> => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(Stores.Users, "readwrite");
    const store = transaction.objectStore(Stores.Users);
    const request = store.add(user);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};
export const updateUser = async (user: UserType): Promise<void> => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(Stores.Users, "readwrite");
    const store = transaction.objectStore(Stores.Users);
    const request = store.put(user);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};

// export const deleteUser = async (user: UserType): Promise<void> => {
//   const db = await initDB();
//   return new Promise((resolve, reject) => {
//     const transaction = db.transaction(Stores.Users, "readwrite");
//     const store = transaction.objectStore(Stores.Users);
//     const request = store.delete(user);

//     request.onsuccess = () => resolve();
//     request.onerror = () => reject(request.error);
//   });
// };
