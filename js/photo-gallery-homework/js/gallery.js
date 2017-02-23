/*Name this external file gallery.js*/

/* Set original text, bg color, bg url */
originaltext = document.getElementById("image").textContent;
originalcolor = document.getElementById("image").style.backgroundColor;
originalbgurl = document.getElementById("image").style.backgroundColor;

function upDate(alt, src){
    document.getElementById('image').innerHTML = alt;
    x = document.getElementById("image");
    x.style.backgroundImage = "url(" + src +")";
    x.style.backgroundColor = "#000";
 /* In this function you should
    1) change the url for the background image of the div with the id = "image"
    to the source file of the preview image

    2) Change the text  of the div with the id = "image"
    to the alt text of the preview image
    */

	}

	function unDo(originaltext, originalcolor, originalbgurl){
      document.getElementById('image').innerHTML = originaltext;
      x=document.getElementById("image");
      x.style.backgroundColor = originalcolor;
      x.style.backgroundImage = originalbgurl;
     /* In this function you should
    1) Update the url for the background image of the div with the id = "image"
    back to the orginal-image.  You can use the css code to see what that original URL was

    2) Change the text  of the div with the id = "image"
    back to the original text.  You can use the html code to see what that original text was
    */

	}
