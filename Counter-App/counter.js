const countValue=document.querySelector("#number");

const increment =()=> {
    let value= parseInt(countValue.textContent);
    value=value+1;
    countValue.textContent=value;
}



const decrement =()=> {
    let value= parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;
}
