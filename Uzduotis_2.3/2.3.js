// Uzduotis 2.3 

function createDiv() {
    const newDiv = document.createElement('div');
    document.body.append(newDiv);
};

function changeDivStyle(){
   const div =  document.querySelector('div');
   div.style.backgroundColor = 'red';
   div.style.width = '200px';
   div.style.height = '200px';
}
