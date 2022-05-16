let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let node = document.createElement("li");
	node.innerHTML = "Forth Element";
	document.querySelector("#myList").appendChild(node); // Append <li> to <ul> with id="myList"
});
