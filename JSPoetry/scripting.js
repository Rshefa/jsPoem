function createParagraph1(){
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    para.textContent = "I once felt uninspired";
    para1.textContent = "But my brain got rewired";
    document.body.appendChild(para);
    document.body.appendChild(para1);

}

function createParagraph2(){
   
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const para4 = document.createElement("p");
    para2.textContent = "All I did was write";
    para3.textContent = "Now my mind is bright!";
    para4.textContent = "Brighter than light";
    document.body.appendChild(para2);
    document.body.appendChild(para3);
    document.body.appendChild(para4);

}

const buttons1 = document.getElementById('button1');

const buttons2 = document.getElementById('button2');

buttons1.addEventListener("click", createParagraph1);
buttons2.addEventListener("click", createParagraph2);
