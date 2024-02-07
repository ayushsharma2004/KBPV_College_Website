import { admin } from "../DB/firestore.js";
import dotenv from 'dotenv';

//configure env
dotenv.config();

const db = admin.firestore();

export const createData = async (collectionName, docId, data) => {
    const create = await db.collection(collectionName).doc(docId).set(data);
    return create;
}

export const readAllData = async (collectionName) => {
    //Retrieve user data
    const querySnapshot = await db
        .collection(collectionName)
        .get();
    let queryData = [];
    querySnapshot.forEach((doc) => {
        queryData.push(doc.data());
    });
    return queryData;
}

export const readSingleData = async (collectionName, docId) => {
    const userRef = await db.collection(collectionName).doc(docId).get();
    return userRef.data();
}

export const readFieldData = async (collectionName, docId, fieldName) => {
    try {
        const docRef = await db.collection(collectionName).doc(docId).get();

        if (docRef.exists) {
            const fieldValue = docRef.get(fieldName);
            return fieldValue;
        } else {
            console.log("Document does not exist");
            return null;
        }
    } catch (error) {
        console.error("Error reading field:", error);
        throw error;
    }
}

export const readChaptersFieldData = async (collectionName, docId, fieldName1, fieldName2) => {
    try {
        const docRef = await db.collection(collectionName).doc(docId).get();

        if (docRef.exists) {
            const fieldValue1 = docRef.data()[fieldName1];

            // Check if fieldValue1 is an array before trying to match fieldName2
            if (Array.isArray(fieldValue1)) {
                const matchingSubject = fieldValue1.find(item => item.subject_name === fieldName2);

                if (matchingSubject) {
                    return matchingSubject.chapters;
                } else {
                    console.log(`Subject '${fieldName2}' not found`);
                    return null;
                }
            } else {
                console.log(`Field '${fieldName1}' is not an array`);
                return null;
            }
        } else {
            console.log("Document does not exist");
            return null;
        }
    } catch (error) {
        console.error("Error reading field:", error);
        throw error;
    }
}

export const updateChapterUrl = async (collectionName, docId, fieldName1, subjectName, chapterName, newChapterUrl) => {
    try {
        const docRef = await db.collection(collectionName).doc(docId).get();

        if (docRef.exists) {
            const subjects = docRef.data()[fieldName1];

            if (Array.isArray(subjects)) {
                const matchingSubject = subjects.find(subject => subject.subject_name === subjectName);

                if (matchingSubject) {
                    const matchingChapter = matchingSubject.chapters.find(chapter => chapter.chapter_name === chapterName);

                    if (matchingChapter) {
                        // Update the chapter URL
                        matchingChapter.chapter_url = newChapterUrl;

                        // Update the document in Firestore
                        await db.collection(collectionName).doc(docId).update({
                            [`${fieldName1}`]: subjects
                        });

                        return {
                            success: true,
                            message: `Chapter URL updated successfully for '${chapterName}' in subject '${subjectName}' from '${docId}'`
                        };
                    } else {
                        console.log(`Chapter '${chapterName}' not found in subject '${subjectName}'`);
                        return {
                            success: false,
                            message: `Chapter '${chapterName}' not found in subject '${subjectName}'`
                        };
                    }
                } else {
                    console.log(`Subject '${subjectName}' not found`);
                    return {
                        success: false,
                        message: `Subject '${subjectName}' not found`
                    };
                }
            } else {
                console.log(`Field '${fieldName1}' is not an array`);
                return {
                    success: false,
                    message: `Field '${fieldName1}' is not an array`
                };
            }
        } else {
            console.log("Document does not exist");
            return {
                success: false,
                message: "Document does not exist"
            };
        }
    } catch (error) {
        console.error("Error updating chapter URL:", error);
        throw error;
    }
}

export const updateData = async (collectionName, docId, key, value) => {
    const updateObject = {};
    updateObject[key] = value;
    const userRef = await db.collection(collectionName).doc(docId).update(updateObject);
    return userRef
}


export const matchData = async (collectionName, key, value) => {
    const querySnapshot = await db
        .collection(collectionName)
        .where(key, '==', value)
        .get();
    return querySnapshot;
}

export const matchTwoData = async (collectionName, key1, value1, key2, value2) => {
    const querySnapshot = await db
        .collection(collectionName)
        .where(key1, '==', value1)
        .where(key2, '==', value2)
        .get();
    return querySnapshot;
}