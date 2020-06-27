function myfunction(){
	var a =Math.floor(Math.random()*10);
	var b=a%2;
	if (b===1) {
		document.querySelector("#img").setAttribute("src","img/head.jpg");
		document.querySelector(".container h4").textContent="It's a Head";
	} else{
		document.querySelector("#img").setAttribute("src","img/tail.jpg");
		document.querySelector(".container h4").textContent="It's a Tail";
	}
}