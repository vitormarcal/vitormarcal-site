function populateUfs(event) {
    const ufSelect = document.querySelector("select[name=uf]");
    
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then( res => res.json())
    .then( states => {

        states.forEach(state => {
            ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`
        });
        
    });
}

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]");
    const ufValue = event.target.value;

    const stateInput = document.querySelector("input[name=state]");
    
    const  indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;

    citySelect.innerHTML = '<option value="">Selecione a cidade</option>';
    citySelect.disabled = true;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    fetch(url)
    .then( res => res.json())
    .then( cities => {

        citySelect.innerHTML = cities.reduce((innerHTML, city) => {
            return innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }, citySelect.innerHTML);

        citySelect.disabled = false;
        
    });
}

const collectedItems = document.querySelector("input[name=items]");
let selectedItems = [];
function handleSelectedItem(event) {

    const itemLi = event.target;
    itemLi.classList.toggle('selected')
    const itemId = itemLi.dataset.id;

    const alreadySelected = selectedItems.findIndex(item => item == itemId);

    if(alreadySelected >= 0) {
        selectedItems = selectedItems.filter(item => item != itemId);
    } else {
        selectedItems.push(itemId);
    }

    collectedItems.value = selectedItems;

}

populateUfs();


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities);


const itemsToCollect = document.querySelectorAll('.items-grid li');

for(const item of itemsToCollect) {
    item.addEventListener('click', handleSelectedItem)
}