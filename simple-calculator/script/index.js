
function calInput(n){
    let value = document.getElementById(n).id;
    document.getElementById('answer').value += value;
}

function clearAnswer(){
    document.getElementById('answer').value = ''
}

function calculation(){
    // doing calculations
    let result = eval(document.getElementById('answer').value);
    if (result != undefined){
        document.getElementById('answer').value = result;
    }
}

function undo(){
    // deleting last element
    document.getElementById('answer').value = Math.floor(document.getElementById('answer').value / 10) ;
}

function percent(){
    // finding % of element
    let ans = document.getElementById('answer').value;
    ans = ans + '/100';
    let result = eval(ans);
    document.getElementById('answer').value = result;
}