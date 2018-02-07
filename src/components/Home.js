import React from 'react';

export default (props) => (
  <div>
    <h2>Home</h2>
    <pre>{JSON.stringify(props.rates, null, 2)}</pre>
    <select value={props.base} onChange={(event) => props.onLoadCurrency(event.target.value)}>
      <option value="RUB">RUB</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>
  </div>
);
