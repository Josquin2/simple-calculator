let first = '';

function inputValue(value){
    let currentVal = document.getElementById('screen').value;
    if ((currentVal != '') &&
        (value === '*'||
        value === '/'||
        value === '+'||
        value === '-')
    ){
        updateInt(currentVal, value)
    }
    else{
        originalColors();  
        
        if (value == '.'){
            if (!(currentVal.toString().includes('.')) && (currentVal.toString().length > 0)){
                document.getElementById('screen').value += value;
            }
        }
        else{
            document.getElementById('screen').value += value;
        }
    }
    
}

function deleteLastElement(){
    let value = document.getElementById('screen').value;
    if (value.length == 1){
        document.getElementById('screen').value = '';
    }
    else{
        document.getElementById('screen').value = value.toString().slice(0, value.length - 1)
    }
}

function clearScreen(){
    document.getElementById('screen').value = '';
    originalColors();
    return first = '';

}

function percent(){
    let answer = document.getElementById('screen').value;
    answer = answer + '/100';
    if (answer.toString().length > 0){
        let result = eval(answer);
        document.getElementById('screen').value = result;
    }
  
}
function calculation(first){
    let screen = document.getElementById('screen').value;
    let both = first + screen;
    if (eval(both) != undefined){
        document.getElementById('screen').value = eval(both);
    }
    else {
        document.getElementById('screen').value = 'Error!'
    }
    
}


function updateInt(firstValue, sign){
    let lastsign = first.toString()[first.toString().length - 1]
    if (lastsign == '/'||
        lastsign == '*'||
        lastsign == '+'||
        lastsign == '-'
    ){
        firstValue = first.slice(0, first.length - 1);
        firstValue += document.getElementById(sign).value;
        originalColors();
        document.getElementById(sign).classList.add('pressed');
        document.getElementById('screen').value = '';
        return first = firstValue;
    }
    else{
        originalColors();
        document.getElementById(sign).classList.add('pressed');
        firstValue += document.getElementById(sign).value;
        document.getElementById('screen').value = '';
        return first = firstValue;
    }
    
    
}

function originalColors(){
    document.getElementById('/').classList = 'cals';
    document.getElementById('*').classList = 'cals';
    document.getElementById('+').classList = 'cals';
    document.getElementById('-').classList = 'cals';
}
