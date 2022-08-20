function getInputValueById(nameOfInputId) {
    const getInputId = document.getElementById(nameOfInputId);
    const getInputValueAsString = getInputId.value; 
    const inputValueForUse = parseFloat(getInputValueAsString);
    return inputValueForUse;
}

function reset(nameOfInputIdForResetData){
    const getInputId = document.getElementById(nameOfInputIdForResetData);
    getInputId.value = '';
}

function removeInnerValue(getInnerTextId){
    const getInnerId = document.getElementById(getInnerTextId);
    getInnerId.innerText = '';
}

function passInnerText(nameOfInnerTextId, innerNewValue){
    const getInnerTextId = document.getElementById(nameOfInnerTextId);
    getInnerTextId.innerText = innerNewValue;
}