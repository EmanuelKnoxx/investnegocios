import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xayvkngk");
  if (state.succeeded) {
      return <p>Agradecemos o seu contato, em breve um de nossos atendentes entrará em contato!</p>;
  }
  return (
      <form id="form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Endereço de Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
       Enviar
      </button>
    </form>
  );
}

export default ContactForm;