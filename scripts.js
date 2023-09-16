const submitButton = document.getElementById('submit-button');
const userNameInput = document.getElementById('user-input-name');
const userAddressInput = document.getElementById('user-input-address');
const outputContainer = document.getElementById('outputContainer');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    let userNameValue = userNameInput.value;
    let userAddressValue = userAddressInput.value;
    
    if(userNameValue != '' && userAddressValue != '') {
        outputContainer.innerHTML = '';
        outputContainer.innerHTML = "So Your Name is " + userNameValue + "<br/> And You Live at " + userAddressValue + "<br/> If So, Thank You For Answering, If Not, Just Edit The Form";
    }   
    else {
        outputContainer.innerHTML = '';
        outputContainer.innerHTML = "Please Input Both Values";
        setTimeout(() => {
            outputContainer.innerHTML = "Waiting For User Input...";
        }, 1000);
    }
});