"use client";

import React, { useState } from 'react';

// Composant pour une seule question de la FAQ
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 mb-4">
      <button
        className="w-full text-left p-4 bg-[var(--surface)] rounded-lg hover:bg-[var(--primary-container)] transition-colors flex justify-between items-center text-[var(--neutral)] hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold ">{question}</span>
        <span className="text-[var(--primary)]">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-400 bg-[var(--surface)] rounded-b-lg">
          {answer}
        </div>
      )}
    </div>
  );
};

// Composant principal pour la section FAQ
const FAQSection = () => {
  const faqs = [
    {
      question: 'Quels sont les prérequis pour suivre les formations ?',
      answer: 'Aucun prérequis n\'est nécessaire, nos formations sont adaptées à tous les niveaux, du débutant à l\'expert.',
    },
    {
      question: 'Comment accéder aux ressources de la formation ?',
      answer: 'Une fois inscrit, vous aurez accès à toutes les ressources via votre tableau de bord personnel.',
    },
    {
      question: 'Est-il possible de suivre plusieurs formations en même temps ?',
      answer: 'Oui, vous pouvez suivre autant de formations que vous le souhaitez à votre propre rythme.',
    },
    {
      question: 'Quels sont les modes de paiement acceptés ?',
      answer: 'Nous acceptons les cartes de crédit, PayPal, et d\'autres modes de paiement en ligne.',
    },
    {
      question: 'Est-ce que les formations sont certifiantes ?',
      answer: 'Oui, à la fin de chaque formation, un certificat est délivré attestant de votre réussite.',
    },
  ];

  return (
    <section className="py-16  text-white"> { /* bg-gradient-to-b from-[#03001C] via-[#3122b4] to-[#2a246d] */ }
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold">FAQ</h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Vous avez des questions ? Nous avons les réponses. Retrouvez ici les réponses aux questions fréquemment posées.
          </p>
        </div>
        <div className="mt-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
