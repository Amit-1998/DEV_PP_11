let allFilters = document.querySelectorAll(".filter");
// let ticketsContainer = document.querySelector(".tickets-container");

let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");

let ticketModalopen = false;
let isTextTyped = false;

for (let i = 0; i < allFilters.length; i++) {
    allFilters[i].addEventListener("click", selectFilter);
}

openModal.addEventListener("click", openTicketModal);
closeModal.addEventListener("click", closeTicketModal);


function selectFilter(e) {
    if(e.target.classList.contains("active-filter")){
         //ticket append are on basis of some filter
         e.target.classList.remove("active-filter");
         //append all tickets
         ticketsContainer.innerHTML = "";
         loadTickets();
    }
    else{
        if(document.querySelector(".active-filter")){
            document.querySelector(".active-filter").classList.remove("active-filter");
        }
        e.target.classList.add("active-filter");
        ticketsContainer.innerHTML = ""; // UI se ticket hatado
        let filterClicked = e.target.classList[1];
        loadSelectedTickets(filterClicked);
    }

    // let selectedFilter = e.target.classList[1];
    // if (ticketsContainer.classList.length > 1) {
    //     ticketsContainer.classList.remove(ticketsContainer.classList[1]);
    // }
    // ticketsContainer.classList.add(selectedFilter);

}

function openTicketModal(e) {
    if (ticketModalopen) {
        return;
    }
    let ticketModal = document.createElement("div");
    ticketModal.classList.add("ticket-modal"); /* <div class = "ticket-modal> </div> */
    ticketModal.innerHTML = `<div class="ticket-text" contentEditable="true" spellcheck="false">Enter Your text!!</div>
    <div class="ticket-filters">
        <div class="ticket-filter red selected-filter"></div>
        <div class="ticket-filter blue"></div>
        <div class="ticket-filter green"></div>
        <div class="ticket-filter yellow"></div>
        <div class="ticket-filter black"></div>
    </div>`;

    document.querySelector("body").append(ticketModal);
    ticketModalopen = true;
    isTextTyped = false;

    let ticketTextDiv = ticketModal.querySelector(".ticket-text");
    ticketTextDiv.addEventListener("keypress", handleKeyPress);

    let ticketFilters = ticketModal.querySelectorAll(".ticket-filter");
    for (let i = 0; i < ticketFilters.length; i++) {
        ticketFilters[i].addEventListener("click", function(e) {
            if (e.target.classList.contains("selected-filter")) {
                return;
            }
            document.querySelector(".selected-filter").classList.remove("selected-filter");
            e.target.classList.add("selected-filter");
        });

    }

}

function closeTicketModal(e) {
    if (ticketModalopen) {
        document.querySelector(".ticket-modal").remove();
        ticketModalopen = false;
        isTextTyped = false;
    }

}

function handleKeyPress(e) {
    if(e.key == "Enter" && isTextTyped && e.target.textContent){
        let filterSelected = document.querySelector(".selected-filter").classList[1];
        let ticketId = uuid();
        let ticketInfoObject = {
            ticketFilter: filterSelected,
            ticketValue: e.target.textContent,
            ticketId : ticketId
        };
        appendTicket(ticketInfoObject); 
        closeModal.click();
        saveTickeToDB(ticketInfoObject); /* written in db.js file*/ 
    }
    if (!isTextTyped) {
        isTextTyped = true;
        e.target.textContent = "";
    }
    
}

// function appendTicket(ticketInfoObject){
//     let {ticketFilter, ticketValue} = ticketInfoObject;
//     let ticketDiv = document.createElement("div");
//     ticketDiv.classList.add("ticket");
//     ticketDiv.innerHTML = `<div class="ticket-header ${ticketFilter}"></div>
//     <div class="ticket-content">
//         <div class="ticket-info">
//             <div class="ticket-id">#e2nf5</div>
//             <div class="ticket-delete">
//                 <i class="fas fa-trash"></i>
//             </div>
//         </div>
//         <div class="ticket-value">${ticketValue}</div>
//     </div>`;

//     ticketsContainer.append(ticketDiv);
// }

// Static UI of ticket
// <div class="ticket">
//             <div class="ticket-header"></div>
//             <div class="ticket-content">
//                 <div class="ticket-info">
//                     <div class="ticket-id">#e2nf5</div>
//                     <div class="ticket-delete">
//                         <i class="fas fa-trash"></i>
//                     </div>
//                 </div>
//                 <div class="ticket-value">Fix CSS!</div>
//             </div>
// </div>