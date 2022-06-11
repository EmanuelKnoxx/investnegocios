import React from 'react';
import './App.css';
import image from "./image.jpeg";
import ContactForm from './components/FormInvest';

function App() {
  return (
    <main id="main">
 
  <header class="header">
    <a href="/">Invest Soluções em Negocios</a>
    <nav>
       <ul class="menu">
          <li  ><a href="#sobre">Sobre</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="https://wa.me/message/JYD4RSQGMBRZD1">Contatos</a></li>
       </ul>
    </nav>
  </header>

    <figure id="img-div">
      <img
        id="image"
        src={image}
        width='100%'
        height-min='400px'
        height-max='450px'
        alt='fuu'
      />
    </figure>
    <section>
    <div class="container">
      <header class="header2">
        <h1 id="title" class="text-center">Cotações</h1>
        <p id="description" class="description text-center">
          Insira seus informações para melhor atende-lo.
        </p>
      </header>
      <form id="survey-form">
        
        <div class="form-group">
          <label id="name-label" for="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Insira seu nome"
            required
          />
        </div>
        <div class="form-group">
          <label id="email-label" for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Insira seu Email"
            required
          />
        </div>
        <div class="form-group">
          <label id="number-label" for="number"
            >Idade<span class="clue">(optional)</span></label
          >
          <input
            type="number"
            name="age"
            id="number"
            min="18"
            max="99"
            class="form-control"
            placeholder="Idade"
          />
        </div>
        <div class="form-group">
          <p>Qual o seu convênio?</p>
          <select id="dropdown" name="role" class="form-control" required>
            <option disabled selected value>Selecione seu convênio</option>
            <option value="INSS">INSS</option>
            <option value="Governo">Governo</option>
            <option value="Desempregado">Desempregado</option>
            <option value="preferNo">Prefere não dizer</option>
            <option value="other">Outros</option>
          </select>
        </div>
    
        <div class="form-group">
          <p>Você recomendaria a Invest Soluções para um amigo/conhecido?</p>
          <label>
            <input
              name="user-recommend"
              value="definitely"
              type="radio"
              class="input-radio"
              checked
            />Sim</label
          >
          <label>
            <input
              name="user-recommend"
              value="maybe"
              type="radio"
              class="input-radio"
            />Talvez</label
          >
    
          <label
            ><input
              name="user-recommend"
              value="not-sure"
              type="radio"
              class="input-radio"
            />Não tenho certeza</label
          >
        </div>
      </form>
    </div>
  </section>  
  <section id="info">
      
      
    <h3>
      Para mais informações e atendimentos entre em contato diretamente com nossos colaboradores pelo
      <a
        id="info-link"
        href="https://wa.me/message/JYD4RSQGMBRZD1"
            target="_blank"
            rel='noreferrer'
        ><u> WhatsApp</u></a
      >.
    </h3>
  </section>
      <ContactForm />
  </main>
    
  );
}

export default App;