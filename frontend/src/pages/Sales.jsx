import React, { useEffect, useState } from 'react';
import API from '../api';
import Layout from '../components/Layout.jsx';

export default function Sales(){
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(()=>{ load(); },[]);

  async function load(){
    const p = await API.get('/products'); setProducts(p.data);
    const s = await API.get('/sales'); setSales(s.data);
  }

  function addToCart(product){
    const found = cart.find(c=>c.productId===product._id);
    if(found){ setCart(cart.map(c=> c.productId===product._id ? {...c, qty: c.qty+1} : c)); }
    else setCart([...cart, { productId: product._id, name: product.name, qty:1 }]);
  }

  async function checkout(){
    await API.post('/sales', { items: cart });
    setCart([]);
    load();
  }

  return (
    <Layout>
      <div className="card">
        <h2>Nova Venda</h2>
        <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
          {products.map(p=> (
            <div key={p._id} style={{border:'1px solid #eee', padding:8, borderRadius:6}}>
              <div>{p.name}</div>
              <div>R$ {p.price.toFixed(2)}</div>
              <div>Estoque: {p.stock}</div>
              <button className="btn" onClick={()=>addToCart(p)}>Adicionar</button>
            </div>
          ))}
        </div>
        <div style={{marginTop:12}}>
          <h3>Carrinho</h3>
          <ul>
            {cart.map(c=> <li key={c.productId}>{c.name} x {c.qty}</li>)}
          </ul>
          <button className="btn" onClick={checkout}>Finalizar Venda</button>
        </div>
      </div>

      <div style={{height:12}} />

      <div className="card">
        <h3>Vendas Recentes</h3>
        <table style={{width:'100%'}}>
          <thead><tr><th>Data</th><th>Itens</th><th>Total</th></tr></thead>
          <tbody>
            {sales.map(s=> (
              <tr key={s._id}><td>{new Date(s.createdAt).toLocaleString()}</td><td>{s.items.map(i=>i.name).join(', ')}</td><td>R$ {s.total.toFixed(2)}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
