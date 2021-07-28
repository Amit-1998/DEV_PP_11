// it will send a message to server
// this is event based means is event par ye message send kara hai
socket.emit("userconnected", username); // we provide "userconnected" as a event name

socket.on("userDisconnected", function(username){
    let leaveDiv = document.createElement("div");
    leaveDiv.classList.add("chat");
    leaveDiv.classList.add("leave");
    leaveDiv.textContent = `${username} left chat`;
    chatWindow.append(leaveDiv);
})

// Listner of event "join"
socket.on("join", function(username){
     let joinDiv = document.createElement("div");
     joinDiv.classList.add("chat");
     joinDiv.classList.add("join");
     joinDiv.textContent = `${username} joined chat`;
     chatWindow.append(joinDiv);
})

socket.on("chatLeft", function(chatObj){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("left");
    chatDiv.textContent = chatObj.username+ " : " +chatObj.chat;
    chatWindow.append(chatDiv);
})