document.onclick = function(e) {
		var target = e && e.target || window.event.srcElement;

			if (target.parentNode.getAttribute('class') == "slider-img" && target.tagName == "IMG") {

				var bigImg = document.getElementById('big-image')
				
				if (bigImg.lastChild) {
					bigImg.removeChild(bigImg.childNodes[0]);
				}

				var newImg = document.createElement('img');
				newImg.src = target.getAttribute('src');
				bigImg.appendChild(newImg);
			} 
			
	}