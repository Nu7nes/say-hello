import { ramdonColor, randomSettings, selectFontFamily } from './stickersSettings.js';

export function renderizeSalutations(salutations) {
    const salutationsContainer = document.querySelector('#salutationsContainer');
    const salutationsList = document.createElement('ul');
    salutations.forEach(salutation => {
        const salutationItem = document.createElement('li');
        salutationItem.className = 'sticker';
        salutationItem.textContent = salutation.message;
        salutationItem.style.top = `${randomSettings().x}%`
        salutationItem.style.left = `${randomSettings().y}%`
        salutationItem .style.transform = `rotate(${randomSettings().rotate}deg)`
        salutationItem.style.color = ramdonColor();
        salutationItem.style.fontFamily = selectFontFamily();
        salutationItem.style.fontSize = `${randomSettings().fontSize}vw`;
        salutationsList.appendChild(salutationItem);
    });
    salutationsContainer.appendChild(salutationsList);
}