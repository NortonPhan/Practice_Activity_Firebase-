const firebaseConfig = {
    apiKey: "AIzaSyBOjvw0NYbrGwu3DwcelKh9cXYY0Qw0qXQ",
    authDomain: "practiceactivity1-b0bb3.firebaseapp.com",
    databaseURL: "https://practiceactivity1-b0bb3-default-rtdb.firebaseio.com",
    projectId: "practiceactivity1-b0bb3",
    storageBucket: "practiceactivity1-b0bb3.appspot.com",
    messagingSenderId: "655177344959",
    appId: "1:655177344959:web:6449011dc0a6c5a981630a",
    measurementId: "G-LL4KDTELMH"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  function addUser()
  {
    username = document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({
        colors : "rainbow"
    });
    console.log("Name Added Sucessfully!");
  }