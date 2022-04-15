const initDelete = document.getElementById('initDelete');
const itemDeleted = document.getElementById('item-name');

const titleHeader = document.getElementById('title-header')

const cancelButton = document.querySelector('.cancel');
const deleteButton = document.querySelector('.delete');

const heroSec = document.querySelector('.hero')
const heroZombie = document.querySelector('.hero-zombie')
const header = document.querySelector('.header')
const zombieAudio = document.getElementById('zombie-sound')

let valueDataAttribute = initDelete.getAttribute('data-name')

const modalShown = document.getElementById('modal')

const fillDeletedItem = () => { itemDeleted.innerHTML = valueDataAttribute.toUpperCase() }
const openModal = () => {
    modalShown.style.display = 'flex'
    initDelete.style.display = 'none'
    fillDeletedItem()
}

initDelete.addEventListener('click', openModal)

const closeModal = () => {
    modalShown.style.display = 'none'
    initDelete.style.display = 'block'
}

cancelButton.addEventListener('click', closeModal)

const deleteFunction = () => {
    modalShown.style.display = 'none'
    initDelete.style.display = 'none'


    if (modalShown.style.display === "none" && initDelete.style.display === "none") {
        console.log('funcionou')
        heroSec.style.display = 'none'
        heroZombie.style.display = 'block'
        document.body.style.backgroundColor = "#454545";
        header.style.backgroundColor = "#3A3535"
        titleHeader.style.color = "#F3F3F3";
        zombieAudio.play()

        setTimeout(() => {
            window.location.reload(); 
        }, 18000);

    } else {
        console.log('não funcionou')
    }
}

deleteButton.addEventListener('click', deleteFunction)


titleHeader.addEventListener('click', () => {
    window.location.reload();
})