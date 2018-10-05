document.getElementById("button1").addEventListener("click",function(){
	document.getElementById('block1').style.display = 'block';
	document.getElementById('block2').style.display = 'none';
	document.getElementById('block3').style.display = 'none';
	document.getElementById('block4').style.display = 'none';
	document.getElementById('block5').style.display = 'none';
})

document.getElementById("button2").addEventListener("click",function(){
	document.getElementById('block1').style.display = 'none';
	document.getElementById('block2').style.display = 'block';
	document.getElementById('block3').style.display = 'none';
	document.getElementById('block4').style.display = 'none';
	document.getElementById('block5').style.display = 'none';
})

document.getElementById("button3").addEventListener("click",function(){
	document.getElementById('block1').style.display = 'none';
	document.getElementById('block2').style.display = 'none';
	document.getElementById('block3').style.display = 'block';
	document.getElementById('block4').style.display = 'none';
	document.getElementById('block5').style.display = 'none';
})

document.getElementById("button4").addEventListener("click",function(){
	document.getElementById('block1').style.display = 'none';
	document.getElementById('block2').style.display = 'none';
	document.getElementById('block3').style.display = 'none';
	document.getElementById('block4').style.display = 'block';
	document.getElementById('block5').style.display = 'none';
})

document.getElementById("button5").addEventListener("click",function(){
	document.getElementById('block1').style.display = 'none';
	document.getElementById('block2').style.display = 'none';
	document.getElementById('block3').style.display = 'none';
	document.getElementById('block4').style.display = 'none';
	document.getElementById('block5').style.display = 'block';
})
