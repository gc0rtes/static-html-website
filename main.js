const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i=1; i<6; i++) {	
	const newImage = document.createElement('img');
	newImage.setAttribute('src', 'images/pic'+i+'.jpeg');
	thumbBar.appendChild(newImage);
}

// Event Delegating to the parent div .thumb-bar 
thumbBar.addEventListener('click', function(e) {
	displayedImage.setAttribute('src', e.srcElement.currentSrc);
	//outra forma:
	// displayedImage.src = e.target.src;
	console.log(e);
	console.log(e.srcElement.currentSrc);
	console.log(e.target.src);
})
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function(e){
	
	if (btn.innerText === "Darken") { //.textContent also works
		overlay.style.backgroundColor = 'rgba(0,0,0,0.3)';
		btn.innerText = "Lighten";
	}else {
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
		btn.innerText = "Darken";
	}
	console.log(e)
})