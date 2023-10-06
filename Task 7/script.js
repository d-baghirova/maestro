const btns = document.getElementsByClassName('display');
const equality = document.getElementsByClassName('equality')[0];
const operations = document.getElementsByClassName('operations')[0];
const result = document.getElementsByClassName('result')[0];
const c = document.getElementsByClassName('c')[0];
const pa = document.getElementsByClassName('pa')[0];
const back = document.getElementsByClassName('back')[0];

const allSigns = ['x', '+', '/', '%','-', '.'];
const notB = ['x', '+', '/', '%', '.'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const check = () => {
    let str = operations.innerHTML;
    let arr = str.split('');
    let pm = [];
   
    for (let i=0; i<str.length; i++){
        if (notB.includes(operations.innerHTML[i]) && notB.includes(operations.innerHTML[i+1])){
            arr.splice(i, 1,'');
        } if (operations.innerHTML[i] == '-' && allSigns.includes(operations.innerHTML[i+1])){
            arr.splice(i, 1,'');
        } if (allSigns.includes(operations.innerHTML[i]) && operations.innerHTML[i+1] == '-' && allSigns.includes(operations.innerHTML[i+2])){
            arr.splice(i, 2,operations.innerHTML[i+2]);
        } 
        if (operations.innerHTML[0]=='0' && !notB.includes(operations.innerHTML[1])){
            arr.splice(0,1, operations.innerHTML[1]);
            arr.splice(1, 1, '');
        }  if (notB.includes(operations.innerHTML[0])){
            arr.splice(0, 1, '-');
        } 
         if (operations.innerHTML[0]=='-' && allSigns.includes(operations.innerHTML[1])){
            arr.splice(0,2, '-');
        } 
    }

    
    if (operations.innerHTML){
    return arr.join('');}
}

const printNum = (event) => {
    let str = operations.innerHTML;
    operations.innerHTML += event.target.innerHTML;
    operations.innerHTML = check();
}

const clear = () => {
    operations.innerHTML = '0';
    result.innerHTML = '=';
    p=0;
}

const percentage = () => {
    return 0.01;
}

const backspace = () => {
    if (operations.innerHTML.length >0){
        if (result.innerHTML.slice(0, result.innerHTML.length-1)==')' || result.innerHTML.slice(0, result.innerHTML.length-1)=='('){
            p-=1;
        }
        operations.innerHTML = operations.innerHTML.slice(0, operations.innerHTML.length-1);
    } if (operations.innerHTML.length == 0){
        operations.innerHTML='0';
    }
    if (result.innerHTML.length >2){
        result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length-1);
    }
}

const multiplying = (x) => {
    if (str[i] == 'x'){
        arr.splice(i,1,'*');
    }
}

const answer = () => {
    let str = operations.innerHTML;
    let arr1 = str.split('');
    let arr = str.split('');
    let pm = [];
    for (let i=0; i<str.length; i++){
        if (str[i] == 'x'){
            arr.splice(i,1,'*');
        }  if (str[i]=='-' && str[i-1]=='%'){
            
            // arr.splice(i,1,'');
            
            arr.splice(i-1,1,`*${percentage()}*`);
            arr.splice(i,1,'(-1)*');
            console.log(arr);
        } if (str[i] == '%' && !allSigns.includes(str[i+1])){
            if (i==arr.length-1){
                arr.splice(i,1,`*${percentage()}`);
            } else {
            arr.splice(i,1,`*${percentage()}*`);}
        } 
        else if (str[i] == '+' && str[i+1]=='-'){
            pm.push(i);
        } 
    }

    if (operations.innerHTML){
        const res = Math.round(eval(arr.join('')) * 10000)/10000;
        operations.innerHTML = res;
        result.innerHTML = '= ' + res;
    }
}
 

for (let i=0; i<btns.length; i++){
    btns[i].addEventListener('click', printNum);
}


equality.addEventListener('click', answer);
c.addEventListener('click', clear);
back.addEventListener('click', backspace);
