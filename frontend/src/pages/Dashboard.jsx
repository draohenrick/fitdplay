import React, { useEffect, useState } from 'react';
import API from '../api';
import Layout from '../components/Layout.jsx';

export default function Dashboard(){
  const [overview, setOverview] = useState(null);
  const tenantName = localStorage.getItem('tenantName') || 'Demo FitStore';

  useEffect(()=>{
    async function load(){
      try{
        const res = await API.get('/reports/overview');
        setOverview(res.data);
      }catch(err){
        console.error(err);
      }
    }
    load();
  },[]);

  return (
    <Layout>
      <div className="card">
        <h2>Dashboard</h2>
        <div className="small">Loja: <strong>{tenantName}</strong></div>
      </div>

      <div style={{height:12}} />

      <div className="grid">
        <div className="card">
          <div className="small">Vendas Hoje</div>
          <div className="stat">R$ {overview ? overview.todaySales.toFixed(2) : '0.00'}</div>
          <div className="small">{overview ? overview.todayCount+' vendas' : '0 vendas'}</div>
        </div>
        <div className="card">
          <div className="small">Vendas do Mês</div>
          <div className="stat">R$ {overview ? overview.monthSales.toFixed(2) : '0.00'}</div>
          <div className="small">{overview ? overview.monthCount+' vendas' : '0 vendas'}</div>
        </div>
        <div className="card">
          <div className="small">Valor em Estoque</div>
          <div className="stat">R$ 0.00</div>
          <div className="small">{overview ? overview.productsCount+' produtos' : '0 produtos'}</div>
        </div>
        <div className="card">
          <div className="small">Estoque Baixo</div>
          <div className="stat">{overview ? overview.lowStockCount : 0}</div>
          <div className="small">Produtos precisam reposição</div>
        </div>
      </div>
    </Layout>
  )
}
