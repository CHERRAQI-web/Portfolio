import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailJsReady, setIsEmailJsReady] = useState(false);
  
  // EmailJS credentials
  const emailJsUserId = 'oUJu8bqObWc_Yzwt2'; 
  const emailJsServiceId = 'service_cm5ot62'; 
  const emailJsTemplateId = 'template_ydhl8yi'; 

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init(emailJsUserId);
        setIsEmailJsReady(true);
      }
    };
    script.onerror = () => {
      console.error("Failed to load EmailJS SDK.");
      setStatusMessage('Erreur : Impossible de charger le service d\'envoi d\'email.');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [emailJsUserId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = formData.name.trim() !== '' && formData.email.trim() !== '' && formData.message.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailJsReady) {
      setStatusMessage('Le service d\'envoi d\'email n\'est pas encore prêt. Veuillez patienter.');
      return;
    }

    if (isFormValid) {
      setIsSubmitting(true);
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      if (window.emailjs) {
        window.emailjs.send(emailJsServiceId, emailJsTemplateId, templateParams)
          .then((result) => {
            console.log('Email successfully sent!', result.text);
            setStatusMessage('Message envoyé avec succès ! Merci de m\'avoir contacté.');
            setFormData({ name: '', email: '', message: '' });
            // Supprimer le message après 5 secondes
            setTimeout(() => {
              setStatusMessage('');
            }, 5000); 
          }, (error) => {
            console.error('Email sending failed:', error.text);
            setStatusMessage('Échec de l\'envoi du message. Veuillez réessayer.');
            // Supprimer le message après 5 secondes
            setTimeout(() => {
              setStatusMessage('');
            }, 5000);
          })
          .finally(() => {
            setIsSubmitting(false);
          });
      } else {
        console.error('EmailJS SDK not loaded.');
        setStatusMessage('Erreur : L\'envoi du message a échoué. Veuillez réessayer.');
        setIsSubmitting(false);
      }
    } else {
      setStatusMessage('Veuillez remplir tous les champs.');
      // Supprimer le message après 5 secondes
      setTimeout(() => {
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <div id="contact" className="bg-gray-950 py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-gray-900 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-800">
          <h2 className="text-4xl font-extrabold text-center text-white mb-4">Contact Me</h2>
          <p className="text-center text-lg text-gray-400 mb-8">
           If you like what you see, let's work together. I bring rapid solutions to make the life of my clients easier. Have any questions ? Reach out to me from this contact form and I will get back to you shortly
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input 
                type="text" 
                name="name"
                placeholder="Votre nom *" 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                placeholder="Votre email *" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <textarea 
                name="message"
                placeholder="Votre message *" 
                rows="6" 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className={`inline-block text-white font-bold py-3 px-10 rounded-full shadow-lg transition-colors ${isFormValid && !isSubmitting ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 cursor-not-allowed'}`}
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
          {statusMessage && (
            <div className={`mt-4 p-4 text-center rounded-lg ${statusMessage.includes('succès') ? 'bg-green-500' : 'bg-red-500'} text-white`}>
              {statusMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;