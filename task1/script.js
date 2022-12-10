class StringBuilder {
	constructor(baseString = "") {
		this.baseString = baseString
	}

	append(str) {
		if (str) {
			this.baseString = this.baseString.concat(str)
		}
		return this.baseString
	}

	prepend(str) {
		if (str) {
			this.baseString = str.concat(this.baseString)
		}
		return this.baseString
	}

	pad(str) {
		if (str) {
			this.baseString = str.concat(this.baseString.concat(str))
		}
		return this.baseString
	}
}

const builder = new StringBuilder(".")

builder.append("^")
builder.prepend("^")
builder.pad("=")

console.log(builder) // <== '.^'
