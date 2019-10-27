// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyCIA1Ye7SPqXsmaGZdZPfm1ecJu7IqUagY',
	authDomain: 'cetarus-baas.firebaseapp.com',
	databaseURL: 'https://cetarus-baas.firebaseio.com',
	projectId: 'cetarus-baas'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
