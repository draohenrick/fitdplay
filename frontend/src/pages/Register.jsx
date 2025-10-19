import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [tenantName, setTenantName] = useState('');
  const [slug, setSlug] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const [error, setError] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    try{
      const res = await API.post('/auth/register', { tenantName, slug, cnpj, name, cpf, email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('tenantId', res.data.tenant._id);
      localStorage.setItem('tenantName', res.data.tenant.name);
      nav('/dashboard');
    }catch(err){
      setError(err.response?.data?.error || 'Erro no cadastro');
    }
  }

  return (
    <div className="container">
      <div className="card" style={{maxWidth:720, margin:'24px auto'}}>
        <h2>Cadastro da Loja</h2>
        <form onSubmit={handleSubmit}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
            <input className="input" placeholder="Nome da Loja" value={tenantName} onChange={e=>setTenantName(e.target.value)} />
            <input className="input" placeholder="Slug (ex: minha-loja)" value={slug} onChange={e=>setSlug(e.target.value)} />
            <input className="input" placeholder="CNPJ" value={cnpj} onChange={e=>setCnpj(e.target.value)} />
            <input className="input" placeholder="Email comercial" value={email} onChange={e=>setEmail(e.target.value)} />
          </div>
          <h3>Gerente</h3>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
            <input className="input" placeholder="Nome do gerente" value={name} onChange={e=>setName(e.target.value)} />
            <input className="input" placeholder="CPF do gerente" value={cpf} onChange={e=>setCpf(e.target.value)} />
            <input className="input" placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)} />
          </div>
          {error && <div style={{color:'red'}}>{error}</div>}
          <div style={{marginTop:12}}><button className="btn">Criar Loja</button></div>
        </form>
      </div>
    </div>
  )
}
