
const welcome = (personalInfo) => {

    let welcome = document.createElement('div'),
        elementContainer = document.getElementById('app'),
        howOldAreYou = document.getElementById('howOldAreYou');

		if(howOldAreYou) {
			elementContainer.removeChild(howOldAreYou)
		}

        welcome.innerHTML = `
            <h1>Welcome</h1>
            <input
              name="name"  
              onblur="!this.value ? this.value='Your Entry' : this.value" onfocus="this.value=''" 
              onchange="ui.setName(this.value)"
              type="text"  
              value="${personalInfo.name}" 
            />
            <div>
              <button onclick="ui.next()">Next</button>
            </div>`
    
		welcome.id = 'welcome'
		elementContainer.appendChild(welcome)
}

export {
    welcome
}