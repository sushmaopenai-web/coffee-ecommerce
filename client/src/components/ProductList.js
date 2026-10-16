import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:20}}>
      {products.map(p => (
        <div key={p._id} style={{border:'1px solid #eee', padding:12}}>
          <h3>{p.name}</h3>
          <p style={{color:'#666'}}>{p.description}</p>
          <p><strong>${p.price}</strong></p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
