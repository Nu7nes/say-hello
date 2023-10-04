export function addSalutation(salutation) { 
    const response = fetch('/api/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: salutation})
    }).then(res => res.json())
      .then(salutation => {
          return salutation;
      });
    return response;
}