import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailJsReady, setIsEmailJsReady] = useState(false);
  
  // EmailJS credentials
  const emailJsUserId = import.meta.env.VITE_EMAILJS_USER_ID; 
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID; 
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"]')) {
      if (window.emailjs) {
        window.emailjs.init(emailJsUserId);
        setIsEmailJsReady(true);
      }
      return;
    }

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
      setStatusMessage('Error: Failed to load email service.');
    };
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [emailJsUserId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = formData.name.trim() !== '' && 
                    formData.email.trim() !== '' && 
                    formData.message.trim() !== '' &&
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmailJsReady) {
      setStatusMessage('Email service is not ready yet. Please wait.');
      return;
    }
    if (!isFormValid) {
      setStatusMessage('Please fill all fields correctly.');
      setTimeout(() => setStatusMessage(''), 5000);
      return;
    }
    
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
          setStatusMessage('Message sent successfully! Thank you for contacting me.');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatusMessage(''), 5000);
        }, (error) => {
          console.error('Email sending failed:', error.text);
          setStatusMessage('Failed to send message. Please try again.');
          setTimeout(() => setStatusMessage(''), 5000);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      console.error('EmailJS SDK not loaded.');
      setStatusMessage('Error: Message sending failed. Please try again.');
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage(''), 5000);
    }
  };

  return (
    <div id="contact" className="bg-gray-950 py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-gray-900 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-800">
          <h2 className="text-4xl font-extrabold text-center text-white mb-4">Contact Me</h2>
          <p className="text-center text-lg text-gray-400 mb-8">
            If you like what you see, let's work together. I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me from this contact form and I will get back to you shortly.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name *" 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                required
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                placeholder="Your Email *" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                required
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>
            <div>
              <textarea 
                name="message"
                placeholder="Your Message *" 
                rows="6" 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                required
                disabled={isSubmitting}
                aria-required="true"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className={`inline-block text-white font-bold py-3 px-10 rounded-full shadow-lg transition-colors ${isFormValid && !isSubmitting ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 cursor-not-allowed'}`}
                disabled={!isFormValid || isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
          {statusMessage && (
            <div className={`mt-4 p-4 text-center rounded-lg ${statusMessage.includes('success') ? 'bg-green-500' : 'bg-red-500'} text-white`} role="alert">
              {statusMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;