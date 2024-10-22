//your JS code here. If required.
const inputForm= document.querySelector("#input-form");

inputForm.addEventListener("submit", e => {
	e.preventDefault();
	const id= document.querySelector("#block_id").value;
	const color= document.querySelector("#colour_id").value;
	const block= document.querySelector(`#\\3${id}`);
	block.style.backgroundColor = color;
})

inputForm.addEventListener("reset", e => {
	const blocks= document.querySelectorAll(".grid-item");
	blocks.forEach(block => {
		block.style.backgroundColor = "transparent";
	})
})







