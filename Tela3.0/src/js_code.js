import './index.css'
import  ReactDOM  from 'react-dom'
import React from 'react'
import Header from './components/Header'
import Card from './components/card'
import Footer from './components/Footer'
const el = document.getElementById('root')
ReactDOM.render(
  <>
    {}
    <div className='conteiner'>
      <Header Titulo='Nome Squad' />
        <div className = 'section' >
          <Card titulo='Nome' idade={20} time='Vasco' sobrenome='Nome' />

          <Card titulo='Nome' idade={20} time='Vasco' sobrenome='Nome' />

          <Card titulo='Nome' idade={20} time='Vasco' sobrenome='Nome' />

        </div>
        <Footer Titulo = 'COPYRIGHT Ⓒ 2023 - SERRA JUNIOR ENGENHARIA' />
    </div>
    
    {}
    <style>
      
  
      @import url('https://fonts.googleapis.com/css2?family=Magra&display=swap');
    </style>
  
  </>
  ,el)