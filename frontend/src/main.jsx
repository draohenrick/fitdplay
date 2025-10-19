import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Products from './pages/Products.jsx'
import Sellers from './pages/Sellers.jsx'
import Sales from './pages/Sales.jsx'
import Reports from './pages/Reports.jsx'
import Settings from './pages/Settings.jsx'
import Support from './pages/Support.jsx'
import './styles.css'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/produtos' element={<Products/>} />
        <Route path='/vendedores' element={<Sellers/>} />
        <Route path='/vendas' element={<Sales/>} />
        <Route path='/relatorios' element={<Reports/>} />
        <Route path='/configuracoes' element={<Settings/>} />
        <Route path='/suporte' element={<Support/>} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
