
var firebaseConfig = {
      apiKey: "AIzaSyAionFl9STOsKwH-b5YGOwbezr1hGG9V0w",
      authDomain: "kwitter-cbced.firebaseapp.com",
      databaseURL: "https://kwitter-cbced-default-rtdb.firebaseio.com",
      projectId: "kwitter-cbced",
      storageBucket: "kwitter-cbced.appspot.com",
      messagingSenderId: "705350031412",
      appId: "1:705350031412:web:f9aa1e48a2292512979261"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
