function getImage() {
    const random = Math.floor(Math.random() * 9) + 1;  
    console.log(random);
    return '<img src="/IMG/' + random + '.jpg">';
   
}
 

document.getElementById("1").innerHTML = getImage();
document.getElementById("2").innerHTML = getImage();
document.getElementById("3").innerHTML = getImage();
document.getElementById("4").innerHTML = getImage();
document.getElementById("5").innerHTML = getImage();
document.getElementById("6").innerHTML = getImage();
document.getElementById("7").innerHTML = getImage();
document.getElementById("8").innerHTML = getImage();
document.getElementById("9").innerHTML = getImage();