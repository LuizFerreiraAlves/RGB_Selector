document.querySelector('#red').addEventListener('input', selectColor);
document.querySelector('#green').addEventListener('input', selectColor);
document.querySelector('#blue').addEventListener('input', selectColor);

function selectColor() {
    var redInput = document.querySelector('#red').value;
    var greenInput = document.querySelector('#green').value;
    var blueInput = document.querySelector('#blue').value;

    var color = 'Rgb(' + redInput + ',' + greenInput + ',' + blueInput + ')';

    document.querySelector('.color-result').style.background = color;
    document.getElementById('red-value').innerHTML = redInput;
    document.getElementById('green-value').innerHTML = greenInput;
    document.getElementById('blue-value').innerHTML = blueInput;
}
