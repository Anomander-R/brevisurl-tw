const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

linkForm.addEventListener('submit', formSubmit);
// console.log(input);
// console.log(message);

function formSubmit(e){
    e.preventDefault();
    let msg =""
    if (input.value === ''){
        errMsg.innerHTML = 'Please, your input cannot be empty!';
        input.classList.add('border-red');
    } else {
        input.classList.remove('border-red');
        errMsg.innerHTML = '';
        //console.log(input.value);
        let beginning = input.value.slice(0,7);
        //console.log(beginning);
        let condition = beginning==='https:/' || beginning==='http://';
        if (condition){
            errMsg.innerHTML = '';
            //console.log('Valid link');
            alert('Success!')
        } else {
            //console.log('It is not a valid link');
            errMsg.innerHTML = 'It is not a valid link';
        };

    }
}