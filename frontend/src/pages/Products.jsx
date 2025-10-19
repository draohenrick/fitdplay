import React, { useEffect, useState } from 'react';
import API from '../api';
import Layout from '../components/Layout.jsx';

export default function Products(){
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({name:'', sku:'', price:0, stock:0});

  useEffect(()=>{ load(); },[]);

  async function load(){
    const res = await API.get('/products');
    setProducts(res.data);
  }

  async function save(){
    await API.post('/products', form);
    setForm({name:'', sku:'', price:0, stock:0});
    load();
  }

  return (
    <Layout>
      <div className="card">
        <h2>Produtos</h2>
        <div style={{display:'flex', gap:8}}>
          <input className="input" placeholder="Nome" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          <input className="input" placeholder="SKU" value={form.sku} onChange={e=>setForm({...form,sku:e.target.value})} />
          <input className="input" placeholder="Preço" value={form.price} onChange={e=>setForm({...form,price:parseFloat(e.target.value||0)})} />
          <input className="input" placeholder="Estoque" value={form.stock} onChange={e=>setForm({...form,stock:parseInt(e.target.value||0)})} />
          <button className="btn" onClick={save}>Adicionar</button>
        </div>
        <div style={{marginTop:12}}>
          <table style={{width:'100%'}}>
            <thead><tr><th>Produto</th><th>SKU</th><th>Preço</th><th>Estoque</th></tr></thead>
            <tbody>
              {products.map(p=> (
                <tr key={p._id}><td>{p.name}</td><td>{p.sku}</td><td>R$ {p.price.toFixed(2)}</td><td>{p.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
