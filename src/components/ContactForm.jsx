import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  // 1. État pour suivre la valeur des champs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  // 2. Mise à jour de l'état lors de la saisie
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Réinitialisation du champ ciblée
  const handleClear = (fieldName) => {
    setFormData((prev) => ({ ...prev, [fieldName]: "" }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append("access_key", "984b7e19-f80f-4788-8f1c-221e696af6fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data
    });

    const resData = await response.json();
    if (resData.success) {
      setResult("Success!");
      // Réinitialise les états et le formulaire après envoi
      setFormData({ name: "", email: "", subject: "" });
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit} className='flex flex-col'>
      {/* Champ NOM */}
      <div className='relative'>
        <input 
          type="text" 
          name="name" 
          required 
          placeholder="Nom" 
          value={formData.name}
          onChange={handleChange}
          className='formulaire-input pr-10'
        />
        {formData.name && (
          <button
            type="button"
            onClick={() => handleClear("name")}
            className="formulaire-cross"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 30 30" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <circle cx="15" cy="15" r="12" />
              <path d="M19 11l-8 8" />
              <path d="M11 11l8 8" />
            </svg>
          </button>
        )}
      </div>

      {/* Champ EMAIL */}
      <div className='relative'>
        <input 
          type="email" 
          name="email" 
          required 
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          className='formulaire-input pr-10'
        />
        {formData.email && (
          <button
            type="button"
            onClick={() => handleClear("email")}
            className="formulaire-cross"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 30 30" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <circle cx="15" cy="15" r="12" />
              <path d="M19 11l-8 8" />
              <path d="M11 11l8 8" />
            </svg>
          </button>
        )}
      </div>

      {/* Champ SUJET */}
      <div className='relative'>
        <input 
          type="text" 
          name="subject" 
          required 
          placeholder="Sujet" 
          value={formData.subject}
          onChange={handleChange}
          className='formulaire-input pr-10'
        />
        {formData.subject && (
          <button
            type="button"
            onClick={() => handleClear("subject")}
            className="formulaire-cross"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 30 30" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <circle cx="15" cy="15" r="12" />
              <path d="M19 11l-8 8" />
              <path d="M11 11l8 8" />
            </svg>
          </button>
        )}
      </div>

      {/* Champ MESSAGE */}
      <div>
        <textarea name="message" required placeholder="Message" className='formulaire-input h-50'></textarea>
      </div>

      <button type="submit" className='bg-purple-second px-15 py-3 rounded-md my-7 mx-70 font-open-sans text-white font-bold text-lg cursor-pointer'>
        Envoyer
      </button>
      <p>{result}</p>
    </form>
  );
}