// Uzduotis 2.2 

function createDiv() {
    const newDiv = document.createElement('div');
    document.body.append(newDiv);
};

function createDivStyle(){
   const div =  document.querySelector('div');
   div.style.backgroundColor = 'red';
   div.style.width = '200px';
   div.style.height = '200px';
}
