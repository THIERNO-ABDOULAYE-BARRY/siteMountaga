
import './CheckoutForm.css';
import React from 'react';
import { useState } from 'react';

export default function CheckoutForm({ total, onClose, cart }) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    quartier: '',
    ville: '',
    paiementType: 'unique',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      // Envoi des données au backend
      const response = await fetch('http://localhost:5000/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          produits: cart,
          total: total,
        }),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi de la commande');
      }
      setSubmitSuccess(true);
      localStorage.removeItem('cart');
      window.dispatchEvent(new Event('cartUpdated'));
    } catch (error) {
      setSubmitError('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="checkout-success">
        <div className="checkout-success-card">
          <div className="checkout-success-icon">
            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 32, color: '#059669' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="checkout-success-title">Commande confirmée !</h2>
          <p className="checkout-success-text">
            Merci pour votre commande. Nous vous contacterons  pour organiser la livraison.
          </p>
          <button
            onClick={onClose}
            className="checkout-btn-success"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-bg">
      <div className="checkout-card">
        <div className="checkout-header">
          <h2 className="checkout-title">Finaliser votre commande</h2>
          <button
            onClick={onClose}
            className="checkout-close-btn"
            title="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: 24, width: 24 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="checkout-summary">
          <h3 className="checkout-summary-title">Récapitulatif de votre commande</h3>
          <div className="checkout-summary-row">
            <span>Total</span>
            <span className="checkout-summary-total">{total.toFixed(2)} GNF</span>
          </div>
          <div className="checkout-summary-note">Paiement à la livraison uniquement</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="checkout-form">
            <div className="checkout-form-group">
              <label htmlFor="prenom" className="checkout-label">Prénom *</label>
              <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required className="checkout-input" />
            </div>
            <div className="checkout-form-group">
              <label htmlFor="nom" className="checkout-label">Nom *</label>
              <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required className="checkout-input" />
            </div>
            <div className="checkout-form-group">
              <label htmlFor="email" className="checkout-label">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="checkout-input" />
            </div>
            <div className="checkout-form-group">
              <label htmlFor="telephone" className="checkout-label">Téléphone *</label>
              <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required className="checkout-input" />
            </div>
            <div className="checkout-form-group-2">
              <label htmlFor="adresse" className="checkout-label">Adresse</label>
              <input type="text" id="adresse" name="adresse" value={formData.adresse} onChange={handleChange} className="checkout-input" />
            </div>
            <div className="checkout-form-group">
              <label htmlFor="quartier" className="checkout-label">Quartier *</label>
              <input type="text" id="quartier" name="quartier" value={formData.quartier} onChange={handleChange}  className="checkout-input" />
            </div>
            <div className="checkout-form-group">
              <label htmlFor="ville" className="checkout-label">Ville *</label>
              <input type="text" id="ville" name="ville" value={formData.ville} onChange={handleChange} required className="checkout-input" />
            </div>
            <div className="checkout-form-group-2">
              <label className="checkout-label">Option de paiement  *</label>
              <div className="checkout-radio-row">
                <label className="checkout-radio-label">
                  <input type="radio" name="paiementType" value="unique" checked={formData.paiementType === 'unique'} onChange={handleChange} className="checkout-radio-input" />
                  <span>Paiement à la livraison</span>
                </label>
                
              </div>
            </div>
            <div className="checkout-form-group-2">
              <label htmlFor="message" className="checkout-label">Message (optionnel)</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="3" className="checkout-textarea"></textarea>
            </div>
          </div>
          {submitError && (
            <div className="checkout-error">{submitError}</div>
          )}
          <div className="checkout-actions">
            <button type="button" onClick={onClose} className="checkout-btn-cancel">Annuler</button>
            <button type="submit" disabled={isSubmitting} className="checkout-btn-submit">
              {isSubmitting ? (
                <>
                  <svg style={{ animation: 'spin 1s linear infinite', height: 18, width: 18 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Traitement...
                </>
              ) : (
                'Envoyer la commande'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
