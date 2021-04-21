//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
    
function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }   
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
      childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
nams=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+nams+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +" </span> </button> <hr>;"
row=name_tag+message_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
    
getData();
function updatelike(message_id){
console.log(message_id);
button_likes=message_id;
likes=document.getElementById(button_likes).value;
update_likes=Number(likes)+1; 
firebase.database().ref(room_name).child(message_id).update({ like : update_likes
});
}