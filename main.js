const btn = document.querySelectorAll('button');
let number1;
let number2;
let total;



btn.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id == "AC" || button.id == "C" || button.id == "BS")
        {
            alert("Cleared Numbers");
        }
        else
        {
            document.getElementById("mainScreenOutput").innerHTML = button.id;
        }
    })
})




