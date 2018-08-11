
const isNumeric = (num) => {
  return !isNaN(num)
}

const isValidValues = (personalInfo) => {
    return personalInfo.name !== 'Your Entry' && personalInfo.years !== 'Your Entry' ? true : false;
}

export {
    isNumeric,
    isValidValues
}