// Getting the Values of the inputs using the qselector
let fName = document.querySelector('#fName')
let lName = document.querySelector('#LName')
let eMail = document.querySelector('#email')
let sMessage = document.querySelector('#message')
let check = document.querySelector('#CHeck')
let equity = document.querySelector('#equity')
let SupportRequest = document.querySelector('#SupportRequest')
// Display Error

let FNameError = document.querySelector('#fNameError')
let LNameError = document.querySelector('#lNAmeError')
let eMailError = document.querySelector('#eMailError')
let MessageError = document.querySelector('#MessageError')
let checkError = document.querySelector('#checkError')
let queryError = document.querySelector('#queryError')

// Button element

let button = document.querySelector('button')
.addEventListener('click',Validated)

function Validated(){
    event.preventDefault()
    // First Name Verification
    if(fName.value !== ''){
        FNameError.textContent = 'Correct'
        fName.classList.add('correct')
        FNameError.classList.add('correctPara')
    }
    else {
        FNameError.textContent = 'This field should not be empty'
        fName.classList.add('error')
        FNameError.classList.add('errorPara')
    }
    // LAst Name Verification
    if(lName.value !==''){
        LNameError.textContent = 'Correct'
        lName.classList.add('correct')
        LNameError.classList.add('correctPara')
    }
    else{
        LNameError.textContent = 'This field should not be empty'
        lName.classList.add('error')
        LNameError.classList.add('errorPara')
    }
    // For email Verification
    if(eMail.value !== ''){
        eMailError.textContent = 'Correct'
        eMail.classList.add('correct')
        eMailError.classList.add('correctPara')
    }
    else{
        eMailError.textContent = 'This field should not be empty'
        eMail.classList.add('error')
        eMailError.classList.add('errorPara')
    }
    // Message verification
    if(sMessage.value !== ''){
        MessageError.textContent = 'Correct'
        sMessage.classList.add('correct')
        MessageError.classList.add('correctPara')
    }
    else{
        MessageError.textContent = 'This field should not be empty'
        sMessage.classList.add('error')
        MessageError.classList.add('errorPara')
    }
    // query Type
    if(equity.checked){
        alert(equity.value)
    }
    else if(SupportRequest.checked){
        alert(SupportRequest.value)
    }
    else{
        queryError.textContent = 'This field should not be empty'
        queryError.classList.add('errorPara')
    }

    // CHeck 
    if(check.checked){
        checkError.textContent = 'correct'
        checkError.classList.add('correctPara')
    }
    else{
        checkError.textContent = 'This field should be selected '
        checkError.classList.add('errorPara')
    }
}