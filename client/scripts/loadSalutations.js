export async function loadSalutations() {
    const response = fetch('/api/salutations')
        .then(res => res.json())
        .then(salutations => {
            return salutations;
        });
    return response;
}