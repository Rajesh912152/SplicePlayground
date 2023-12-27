let arr = [1, 7, 3, 1, 0, 20, 77];

let startEl=document.getElementById('start');
let deleteEl=document.getElementById('delete');
let itemAddEl=document.getElementById('itemAdd');
let btnEl=document.getElementById('button');
let spanIdEl=document.getElementById('spanId');

function createStringdataAppend() {
    let stringdata = JSON.stringify(arr);
    spanIdEl.textContent = stringdata;
}


btnEl.onclick=function(){
    let startElValue=parseInt(startEl.value)
    let deleteElValue=parseInt(deleteEl.value)
    let itemAddElValue=itemAddEl.value;
    console.log(typeof(itemAddElValue))

    if(startElValue===""){
        alert("Enter Start Index")
    }
    else if (deleteElValue===""){
        deleteElValue=0;
    }
    else if (itemAddElValue===""){
        arr.splice(startElValue,deleteElValue)
    }
    else{
        arr.splice(startElValue,deleteElValue,parseInt(itemAddElValue))
    }



    startEl.value=""
    deleteEl.value=""
    itemAddEl.value=""
    createStringdataAppend();
}