function bolde(){

document.getElementById("bd").style.backgroundColor ="lightgreen"; 
if (document.getElementById("texte").style.fontWeight==""){
document.getElementById("texte").style.fontWeight="bold";
}
else
document.getElementById("texte").style.fontStyle="";
}
function ii(){
document.getElementById("bd1").style.backgroundColor ="red";
if (document.getElementById("texte").style.fontStyle==""){
    document.getElementById("texte").style.fontStyle="italic";
    }
    else
    document.getElementById("texte").style.fontStyle="";
    
}
function un(){
    document.getElementById("bd2").style.backgroundColor ="blue";
 if (document.getElementById("texte").style.textDecoration==""){
        document.getElementById("texte").style.textDecoration="underline";
        }
 else
        document.getElementById("texte").style.textDecoration="";
        
    }



function pxx(){
document.getElementById("texte").style.fontSize=document.getElementById("pxx").value;
}
function pxx1(){
document.getElementById("texte").style.fontFamily=document.getElementById("pxx1").value;
}
