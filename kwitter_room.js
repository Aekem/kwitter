
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyBHDB2Rd5Dbx38_NZh9IOCcIC_zUhW0P_0",
      authDomain: "kwitter-c8e90.firebaseapp.com",
      databaseURL: "https://kwitter-c8e90-default-rtdb.firebaseio.com",
      projectId: "kwitter-c8e90",
      storageBucket: "kwitter-c8e90.appspot.com",
      messagingSenderId: "623831690615",
      appId: "1:623831690615:web:d4cc68c82e0710e740c572"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome "+user_name+"!";
    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }
function getData(){
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
//localStorage.setItem("room_name", room_name);
console.log("room_name"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;      
});});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


