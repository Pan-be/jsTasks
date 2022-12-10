// selectors
const input = document.querySelector(".js-input")
const createBtn = document.querySelector('[data-action="create"]')
const destroyBtn = document.querySelector('[data-action="destroy"]')
const boxes = document.getElementById("boxes")

console.log(input)

// helpers

const random_rgba = () => {
	let o = Math.round,
		r = Math.random,
		s = 255
	return (
		"rgba(" +
		o(r() * s) +
		"," +
		o(r() * s) +
		"," +
		o(r() * s) +
		"," +
		r().toFixed(1) +
		")"
	)
}

// functions

const createBoxes = (amount) => {
	let size = 20
	for (let i = 0; i < amount; i++) {
		size += 10
		const box = document.createElement("div")
		box.setAttribute(
			"style",
			`width:${size}px;height:${size}px;background-color:${random_rgba()}`
		)
		boxes.appendChild(box)
	}
}

const destroyBoxes = () => {
	boxes.innerHTML = ""
}

// listeners

createBtn.addEventListener("click", () => {
	createBoxes(input.value)
})

destroyBtn.addEventListener("click", () => {
	destroyBoxes()
})
