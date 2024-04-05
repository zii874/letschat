const firebaseConfig = {
  apiKey: "AIzaSyBUHSPnThfurlaB3wfk6qxwRVaPJXJYrFE",
  authDomain: "kwitter-30c2b.firebaseapp.com",
  databaseURL: "https://kwitter-30c2b-default-rtdb.firebaseio.com",
  projectId: "kwitter-30c2b",
  storageBucket: "kwitter-30c2b.appspot.com",
  messagingSenderId: "773956093845",
  appId: "1:773956093845:web:8d7d570c1be6ffbc96989c"
}
firebase.initializeApp(firebaseConfig);




user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:1
});

document.getElementById("msg").value = "";
}

