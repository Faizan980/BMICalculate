        function bmi(){
            let name = document.querySelector('#name').value;
            let height = document.querySelector('#height').value;
            let weight = document.querySelector('#weight').value;
            let result = (weight/height/height)*1000;
            document.querySelector('#result').innerHTML = `${name} your BMI is ${result}`;
        }