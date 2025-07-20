/**
 * Funnel Page Templates
 * This file contains the templates for different stages of the funnel.
 * The structure is designed to be compatible with the GrapesJS editor,
 * where each template has a 'pages' array, typically with one page.
 */


import {welcomeTemplates} from "./temp";
export const templates = {
    welcomeTemplates : welcomeTemplates.welcomeTemplates
   ,

  vslTemplates: {
    'vsl_focused': {
      name: 'Focused VSL',
      description: 'A centered video with a clear call-to-action.',
      thumbnail: 'https://placehold.co/400x300/f59e0b/ffffff?text=Focused+VSL',
      html: `
        <style>
          body{margin:0;font-family:Poppins,sans-serif;background:#1a1a1a;color:#e5e5e5;text-align:center}.container{padding:40px 20px}.headline{font-family:'Playfair Display',serif;font-size:3rem;margin-bottom:20px}.sub-headline{font-size:1.2rem;color:#b8b8b8;margin-bottom:30px}.video-wrapper{position:relative;padding-bottom:56.25%;height:0;max-width:800px;margin:20px auto;background:#000;border-radius:12px}.video-wrapper iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0}.cta-button{display:inline-block;background:#f59e0b;color:#fff;padding:15px 30px;text-decoration:none;border-radius:8px;font-weight:600;margin-top:30px;font-size:1.1rem;transition:background-color .3s ease}
        </style>
        <div class="container">
          <h1 class="headline">Watch Our Explainer Video</h1>
          <p class="sub-headline">Discover how our solution can transform your business.</p>
          <div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdefgh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <a href="#" class="cta-button">Get Started Now</a>
        </div>
      `,
      css: ''
    },
  },

  thankyouTemplates: {
    'default': {
      name: 'Default Thank You',
      description: 'A simple thank you page.',
      thumbnail: 'https://placehold.co/400x300/cccccc/333333?text=Thank+You',
      html: '<h1>Thank You!</h1><p>Your submission has been received.</p>',
      css: ''
    }
  },

  whatsappTemplates: {
    'default': {
      name: 'Default WhatsApp',
      description: 'A page to direct users to WhatsApp.',
      thumbnail: 'https://placehold.co/400x300/25D366/ffffff?text=WhatsApp',
      html: '<h1>Connect jassi on WhatsApp</h1><p>Click the button below to chat with us.</p><a href="https://wa.me/yourphonenumber" class="cta-button">Chat on WhatsApp</a>',
      css: ''
    }
  },

  productOfferTemplates: {
    'default': {
      name: 'Default Product Offer',
      description: 'A page showcasing a product offer.',
      thumbnail: 'https://placehold.co/400x300/FF5733/ffffff?text=Product+Offer',
      // FIX: Changed the old "dada" text to be more generic.
      html: '<h1>Special Product Offer</h1><p>Grab this amazing deal now!</p><img src="https://placehold.co/400x250?text=Product" alt="Product"/><a href="#" class="cta-button">Buy Now</a>',
      css: ''
    }
  },

  miscTemplates: {
    'scratch': {
      name: 'Start from Scratch',
      description: 'A completely blank canvas for your own design.',
      thumbnail: 'https://placehold.co/400x300/DDDDDD/000000?text=Blank+Canvas',
      html: '<div class="blank-page-container"><h1>Welcome!</h1><p>Start building your page here.</p></div>',
      css: `
        body {
          background-color: #f8f9fa;
          color: #333;
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
        }
        .blank-page-container {
          text-align: center;
          padding: 40px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .blank-page-container h1 {
          color: #007bff;
        }
      `
    }
  },
    appointmentTemplates: {
    'calendar_appointment': {
      name: 'Calendar Appointment',
      description: 'A clean appointment booking interface with calendar view',
      thumbnail: 'https://placehold.co/400x300/3b82f6/ffffff?text=Calendar+Booking',
      html: `
        <div class="appointment-container">
          <div class="appointment-header">
            <h1>Schedule Your Appointment</h1>
            <p>Select a date and time that works for you</p>
          </div>
          <div class="calendar-container" id="booking-calendar"></div>
          <div class="time-slots-container">
            <h3>Available Time Slots</h3>
            <div class="time-slots-grid" id="time-slots"></div>
          </div>
          <button class="book-button" id="book-button">Confirm Appointment</button>
        </div>
      `,
      css: `
        .appointment-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Inter', sans-serif;
        }
        .appointment-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .appointment-header h1 {
          color: #1e293b;
          font-size: 2.25rem;
          margin-bottom: 0.5rem;
        }
        .appointment-header p {
          color: #64748b;
          font-size: 1.1rem;
        }
        .calendar-container {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
        }
        .time-slots-container {
          margin-bottom: 2rem;
        }
        .time-slots-container h3 {
          color: #1e293b;
          margin-bottom: 1rem;
        }
        .time-slots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 0.75rem;
        }
        .time-slot {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 0.75rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .time-slot:hover {
          background: #e2e8f0;
        }
        .time-slot.selected {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        .book-button {
          width: 100%;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .book-button:hover {
          background: #2563eb;
        }
        .book-button:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }
      `
    },
    'minimal_appointment': {
      name: 'Minimal Appointment',
      description: 'A simple appointment booking form with minimal design',
      thumbnail: 'https://placehold.co/400x300/ffffff/000000?text=Minimal+Booking',
      html: `
        <div class="minimal-appointment">
          <h2>Book Your Session</h2>
          <form id="appointment-form">
            <div class="form-group">
              <label>Select Date</label>
              <input type="date" id="appointment-date" required>
            </div>
            <div class="form-group">
              <label>Select Time</label>
              <select id="appointment-time" required>
                <option value="">Choose a time</option>
                <option value="09:00">9:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
            </div>
            <div class="form-group">
              <label>Your Name</label>
              <input type="text" id="client-name" required>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" id="client-email" required>
            </div>
            <button type="submit" class="submit-btn">Book Now</button>
          </form>
        </div>
      `,
      css: `
        .minimal-appointment {
          max-width: 500px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Helvetica Neue', sans-serif;
        }
        .minimal-appointment h2 {
          text-align: center;
          font-weight: 300;
          margin-bottom: 2rem;
          color: #333;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #555;
        }
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: #000;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .submit-btn:hover {
          background: #333;
        }
      `
    },
    'service_appointment': {
      name: 'Service Selection',
      description: 'Appointment booking with service selection options',
      thumbnail: 'https://placehold.co/400x300/10b981/ffffff?text=Service+Booking',
      html: `
        <div class="service-appointment">
          <div class="appointment-header">
            <h1>Book Your Appointment</h1>
            <p>Choose a service and available time slot</p>
          </div>
          <div class="service-selection">
            <h3>Select Service</h3>
            <div class="service-options">
              <div class="service-option selected">
                <h4>Consultation</h4>
                <p>30 min • Free</p>
              </div>
              <div class="service-option">
                <h4>Full Session</h4>
                <p>60 min • ₹1500</p>
              </div>
              <div class="service-option">
                <h4>Premium</h4>
                <p>90 min • ₹2500</p>
              </div>
            </div>
          </div>
          <div class="calendar-view">
            <div class="calendar-header">
              <button class="nav-button">&lt;</button>
              <h3>June 2023</h3>
              <button class="nav-button">&gt;</button>
            </div>
            <div class="calendar-grid">
              <!-- Calendar days would be generated here -->
            </div>
          </div>
          <button class="confirm-button">Confirm Booking</button>
        </div>
      `,
      css: `
        .service-appointment {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Inter', sans-serif;
        }
        .appointment-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .appointment-header h1 {
          color: #064e3b;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .appointment-header p {
          color: #64748b;
        }
        .service-selection {
          margin-bottom: 2rem;
        }
        .service-selection h3 {
          color: #1e293b;
          margin-bottom: 1rem;
        }
        .service-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }
        .service-option {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .service-option.selected {
          background: #10b981;
          border-color: #10b981;
          color: white;
        }
        .service-option h4 {
          margin-bottom: 0.25rem;
        }
        .service-option p {
          font-size: 0.9rem;
          opacity: 0.8;
        }
        .calendar-view {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
        }
        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .nav-button {
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          color: #64748b;
        }
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
        }
        .calendar-day {
          text-align: center;
          padding: 0.5rem;
          border-radius: 4px;
          cursor: pointer;
        }
        .calendar-day.available:hover {
          background: #d1fae5;
        }
        .calendar-day.selected {
          background: #10b981;
          color: white;
        }
        .confirm-button {
          width: 100%;
          padding: 1rem;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .confirm-button:hover {
          background: #059669;
        }
      `
    }
  },

  paymentTemplates: {
    'checkout_page': {
      name: 'Checkout Page',
      description: 'A complete checkout page with order summary',
      thumbnail: 'https://placehold.co/400x300/8b5cf6/ffffff?text=Checkout+Page',
      html: `
        <div class="checkout-container">
          <div class="checkout-header">
            <h1>Complete Your Purchase</h1>
          </div>
          <div class="checkout-grid">
            <div class="payment-section">
              <h2>Payment Details</h2>
              <form id="payment-form">
                <div class="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" class="card-input">
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label>Expiration Date</label>
                    <input type="text" placeholder="MM/YY">
                  </div>
                  <div class="form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="123">
                  </div>
                </div>
                <div class="form-group">
                  <label>Name on Card</label>
                  <input type="text" placeholder="John Doe">
                </div>
                <button type="submit" class="pay-button">Pay Now</button>
              </form>
            </div>
            <div class="order-summary">
              <h2>Order Summary</h2>
              <div class="order-items">
                <div class="order-item">
                  <span>Premium Plan</span>
                  <span>₹2500</span>
                </div>
                <div class="order-item">
                  <span>Tax</span>
                  <span>₹375</span>
                </div>
              </div>
              <div class="order-total">
                <span>Total</span>
                <span>₹2875</span>
              </div>
            </div>
          </div>
        </div>
      `,
      css: `
        .checkout-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Inter', sans-serif;
        }
        .checkout-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .checkout-header h1 {
          color: #1e293b;
          font-size: 2rem;
        }
        .checkout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .payment-section, .order-summary {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
        .payment-section h2, .order-summary h2 {
          color: #1e293b;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #64748b;
          font-weight: 500;
        }
        .form-group input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .pay-button {
          width: 100%;
          padding: 1rem;
          background: #8b5cf6;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .pay-button:hover {
          background: #7c3aed;
        }
        .order-items {
          margin-bottom: 1.5rem;
        }
        .order-item {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .order-total {
          display: flex;
          justify-content: space-between;
          padding: 1rem 0;
          font-weight: 600;
          font-size: 1.1rem;
        }
      `
    },
    'minimal_payment': {
      name: 'Minimal Payment',
      description: 'A clean, minimal payment form with essential fields',
      thumbnail: 'https://placehold.co/400x300/ffffff/000000?text=Minimal+Payment',
      html: `
        <div class="minimal-payment">
          <div class="payment-header">
            <h2>Payment</h2>
            <p>Enter your payment details to complete the purchase</p>
          </div>
          <form id="payment-form">
            <div class="card-element">
              <!-- Card element would be injected here by payment processor -->
            </div>
            <div class="form-group">
              <label>Name on Card</label>
              <input type="text" placeholder="John Doe">
            </div>
            <button type="submit" class="submit-button">Pay ₹2500</button>
            <div class="payment-methods">
              <img src="https://via.placeholder.com/40" alt="Visa">
              <img src="https://via.placeholder.com/40" alt="Mastercard">
              <img src="https://via.placeholder.com/40" alt="Razorpay">
            </div>
          </form>
        </div>
      `,
      css: `
        .minimal-payment {
          max-width: 500px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Helvetica Neue', sans-serif;
        }
        .payment-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .payment-header h2 {
          font-weight: 300;
          margin-bottom: 0.5rem;
          color: #333;
        }
        .payment-header p {
          color: #666;
        }
        .card-element {
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 1rem;
          margin-bottom: 1.5rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #555;
        }
        .form-group input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
        .submit-button {
          width: 100%;
          padding: 1rem;
          background: #000;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s ease;
          margin-bottom: 1.5rem;
        }
        .submit-button:hover {
          background: #333;
        }
        .payment-methods {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        .payment-methods img {
          height: 25px;
          opacity: 0.7;
        }
      `
    },
    'one_click_payment': {
      name: 'One-Click Payment',
      description: 'Simplified payment page with saved payment methods',
      thumbnail: 'https://placehold.co/400x300/ec4899/ffffff?text=1-Click+Pay',
      html: `
        <div class="one-click-payment">
          <div class="payment-header">
            <h1>Confirm Your Payment</h1>
            <p class="amount">₹2500.00</p>
            <p>For Premium Membership</p>
          </div>
          <div class="saved-methods">
            <h3>Saved Payment Methods</h3>
            <div class="payment-method selected">
              <div class="method-details">
                <span class="card-icon">💳</span>
                <span>Visa ending in 4242</span>
              </div>
              <span class="checkmark">✓</span>
            </div>
            <div class="payment-method">
              <div class="method-details">
                <span class="card-icon">💳</span>
                <span>Mastercard ending in 5555</span>
              </div>
              <span class="checkmark">✓</span>
            </div>
            <button class="add-method">+ Add New Payment Method</button>
          </div>
          <button class="pay-now-button">Pay Now</button>
          <div class="security-badge">
            <span>🔒</span> Secure Payment
          </div>
        </div>
      `,
      css: `
        .one-click-payment {
          max-width: 500px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Inter', sans-serif;
          text-align: center;
        }
        .payment-header {
          margin-bottom: 2rem;
        }
        .payment-header h1 {
          color: #1e293b;
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .payment-header .amount {
          font-size: 2rem;
          font-weight: 700;
          color: #ec4899;
          margin-bottom: 0.25rem;
        }
        .payment-header p {
          color: #64748b;
        }
        .saved-methods {
          margin-bottom: 2rem;
          text-align: left;
        }
        .saved-methods h3 {
          color: #1e293b;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        .payment-method {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          margin-bottom: 0.75rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .payment-method.selected {
          border-color: #ec4899;
          background: #fdf2f8;
        }
        .payment-method:hover {
          background: #f8fafc;
        }
        .method-details {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .card-icon {
          font-size: 1.25rem;
        }
        .checkmark {
          color: #ec4899;
          font-weight: bold;
          opacity: 0;
        }
        .payment-method.selected .checkmark {
          opacity: 1;
        }
        .add-method {
          width: 100%;
          padding: 0.75rem;
          background: none;
          border: 1px dashed #cbd5e1;
          border-radius: 8px;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .add-method:hover {
          border-color: #94a3b8;
        }
        .pay-now-button {
          width: 100%;
          padding: 1rem;
          background: #ec4899;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
          margin-bottom: 1.5rem;
        }
        .pay-now-button:hover {
          background: #db2777;
        }
        .security-badge {
          color: #64748b;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
      `
    }
  },

  
};


/**
 * Funnel Page Templates
 * This file contains the templates for different stages of the funnel.
 * The structure is designed to be compatible with the GrapesJS editor,
 * where each template has a 'pages' array, typically with one page.
 */
