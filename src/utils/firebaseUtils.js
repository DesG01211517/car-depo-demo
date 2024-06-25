import { collection, getDocs, addDoc } from "firebase/firestore";

/**
 * generic that gets all documents from a firestore database
 * @param {*} db
 * @param {*} collectionName
 * @returns
 */
async function getAllDocuments(db, collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const documents = [];
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    documents.push({ id: doc.id, ...doc.data() });
  });
  console.log(documents);
  return documents;
}

function addDocument(db, collectionName, data) {
  // try {
  //   const docRef = await addDoc(collection(db, collectionName), data) {
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
}

export { getAllDocuments, addDocument };
