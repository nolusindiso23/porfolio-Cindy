// Initialize Firebase
var firebaseconfig={
    apiKey: "AIzaSyAivqJ5-RfRGjPKtKY-1OKr4f3wneot7HE",
    authDomain: "contactform-n.firebaseapp.com",
    databaseURL: "https://contactform-n.firebaseio.com",
    projectId: "contactform-n",
    storageBucket: "contactform-n.appspot.com",
    messagingSenderId: "569064556290",
    appId: "1:569064556290:web:350964a482edf6837a641b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseconfig);

// Reference messages collection
var messageRef = firebase.database().ref('message');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

// Get values
var name = getInputVal('name');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

// Save message
saveMessage(name, company, email, phone, message);

// Show alert

}

// Function to get get form values
function.getInputValid(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company:company,
        email:email,
        phone:phone,
        message:message,
    });
}