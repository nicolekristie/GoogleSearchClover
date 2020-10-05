const GOOGLE_LOGO = '#hplogo'
const SEARCH_FIELD = '.gLFyf.gsfi';
const FIRST_RESULT = '//*[@id="tads"]/div[1]/div/div/div[1]/a/div[1]/span';


const googleLogo = () => {
    return GOOGLE_LOGO
}

const googleSeachField = () => {
    return SEARCH_FIELD
}

const firtResult = () => {
    return FIRST_RESULT
}


exports.googleLogo = googleLogo();

exports.googleSearchField  = googleSeachField();

exports.firstResult = firtResult();