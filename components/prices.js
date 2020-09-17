import { useState } from 'react';

const Prices = ({ data }) => {
  let [currency, setCurrency] = useState('USD');

  return (
    <>
      <ul className='list-group'>
        <li className='list-group-item'>
          Bitcoin rate for {data.bpi[currency].description} :{' '}
          <span className='badge badge-primary'>{data.bpi[currency].code}</span>{' '}
          <strong>{data.bpi[currency].rate}</strong>
        </li>
      </ul>
      <select
        onChange={(e) => setCurrency(e.target.value)}
        className='form-control'>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='GBP'>GBP</option>
      </select>
    </>
  );
};
export default Prices;
