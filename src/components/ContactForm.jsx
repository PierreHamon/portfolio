import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "984b7e19-f80f-4788-8f1c-221e696af6fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <form onSubmit={onSubmit} className='flex flex-col'>
      <input type="text" name="name" required placeholder="ex : Mike Shinoda" className='formulaire-input'/>
      <input type="email" name="email" required placeholder="ex : mikeshinod@gmail.com" className='formulaire-input'/>
      <input type="text" name="subject" required placeholder="ex : Entretien d'embauche" className='formulaire-input'/>
      <textarea name="message" required></textarea>
      <button type="submit">Submit</button>
      <p>{result}</p>
    </form>
  );
}