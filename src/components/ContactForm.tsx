'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SubmitStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ 
    type: null, 
    message: '' 
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: 'Tous les champs sont requis'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Configuration EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Configuration EmailJS manquante. Contactez contact@twodevly.com');
      }

      // Envoi avec EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'TwoDevly',
        },
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Message envoyé avec succès ! Nous vous répondrons rapidement.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Erreur lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement à contact@twodevly.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      variants={scaleIn}
      className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-2xl"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6">
        {/* Message de statut */}
        {submitStatus.type && (
          <div className={`p-4 rounded-xl text-center ${
            submitStatus.type === 'success' 
              ? 'bg-green-500/20 text-green-100 border border-green-500/30' 
              : 'bg-red-500/20 text-red-100 border border-red-500/30'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:ring-2 focus:ring-[#FF5B04] focus:border-transparent outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="vous@exemple.fr"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:ring-2 focus:ring-[#FF5B04] focus:border-transparent outline-none"
          required
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Décrivez votre besoin..."
          value={formData.message}
          onChange={handleInputChange}
          className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:ring-2 focus:ring-[#FF5B04] focus:border-transparent resize-none outline-none"
          required
        ></textarea>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded-xl py-3.5 font-semibold text-white shadow-lg transition-all ${
            isSubmitting
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#FF5B04] to-[#ff7b33] shadow-[#FF5B04]/30 hover:shadow-[#FF5B04]/50'
          }`}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </motion.button>
      </div>
    </motion.form>
  );
}