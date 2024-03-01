let first = '';

function inputValue(value){
    let currentVal = document.getElementById('screen').value;
    if (value === '*'||
        value === '/'||
        value === '+'||
        value === '-'
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
    let ans = document.getElementById('screen').value;
    ans = ans + '/100';
    if (ans.toString().length > 0){
        let result = eval(ans);
        document.getElementById('screen').value = result;
    }
    
}
function calculation(first){
    let screen = document.getElementById('screen').value;
    let vir = first + screen;
    document.getElementById('screen').value = eval(vir);
}


function updateInt(firstValue, znak){
    originalColors();
    document.getElementById(znak).classList.add('pressed');
    firstValue += document.getElementById(znak).value;
    document.getElementById('screen').value = '';
    return first = firstValue;
    
}

function originalColors(){
    document.getElementById('/').classList = 'cals';
    document.getElementById('*').classList = 'cals';
    document.getElementById('+').classList = 'cals';
    document.getElementById('-').classList = 'cals';
}
// let a = setTimeout(()=>alert(first), 5000)