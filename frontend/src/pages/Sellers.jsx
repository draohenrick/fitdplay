import React, { useEffect, useState } from 'react';
import API from '../api';
import Layout from '../components/Layout.jsx';

export default function Sellers(){
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({name:'', cpf:'', email:''});

  useEffect(()=>{ load(); },[]);

  async function load(){
    const res = await API.get('/sellers');
    setUsers(res.data);
  }

  async function save(){
    await API.post('/sellers', form);
    setForm({name:'', cpf:'', email:''});
    load();
  }

  return (
    <Layout>
      <div className="card">
        <h2>Vendedores</h2>
        <div style={{display:'flex', gap:8}}>
          <input className="input" placeholder="Nome" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          <input className="input" placeholder="CPF" value={form.cpf} onChange={e=>setForm({...form,cpf:e.target.value})} />
          <input className="input" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          <button className="btn" onClick={save}>Criar</button>
        </div>
        <div style={{marginTop:12}}>
          <table style={{width:'100%'}}>
            <thead><tr><th>Nome</th><th>CPF</th><th>Código</th></tr></thead>
            <tbody>
              {users.map(u=> (
                <tr key={u._id}><td>{u.name}</td><td>{u.cpf}</td><td>{u.sellerCode}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
