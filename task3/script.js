const input = document.querySelector("input")
const imgBox = document.querySelector(".image-container")
let count = 20
let searchText = ""

const apiKey = "28643468-0bfd18c65d82c5dc5dca3f2bd"

input.addEventListener("keyup", (e) => {
	// console.log(e.target.value)
	searchText = e.target.value
	setTimeout(resetSearch, 1000)
})

// reset searching helper
const resetSearch = () => {
	imgBox.innerHTML = ""
	getPhotos()
}

// setAttributes helper
const setAtributes = (element, attributes) => {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key])
	}
}

// create and add to DOM els for links and photos
const displayPhotos = () => {
	const ul = document.createElement("ul")
	imgBox.appendChild(ul)
	let id
	photosArr.forEach((photo) => {
		// modal instance
		const instance =
			basicLightbox.create(`<a href="${photo.largeImageURL}" target="_blank">
		<img src="${photo.largeImageURL}" width="800" height="600"></a>`)

		// create els
		id = Math.random()
		const li = document.createElement("li")
		const a = document.createElement("a")
		const img = document.createElement("img")

		// attributes settings
		li.setAttribute("id", id)
		setAtributes(a, {
			// href: photo.largeImageURL,
			target: "_blank",
		})
		setAtributes(img, {
			src: photo.webformatURL,
			alt: photo.tags,
			title: photo.tags,
			["data-source"]: photo.largeImageURL,
		})

		a.addEventListener("click", () => {
			instance.show()
		})

		// appending
		ul.appendChild(li)
		li.appendChild(a)
		a.appendChild(img)
	})
}

// fetch pics
const getPhotos = async () => {
	let url = `https://pixabay.com/api/?key=${apiKey}&q=${searchText}&per_page=${count}&image_type=photo&pretty=true`
	try {
		const response = await fetch(url)
		const photosObj = await response.json()
		photosArr = photosObj.hits
		displayPhotos()
		// console.log(photosArr)
	} catch (error) {}
}

// load more photos when scrooling is near bottom
window.addEventListener("scroll", () => {
	// // console.log("scrolled")
	if (
		window.innerHeight + window.scrollY >=
		document.body.offsetHeight - 1000
	) {
		getPhotos()
	}
})

getPhotos()
