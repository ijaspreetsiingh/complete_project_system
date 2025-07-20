
import {welcomeTemplates} from "./temp";
export const templates = {
    welcomeTemplates : welcomeTemplates.welcomeTemplates,

  vslTemplates: {
    'vsl_focused': {
      name: 'Professional VSL',
      description: 'A premium video sales letter with modern design.',
      thumbnail: 'https://placehold.co/400x300/6366f1/ffffff?text=Professional+VSL',
      html: `
        <div class="vsl-container">
          <div class="vsl-header">
            <div class="brand-logo">
              <h2>YourBrand</h2>
            </div>
            <div class="trust-indicators">
              <span class="trust-badge">🏆 Award Winning</span>
              <span class="trust-badge">⭐ 4.9/5 Rating</span>
            </div>
          </div>
          
          <div class="vsl-content">
            <div class="headline-section">
              <h1 class="main-headline">Transform Your Business in 30 Days</h1>
              <p class="sub-headline">Watch this exclusive presentation to discover the proven system that's helped over 10,000 entrepreneurs achieve breakthrough results</p>
            </div>
            
            <div class="video-section">
              <div class="video-container">
                <div class="video-wrapper">
                  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdefgh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-overlay">
                  <div class="play-button">▶</div>
                </div>
              </div>
            </div>
            
            <div class="benefits-section">
              <div class="benefit-item">
                <div class="benefit-icon">💰</div>
                <div class="benefit-text">
                  <h3>Increase Revenue</h3>
                  <p>Average 300% ROI in first 90 days</p>
                </div>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon">⚡</div>
                <div class="benefit-text">
                  <h3>Fast Implementation</h3>
                  <p>See results in as little as 7 days</p>
                </div>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon">🎯</div>
                <div class="benefit-text">
                  <h3>Proven System</h3>
                  <p>10,000+ successful case studies</p>
                </div>
              </div>
            </div>
            
            <div class="cta-section">
              <button class="cta-button primary">Get Instant Access Now</button>
              <p class="cta-subtext">⏰ Limited Time Offer - Only 24 Hours Left</p>
            </div>
          </div>
        </div>
      `,
      css: `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #1e293b;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }
        
        .vsl-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .vsl-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .brand-logo h2 {
          color: white;
          font-size: 1.8rem;
          font-weight: 700;
        }
        
        .trust-indicators {
          display: flex;
          gap: 20px;
        }
        
        .trust-badge {
          background: rgba(255,255,255,0.1);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .vsl-content {
          background: white;
          border-radius: 20px;
          margin: 40px 0;
          padding: 60px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .headline-section {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .main-headline {
          font-size: 3.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .sub-headline {
          font-size: 1.3rem;
          color: #64748b;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .video-section {
          margin-bottom: 60px;
        }
        
        .video-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 16px;
        }
        
        .video-container:hover .video-overlay {
          opacity: 1;
        }
        
        .play-button {
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #6366f1;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        
        .benefits-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }
        
        .benefit-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 30px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }
        
        .benefit-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        
        .benefit-text h3 {
          font-size: 1.2rem;
          margin-bottom: 5px;
          color: #1e293b;
        }
        
        .benefit-text p {
          color: #64748b;
          font-size: 0.95rem;
        }
        
        .cta-section {
          text-align: center;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          padding: 20px 60px;
          font-size: 1.3rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(99,102,241,0.4);
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99,102,241,0.6);
        }
        
        .cta-subtext {
          margin-top: 15px;
          color: #ef4444;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
          .vsl-content {
            padding: 30px;
          }
          
          .main-headline {
            font-size: 2.5rem;
          }
          
          .trust-indicators {
            flex-direction: column;
            gap: 10px;
          }
          
          .benefits-section {
            grid-template-columns: 1fr;
          }
        }
      `,
      
    },
    'vsl_modern': {
      name: 'Modern VSL',
      description: 'Clean, modern video sales letter with split layout.',
      thumbnail: 'https://placehold.co/400x300/0f172a/ffffff?text=Modern+VSL',
      html: `
        <div class="modern-vsl">
          <div class="vsl-grid">
            <div class="content-side">
              <div class="content-header">
                <h1>The Secret That Industry Leaders Don't Want You to Know</h1>
                <p>A breakthrough system that's quietly revolutionizing how successful businesses operate</p>
              </div>
              
              <div class="feature-list">
                <div class="feature">
                  <span class="feature-check">✓</span>
                  <span>Proven by 500+ Fortune 500 companies</span>
                </div>
                <div class="feature">
                  <span class="feature-check">✓</span>
                  <span>3x faster than traditional methods</span>
                </div>
                <div class="feature">
                  <span class="feature-check">✓</span>
                  <span>Zero technical experience required</span>
                </div>
              </div>
              
              <div class="urgency-banner">
                <div class="urgency-icon">🔥</div>
                <div class="urgency-text">
                  <strong>Limited Time:</strong> Only 100 spots available
                </div>
              </div>
            </div>
            
            <div class="video-side">
              <div class="video-frame">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
              </div>
              <button class="action-button">Watch Free Training Now</button>
            </div>
          </div>
        </div>
      `,
      css: `
        .modern-vsl {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          font-family: 'Inter', sans-serif;
        }
        
        .vsl-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .content-side {
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .content-header h1 {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 30px;
          background: linear-gradient(45deg, #ffffff, #cbd5e1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .content-header p {
          font-size: 1.3rem;
          color: #cbd5e1;
          margin-bottom: 50px;
          line-height: 1.6;
        }
        
        .feature-list {
          margin-bottom: 40px;
        }
        
        .feature {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          font-size: 1.1rem;
        }
        
        .feature-check {
          width: 24px;
          height: 24px;
          background: #10b981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 0.9rem;
        }
        
        .urgency-banner {
          display: flex;
          align-items: center;
          gap: 15px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        
        .urgency-icon {
          font-size: 1.5rem;
        }
        
        .urgency-text {
          font-size: 1.1rem;
        }
        
        .video-side {
          background: #1e293b;
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .video-frame {
          width: 100%;
          max-width: 500px;
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          margin-bottom: 40px;
        }
        
        .video-frame iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .action-button {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border: none;
          padding: 18px 40px;
          font-size: 1.2rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }
        
        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
        }
        
        @media (max-width: 768px) {
          .vsl-grid {
            grid-template-columns: 1fr;
          }
          
          .content-side, .video-side {
            padding: 40px 20px;
          }
          
          .content-header h1 {
            font-size: 2.2rem;
          }
        }
      `,
      js:`alert("hii");`,
    }
  },

  thankyouTemplates: {
    'professional_thankyou': {
      name: 'Professional Thank You',
      description: 'A comprehensive thank you page with next steps.',
      thumbnail: 'https://placehold.co/400x300/10b981/ffffff?text=Professional+Thanks',
      html: `
        <div class="thankyou-container">
          <div class="thankyou-content">
            <div class="success-icon">
              <div class="checkmark">✓</div>
            </div>
            
            <h1 class="main-title">Thank You for Your Purchase!</h1>
            <p class="subtitle">Your order has been successfully processed</p>
            
            <div class="order-details">
              <div class="detail-item">
                <span class="label">Order Number:</span>
                <span class="value">#TY-2024-001</span>
              </div>
              <div class="detail-item">
                <span class="label">Email Sent To:</span>
                <span class="value">your@email.com</span>
              </div>
              <div class="detail-item">
                <span class="label">Total Amount:</span>
                <span class="value">₹2,500</span>
              </div>
            </div>
            
            <div class="next-steps">
              <h3>What Happens Next?</h3>
              <div class="steps-grid">
                <div class="step">
                  <div class="step-number">1</div>
                  <h4>Check Your Email</h4>
                  <p>We've sent your receipt and access details to your email</p>
                </div>
                <div class="step">
                  <div class="step-number">2</div>
                  <h4>Access Your Account</h4>
                  <p>Log in to your dashboard to access your purchase</p>
                </div>
                <div class="step">
                  <div class="step-number">3</div>
                  <h4>Get Support</h4>
                  <p>Our team is ready to help you get started</p>
                </div>
              </div>
            </div>
            
            <div class="action-buttons">
              <button class="btn-primary">Access Dashboard</button>
              <button class="btn-secondary">Download Receipt</button>
            </div>
            
            <div class="support-section">
              <h4>Need Help?</h4>
              <p>Our support team is available 24/7 to assist you</p>
              <div class="support-links">
                <a href="#" class="support-link">📧 Email Support</a>
                <a href="#" class="support-link">💬 Live Chat</a>
                <a href="#" class="support-link">📞 Call Us</a>
              </div>
            </div>
          </div>
        </div>
      `,
      css: `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .thankyou-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Inter', sans-serif;
        }
        
        .thankyou-content {
          background: white;
          border-radius: 20px;
          padding: 60px;
          max-width: 800px;
          width: 100%;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .success-icon {
          margin-bottom: 30px;
        }
        
        .checkmark {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0 auto;
        }
        
        .main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 10px;
        }
        
        .subtitle {
          font-size: 1.2rem;
          color: #64748b;
          margin-bottom: 40px;
        }
        
        .order-details {
          background: #f8fafc;
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 40px;
          border: 1px solid #e2e8f0;
        }
        
        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          font-size: 1.1rem;
        }
        
        .detail-item:last-child {
          margin-bottom: 0;
        }
        
        .label {
          color: #64748b;
          font-weight: 500;
        }
        
        .value {
          color: #1e293b;
          font-weight: 600;
        }
        
        .next-steps {
          margin-bottom: 40px;
        }
        
        .next-steps h3 {
          font-size: 1.5rem;
          color: #1e293b;
          margin-bottom: 30px;
        }
        
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .step {
          text-align: center;
        }
        
        .step-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.2rem;
          margin-bottom: 15px;
        }
        
        .step h4 {
          color: #1e293b;
          font-size: 1.1rem;
          margin-bottom: 10px;
        }
        
        .step p {
          color: #64748b;
          font-size: 0.95rem;
        }
        
        .action-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }
        
        .btn-secondary {
          background: white;
          color: #10b981;
          border: 2px solid #10b981;
          padding: 15px 30px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .btn-secondary:hover {
          background: #10b981;
          color: white;
          transform: translateY(-2px);
        }
        
        .support-section {
          padding-top: 30px;
          border-top: 1px solid #e2e8f0;
        }
        
        .support-section h4 {
          color: #1e293b;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
        
        .support-section p {
          color: #64748b;
          margin-bottom: 20px;
        }
        
        .support-links {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .support-link {
          color: #10b981;
          text-decoration: none;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 25px;
          border: 1px solid #d1fae5;
          transition: all 0.3s ease;
        }
        
        .support-link:hover {
          background: #d1fae5;
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          .thankyou-content {
            padding: 40px 20px;
          }
          
          .main-title {
            font-size: 2rem;
          }
          
          .steps-grid {
            grid-template-columns: 1fr;
          }
          
          .action-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
      `
    },
    'minimal_thankyou': {
      name: 'Minimal Thank You',
      description: 'Clean and minimal thank you page design.',
      thumbnail: 'https://placehold.co/400x300/ffffff/1e293b?text=Minimal+Thanks',
      html: `
        <div class="minimal-thankyou">
          <div class="content">
            <div class="icon">✨</div>
            <h1>Thank You</h1>
            <p>Your submission has been received successfully</p>
            <div class="divider"></div>
            <p class="message">We'll get back to you within 24 hours</p>
            <button class="continue-btn">Continue</button>
          </div>
        </div>
      `,
      css: `
        .minimal-thankyou {
          min-height: 100vh;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
        }
        
        .content {
          background: white;
          border-radius: 16px;
          padding: 80px 60px;
          text-align: center;
          max-width: 500px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          border: 1px solid #e2e8f0;
        }
        
        .icon {
          font-size: 4rem;
          margin-bottom: 30px;
        }
        
        .content h1 {
          font-size: 2.5rem;
          font-weight: 300;
          color: #1e293b;
          margin-bottom: 20px;
        }
        
        .content p {
          color: #64748b;
          font-size: 1.1rem;
          margin-bottom: 30px;
        }
        
        .divider {
          width: 60px;
          height: 2px;
          background: #e2e8f0;
          margin: 40px auto;
        }
        
        .message {
          font-weight: 500;
          color: #1e293b;
        }
        
        .continue-btn {
          background: #1e293b;
          color: white;
          border: none;
          padding: 15px 40px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 40px;
        }
        
        .continue-btn:hover {
          background: #334155;
          transform: translateY(-1px);
        }
      `
    }
  },
  whatsappTemplates: {
    'modern_whatsapp': {
      name: 'Modern WhatsApp',
      description: 'Professional WhatsApp contact page with chat preview.',
      thumbnail: 'https://placehold.co/400x300/25D366/ffffff?text=Modern+WhatsApp',
      html: `
        <div class="whatsapp-container">
          <div class="whatsapp-content">
            <div class="header-section">
              <div class="whatsapp-logo">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                </svg>
              </div>
              <h1>Let's Connect on WhatsApp</h1>
              <p>Get instant support and quick responses to your questions</p>
            </div>
            
            <div class="chat-preview">
              <div class="chat-header">
                <div class="profile-info">
                  <div class="profile-avatar">J</div>
                  <div class="profile-details">
                    <h3>Jassi Support</h3>
                    <span class="status">Online now</span>
                  </div>
                </div>
                <div class="chat-actions">
                  <span class="active-indicator"></span>
                </div>
              </div>
              
              <div class="chat-messages">
                <div class="message received">
                  <div class="message-content">
                    <p>Hi there! 👋 How can I help you today?</p>
                    <span class="message-time">2:30 PM</span>
                  </div>
                </div>
                <div class="message sent">
                  <div class="message-content">
                    <p>I need help with my order</p>
                    <span class="message-time">2:31 PM</span>
                  </div>
                </div>
                <div class="message received">
                  <div class="message-content">
                    <p>I'd be happy to help! Let me check that for you right away 🔍</p>
                    <span class="message-time">2:31 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="features-grid">
              <div class="feature-item">
                <div class="feature-icon">⚡</div>
                <h3>Instant Replies</h3>
                <p>Get responses within minutes</p>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🔒</div>
                <h3>Secure Chat</h3>
                <p>End-to-end encrypted messages</p>
              </div>
              <div class="feature-item">
                <div class="feature-icon">📱</div>
                <h3>Mobile Friendly</h3>
                <p>Chat from anywhere, anytime</p>
              </div>
            </div>
            
            <div class="cta-section">
              <a href="https://wa.me/1234567890" class="whatsapp-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                </svg>
                Start WhatsApp Chat
              </a>
              <p class="privacy-note">Your privacy is protected. We don't share your information.</p>
            </div>
          </div>
        </div>
      `,
      css: `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .whatsapp-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Inter', sans-serif;
        }
        
        .whatsapp-content {
          background: white;
          border-radius: 20px;
          padding: 60px;
          max-width: 800px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .header-section {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .whatsapp-logo {
          margin-bottom: 20px;
        }
        
        .header-section h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 10px;
        }
        
        .header-section p {
          font-size: 1.2rem;
          color: #64748b;
        }
        
        .chat-preview {
          background: #f8fafc;
          border-radius: 16px;
          margin-bottom: 40px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
        
        .chat-header {
          background: #25D366;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
        }
        
        .profile-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .profile-avatar {
          width: 50px;
          height: 50px;
          background: white;
          color: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .profile-details h3 {
          font-size: 1.1rem;
          margin-bottom: 2px;
        }
        
        .status {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        
        .active-indicator {
          width: 12px;
          height: 12px;
          background: #4ade80;
          border-radius: 50%;
          border: 2px solid white;
        }
        
        .chat-messages {
          padding: 30px;
        }
        
        .message {
          margin-bottom: 20px;
          display: flex;
        }
        
        .message.received {
          justify-content: flex-start;
        }
        
        .message.sent {
          justify-content: flex-end;
        }
        
        .message-content {
          max-width: 70%;
          padding: 12px 18px;
          border-radius: 18px;
          position: relative;
        }
        
        .message.received .message-content {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .message.sent .message-content {
          background: #25D366;
          color: white;
        }
        
        .message-content p {
          margin-bottom: 5px;
          font-size: 0.95rem;
        }
        
        .message-time {
          font-size: 0.8rem;
          opacity: 0.7;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .feature-item {
          text-align: center;
          padding: 30px 20px;
          background: #f8fafc;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }
        
        .feature-icon {
          font-size: 2rem;
          margin-bottom: 15px;
        }
        
        .feature-item h3 {
          color: #1e293b;
          font-size: 1.1rem;
          margin-bottom: 10px;
        }
        
        .feature-item p {
          color: #64748b;
          font-size: 0.95rem;
        }
        
        .cta-section {
          text-align: center;
        }
        
        .whatsapp-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #25D366;
          color: white;
          text-decoration: none;
          padding: 18px 40px;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }
        
        .whatsapp-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }
        
        .privacy-note {
          margin-top: 15px;
          color: #64748b;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .whatsapp-content {
            padding: 40px 20px;
          }
          
          .header-section h1 {
            font-size: 2rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .chat-messages {
            padding: 20px;
          }
        }
      `
    },
    'simple_whatsapp': {
      name: 'Simple WhatsApp',
      description: 'Clean and simple WhatsApp redirect page.',
      thumbnail: 'https://placehold.co/400x300/ffffff/25D366?text=Simple+WhatsApp',
      html: `
        <div class="simple-whatsapp">
          <div class="content">
            <div class="icon">💬</div>
            <h1>Let's Chat on WhatsApp</h1>
            <p>Get instant support and quick answers to your questions</p>
            <a href="https://wa.me/1234567890" class="chat-button">
              <span class="button-icon">📱</span>
              Open WhatsApp Chat
            </a>
            <div class="benefits">
              <div class="benefit">✓ Instant responses</div>
              <div class="benefit">✓ Personal support</div>
              <div class="benefit">✓ Available 24/7</div>
            </div>
          </div>
        </div>
      `,
      css: `
        .simple-whatsapp {
          min-height: 100vh;
          background: #f0f9ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          padding: 20px;
        }
        
        .content {
          background: white;
          border-radius: 20px;
          padding: 60px;
          text-align: center;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .icon {
          font-size: 4rem;
          margin-bottom: 30px;
        }
        
        .content h1 {
          font-size: 2.2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 15px;
        }
        
        .content p {
          color: #64748b;
          font-size: 1.1rem;
          margin-bottom: 40px;
          line-height: 1.6;
        }
        
        .chat-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #25D366;
          color: white;
          text-decoration: none;
          padding: 18px 40px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          transition: all 0.3s ease;
          margin-bottom: 40px;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }
        
        .chat-button:hover {
          background: #22c55e;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }
        
        .button-icon {
          font-size: 1.2rem;
        }
        
        .benefits {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .benefit {
          color: #059669;
          font-weight: 500;
          font-size: 1rem;
        }
        
        @media (max-width: 768px) {
          .content {
            padding: 40px 20px;
          }
          
          .content h1 {
            font-size: 1.8rem;
          }
        }
      `
    }
  },

  productOfferTemplates: {
    'premium_offer': {
      name: 'Premium Product Offer',
      description: 'High-converting product offer page with pricing and features.',
      thumbnail: 'https://placehold.co/400x300/8b5cf6/ffffff?text=Premium+Offer',
      html: `
        <div class="premium-offer">
          <div class="offer-header">
            <div class="urgency-banner">
              <span class="urgency-icon">🔥</span>
              <span>Limited Time Offer - Only 48 Hours Left!</span>
            </div>
            <h1>Unlock Your Business Potential</h1>
            <p class="subtitle">The complete system that's helped 10,000+ entrepreneurs scale their business</p>
          </div>
          
          <div class="offer-grid">
            <div class="product-showcase">
              <div class="product-image">
                <img src="https://placehold.co/500x400/8b5cf6/ffffff?text=Premium+Product" alt="Premium Product">
                <div class="product-badge">BESTSELLER</div>
              </div>
              
              <div class="product-features">
                <h3>What You Get:</h3>
                <div class="feature-list">
                  <div class="feature">
                    <span class="feature-icon">📚</span>
                    <div class="feature-text">
                      <h4>Complete Training Course</h4>
                      <p>50+ video lessons covering everything you need</p>
                    </div>
                  </div>
                  <div class="feature">
                    <span class="feature-icon">🛠️</span>
                    <div class="feature-text">
                      <h4>Premium Tools & Templates</h4>
                      <p>Ready-to-use resources worth $2,000</p>
                    </div>
                  </div>
                  <div class="feature">
                    <span class="feature-icon">👥</span>
                    <div class="feature-text">
                      <h4>Exclusive Community Access</h4>
                      <p>Connect with like-minded entrepreneurs</p>
                    </div>
                  </div>
                  <div class="feature">
                    <span class="feature-icon">🎯</span>
                    <div class="feature-text">
                      <h4>1-on-1 Coaching Session</h4>
                      <p>Personal guidance from industry experts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="pricing-section">
              <div class="pricing-card">
                <div class="price-header">
                  <div class="original-price">
                    <span class="price-label">Regular Price:</span>
                    <span class="old-price">₹9,999</span>
                  </div>
                  <div class="current-price">
                    <span class="price-label">Today Only:</span>
                    <span class="new-price">₹2,499</span>
                  </div>
                  <div class="savings">You Save ₹7,500 (75%)</div>
                </div>
                
                <div class="bonus-section">
                  <h4>🎁 Exclusive Bonuses (Worth ₹3,000)</h4>
                  <ul class="bonus-list">
                    <li>✓ 30-Day Money Back Guarantee</li>
                    <li>✓ Lifetime Updates</li>
                    <li>✓ Priority Support</li>
                    <li>✓ Mobile App Access</li>
                  </ul>
                </div>
                
                <div class="countdown-timer">
                  <div class="timer-label">Offer Expires In:</div>
                  <div class="timer-display">
                    <div class="time-unit">
                      <span class="time-number">23</span>
                      <span class="time-label">Hours</span>
                    </div>
                    <div class="time-unit">
                      <span class="time-number">45</span>
                      <span class="time-label">Minutes</span>
                    </div>
                    <div class="time-unit">
                      <span class="time-number">12</span>
                      <span class="time-label">Seconds</span>
                    </div>
                  </div>
                </div>
                
                <button class="buy-button">
                  <span class="button-text">Get Instant Access Now</span>
                  <span class="button-subtext">Secure Payment • 256-bit SSL</span>
                </button>
                
                <div class="guarantee-badge">
                  <span class="badge-icon">🛡️</span>
                  <span>30-Day Money Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="testimonials-section">
            <h3>What Our Customers Say</h3>
            <div class="testimonials-grid">
              <div class="testimonial">
                <div class="testimonial-content">
                  <p>"This system completely transformed my business. I saw results within the first week!"</p>
                  <div class="testimonial-author">
                    <strong>Sarah Johnson</strong>
                    <span>CEO, TechStart</span>
                  </div>
                </div>
                <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
              </div>
              <div class="testimonial">
                <div class="testimonial-content">
                  <p>"The best investment I've made for my business. ROI was incredible!"</p>
                  <div class="testimonial-author">
                    <strong>Mike Chen</strong>
                    <span>Founder, GrowthCo</span>
                  </div>
                </div>
                <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      `,
      css: `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .premium-offer {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
        }
        
        .offer-header {
          text-align: center;
          color: white;
          margin-bottom: 50px;
        }
        
        .urgency-banner {
          background: #ef4444;
          color: white;
          padding: 12px 30px;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          margin-bottom: 30px;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .offer-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .offer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .product-showcase {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .product-image {
          position: relative;
          margin-bottom: 30px;
          border-radius: 16px;
          overflow: hidden;
        }
        
        .product-image img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .product-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #f59e0b;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 700;
        }
        
        .product-features h3 {
          color: #1e293b;
          font-size: 1.5rem;
          margin-bottom: 25px;
        }
        
        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .feature {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }
        
        .feature-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        
        .feature-text h4 {
          color: #1e293b;
          font-size: 1.1rem;
          margin-bottom: 5px;
        }
        
        .feature-text p {
          color: #64748b;
          font-size: 0.95rem;
        }
        
        .pricing-section {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          height: fit-content;
        }
        
        .pricing-card {
          text-align: center;
        }
        
        .price-header {
          margin-bottom: 30px;
        }
        
        .original-price {
          margin-bottom: 10px;
        }
        
        .price-label {
          color: #64748b;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 5px;
        }
        
        .old-price {
          font-size: 1.5rem;
          color: #ef4444;
          text-decoration: line-through;
          font-weight: 500;
        }
        
        .current-price {
          margin-bottom: 15px;
        }
        
        .new-price {
          font-size: 3rem;
          color: #10b981;
          font-weight: 800;
        }
        
        .savings {
          background: #dcfce7;
          color: #166534;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          display: inline-block;
        }
        
        .bonus-section {
          margin: 30px 0;
          padding: 25px;
          background: #f8fafc;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }
        
        .bonus-section h4 {
          color: #1e293b;
          margin-bottom: 15px;
        }
        
        .bonus-list {
          list-style: none;
          padding: 0;
        }
        
        .bonus-list li {
          color: #059669;
          margin-bottom: 8px;
          font-weight: 500;
        }
        
        .countdown-timer {
          margin: 30px 0;
          padding: 25px;
          background: #fef3c7;
          border-radius: 16px;
          border: 1px solid #f59e0b;
        }
        
        .timer-label {
          color: #92400e;
          font-weight: 600;
          margin-bottom: 15px;
        }
        
        .timer-display {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        
        .time-unit {
          background: white;
          padding: 15px;
          border-radius: 12px;
          min-width: 60px;
        }
        
        .time-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 800;
          color: #1e293b;
        }
        
        .time-label {
          font-size: 0.8rem;
          color: #64748b;
          text-transform: uppercase;
        }
        
        .buy-button {
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
          border: none;
          padding: 20px 40px;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 30px 0;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .buy-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(139, 92, 246, 0.6);
        }
        
        .button-text {
          display: block;
          margin-bottom: 5px;
        }
        
        .button-subtext {
          font-size: 0.8rem;
          opacity: 0.9;
          font-weight: 400;
          text-transform: none;
          letter-spacing: 0;
        }
        
        .guarantee-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #059669;
          font-weight: 600;
          font-size: 0.95rem;
        }
        
        .testimonials-section {
          background: white;
          border-radius: 20px;
          padding: 50px;
          margin-top: 50px;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .testimonials-section h3 {
          text-align: center;
          color: #1e293b;
          font-size: 2rem;
          margin-bottom: 40px;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        
        .testimonial {
          background: #f8fafc;
          padding: 30px;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }
        
        .testimonial-content p {
          font-size: 1.1rem;
          color: #1e293b;
          margin-bottom: 20px;
          font-style: italic;
        }
        
        .testimonial-author strong {
          color: #1e293b;
          display: block;
          margin-bottom: 5px;
        }
        
        .testimonial-author span {
          color: #64748b;
          font-size: 0.9rem;
        }
        
        .testimonial-rating {
          margin-top: 15px;
          font-size: 1.2rem;
        }
        
        @media (max-width: 1024px) {
          .offer-grid {
            grid-template-columns: 1fr;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .offer-header h1 {
            font-size: 2.5rem;
          }
          
          .product-showcase,
          .pricing-section,
          .testimonials-section {
            padding: 30px 20px;
          }
          
          .timer-display {
            flex-wrap: wrap;
            gap: 10px;
          }
        }
      `
    },
    'simple_offer': {
      name: 'Simple Product Offer',
      description: 'Clean and straightforward product offer page.',
      thumbnail: 'https://placehold.co/400x300/ffffff/1e293b?text=Simple+Offer',
      html: `
        <div class="simple-offer">
          <div class="offer-container">
            <div class="offer-content">
              <h1>Premium Business Course</h1>
              <p class="description">Master the skills that will transform your business and accelerate your success</p>
              
              <div class="product-image">
                <img src="https://placehold.co/600x400/3b82f6/ffffff?text=Premium+Course" alt="Premium Course">
              </div>
              
              <div class="pricing">
                <div class="price-container">
                  <span class="original-price">₹4,999</span>
                  <span class="current-price">₹1,999</span>
                  <span class="discount">60% OFF</span>
                </div>
              </div>
              
              <ul class="features">
                <li>✓ 20+ Hours of Video Content</li>
                <li>✓ Downloadable Resources</li>
                <li>✓ Certificate of Completion</li>
                <li>✓ 30-Day Money Back Guarantee</li>
              </ul>
              
              <button class="purchase-btn">Purchase Now</button>
              
              <div class="trust-indicators">
                <span class="trust-item">🔒 Secure Payment</span>
                <span class="trust-item">⚡ Instant Access</span>
                <span class="trust-item">💯 Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      `,
      css: `
        .simple-offer {
          min-height: 100vh;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Inter', sans-serif;
        }
        
        .offer-container {
          background: white;
          border-radius: 20px;
          padding: 60px;
          max-width: 800px;
          width: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
        }
        
        .offer-content h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 20px;
        }
        
        .description {
          font-size: 1.2rem;
          color: #64748b;
          margin-bottom: 40px;
          line-height: 1.6;
        }
        
        .product-image {
          margin-bottom: 40px;
        }
        
        .product-image img {
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .pricing {
          margin-bottom: 30px;
        }
        
        .price-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }
        
        .original-price {
          font-size: 1.5rem;
          color: #ef4444;
          text-decoration: line-through;
          font-weight: 500;
        }
        
        .current-price {
          font-size: 3rem;
          color: #3b82f6;
          font-weight: 800;
        }
        
        .discount {
          background: #ef4444;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 700;
        }
        
        .features {
          list-style: none;
          padding: 0;
          margin: 40px 0;
          text-align: left;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .features li {
          color: #059669;
          font-weight: 500;
          margin-bottom: 12px;
          font-size: 1.1rem;
        }
        
        .purchase-btn {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border: none;
          padding: 18px 50px;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 30px 0;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .purchase-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
        }
        
        .trust-indicators {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin-top: 30px;
        }
        
        .trust-item {
          color: #64748b;
          font-size: 0.95rem;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .offer-container {
            padding: 40px 20px;
          }
          
          .offer-content h1 {
            font-size: 2rem;
          }
          
          .price-container {
            flex-direction: column;
            gap: 10px;
          }
          
          .trust-indicators {
            flex-direction: column;
            gap: 15px;
          }
        }
      `
    }
  },

  miscTemplates: {
    'professional_blank': {
      name: 'Professional Blank',
      description: 'A professional blank canvas with modern design elements.',
      thumbnail: 'https://placehold.co/400x300/6366f1/ffffff?text=Professional+Blank',
      html: `
        <div class="professional-blank">
          <div class="blank-container">
            <div class="content-area">
              <div class="header-section">
                <h1>Welcome to Your Canvas</h1>
                <p>Start building something amazing</p>
              </div>
              
              <div class="feature-grid">
                <div class="feature-card">
                  <div class="feature-icon">🎨</div>
                  <h3>Design</h3>
                  <p>Create beautiful layouts with ease</p>
                </div>
                <div class="feature-card">
                  <div class="feature-icon">⚡</div>
                  <h3>Fast</h3>
                  <p>Lightning fast performance</p>
                </div>
                <div class="feature-card">
                  <div class="feature-icon">📱</div>
                  <h3>Responsive</h3>
                  <p>Works on all devices</p>
                </div>
              </div>
              
              <div class="cta-section">
                <button class="primary-btn">Get Started</button>
                <button class="secondary-btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      `,
      css: `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .professional-blank {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Inter', sans-serif;
        }
        
        .blank-container {
          background: white;
          border-radius: 20px;
          padding: 60px;
          max-width: 1000px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .content-area {
          text-align: center;
        }
        
        .header-section {
          margin-bottom: 50px;
        }
        
        .header-section h1 {
          font-size: 3rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 15px;
        }
        
        .header-section p {
          font-size: 1.3rem;
          color: #64748b;
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }
        
        .feature-card {
          background: #f8fafc;
          padding: 40px 30px;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        .feature-card h3 {
          color: #1e293b;
          font-size: 1.3rem;
          margin-bottom: 15px;
        }
        
        .feature-card p {
          color: #64748b;
          font-size: 1rem;
        }
        
        .cta-section {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .primary-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          padding: 15px 40px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
        }
        
        .secondary-btn {
          background: white;
          color: #6366f1;
          border: 2px solid #6366f1;
          padding: 15px 40px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .secondary-btn:hover {
          background: #6366f1;
          color: white;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .blank-container {
            padding: 40px 20px;
          }
          
          .header-section h1 {
            font-size: 2.2rem;
          }
          
          .feature-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-section {
            flex-direction: column;
            align-items: center;
          }
          
          .primary-btn, .secondary-btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `
    },
    'minimal_blank': {
      name: 'Minimal Blank',
      description: 'A clean, minimal starting point for your content.',
      thumbnail: 'https://placehold.co/400x300/ffffff/1e293b?text=Minimal+Blank',
      html: `
        <div class="minimal-blank">
          <div class="content">
            <h1>Start Here</h1>
            <p>Your journey begins with a single step</p>
            <div class="divider"></div>
            <button class="action-btn">Begin</button>
          </div>
        </div>
      `,
      css: `
        .minimal-blank {
          min-height: 100vh;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
        }
        
        .content {
          text-align: center;
          padding: 80px 60px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          border: 1px solid #e2e8f0;
          max-width: 500px;
        }
        
        .content h1 {
          font-size: 2.5rem;
          font-weight: 300;
          color: #1e293b;
          margin-bottom: 20px;
        }
        
        .content p {
          color: #64748b;
          font-size: 1.1rem;
          margin-bottom: 40px;
        }
        
        .divider {
          width: 60px;
          height: 2px;
          background: #e2e8f0;
          margin: 0 auto 40px;
        }
        
        .action-btn {
          background: #1e293b;
          color: white;
          border: none;
          padding: 15px 40px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .action-btn:hover {
          background: #334155;
          transform: translateY(-1px);
        }
      `
    }
  },

  appointmentTemplates: {
    'professional_appointment': {
      name: 'Professional Appointment',
      description: 'Comprehensive appointment booking with calendar integration.',
      thumbnail: 'https://placehold.co/400x300/3b82f6/ffffff?text=Professional+Booking',
      html: `
        <div class="appointment-booking">
          <div class="booking-container">
            <div class="booking-header">
              <h1>Schedule Your Consultation</h1>
              <p>Choose a convenient time for your personalized session</p>
            </div>
            
            <div class="booking-grid">
              <div class="calendar-section">
                <div class="calendar-header">
                  <h3>Select Date</h3>
                  <div class="month-navigation">
                    <button class="nav-btn prev">‹</button>
                    <span class="current-month">June 2024</span>
                    <button class="nav-btn next">›</button>
                  </div>
                </div>
                
                <div class="calendar-grid">
                  <div class="calendar-day-header">Sun</div>
                  <div class="calendar-day-header">Mon</div>
                  <div class="calendar-day-header">Tue</div>
                  <div class="calendar-day-header">Wed</div>
                  <div class="calendar-day-header">Thu</div>
                  <div class="calendar-day-header">Fri</div>
                  <div class="calendar-day-header">Sat</div>
                  
                  <div class="calendar-day"></div>
                  <div class="calendar-day"></div>
                  <div class="calendar-day"></div>
                  <div class="calendar-day"></div>
                  <div class="calendar-day"></div>
                  <div class="calendar-day available" data-date="1">1</div>
                  <div class="calendar-day available" data-date="2">2</div>
                  <div class="calendar-day available" data-date="3">3</div>
                  <div class="calendar-day available" data-date="4">4</div>
                  <div class="calendar-day available" data-date="5">5</div>
                  <div class="calendar-day available" data-date="6">6</div>
                  <div class="calendar-day available" data-date="7">7</div>
                  <div class="calendar-day available" data-date="8">8</div>
                  <div class="calendar-day available" data-date="9">9</div>
                  <div class="calendar-day available selected" data-date="10">10</div>
                  <div class="calendar-day available" data-date="11">11</div>
                  <div class="calendar-day available" data-date="12">12</div>
                  <div class="calendar-day available" data-date="13">13</div>
                  <div class="calendar-day available" data-date="14">14</div>
                  <div class="calendar-day available" data-date="15">15</div>
                  <div class="calendar-day available" data-date="16">16</div>
                  <div class="calendar-day available" data-date="17">17</div>
                  <div class="calendar-day available" data-date="18">18</div>
                  <div class="calendar-day available" data-date="19">19</div>
                  <div class="calendar-day available" data-date="20">20</div>
                  <div class="calendar-day available" data-date="21">21</div>
                  <div class="calendar-day available" data-date="22">22</div>
                  <div class="calendar-day available" data-date="23">23</div>
                  <div class="calendar-day available" data-date="24">24</div>
                  <div class="calendar-day available" data-date="25">25</div>
                  <div class="calendar-day available" data-date="26">26</div>
                  <div class="calendar-day available" data-date="27">27</div>
                  <div class="calendar-day available" data-date="28">28</div>
                  <div class="calendar-day available" data-date="29">29</div>
                  <div class="calendar-day available" data-date="30">30</div>
                </div>
              </div>
              
              <div class="details-section">
                <div class="service-selection">
                  <h3>Select Service</h3>
                  <div class="service-options">
                    <div class="service-option selected">
                      <div class="service-info">
                        <h4>Initial Consultation</h4>
                        <p>30 minutes • Free</p>
                      </div>
                      <div class="service-price">Free</div>
                    </div>
                    <div class="service-option">
                      <div class="service-info">
                        <h4>Strategy Session</h4>
                        <p>60 minutes • Premium</p>
                      </div>
                      <div class="service-price">₹2,500</div>
                    </div>
                    <div class="service-option">
                      <div class="service-info">
                        <h4>Deep Dive Analysis</h4>
                        <p>90 minutes • Enterprise</p>
                      </div>
                      <div class="service-price">₹5,000</div>
                    </div>
                  </div>
                </div>
                
                <div class="time-slots">
                  <h3>Available Times</h3>
                  <div class="time-grid">
                    <div class="time-slot">9:00 AM</div>
                    <div class="time-slot">10:00 AM</div>
                    <div class="time-slot selected">11:00 AM</div>
                    <div class="time-slot">2:00 PM</div>
                    <div class="time-slot">3:00 PM</div>
                    <div class="time-slot">4:00 PM</div>
                  </div>
                </div>
                
                <div class="contact-form">
                  <h3>Your Information</h3>
                  <form>
                    <div class="form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Enter your full name" required>
                    </div>
                    <div class="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="Enter your email" required>
                    </div>
                    <div class="form-group">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="Enter your phone number" required>
                    </div>
                    <div class="form-group">
                      <label>Additional Notes (Optional)</label>
                      <textarea placeholder="Any specific topics you'd like to discuss?"></textarea>
                    </div>
                  </form>
                </div>
                
                <div class="booking-summary">
                  <div class="summary-item">
                    <span>Date:</span>
                    <span>June 10, 2024</span>
                  </div>
                  <div class="summary-item">
                    <span>Time:</span>
                    <span>11:00 AM - 11:30 AM</span>
                  </div>
                  <div class="summary-item">
                    <span>Service:</span>
                    <span>Initial Consultation</span>
                  </div>
                  <div class="summary-item total">
                    <span>Total:</span>
                    <span>Free</span>
                  </div>
                </div>
                
                <button class="book-button">Confirm Booking</button>
              </div>
            </div>
          </div>
        </div>
      `,
      css: `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .appointment-booking {
          min-height: 100vh;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          font-family: 'Inter', sans-serif;
          padding: 20px;
        }
        
        .booking-container {
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .booking-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .booking-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 15px;
        }
        
        .booking-header p {
          font-size: 1.2rem;
          color: #64748b;
        }
        
        .booking-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }
        
        .calendar-section {
          background: #f8fafc;
          border-radius: 16px;
          padding: 30px;
          border: 1px solid #e2e8f0;
        }
        
        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        
        .calendar-header h3 {
          color: #1e293b;
          font-size: 1.3rem;
        }
        
        .month-navigation {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .nav-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #64748b;
          padding: 5px 10px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .nav-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .current-month {
          font-weight: 600;
          color: #1e293b;
          min-width: 120px;
          text-align: center;
        }
        
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
        }
        
        .calendar-day-header {
          text-align: center;
          padding: 10px 5px;
          font-weight: 600;
          color: #64748b;
          font-size: 0.9rem;
        }
        
        .calendar-day {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .calendar-day.available {
          background: white;
          border: 1px solid #e2e8f0;
          color: #1e293b;
        }
        
        .calendar-day.available:hover {
          background: #e0e7ff;
          border-color: #3b82f6;
        }
        
        .calendar-day.selected {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        
        .details-section {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .service-selection h3,
        .time-slots h3,
        .contact-form h3 {
          color: #1e293b;
          font-size: 1.3rem;
          margin-bottom: 20px;
        }
        
        .service-options {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .service-option {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .service-option:hover {
          background: #e0e7ff;
        }
        
        .service-option.selected {
          background: #dbeafe;
          border-color: #3b82f6;
        }
        
        .service-info h4 {
          color: #1e293b;
          margin-bottom: 5px;
        }
        
        .service-info p {
          color: #64748b;
          font-size: 0.9rem;
        }
        
        .service-price {
          font-weight: 700;
          color: #3b82f6;
        }
        
        .time-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        
        .time-slot {
          padding: 12px;
          text-align: center;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .time-slot:hover {
          background: #e0e7ff;
        }
        
        .time-slot.selected {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #1e293b;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 80px;
        }
        
        .booking-summary {
          background: #f8fafc;
          border-radius: 12px;
          padding: 25px;
          border: 1px solid #e2e8f0;
        }
        
        .summary-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .summary-item:last-child {
          margin-bottom: 0;
          border-bottom: none;
        }
        
        .summary-item.total {
          font-weight: 700;
          font-size: 1.1rem;
          color: #1e293b;
        }
        
        .summary-item span:first-child {
          color: #64748b;
        }
        
        .summary-item span:last-child {
          color: #1e293b;
          font-weight: 500;
        }
        
        .book-button {
          width: 100%;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border: none;
          padding: 18px;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .book-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
        }
        
        @media (max-width: 1024px) {
          .booking-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .booking-container {
            padding: 30px 20px;
          }
          
          .booking-header h1 {
            font-size: 2rem;
          }
          
          .time-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `
    },
    'quick_appointment': {
      name: 'Quick Appointment',
      description: 'Simple and fast appointment booking form.',
      thumbnail: 'https://placehold.co/400x300/10b981/ffffff?text=Quick+Booking',
      html: `
        <div class="quick-appointment">
          <div class="appointment-container">
            <div class="appointment-header">
              <h1>Book Your Appointment</h1>
              <p>Quick and easy scheduling in just a few clicks</p>
            </div>
            
            <form class="appointment-form">
              <div class="form-row">
                <div class="form-group">
                  <label>Select Date</label>
                  <input type="date" required>
                </div>
                <div class="form-group">
                  <label>Select Time</label>
                  <select required>
                    <option value="">Choose time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" required>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email" required>
                </div>
              </div>
              
              <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" required>
              </div>
              
              <div class="form-group">
                <label>Service Type</label>
                <select required>
                  <option value="">Choose service</option>
                  <option value="consultation">Consultation</option>
                  <option value="strategy">Strategy Session</option>
                  <option value="analysis">Analysis</option>
                </select>
              </div>
              
              <div class="form-group">
                <label>Message (Optional)</label>
                <textarea placeholder="Any specific requirements or questions?"></textarea>
              </div>
              
              <button type="submit" class="submit-button">Book Appointment</button>
            </form>
            
            <div class="appointment-info">
              <div class="info-item">
                <span class="info-icon">📅</span>
                <span>Flexible rescheduling</span>
              </div>
              <div class="info-item">
                <span class="info-icon">✉️</span>
                <span>Email confirmation</span>
              </div>
              <div class="info-item">
                <span class="info-icon">🔔</span>
                <span>SMS reminders</span>
              </div>
            </div>
          </div>
        </div>
      `,
      css: `
        .quick-appointment {
          min-height: 100vh;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Inter', sans-serif;
        }
        
        .appointment-container {
          background: white;
          border-radius: 20px;
          padding: 50px;
          max-width: 700px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .appointment-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .appointment-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 15px;
        }
        
        .appointment-header p {
          font-size: 1.2rem;
          color: #64748b;
        }
        
        .appointment-form {
          margin-bottom: 40px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #1e293b;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #10b981;
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }
        
        .submit-button {
          width: 100%;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          padding: 18px;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }
        
        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5);
        }
        
        .appointment-info {
          display: flex;
          justify-content: space-around;
          padding-top: 30px;
          border-top: 1px solid #e2e8f0;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #64748b;
          font-size: 0.95rem;
        }
        
        .info-icon {
          font-size: 1.2rem;
        }
        
        @media (max-width: 768px) {
          .appointment-container {
            padding: 40px 20px;
          }
          
          .appointment-header h1 {
            font-size: 2rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .appointment-info {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `
    }
  },

  paymentTemplates: {
    'modern_checkout': {
      name: 'Modern Checkout',
      description: 'Sleek and secure checkout page with order summary.',
      thumbnail: 'https://placehold.co/400x300/8b5cf6/ffffff?text=Modern+Checkout',
      html: `
        <div class="modern-checkout">
          <div class="checkout-container">
            <div class="checkout-header">
              <h1>Complete Your Order</h1>
              <p>Secure checkout with 256-bit SSL encryption</p>
            </div>
            
            <div class="checkout-grid">
              <div class="payment-section">
                <div class="section-header">
                  <h2>Payment Information</h2>
                  <div class="security-badge">
                    <span class="security-icon">🔒</span>
                    <span>Secure Payment</span>
                  </div>
                </div>
                
                <div class="payment-methods">
                  <div class="method-tabs">
                    <button class="method-tab active" data-method="card">
                      <span class="tab-icon">💳</span>
                      Card
                    </button>
                    <button class="method-tab" data-method="upi">
                      <span class="tab-icon">📱</span>
                      UPI
                    </button>
                    <button class="method-tab" data-method="wallet">
                      <span class="tab-icon">💰</span>
                      Wallet
                    </button>
                  </div>
                  
                  <div class="method-content active" id="card-method">
                    <form class="payment-form">
                      <div class="form-group">
                        <label>Card Number</label>
                        <input type="text" placeholder="1234 5678 9012 3456" maxlength="19">
                        <div class="card-icons">
                          <span class="card-icon">💳</span>
                          <span class="card-icon">💳</span>
                          <span class="card-icon">💳</span>
                        </div>
                      </div>
                      
                      <div class="form-row">
                        <div class="form-group">
                          <label>Expiry Date</label>
                          <input type="text" placeholder="MM/YY" maxlength="5">
                        </div>
                        <div class="form-group">
                          <label>CVV</label>
                          <input type="text" placeholder="123" maxlength="3">
                        </div>
                      </div>
                      
                      <div class="form-group">
                        <label>Cardholder Name</label>
                        <input type="text" placeholder="John Doe">
                      </div>
                      
                      <div class="form-group">
                        <label>
                          <input type="checkbox" checked>
                          Save this card for future purchases
                        </label>
                      </div>
                    </form>
                  </div>
                  
                  <div class="method-content" id="upi-method">
                    <div class="upi-section">
                      <div class="form-group">
                        <label>UPI ID</label>
                        <input type="text" placeholder="yourname@upi">
                      </div>
                      <div class="qr-section">
                        <div class="qr-code">
                          <div class="qr-placeholder">QR Code</div>
                        </div>
                        <p>Scan QR code with any UPI app</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="method-content" id="wallet-method">
                    <div class="wallet-options">
                      <div class="wallet-option">
                        <span class="wallet-icon">💳</span>
                        <span>Paytm Wallet</span>
                        <span class="wallet-balance">₹5,000</span>
                      </div>
                      <div class="wallet-option">
                        <span class="wallet-icon">💰</span>
                        <span>Amazon Pay</span>
                        <span class="wallet-balance">₹2,500</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="billing-address">
                  <h3>Billing Address</h3>
                  <div class="form-row">
                    <div class="form-group">
                      <label>First Name</label>
                      <input type="text" placeholder="John">
                    </div>
                    <div class="form-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="Doe">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Address</label>
                    <input type="text" placeholder="123 Main Street">
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>City</label>
                      <input type="text" placeholder="Mumbai">
                    </div>
                    <div class="form-group">
                      <label>PIN Code</label>
                      <input type="text" placeholder="400001">
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="order-summary">
                <div class="summary-header">
                  <h2>Order Summary</h2>
                </div>
                
                <div class="order-items">
                  <div class="order-item">
                    <div class="item-image">
                      <img src="https://placehold.co/80x80/8b5cf6/ffffff?text=Product" alt="Product">
                    </div>
                    <div class="item-details">
                      <h4>Premium Business Course</h4>
                      <p>Digital Product</p>
                      <span class="item-quantity">Qty: 1</span>
                    </div>
                    <div class="item-price">₹2,500</div>
                  </div>
                  
                  <div class="order-item">
                    <div class="item-image">
                      <img src="https://placehold.co/80x80/10b981/ffffff?text=Bonus" alt="Bonus">
                    </div>
                    <div class="item-details">
                      <h4>Bonus Templates</h4>
                      <p>Free with purchase</p>
                      <span class="item-quantity">Qty: 1</span>
                    </div>
                    <div class="item-price">Free</div>
                  </div>
                </div>
                
                <div class="promo-section">
                  <div class="promo-input">
                    <input type="text" placeholder="Enter promo code">
                    <button class="apply-btn">Apply</button>
                  </div>
                </div>
                
                <div class="order-totals">
                  <div class="total-row">
                    <span>Subtotal:</span>
                    <span>₹2,500</span>
                  </div>
                  <div class="total-row">
                    <span>Discount:</span>
                    <span class="discount">-₹500</span>
                  </div>
                  <div class="total-row">
                    <span>Tax:</span>
                    <span>₹360</span>
                  </div>
                  <div class="total-row final-total">
                    <span>Total:</span>
                    <span>₹2,360</span>
                  </div>
                </div>
                
                <div class="guarantees">
                  <div class="guarantee-item">
                    <span class="guarantee-icon">🛡️</span>
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div class="guarantee-item">
                    <span class="guarantee-icon">🔒</span>
                    <span>SSL secured checkout</span>
                  </div>
                  <div class="guarantee-item">
                    <span class="guarantee-icon">⚡</span>
                    <span>Instant digital delivery</span>
                  </div>
                </div>
                
                <button class="checkout-button">Complete Payment</button>
              </div>
            </div>
          </div>
        </div>
      `,
      css: `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .modern-checkout {
          min-height: 100vh;
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          font-family: 'Inter', sans-serif;
          padding: 20px;
        }
        
        .checkout-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .checkout-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .checkout-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 10px;
        }
        
        .checkout-header p {
          color: #64748b;
          font-size: 1.1rem;
        }
        
        .checkout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        
        .payment-section,
        .order-summary {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        
        .section-header h2 {
          font-size: 1.5rem;
          color: #1e293b;
        }
        
        .security-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #dcfce7;
          color: #166534;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .method-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
        }
        
        .method-tab {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
          padding: 12px;
          border: 1px solid #e2e8f0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .method-tab:hover {
          background: #f8fafc;
        }
        
        .method-tab.active {
          background: #8b5cf6;
          color: white;
          border-color: #8b5cf6;
        }
        
        .method-content {
          display: none;
        }
        
        .method-content.active {
          display: block;
        }
        
        .form-group {
          margin-bottom: 20px;
          position: relative;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #1e293b;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #8b5cf6;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .card-icons {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          gap: 5px;
        }
        
        .billing-address {
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid #e2e8f0;
        }
        
        .billing-address h3 {
          color: #1e293b;
          margin-bottom: 20px;
        }
        
        .upi-section {
          text-align: center;
        }
        
        .qr-section {
          margin-top: 30px;
        }
        
        .qr-code {
          width: 150px;
          height: 150px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
        }
        
        .qr-placeholder {
          color: #64748b;
          font-size: 0.9rem;
        }
        
        .wallet-options {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .wallet-option {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .wallet-option:hover {
          background: #e0e7ff;
        }
        
        .wallet-balance {
          margin-left: auto;
          font-weight: 600;
          color: #10b981;
        }
        
        .summary-header h2 {
          color: #1e293b;
          font-size: 1.5rem;
          margin-bottom: 30px;
        }
        
        .order-items {
          margin-bottom: 30px;
        }
        
        .order-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .order-item:last-child {
          border-bottom: none;
        }
        
        .item-image img {
          width: 60px;
          height: 60px;
          border-radius: 8px;
        }
        
        .item-details {
          flex: 1;
        }
        
        .item-details h4 {
          color: #1e293b;
          margin-bottom: 5px;
        }
        
        .item-details p {
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }
        
        .item-quantity {
          color: #64748b;
          font-size: 0.8rem;
        }
        
        .item-price {
          font-weight: 600;
          color: #1e293b;
        }
        
        .promo-section {
          margin-bottom: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .promo-input {
          display: flex;
          gap: 10px;
        }
        
        .promo-input input {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }
        
        .apply-btn {
          background: #8b5cf6;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        
        .apply-btn:hover {
          background: #7c3aed;
        }
        
        .order-totals {
          margin-bottom: 30px;
        }
        
        .total-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          font-size: 1rem;
        }
        
        .total-row:last-child {
          margin-bottom: 0;
        }
        
        .discount {
          color: #10b981;
        }
        
        .final-total {
          font-weight: 700;
          font-size: 1.2rem;
          color: #1e293b;
          padding-top: 15px;
          border-top: 1px solid #e2e8f0;
        }
        
        .guarantees {
          margin-bottom: 30px;
        }
        
        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #64748b;
          font-size: 0.95rem;
        }
        
        .checkout-button {
          width: 100%;
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
          color: white;
          border: none;
          padding: 18px;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
        }
        
        .checkout-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
        }
        
        @media (max-width: 1024px) {
          .checkout-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .payment-section,
          .order-summary {
            padding: 30px 20px;
          }
          
          .checkout-header h1 {
            font-size: 2rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .method-tabs {
            flex-direction: column;
          }
        }
      `
    },
    'express_payment': {
      name: 'Express Payment',
      description: 'Fast and streamlined payment page for quick transactions.',
      thumbnail: 'https://placehold.co/400x300/059669/ffffff?text=Express+Pay',
      html: `
        <div class="express-payment">
          <div class="payment-container">
            <div class="payment-header">
              <h1>Express Checkout</h1>
              <p>Complete your purchase in seconds</p>
            </div>
            
            <div class="product-summary">
              <div class="product-info">
                <img src="https://placehold.co/100x100/059669/ffffff?text=Product" alt="Product">
                <div class="product-details">
                  <h3>Premium Course Bundle</h3>
                  <p>Digital Download</p>
                </div>
              </div>
              <div class="product-price">₹2,499</div>
            </div>
            
            <div class="express-options">
              <button class="express-btn google-pay">
                <span class="btn-icon">🎯</span>
                <span class="btn-text">Google Pay</span>
              </button>
              <button class="express-btn apple-pay">
                <span class="btn-icon">🍎</span>
                <span class="btn-text">Apple Pay</span>
              </button>
              <button class="express-btn paytm">
                <span class="btn-icon">💳</span>
                <span class="btn-text">Paytm</span>
              </button>
            </div>
            
            <div class="divider">
              <span>or pay with card</span>
            </div>
            
            <form class="payment-form">
              <div class="form-group">
                <input type="email" placeholder="Email address" required>
              </div>
              
              <div class="form-group">
                <input type="text" placeholder="Card number" required>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <input type="text" placeholder="MM/YY" required>
                </div>
                <div class="form-group">
                  <input type="text" placeholder="CVV" required>
                </div>
              </div>
              
              <div class="form-group">
                <input type="text" placeholder="Name on card" required>
              </div>
              
              <button type="submit" class="pay-button">
                <span class="button-text">Pay ₹2,499</span>
                <span class="button-icon">🔒</span>
              </button>
            </form>
            
            <div class="trust-indicators">
              <div class="trust-item">
                <span class="trust-icon">🔒</span>
                <span>SSL Encrypted</span>
              </div>
              <div class="trust-item">
                <span class="trust-icon">🛡️</span>
                <span>Money Back Guarantee</span>
              </div>
              <div class="trust-item">
                <span class="trust-icon">⚡</span>
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      `,
      css: `
        .express-payment {
          min-height: 100vh;
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Inter', sans-serif;
        }
        
        .payment-container {
          background: white;
          border-radius: 20px;
          padding: 50px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .payment-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .payment-header h1 {
          font-size: 2.2rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 10px;
        }
        
        .payment-header p {
          color: #64748b;
          font-size: 1.1rem;
        }
        
        .product-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 25px;
          background: #f8fafc;
          border-radius: 16px;
          margin-bottom: 30px;
          border: 1px solid #e2e8f0;
        }
        
        .product-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .product-info img {
          width: 60px;
          height: 60px;
          border-radius: 12px;
        }
        
        .product-details h3 {
          color: #1e293b;
          margin-bottom: 5px;
        }
        
        .product-details p {
          color: #64748b;
          font-size: 0.9rem;
        }
        
        .product-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #059669;
        }
        
        .express-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 30px;
        }
        
        .express-btn {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 20px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          font-weight: 500;
        }
        
        .express-btn:hover {
          background: #f8fafc;
          transform: translateY(-1px);
        }
        
        .express-btn.google-pay:hover {
          border-color: #4285f4;
        }
        
        .express-btn.apple-pay:hover {
          border-color: #000000;
        }
        
        .express-btn.paytm:hover {
          border-color: #00baf2;
        }
        
        .btn-icon {
          font-size: 1.2rem;
        }
        
        .divider {
          text-align: center;
          margin: 30px 0;
          position: relative;
          color: #64748b;
        }
        
        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e2e8f0;
        }
        
        .divider span {
          background: white;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }
        
        .payment-form {
          margin-bottom: 30px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group input {
          width: 100%;
          padding: 15px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #059669;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        
        .pay-button {
          width: 100%;
          background: linear-gradient(135deg, #059669, #047857);
          color: white;
          border: none;
          padding: 18px;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(5, 150, 105, 0.3);
        }
        
        .pay-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(5, 150, 105, 0.5);
        }
        
        .trust-indicators {
          display: flex;
          justify-content: space-around;
          padding-top: 30px;
          border-top: 1px solid #e2e8f0;
        }
        
        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
        }
        
        .trust-icon {
          font-size: 1.5rem;
        }
        
        .trust-item span:last-child {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .payment-container {
            padding: 40px 20px;
          }
          
          .payment-header h1 {
            font-size: 1.8rem;
          }
          
          .product-summary {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .trust-indicators {
            flex-direction: column;
            gap: 20px;
          }
        }
      `
    }
  }
};