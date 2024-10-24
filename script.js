let count=0;

function increment()
{
  
    count+=1;
    document.getElementById("count-el").innerText=count;
}


function save(){
    let countStr= count + " - " 
    document.getElementById("save-el").innerText+=countStr; //.iinerText or Textcontent
    document.getElementById("count-el").innerText=0;
    count=0;
}

