export const getLatest = (base) =>
  fetch(`https://api.fixer.io/latest?base=${base}`)
    .then((response) => response.json());
