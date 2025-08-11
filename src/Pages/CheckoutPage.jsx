import React from 'react';
import CheckoutForm from '../Components/CartItems/CheckoutForm';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  // On récupère les données passées via state
  const { total, cart } = location.state || { total: 0, cart: [] };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', background: '#f5f5f5', paddingTop: 60 }}>
      <div style={{ width: '100%', maxWidth: 900 }}>
        <CheckoutForm
          total={total}
          cart={cart}
          onClose={() => navigate(-1)}
        />
      </div>
    </div>
  );
}
