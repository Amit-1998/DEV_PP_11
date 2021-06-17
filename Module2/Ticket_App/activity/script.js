let allFilters = document.querySelectorAll(".filter");
let ticketsContainer = document.querySelector(".tickets-container");

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
    if (!isTextTyped) {
        isTextTyped = true;
        e.target.textContent = "";
    }
}