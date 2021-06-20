let myDB = window.localStorage;
let ticketsContainer = document.querySelector(".tickets-container");

function loadTickets(){
    let allTickets = myDB.getItem("allTickets");
    if(allTickets){
        allTickets = JSON.parse(allTickets);
        for(let i=0; i<allTickets.length; i++){
            let ticketInfoObject = allTickets[i];
            appendTicket(ticketInfoObject);
        }
    }
}
loadTickets(); // aate hi sabse pehle loadTickets() ko call lag jayein

function saveTickeToDB(ticketInfoObject){
     let allTickets = myDB.getItem("allTickets");
     if(allTickets){
        // already all Tickets are present
        // allTickets are in stringify object convert in their actual form
        allTickets = JSON.parse(allTickets);
        allTickets.push(ticketInfoObject);
        myDB.setItem("allTickets",JSON.stringify(allTickets));
     }
     else{
        // no allTickets key found
        let allTickets = [ticketInfoObject];
        myDB.setItem("allTickets",JSON.stringify(allTickets));


     }
}

function appendTicket(ticketInfoObject){
    
    let {ticketFilter, ticketValue,ticketId} = ticketInfoObject;
    let ticketDiv = document.createElement("div");
    ticketDiv.classList.add("ticket");
    ticketDiv.innerHTML = `<div class="ticket-header ${ticketFilter}"></div>
    <div class="ticket-content">
        <div class="ticket-info">
            <div class="ticket-id">#${ticketId}</div>
            <div class="ticket-delete fas fa-trash"> 
            </div>
        </div>
        <div class="ticket-value">${ticketValue}</div>
    </div>`;

    let deleteTicketBin = ticketDiv.querySelector(".ticket-delete");
    deleteTicketBin.addEventListener("click",function(e){
        // console.log(ticketId);
        ticketDiv.remove(); // UI se hta dega
        deleteTicketFromDB(ticketId);
    });

    ticketsContainer.append(ticketDiv);
}

function deleteTicketFromDB(ticketId){
    let allTickets = JSON.parse(myDB.getItem("allTickets"));
    // [ {}, {}, {}, {},  ]
    let updatedTickets = allTickets.filter( function(ticketObject){
         //return true => agar true jayega to vo vaala object updatedTickets mein jayega
         //return false => agar false jayega to vaala object updatedTickets mein nhi jayega
         if(ticketObject.ticketId == ticketId){
             return false;
         }
         return true;
    });
    myDB.setItem("allTickets", JSON.stringify(updatedTickets));
}