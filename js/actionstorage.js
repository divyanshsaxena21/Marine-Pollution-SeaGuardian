import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Firebase configuration (replace with your own)
const firebaseConfig = {
  apiKey: "AIzaSyAjzzE9G53NisbxWA8D4DTgPx5cFnGqjZQ",
  authDomain: "sea-guardian-412209.firebaseapp.com",
  projectId: "sea-guardian-412209",
  storageBucket: "sea-guardian-412209.appspot.com",
  messagingSenderId: "757450204746",
  appId: "1:757450204746:web:79894359eb7646afd1e8b3",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

// Function to handle form submission
function submitForm() {
  const form = document.getElementById('report-form');
  const userName = form.elements['userName'].value;
  const date = form.elements['date'].value;
  const address = form.elements['address'].value;
  const contact = form.elements['contact'].value;
  const email = form.elements['email'].value;
  const pollutionLocation = form.elements['location-pollution'].value;
  const latitude = form.elements['latitude'].value;
  const longitude = form.elements['longitude'].value;
  const pollutionType = form.elements['pollution'].value;
  const areaOfPollution = form.elements['pollution-area'].value;
  const polybagsPresent = form.elements['polybags-present'].value;
  const imageInput = form.elements['image'];

  // Upload image to Firebase Storage
  const imageFile = imageInput.files[0];
  const imageRef = storage.ref(`${userName}/${Date.now()}_${imageFile.name}`);
  const imageUploadTask = imageRef.put(imageFile);

  imageUploadTask.then(snapshot => {
    console.log('Image uploaded successfully.');

    // Create text file content
    const textFileContent = `User: ${userName}\nDate: ${date}\nAddress: ${address}\nContact: ${contact}\nEmail: ${email}\nLocation: ${pollutionLocation}\nLatitude: ${latitude}\nLongitude: ${longitude}\nPollution Type: ${pollutionType}\nArea of Pollution: ${areaOfPollution}\nPolybags Present: ${polybagsPresent}`;
    console.log('Text file content:', textFileContent);

    const dbRef = database.ref(`${userName}/incident-report.txt`);
    dbRef.set(textFileContent)
      .then(() => {
        alert('Text file uploaded to Realtime Database.');
      })
      .catch(error => {
        alert('Error uploading text to Realtime Database:', error.message);
      });
  }).catch(error => {
    alert('Error uploading image:', error.message);
  });
}