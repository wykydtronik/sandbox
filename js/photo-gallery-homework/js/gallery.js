/* Set original text, bg color, bg url */
originaltext = document.getElementById("image").textContent;
originalcolor = document.getElementById("image").style.backgroundColor;
originalbgurl = document.getElementById("image").style.backgroundColor;

function upDate(alt, src){
	document.getElementById('image').innerHTML = alt;
	x = document.getElementById("image");
	x.style.backgroundImage = "url(" + src +")";
	x.style.backgroundColor = "#000";
}

function unDo(originaltext, originalcolor, originalbgurl){
	document.getElementById('image').innerHTML = originaltext;
	x=document.getElementById("image");
	x.style.backgroundColor = originalcolor;
	x.style.backgroundImage = originalbgurl;
}
