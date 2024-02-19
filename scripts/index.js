let availableSeat = 40;
let selectedSeat = 0;
let seatLeft = document.getElementById("seat-left");
let seatBooked = document.getElementById("seat-booked");
let total = document.getElementById("total");
let grandTotal = document.getElementById("gt");
let display = document.getElementById("display");


let modal = document.getElementById("modal");
let submit = document.getElementById("submit");
let modalContinue = document.getElementById("modal-continue");

let name = document.getElementById("name");
let phone = document.getElementById("phone");

let cuponApply = document.getElementById("cupon-apply");
let cuponCode = document.getElementById("cupon-code");
let cuponContainer = document.getElementById("cupon-container");

let discount = document.getElementById("discount");












function handleBook(event){
    submit.disabled = false;
    if(selectedSeat < 4) {
        event.target.classList.add('bg-green-500');
        event.target.classList.add('text-white');

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

    if(selectedSeat == 4) {
        cuponCode.disabled = false;
    }

}


function handleCupon(event) {
    
    let discountPrice

    if (cuponCode.value === 'NEW15') {
        discountPrice = (parseInt(total.innerText) * 15) /100;

        let discountTitle = document.createElement('p')
        discountTitle.innerText = "Discount"
        let discountAmount = document.createElement('p');
        discountAmount.innerText = discountPrice;

        cuponContainer.remove();

        discount.appendChild(discountTitle);
        discount.appendChild(discountAmount);

        grandTotal.innerText = parseInt(total.innerText) - discountPrice;

        
    } else if (cuponCode.value === 'Couple 20') {
        discountPrice = (parseInt(total.innerText) * 20) /100;

        let discountTitle = document.createElement('p')
        discountTitle.innerText = "Discount"
        let discountAmount = document.createElement('p');
        discountAmount.innerText = discountPrice;

        cuponContainer.remove();

        discount.appendChild(discountTitle);
        discount.appendChild(discountAmount);

        grandTotal.innerText = parseInt(total.innerText) - discountPrice;
    } else {
             alert("Wrong Cupon")
         };
    
}




function handleSubmit(event) {

    

    if (name.value && phone.value) {
        modal.classList.remove('hidden');
        modal.classList.add('absolute', 'left-12' )
    } else {
        alert("Please Fill up required information");
    }
    
    
}

function handleModal(event) {
    modal.classList.add('hidden')
}



document.getElementById("A1").addEventListener('click', handleBook);
document.getElementById("A2").addEventListener('click', handleBook);
document.getElementById("A3").addEventListener('click', handleBook);
document.getElementById("A4").addEventListener('click', handleBook);
document.getElementById("B1").addEventListener('click', handleBook);
document.getElementById("B2").addEventListener('click', handleBook);
document.getElementById("B3").addEventListener('click', handleBook);
document.getElementById("B4").addEventListener('click', handleBook);
document.getElementById("C1").addEventListener('click', handleBook);
document.getElementById("C2").addEventListener('click', handleBook);
document.getElementById("C3").addEventListener('click', handleBook);
document.getElementById("C4").addEventListener('click', handleBook);
document.getElementById("D1").addEventListener('click', handleBook);
document.getElementById("D2").addEventListener('click', handleBook);
document.getElementById("D3").addEventListener('click', handleBook);
document.getElementById("D4").addEventListener('click', handleBook);
document.getElementById("E1").addEventListener('click', handleBook);
document.getElementById("E2").addEventListener('click', handleBook);
document.getElementById("E3").addEventListener('click', handleBook);
document.getElementById("E4").addEventListener('click', handleBook);
document.getElementById("F1").addEventListener('click', handleBook);
document.getElementById("F2").addEventListener('click', handleBook);
document.getElementById("F3").addEventListener('click', handleBook);
document.getElementById("F4").addEventListener('click', handleBook);
document.getElementById("G1").addEventListener('click', handleBook);
document.getElementById("G2").addEventListener('click', handleBook);
document.getElementById("G3").addEventListener('click', handleBook);
document.getElementById("G4").addEventListener('click', handleBook);
document.getElementById("H1").addEventListener('click', handleBook);
document.getElementById("H2").addEventListener('click', handleBook);
document.getElementById("H3").addEventListener('click', handleBook);
document.getElementById("H4").addEventListener('click', handleBook);
document.getElementById("I1").addEventListener('click', handleBook);
document.getElementById("I2").addEventListener('click', handleBook);
document.getElementById("I3").addEventListener('click', handleBook);
document.getElementById("I4").addEventListener('click', handleBook);
document.getElementById("J1").addEventListener('click', handleBook);
document.getElementById("J2").addEventListener('click', handleBook);
document.getElementById("J3").addEventListener('click', handleBook);
document.getElementById("J4").addEventListener('click', handleBook);


cuponApply.addEventListener('click', handleCupon);




modalContinue.addEventListener('click', handleModal);

submit.addEventListener('click', handleSubmit)






