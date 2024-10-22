import React from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = ({ products }) => { // Accept products as a prop
  return (
    <div className='popular'>
      <h1>POPULAR IN SKINCARE PRODUCTS</h1>
      <hr />
      <div className="popular-item">
        {products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
