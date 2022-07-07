// function reverse(n){
//     document.getElementById("card-img-"+n).style.display = "none";
//     document.getElementById("card-block-"+n).style.display = "";
// }
// function resetreverse(n){
//     document.getElementById("card-img-"+n).style.display = "";
//     document.getElementById("card-block-"+n).style.display = "none";
// }

function displayImg(){
    document.getElementById("special-github").style.display = "none";
    document.getElementById("github1").style.display = "";
    document.getElementById("github2").style.display = "";
}
function hideImg(){
    document.getElementById("special-github").style.display = "";
    document.getElementById("github1").style.display = "none";
    document.getElementById("github2").style.display = "none";
}
function changeContactDisplay(){
    if(document.getElementById("contact-content").style.display == "none"){
        document.getElementById("contact-content").style.display = "";
        document.getElementById("contact-arrow").innerHTML = "<";
        document.getElementById("cv").style.display = "";
        return;
    }
    document.getElementById("contact-content").style.display = "none";
    document.getElementById("cv").style.display = "none";
    document.getElementById("contact-arrow").innerHTML = ">";
}