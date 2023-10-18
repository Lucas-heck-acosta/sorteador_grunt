document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(event){
        event.preventDefault();
        let numeroMax = document.getElementById('numero').value;
        numeroMax = parseInt(numeroMax);
        let randomNum = Math.random() * numeroMax;
        randomNum = Math.floor(randomNum +1)

        document.getElementById('span-resultado').innerText = randomNum;
        document.querySelector('.resultado').style.display = 'block'

    })
})