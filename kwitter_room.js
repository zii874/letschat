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

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}







function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomNme(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();






function redirectToRoomNme(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
