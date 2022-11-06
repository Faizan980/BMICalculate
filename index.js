
        function bmi(){
            const name = document.querySelector('#name').value; // To get values from the user
            const height = document.querySelector('#height').value;
            const weight = document.querySelector('#weight').value;
            let height_status=false, weight_status=false;
                
            // To show error message
            if(height === '' || isNaN(height) || (height <= 0)){
                document.getElementById('height_error').innerHTML = 'Please provide a valid height';
            }else{
                document.getElementById('height_error').innerHTML = '';
                height_status=true;
            }

            if(weight === '' || isNaN(weight) || (weight <= 0)){
                document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
            }else{
                document.getElementById('weight_error').innerHTML = '';
                weight_status=true;
            }
                // to get results
            if(height_status && weight_status){
                const bmi = (weight / ((height*height)/10000)).toFixed(2);

                if(bmi < 18.6){
                    result.innerHTML = name + ' you are Under weight BMI : ' + bmi;
                }else if(bmi >= 18.6 && bmi < 24.9){
                    result.innerHTML = name + ' you are Normal BMI : ' + bmi;
                }else{
                    result.innerHTML = name + ' you are Over weight BMI : ' + bmi;
                }
            }else{
                alert('The form has errors');
                result.innerHTML = '';
            }
        };
            
        
