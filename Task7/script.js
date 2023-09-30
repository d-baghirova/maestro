const btns = document.getElementsByClassName('display');
const equality = document.getElementsByClassName('equality')[0];
const operations = document.getElementsByClassName('operations')[0];
const result = document.getElementsByClassName('result')[0];
const c = document.getElementsByClassName('c')[0];
const back = document.getElementsByClassName('back')[0];

const printNum = (event) => {
    operations.innerHTML += event.target.innerHTML;
}

const clear = () => {
    operations.innerHTML = '';
    result.innerHTML = '=';
}

const backspace = () => {
    if (operations.innerHTML.length >0){
        operations.innerHTML = operations.innerHTML.slice(0, operations.innerHTML.length-1);
    }
}

const answer = () => {
    let str = operations.innerHTML;
    let arr = str.split('');
    let pm = [];
    for (let i=0; i<str.length; i++){
        if (str[i] == 'x'){
            arr.splice(i,1,'*');
        } else if (str[i] == '+' && str[i+1]=='-'){
            pm.push(i);
        } 
        
    }
    if (operations.innerHTML){
    operations.innerHTML = eval(arr.join(''));
    result.innerHTML = '= ' + eval(arr.join(''));}
}


for (let i=0; i<btns.length; i++){
    btns[i].addEventListener('click', printNum);
}


equality.addEventListener('click', answer);
c.addEventListener('click', clear);
back.addEventListener('click', backspace);
