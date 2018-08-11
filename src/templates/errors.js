
const errors = (message, validValues, pernalInfo, allDataok) => {

    let errorMessage = document.createElement('div'),
        elementContainer = document.querySelector('body'),
        errorValidValues = document.getElementById('error-message-valid-values');

		if(errorValidValues) {
			elementContainer.removeChild(errorValidValues)
		}

        errorMessage.innerHTML = `<h3>${message} ${pernalInfo ? `Name:${pernalInfo.name} Years:${pernalInfo.years}` : '' }</h3>`;

        if(!allDataok) {
            errorMessage.id = `error-message-${validValues ? 'valid-values' : 'numeric'}`;
        } else {
            errorMessage.id = 'all-data-ok'; 
        }
		
		elementContainer.appendChild(errorMessage);

}

export {
    errors
}