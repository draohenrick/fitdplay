import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout.jsx';
import API from '../api';

export default function Settings(){
  const [tenant, setTenant] = useState(null);
  const tenantId = localStorage.getItem('tenantId');

  useEffect(()=>{ if(tenantId) load(); },[]);

  async function load(){
    const res = await API.get('/tenants/' + tenantId);
    setTenant(res.data);
  }

  async function uploadLogo(ev){
    const file = ev.target.files[0];
    const fd = new FormData();
    fd.append('logo', file);
    await API.post('/upload/logo/' + tenantId, fd, { headers: {'Content-Type': 'multipart/form-data'} });
    load();
  }

  return (
    <Layout>
      <div className="card">
        <h2>Configurações da Loja</h2>
        {tenant ? (
          <div>
            <div><strong>{tenant.name}</strong></div>
            <div className="small">CNPJ: {tenant.cnpj}</div>
            <div style={{marginTop:8}}>
              <label>Logo: </label>
              <input type="file" onChange={uploadLogo} />
            </div>
            {tenant.logoPath && <div style={{marginTop:8}}><img src={'http://localhost:4000/' + tenant.logoPath} style={{maxWidth:200}} alt="logo" /></div>}
          </div>
        ) : <div className="small">Carregando...</div>}
      </div>
    </Layout>
  )
}
