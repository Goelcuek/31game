function buttonclick(x){
    if( document.getElementById(x).style.backgroundColor == "red" ){
        document.getElementById(x).style.backgroundColor= "green";
    }
    else{
        document.getElementById(x).style.backgroundColor= "red";
    }
}


function restartButton(){
    window.location.reload()
}