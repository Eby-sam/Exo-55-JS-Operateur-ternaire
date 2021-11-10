let para1 = document.getElementById('para1');
let span1 = document.getElementById('sp1');
let span2 = document.getElementById('sp2');
let result = document.getElementById('resulta');

span1 = 5;
span2 = 4;

if (span1 === 5 && span2 === 4) {
    result.innerHTML = span1 + span2;
    result.style.backgroundColor = 'red';
}