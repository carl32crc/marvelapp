
const resume = () => {

    let resume = document.createElement('div'),
        elementContainer = document.getElementById('app'),
        howOldAreYou = document.getElementById('howOldAreYou');

		if(howOldAreYou) {
			elementContainer.removeChild(howOldAreYou)
		}

		resume.innerHTML = `<h1>Resume</h1><div><button onclick="ui.sendPersonalData()">Send</button></div>`
		resume.id = 'resume'
		elementContainer.appendChild(resume)
}

export {
    resume
}