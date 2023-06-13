import './index.css'
import  ReactDOM  from 'react-dom'
import React from 'react'
import Header from './components/Header'
import Card from './components/card'
import Footer from './components/Footer'
import Botao from './components/botao'
import Botao2 from './components/botao2'
const el = document.getElementById('root')
ReactDOM.render(
  <>
    
    <div className='conteiner'>
      <Header Titulo='Nome Squad' />
      <Botao2  Titulo='trocar tela'/>
      <div className = 'section' >
        <Card Titulo='Serra Junior Engenharia'/>
      </div>

        <Botao  Titulo='Mostrar/Esconder Card'/>
    </div>
      
    <Footer Titulo = 'COPYRIGHT Ⓒ 2023 - SERRA JUNIOR ENGENHARIA' />
    
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Magra&display=swap');
    </style>
    
  </>
  ,el)