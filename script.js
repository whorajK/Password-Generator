// VARIABLES
const passwordText = document.querySelector("#password-text");
const copyBtn = document.querySelector("#copy-btn");
const generateBtn = document.querySelector("#generate-btn");

const passLen = document.querySelector("#password-length");
const uppercaseEl = document.querySelector("#uppercase");
const lowercaseEl = document.querySelector("#lowercase");
const numberEl = document.querySelector("#number");
const symbolEl = document.querySelector("#symbol");

const uppercaseText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseText = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+,";

generateBtn.addEventListener("click", () => {
	generatePass();
});

// GENERATES PASSWORD
function generatePass() {
	const len = passLen.value;
	let password = "";

	if (uppercaseEl.checked) {
		password += generateUppercase();
	}
	if (lowercaseEl.checked) {
		password += generateLowercase();
	}

	if (numberEl.checked) {
		password += generateNumber();
	}
	if (symbolEl.checked) {
		password += generateSymbol();
	} else {
		alert("Select from options first!");
		return;
	}

	for (i = password.length; i < len; i++) {
		const p = generateP();
		password += p;
	}

	passwordText.textContent = password;
}

// GENERATES A PASSWORD ARRAY
function generateP() {
	const x = [];
	if (uppercaseEl.checked) {
		x.push(generateUppercase());
	}
	if (lowercaseEl.checked) {
		x.push(generateLowercase());
	}
	if (numberEl.checked) {
		x.push(generateNumber());
	}
	if (symbolEl.checked) {
		x.push(generateSymbol());
	}

	if (x.len === 0) return "";

	return x[Math.floor(Math.random() * x.length)];
}

// GENERATE FUNCTIONS
function generateUppercase() {
	let text = uppercaseText[Math.floor(Math.random() * uppercaseText.length)];
	return text;
}

function generateLowercase() {
	let text = lowercaseText[Math.floor(Math.random() * lowercaseText.length)];
	return text;
}

function generateNumber() {
	let text = numbers[Math.floor(Math.random() * numbers.length)];
	return text;
}

function generateSymbol() {
	let text = symbols[Math.floor(Math.random() * symbols.length)];
	return text;
}

// COPY PASSWORD
copyBtn.addEventListener("click", async () => {
	const copyText = document.createElement("textarea");
	const pass = passwordText.textContent;

	if (!pass) {
		return;
	}

	copyText.value = pass;
	document.body.appendChild(copyText);
	copyText.select();
	document.execCommand("copy");
	copyText.remove();

	alert("copied");
});
