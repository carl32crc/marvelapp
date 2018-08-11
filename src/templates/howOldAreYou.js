

const howOldAreYou = (personalInfo) => {

    let howOldAreYou = document.createElement('div'),
        elementContainer = document.getElementById('app'),
        elementRemove = document.getElementById('welcome') || document.getElementById('resume');

		if(elementRemove) {
			elementContainer.removeChild(elementRemove)
		}

        howOldAreYou.innerHTML = `
            <h1>How old are You?</h1>
            <input
              name="years"  
              onblur="!this.value ? this.value='Your Entry' : this.value" onfocus="this.value=''"
              onchange="ui.setYears(this.value)" 
              type="text"
              value="${personalInfo.years}"
            />
            <div>
              <button onclick="ui.back()">Back</button>
              <button onclick="ui.next()">Next</button>
            </div>`
            
		howOldAreYou.id = 'howOldAreYou'
		elementContainer.appendChild(howOldAreYou)
}

export {
    howOldAreYou
}