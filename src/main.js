import { howOldAreYou } from './templates/howOldAreYou';
import { resume } from './templates/resume';
import { welcome } from './templates/welcome';
import { errors } from './templates/errors';
import { dataToServer } from './services';
import { controlBrowserButtonsBackAndForward } from './utilities/controlBrowserButtonsBackAndForward';
import { isNumeric, isValidValues } from './utilities/errorControlForms';

import './styles.css';

// APP MARVEL

const personalInfo = {
    name: 'Your Entry',
    years: 'Your Entry'
}

welcome(personalInfo)

const next = () => {
    let howOldAreYouTemplate = document.getElementById('howOldAreYou');
    let elementError = document.getElementById('error-message-numeric');
    if(!elementError) {
        howOldAreYouTemplate ? resume(personalInfo) : howOldAreYou(personalInfo);
    }
}

const back = () => {
    welcome(personalInfo) 
}

const setName = (value) => {
    personalInfo.name = value;
}

const setYears = (value) => {
    if(isNumeric(value)) {
        let elementError = document.getElementById('error-message-numeric');
        if(elementError) {
            elementError.remove(elementError)
        }
        personalInfo.years = Number(value)
    } else {
        errors('Need write a number!');
    }
}

const sendPersonalData = () => {
    if(isValidValues(personalInfo)) {
        let elementError = document.getElementById('error-message-valid-values');
        if(elementError) {
            elementError.remove(elementError)
        }
        dataToServer(personalInfo)
        errors('All data ok send.', { validValues: false }, personalInfo, {allData: true})
    } else {
        errors('Need write valid a name or years before sending', { validValues: true })
    }
}

// CONTROL BROWSER BACK/FORWARD BUTTONS

controlBrowserButtonsBackAndForward();

window.addEventListener('next', () => {
    let welcome = document.getElementById('welcome');
    let howOldAreYouTemplate = document.getElementById('howOldAreYou');

    if(welcome) {
        howOldAreYou(personalInfo); 
    }

    if(howOldAreYouTemplate) {
        resume(personalInfo);
    }

}, false);
    
window.addEventListener('previous', () => {
    let howOldAreYouTemplate = document.getElementById('howOldAreYou');
    let resume = document.getElementById('resume');

    if (howOldAreYouTemplate) {
        welcome(personalInfo);
    }

    if(resume) {
        howOldAreYou(personalInfo);
    }

}, false);

export {
    next,
    back,
    setYears,
    sendPersonalData,
    setName
}
