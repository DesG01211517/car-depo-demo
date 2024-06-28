import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

/**
 * generic that gets all documents from a firestore database
 * @param {database} db
 * @param { } collectionName
 * @returns
 */
async function getAllDocuments(db, collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const documents = [];

  querySnapshot.forEach((doc) => {
    documents.push({ id: car.vin, ...doc.data() });
  });

  console.log(documents);
  return documents;
}
/**
 * Adds document to Firestore database
 * @param {database instance} db instance of Cloud Firestore Database
 * @param {string} collectionName The name of the db collection
 * @param {object} data An object representing a collection
 */

async function addDocument(db, collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { getAllDocuments, addDocument, updateDoc, deleteDoc };
