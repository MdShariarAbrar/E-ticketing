let availableSeat = 8;
let selectedSeat = 0;
let seatLeft = document.getElementById("seat-left");
let seatBooked = document.getElementById("seat-booked");
let total = document.getElementById("total");
let grandTotal = document.getElementById("gt");
let display = document.getElementById("display");








function handleBook(event){
    if(selectedSeat < 4) {
        event.target.classList.add('bg-green-500');

    availableSeat--;
    selectedSeat++;

    seatLeft.innerText = availableSeat;
    seatBooked.innerText = selectedSeat;

    total.innerText = selectedSeat * 550;
    grandTotal.innerText =selectedSeat *550;

    let description = document.createElement('p');
    let eco = document.createElement('p');
    let fare = document.createElement('p');

    description.innerText = event.target.id;
    eco.innerText = "Economoy";
    fare.innerText = 550;
    display.appendChild(description);
    display.appendChild(eco);
    display.appendChild(fare);

    document.getElementById(event.target.id).diabled = true;
    document.getElementById(event.target.id).removeEventListener('click', handleBook)
    } else {
        alert("you can not select more than 4 seats");
    }

}

// let a1 = document.getElementById("A1");
// a1.addEventListener('click', handleBook )

document.getElementById("A1").addEventListener('click', handleBook);
document.getElementById("A2").addEventListener('click', handleBook);
document.getElementById("A3").addEventListener('click', handleBook);
document.getElementById("A4").addEventListener('click', handleBook);
document.getElementById("B1").addEventListener('click', handleBook);
document.getElementById("B2").addEventListener('click', handleBook);
document.getElementById("B3").addEventListener('click', handleBook);
document.getElementById("B4").addEventListener('click', handleBook);