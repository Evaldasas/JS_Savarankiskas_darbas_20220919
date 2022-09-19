// Uzduotis 3 


function createSquare(resizeSquare) {
    if (!document.querySelector('div').offsetHeight) {
        const side = '20px';
        const myDiv = document.getElementById('square');
        myDiv.style.width = side;
        myDiv.style.height = side;
        myDiv.style.backgroundColor = 'green';
    } else if (document.querySelector('div').offsetHeight > 0) {
        const myDiv = document.getElementById('square');
        const side = (myDiv.offsetHeight + 20).toString() + 'px';
        myDiv.style.width = side;
        myDiv.style.height = side;
        myDiv.style.backgroundColor = 'green';
    }
}