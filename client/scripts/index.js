import { addSalutation } from "./addSalutation.js";
import { loadSalutations } from "./loadSalutations.js";
import { renderizeSalutations } from "./rederizeSalutations.js";

async function init() {
    const salutations = await loadSalutations();
    console.log(salutations);
    renderizeSalutations(salutations);
}

init();

document.getElementById('submitSalutation').addEventListener('submit', async (e) => {
    const response = await addSalutation(e.target[0].value);
    console.log(response);
});

