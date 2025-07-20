import landing_page1 from "./default_template/landing page1";
export const welcomeTemplates = {
      welcomeTemplates: {
        'warm_welcome': {
            name: '1 Funnel landing page',
            description: 'A friendly welcome page with a clean design and clear CTA',
            thumbnail: 'https://placehold.co/400x300/4f46e5/ffffff?text=Warm+Welcome&font=playfair-display&style=gradient',
            css: `
        /* Font Imports */
        /* Font Imports */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@300;400;500;600;700&family=Shadows+Into+Light&display=swap');

        /* CSS Variables - Dark Theme */
        :root {
            --primary-color: #6B8DD6;
            --primary-dark-color: #5A7BC4;
            --secondary-color: #6B8DD6;
            --accent-color: #FFB347;
            --cta-color: #5A7BC4;
            --cta-hover-color: #6B8DD6;
            --text-dark: #E5E5E5;
            --text-medium: #B8B8B8;
            --text-light: #9A9A9A;
            --text-white: #FFFFFF;
            --bg-white: #1A1A1A;
            --bg-light-gray: #2D2D2D;
            --bg-dark-blue: #0F0F0F;
            --border-color: #404040;
            --highlight-bg: rgba(255, 179, 71, 0.2);
            --highlight-red-bg: rgba(255, 107, 107, 0.1);
            --highlight-red-text: #FF6B6B;
            --highlight-blue-bg: rgba(107, 141, 214, 0.1);
            --highlight-blue-text: #6B8DD6;
            --font-family-headings: 'Playfair Display', serif;
            --font-family-body: 'Poppins', sans-serif;
            --font-family-handwritten: 'Shadows Into Light', cursive;
            --font-weight-light: 300;
            --font-weight-normal: 400;
            --font-weight-medium: 500;
            --font-weight-semibold: 600;
            --font-weight-bold: 700;
            --border-radius-sm: 6px;
            --border-radius-md: 10px;
            --border-radius-lg: 18px;
            --border-radius-xl: 28px;
            --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
            --shadow-md: 0 5px 15px rgba(0, 0, 0, 0.4);
            --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.5);
            --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        /* Global Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-family-body);
            background-color: var(--bg-white);
            color: var(--text-medium);
            line-height: 1.7;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .page-wrapper {
            overflow-x: hidden;
            overflow-y: visible;
            min-height: 100vh;
            background-color: var(--bg-white);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        .section-padding {
            padding: 80px 0;
        }

        /* Top Bar */
        .top-bar {
            text-align: center;
            padding: 15px 20px;
            font-size: 1rem;
            font-weight: var(--font-weight-medium);
            background: linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A1A1A 100%);
            color: var(--text-white);
            box-shadow: var(--shadow-sm);
            position: relative;
            z-index: 999;
        }

        .top-bar-text {
            letter-spacing: 0.5px;
        }

        /* Hero Section */
        .hero-section {
            position: relative;
            background: linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A1A1A 100%);
            text-align: center;
            padding-top: 100px;
            padding-bottom: 120px;
            color: var(--text-dark);
            z-index: 1;
            overflow: hidden;
        }

        .hero-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
            background-size: 30px 30px;
            pointer-events: none;
            z-index: 0;
        }

        .hero-section::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 80px;
            background-size: cover;
            background-repeat: no-repeat;
            z-index: 10;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,60 C200,150 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z' style='fill:%232D2D2D;'%3E%3C/path%3E%3C/svg%3E");
        }

        .hero-content {
            position: relative;
            z-index: 3;
        }

        .hero-title {
            font-family: var(--font-family-headings);
            font-size: 3.2rem;
            font-weight: var(--font-weight-bold);
            line-height: 1.3;
            margin-bottom: 25px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            letter-spacing: 0.5px;
        }

        .sub-headline {
            font-size: 1.3rem;
            font-style: italic;
            font-weight: var(--font-weight-light);
            margin-bottom: 35px;
        }

        .hero-pills {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 45px;
            flex-wrap: wrap;
        }

        .hero-pill {
            padding: 12px 25px;
            border-radius: var(--border-radius-xl);
            font-size: 0.95rem;
            font-weight: var(--font-weight-medium);
            box-shadow: var(--shadow-sm);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            background-color: rgba(255, 255, 255, 0.1);
            color: var(--text-dark);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hero-pill:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-md);
        }

        .highlight {
            background-color: var(--highlight-bg);
            padding: 0.15em 0.5em;
            border-radius: var(--border-radius-sm);
            font-weight: var(--font-weight-semibold);
            color: var(--accent-color);
            box-shadow: 0 0 15px var(--highlight-bg);
        }

        .ai-agents {
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Video and Agenda Container */
        .video-agenda-container {
            display: flex;
            flex-direction: column;
            gap: 40px;
            align-items: center;
            margin-top: 50px;
        }

        .video-section {
            flex: 1 1 550px;
            max-width: 600px;
            width: 100%;
        }

        .video-placeholder-wrapper {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            border-radius: var(--border-radius-lg);
            box-shadow: var(--shadow-xl);
            margin-bottom: 35px;
            background-color: #000;
        }

        .video-placeholder {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80') center/cover no-repeat;
        }

        .active-video-player {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .play-button-overlay {
            position: absolute;
            width: 90px;
            height: 90px;
            background-color: rgba(255, 255, 255, 0.25);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all 0.5s ease;
            backdrop-filter: blur(8px);
            overflow: hidden;
            animation: pulse 2s infinite;
        }

        .play-button-overlay:hover {
            background-color: rgba(255, 255, 255, 0.45);
            transform: scale(1.1);
            box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.35);
            animation: none;
        }

        .play-icon {
            width: 45px;
            height: 45px;
            fill: var(--text-white);
        }

        .video-placeholder-overlay-text {
            position: absolute;
            bottom: 20px;
            left: 20px;
            text-align: left;
            color: var(--text-white);
        }

        .video-placeholder-overlay-text h3 {
            font-family: var(--font-family-headings);
            margin: 0;
            font-size: 1.6rem;
            font-weight: var(--font-weight-bold);
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
            color: var(--text-white);
        }

        .video-placeholder-overlay-text p {
            margin: 5px 0 0;
            font-size: 0.9rem;
            opacity: 0.9;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
        }

        @keyframes pulse {

            0%,
            100% {
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
            }

            50% {
                box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
            }
        }

        /* Event Details Grid */
        .event-details-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
        }

        .event-detail-box {
            background-color: var(--bg-white);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-md);
            padding: 15px;
            text-align: center;
            box-shadow: var(--shadow-sm);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .event-detail-box:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: var(--shadow-md);
        }

        .event-detail-icon {
            font-size: 1.5rem;
            margin-bottom: 8px;
            color: var(--primary-color);
        }

        .event-detail-label {
            font-size: 0.75rem;
            color: var(--text-light);
            font-weight: var(--font-weight-medium);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }

        .event-detail-value {
            font-size: 0.9rem;
            font-weight: var(--font-weight-semibold);
            color: var(--text-dark);
        }

        /* Implementation Agenda */
        .implementation-agenda-wrapper {
            flex: 1 1 500px;
            max-width: 550px;
            width: 100%;
        }

        .implementation-agenda {
            background-color: var(--bg-white);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-lg);
            padding: 35px;
            box-shadow: var(--shadow-xl);
        }

        .implementation-agenda h3 {
            font-family: var(--font-family-headings);
            margin-top: 0;
            margin-bottom: 30px;
            color: var(--text-dark);
            font-size: 1.8rem;
            font-weight: var(--font-weight-semibold);
            text-align: center;
            text-decoration: underline;
            text-underline-offset: 10px;
            text-decoration-color: var(--primary-color);
        }

        .agenda-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .agenda-list-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            font-size: 1rem;
            line-height: 1.6;
            color: var(--text-medium);
        }

        .agenda-list-item:last-child {
            margin-bottom: 0;
        }

        .agenda-list-icon {
            color: var(--secondary-color);
            margin-right: 12px;
            margin-top: 3px;
            flex-shrink: 0;
        }

        /* Enroll Button */
        .enroll-button-container {
            text-align: center;
            padding: 25px 0;
        }

        .enroll-button {
            background: linear-gradient(90deg, var(--cta-color), var(--cta-hover-color));
            color: var(--text-white);
            border: none;
            padding: 20px 40px;
            font-size: 1.3rem;
            font-weight: var(--font-weight-bold);
            border-radius: var(--border-radius-xl);
            cursor: pointer;
            box-shadow: 0 8px 20px rgba(90, 123, 196, 0.35);
            position: relative;
            min-width: 320px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .enroll-button:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 12px 25px rgba(90, 123, 196, 0.45);
            background: linear-gradient(90deg, var(--cta-hover-color), var(--cta-color));
        }

        .enroll-button s {
            font-weight: var(--font-weight-normal);
            opacity: 0.8;
            margin-left: 10px;
        }

        .hurry-message {
            margin-top: 20px;
            font-size: 0.95rem;
            color: var(--text-medium);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: var(--font-weight-medium);
        }

        .red-check {
            color: var(--text-white);
            background-color: var(--secondary-color);
            padding: 3px 6px;
            border-radius: var(--border-radius-sm);
            margin-right: 8px;
            font-size: 0.85em;
            font-weight: var(--font-weight-bold);
        }

        /* Section Titles */
        .section-title {
            font-family: var(--font-family-headings);
            font-size: 2.8rem;
            font-weight: var(--font-weight-bold);
            text-align: center;
            margin-bottom: 50px;
            line-height: 1.3;
            letter-spacing: 0.2px;
            color: var(--text-dark);
        }

        .section-title-light {
            color: var(--text-white);
        }

        .section-subtitle {
            font-size: 1.15rem;
            color: var(--text-light);
            text-align: center;
            max-width: 750px;
            margin: -30px auto 50px auto;
            font-weight: var(--font-weight-light);
        }

        /* Client Showcase */
        .client-showcase-section {
            background-color: var(--bg-light-gray);
        }

        .client-carousel-container {
            width: 100%;
            overflow: hidden;
            position: relative;
            padding: 20px 0;
            mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        .client-carousel {
            display: flex;
            gap: 30px;
            animation: scrollClients 60s linear infinite;
            width: fit-content;
        }

        .client-carousel:hover {
            animation-play-state: paused;
        }

        @keyframes scrollClients {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-50%);
            }
        }

        .client-card {
            background: var(--bg-white);
            border-radius: var(--border-radius-lg);
            padding: 35px;
            box-shadow: var(--shadow-lg);
            min-width: 330px;
            max-width: 330px;
            text-align: center;
            border: 1px solid var(--border-color);
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            flex-shrink: 0;
        }

        .client-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: var(--shadow-xl);
        }

        .client-image-container {
            width: 130px;
            height: 130px;
            margin: 0 auto 25px;
            border-radius: 50%;
            overflow: hidden;
            border: 5px solid var(--primary-color);
            box-shadow: var(--shadow-md);
        }

        .client-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .client-name {
            font-size: 1.3rem;
            font-weight: var(--font-weight-semibold);
            color: var(--text-dark);
            margin: 0 0 8px 0;
        }

        .client-position {
            font-size: 0.95rem;
            color: var(--text-light);
            margin: 0 0 15px 0;
            min-height: 40px;
        }

        .client-following {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background-color: var(--bg-light-gray);
            padding: 8px 15px;
            border-radius: var(--border-radius-xl);
            border: 1px solid var(--border-color);
        }

        .instagram-icon {
            color: #E1306C;
            width: 20px;
            height: 20px;
        }

        .following-text {
            font-size: 0.9rem;
            font-weight: var(--font-weight-medium);
            color: var(--text-medium);
        }

        /* Social Proof */
        .social-proof-section {
            background-color: var(--bg-white);
        }

        .screenshots-flex-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
            margin-bottom: 40px;
        }

        .phone-with-annotations {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 60px;
            width: 500px;
            margin-left: 100px;
        }

        .bottom-annotation {
            position: absolute;
            max-width: 320px;
            left: -200px;
            top: 70%;
            transform: translateY(-50%);
        }

        .phone-container {
            position: relative;
            z-index: 2;
        }

        .arrow-container {
            position: relative;
            display: inline-block;
            z-index: 3;
        }

        .arrow-top-to-phone {
            margin-top: 15px;
            margin-left: 50px;
        }

        .arrow-bottom-to-phone {
            margin-top: 10px;
            margin-left: -20px;
        }

        .curved-arrow {
            width: 60px;
            height: 60px;
            opacity: 0.8;
            filter: hue-rotate(20deg) saturate(1.2);
            transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .curved-arrow:hover {
            transform: scale(1.1);
            opacity: 1;
        }

        .handwritten-text {
            font-family: var(--font-family-handwritten);
            font-size: 1.5rem;
            line-height: 1.5;
            color: var(--text-medium);
            margin: 0;
            text-align: center;
            transform: rotate(-1.5deg);
        }

        .handwritten-text-top {
            transform: rotate(3.5deg);
            color: #6B8DD6;
        }

        .handwritten-text-bottom {
            transform: rotate(-2.5deg);
            color: #6B8DD6;
        }

        .highlight-red-handwritten {
            color: #FF6B6B;
            font-weight: bold;
        }

        .highlight-blue-handwritten {
            color: #6B8DD6;
            font-weight: bold;
        }

        .highlight-green-handwritten {
            color: #6BC96B;
            font-weight: bold;
        }

        .arrow-container {
            position: absolute;
            width: 80px;
            height: 80px;
            z-index: 1;
        }

        .arrow-top-to-phone {
            bottom: -80px;
            left: 100px;
            transform: rotate(250deg) scale(0.8);
        }

        .arrow-bottom-to-phone {
            top: -30%;
            right: -10px;
            transform: translateY(-50%) rotate(90deg) scale(0.8);
        }

        .handwritten-arrow {
            width: 100%;
            height: 100%;
            opacity: 1;
            filter: hue-rotate(180deg);
            transition: filter 0.3s ease;
        }

        .screenshot-item {
            flex: 0 0 auto;
            padding: 10px;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-xl);
            box-shadow: var(--shadow-lg);
            display: inline-block;
        }

        .screenshot-item-no-shadow {
            flex: 0 0 auto;
            padding: 10px;
            border-radius: var(--border-radius-xl);
            display: inline-block;
            scale: 1;
            position: relative;
            top: 150px;
        }

        .top-annotation {
            position: relative;
            margin-bottom: -30px;
            max-width: 320px;
            align-self: flex-end;
            margin-right: -40px;
        }

        .screenshot-itemgg {
            flex: 0 0 auto;
            padding: 10px;
            border-radius: var(--border-radius-xl);
            display: inline-block;
            position: relative;
            z-index: 2;
            scale: 0.8;
            margin-top: -20px;
        }

        .screenshot-item-gif {
            transform: scale(1.05);
        }

        .simple-screenshot {
            max-width: 280px;
            height: auto;
            border-radius: var(--border-radius-md);
            display: block;
        }

        /* Reverse Funnel */
        .reverse-funnel-section {
            background-color: var(--bg-light-gray);
            padding-top: 100px;
            padding-bottom: 100px;
        }

        .reverse-funnel-subtitle {
            font-size: 2rem !important;
            font-weight: var(--font-weight-bold) !important;
            color: var(--primary-color) !important;
            margin-top: -20px;
            margin-bottom: 60px !important;
            font-family: var(--font-family-headings);
        }

        .funnel-diagram {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .funnel-step {
            background: linear-gradient(145deg, var(--bg-white), var(--bg-light-gray));
            border-radius: var(--border-radius-lg);
            padding: 25px;
            text-align: center;
            color: var(--text-dark);
            font-size: 0.95rem;
            box-shadow: var(--shadow-lg);
            width: 100%;
            max-width: 230px;
            border: 1px solid var(--border-color);
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 220px;
            justify-content: flex-start;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .funnel-step:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: var(--shadow-xl);
            border-color: var(--accent-color);
        }

        .funnel-step-icon-wrapper {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin: 0 auto 20px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--primary-color);
            color: var(--text-white);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease;
        }

        .funnel-step:hover .funnel-step-icon-wrapper {
            background-color: var(--accent-color);
        }

        .funnel-step-icon-wrapper svg {
            width: 32px;
            height: 32px;
            fill: currentColor;
        }

        .funnel-step-1 .funnel-step-icon-wrapper {
            background-color: #4A69BB;
        }

        .funnel-step-2 .funnel-step-icon-wrapper {
            background-color: #5DADE2;
        }

        .funnel-step-3 .funnel-step-icon-wrapper {
            background-color: #48C9B0;
        }

        .funnel-step-4 .funnel-step-icon-wrapper {
            background-color: #F4D03F;
        }

        .funnel-step-5 .funnel-step-icon-wrapper {
            background-color: #E74C3C;
        }

        .funnel-step-number {
            font-size: 0.8rem;
            color: var(--text-light);
            font-weight: var(--font-weight-bold);
            margin-bottom: 10px;
            background-color: rgba(255, 255, 255, 0.1);
            display: inline-block;
            padding: 4px 10px;
            border-radius: var(--border-radius-sm);
        }

        .funnel-step p {
            font-weight: var(--font-weight-medium);
            line-height: 1.5;
            margin: 0;
            font-size: 0.9rem;
            color: var(--text-medium);
        }

        /* Testimonials */
        .testimonials-section {
            background-color: var(--bg-white);
        }

        .testimonial-slider-container {
            position: relative;
            max-width: 1000px;
            margin: 0 auto;
            overflow: hidden;
        }

        .testimonial-slider-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
            gap: 30px;
            padding: 10px;
        }

        .testimonial-card {
            background-color: var(--bg-light-gray);
            border-radius: var(--border-radius-lg);
            box-shadow: var(--shadow-lg);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            border: 1px solid var(--border-color);
            min-width: 320px;
            max-width: 350px;
            flex-shrink: 0;
        }

        .testimonial-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: var(--shadow-xl);
        }

        .testimonial-image-wrapper {
            width: 100%;
            height: 200px;
            overflow: hidden;
            background-color: var(--bg-light-gray);
        }

        .testimonial-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .testimonial-content {
            padding: 25px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .testimonial-text {
            font-size: 1rem;
            color: var(--text-medium);
            font-style: italic;
            margin-bottom: 20px;
            line-height: 1.6;
            position: relative;
            padding-left: 30px;
        }

        .testimonial-text::before {
            content: '"';
            font-family: 'Georgia', serif;
            font-size: 3rem;
            color: var(--primary-color);
            opacity: 0.5;
            position: absolute;
            left: 0px;
            top: -10px;
        }

        .testimonial-author {
            font-size: 0.9rem;
            font-weight: var(--font-weight-semibold);
            color: var(--primary-color);
            text-align: right;
            margin-top: auto;
        }

        .testimonial-author span {
            display: block;
            font-size: 0.8rem;
            font-weight: var(--font-weight-normal);
            color: var(--text-light);
        }

        .testimonial-slider-controls {
            text-align: center;
            margin-top: 30px;
        }

        .testimonial-slider-arrow {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.2rem;
            margin: 0 10px;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: var(--shadow-sm);
        }

        .testimonial-slider-arrow:hover {
            background-color: var(--primary-dark-color);
            transform: scale(1.1);
        }

        .testimonial-slider-arrow:disabled {
            background-color: var(--border-color);
            cursor: not-allowed;
        }

        /* Tsunami Section */
        .tsunami-section {
            background-color: var(--bg-light-gray);
        }

        .tsunami-header .section-title {
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
        }

        .tsunami-content-wrapper {
            display: grid;
            grid-template-columns: 1fr;
            gap: 50px;
            align-items: flex-start;
        }

        .tsunami-left {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .group-photo-container {
            width: 100%;
            border-radius: var(--border-radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-xl);
        }

        .group-photo {
            width: 100%;
            height: auto;
            display: block;
        }

        .tsunami-description p {
            font-size: 1.05rem;
            line-height: 1.8;
            color: var(--text-medium);
            margin-bottom: 18px;
        }

        .tsunami-description strong {
            color: var(--text-dark);
            font-weight: var(--font-weight-semibold);
        }

        .tsunami-right {
            display: flex;
            flex-direction: column;
            gap: 40px;
        }

        .what-if-section {
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark-color));
            padding: 35px;
            border-radius: var(--border-radius-lg);
            color: var(--text-white);
            box-shadow: var(--shadow-lg);
        }

        .what-if-title {
            font-family: var(--font-family-headings);
            font-size: 1.8rem;
            margin: 0 0 25px 0;
            color: var(--text-white);
            font-weight: var(--font-weight-bold);
        }

        .what-if-steps {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .what-if-step {
            display: flex;
            align-items: flex-start;
            gap: 15px;
        }

        .step-number-badge {
            background: rgba(255, 255, 255, 0.2);
            color: var(--text-white);
            min-width: 32px;
            height: 32px;
            border-radius: 50%;
            font-weight: var(--font-weight-bold);
            font-size: 1rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .step-text {
            flex: 1;
            line-height: 1.6;
            font-size: 1.05rem;
            font-weight: var(--font-weight-medium);
        }

        .comparison-container {
            background: var(--bg-white);
            border-radius: var(--border-radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-xl);
        }

        .comparison-table {
            display: grid;
            grid-template-columns: 1fr;
        }

        .comparison-column {
            display: flex;
            flex-direction: column;
        }

        .column-header {
            padding: 25px 20px;
            text-align: center;
            font-weight: var(--font-weight-bold);
        }

        .column-header h4 {
            font-family: var(--font-family-headings);
            margin: 0 0 5px 0;
            font-size: 1.6rem;
        }

        .column-header p {
            margin: 0;
            font-size: 0.9rem;
            font-weight: var(--font-weight-medium);
            opacity: 0.9;
        }

        .old-way {
            background-color: rgba(255, 107, 107, 0.1);
        }

        .old-way .column-header {
            background-color: rgba(255, 107, 107, 0.2);
            color: #FF6B6B;
        }

        .new-way {
            background-color: rgba(107, 201, 107, 0.1);
        }

        .new-way .column-header {
            background-color: rgba(107, 201, 107, 0.2);
            color: #6BC96B;
        }

        .comparison-items {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            padding: 20px;
        }

        .comparison-item {
            display: flex;
            align-items: flex-start;
            padding: 12px 0;
            gap: 12px;
            border-bottom: 1px solid var(--border-color);
            min-height: 70px;
        }

        .comparison-item:last-child {
            border-bottom: none;
        }

        .item-icon {
            font-weight: var(--font-weight-bold);
            font-size: 1.3rem;
            margin-top: 2px;
            flex-shrink: 0;
            width: 24px;
            text-align: center;
        }

        .item-icon.cross {
            color: #FF6B6B;
        }

        .item-icon.check {
            color: #6BC96B;
        }

        .item-content {
            flex: 1;
        }

        .item-label {
            font-size: 0.7rem;
            font-weight: var(--font-weight-bold);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 3px;
            display: block;
            opacity: 0.8;
        }

        .old-way .item-label {
            color: #FF6B6B;
        }

        .new-way .item-label {
            color: #6BC96B;
        }

        .item-text {
            font-size: 0.95rem;
            line-height: 1.5;
            color: var(--text-medium);
            font-weight: var(--font-weight-medium);
        }

        /* Results Agenda */
        .results-agenda-section {
            background-color: var(--bg-white);
        }

        .agenda-sprint-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
        }

        .agenda-sprint-card {
            background-color: var(--bg-light-gray);
            border-radius: var(--border-radius-lg);
            box-shadow: var(--shadow-lg);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            border: 1px solid var(--border-color);
        }

        .agenda-sprint-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: var(--shadow-xl);
        }

        .agenda-sprint-card .card-header {
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 15px;
            background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
            color: var(--text-white);
            position: relative;
        }

        .agenda-icon-wrapper {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            border: 2px solid rgba(255, 255, 255, 0.5);
        }

        .agenda-icon {
            width: 40px;
            height: 40px;
            object-fit: contain;
            filter: brightness(0) invert(1);
        }

        .day-label {
            font-family: var(--font-family-headings);
            font-size: 1.5rem;
            font-weight: var(--font-weight-bold);
        }

        .agenda-sprint-card .card-content {
            padding: 30px;
            flex-grow: 1;
        }

        .agenda-card-title {
            font-family: var(--font-family-headings);
            font-size: 1.6rem;
            color: var(--text-dark);
            margin-top: 0;
            margin-bottom: 20px;
            font-weight: var(--font-weight-semibold);
        }

        .agenda-sprint-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .agenda-sprint-list-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            font-size: 0.95rem;
            color: var(--text-medium);
            line-height: 1.6;
        }

        .agenda-sprint-list-item:last-child {
            margin-bottom: 0;
        }

        .agenda-sprint-list-icon {
            color: var(--primary-color);
            margin-right: 10px;
            font-size: 1.1em;
            margin-top: 3px;
            flex-shrink: 0;
        }

        /* Pricing */
        .pricing-section {
            background-color: var(--bg-light-gray);
        }

        .pricing-table-wrapper {
            max-width: 700px;
            margin: 0 auto 30px auto;
            background-color: var(--bg-white);
            border-radius: var(--border-radius-lg);
            box-shadow: var(--shadow-xl);
            padding: 20px;
        }

        .pricing-table {
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-md);
            overflow: hidden;
        }

        .pricing-row {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            border-bottom: 1px solid var(--border-color);
            padding: 20px;
            position: relative;
            transition: background-color 0.2s ease;
        }

        .pricing-row:last-child {
            border-bottom: none;
        }

        .pricing-row:hover {
            background-color: rgba(107, 141, 214, 0.1);
        }

        .pricing-row-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            width: 100%;
        }

        .pricing-row.recommended {
            background-color: var(--primary-color);
            color: var(--text-white);
            border-color: var(--primary-dark-color);
            border-width: 2px;
            border-style: solid;
            margin: -1px;
            border-radius: var(--border-radius-md);
        }

        .pricing-row.recommended .seats,
        .pricing-row.recommended .price,
        .pricing-row.recommended .bonus {
            color: var(--text-white);
        }

        .pricing-row.recommended .last-few-badge {
            background-color: var(--accent-color);
            color: var(--text-dark);
        }

        .current-offer-tag {
            position: absolute;
            top: -1px;
            right: 20px;
            background-color: var(--accent-color);
            color: var(--text-white);
            padding: 4px 10px;
            font-size: 0.75rem;
            font-weight: bold;
            border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
            text-transform: uppercase;
        }

        .seats {
            font-weight: var(--font-weight-semibold);
            color: var(--text-dark);
            font-size: 1rem;
            flex-basis: 40%;
            text-align: left;
        }

        .last-few-badge {
            background-color: var(--accent-color);
            color: var(--text-white);
            padding: 3px 8px;
            border-radius: var(--border-radius-sm);
            font-size: 0.75rem;
            font-weight: var(--font-weight-bold);
            margin-right: 8px;
            display: inline-block;
        }

        .price {
            font-size: 1.5rem;
            font-weight: var(--font-weight-bold);
            color: var(--primary-color);
            flex-basis: 20%;
            text-align: center;
        }

        .bonus {
            font-size: 0.9rem;
            color: var(--text-light);
            flex-basis: 40%;
            text-align: right;
        }

        .current-price-display {
            text-align: center;
            font-size: 1.2rem;
            font-weight: var(--font-weight-medium);
            color: var(--text-medium);
            margin-bottom: 30px;
        }

        .original-price {
            text-decoration: line-through;
            color: var(--text-light);
            margin-right: 8px;
            font-size: 1rem;
        }

        .discounted-price {
            font-size: 1.8rem;
            font-weight: var(--font-weight-bold);
            color: var(--cta-color);
        }

        /* Who Is Shubh */
        .who-is-shubh-section-wrapper {
            background-color: var(--bg-dark-blue);
            padding: 80px 0;
            margin-bottom: 0;
            overflow: visible;
        }

        .who-is-shubh-section {
            border-radius: var(--border-radius-xl);
            width: 90%;
            max-width: 1000px;
            background-color: var(--bg-dark-blue);
            color: var(--text-white);
            margin: 0 auto;
            box-shadow: var(--shadow-xl);
            position: relative;
            z-index: 1;
            min-height: 400px;
        }

        .who-is-shubh-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            padding: 50px 40px;
            box-sizing: border-box;
        }

        .shubh-photo-container {
            flex-shrink: 0;
            position: relative;
        }

        .shubh-photo {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 6px solid var(--primary-color);
            box-shadow: 0 0 30px rgba(74, 105, 187, 0.4), 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .shubh-details {
            flex: 1;
            text-align: center;
        }

        .shubh-details .section-title-light {
            font-size: 2.2rem;
            margin-bottom: 30px;
        }

        .shubh-details-list {
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: left;
        }

        .shubh-details-list-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-size: 1rem;
            line-height: 1.6;
            background-color: rgba(255, 255, 255, 0.05);
            padding: 10px 15px;
            border-radius: var(--border-radius-md);
            transition: background-color 0.3s ease;
        }

        .shubh-details-list-item:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        .shubh-details-icon {
            color: var(--secondary-color);
            margin-right: 15px;
            flex-shrink: 0;
            font-size: 1.2rem;
        }

        /* FAQ */
        .faq-section {
            background-color: var(--bg-white);
        }

        .faq-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .faq-item {
            border-bottom: 1px solid var(--border-color);
        }

        .faq-item:last-child {
            border-bottom: none;
        }

        .faq-question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 25px 0;
            cursor: pointer;
            font-weight: var(--font-weight-semibold);
            font-size: 1.2rem;
            color: var(--text-dark);
            transition: color 0.2s ease;
        }

        .faq-question:hover {
            color: #6B8DD6;
        }

        .faq-arrow {
            color: var(--primary-color);
            transition: transform 0.3s ease;
        }

        .faq-arrow.open {
            transform: rotate(180deg);
        }

        .faq-answer {
            padding: 0 0 25px 0;
            animation: fadeInAnswer 0.4s ease-in-out;
            color: var(--text-medium);
            line-height: 1.7;
            font-size: 1rem;
        }

        .faq-answer p {
            margin: 0;
        }

        @keyframes fadeInAnswer {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Footer */
        .footer {
            background-color: var(--bg-dark-blue);
            padding: 60px 0 50px;
            border-top: 1px solid var(--primary-dark-color);
            text-align: center;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 0;
            position: relative;
            z-index: 2;
        }

        .footer-copyright p {
            font-size: 0.9rem;
            color: var(--text-white);
            font-weight: var(--font-weight-medium);
            margin: 0 0 15px 0;
        }

        .footer-disclaimer p {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.6;
            margin: 0;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .footer-link {
            color: var(--accent-color);
            text-decoration: none;
            font-weight: var(--font-weight-medium);
        }

        .footer-link:hover {
            text-decoration: underline;
            color: #FFD700;
        }

        /* Floating CTA Bar */
        .floating-cta-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(26, 26, 26, 0.95);
            backdrop-filter: blur(10px);
            padding: 15px 0;
            box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            border-top: 1px solid var(--border-color);
        }

        .floating-cta-bar__container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        .floating-cta-bar__content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }

        .floating-cta-bar__info-section {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .floating-cta-bar__price-details {
            display: flex;
            align-items: baseline;
            gap: 8px;
        }

        .floating-cta-bar__price-current {
            font-size: 2.1rem;
            font-weight: var(--font-weight-bold);
            color: var(--secondary-color);
            line-height: 1;
        }

        .floating-cta-bar__price-original {
            font-size: 1.2rem;
            color: var(--cta-color);
            text-decoration: line-through;
            font-weight: var(--font-weight-normal);
            line-height: 1;
        }

        .floating-cta-bar__deadline {
            font-size: 0.85rem;
            color: var(--text-medium);
            margin-top: 5px;
            font-weight: var(--font-weight-medium);
        }

        .floating-cta-bar__action-section {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .floating-cta-bar__button {
            background-color: var(--cta-color);
            color: var(--text-white);
            border: none;
            padding: 15px 32px;
            font-size: 1.1rem;
            font-weight: var(--font-weight-bold);
            border-radius: var(--border-radius-md);
            cursor: pointer;
            position: relative;
            transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
        }

        .floating-cta-bar__button:hover {
            background-color: var(--cta-hover-color);
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
            transform: translateY(-2px);
        }

        .floating-cta-bar__bonus-text {
            font-size: 0.8rem;
            color: var(--text-medium);
            margin-top: 6px;
            font-weight: var(--font-weight-medium);
        }

        /* Responsive Design */
        @media (min-width: 992px) {
            .video-agenda-container {
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
                gap: 60px;
            }

            .funnel-diagram {
                flex-direction: row;
                justify-content: center;
                gap: 0;
                align-items: stretch;
            }

            .funnel-connector {
                display: block;
                width: 40px;
                height: 2px;
                background-color: var(--primary-color);
                position: relative;
                margin: auto 15px;
            }

            .funnel-connector::after {
                content: '';
                position: absolute;
                right: -6px;
                top: -4px;
                width: 0;
                height: 0;
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
                border-left: 8px solid var(--primary-color);
            }

            .screenshots-flex-container {
                flex-direction: row;
                gap: 120px;
                align-items: flex-start;
                justify-content: center;
            }

            .tsunami-content-wrapper {
                grid-template-columns: 1fr 1.2fr;
                gap: 60px;
            }

            .comparison-table {
                grid-template-columns: 1fr 1fr;
            }

            .pricing-row-content {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }

        @media (max-width: 991.98px) {
            .phone-with-annotations {
                gap: 30px;
                width: auto;
                margin-left: 0;
            }

            .top-annotation,
            .bottom-annotation {
                position: relative;
                align-self: center;
                margin: 20px 0 0 0;
                left: auto;
                top: auto;
                transform: none;
                max-width: 90%;
            }

            .arrow-container {
                display: none;
            }

            .arrow-top-to-phone {
                margin-left: 20px;
                margin-top: 20px;
            }

            .arrow-bottom-to-phone {
                margin-left: 10px;
                margin-top: 15px;
            }

            .curved-arrow {
                width: 50px;
                height: 50px;
            }
        }

        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }

            .section-title {
                font-size: 2.2rem;
            }

            .enroll-button {
                min-width: 280px;
            }

            .handwritten-text {
                font-size: 1.2rem;
            }

            .arrow-top-to-phone,
            .arrow-bottom-to-phone {
                margin-left: 0;
                text-align: center;
            }

            .curved-arrow {
                width: 40px;
                height: 40px;
            }
        }

        @media (max-width: 520px) {
            .floating-cta-bar__content {
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }

            .floating-cta-bar__info-section {
                align-items: center;
                text-align: center;
            }

            .floating-cta-bar__action-section {
                width: 100%;
            }

            .floating-cta-bar__button {
                width: 90%;
                max-width: 280px;
                margin: 0 auto;
            }

            .testimonial-card {
                min-width: calc(100% - 20px);
                max-width: calc(100% - 20px);
            }
        }

        @media (max-width: 480px) {
            .container {
                padding: 0 15px;
            }

            .section-padding {
                padding: 50px 0;
            }

            .hero-title {
                font-size: 2rem;
            }

            .section-title {
                font-size: 1.9rem;
            }

            .hero-pills {
                gap: 10px;
            }

            .hero-pill {
                padding: 10px 18px;
                font-size: 0.85rem;
            }

            .pricing-row-content {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
        }

            `,
            html: `
  <div class="page-wrapper">
        <!-- Top Bar -->
        <div class="top-bar">
            <span class="top-bar-text">🔥 Limited Time Offer - Scale Your Coaching Business To 5 Lakhs/Month!</span>
        </div>

        <!-- Hero Section -->
        <section class="hero-section section-padding">
            <div class="container hero-content">
                <h1 class="hero-title">Scale your Coaching Business To the <span class="highlight">5 Lakhs/Month
                        PROFIT</span> Using Army Of <span class="ai-agents">A.I. Agents</span></h1>
                <p class="sub-headline">Zero Tech Method & Complete Time Freedom.</p>
                <div class="hero-pills">
                    <span class="hero-pill">NO Sales Calls</span>
                    <span class="hero-pill">NO Endless Content</span>
                    <span class="hero-pill">NO Begging in DMs</span>
                </div>
                <div class="video-agenda-container">
                    <div class="video-section">
                        <div class="video-placeholder-wrapper">
                            <div class="video-placeholder">
                                <div class="play-button-overlay" onclick="handlePlayButtonClick()">
                                    <svg class="play-icon" viewBox="0 0 100 100">
                                        <path d="M 30,20 L 30,80 L 80,50 Z" />
                                    </svg>
                                </div>
                                <div class="video-placeholder-overlay-text">
                                    <h3>SHUBH JAIN</h3>
                                    <p>From Employee to 40 CR+ Empire Builder</p>
                                </div>
                            </div>
                        </div>
                        <div class="event-details-grid">
                            <div class="event-detail-box">
                                <div class="event-detail-icon">📅</div>
                                <div class="event-detail-label">DATE</div>
                                <div class="event-detail-value">June 28th - 30th</div>
                            </div>
                            <div class="event-detail-box">
                                <div class="event-detail-icon">🕰️</div>
                                <div class="event-detail-label">TIME</div>
                                <div class="event-detail-value">7 PM - 9 PM</div>
                            </div>
                            <div class="event-detail-box">
                                <div class="event-detail-icon">📍</div>
                                <div class="event-detail-label">WHERE</div>
                                <div class="event-detail-value">Zoom</div>
                            </div>
                            <div class="event-detail-box">
                                <div class="event-detail-icon">🌐</div>
                                <div class="event-detail-label">LANGUAGE</div>
                                <div class="event-detail-value">English</div>
                            </div>
                        </div>
                    </div>
                    <div class="implementation-agenda-wrapper">
                        <div class="implementation-agenda">
                            <h3>Implementation Agenda:</h3>
                            <ul class="agenda-list">
                                <li class="agenda-list-item">
                                    <span class="agenda-list-icon">✓</span>
                                    <span class="agenda-item-text">How to Make 10 Lakhs or More in Sales in One Weekend
                                        Which Would Otherwise Take You Months to Hit!</span>
                                </li>
                                <li class="agenda-list-item">
                                    <span class="agenda-list-icon">✓</span>
                                    <span class="agenda-item-text">How To SELL Premium Offers Without Sales Calls &
                                        Close Effortlessly in 5 hours/month.</span>
                                </li>
                                <li class="agenda-list-item">
                                    <span class="agenda-list-icon">✓</span>
                                    <span class="agenda-item-text">How To Create a Buying Movement That Makes People
                                        Throw Credit Cards At You To Buy!</span>
                                </li>
                            </ul>
                        </div>
                        <div class="agenda-enroll-section">
                            <div class="enroll-button-container">
                                <button class="enroll-button">
                                    ENROLL NOW @ ₹99 <s style="color: rgba(255,255,255,0.7)">₹999</s>
                                </button>
                                <p class="hurry-message">
                                    <span class="red-check">✔</span>
                                    <span class="red-check">✔</span> Hurry! Limited Seats Available!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Client Showcase Section -->
        <section class="client-showcase-section section-padding">
            <div class="container">
                <h2 class="section-title">Success Stories from My <span class="highlight">Coaching Community</span></h2>
                <div class="client-carousel-container">
                    <div class="client-carousel">
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/illustration/1.png"
                                    alt="Istik Nandakumar" class="client-image">
                            </div>
                            <h3 class="client-name">Istik Nandakumar</h3>
                            <p class="client-position">Business and business growth expert</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <span class="following-text">Following: 44.7K+</span>
                            </div>
                        </div>
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/about/1.jpg" alt="Ankit Neerav"
                                    class="client-image">
                            </div>
                            <h3 class="client-name">Ankit Neerav</h3>
                            <p class="client-position">Law of Attraction Coach</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <span class="following-text">Following: 24.3K+</span>
                            </div>
                        </div>
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/about/2.jpg" alt="Shankar Kulkarni"
                                    class="client-image">
                            </div>
                            <h3 class="client-name">Shankar Kulkarni</h3>
                            <p class="client-position">Financial Freedom & Confidence Coach</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <span class="following-text">Following: 9.1K+</span>
                            </div>
                        </div>
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/projects/1.jpg" alt="Priya Sharma"
                                    class="client-image">
                            </div>
                            <h3 class="client-name">Priya Sharma</h3>
                            <p class="client-position">Life Transformation Coach</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                                </svg>
                                <span class="following-text">Following: 32.5K+</span>
                            </div>
                        </div>
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/projects/2.jpg" alt="Rahul Mehta"
                                    class="client-image">
                            </div>
                            <h3 class="client-name">Rahul Mehta</h3>
                            <p class="client-position">Mindset & Success Coach</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <span class="following-text">Following: 18.9K+</span>
                            </div>
                        </div>
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/projects/3.jpg" alt="Kavita Singh"
                                    class="client-image">
                            </div>
                            <h3 class="client-name">Kavita Singh</h3>
                            <p class="client-position">Health & Wellness Coach</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                                </svg>
                                <span class="following-text">Following: 27.2K+</span>
                            </div>
                        </div>
                        <!-- Duplicate cards for infinite scroll effect -->
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/illustration/1.png"
                                    alt="Istik Nandakumar" class="client-image">
                            </div>
                            <h3 class="client-name">Istik Nandakumar</h3>
                            <p class="client-position">Business and business growth expert</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                                </svg>
                                <span class="following-text">Following: 44.7K+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Social Proof Section -->
        <!-- Social Proof Section -->
        <section class="social-proof-section section-padding">
            <div class="container">
                <h2 class="section-title">
                    In Just 3 Days... You Can Start Getting <span class="highlight">Ready To Buy</span> Leads & High
                    Ticket Sales!!
                </h2>
                <p class="section-subtitle">
                    This is the ultimate black-book of <span class="highlight">TOP 1% coaches</span> (they won't reveal
                    it to you...)
                </p>
                <div class="screenshots-flex-container">
                    <div class="screenshot-item-no-shadow">
                        <img src="assets/img/iphone/iphone.png" alt="Payment Notifications" class="simple-screenshot">
                    </div>
                    <div class="phone-with-annotations">
                        <div class="top-annotation">
                            <p class="handwritten-text handwritten-text-top">
                                And when you start applying these <span
                                    class="highlight-blue-handwritten">principles</span>... your inbox could start
                                looking <span class="highlight-green-handwritten">like this</span>.
                            </p>
                            <div class="arrow-container arrow-top-to-phone">
                                <img style="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);" src="https://img.icons8.com/ios-filled/50/curly-arrow.png" alt="curved arrow"
                                    class="curved-arrow">
                            </div>
                        </div>
                        <div class="phone-container">
                            <div class="screenshot-itemgg screenshot-item-gif">
                                <img src="assets/img/iphone/iphoness.gif" alt="More Payment Notifications in phone"
                                    style="box-shadow: none" class="simple-screenshot">
                            </div>
                        </div>
                        <div class="bottom-annotation">
                            <p class="handwritten-text handwritten-text-bottom">
                                Hundreds of sales @ <span class="highlight-red-handwritten">High Ticket</span> Through
                                this <span class="highlight-blue-handwritten">Reverse Funnel</span> in a span of 2 hours
                                -
                            </p>
                            <div class="arrow-container arrow-bottom-to-phone">
                                <img style="filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);" src="https://img.icons8.com/ios-filled/50/curly-arrow.png" alt="curved arrow"
                                    class="curved-arrow">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="enroll-button-container social-proof-enroll">
                    <button class="enroll-button">
                        ENROLL NOW @ ₹99 <s style="color: rgba(255,255,255,0.7)">₹999</s>
                    </button>
                    <p class="hurry-message">
                        <span class="red-check">✔</span>
                        <span class="red-check">✔</span> Hurry! Limited Seats Available!
                    </p>
                </div>
            </div>
        </section>
        <!-- Reverse Funnel Section -->
        <section class="reverse-funnel-section section-padding">
            <div class="container">
                <h2 class="section-title">The 5-Step <span class="highlight">Success Blueprint</span></h2>
                <p class="section-subtitle reverse-funnel-subtitle">Follow this exact process that helped 10,000+ people
                    transform their lives</p>
                <div class="funnel-diagram">
                    <div class="funnel-step funnel-step-1">
                        <div class="funnel-step-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </div>
                        <div class="funnel-step-number">01</div>
                        <p>Identifying the Challenge</p>
                    </div>
                    <div class="funnel-connector"></div>
                    <div class="funnel-step funnel-step-2">
                        <div class="funnel-step-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                            </svg>
                        </div>
                        <div class="funnel-step-number">02</div>
                        <p>Ideal Branding Formula</p>
                    </div>
                    <div class="funnel-connector"></div>
                    <div class="funnel-step funnel-step-3">
                        <div class="funnel-step-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                            </svg>
                        </div>
                        <div class="funnel-step-number">03</div>
                        <p>Build Audience & Assets</p>
                    </div>
                    <div class="funnel-connector"></div>
                    <div class="funnel-step funnel-step-4">
                        <div class="funnel-step-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
                            </svg>
                        </div>
                        <div class="funnel-step-number">04</div>
                        <p>Creating a Signature Talk</p>
                    </div>
                    <div class="funnel-connector"></div>
                    <div class="funnel-step funnel-step-5">
                        <div class="funnel-step-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.83 0-1.5-.67-1.5-1.5S11.17 14 12 14s1.5.67 1.5 1.5S12.83 17 12 17zm4-4H8V7h8v6z" />
                            </svg>
                        </div>
                        <div class="funnel-step-number">05</div>
                        <p>Scaling Your Offer & Challenge</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="testimonials-section section-padding">
            <div class="container">
                <h2 class="section-title">What My <span class="highlight">Students Say</span></h2>
                <div class="testimonial-slider-container">
                    <div class="testimonial-slider-track">
                        <div class="testimonial-card">
                            <div class="testimonial-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Testimonial by Test Author 1" class="testimonial-image">
                            </div>
                            <div class="testimonial-content">
                                <p class="testimonial-text">hey whats up</p>
                                <p class="testimonial-author">- Test Author 1 <br><span>Test Company 1</span></p>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Testimonial by Test Author 2" class="testimonial-image">
                            </div>
                            <div class="testimonial-content">
                                <p class="testimonial-text">hey whats up2</p>
                                <p class="testimonial-author">- Test Author 2 <br><span>Test Company 2</span></p>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Testimonial by Test Author 3" class="testimonial-image">
                            </div>
                            <div class="testimonial-content">
                                <p class="testimonial-text">hey whats up3</p>
                                <p class="testimonial-author">- Test Author 3 <br><span>Test Company 3</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-slider-controls">
                    <button class="testimonial-slider-arrow" onclick="prevTestimonial()"
                        aria-label="Previous testimonial">‹</button>
                    <button class="testimonial-slider-arrow" onclick="nextTestimonial()"
                        aria-label="Next testimonial">›</button>
                </div>
                <div class="enroll-button-container testimonial-enroll">
                    <button class="enroll-button">
                        ENROLL NOW @ ₹99 <s style="color: rgba(255,255,255,0.7)">₹999</s>
                    </button>
                    <p class="hurry-message">
                        <span class="red-check">✔</span>
                        <span class="red-check">✔</span> Hurry! Limited Seats Available!
                    </p>
                </div>
            </div>
        </section>

        <!-- Tsunami Section -->
        <section class="tsunami-section section-padding">
            <div class="container">
                <div class="tsunami-header">
                    <h2 class="section-title">Join The Success <span class="highlight">Revolution</span></h2>
                </div>
                <div class="tsunami-content-wrapper">
                    <div class="tsunami-left">
                        <div class="group-photo-container">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Group Photo - Shubh Jain with Students" class="group-photo">
                        </div>
                        <div class="tsunami-description">
                            <p>Over <strong>10,000+ students</strong> have transformed their lives using my proven
                                methods and strategies.</p>
                            <p>This isn't just another course - it's a <strong>complete life transformation
                                    system</strong> that works.</p>
                            <p>Join the community of successful individuals who took action and changed their destiny
                                forever.</p>
                        </div>
                    </div>
                    <div class="tsunami-right">
                        <div class="what-if-section">
                            <h3 class="what-if-title">What if you could transform your life in just 90 days?</h3>
                            <div class="what-if-steps">
                                <div class="what-if-step">
                                    <span class="step-number-badge">1</span>
                                    <span class="step-text">Master the mindset of highly successful people</span>
                                </div>
                                <div class="what-if-step">
                                    <span class="step-number-badge">2</span>
                                    <span class="step-text">Build your high-value offer that clients desperately
                                        want</span>
                                </div>
                                <div class="what-if-step">
                                    <span class="step-number-badge">3</span>
                                    <span class="step-text">Create your signature system that scales
                                        automatically</span>
                                </div>
                                <div class="what-if-step">
                                    <span class="step-number-badge">4</span>
                                    <span class="step-text">Generate consistent 6-figure income doing what you
                                        love</span>
                                </div>
                            </div>
                        </div>
                        <div class="comparison-container">
                            <div class="comparison-table">
                                <div class="comparison-column old-way">
                                    <div class="column-header">
                                        <h4>The Old Way</h4>
                                        <p>Struggling alone without guidance</p>
                                    </div>
                                    <div class="comparison-items">
                                        <div class="comparison-item">
                                            <span class="item-icon cross">✖</span>
                                            <div class="item-content">
                                                <span class="item-label">Manual</span>
                                                <span class="item-text">Trial and error approach wasting precious
                                                    time</span>
                                            </div>
                                        </div>
                                        <div class="comparison-item">
                                            <span class="item-icon cross">✖</span>
                                            <div class="item-content">
                                                <span class="item-label">Manual</span>
                                                <span class="item-text">No clear direction or proven roadmap to
                                                    follow</span>
                                            </div>
                                        </div>
                                        <div class="comparison-item">
                                            <span class="item-icon cross">✖</span>
                                            <div class="item-content">
                                                <span class="item-label">Manual</span>
                                                <span class="item-text">Inconsistent results that frustrate and
                                                    demotivate</span>
                                            </div>
                                        </div>
                                        <div class="comparison-item">
                                            <span class="item-icon cross">✖</span>
                                            <div class="item-content">
                                                <span class="item-label">Manual</span>
                                                <span class="item-text">Wasted money on courses that don't deliver
                                                    results</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="comparison-column new-way">
                                    <div class="column-header">
                                        <h4>The New Way</h4>
                                        <p>With my proven system and guidance</p>
                                    </div>
                                    <div class="comparison-items">
                                        <div class="comparison-item">
                                            <span class="item-icon check">✔</span>
                                            <div class="item-content">
                                                <span class="item-label">Automated</span>
                                                <span class="item-text">Proven step-by-step system that guarantees
                                                    results</span>
                                            </div>
                                        </div>
                                        <div class="comparison-item">
                                            <span class="item-icon check">✔</span>
                                            <div class="item-content">
                                                <span class="item-label">Automated</span>
                                                <span class="item-text">Clear roadmap to success with exact action
                                                    steps</span>
                                            </div>
                                        </div>
                                        <div class="comparison-item">
                                            <span class="item-icon check">✔</span>
                                            <div class="item-content">
                                                <span class="item-label">Automated</span>
                                                <span class="item-text">Consistent, predictable results within 90
                                                    days</span>
                                            </div>
                                        </div>
                                        <div class="comparison-item">
                                            <span class="item-icon check">✔</span>
                                            <div class="item-content">
                                                <span class="item-label">Automated</span>
                                                <span class="item-text">Investment that pays for itself within first
                                                    month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="enroll-button-container tsunami-enroll">
                    <button class="enroll-button">
                        ENROLL NOW @ ₹99 <s style="color: rgba(255,255,255,0.7)">₹999</s>
                    </button>
                    <p class="hurry-message">
                        <span class="red-check">✔</span>
                        <span class="red-check">✔</span> Hurry! Limited Seats Available!
                    </p>
                </div>
            </div>
        </section>

        <!-- Results Agenda Section -->
        <section class="results-agenda-section section-padding">
            <div class="container">
                <div class="results-agenda-header">
                    <h2 class="section-title">Your 3-Day <span class="highlight">Transformation Journey</span></h2>
                </div>
                <div class="agenda-sprint-grid">
                    <div class="agenda-sprint-card">
                        <div class="card-header">
                            <div class="agenda-icon-wrapper">
                                <img src="https://via.placeholder.com/40x40/ffffff/000000?text=Build" alt="Build Icon"
                                    class="agenda-icon">
                            </div>
                            <span class="day-label">Day 01</span>
                        </div>
                        <div class="card-content">
                            <h3 class="agenda-card-title">Build</h3>
                            <ul class="agenda-sprint-list">
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    EXACT 4-Step High-Ticket Offer Creation Formula that only TOP 1% coaches know.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    An ancient offer creation 'law' that 99.8% people MISS out, which stops them to make
                                    more sales.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    An old-school offer strategy that crushes Cold Audience and makes it almost
                                    neurologically impossible for people to not consider buying your offer.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    Once you know this - creating million dollar offers & campaigns will be cake-walk!
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    And so much more...
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="agenda-sprint-card">
                        <div class="card-header">
                            <div class="agenda-icon-wrapper">
                                <img src="https://via.placeholder.com/40x40/ffffff/000000?text=Sell" alt="Sell Icon"
                                    class="agenda-icon">
                            </div>
                            <span class="day-label">Day 02</span>
                        </div>
                        <div class="card-content">
                            <h3 class="agenda-card-title">Sell</h3>
                            <ul class="agenda-sprint-list">
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    Your 'Reverse-math' to your NEXT 10 lakh payday.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    7-Figure Launch Checklist used behind every BIG launch.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    How to get your dream high-ticket clients lining up to work with you before you even
                                    pitch them.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    Battle-tested 5 Hour Engine that makes you the most money and sales in a shorter
                                    duration.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    The TOP SECRET *** technique to CRUSH your launch the very first time.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="agenda-sprint-card">
                        <div class="card-header">
                            <div class="agenda-icon-wrapper">
                                <img src="https://via.placeholder.com/40x40/ffffff/000000?text=Scale" alt="Scale Icon"
                                    class="agenda-icon">
                            </div>
                            <span class="day-label">Day 03</span>
                        </div>
                        <div class="card-content">
                            <h3 class="agenda-card-title">Scale</h3>
                            <ul class="agenda-sprint-list">
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    My 40 crores 'Signature-Talk' Framework.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    This #1 thing that absolutely EXTREME FEW PEOPLE do, but pulls in 60% more sales.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    How do I create presentations that are guaranteed to CRUSH.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    How to persuade the whole crowd without selling or talking about your product.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    The #1 strategy you can use to make any offer SELL AT ANY PRICE.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="enroll-button-container results-agenda-enroll">
                    <button class="enroll-button">
                        ENROLL NOW @ ₹99 <s style="color: rgba(255,255,255,0.7)">₹999</s>
                    </button>
                    <p class="hurry-message">
                        <span class="red-check">✔</span>
                        <span class="red-check">✔</span> Hurry! Limited Seats Available!
                    </p>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section class="pricing-section section-padding">
            <div class="container">
                <h2 class="section-title">Choose Your <span class="highlight">Success Package</span></h2>
                <div class="pricing-table-wrapper">
                    <div class="pricing-table">
                        <div class="pricing-row">
                            <div class="pricing-row-content">
                                <span class="seats">Regular Price</span>
                                <span class="price">₹2,999</span>
                                <span class="bonus">Basic Package Only</span>
                            </div>
                        </div>
                        <div class="pricing-row recommended">
                            <div class="pricing-row-content">
                                <span class="seats"><span class="last-few-badge">ONLY 100 SEATS</span> Early Bird
                                    Special</span>
                                <span class="price">₹99</span>
                                <span class="bonus">+ ₹25,000 Worth of Exclusive Bonuses</span>
                            </div>
                            <div class="current-offer-tag">Current Offer</div>
                        </div>
                        <div class="pricing-row">
                            <div class="pricing-row-content">
                                <span class="seats">Last Minute</span>
                                <span class="price">₹999</span>
                                <span class="bonus">Standard Package</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="current-price-display">
                    Today Only Special Price: <span class="original-price">₹2,999</span> <span
                        class="original-price">₹999</span> <span class="discounted-price">₹99</span>
                </div>
                <div class="enroll-button-container pricing-enroll">
                    <button class="enroll-button">
                        ENROLL NOW @ ₹99 <s style="color: rgba(255,255,255,0.7)">₹999</s>
                    </button>
                    <p class="hurry-message">
                        <span class="red-check">✔</span>
                        <span class="red-check">✔</span> Hurry! Limited Seats Available!
                    </p>
                </div>
            </div>
        </section>

        <!-- Who Is Shubh Section -->
        <div class="who-is-shubh-section-wrapper">
            <section class="who-is-shubh-section">
                <div class="who-is-shubh-content">
                    <div class="shubh-photo-container">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Shubh Jain" class="shubh-photo">
                    </div>
                    <div class="shubh-details">
                        <h2 class="section-title-light">Meet Your <span class="highlight">Success Mentor</span></h2>
                        <ul class="shubh-details-list">
                            <li class="shubh-details-list-item">
                                <span class="shubh-details-icon">✓</span>
                                Built a ₹40+ crore coaching business from scratch
                            </li>
                            <li class="shubh-details-list-item">
                                <span class="shubh-details-icon">✓</span>
                                Mentored 10,000+ students to achieve their dreams
                            </li>
                            <li class="shubh-details-list-item">
                                <span class="shubh-details-icon">✓</span>
                                Featured in top business magazines and TV shows
                            </li>
                            <li class="shubh-details-list-item">
                                <span class="shubh-details-icon">✓</span>
                                Certified master coach with 15+ years experience
                            </li>
                            <li class="shubh-details-list-item">
                                <span class="shubh-details-icon">✓</span>
                                Author of 3 bestselling books on success and mindset
                            </li>
                            <li class="shubh-details-list-item">
                                <span class="shubh-details-icon">✓</span>
                                Speaker at 100+ international conferences and events
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        <!-- FAQ Section -->
        <section class="faq-section section-padding">
            <div class="container">
                <h2 class="section-title">Frequently Asked <span class="highlight">Questions</span></h2>
                <div class="faq-container">
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(0)">
                            <span>Can I see your coaching success stories?</span>
                            <span class="faq-arrow" id="arrow-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </div>
                        <div class="faq-answer" id="answer-0" style="display: none;">
                            <p>Yes! I have helped numerous clients achieve their fitness goals. You can view
                                testimonials and before/after photos in my portfolio section.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(1)">
                            <span>What are your nutrition coaching rates?</span>
                            <span class="faq-arrow" id="arrow-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </div>
                        <div class="faq-answer" id="answer-1" style="display: none;">
                            <p>My coaching programs start at $99/month for basic nutrition plans. Customized programs
                                with weekly check-ins start at $199/month. I offer discounts for 3-month commitments.
                            </p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(2)">
                            <span>How do you communicate with clients?</span>
                            <span class="faq-arrow" id="arrow-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </div>
                        <div class="faq-answer" id="answer-2" style="display: none;">
                            <p>I use a combination of WhatsApp for quick check-ins, weekly Zoom calls for deep dives,
                                and a custom app for meal tracking and progress monitoring.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(3)">
                            <span>Do you offer customized workout plans?</span>
                            <span class="faq-arrow" id="arrow-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </div>
                        <div class="faq-answer" id="answer-3" style="display: none;">
                            <p>Absolutely! After assessing your fitness level and goals, I create personalized workout
                                routines that fit your schedule and available equipment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-copyright">
                    <p>© 2024 Success Academy. All rights reserved.</p>
                </div>
                <div class="footer-disclaimer">
                    <p>Results shown are not typical and may vary. Success requires dedication, hard work, and
                        consistent action. This is an educational program and individual results depend on individual
                        effort and circumstances.</p>
                </div>
            </div>
        </footer>

        <!-- Floating CTA Bar -->
        <div class="floating-cta-bar">
            <div class="floating-cta-bar__container">
                <div class="floating-cta-bar__content">
                    <div class="floating-cta-bar__info-section">
                        <div class="floating-cta-bar__price-details">
                            <span class="floating-cta-bar__price-current">₹99</span>
                            <span class="floating-cta-bar__price-original">₹999</span>
                        </div>
                        <div class="floating-cta-bar__deadline">Offer ends June 30, 2025</div>
                    </div>
                    <div class="floating-cta-bar__action-section">
                        <button class="floating-cta-bar__button">ENROLL NOW</button>
                        <div class="floating-cta-bar__bonus-text">+ Unbelievable Bonuses</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `,
            js: `
          
    // Video functionality
    let videoPlaying = false;

    function handlePlayButtonClick() {
        const videoWrapper = document.querySelector('.video-placeholder-wrapper');
        const playButton = document.querySelector('.play-button-overlay');
        const overlayText = document.querySelector('.video-placeholder-overlay-text');

        if (playButton) {
            playButton.style.display = 'none';
        }
        if (overlayText) {
            overlayText.style.display = 'none';
        }

        // Create and insert video element
        const video = document.createElement('video');
        video.className = 'active-video-player';
        video.controls = true;
        video.autoplay = true;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';

        // You can replace this with actual video URL
        video.src = 'https://www.w3schools.com/html/mov_bbb.mp4';

        const placeholder = document.querySelector('.video-placeholder');
        if (placeholder) {
            placeholder.innerHTML = '';
            placeholder.appendChild(video);
        }

        videoPlaying = true;
    }

    // FAQ functionality
    const openFAQs = {};

    function toggleFAQ(index) {
        const answer = document.getElementById('answer-' + index); // Modified for string concatenation
        const arrow = document.getElementById('arrow-' + index);     // Modified for string concatenation

        if (openFAQs[index]) {
            answer.style.display = 'none';
            arrow.classList.remove('open');
            openFAQs[index] = false;
        } else {
            answer.style.display = 'block';
            arrow.classList.add('open');
            openFAQs[index] = true;
        }
    }

    // Testimonial slider functionality
    let currentTestimonialSlide = 0;
    const totalTestimonials = 3;

    function nextTestimonial() {
        currentTestimonialSlide = (currentTestimonialSlide === totalTestimonials - 1) ? 0 : currentTestimonialSlide + 1;
        updateTestimonialSlider();
    }

    function prevTestimonial() {
        currentTestimonialSlide = (currentTestimonialSlide === 0) ? totalTestimonial - 1 : currentTestimonialSlide - 1;
        updateTestimonialSlider();
    }

    function updateTestimonialSlider() {
        const track = document.querySelector('.testimonial-slider-track');
        if (track) {
            const cardWidth = 350; // approximate card width
            const gap = 30;
            const translateX = -currentTestimonialSlide * (cardWidth + gap);
            track.style.transform = 'translateX(' + translateX + 'px)'; // Modified to use '+' instead of backticks
        }
    }

    // Floating CTA Bar deadline update
    function updateDeadline() {
        const deadlineElement = document.querySelector('.floating-cta-bar__deadline');
        if (deadlineElement) {
            const deadlineDate = new Date("2025-06-30");
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = deadlineDate.toLocaleDateString('en-US', options);
            deadlineElement.textContent = 'Offer ends ' + formattedDate; // Modified for string concatenation
        }
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function () {
        updateDeadline();

        // Add scroll animations
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        animatedElements.forEach(el => observer.observe(el));
    });

    // Add click handlers for all enroll buttons
    document.addEventListener('DOMContentLoaded', function () {
        const enrollButtons = document.querySelectorAll('.enroll-button, .floating-cta-bar__button');
        enrollButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Add your enrollment logic here
                alert('Enrollment functionality would be implemented here!');
            });
        });
    });

    // Smooth scrolling for internal links
    document.addEventListener('DOMContentLoaded', function () {
        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';
    });
            `
        },
     'second_template': {
            name: '2 Funnel landing page',
            description: 'A friendly welcome page with a clean design and clear CTA',
            thumbnail: 'https://placehold.co/400x300/10b981/ffffff?text=Sales+VSL&font=montserrat&style=illustration',
                     css: `
              /* Font Imports */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@300;400;500;600;700&family=Shadows+Into+Light&display=swap');

        /* CSS Variables */
        :root {
            --primary-color: #4A69BB;
            --primary-dark-color: #3B528A;
            --secondary-color: #4A69BB;
            --accent-color: #F39C12;
            --cta-color: #3B528A;
            --cta-hover-color: #4A69BB;
            --text-dark: #2C3E50;
            --text-medium: #34495E;
            --text-light: #7F8C8D;
            --text-white: #FFFFFF;
            --bg-white: #FFFFFF;
            --bg-light-gray: #F8F9FA;
            --bg-dark-blue: #283747;
            --border-color: #DEE2E6;
            --highlight-bg: rgba(243, 156, 18, 0.2);
            --highlight-red-bg: rgba(231, 76, 60, 0.1);
            --highlight-red-text: #C0392B;
            --highlight-blue-bg: rgba(74, 105, 187, 0.1);
            --highlight-blue-text: #3B528A;
            --font-family-headings: 'Playfair Display', serif;
            --font-family-body: 'Poppins', sans-serif;
            --font-family-handwritten: 'Shadows Into Light', cursive;
            --font-weight-light: 300;
            --font-weight-normal: 400;
            --font-weight-medium: 500;
            --font-weight-semibold: 600;
            --font-weight-bold: 700;
            --border-radius-sm: 6px;
            --border-radius-md: 10px;
            --border-radius-lg: 18px;
            --border-radius-xl: 28px;
            --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
            --shadow-md: 0 5px 15px rgba(0, 0, 0, 0.08);
            --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        /* Global Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-family-body);
            background-color: var(--bg-white);
            color: var(--text-medium);
            line-height: 1.7;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .page-wrapper {
            overflow-x: hidden;
            overflow-y: visible;
            min-height: 100vh;
            background-color: var(--bg-white);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        .section-padding {
            padding: 80px 0;
        }

        /* Top Bar */
        .top-bar {
            text-align: center;
            padding: 15px 20px;
            font-size: 1rem;
            font-weight: var(--font-weight-medium);
            background: linear-gradient(90deg, var(--primary-dark-color), var(--primary-color));
            color: var(--text-white);
            box-shadow: var(--shadow-sm);
            position: relative;
            z-index: 999;
        }

        .top-bar-text {
            letter-spacing: 0.5px;
        }

        /* Hero Section */
        .hero-section {
            position: relative;
            background: linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #FFFFFF 100%);
            text-align: center;
            padding-top: 100px;
            padding-bottom: 120px;
            color: var(--text-dark);
            z-index: 1;
            overflow: hidden;
        }

        .hero-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
            background-size: 30px 30px;
            pointer-events: none;
            z-index: 0;
        }

        .hero-section::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 80px;
            background-size: cover;
            background-repeat: no-repeat;
            z-index: 10;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,60 C200,150 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z' style='fill:%23F8F9FA;'%3E%3C/path%3E%3C/svg%3E");
        }

        .hero-content {
            position: relative;
            z-index: 3;
        }

        .hero-title {
            font-family: var(--font-family-headings);
            font-size: 3.2rem;
            font-weight: var(--font-weight-bold);
            line-height: 1.3;
            margin-bottom: 25px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            letter-spacing: 0.5px;
        }

        .sub-headline {
            font-size: 1.3rem;
            font-style: italic;
            font-weight: var(--font-weight-light);
            margin-bottom: 35px;
        }

        .hero-pills {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 45px;
            flex-wrap: wrap;
        }

        .hero-pill {
            padding: 12px 25px;
            border-radius: var(--border-radius-xl);
            font-size: 0.95rem;
            font-weight: var(--font-weight-medium);
            box-shadow: var(--shadow-sm);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            background-color: rgba(0, 0, 0, 0.05);
            color: var(--text-dark);
            border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .hero-pill:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-md);
        }

        .highlight {
            background-color: var(--highlight-bg);
            padding: 0.15em 0.5em;
            border-radius: var(--border-radius-sm);
            font-weight: var(--font-weight-semibold);
            color: var(--accent-color);
            box-shadow: 0 0 15px var(--highlight-bg);
        }

        .ai-agents {
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Video and Agenda Container */
        .video-agenda-container {
            display: flex;
            flex-direction: column;
            gap: 40px;
            align-items: center;
            margin-top: 50px;
        }

        .video-section {
            flex: 1 1 550px;
            max-width: 600px;
            width: 100%;
        }

        .video-placeholder-wrapper {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            border-radius: var(--border-radius-lg);
            box-shadow: var(--shadow-xl);
            margin-bottom: 35px;
            background-color: #000;
        }

        .video-placeholder {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80') center/cover no-repeat;
        }

        .active-video-player {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .play-button-overlay {
            position: absolute;
            width: 90px;
            height: 90px;
            background-color: rgba(255, 255, 255, 0.25);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all 0.5s ease;
            backdrop-filter: blur(8px);
            overflow: hidden;
            animation: pulse 2s infinite;
        }

        .play-button-overlay:hover {
            background-color: rgba(255, 255, 255, 0.45);
            transform: scale(1.1);
            box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.35);
            animation: none;
        }

        .play-icon {
            width: 45px;
            height: 45px;
            fill: var(--text-white);
        }

        .video-placeholder-overlay-text {
            position: absolute;
            bottom: 20px;
            left: 20px;
            text-align: left;
            color: var(--text-white);
        }

        .video-placeholder-overlay-text h3 {
            font-family: var(--font-family-headings);
            margin: 0;
            font-size: 1.6rem;
            font-weight: var(--font-weight-bold);
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
            color: var(--text-white);
        }

        .video-placeholder-overlay-text p {
            margin: 5px 0 0;
            font-size: 0.9rem;
            opacity: 0.9;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
        }

        @keyframes pulse {

            0%,
            100% {
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
            }

            50% {
                box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
            }
        }

        /* Event Details Grid */
        .event-details-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
        }

        .event-detail-box {
            background-color: var(--bg-white);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-md);
            padding: 15px;
            text-align: center;
            box-shadow: var(--shadow-sm);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .event-detail-box:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: var(--shadow-md);
        }

        .event-detail-icon {
            font-size: 1.5rem;
            margin-bottom: 8px;
            color: var(--primary-color);
        }

        .event-detail-label {
            font-size: 0.75rem;
            color: var(--text-light);
            font-weight: var(--font-weight-medium);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }

        .event-detail-value {
            font-size: 0.9rem;
            font-weight: var(--font-weight-semibold);
            color: var(--text-dark);
        }

        /* Implementation Agenda */
        .implementation-agenda-wrapper {
            flex: 1 1 500px;
            max-width: 550px;
            width: 100%;
        }

        .implementation-agenda {
            background-color: var(--bg-white);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-lg);
            padding: 35px;
            box-shadow: var(--shadow-xl);
        }

        .implementation-agenda h3 {
            font-family: var(--font-family-headings);
            margin-top: 0;
            margin-bottom: 30px;
            color: var(--text-dark);
            font-size: 1.8rem;
            font-weight: var(--font-weight-semibold);
            text-align: center;
            text-decoration: underline;
            text-underline-offset: 10px;
            text-decoration-color: var(--primary-color);
        }

        .agenda-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .agenda-list-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            font-size: 1rem;
            line-height: 1.6;
            color: var(--text-medium);
        }

        .agenda-list-item:last-child {
            margin-bottom: 0;
        }

        .agenda-list-icon {
            color: var(--secondary-color);
            margin-right: 12px;
            margin-top: 3px;
            flex-shrink: 0;
        }

        /* Enroll Button */
        .enroll-button-container {
            text-align: center;
            padding: 25px 0;
        }

        .enroll-button {
            background: linear-gradient(90deg, var(--cta-color), var(--cta-hover-color));
            color: var(--text-white);
            border: none;
            padding: 20px 40px;
            font-size: 1.3rem;
            font-weight: var(--font-weight-bold);
            border-radius: var(--border-radius-xl);
            cursor: pointer;
            box-shadow: 0 8px 20px rgba(239, 68, 68, 0.35);
            position: relative;
            min-width: 320px;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .enroll-button:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 12px 25px rgba(239, 68, 68, 0.45);
            background: linear-gradient(90deg, var(--cta-hover-color), var(--cta-color));
        }

        .enroll-button s {
            font-weight: var(--font-weight-normal);
            opacity: 0.8;
            margin-left: 10px;
        }

        .hurry-message {
            margin-top: 20px;
            font-size: 0.95rem;
            color: var(--text-medium);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: var(--font-weight-medium);
        }

        .red-check {
            color: var(--text-white);
            background-color: var(--secondary-color);
            padding: 3px 6px;
            border-radius: var(--border-radius-sm);
            margin-right: 8px;
            font-size: 0.85em;
            font-weight: var(--font-weight-bold);
        }

        /* Section Titles */
        .section-title {
            font-family: var(--font-family-headings);
            font-size: 2.8rem;
            font-weight: var(--font-weight-bold);
            text-align: center;
            margin-bottom: 50px;
            line-height: 1.3;
            letter-spacing: 0.2px;
            color: var(--text-dark);
        }

        .section-title-light {
            color: var(--text-white);
        }

        .section-subtitle {
            font-size: 1.15rem;
            color: var(--text-light);
            text-align: center;
            max-width: 750px;
            margin: -30px auto 50px auto;
            font-weight: var(--font-weight-light);
        }

        /* Client Showcase */
        .client-showcase-section {
            background-color: var(--bg-light-gray);
        }

        .client-carousel-container {
            width: 100%;
            overflow: hidden;
            position: relative;
            padding: 20px 0;
            mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        .client-carousel {
            display: flex;
            gap: 30px;
            animation: scrollClients 60s linear infinite;
            width: fit-content;
        }

        .client-carousel:hover {
            animation-play-state: paused;
        }

        @keyframes scrollClients {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-50%);
            }
        }

        .client-card {
            background: var(--bg-white);
            border-radius: var(--border-radius-lg);
            padding: 35px;
            box-shadow: var(--shadow-lg);
            min-width: 330px;
            max-width: 330px;
            text-align: center;
            border: 1px solid var(--border-color);
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            flex-shrink: 0;
        }

        .client-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: var(--shadow-xl);
        }

        .client-image-container {
            width: 130px;
            height: 130px;
            margin: 0 auto 25px;
            border-radius: 50%;
            overflow: hidden;
            border: 5px solid var(--primary-color);
            box-shadow: var(--shadow-md);
        }

        .client-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .client-name {
            font-size: 1.3rem;
            font-weight: var(--font-weight-semibold);
            color: var(--text-dark);
            margin: 0 0 8px 0;
        }

        .client-position {
            font-size: 0.95rem;
            color: var(--text-light);
            margin: 0 0 15px 0;
            min-height: 40px;
        }

        .client-following {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background-color: var(--bg-light-gray);
            padding: 8px 15px;
            border-radius: var(--border-radius-xl);
            border: 1px solid var(--border-color);
        }

        .instagram-icon {
            color: #E1306C;
            width: 20px;
            height: 20px;
        }

        .following-text {
            font-size: 0.9rem;
            font-weight: var(--font-weight-medium);
            color: var(--text-medium);
        }

        /* Social Proof */
        .social-proof-section {
            background-color: var(--bg-white);
        }

        .screenshots-flex-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
            margin-bottom: 40px;
        }

        .phone-with-annotations {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 80px;
            width: 500px;
            margin-left: 100px;
        }


        .bottom-annotation {
            position: absolute;
            max-width: 320px;
            left: -200px;
            top: 70%;
            transform: translateY(-50%);
        }

        .phone-container {
            position: relative;
            z-index: 2;
        }

        /* Updated arrow styles */
        .arrow-container {
            position: relative;
            display: inline-block;
            z-index: 3;
        }

        .arrow-top-to-phone {
            margin-top: 15px;
            margin-left: 50px;
        }

        .arrow-bottom-to-phone {
            margin-top: 10px;
            margin-left: -20px;
        }

        .curved-arrow {
            width: 60px;
            height: 60px;
            opacity: 0.8;
            filter: hue-rotate(20deg) saturate(1.2);
            transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .curved-arrow:hover {
            transform: scale(1.1);
            opacity: 1;
        }

        /* Arrow positioning for different screen sizes */
        @media (max-width: 991.98px) {
            .arrow-top-to-phone {
                margin-left: 20px;
                margin-top: 20px;
            }

            .arrow-bottom-to-phone {
                margin-left: 10px;
                margin-top: 15px;
            }

            .curved-arrow {
                width: 50px;
                height: 50px;
            }
        }

        @media (max-width: 768px) {

            .arrow-top-to-phone,
            .arrow-bottom-to-phone {
                margin-left: 0;
                text-align: center;
            }

            .curved-arrow {
                width: 40px;
                height: 40px;
            }
        }

        .handwritten-text {
            font-family: var(--font-family-handwritten);
            font-size: 1.5rem;
            line-height: 1.5;
            color: var(--text-medium);
            margin: 0;
            text-align: center;
            transform: rotate(-1.5deg);
        }

        .handwritten-text-top {
            transform: rotate(3.5deg);
            color: var(--primary-dark-color);
        }

        .handwritten-text-bottom {
            transform: rotate(-2.5deg);
            color: var(--secondary-color);
        }

        .highlight-red-handwritten {
            color: #dc2626;
            font-weight: bold;
        }

        .highlight-blue-handwritten {
            color: #2563eb;
            font-weight: bold;
        }

        .highlight-green-handwritten {
            color: #059669;
            font-weight: bold;
        }

        .arrow-container {
            position: absolute;
            width: 80px;
            height: 80px;
            z-index: 1;
        }

        .arrow-top-to-phone {
            bottom: -80px;
            left: 100px;
            transform: rotate(250deg) scale(0.8);
        }

        .arrow-bottom-to-phone {
            top: -30%;
            right: -10px;
            transform: translateY(-50%) rotate(90deg) scale(0.8);
        }

        .handwritten-arrow {
            width: 100%;
            height: 100%;
            opacity: 1;
            filter: hue-rotate(180deg);
            transition: filter 0.3s ease;
        }

        .screenshot-item {
            flex: 0 0 auto;
            padding: 10px;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-xl);
            box-shadow: var(--shadow-lg);
            display: inline-block;
        }

        /* Updated Social Proof Styles */
        .screenshot-item-no-shadow {
            flex: 0 0 auto;
            padding: 10px;
            border-radius: var(--border-radius-xl);
            display: inline-block;
            scale: 1;
            position: relative;
            top: 150px;
            /* Removed box-shadow and border to blend with background */
        }

        .top-annotation {
            position: relative;
            margin-bottom: -30px;
            max-width: 320px;
            align-self: flex-end;
            margin-right: -40px;
            /* Moved slightly right from -60px */
        }

        .screenshot-itemgg {
            flex: 0 0 auto;
            padding: 10px;
            border-radius: var(--border-radius-xl);
            display: inline-block;
            position: relative;
            z-index: 2;
            scale: 0.8;
            margin-top: -20px;
            /* Moved the gif slightly up */
        }

        .phone-with-annotations {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 60px;
            /* Reduced gap to bring elements closer */
            width: 500px;
            margin-left: 100px;
        }

        /* Updated responsive styles for mobile */
        @media (max-width: 991.98px) {
            .phone-with-annotations {
                gap: 30px;
                width: auto;
                margin-left: 0;
            }

            .top-annotation,
            .bottom-annotation {
                position: relative;
                align-self: center;
                margin: 20px 0 0 0;
                left: auto;
                top: auto;
                transform: none;
                max-width: 90%;
            }

            .screenshot-itemgg {
                margin-top: 0;
                /* Reset margin on mobile */
            }
        }


        .screenshot-item-gif {
            transform: scale(1.05);
        }

        .simple-screenshot {
            max-width: 280px;
            height: auto;
            border-radius: var(--border-radius-md);
            display: block;
        }

        /* Reverse Funnel */
        .reverse-funnel-section {
            background-color: var(--bg-light-gray);
            padding-top: 100px;
            padding-bottom: 100px;
        }

        .reverse-funnel-subtitle {
            font-size: 2rem !important;
            font-weight: var(--font-weight-bold) !important;
            color: var(--primary-color) !important;
            margin-top: -20px;
            margin-bottom: 60px !important;
            font-family: var(--font-family-headings);
        }

        .funnel-diagram {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .funnel-step {
            background: linear-gradient(145deg, var(--bg-white), #e9ecef);
            border-radius: var(--border-radius-lg);
            padding: 25px;
            text-align: center;
            color: var(--text-dark);
            font-size: 0.95rem;
            box-shadow: var(--shadow-lg);
            width: 100%;
            max-width: 230px;
            border: 1px solid var(--border-color);
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 220px;
            justify-content: flex-start;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .funnel-step:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: var(--shadow-xl);
            border-color: var(--accent-color);
        }

        .funnel-step-icon-wrapper {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin: 0 auto 20px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--primary-color);
            color: var(--text-white);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease;
        }

        .funnel-step:hover .funnel-step-icon-wrapper {
            background-color: var(--accent-color);
        }

        .funnel-step-icon-wrapper svg {
            width: 32px;
            height: 32px;
            fill: currentColor;
        }

        .funnel-step-1 .funnel-step-icon-wrapper {
            background-color: #4A69BB;
        }

        .funnel-step-2 .funnel-step-icon-wrapper {
            background-color: #5DADE2;
        }

        .funnel-step-3 .funnel-step-icon-wrapper {
            background-color: #48C9B0;
        }

        .funnel-step-4 .funnel-step-icon-wrapper {
            background-color: #F4D03F;
        }

        .funnel-step-5 .funnel-step-icon-wrapper {
            background-color: #E74C3C;
        }

        .funnel-step-number {
            font-size: 0.8rem;
            color: var(--text-light);
            font-weight: var(--font-weight-bold);
            margin-bottom: 10px;
            background-color: rgba(0, 0, 0, 0.05);
            display: inline-block;
            padding: 4px 10px;
            border-radius: var(--border-radius-sm);
        }

        .funnel-step p {
            font-weight: var(--font-weight-medium);
            line-height: 1.5;
            margin: 0;
            font-size: 0.9rem;
            color: var(--text-medium);
        }

        /* Testimonials */
        .testimonials-section {
            background-color: var(--bg-white);
        }

        .testimonial-slider-container {
            position: relative;
            max-width: 1000px;
            margin: 0 auto;
            overflow: hidden;
        }

        .testimonial-slider-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
            gap: 30px;
            padding: 10px;
        }

        .testimonial-card {
            background-color: var(--bg-light-gray);
            border-radius: var(--border-radius-lg);
            box-shadow: var(--shadow-lg);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            border: 1px solid var(--border-color);
            min-width: 320px;
            max-width: 350px;
            flex-shrink: 0;
        }

        .testimonial-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: var(--shadow-xl);
        }

        .testimonial-image-wrapper {
            width: 100%;
            height: 200px;
            overflow: hidden;
            background-color: #ccc;
        }

        .testimonial-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .testimonial-content {
            padding: 25px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .testimonial-text {
            font-size: 1rem;
            color: var(--text-medium);
            font-style: italic;
            margin-bottom: 20px;
            line-height: 1.6;
            position: relative;
            padding-left: 30px;
        }

        .testimonial-text::before {
            content: '"';
            font-family: 'Georgia', serif;
            font-size: 3rem;
            color: var(--primary-color);
            opacity: 0.5;
            position: absolute;
            left: 0px;
            top: -10px;
        }

        .testimonial-author {
            font-size: 0.9rem;
            font-weight: var(--font-weight-semibold);
            color: var(--primary-color);
            text-align: right;
            margin-top: auto;
        }

        .testimonial-author span {
            display: block;
            font-size: 0.8rem;
            font-weight: var(--font-weight-normal);
            color: var(--text-light);
        }

        .testimonial-slider-controls {
            text-align: center;
            margin-top: 30px;
        }

        .testimonial-slider-arrow {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.2rem;
            margin: 0 10px;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: var(--shadow-sm);
        }

        .testimonial-slider-arrow:hover {
            background-color: var(--primary-dark-color);
            transform: scale(1.1);
        }

        .testimonial-slider-arrow:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }

        /* Tsunami Section */
        .tsunami-section {
            background-color: var(--bg-light-gray);
        }

        .tsunami-header .section-title {
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
        }

        .tsunami-content-wrapper {
            display: grid;
            grid-template-columns: 1fr;
            gap: 50px;
            align-items: flex-start;
        }

        .tsunami-left {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .group-photo-container {
            width: 100%;
            border-radius: var(--border-radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-xl);
        }

        .group-photo {
            width: 100%;
            height: auto;
            display: block;
        }

        .tsunami-description p {
            font-size: 1.05rem;
            line-height: 1.8;
            color: var(--text-medium);
            margin-bottom: 18px;
        }

        .tsunami-description strong {
            color: var(--text-dark);
            font-weight: var(--font-weight-semibold);
        }

        .tsunami-right {
            display: flex;
            flex-direction: column;
            gap: 40px;
        }

        .what-if-section {
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark-color));
            padding: 35px;
            border-radius: var(--border-radius-lg);
            color: var(--text-white);
            box-shadow: var(--shadow-lg);
        }

        .what-if-title {
            font-family: var(--font-family-headings);
            font-size: 1.8rem;
            margin: 0 0 25px 0;
            color: var(--text-white);
            font-weight: var(--font-weight-bold);
        }

        .what-if-steps {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .what-if-step {
            display: flex;
            align-items: flex-start;
            gap: 15px;
        }

        .step-number-badge {
            background: rgba(255, 255, 255, 0.2);
            color: var(--text-white);
            min-width: 32px;
            height: 32px;
            border-radius: 50%;
            font-weight: var(--font-weight-bold);
            font-size: 1rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .step-text {
            flex: 1;
            line-height: 1.6;
            font-size: 1.05rem;
            font-weight: var(--font-weight-medium);
        }

        .comparison-container {
            background: var(--bg-white);
            border-radius: var(--border-radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-xl);
        }

        .comparison-table {
            display: grid;
            grid-template-columns: 1fr;
        }

        .comparison-column {
            display: flex;
            flex-direction: column;
        }

        .column-header {
            padding: 25px 20px;
            text-align: center;
            font-weight: var(--font-weight-bold);
        }

        .column-header h4 {
            font-family: var(--font-family-headings);
            margin: 0 0 5px 0;
            font-size: 1.6rem;
        }

        .column-header p {
            margin: 0;
            font-size: 0.9rem;
            font-weight: var(--font-weight-medium);
            opacity: 0.9;
        }

        .old-way {
            background-color: #FFF1F2;
        }

        .old-way .column-header {
            background-color: #FECACA;
            color: #991B1B;
        }

        .new-way {
            background-color: #F0FDF4;
        }

        .new-way .column-header {
            background-color: #BBF7D0;
            color: #14532D;
        }

        .comparison-items {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            padding: 20px;
        }

        .comparison-item {
            display: flex;
            align-items: flex-start;
            padding: 12px 0;
            gap: 12px;
            border-bottom: 1px solid var(--border-color);
            min-height: 70px;
        }

        .comparison-item:last-child {
            border-bottom: none;
        }

        .item-icon {
            font-weight: var(--font-weight-bold);
            font-size: 1.3rem;
            margin-top: 2px;
            flex-shrink: 0;
            width: 24px;
            text-align: center;
        }

        .item-icon.cross {
            color: #DC2626;
        }

        .item-icon.check {
            color: #16A34A;
        }

        .item-content {
            flex: 1;
        }

        .item-label {
            font-size: 0.7rem;
            font-weight: var(--font-weight-bold);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 3px;
            display: block;
            opacity: 0.8;
        }

        .old-way .item-label {
            color: #B91C1C;
        }

        .new-way .item-label {
            color: #166534;
        }

        .item-text {
            font-size: 0.95rem;
            line-height: 1.5;
            color: var(--text-medium);
            font-weight: var(--font-weight-medium);
        }

        /* Results Agenda */
        .results-agenda-section {
            background-color: var(--bg-white);
        }

        .agenda-sprint-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
        }

        .agenda-sprint-card {
            background-color: var(--bg-light-gray);
            border-radius: var(--border-radius-lg);
            box-shadow: var(--shadow-lg);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            border: 1px solid var(--border-color);
        }

        .agenda-sprint-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: var(--shadow-xl);
        }

        .agenda-sprint-card .card-header {
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 15px;
            background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
            color: var(--text-white);
            position: relative;
        }

        .agenda-icon-wrapper {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            border: 2px solid rgba(255, 255, 255, 0.5);
        }

        .agenda-icon {
            width: 40px;
            height: 40px;
            object-fit: contain;
            filter: brightness(0) invert(1);
        }

        .day-label {
            font-family: var(--font-family-headings);
            font-size: 1.5rem;
            font-weight: var(--font-weight-bold);
        }

        .agenda-sprint-card .card-content {
            padding: 30px;
            flex-grow: 1;
        }

        .agenda-card-title {
            font-family: var(--font-family-headings);
            font-size: 1.6rem;
            color: var(--text-dark);
            margin-top: 0;
            margin-bottom: 20px;
            font-weight: var(--font-weight-semibold);
        }

        .agenda-sprint-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .agenda-sprint-list-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            font-size: 0.95rem;
            color: var(--text-medium);
            line-height: 1.6;
        }

        .agenda-sprint-list-item:last-child {
            margin-bottom: 0;
        }

        .agenda-sprint-list-icon {
            color: var(--primary-color);
            margin-right: 10px;
            font-size: 1.1em;
            margin-top: 3px;
            flex-shrink: 0;
        }

        /* Pricing */
        .pricing-section {
            background-color: var(--bg-light-gray);
        }

        .pricing-table-wrapper {
            max-width: 700px;
            margin: 0 auto 30px auto;
            background-color: var(--bg-white);
            border-radius: var(--border-radius-lg);
            box-shadow: var(--shadow-xl);
            padding: 20px;
        }

        .pricing-table {
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-md);
            overflow: hidden;
        }

        .pricing-row {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            border-bottom: 1px solid var(--border-color);
            padding: 20px;
            position: relative;
            transition: background-color 0.2s ease;
        }

        .pricing-row:last-child {
            border-bottom: none;
        }

        .pricing-row:hover {
            background-color: var(--highlight-blue-bg);
        }

        .pricing-row-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            width: 100%;
        }

        .pricing-row.recommended {
            background-color: var(--primary-color);
            color: var(--text-white);
            border-color: var(--primary-dark-color);
            border-width: 2px;
            border-style: solid;
            margin: -1px;
            border-radius: var(--border-radius-md);
        }

        .pricing-row.recommended .seats,
        .pricing-row.recommended .price,
        .pricing-row.recommended .bonus {
            color: var(--text-white);
        }

        .pricing-row.recommended .last-few-badge {
            background-color: var(--accent-color);
            color: var(--text-dark);
        }

        .current-offer-tag {
            position: absolute;
            top: -1px;
            right: 20px;
            background-color: var(--accent-color);
            color: var(--text-white);
            padding: 4px 10px;
            font-size: 0.75rem;
            font-weight: bold;
            border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
            text-transform: uppercase;
        }

        .seats {
            font-weight: var(--font-weight-semibold);
            color: var(--text-dark);
            font-size: 1rem;
            flex-basis: 40%;
            text-align: left;
        }

        .last-few-badge {
            background-color: var(--accent-color);
            color: var(--text-white);
            padding: 3px 8px;
            border-radius: var(--border-radius-sm);
            font-size: 0.75rem;
            font-weight: var(--font-weight-bold);
            margin-right: 8px;
            display: inline-block;
        }

        .price {
            font-size: 1.5rem;
            font-weight: var(--font-weight-bold);
            color: var(--primary-color);
            flex-basis: 20%;
            text-align: center;
        }

        .bonus {
            font-size: 0.9rem;
            color: var(--text-light);
            flex-basis: 40%;
            text-align: right;
        }

        .current-price-display {
            text-align: center;
            font-size: 1.2rem;
            font-weight: var(--font-weight-medium);
            color: var(--text-medium);
            margin-bottom: 30px;
        }

        .original-price {
            text-decoration: line-through;
            color: var(--text-light);
            margin-right: 8px;
            font-size: 1rem;
        }

        .discounted-price {
            font-size: 1.8rem;
            font-weight: var(--font-weight-bold);
            color: var(--cta-color);
        }

        /* Who Is Shubh */
        .who-is-shubh-section-wrapper {
            background-color: var(--bg-dark-blue);
            padding: 80px 0;
            margin-bottom: 0;
            overflow: visible;
        }

        .who-is-shubh-section {
            border-radius: var(--border-radius-xl);
            width: 90%;
            max-width: 1000px;
            background-color: var(--bg-dark-blue);
            color: var(--text-white);
            margin: 0 auto;
            box-shadow: var(--shadow-xl);
            position: relative;
            z-index: 1;
            min-height: 400px;
        }

        .who-is-shubh-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            padding: 50px 40px;
            box-sizing: border-box;
        }

        .shubh-photo-container {
            flex-shrink: 0;
            position: relative;
        }

        .shubh-photo {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 6px solid var(--primary-color);
            box-shadow: 0 0 30px rgba(74, 105, 187, 0.4), 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .shubh-details {
            flex: 1;
            text-align: center;
        }

        .shubh-details .section-title-light {
            font-size: 2.2rem;
            margin-bottom: 30px;
        }

        .shubh-details-list {
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: left;
        }

        .shubh-details-list-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-size: 1rem;
            line-height: 1.6;
            background-color: rgba(255, 255, 255, 0.05);
            padding: 10px 15px;
            border-radius: var(--border-radius-md);
            transition: background-color 0.3s ease;
        }

        .shubh-details-list-item:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        .shubh-details-icon {
            color: var(--secondary-color);
            margin-right: 15px;
            flex-shrink: 0;
            font-size: 1.2rem;
        }

        /* FAQ */
        .faq-section {
            background-color: var(--bg-white);
        }

        .faq-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .faq-item {
            border-bottom: 1px solid var(--border-color);
        }

        .faq-item:last-child {
            border-bottom: none;
        }

        .faq-question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 25px 0;
            cursor: pointer;
            font-weight: var(--font-weight-semibold);
            font-size: 1.2rem;
            color: var(--text-dark);
            transition: color 0.2s ease;
        }

        .faq-question:hover {
            color: var(--primary-color);
        }

        .faq-arrow {
            color: var(--primary-color);
            transition: transform 0.3s ease;
        }

        .faq-arrow.open {
            transform: rotate(180deg);
        }

        .faq-answer {
            padding: 0 0 25px 0;
            animation: fadeInAnswer 0.4s ease-in-out;
            color: var(--text-medium);
            line-height: 1.7;
            font-size: 1rem;
        }

        .faq-answer p {
            margin: 0;
        }

        @keyframes fadeInAnswer {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Footer */
        .footer {
            background-color: var(--bg-dark-blue);
            padding: 60px 0 50px;
            border-top: 1px solid var(--primary-dark-color);
            text-align: center;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 0;
            position: relative;
            z-index: 2;
        }

        .footer-copyright p {
            font-size: 0.9rem;
            color: var(--text-white);
            font-weight: var(--font-weight-medium);
            margin: 0 0 15px 0;
        }

        .footer-disclaimer p {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.6;
            margin: 0;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .footer-link {
            color: var(--accent-color);
            text-decoration: none;
            font-weight: var(--font-weight-medium);
        }

        .footer-link:hover {
            text-decoration: underline;
            color: #FFD700;
        }

        /* Floating CTA Bar */
        .floating-cta-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 15px 0;
            box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            border-top: 1px solid var(--border-color);
        }

        .floating-cta-bar__container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        .floating-cta-bar__content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }

        .floating-cta-bar__info-section {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .floating-cta-bar__price-details {
            display: flex;
            align-items: baseline;
            gap: 8px;
        }

        .floating-cta-bar__price-current {
            font-size: 2.1rem;
            font-weight: var(--font-weight-bold);
            color: var(--secondary-color);
            line-height: 1;
        }

        .floating-cta-bar__price-original {
            font-size: 1.2rem;
            color: var(--cta-color);
            text-decoration: line-through;
            font-weight: var(--font-weight-normal);
            line-height: 1;
        }

        .floating-cta-bar__deadline {
            font-size: 0.85rem;
            color: var(--text-medium);
            margin-top: 5px;
            font-weight: var(--font-weight-medium);
        }

        .floating-cta-bar__action-section {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .floating-cta-bar__button {
            background-color: var(--cta-color);
            color: var(--text-white);
            border: none;
            padding: 15px 32px;
            font-size: 1.1rem;
            font-weight: var(--font-weight-bold);
            border-radius: var(--border-radius-md);
            cursor: pointer;
            position: relative;
            transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
        }

        .floating-cta-bar__button:hover {
            background-color: var(--cta-hover-color);
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
            transform: translateY(-2px);
        }

        .floating-cta-bar__bonus-text {
            font-size: 0.8rem;
            color: var(--text-medium);
            margin-top: 6px;
            font-weight: var(--font-weight-medium);
        }

        /* Responsive Design */
        @media (min-width: 992px) {
            .video-agenda-container {
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
                gap: 60px;
            }

            .funnel-diagram {
                flex-direction: row;
                justify-content: center;
                gap: 0;
                align-items: stretch;
            }

            .funnel-connector {
                display: block;
                width: 40px;
                height: 2px;
                background-color: var(--primary-color);
                position: relative;
                margin: auto 15px;
            }

            .funnel-connector::after {
                content: '';
                position: absolute;
                right: -6px;
                top: -4px;
                width: 0;
                height: 0;
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
                border-left: 8px solid var(--primary-color);
            }

            .screenshots-flex-container {
                flex-direction: row;
                gap: 120px;
                align-items: flex-start;
                justify-content: center;
            }

            .tsunami-content-wrapper {
                grid-template-columns: 1fr 1.2fr;
                gap: 60px;
            }

            .comparison-table {
                grid-template-columns: 1fr 1fr;
            }

            .pricing-row-content {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }

        @media (max-width: 991.98px) {
            .phone-with-annotations {
                gap: 30px;
                width: auto;
                margin-left: 0;
            }

            .top-annotation,
            .bottom-annotation {
                position: relative;
                align-self: center;
                margin: 20px 0 0 0;
                left: auto;
                top: auto;
                transform: none;
                max-width: 90%;
            }

            .arrow-container {
                display: none;
            }
        }

        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }

            .section-title {
                font-size: 2.2rem;
            }

            .enroll-button {
                min-width: 280px;
            }

            .handwritten-text {
                font-size: 1.2rem;
            }
        }

        @media (max-width: 520px) {
            .floating-cta-bar__content {
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }

            .floating-cta-bar__info-section {
                align-items: center;
                text-align: center;
            }

            .floating-cta-bar__action-section {
                width: 100%;
            }

            .floating-cta-bar__button {
                width: 90%;
                max-width: 280px;
                margin: 0 auto;
            }

            .testimonial-card {
                min-width: calc(100% - 20px);
                max-width: calc(100% - 20px);
            }
        }

        @media (max-width: 480px) {
            .container {
                padding: 0 15px;
            }

            .section-padding {
                padding: 50px 0;
            }

            .hero-title {
                font-size: 2rem;
            }

            .section-title {
                font-size: 1.9rem;
            }

            .hero-pills {
                gap: 10px;
            }

            .hero-pill {
                padding: 10px 18px;
                font-size: 0.85rem;
            }

            .pricing-row-content {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
        }
            `,
            html: `
             <div class="page-wrapper">
        <!-- Top Bar -->
        <div class="top-bar">
            <span class="top-bar-text">🔥 Limited Time Offer - Scale Your Coaching Business To 5 Lakhs/Month!</span>
        </div>

        <!-- Hero Section -->
        <section class="hero-section section-padding">
            <div class="container hero-content">
                <h1 class="hero-title">Scale your Coaching Business To the <span class="highlight">5 Lakhs/Month
                        PROFIT</span> Using Army Of <span class="ai-agents">A.I. Agents</span></h1>
                <p class="sub-headline">Zero Tech Method & Complete Time Freedom.</p>
                <div class="hero-pills">
                    <span class="hero-pill">NO Sales Calls</span>
                    <span class="hero-pill">NO Endless Content</span>
                    <span class="hero-pill">NO Begging in DMs</span>
                </div>
                <div class="video-agenda-container">
                    <div class="video-section">
                        <div class="video-placeholder-wrapper">
                            <div class="video-placeholder">
                                <div class="play-button-overlay" onclick="handlePlayButtonClick()">
                                    <svg class="play-icon" viewBox="0 0 100 100">
                                        <path d="M 30,20 L 30,80 L 80,50 Z" />
                                    </svg>
                                </div>
                                <div class="video-placeholder-overlay-text">
                                    <h3>SHUBH JAIN</h3>
                                    <p>From Employee to 40 CR+ Empire Builder</p>
                                </div>
                            </div>
                        </div>
                        <div class="event-details-grid">
                            <div class="event-detail-box">
                                <div class="event-detail-icon">📅</div>
                                <div class="event-detail-label">DATE</div>
                                <div class="event-detail-value">June 28th - 30th</div>
                            </div>
                            <div class="event-detail-box">
                                <div class="event-detail-icon">🕰️</div>
                                <div class="event-detail-label">TIME</div>
                                <div class="event-detail-value">7 PM - 9 PM</div>
                            </div>
                            <div class="event-detail-box">
                                <div class="event-detail-icon">📍</div>
                                <div class="event-detail-label">WHERE</div>
                                <div class="event-detail-value">Zoom</div>
                            </div>
                            <div class="event-detail-box">
                                <div class="event-detail-icon">🌐</div>
                                <div class="event-detail-label">LANGUAGE</div>
                                <div class="event-detail-value">English</div>
                            </div>
                        </div>
                    </div>
                    <div class="implementation-agenda-wrapper">
                        <div class="implementation-agenda">
                            <h3>Implementation Agenda:</h3>
                            <ul class="agenda-list">
                                <li class="agenda-list-item">
                                    <span class="agenda-list-icon">✓</span>
                                    <span class="agenda-item-text">How to Make 10 Lakhs or More in Sales in One Weekend
                                        Which Would Otherwise Take You Months to Hit!</span>
                                </li>
                                <li class="agenda-list-item">
                                    <span class="agenda-list-icon">✓</span>
                                    <span class="agenda-item-text">How To SELL Premium Offers Without Sales Calls &
                                        Close Effortlessly in 5 hours/month.</span>
                                </li>
                                <li class="agenda-list-item">
                                    <span class="agenda-list-icon">✓</span>
                                    <span class="agenda-item-text">How To Create a Buying Movement That Makes People
                                        Throw Credit Cards At You To Buy!</span>
                                </li>
                            </ul>
                        </div>
                        <div class="agenda-enroll-section">
                            <div class="enroll-button-container">
                                <button class="enroll-button">
                                    ENROLL NOW @ ₹99 <s style="color: rgba(255,255,255,0.7)">₹999</s>
                                </button>
                                <p class="hurry-message">
                                    <span class="red-check">✔</span>
                                    <span class="red-check">✔</span> Hurry! Limited Seats Available!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Client Showcase Section -->
        <section class="client-showcase-section section-padding">
            <div class="container">
                <h2 class="section-title">Success Stories from My <span class="highlight">Coaching Community</span></h2>
                <div class="client-carousel-container">
                    <div class="client-carousel">
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/illustration/1.png"
                                    alt="Istik Nandakumar" class="client-image">
                            </div>
                            <h3 class="client-name">Istik Nandakumar</h3>
                            <p class="client-position">Business and business growth expert</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <span class="following-text">Following: 44.7K+</span>
                            </div>
                        </div>
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/about/1.jpg" alt="Ankit Neerav"
                                    class="client-image">
                            </div>
                            <h3 class="client-name">Ankit Neerav</h3>
                            <p class="client-position">Law of Attraction Coach</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <span class="following-text">Following: 24.3K+</span>
                            </div>
                        </div>
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/about/2.jpg" alt="Shankar Kulkarni"
                                    class="client-image">
                            </div>
                            <h3 class="client-name">Shankar Kulkarni</h3>
                            <p class="client-position">Financial Freedom & Confidence Coach</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <span class="following-text">Following: 9.1K+</span>
                            </div>
                        </div>
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/projects/1.jpg" alt="Priya Sharma"
                                    class="client-image">
                            </div>
                            <h3 class="client-name">Priya Sharma</h3>
                            <p class="client-position">Life Transformation Coach</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                                </svg>
                                <span class="following-text">Following: 32.5K+</span>
                            </div>
                        </div>
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/projects/2.jpg" alt="Rahul Mehta"
                                    class="client-image">
                            </div>
                            <h3 class="client-name">Rahul Mehta</h3>
                            <p class="client-position">Mindset & Success Coach</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                <span class="following-text">Following: 18.9K+</span>
                            </div>
                        </div>
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/projects/3.jpg" alt="Kavita Singh"
                                    class="client-image">
                            </div>
                            <h3 class="client-name">Kavita Singh</h3>
                            <p class="client-position">Health & Wellness Coach</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                                </svg>
                                <span class="following-text">Following: 27.2K+</span>
                            </div>
                        </div>
                        <!-- Duplicate cards for infinite scroll effect -->
                        <div class="client-card">
                            <div class="client-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/illustration/1.png"
                                    alt="Istik Nandakumar" class="client-image">
                            </div>
                            <h3 class="client-name">Istik Nandakumar</h3>
                            <p class="client-position">Business and business growth expert</p>
                            <div class="client-following">
                                <svg class="instagram-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                                </svg>
                                <span class="following-text">Following: 44.7K+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Social Proof Section -->
        <!-- Social Proof Section -->
        <section class="social-proof-section section-padding">
            <div class="container">
                <h2 class="section-title">
                    In Just 3 Days... You Can Start Getting <span class="highlight">Ready To Buy</span> Leads & High
                    Ticket Sales!!
                </h2>
                <p class="section-subtitle">
                    This is the ultimate black-book of <span class="highlight">TOP 1% coaches</span> (they won't reveal
                    it to you...)
                </p>
                <div class="screenshots-flex-container">
                    <div class="screenshot-item-no-shadow">
                        <img src="assets/img/iphone/iphone.png" alt="Payment Notifications" class="simple-screenshot">
                    </div>
                    <div class="phone-with-annotations">
                        <div class="top-annotation">
                            <p class="handwritten-text handwritten-text-top">
                                And when you start applying these <span
                                    class="highlight-blue-handwritten">principles</span>... your inbox could start
                                looking <span class="highlight-green-handwritten">like this</span>.
                            </p>
                            <div class="arrow-container arrow-top-to-phone">
                                <img src="https://img.icons8.com/ios-filled/50/curly-arrow.png" alt="curved arrow"
                                    class="curved-arrow">
                            </div>
                        </div>
                        <div class="phone-container">
                            <div class="screenshot-itemgg screenshot-item-gif">
                                <img src="assets/img/iphone/iphoness.gif" alt="More Payment Notifications in phone"
                                    style="box-shadow: none" class="simple-screenshot">
                            </div>
                        </div>
                        <div class="bottom-annotation">
                            <p class="handwritten-text handwritten-text-bottom">
                                Hundreds of sales @ <span class="highlight-red-handwritten">High Ticket</span> Through
                                this <span class="highlight-blue-handwritten">Reverse Funnel</span> in a span of 2 hours
                                -
                            </p>
                            <div class="arrow-container arrow-bottom-to-phone">
                                <img src="https://img.icons8.com/ios-filled/50/curly-arrow.png" alt="curved arrow"
                                    class="curved-arrow">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="enroll-button-container social-proof-enroll">
                    <button class="enroll-button">
                        ENROLL NOW @ ₹99 <s style="color: rgba(255,255,255,0.7)">₹999</s>
                    </button>
                    <p class="hurry-message">
                        <span class="red-check">✔</span>
                        <span class="red-check">✔</span> Hurry! Limited Seats Available!
                    </p>
                </div>
            </div>
        </section>
        <!-- Reverse Funnel Section -->
        <section class="reverse-funnel-section section-padding">
            <div class="container">
                <h2 class="section-title">The 5-Step <span class="highlight">Success Blueprint</span></h2>
                <p class="section-subtitle reverse-funnel-subtitle">Follow this exact process that helped 10,000+ people
                    transform their lives</p>
                <div class="funnel-diagram">
                    <div class="funnel-step funnel-step-1">
                        <div class="funnel-step-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </div>
                        <div class="funnel-step-number">01</div>
                        <p>Identifying the Challenge</p>
                    </div>
                    <div class="funnel-connector"></div>
                    <div class="funnel-step funnel-step-2">
                        <div class="funnel-step-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                            </svg>
                        </div>
                        <div class="funnel-step-number">02</div>
                        <p>Ideal Branding Formula</p>
                    </div>
                    <div class="funnel-connector"></div>
                    <div class="funnel-step funnel-step-3">
                        <div class="funnel-step-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                            </svg>
                        </div>
                        <div class="funnel-step-number">03</div>
                        <p>Build Audience & Assets</p>
                    </div>
                    <div class="funnel-connector"></div>
                    <div class="funnel-step funnel-step-4">
                        <div class="funnel-step-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
                            </svg>
                        </div>
                        <div class="funnel-step-number">04</div>
                        <p>Creating a Signature Talk</p>
                    </div>
                    <div class="funnel-connector"></div>
                    <div class="funnel-step funnel-step-5">
                        <div class="funnel-step-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.83 0-1.5-.67-1.5-1.5S11.17 14 12 14s1.5.67 1.5 1.5S12.83 17 12 17zm4-4H8V7h8v6z" />
                            </svg>
                        </div>
                        <div class="funnel-step-number">05</div>
                        <p>Scaling Your Offer & Challenge</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="testimonials-section section-padding">
            <div class="container">
                <h2 class="section-title">What My <span class="highlight">Students Say</span></h2>
                <div class="testimonial-slider-container">
                    <div class="testimonial-slider-track">
                        <div class="testimonial-card">
                            <div class="testimonial-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Testimonial by Test Author 1" class="testimonial-image">
                            </div>
                            <div class="testimonial-content">
                                <p class="testimonial-text">hey whats up</p>
                                <p class="testimonial-author">- Test Author 1 <br><span>Test Company 1</span></p>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Testimonial by Test Author 2" class="testimonial-image">
                            </div>
                            <div class="testimonial-content">
                                <p class="testimonial-text">hey whats up2</p>
                                <p class="testimonial-author">- Test Author 2 <br><span>Test Company 2</span></p>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Testimonial by Test Author 3" class="testimonial-image">
                            </div>
                            <div class="testimonial-content">
                                <p class="testimonial-text">hey whats up3</p>
                                <p class="testimonial-author">- Test Author 3 <br><span>Test Company 3</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-slider-controls">
                    <button class="testimonial-slider-arrow" onclick="prevTestimonial()"
                        aria-label="Previous testimonial">‹</button>
                    <button class="testimonial-slider-arrow" onclick="nextTestimonial()"
                        aria-label="Next testimonial">›</button>
                </div>
                <div class="enroll-button-container testimonial-enroll">
                    <button class="enroll-button">
                        ENROLL NOW @ ₹99 <s style="color: rgba(255,255,255,0.7)">₹999</s>
                    </button>
                    <p class="hurry-message">
                        <span class="red-check">✔</span>
                        <span class="red-check">✔</span> Hurry! Limited Seats Available!
                    </p>
                </div>
            </div>
        </section>

        <!-- Tsunami Section -->
        <section class="tsunami-section section-padding">
            <div class="container">
                <div class="tsunami-header">
                    <h2 class="section-title">Join The Success <span class="highlight">Revolution</span></h2>
                </div>
                <div class="tsunami-content-wrapper">
                    <div class="tsunami-left">
                        <div class="group-photo-container">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Group Photo - Shubh Jain with Students" class="group-photo">
                        </div>
                        <div class="tsunami-description">
                            <p>Over <strong>10,000+ students</strong> have transformed their lives using my proven
                                methods and strategies.</p>
                            <p>This isn't just another course - it's a <strong>complete life transformation
                                    system</strong> that works.</p>
                            <p>Join the community of successful individuals who took action and changed their destiny
                                forever.</p>
                        </div>
                    </div>
                    <div class="tsunami-right">
                        <div class="what-if-section">
                            <h3 class="what-if-title">What if you could transform your life in just 90 days?</h3>
                            <div class="what-if-steps">
                                <div class="what-if-step">
                                    <span class="step-number-badge">1</span>
                                    <span class="step-text">Master the mindset of highly successful people</span>
                                </div>
                                <div class="what-if-step">
                                    <span class="step-number-badge">2</span>
                                    <span class="step-text">Build your high-value offer that clients desperately
                                        want</span>
                                </div>
                                <div class="what-if-step">
                                    <span class="step-number-badge">3</span>
                                    <span class="step-text">Create your signature system that scales
                                        automatically</span>
                                </div>
                                <div class="what-if-step">
                                    <span class="step-number-badge">4</span>
                                    <span class="step-text">Generate consistent 6-figure income doing what you
                                        love</span>
                                </div>
                            </div>
                        </div>
                        <div class="comparison-container">
                            <div class="comparison-table">
                                <div class="comparison-column old-way">
                                    <div class="column-header">
                                        <h4>The Old Way</h4>
                                        <p>Struggling alone without guidance</p>
                                    </div>
                                    <div class="comparison-items">
                                        <div class="comparison-item">
                                            <span class="item-icon cross">✖</span>
                                            <div class="item-content">
                                                <span class="item-label">Manual</span>
                                                <span class="item-text">Trial and error approach wasting precious
                                                    time</span>
                                            </div>
                                        </div>
                                        <div class="comparison-item">
                                            <span class="item-icon cross">✖</span>
                                            <div class="item-content">
                                                <span class="item-label">Manual</span>
                                                <span class="item-text">No clear direction or proven roadmap to
                                                    follow</span>
                                            </div>
                                        </div>
                                        <div class="comparison-item">
                                            <span class="item-icon cross">✖</span>
                                            <div class="item-content">
                                                <span class="item-label">Manual</span>
                                                <span class="item-text">Inconsistent results that frustrate and
                                                    demotivate</span>
                                            </div>
                                        </div>
                                        <div class="comparison-item">
                                            <span class="item-icon cross">✖</span>
                                            <div class="item-content">
                                                <span class="item-label">Manual</span>
                                                <span class="item-text">Wasted money on courses that don't deliver
                                                    results</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="comparison-column new-way">
                                    <div class="column-header">
                                        <h4>The New Way</h4>
                                        <p>With my proven system and guidance</p>
                                    </div>
                                    <div class="comparison-items">
                                        <div class="comparison-item">
                                            <span class="item-icon check">✔</span>
                                            <div class="item-content">
                                                <span class="item-label">Automated</span>
                                                <span class="item-text">Proven step-by-step system that guarantees
                                                    results</span>
                                            </div>
                                        </div>
                                        <div class="comparison-item">
                                            <span class="item-icon check">✔</span>
                                            <div class="item-content">
                                                <span class="item-label">Automated</span>
                                                <span class="item-text">Clear roadmap to success with exact action
                                                    steps</span>
                                            </div>
                                        </div>
                                        <div class="comparison-item">
                                            <span class="item-icon check">✔</span>
                                            <div class="item-content">
                                                <span class="item-label">Automated</span>
                                                <span class="item-text">Consistent, predictable results within 90
                                                    days</span>
                                            </div>
                                        </div>
                                        <div class="comparison-item">
                                            <span class="item-icon check">✔</span>
                                            <div class="item-content">
                                                <span class="item-label">Automated</span>
                                                <span class="item-text">Investment that pays for itself within first
                                                    month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="enroll-button-container tsunami-enroll">
                    <button class="enroll-button">
                        ENROLL NOW @ ₹99 <s style="color: rgba(255,255,255,0.7)">₹999</s>
                    </button>
                    <p class="hurry-message">
                        <span class="red-check">✔</span>
                        <span class="red-check">✔</span> Hurry! Limited Seats Available!
                    </p>
                </div>
            </div>
        </section>

        <!-- Results Agenda Section -->
        <section class="results-agenda-section section-padding">
            <div class="container">
                <div class="results-agenda-header">
                    <h2 class="section-title">Your 3-Day <span class="highlight">Transformation Journey</span></h2>
                </div>
                <div class="agenda-sprint-grid">
                    <div class="agenda-sprint-card">
                        <div class="card-header">
                            <div class="agenda-icon-wrapper">
                                <img src="https://via.placeholder.com/40x40/ffffff/000000?text=Build" alt="Build Icon"
                                    class="agenda-icon">
                            </div>
                            <span class="day-label">Day 01</span>
                        </div>
                        <div class="card-content">
                            <h3 class="agenda-card-title">Build</h3>
                            <ul class="agenda-sprint-list">
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    EXACT 4-Step High-Ticket Offer Creation Formula that only TOP 1% coaches know.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    An ancient offer creation 'law' that 99.8% people MISS out, which stops them to make
                                    more sales.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    An old-school offer strategy that crushes Cold Audience and makes it almost
                                    neurologically impossible for people to not consider buying your offer.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    Once you know this - creating million dollar offers & campaigns will be cake-walk!
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    And so much more...
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="agenda-sprint-card">
                        <div class="card-header">
                            <div class="agenda-icon-wrapper">
                                <img src="https://via.placeholder.com/40x40/ffffff/000000?text=Sell" alt="Sell Icon"
                                    class="agenda-icon">
                            </div>
                            <span class="day-label">Day 02</span>
                        </div>
                        <div class="card-content">
                            <h3 class="agenda-card-title">Sell</h3>
                            <ul class="agenda-sprint-list">
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    Your 'Reverse-math' to your NEXT 10 lakh payday.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    7-Figure Launch Checklist used behind every BIG launch.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    How to get your dream high-ticket clients lining up to work with you before you even
                                    pitch them.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    Battle-tested 5 Hour Engine that makes you the most money and sales in a shorter
                                    duration.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    The TOP SECRET *** technique to CRUSH your launch the very first time.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="agenda-sprint-card">
                        <div class="card-header">
                            <div class="agenda-icon-wrapper">
                                <img src="https://via.placeholder.com/40x40/ffffff/000000?text=Scale" alt="Scale Icon"
                                    class="agenda-icon">
                            </div>
                            <span class="day-label">Day 03</span>
                        </div>
                        <div class="card-content">
                            <h3 class="agenda-card-title">Scale</h3>
                            <ul class="agenda-sprint-list">
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    My 40 crores 'Signature-Talk' Framework.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    This #1 thing that absolutely EXTREME FEW PEOPLE do, but pulls in 60% more sales.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    How do I create presentations that are guaranteed to CRUSH.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    How to persuade the whole crowd without selling or talking about your product.
                                </li>
                                <li class="agenda-sprint-list-item">
                                    <span class="agenda-sprint-list-icon">🔹</span>
                                    The #1 strategy you can use to make any offer SELL AT ANY PRICE.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="enroll-button-container results-agenda-enroll">
                    <button class="enroll-button">
                        ENROLL NOW @ ₹99 <s style="color: rgba(255,255,255,0.7)">₹999</s>
                    </button>
                    <p class="hurry-message">
                        <span class="red-check">✔</span>
                        <span class="red-check">✔</span> Hurry! Limited Seats Available!
                    </p>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section class="pricing-section section-padding">
            <div class="container">
                <h2 class="section-title">Choose Your <span class="highlight">Success Package</span></h2>
                <div class="pricing-table-wrapper">
                    <div class="pricing-table">
                        <div class="pricing-row">
                            <div class="pricing-row-content">
                                <span class="seats">Regular Price</span>
                                <span class="price">₹2,999</span>
                                <span class="bonus">Basic Package Only</span>
                            </div>
                        </div>
                        <div class="pricing-row recommended">
                            <div class="pricing-row-content">
                                <span class="seats"><span class="last-few-badge">ONLY 100 SEATS</span> Early Bird
                                    Special</span>
                                <span class="price">₹99</span>
                                <span class="bonus">+ ₹25,000 Worth of Exclusive Bonuses</span>
                            </div>
                            <div class="current-offer-tag">Current Offer</div>
                        </div>
                        <div class="pricing-row">
                            <div class="pricing-row-content">
                                <span class="seats">Last Minute</span>
                                <span class="price">₹999</span>
                                <span class="bonus">Standard Package</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="current-price-display">
                    Today Only Special Price: <span class="original-price">₹2,999</span> <span
                        class="original-price">₹999</span> <span class="discounted-price">₹99</span>
                </div>
                <div class="enroll-button-container pricing-enroll">
                    <button class="enroll-button">
                        ENROLL NOW @ ₹99 <s style="color: rgba(255,255,255,0.7)">₹999</s>
                    </button>
                    <p class="hurry-message">
                        <span class="red-check">✔</span>
                        <span class="red-check">✔</span> Hurry! Limited Seats Available!
                    </p>
                </div>
            </div>
        </section>

        <!-- Who Is Shubh Section -->
        <div class="who-is-shubh-section-wrapper">
            <section class="who-is-shubh-section">
                <div class="who-is-shubh-content">
                    <div class="shubh-photo-container">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Shubh Jain" class="shubh-photo">
                    </div>
                    <div class="shubh-details">
                        <h2 class="section-title-light">Meet Your <span class="highlight">Success Mentor</span></h2>
                        <ul class="shubh-details-list">
                            <li class="shubh-details-list-item">
                                <span class="shubh-details-icon">✓</span>
                                Built a ₹40+ crore coaching business from scratch
                            </li>
                            <li class="shubh-details-list-item">
                                <span class="shubh-details-icon">✓</span>
                                Mentored 10,000+ students to achieve their dreams
                            </li>
                            <li class="shubh-details-list-item">
                                <span class="shubh-details-icon">✓</span>
                                Featured in top business magazines and TV shows
                            </li>
                            <li class="shubh-details-list-item">
                                <span class="shubh-details-icon">✓</span>
                                Certified master coach with 15+ years experience
                            </li>
                            <li class="shubh-details-list-item">
                                <span class="shubh-details-icon">✓</span>
                                Author of 3 bestselling books on success and mindset
                            </li>
                            <li class="shubh-details-list-item">
                                <span class="shubh-details-icon">✓</span>
                                Speaker at 100+ international conferences and events
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        <!-- FAQ Section -->
        <section class="faq-section section-padding">
            <div class="container">
                <h2 class="section-title">Frequently Asked <span class="highlight">Questions</span></h2>
                <div class="faq-container">
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(0)">
                            <span>Can I see your coaching success stories?</span>
                            <span class="faq-arrow" id="arrow-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </div>
                        <div class="faq-answer" id="answer-0" style="display: none;">
                            <p>Yes! I have helped numerous clients achieve their fitness goals. You can view
                                testimonials and before/after photos in my portfolio section.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(1)">
                            <span>What are your nutrition coaching rates?</span>
                            <span class="faq-arrow" id="arrow-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </div>
                        <div class="faq-answer" id="answer-1" style="display: none;">
                            <p>My coaching programs start at $99/month for basic nutrition plans. Customized programs
                                with weekly check-ins start at $199/month. I offer discounts for 3-month commitments.
                            </p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(2)">
                            <span>How do you communicate with clients?</span>
                            <span class="faq-arrow" id="arrow-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </div>
                        <div class="faq-answer" id="answer-2" style="display: none;">
                            <p>I use a combination of WhatsApp for quick check-ins, weekly Zoom calls for deep dives,
                                and a custom app for meal tracking and progress monitoring.</p>
                        </div>
                    </div>
                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFAQ(3)">
                            <span>Do you offer customized workout plans?</span>
                            <span class="faq-arrow" id="arrow-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </div>
                        <div class="faq-answer" id="answer-3" style="display: none;">
                            <p>Absolutely! After assessing your fitness level and goals, I create personalized workout
                                routines that fit your schedule and available equipment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-copyright">
                    <p>© 2024 Success Academy. All rights reserved.</p>
                </div>
                <div class="footer-disclaimer">
                    <p>Results shown are not typical and may vary. Success requires dedication, hard work, and
                        consistent action. This is an educational program and individual results depend on individual
                        effort and circumstances.</p>
                </div>
            </div>
        </footer>

        <!-- Floating CTA Bar -->
        <div class="floating-cta-bar">
            <div class="floating-cta-bar__container">
                <div class="floating-cta-bar__content">
                    <div class="floating-cta-bar__info-section">
                        <div class="floating-cta-bar__price-details">
                            <span class="floating-cta-bar__price-current">₹99</span>
                            <span class="floating-cta-bar__price-original">₹999</span>
                        </div>
                        <div class="floating-cta-bar__deadline">Offer ends June 30, 2025</div>
                    </div>
                    <div class="floating-cta-bar__action-section">
                        <button class="floating-cta-bar__button">ENROLL NOW</button>
                        <div class="floating-cta-bar__bonus-text">+ Unbelievable Bonuses</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `,
            js: `
              // Video functionality
    let videoPlaying = false;

    function handlePlayButtonClick() {
        const videoWrapper = document.querySelector('.video-placeholder-wrapper');
        const playButton = document.querySelector('.play-button-overlay');
        const overlayText = document.querySelector('.video-placeholder-overlay-text');

        if (playButton) {
            playButton.style.display = 'none';
        }
        if (overlayText) {
            overlayText.style.display = 'none';
        }

        // Create and insert video element
        const video = document.createElement('video');
        video.className = 'active-video-player';
        video.controls = true;
        video.autoplay = true;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';

        // You can replace this with actual video URL
        video.src = 'https://www.w3schools.com/html/mov_bbb.mp4';

        const placeholder = document.querySelector('.video-placeholder');
        if (placeholder) {
            placeholder.innerHTML = '';
            placeholder.appendChild(video);
        }

        videoPlaying = true;
    }

    // FAQ functionality
    const openFAQs = {};

    function toggleFAQ(index) {
        const answer = document.getElementById('answer-' + index); // Modified for string concatenation
        const arrow = document.getElementById('arrow-' + index);     // Modified for string concatenation

        if (openFAQs[index]) {
            answer.style.display = 'none';
            arrow.classList.remove('open');
            openFAQs[index] = false;
        } else {
            answer.style.display = 'block';
            arrow.classList.add('open');
            openFAQs[index] = true;
        }
    }

    // Testimonial slider functionality
    let currentTestimonialSlide = 0;
    const totalTestimonials = 3;

    function nextTestimonial() {
        currentTestimonialSlide = (currentTestimonialSlide === totalTestimonials - 1) ? 0 : currentTestimonialSlide + 1;
        updateTestimonialSlider();
    }

    function prevTestimonial() {
        currentTestimonialSlide = (currentTestimonialSlide === 0) ? totalTestimonial - 1 : currentTestimonialSlide - 1;
        updateTestimonialSlider();
    }

    function updateTestimonialSlider() {
        const track = document.querySelector('.testimonial-slider-track');
        if (track) {
            const cardWidth = 350; // approximate card width
            const gap = 30;
            const translateX = -currentTestimonialSlide * (cardWidth + gap);
            track.style.transform = 'translateX(' + translateX + 'px)'; // Modified to use '+' instead of backticks
        }
    }

    // Floating CTA Bar deadline update
    function updateDeadline() {
        const deadlineElement = document.querySelector('.floating-cta-bar__deadline');
        if (deadlineElement) {
            const deadlineDate = new Date("2025-06-30");
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = deadlineDate.toLocaleDateString('en-US', options);
            deadlineElement.textContent = 'Offer ends ' + formattedDate; // Modified for string concatenation
        }
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function () {
        updateDeadline();

        // Add scroll animations
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        animatedElements.forEach(el => observer.observe(el));
    });

    // Add click handlers for all enroll buttons
    document.addEventListener('DOMContentLoaded', function () {
        const enrollButtons = document.querySelectorAll('.enroll-button, .floating-cta-bar__button');
        enrollButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Add your enrollment logic here
                alert('Enrollment functionality would be implemented here!');
            });
        });
    });

    // Smooth scrolling for internal links
    document.addEventListener('DOMContentLoaded', function () {
        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';
    });`
        },
          
        // Add more welcome templates here
    
   'three_template': {
            name: '3 Funnel landing page',
            description: 'A friendly welcome page with a clean design and clear CTA',
            thumbnail: 'https://placehold.co/400x300/f97316/ffffff?text=Simple+Checkout&font=roboto&style=flat',
            css: `        
        :root {
            --fn3-bg-primary: #FFFFFF;
            --fn3-bg-secondary: #F8F9FA;
            --fn3-bg-accent-soft: #FFF9E6;
            --fn3-card-bg: #FFFFFF;
            --fn3-card-bg-alt: #FDFDFD;
            --fn3-text-primary: #212529;
            --fn3-text-secondary: #5A6268;
            --fn3-text-tertiary: #889097;
            --fn3-text-on-accent: #FFFFFF;
            --fn3-text-on-dark-accent: #332200;
            --fn3-accent-yellow: #FFC000;
            --fn3-accent-yellow-light: #FFD761;
            --fn3-accent-yellow-dark: #E0A800;
            --fn3-accent-teal: #00ADAD;
            --fn3-accent-teal-light: #5CE1E1;
            --fn3-success-green: #28A745;
            --fn3-error-red: #DC3545;
            --fn3-info-blue: #007BFF;
            --fn3-border-color: #E0E0E0;
            --fn3-border-color-strong: #CED4DA;
            --fn3-border-color-accent: var(--fn3-accent-yellow);
            --fn3-font-primary: 'Poppins', sans-serif;
            --fn3-font-secondary: 'Montserrat', sans-serif;
            --fn3-shadow-xs: 0 1px 3px rgba(0, 0, 0, 0.05);
            --fn3-shadow-sm: 0 3px 8px rgba(0, 0, 0, 0.07);
            --fn3-shadow-md: 0 6px 15px rgba(0, 0, 0, 0.08);
            --fn3-shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.1);
            --fn3-shadow-accent: 0 6px 15px rgba(255, 192, 0, 0.3);
            --fn3-shadow-accent-hover: 0 8px 20px rgba(255, 192, 0, 0.4);
            --fn3-radius-sm: 6px;
            --fn3-radius-md: 10px;
            --fn3-radius-lg: 14px;
            --fn3-radius-pill: 50px;
            --fn3-transition-fast: all 0.2s ease-in-out;
            --fn3-transition-medium: all 0.3s ease-in-out;
            --fn3-transition-long: all 0.5s ease-in-out;
            --fn3-accent-yellow-rgb: 255, 192, 0;
            --fn3-accent-teal-rgb: 0, 173, 173;
            --fn3-card-bg-rgb: 255, 255, 255;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: var(--fn3-font-primary);
            background-color: var(--fn3-bg-primary);
            color: var(--fn3-text-primary);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
        }

        .fn3-page-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 15px;
            box-sizing: border-box;
            background-image:
                radial-gradient(circle at 5% 5%, rgba(var(--fn3-accent-teal-rgb), 0.03) 0%, transparent 25%),
                radial-gradient(circle at 95% 95%, rgba(var(--fn3-accent-yellow-rgb), 0.03) 0%, transparent 25%);
        }

        .fn3-main-content {
            max-width: 1200px;
            width: 100%;
            padding: 0 15px;
            box-sizing: border-box;
        }

        .fn3-top-banner {
            background: linear-gradient(90deg, var(--fn3-accent-yellow), var(--fn3-accent-yellow-light));
            color: var(--fn3-text-on-dark-accent);
            padding: 8px 25px;
            border-radius: var(--fn3-radius-pill);
            margin: 20px auto 40px auto;
            font-weight: 600;
            font-size: 0.95em;
            text-align: center;
            box-shadow: var(--fn3-shadow-accent);
            transition: var(--fn3-transition-medium);
            position: relative;
            z-index: 5;
            width: fit-content;
        }

        .fn3-top-banner:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: var(--fn3-shadow-accent-hover);
        }

        .fn3-banner-text {
            margin: 0;
        }

        .fn3-main-content-section {
            position: relative;
            text-align: center;
            color: var(--fn3-text-primary);
            z-index: 1;
            overflow: hidden;
            background: transparent;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .fn3-heading-section {
            text-align: center;
            margin-bottom: 50px;
        }

        .fn3-sub-heading {
            color: var(--fn3-accent-teal);
            font-size: 1.1em;
            font-weight: 600;
            margin-bottom: 12px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
        }

        .fn3-main-title {
            color: var(--fn3-text-primary);
            font-family: var(--fn3-font-secondary);
            font-size: clamp(2.2em, 5vw, 3.5em);
            line-height: 1.15;
            font-weight: 800;
        }

        .fn3-register-button {
            background: linear-gradient(to right, var(--fn3-accent-yellow), var(--fn3-accent-yellow-light)) !important;
            color: #000000 !important;
            padding: 14px 30px;
            border: none;
            border-radius: var(--fn3-radius-pill);
            font-size: clamp(1em, 2.2vw, 1.2em);
            font-weight: 700;
            font-family: var(--fn3-font-secondary);
            cursor: pointer;
            transition: var(--fn3-transition-medium);
            box-shadow: var(--fn3-shadow-accent);
            letter-spacing: 0.03em;
            text-transform: uppercase;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            position: relative;
            overflow: hidden;
            transform-style: preserve-3d;
        }

        .fn3-register-button:hover {
            background: linear-gradient(to right, var(--fn3-accent-yellow-light), var(--fn3-accent-yellow)) !important;
            color: #000000 !important;
            transform: translateY(-4px) scale(1.03);
            box-shadow: var(--fn3-shadow-accent-hover);
        }

        .fn3-centered-button {
            display: block;
            margin: 0 auto 50px auto;
            width: fit-content;
        }

        .fn3-spacing-top {
            margin-top: 35px;
        }

        .fn3-real-coaches-section {
            text-align: center;
            margin-bottom: 60px;
            padding: 35px 25px;
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-lg);
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
        }

        .fn3-real-coaches-testimonials {
            display: flex;
            gap: 25px;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 20px;
        }


        .fn3-two-column-layout {
            display: flex;
            gap: 35px;
            justify-content: center;
            flex-wrap: wrap;
            align-items: flex-start;
            margin-top: 45px;
            margin-bottom: 60px;
        }

        .fn3-left-column,
        .fn3-right-column {
            flex: 1;
            min-width: 320px;
            padding: 5px 0;
        }

        .fn3-speaker-award-image-container {
            background-color: var(--fn3-card-bg-alt);
            padding: 10px;
            border-radius: var(--fn3-radius-lg);
            margin-bottom: 20px;
            overflow: hidden;
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
        }

        .fn3-speaker-award-image {
            max-width: 100%;
            height: auto;
            display: block;
            border-radius: var(--fn3-radius-md);
        }

        .fn3-speaker-info-card {
            background-color: var(--fn3-card-bg);
            padding: 20px;
            border-radius: var(--fn3-radius-lg);
            margin-bottom: 25px;
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
            transition: var(--fn3-transition-medium);
        }

        .fn3-speaker-info-card:hover {
            transform: translateY(-5px) scale(1.01);
            box-shadow: var(--fn3-shadow-lg);
            border-color: var(--fn3-border-color-accent);
        }

        .fn3-speaker-name {
            font-size: 1.8em;
            font-weight: 700;
            margin-bottom: 15px;
            color: var(--fn3-text-primary);
            font-family: var(--fn3-font-secondary);
        }

        .fn3-speaker-detail {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            color: var(--fn3-text-secondary);
            font-size: 1em;
        }

        .fn3-detail-icon {
            margin-right: 12px;
            color: var(--fn3-accent-yellow);
            font-size: 1.2em;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .fn3-webinar-details-heading {
            font-size: 1.5em;
            font-weight: 700;
            margin-bottom: 20px;
            color: var(--fn3-text-primary);
            font-family: var(--fn3-font-secondary);
        }

        .fn3-webinar-details-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }

        .fn3-detail-item {
            background-color: var(--fn3-card-bg-alt);
            padding: 20px 15px;
            border-radius: var(--fn3-radius-md);
            text-align: center;
            box-shadow: var(--fn3-shadow-sm);
            border: 1px solid var(--fn3-border-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: var(--fn3-transition-medium);
            min-height: 120px;
        }

        .fn3-detail-item:hover {
            transform: translateY(-5px);
            box-shadow: var(--fn3-shadow-md);
            border-color: var(--fn3-border-color-accent);
        }

        .fn3-item-icon {
            font-size: 1.8em;
            color: var(--fn3-accent-teal);
            margin-bottom: 10px;
        }

        .fn3-item-label {
            font-size: 0.9em;
            color: var(--fn3-text-tertiary);
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }

        .fn3-item-value {
            font-weight: 600;
            font-size: 1.1em;
            color: var(--fn3-text-primary);
            line-height: 1.2;
        }

        .fn3-why-attend-heading {
            font-size: 1.7em;
            font-weight: 700;
            margin-bottom: 25px;
            color: var(--fn3-text-primary);
            display: flex;
            align-items: center;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-heading-icon {
            color: var(--fn3-accent-yellow);
            font-size: 1.3em;
            margin-right: 12px;
        }

        .fn3-benefit-list {
            list-style: none;
            padding: 0;
            margin: 0 0 25px 0;
            text-align: left;
        }

        .fn3-benefit-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 15px;
            font-size: 1em;
            color: var(--fn3-text-secondary);
            line-height: 1.5;
        }

        .fn3-checkmark {
            color: var(--fn3-success-green);
            font-size: 1.2em;
            margin-right: 10px;
            flex-shrink: 0;
            line-height: 1.4;
            margin-top: 2px;
        }

        .fn3-disclaimer {
            text-align: center;
            font-size: 0.9em;
            color: var(--fn3-text-tertiary);
            margin-top: 20px;
            line-height: 1.5;
        }

        .fn3-featured-section {
            position: relative;
            z-index: 10;
            margin-top: 60px;
            text-align: center;
            margin-bottom: 60px;
            padding: 35px 15px;
            background-color: var(--fn3-bg-secondary);
            border-radius: var(--fn3-radius-lg);
        }

        .fn3-featured-in-label {
            background: linear-gradient(to right, var(--fn3-accent-teal), var(--fn3-accent-teal-light));
            color: var(--fn3-text-on-accent);
            padding: 8px 25px;
            border-radius: var(--fn3-radius-pill);
            font-weight: 600;
            font-size: 0.9em;
            display: inline-block;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            z-index: 1;
            box-shadow: 0 5px 15px rgba(var(--fn3-accent-teal-rgb), 0.25);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .fn3-media-logos {
            border-radius: var(--fn3-radius-lg);
            padding: 25px 30px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            gap: 25px;
        }

        .fn3-media-logo {
            max-height: 35px;
            filter: grayscale(0.7) opacity(0.75);
            transition: var(--fn3-transition-fast);
        }

        .fn3-media-logo:hover {
            filter: none;
            opacity: 1;
            transform: scale(1.1);
        }

        .fn3-struggle-section {
            text-align: center;
            margin-bottom: 60px;
            padding: 35px 15px;
            background-color: var(--fn3-bg-accent-soft);
            border-radius: var(--fn3-radius-lg);
        }

        .fn3-struggle-heading {
            color: var(--fn3-accent-yellow-dark);
            font-size: 2em;
            font-weight: 800;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-struggle-heading .fn3-heading-icon {
            color: var(--fn3-error-red);
            font-size: 1.1em;
        }

        .fn3-struggle-list {
            list-style: none;
            padding: 0;
            margin-bottom: 35px;
            display: inline-block;
            text-align: left;
        }

        .fn3-struggle-item {
            display: flex;
            align-items: center;
            color: var(--fn3-text-secondary);
            font-size: 1.05em;
            margin-bottom: 15px;
            font-weight: 500;
        }

        .fn3-struggle-item .fn3-cross-icon {
            color: var(--fn3-error-red);
            font-size: 1.2em;
            margin-right: 12px;
            flex-shrink: 0;
        }

        .fn3-imagine-text {
            font-size: 1.4em;
            color: var(--fn3-text-primary);
            margin-bottom: 25px;
            line-height: 1.5;
            font-weight: 500;
        }

        .fn3-highlight-text {
            color: var(--fn3-accent-yellow-dark);
            font-weight: 700;
        }

        .fn3-workshop-promise {
            font-size: 1em;
            color: var(--fn3-text-secondary);
            margin-bottom: 30px;
            font-style: italic;
        }

        .fn3-learn-section {
            text-align: center;
            margin-top: 50px;
            margin-bottom: 50px;
        }

        .fn3-learn-separator {
            width: 70%;
            max-width: 500px;
            height: 1.5px;
            background: linear-gradient(to right, transparent, var(--fn3-accent-teal), transparent);
            margin: 0 auto 35px auto;
            opacity: 0.6;
        }

        .fn3-learn-heading {
            font-size: 2.2em;
            font-weight: 800;
            color: var(--fn3-text-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-learn-check-icon {
            color: var(--fn3-success-green);
            font-size: 0.85em;
        }

        .fn3-learn-grid-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin-bottom: 60px;
            padding: 0 10px;
        }

        .fn3-learn-card {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-lg);
            padding: 25px;
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: var(--fn3-transition-medium);
        }

        .fn3-learn-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: var(--fn3-shadow-lg);
            border-color: var(--fn3-border-color-accent);
        }

        .fn3-card-icon {
            font-size: 3em;
            color: var(--fn3-accent-yellow);
            margin-bottom: 15px;
            transition: var(--fn3-transition-fast);
        }

        .fn3-learn-card:hover .fn3-card-icon {
            transform: scale(1.1);
            color: var(--fn3-accent-yellow-light);
        }

        .fn3-card-title {
            font-size: 1.25em;
            font-weight: 700;
            color: var(--fn3-text-primary);
            margin-bottom: 10px;
            line-height: 1.25;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-progress-bar {
            width: 100%;
            height: 4px;
            background-color: var(--fn3-border-color);
            border-radius: 2px;
            margin: 10px 0;
            overflow: hidden;
            position: relative;
        }

        .fn3-progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--fn3-accent-yellow), var(--fn3-accent-teal));
            border-radius: 2px;
            transition: width 2s ease-in-out;
            position: relative;
        }

        .fn3-card-description {
            font-size: 0.95em;
            color: var(--fn3-text-secondary);
            line-height: 1.5;
        }

        .fn3-for-you-section {
            text-align: center;
            margin-bottom: 60px;
            padding: 35px 15px;
            background-color: var(--fn3-bg-secondary);
            border-radius: var(--fn3-radius-lg);
        }

        .fn3-for-you-heading {
            font-size: 2em;
            font-weight: 800;
            color: var(--fn3-text-primary);
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-for-you-heading .fn3-heading-icon {
            color: var(--fn3-accent-yellow);
            font-size: 1.1em;
        }

        .fn3-for-you-list {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }

        .fn3-for-you-item {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-md);
            padding: 15px 25px;
            width: 100%;
            max-width: 600px;
            text-align: left;
            display: flex;
            align-items: center;
            font-size: 1.05em;
            color: var(--fn3-text-primary);
            box-shadow: var(--fn3-shadow-sm);
            border: 1px solid var(--fn3-border-color);
            transition: var(--fn3-transition-medium);
        }

        .fn3-for-you-item:hover {
            transform: translateX(5px) scale(1.01);
            box-shadow: var(--fn3-shadow-md);
            border-left: 4px solid var(--fn3-accent-yellow);
        }

        .fn3-for-you-check {
            color: var(--fn3-success-green);
            font-size: 1.1em;
            margin-right: 12px;
            flex-shrink: 0;
        }

        .fn3-problem-section {
            text-align: center;
            margin-bottom: 60px;
            padding: 35px 25px;
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-lg);
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
        }

        .fn3-problem-heading {
            font-size: clamp(1.6em, 3.5vw, 2.1em);
            font-weight: 700;
            color: var(--fn3-text-primary);
            margin-bottom: 25px;
            line-height: 1.3;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 6px 10px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-problem-icon {
            color: var(--fn3-accent-yellow);
            font-size: 1.1em;
        }

        .fn3-problem-highlight {
            color: var(--fn3-accent-yellow-dark);
        }

        .fn3-problem-text {
            font-size: 1.05em;
            color: var(--fn3-text-secondary);
            margin-bottom: 15px;
            line-height: 1.5;
        }

        .fn3-problem-bold {
            font-weight: 700;
            color: var(--fn3-text-primary);
            font-size: 1.1em;
        }

        .fn3-bonus-section {
            text-align: center;
            margin-bottom: 60px;
            padding: 35px 25px;
            border: 2px dashed var(--fn3-accent-yellow);
            border-radius: var(--fn3-radius-lg);
            background-color: var(--fn3-bg-accent-soft);
        }

        .fn3-bonus-heading {
            font-size: 2em;
            font-weight: 800;
            color: var(--fn3-text-primary);
            margin-bottom: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-coach-testimonial-card {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-lg);
            padding: 25px;
            max-width: 420px;
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
            text-align: left;
            position: relative;
            transition: var(--fn3-transition-medium);
            overflow: hidden;
        }

        .fn3-coach-testimonial-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--fn3-shadow-lg);
            border-color: var(--fn3-border-color-accent);
        }

        .fn3-coach-testimonial-card::before {
            content: '"';
            position: absolute;
            top: 12px;
            left: 18px;
            font-size: 3em;
            color: var(--fn3-accent-yellow);
            opacity: 0.3;
            font-family: serif;
            line-height: 1;
        }

        .fn3-coach-quote {
            font-size: 1.1em;
            font-style: italic;
            color: var(--fn3-text-secondary);
            margin-bottom: 20px;
            line-height: 1.5;
            position: relative;
            padding-left: 5px;
        }

        .fn3-coach-info {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .fn3-coach-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--fn3-accent-yellow);
        }

        .fn3-coach-avatar-placeholder {
            font-size: 2.2em;
            color: var(--fn3-text-tertiary);
            border: 2px solid var(--fn3-border-color);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--fn3-bg-secondary);
        }

        .fn3-carousel-testimonials-section {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 60px;
            padding: 8px 0;
            overflow: hidden;
        }

        .fn3-carousel-nav {
            display: none;
        }

        .fn3-carousel-cards-container {
            display: flex;
            gap: 25px;
            overflow: hidden;
            width: 100%;
            animation: scrollCarousel 20s linear infinite;
        }

        @keyframes scrollCarousel {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-50%);
            }
        }

        .fn3-carousel-cards-container:hover {
            animation-play-state: paused;
        }


        .fn3-coach-name {
            font-size: 1.05em;
            font-weight: 700;
            color: var(--fn3-accent-yellow-dark);
            margin-bottom: 3px;
        }

        .fn3-coach-role {
            font-size: 0.85em;
            color: var(--fn3-text-tertiary);
        }

        .fn3-carousel-testimonials-section {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 60px;
            padding: 8px 0;
            overflow: hidden;
            /* Add overflow hidden to the section */
        }

        .fn3-carousel-nav {
            font-size: 2.4em;
            color: var(--fn3-text-tertiary);
            cursor: pointer;
            transition: var(--fn3-transition-fast);
            flex-shrink: 0;
            padding: 6px;
            border-radius: 50%;
            background-color: rgba(var(--fn3-card-bg-rgb), 0.8);
            box-shadow: var(--fn3-shadow-xs);
            display: none;
            /* Hide navigation for auto-scroll */
        }

        .fn3-carousel-nav:hover {
            color: var(--fn3-accent-yellow);
            background-color: var(--fn3-card-bg);
            box-shadow: var(--fn3-shadow-sm);
        }

        .fn3-carousel-cards-container {
            display: flex;
            gap: 25px;
            overflow: visible;
            /* Change from overflow-x: auto */
            width: 100%;
            /* Remove scrollbar styles as they're not needed for auto-scroll */
        }

        .fn3-carousel-cards-wrapper {
            display: flex;
            gap: 25px;
            animation: scrollCarousel 20s linear infinite;
            width: fit-content;
        }

        @keyframes scrollCarousel {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-50%);
            }
        }

        .fn3-carousel-cards-container:hover .fn3-carousel-cards-wrapper {
            animation-play-state: paused;
        }

        .fn3-carousel-card {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-lg);
            padding: 20px;
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
            min-width: 260px;
            text-align: center;
            flex-shrink: 0;
            transition: var(--fn3-transition-medium);
        }

        .fn3-carousel-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--fn3-shadow-lg);
        }

        .fn3-carousel-card-title {
            font-size: 1.3em;
            font-weight: 700;
            color: var(--fn3-accent-yellow-dark);
            margin-bottom: 5px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-carousel-card-subtitle {
            font-size: 0.85em;
            color: var(--fn3-text-tertiary);
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }

        .fn3-carousel-card-image {
            width: 100%;
            max-height: 160px;
            object-fit: cover;
            border-radius: var(--fn3-radius-md);
            margin-bottom: 12px;
            border: 1px solid var(--fn3-border-color);
        }

        .fn3-carousel-card-text {
            font-size: 0.95em;
            color: var(--fn3-text-secondary);
            line-height: 1.5;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
            .fn3-carousel-testimonials-section {
                gap: 0;
                padding: 8px 10px;
            }

            .fn3-carousel-cards-container {
                gap: 15px;
            }

            .fn3-carousel-cards-wrapper {
                gap: 15px;
            }

            .fn3-carousel-card {
                min-width: 240px;
            }
        }




        .fn3-testimonials-section {
            text-align: center;
            margin-top: 60px;
            margin-bottom: 60px;
            padding: 0 10px;
        }

        .fn3-testimonials-heading {
            font-size: 2.2em;
            font-weight: 800;
            color: var(--fn3-text-primary);
            margin-bottom: 35px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 25px;
            justify-content: center;
        }

        .fn3-testimonial-card {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-lg);
            padding: 0;
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            overflow: hidden;
            transition: var(--fn3-transition-medium);
            text-decoration: none;
        }

        .fn3-testimonial-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: var(--fn3-shadow-lg);
        }

        .fn3-testimonial-card:hover .fn3-play-overlay {
            background-color: rgba(0, 0, 0, 0.6);
        }

        .fn3-testimonial-card:hover .fn3-youtube-icon {
            transform: scale(1.1);
        }

        .fn3-testimonial-thumbnail {
            width: 100%;
            height: 180px;
            object-fit: cover;
            display: block;
            border-top-left-radius: var(--fn3-radius-lg);
            border-top-right-radius: var(--fn3-radius-lg);
        }

        .fn3-play-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 180px;
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            border-top-left-radius: var(--fn3-radius-lg);
            border-top-right-radius: var(--fn3-radius-lg);
            transition: var(--fn3-transition-fast);
            cursor: pointer;
        }

        .fn3-youtube-icon {
            color: #FF0000;
            font-size: 3.2em;
            cursor: pointer;
            filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.4));
            transition: var(--fn3-transition-fast);
        }

        .fn3-testimonial-content {
            padding: 18px;
            width: 100%;
            box-sizing: border-box;
        }

        .fn3-testimonial-title {
            font-size: 1.1em;
            font-weight: 700;
            color: var(--fn3-text-primary);
            margin-bottom: 6px;
            text-align: left;
            width: 100%;
        }

        .fn3-testimonial-name {
            font-size: 0.9em;
            color: var(--fn3-text-secondary);
            margin-bottom: 8px;
            text-align: left;
            width: 100%;
        }

        .fn3-star-rating {
            color: var(--fn3-accent-yellow);
            font-size: 0.95em;
            margin-bottom: 10px;
            text-align: left;
            width: 100%;
        }

        .fn3-star-rating svg {
            margin-right: 2px;
        }

        .fn3-watch-on {
            font-size: 0.85em;
            color: var(--fn3-text-tertiary);
            display: flex;
            align-items: center;
            gap: 5px;
            text-align: left;
            width: 100%;
        }

        .fn3-watch-youtube-icon {
            color: #FF0000;
            font-size: 1.05em;
        }

        .fn3-limited-spots-section {
            background-color: var(--fn3-bg-primary);
            border: 3px solid var(--fn3-error-red);
            border-radius: var(--fn3-radius-lg);
            padding: 35px 25px;
            text-align: center;
            margin: 50px auto 60px auto;
            max-width: 650px;
            box-shadow: 0 8px 25px rgba(220, 53, 69, 0.2);
            position: relative;
        }

        .fn3-limited-spots-heading {
            font-size: 2em;
            font-weight: 800;
            color: var(--fn3-error-red);
            margin-bottom: 20px;
            line-height: 1.25;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-limited-spots-heading .fn3-heading-icon {
            color: var(--fn3-error-red);
            font-size: 1.4em;
            margin-bottom: 10px;
        }

        .fn3-limited-spots-text {
            font-size: 1.1em;
            color: var(--fn3-text-secondary);
            margin-bottom: 12px;
            line-height: 1.5;
        }

        .fn3-limited-spots-text .fn3-highlight-text {
            color: var(--fn3-error-red);
            font-weight: 700;
        }

        .fn3-about-mentor-section {
            text-align: center;
            margin-top: 60px;
            margin-bottom: 80px;
            padding: 0 15px;
        }

        .fn3-about-mentor-heading {
            font-size: 2.2em;
            font-weight: 800;
            color: var(--fn3-text-primary);
            margin-bottom: 10px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-about-mentor-subheading {
            font-size: 1.1em;
            color: var(--fn3-text-secondary);
            margin-bottom: 45px;
            font-style: italic;
        }

        .fn3-mentor-details-layout {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 35px;
            align-items: flex-start;
        }

        .fn3-mentor-image-container {
            background-color: var(--fn3-card-bg-alt);
            border-radius: var(--fn3-radius-lg);
            padding: 12px;
            box-shadow: var(--fn3-shadow-lg);
            border: 1px solid var(--fn3-border-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            flex-basis: 300px;
            flex-shrink: 0;
        }

        .fn3-mentor-image {
            max-width: 100%;
            width: 270px;
            height: auto;
            border-radius: var(--fn3-radius-md);
            display: block;
            margin-bottom: -35px;
            position: relative;
            z-index: 1;
            box-shadow: var(--fn3-shadow-md);
        }

        .fn3-mentor-caption {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-md);
            padding: 15px 18px;
            width: calc(100% - 25px);
            max-width: 250px;
            text-align: center;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            border: 1px solid var(--fn3-border-color);
            box-shadow: var(--fn3-shadow-sm);
        }

        .fn3-mentor-caption-name {
            font-size: 1.2em;
            font-weight: 700;
            color: var(--fn3-accent-yellow-dark);
            margin-bottom: 5px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-mentor-caption-role,
        .fn3-mentor-caption-specialty {
            font-size: 0.9em;
            color: var(--fn3-text-secondary);
            margin: 2px 0;
            line-height: 1.3;
        }

        .fn3-mentor-caption-specialty {
            font-weight: 600;
            color: var(--fn3-accent-teal);
        }

        .fn3-mentor-text-content {
            flex: 1;
            min-width: 350px;
            text-align: left;
            padding-top: 12px;
        }

        .fn3-mentor-paragraph {
            font-size: 1em;
            color: var(--fn3-text-secondary);
            margin-bottom: 18px;
            line-height: 1.7;
        }

        .fn3-mentor-struggle {
            font-weight: 600;
            color: var(--fn3-accent-yellow-dark);
            border-left: 3px solid var(--fn3-accent-yellow);
            padding-left: 10px;
            margin-left: -10px;
        }

        .fn3-mentor-list {
            list-style: none;
            padding: 0;
            margin-bottom: 20px;
        }

        .fn3-mentor-list li {
            display: flex;
            align-items: flex-start;
            font-size: 1em;
            color: var(--fn3-text-primary);
            margin-bottom: 10px;
        }

        .fn3-mentor-check {
            color: var(--fn3-success-green);
            font-size: 1.1em;
            margin-right: 10px;
            flex-shrink: 0;
            margin-top: 2px;
        }

        .fn3-my-mission-card {
            background: var(--fn3-bg-secondary);
            color: var(--fn3-text-primary);
            border-radius: var(--fn3-radius-lg);
            padding: 25px 30px;
            margin-top: 45px;
            max-width: 750px;
            margin-left: auto;
            margin-right: auto;
            box-shadow: var(--fn3-shadow-md);
            border-left: 5px solid var(--fn3-accent-teal);
        }

        .fn3-my-mission-heading {
            font-size: 1.6em;
            font-weight: 800;
            margin-bottom: 12px;
            font-family: var(--fn3-font-secondary);
            color: var(--fn3-accent-teal);
        }

        .fn3-my-mission-quote {
            font-size: 1.2em;
            font-style: italic;
            line-height: 1.5;
            font-weight: 500;
            color: var(--fn3-text-secondary);
        }

        .fn3-quote-highlight {
            font-weight: 700;
            color: var(--fn3-accent-teal);
        }

        .fn3-faq-section {
            text-align: center;
            margin-top: 60px;
            margin-bottom: 80px;
            padding: 0 15px;
        }

        .fn3-faq-heading {
            font-size: 2.2em;
            font-weight: 800;
            color: var(--fn3-text-primary);
            margin-bottom: 35px;
            font-family: var(--fn3-font-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
        }

        .fn3-faq-heading .fn3-heading-icon {
            color: var(--fn3-accent-yellow);
            font-size: 1.05em;
        }

        .fn3-faq-item {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-md);
            margin-bottom: 15px;
            box-shadow: var(--fn3-shadow-sm);
            border: 1px solid var(--fn3-border-color);
            overflow: hidden;
            max-width: 750px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .fn3-faq-item.open {
            border-color: var(--fn3-border-color-accent);
            box-shadow: var(--fn3-shadow-md);
        }

        .fn3-faq-question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 25px;
            font-size: 1.15em;
            font-weight: 600;
            color: var(--fn3-text-primary);
            cursor: pointer;
            transition: background-color 0.2s ease;
        }

        .fn3-faq-question:hover {
            background-color: var(--fn3-bg-secondary);
        }

        .fn3-faq-arrow {
            font-size: 1em;
            color: var(--fn3-accent-yellow);
            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }

        .fn3-faq-item.open .fn3-faq-arrow {
            transform: rotate(180deg);
        }

        .fn3-faq-answer {
            padding: 0 25px;
            font-size: 1em;
            color: var(--fn3-text-secondary);
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out, padding-bottom 0.5s ease-in-out;
            line-height: 1.7;
        }

        .fn3-faq-answer p {
            margin-top: 0;
            margin-bottom: 1em;
        }

        .fn3-faq-answer p:last-child {
            margin-bottom: 0;
        }

        .fn3-faq-item.open .fn3-faq-answer {
            max-height: 1000px;
            padding-bottom: 20px;
        }

        .fn3-sticky-register-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            max-width: 100vw;
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.1);
            border-top: 2px solid var(--fn3-accent-yellow);
            transition: all 0.3s ease;
            color: var(--fn3-text-primary);
            box-sizing: border-box;
        }

        .fn3-sticky-register-now-button {
            background: linear-gradient(to right, var(--fn3-accent-yellow), var(--fn3-accent-yellow-light));
            color: #000000 !important;
            padding: 12px 20px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9em;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            white-space: nowrap;
            flex-shrink: 0;
        }

        .fn3-sticky-timer-section {
            color: var(--fn3-accent-yellow);
            text-align: left;
        }

        .fn3-sticky-offer-ends {
            font-size: 0.9em;
            font-weight: 500;
        }

        .fn3-sticky-countdown {
            font-size: 1.2em;
            font-weight: 700;
        }

        .fn3-sticky-logo-section {
            display: flex;
            align-items: center;
            color: var(--fn3-text-primary);
        }

        .fn3-sticky-logo-icon {
            color: var(--fn3-accent-yellow);
            margin-right: 8px;
            font-size: 1.2em;
        }

        .fn3-sticky-logo-text {
            font-size: 1.1em;
            font-weight: 600;
        }



        .fn3-sticky-register-now-button:hover {
            background: linear-gradient(to right, var(--fn3-accent-yellow-light), var(--fn3-accent-yellow)) !important;
            color: #000000 !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 192, 0, 0.4);
        }

        .fn3-footer {
            width: 100%;
            text-align: center;
            padding: 40px 20px 25px 20px;
            margin-top: 60px;
            margin-bottom: 80px;
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            border-top: 1px solid #D0D0D0;
            color: #333333;
            font-size: 0.9em;
            position: relative;
            z-index: 1;
            transition: all 0.3s ease;
        }

        .fn3-footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .fn3-footer p {
            margin-bottom: 8px;
            line-height: 1.6;
            font-weight: 500;
        }

        .fn3-footer p:last-child {
            margin-bottom: 0;
        }

        @media (max-width: 992px) {
            .fn3-main-title {
                font-size: clamp(2.4em, 5.5vw, 3.5em);
            }

            .fn3-two-column-layout,
            .fn3-mentor-details-layout {
                flex-direction: column;
                align-items: center;
                gap: 40px;
            }

            .fn3-left-column,
            .fn3-right-column,
            .fn3-mentor-text-content {
                min-width: unset;
                width: 100%;
                max-width: 600px;
            }

            .fn3-mentor-image-container {
                flex-basis: auto;
                width: 100%;
                max-width: 380px;
            }

            .fn3-mentor-image {
                width: 100%;
                max-width: 330px;
            }

            .fn3-struggle-heading,
            .fn3-learn-heading,
            .fn3-for-you-heading,
            .fn3-testimonials-heading,
            .fn3-about-mentor-heading,
            .fn3-problem-heading,
            .fn3-bonus-heading,
            .fn3-real-coaches-heading,
            .fn3-limited-spots-heading,
            .fn3-faq-heading {
                font-size: clamp(1.9em, 4.5vw, 2.4em);
            }

            .fn3-struggle-item,
            .fn3-imagine-text,
            .fn3-for-you-item {
                font-size: 1.05em;
            }

            .fn3-register-button {
                font-size: clamp(1em, 2.8vw, 1.3em);
                padding: 16px 30px;
            }

            .fn3-testimonial-grid {
                grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            }

            .fn3-carousel-nav {
                font-size: 2.3em;
            }
        }

        @media (max-width: 768px) {
            .fn3-sticky-register-bar {
                padding: 10px 15px;
                flex-wrap: wrap;
                gap: 8px;
            }

            .fn3-sticky-timer-section {
                order: 1;
                flex: 1;
                min-width: 120px;
            }

            .fn3-sticky-logo-section {
                order: 2;
                flex: 1;
                justify-content: center;
                min-width: 100px;
            }

            .fn3-sticky-register-now-button {
                order: 3;
                padding: 8px 16px;
                font-size: 0.8em;
                flex-shrink: 0;
            }

            .fn3-footer {
                margin-bottom: 100px;
            }
        }

        @media (max-width: 480px) {
            .fn3-sticky-register-bar {
                flex-direction: column;
                text-align: center;
                padding: 8px 10px;
            }

            .fn3-sticky-timer-section,
            .fn3-sticky-logo-section {
                margin-bottom: 5px;
            }

            .fn3-sticky-register-now-button {
                width: calc(100% - 20px);
                margin-top: 5px;
            }
        }

        @media (max-width: 768px) {
            .fn3-webinar-details-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
        }

        @media (max-width: 600px) {
            .fn3-main-title {
                font-size: clamp(1.9em, 6.5vw, 2.6em);
            }

            .fn3-top-banner {
                padding: 10px 20px;
                font-size: 1em;
            }

            .fn3-media-logos {
                flex-direction: column;
                gap: 20px;
                padding: 25px;
            }

            .fn3-media-logo {
                max-height: 35px;
            }

            .fn3-struggle-heading,
            .fn3-learn-heading,
            .fn3-for-you-heading,
            .fn3-testimonials-heading,
            .fn3-about-mentor-heading,
            .fn3-problem-heading,
            .fn3-bonus-heading,
            .fn3-real-coaches-heading,
            .fn3-limited-spots-heading,
            .fn3-faq-heading {
                font-size: clamp(1.7em, 5.5vw, 2.1em);
                margin-bottom: 35px;
            }

            .fn3-learn-grid-section,
            .fn3-webinar-details-grid,
            .fn3-bonus-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .fn3-learn-card,
            .fn3-detail-item,
            .fn3-bonus-item {
                padding: 20px;
            }

            .fn3-card-icon {
                font-size: 2.8em;
            }

            .fn3-card-title {
                font-size: 1.3em;
            }

            .fn3-my-mission-quote {
                font-size: 1.1em;
            }

            .fn3-mentor-image-container {
                width: 100%;
                max-width: 300px;
            }

            .fn3-mentor-image {
                margin-bottom: -35px;
            }

            .fn3-mentor-caption {
                font-size: 0.85em;
                padding: 12px;
            }

            .fn3-mentor-text-content {
                min-width: unset;
            }

            .fn3-limited-spots-section {
                padding: 30px 20px;
            }

            .fn3-limited-spots-heading {
                font-size: 1.9em;
            }

            .fn3-faq-question {
                font-size: 1.05em;
                padding: 16px 20px;
            }

            .fn3-faq-answer {
                padding: 0 20px;
                font-size: 0.95em;
            }

            .fn3-faq-item.open .fn3-faq-answer {
                padding-bottom: 18px;
            }

            .fn3-register-button {
                width: 100%;
                text-align: center;
                justify-content: center;
            }

            .fn3-centered-button {
                width: 100%;
            }

            .fn3-carousel-nav {
                display: none;
            }

            .fn3-carousel-cards-container {
                padding: 0 10px 20px 10px;
            }

            .fn3-carousel-card {
                min-width: 240px;
            }

            .fn3-testimonial-thumbnail {
                height: 160px;
            }

            .fn3-play-overlay {
                height: 160px;
            }

            .fn3-youtube-icon {
                font-size: 2.8em;
            }
        }

        @media (max-width: 768px) {
            .fn3-sticky-register-bar {
                padding: 12px 15px;
                flex-wrap: wrap;
                gap: 10px;
            }

            .fn3-sticky-timer-section {
                order: 1;
                flex: 1;
            }

            .fn3-sticky-logo-section {
                order: 2;
                flex: 1;
                justify-content: center;
            }

            .fn3-sticky-register-now-button {
                order: 3;
                padding: 10px 20px;
                font-size: 0.9em;
            }

            .fn3-footer {
                margin-bottom: 100px;
            }
        }

        @media (max-width: 480px) {
            .fn3-sticky-register-bar {
                flex-direction: column;
                text-align: center;
                padding: 10px 15px;
            }

            .fn3-sticky-timer-section,
            .fn3-sticky-logo-section {
                margin-bottom: 8px;
            }

            .fn3-sticky-register-now-button {
                width: 100%;
                margin-top: 5px;
            }
        }
            `,
            html: `
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet">
          <div class="fn3-page-container">
        <main class="fn3-main-content">
            <section class="fn3-main-content-section">
                <!-- Top Banner -->
                <header class="fn3-top-banner">
                    <p class="fn3-banner-text">Leads and Sales Automation Workshop</p>
                </header>

                <!-- Hero Content -->
                <div class="fn3-hero-content">
                    <div class="fn3-heading-section">
                        <p class="fn3-sub-heading">Unblock: 3-Hour LIVE webinar Uncovers...</p>
                        <h1 class="fn3-main-title">
                            Build a 6-Figure Health & Wellness Coaching Business Using AI – Without Offline Meetings
                        </h1>
                    </div>

                    <div class="fn3-two-column-layout">
                        <div class="fn3-left-column">
                            <div class="fn3-speaker-award-image-container">
                                <img src="https://placehold.co/600x400/E0E0E0/777777?text=Speaker+Award"
                                    alt="Chirag Chhabra receiving award" class="fn3-speaker-award-image" />
                            </div>

                            <div class="fn3-speaker-info-card">
                                <h2 class="fn3-speaker-name">Chirag Chhabra</h2>
                                <p class="fn3-speaker-detail">
                                    <i class="fas fa-users fn3-detail-icon"></i>
                                    Trained 1000+ Coaches and Affiliate Marketers
                                </p>
                                <p class="fn3-speaker-detail">
                                    <i class="fas fa-star fn3-detail-icon"></i>
                                    Rated 4.9/5
                                </p>
                            </div>

                            <h3 class="fn3-webinar-details-heading">Webinar Details</h3>

                        <div class="fn3-webinar-details-grid">
    <div class="fn3-detail-item">
        <svg class="fn3-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.997 14.993h-1.994V7.007h1.994v9.986zM13 12.5h-2V7h2v5.5z"/>
        </svg>
        <p class="fn3-item-label">Duration</p>
        <p class="fn3-item-value">2 hours</p>
    </div>
    <div class="fn3-detail-item">
        <svg class="fn3-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <p class="fn3-item-label">Date</p>
        <p class="fn3-item-value">Upcoming Date</p>
    </div>
    <div class="fn3-detail-item">
        <svg class="fn3-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <p class="fn3-item-label">Language</p>
        <p class="fn3-item-value">Hindi & English</p>
    </div>
    <div class="fn3-detail-item">
        <svg class="fn3-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
            <path d="M23 7l-7 5 7 5V7z"></path>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
        <p class="fn3-item-label">Venue</p>
        <p class="fn3-item-value">Zoom</p>
    </div>
</div>
                        </div>

                        <div class="fn3-right-column">
                            <h3 class="fn3-why-attend-heading">
                                <i class="fas fa-lightbulb fn3-heading-icon"></i> Why Attend This Workshop?
                            </h3>

                            <div class="fn3-benefit-list">
                                <div class="fn3-benefit-item">
                                    <i class="fas fa-check-circle fn3-checkmark"></i>
                                    Break free from the constant hustle of chasing clients and still feeling stuck.
                                </div>
                                <div class="fn3-benefit-item">
                                    <i class="fas fa-check-circle fn3-checkmark"></i>
                                    No Tech Skills Needed | No Funnel Knowledge Required
                                </div>
                                <div class="fn3-benefit-item">
                                    <i class="fas fa-check-circle fn3-checkmark"></i>
                                    Discover why your current efforts aren't bringing results – and what to do instead.
                                </div>
                                <div class="fn3-benefit-item">
                                    <i class="fas fa-check-circle fn3-checkmark"></i>
                                    Build your dream coaching business without tech overwhelm, confusion, or burnout.
                                </div>
                                <div class="fn3-benefit-item">
                                    <i class="fas fa-check-circle fn3-checkmark"></i>
                                    Finally feel in control of your growth, income, and impact – without ads, funnels,
                                    or cold messages.
                                </div>
                                <div class="fn3-benefit-item">
                                    <i class="fas fa-check-circle fn3-checkmark"></i>
                                    Learn a simple yet powerful system that gets you results from Day 1 (without complex
                                    automations, paid tools, or boring theory).
                                </div>
                            </div>

                            <button class="fn3-register-button">
                                Register For Free
                            </button>

                            <p class="fn3-disclaimer">This free workshop will show you how to do exactly that.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="fn3-featured-section">
                <div class="fn3-featured-in-label">Featured in</div>
                <div class="fn3-media-logos">
                    <img src="https://placehold.co/150x50/E0E0E0/777777?text=Dailyhunt" alt="Dailyhunt"
                        class="fn3-media-logo" />
                    <img src="https://placehold.co/150x50/E0E0E0/777777?text=Hindustan+Times" alt="Hindustan Times"
                        class="fn3-media-logo" />
                    <img src="https://placehold.co/150x50/E0E0E0/777777?text=The+Print" alt="The Print"
                        class="fn3-media-logo" />
                    <img src="https://placehold.co/150x50/E0E0E0/777777?text=Business+Standard" alt="Business Standard"
                        class="fn3-media-logo" />
                </div>
            </section>

            <section class="fn3-struggle-section">
                <h2 class="fn3-struggle-heading">
                    <i class="fas fa-exclamation-triangle fn3-heading-icon"></i> STOP STRUGGLING TO FIND CLIENTS
                </h2>
                <div class="fn3-struggle-list">
                    <div class="fn3-struggle-item">
                        <i class="fas fa-times-circle fn3-cross-icon"></i> Tried posting on Instagram, but nothing
                        converts?
                    </div>
                    <div class="fn3-struggle-item">
                        <i class="fas fa-times-circle fn3-cross-icon"></i> Done with cold DMs and random content?
                    </div>
                    <div class="fn3-struggle-item">
                        <i class="fas fa-times-circle fn3-cross-icon"></i> Feel like you're meant for more, but tech
                        holds you back?
                    </div>
                </div>

                <p class="fn3-imagine-text">
                    Now imagine waking up to <span class="fn3-highlight-text">100+ quality leads a day</span>, reaching
                    out to work with you
                    – <span class="fn3-highlight-text">without paid ads, without DMing, and without begging.</span>
                </p>

                <p class="fn3-workshop-promise">
                    This free workshop will show you how to do exactly that.
                </p>
                <button class="fn3-register-button">
                    Register For Free
                </button>
            </section>

            <section class="fn3-learn-section">
                <div class="fn3-learn-separator"></div>
                <h3 class="fn3-learn-heading">
                    <i class="fas fa-check-circle fn3-learn-check-icon"></i> In Just 2 hours, You Will Learn:
                </h3>
            </section>

            <section class="fn3-learn-grid-section">
                <div class="fn3-learn-card">
                    <span class="fn3-card-icon">
                        <i class="fas fa-fire"></i>
                    </span>
                    <h4 class="fn3-card-title">100 Leads A Day Formula</h4>
                    <div class="fn3-progress-bar">
                        <div class="fn3-progress-fill" style="width: 95%"></div>
                    </div>
                    <p class="fn3-card-description">A plug-and-play AI method that brings in leads daily using FREE
                        tools</p>
                </div>
                <div class="fn3-learn-card">
                    <span class="fn3-card-icon">
                        <i class="fas fa-heart"></i>
                    </span>
                    <h4 class="fn3-card-title">No-Objection Sales Framework</h4>
                    <div class="fn3-progress-bar">
                        <div class="fn3-progress-fill" style="width: 90%"></div>
                    </div>
                    <p class="fn3-card-description">Close high-ticket clients (even if you hate selling)</p>
                </div>
                <div class="fn3-learn-card">
                    <span class="fn3-card-icon">
                        <i class="fas fa-gem"></i>
                    </span>
                    <h4 class="fn3-card-title">USP Builder Blueprint</h4>
                    <div class="fn3-progress-bar">
                        <div class="fn3-progress-fill" style="width: 85%"></div>
                    </div>
                    <p class="fn3-card-description">Craft a powerful personal brand that makes you stand out instantly
                    </p>
                </div>
                <div class="fn3-learn-card">
                    <span class="fn3-card-icon">
                        <i class="fas fa-cog"></i>
                    </span>
                    <h4 class="fn3-card-title">Funnels & Content Automation Setup</h4>
                    <div class="fn3-progress-bar">
                        <div class="fn3-progress-fill" style="width: 92%"></div>
                    </div>
                    <p class="fn3-card-description">No tech needed. Watch us build your system live in real time</p>
                </div>
                <div class="fn3-learn-card">
                    <span class="fn3-card-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </span>
                    <h4 class="fn3-card-title">Social Media Strategy for Coaches</h4>
                    <div class="fn3-progress-bar">
                        <div class="fn3-progress-fill" style="width: 88%"></div>
                    </div>
                    <p class="fn3-card-description">We show you what to post, when, and how to get leads without going
                        viral</p>
                </div>
            </section>

            <button class="fn3-register-button fn3-centered-button">
                Register For Free
            </button>

            <section class="fn3-for-you-section">
                <h3 class="fn3-for-you-heading"><i class="fas fa-fire fn3-heading-icon"></i> This Is For You If:</h3>
                <div class="fn3-for-you-list">
                    <div class="fn3-for-you-item">
                        <i class="fas fa-check-circle fn3-for-you-check"></i> You're a Coach, Therapist, Yoga
                        Instructor, or Nutritionist
                    </div>
                    <div class="fn3-for-you-item">
                        <i class="fas fa-check-circle fn3-for-you-check"></i> You want to automate your lead generation
                        and sales
                    </div>
                    <div class="fn3-for-you-item">
                        <i class="fas fa-check-circle fn3-for-you-check"></i> You're stuck offline or doing random stuff
                        online without results
                    </div>
                    <div class="fn3-for-you-item">
                        <i class="fas fa-check-circle fn3-for-you-check"></i> You've never used a landing page or funnel
                        before
                    </div>
                </div>
            </section>

            <section class="fn3-problem-section">
                <h2 class="fn3-problem-heading">
                    <span class="fn3-problem-icon"><i class="fas fa-lightbulb"></i></span> Your Current Problem is NOT
                    Your Content — It's Your System.
                </h2>
                <p class="fn3-problem-text">You don't need more likes or reels.</p>
                <p class="fn3-problem-text">You need a system that brings leads and clients on autopilot.</p>
                <p class="fn3-problem-text fn3-problem-bold">And that's exactly what we're going to build together.</p>
                <button class="fn3-register-button fn3-centered-button fn3-spacing-top">
                    Register For Free
                </button>
            </section>

            <section class="fn3-bonus-section">
                <h3 class="fn3-bonus-heading"><i class="fas fa-gift fn3-heading-icon"></i> BONUS (ONLY FOR LIVE
                    ATTENDEES)</h3>
                <div class="fn3-bonus-grid">
                    <div class="fn3-bonus-item">
                        <i class="fas fa-gift fn3-bonus-item-icon"></i>
                        <p class="fn3-bonus-item-text">AI Funnel Template</p>
                    </div>
                    <div class="fn3-bonus-item">
                        <i class="fas fa-gift fn3-bonus-item-icon"></i>
                        <p class="fn3-bonus-item-text">Social Media Content Calendar</p>
                    </div>
                    <div class="fn3-bonus-item">
                        <i class="fas fa-gift fn3-bonus-item-icon"></i>
                        <p class="fn3-bonus-item-text">High-Converting Lead Magnet Blueprint</p>
                    </div>
                    <div class="fn3-bonus-item">
                        <i class="fas fa-gift fn3-bonus-item-icon"></i>
                        <p class="fn3-bonus-item-text">No-Objection Sales Script</p>
                    </div>
                </div>
                <div class="fn3-bonus-exclusive-access">
                    <i class="fas fa-gift fn3-bonus-item-icon"></i>
                    <p class="fn3-bonus-item-text">Exclusive Lifetime Community Access</p>
                </div>

                <p class="fn3-bonus-giveaway">
                    <i class="fas fa-gift fn3-bonus-giveaway-icon"></i> Plus: Surprise Giveaway for First 50
                    Registrations
                </p>

                <button class="fn3-register-button fn3-centered-button fn3-spacing-top">
                    Register For Free
                </button>
            </section>

            <section class="fn3-real-coaches-section">
                <h2 class="fn3-real-coaches-heading">
                    <i class="fas fa-star fn3-heading-icon"></i> Real Coaches. Real Results
                </h2>
                <div class="fn3-real-coaches-testimonials">
                    <div class="fn3-coach-testimonial-card">
                        <p class="fn3-coach-quote">I was stuck for 8 months with no clients. After this workshop, I got
                            37 leads in 3 days!</p>
                        <div class="fn3-coach-info">
                            <i class="fas fa-user-circle fn3-coach-avatar-placeholder"></i>
                            <div>
                                <p class="fn3-coach-name">Aarti Mehra</p>
                                <p class="fn3-coach-role">Nutrition Coach</p>
                            </div>
                        </div>
                    </div>
                    <div class="fn3-coach-testimonial-card">
                        <p class="fn3-coach-quote">Finally understood how to position and sell my offer without being
                            salesy.</p>
                        <div class="fn3-coach-info">
                            <i class="fas fa-user-circle fn3-coach-avatar-placeholder"></i>
                            <div>
                                <p class="fn3-coach-name">Rohan Kapoor</p>
                                <p class="fn3-coach-role">Holistic Trainer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="fn3-carousel-testimonials-section">
                <div class="fn3-carousel-cards-container">
                    <div class="fn3-carousel-cards-wrapper">
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET KHUSHBOO</h4>
                            <p class="fn3-carousel-card-subtitle">Digital Marketer</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Khushboo" alt="Khushboo"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Closing High Ticket Offers with Email Daily</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET SHIVAY</h4>
                            <p class="fn3-carousel-card-subtitle">Business Consultant</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Shivay" alt="Shivay"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">AFTER - Closing Multi Lakh Every Month</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET AKSHAY</h4>
                            <p class="fn3-carousel-card-subtitle">Founder</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Akshay" alt="Akshay"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Closed his 2nd Deal Within 10 days</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET PRIYA</h4>
                            <p class="fn3-carousel-card-subtitle">Yoga Instructor</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Priya" alt="Priya"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Automated her client onboarding successfully</p>
                        </div>
                        <!-- Duplicate cards for seamless loop -->
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET KHUSHBOO</h4>
                            <p class="fn3-carousel-card-subtitle">Digital Marketer</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Khushboo" alt="Khushboo"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Closing High Ticket Offers with Email Daily</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET SHIVAY</h4>
                            <p class="fn3-carousel-card-subtitle">Business Consultant</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Shivay" alt="Shivay"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">AFTER - Closing Multi Lakh Every Month</p>
                        </div>
                    </div>
                </div>
            </section>

            <button class="fn3-register-button fn3-centered-button fn3-spacing-top">
                Register For Free
            </button>

            <section class="fn3-testimonials-section">
                <h2 class="fn3-testimonials-heading">Hear From Coaches Like You</h2>
                <div class="fn3-testimonial-grid">
                    <a href="#" class="fn3-testimonial-card">
                        <img src="https://placehold.co/300x200/E0E0E0/777777?text=Testimonial+1" alt="Testimonial 1"
                            class="fn3-testimonial-thumbnail" />
                        <div class="fn3-play-overlay"><i class="fab fa-youtube fn3-youtube-icon"></i></div>
                        <div class="fn3-testimonial-content">
                            <p class="fn3-testimonial-title">"This One Decision Made A..."</p>
                            <p class="fn3-testimonial-name">Arun Chhabra</p>
                            <div class="fn3-star-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                    class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p class="fn3-watch-on">Watch on <i class="fab fa-youtube fn3-watch-youtube-icon"></i></p>
                        </div>
                    </a>
                    <a href="#" class="fn3-testimonial-card">
                        <img src="https://placehold.co/300x200/E0E0E0/777777?text=Testimonial+2" alt="Testimonial 2"
                            class="fn3-testimonial-thumbnail" />
                        <div class="fn3-play-overlay"><i class="fab fa-youtube fn3-youtube-icon"></i></div>
                        <div class="fn3-testimonial-content">
                            <p class="fn3-testimonial-title">"7 Figure Sales Closer, Shyre..."</p>
                            <p class="fn3-testimonial-name">Shreyank Jain</p>
                            <div class="fn3-star-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                    class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p class="fn3-watch-on">Watch on <i class="fab fa-youtube fn3-watch-youtube-icon"></i></p>
                        </div>
                    </a>
                    <a href="#" class="fn3-testimonial-card">
                        <img src="https://placehold.co/300x200/E0E0E0/777777?text=Testimonial+3" alt="Testimonial 3"
                            class="fn3-testimonial-thumbnail" />
                        <div class="fn3-play-overlay"><i class="fab fa-youtube fn3-youtube-icon"></i></div>
                        <div class="fn3-testimonial-content">
                            <p class="fn3-testimonial-title">"Sandeep's 6-Figure Digital..."</p>
                            <p class="fn3-testimonial-name">Sandeep</p>
                            <div class="fn3-star-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                    class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p class="fn3-watch-on">Watch on <i class="fab fa-youtube fn3-watch-youtube-icon"></i></p>
                        </div>
                    </a>
                    <a href="#" class="fn3-testimonial-card">
                        <img src="https://placehold.co/300x200/E0E0E0/777777?text=Testimonial+4" alt="Testimonial 4"
                            class="fn3-testimonial-thumbnail" />
                        <div class="fn3-play-overlay"><i class="fab fa-youtube fn3-youtube-icon"></i></div>
                        <div class="fn3-testimonial-content">
                            <p class="fn3-testimonial-title">"Shivan's Game Changing Moment!"</p>
                            <p class="fn3-testimonial-name">Shivani</p>
                            <div class="fn3-star-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                    class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p class="fn3-watch-on">Watch on <i class="fab fa-youtube fn3-watch-youtube-icon"></i></p>
                        </div>
                    </a>
                    <a href="#" class="fn3-testimonial-card">
                        <img src="https://placehold.co/300x200/E0E0E0/777777?text=Testimonial+5" alt="Testimonial 5"
                            class="fn3-testimonial-thumbnail" />
                        <div class="fn3-play-overlay"><i class="fab fa-youtube fn3-youtube-icon"></i></div>
                        <div class="fn3-testimonial-content">
                            <p class="fn3-testimonial-title">"From Dream to Award! Jyotsana's Win"</p>
                            <p class="fn3-testimonial-name">Jyotsana</p>
                            <div class="fn3-star-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                    class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p class="fn3-watch-on">Watch on <i class="fab fa-youtube fn3-watch-youtube-icon"></i></p>
                        </div>
                    </a>
                </div>
            </section>

            <button class="fn3-register-button fn3-centered-button fn3-spacing-top">
                Register For Free
            </button>

            <section class="fn3-limited-spots-section">
                <h3 class="fn3-limited-spots-heading">
                    <i class="fas fa-lock fn3-heading-icon"></i> Limited Spots Available (Fills Fast Every Time)
                </h3>
                <p class="fn3-limited-spots-text">
                    This workshop is <span class="fn3-highlight-text">LIVE, practical, and results-focused.</span>
                </p>
                <p class="fn3-limited-spots-text">
                    We're only accepting <span class="fn3-highlight-text">serious, committed coaches.</span>
                </p>
                <p class="fn3-limited-spots-text">
                    Once it's full — it's full.
                </p>
                <button class="fn3-register-button fn3-centered-button fn3-spacing-top">
                    Secure Your Spot Now
                </button>
            </section>

            <section class="fn3-about-mentor-section">
                <h2 class="fn3-about-mentor-heading">About Mentor</h2>
                <p class="fn3-about-mentor-subheading">& The Tremendous Change She'll Help Bring In Your Life</p>
                <div class="fn3-mentor-details-layout">
                    <div class="fn3-mentor-image-container">
                        <img src="https://placehold.co/300x350/E0E0E0/777777?text=Chirag+Chhabra"
                            alt="Chirag Chhabra - Mentor" class="fn3-mentor-image" />
                        <div class="fn3-mentor-caption">
                            <p class="fn3-mentor-caption-name">Chirag Chhabra</p>
                            <p class="fn3-mentor-caption-role">Leading Business Coach</p>
                            <p class="fn3-mentor-caption-specialty">Quality leads Specialist</p>
                        </div>
                    </div>

                    <div class="fn3-mentor-text-content">
                        <p class="fn3-mentor-paragraph">
                            A Growth-Focused Coach With Real Business Experience Chirag isn't just another trainer. He's
                            a business coach who has worked directly with hundreds of health and wellness coaches to
                            build systems that actually bring clients – without chasing, begging, or burning out.
                        </p>
                        <p class="fn3-mentor-paragraph fn3-mentor-struggle">
                            He knows your struggles. No leads. No sales. No clarity.
                        </p>
                        <p class="fn3-mentor-paragraph">
                            That's exactly why he created this challenge – to help you stop guessing and start growing.
                        </p>
                        <p class="fn3-mentor-paragraph">
                            Over the past few years, he's helped solo coaches:
                        </p>
                        <ul class="fn3-mentor-list">
                            <li>
                                <i class="fas fa-check-circle fn3-mentor-check"></i>
                                Get 100+ leads a day (without paid ads)
                            </li>
                            <li>
                                <i class="fas fa-check-circle fn3-mentor-check"></i>
                                Automate their sales process
                            </li>
                            <li>
                                <i class="fas fa-check-circle fn3-mentor-check"></i>
                                Close high-ticket offers with confidence
                            </li>
                            <li>
                                <i class="fas fa-check-circle fn3-mentor-check"></i>
                                Build six-figure businesses – even with zero tech background.
                            </li>
                        </ul>
                        <p class="fn3-mentor-paragraph">This isn't theory. It's real-world business. And Chirag is here
                            to work with you, step-by-step, until you get the results you deserve.</p>
                    </div>
                </div>
                <div class="fn3-my-mission-card">
                    <h4 class="fn3-my-mission-heading">My Mission</h4>
                    <p class="fn3-my-mission-quote">"To help every coach turn their passion into profit – <span
                            class="fn3-quote-highlight">using simple tools, proven frameworks, and automation that
                            works.</span>"</p>
                </div>
            </section>

            <section class="fn3-faq-section">
                <h2 class="fn3-faq-heading"><i class="fas fa-question-circle fn3-heading-icon"></i> Frequently Asked
                    Questions</h2>
                <div class="fn3-faq-container">
                    <div class="fn3-faq-item">
                        <div class="fn3-faq-question" onclick="toggleFaq(0)">
                            Do I need to be tech-savvy?
                            <i class="fas fa-angle-down fn3-faq-arrow"></i>
                        </div>
                        <div class="fn3-faq-answer">
                            <p>No, absolutely not! This workshop is designed for coaches of all tech levels. We'll show
                                you how to build your system live, step-by-step, with no prior tech or funnel knowledge
                                required.</p>
                        </div>
                    </div>

                    <div class="fn3-faq-item">
                        <div class="fn3-faq-question" onclick="toggleFaq(1)">
                            Is this workshop really free?
                            <i class="fas fa-angle-down fn3-faq-arrow"></i>
                        </div>
                        <div class="fn3-faq-answer">
                            <p>Yes, it's 100% free. We believe in providing immense value upfront to help coaches
                                succeed. Our goal is to demonstrate the power of our methods, hoping you'll consider our
                                advanced programs in the future if you find this workshop beneficial.</p>
                        </div>
                    </div>

                    <div class="fn3-faq-item">
                        <div class="fn3-faq-question" onclick="toggleFaq(2)">
                            What if I miss the live session?
                            <i class="fas fa-angle-down fn3-faq-arrow"></i>
                        </div>
                        <div class="fn3-faq-answer">
                            <p>We highly recommend attending live to get the most out of the interactive sessions, Q&A,
                                and exclusive live bonuses. However, a replay might be available for a limited time for
                                registered participants. Details will be shared during the workshop.</p>
                        </div>
                    </div>

                    <div class="fn3-faq-item">
                        <div class="fn3-faq-question" onclick="toggleFaq(3)">
                            How long is the workshop?
                            <i class="fas fa-angle-down fn3-faq-arrow"></i>
                        </div>
                        <div class="fn3-faq-answer">
                            <p>The workshop is scheduled for 2 hours. We'll cover all the core concepts and practical
                                steps within this timeframe, plus a Q&A session.</p>
                        </div>
                    </div>

                    <div class="fn3-faq-item">
                        <div class="fn3-faq-question" onclick="toggleFaq(4)">
                            What results can I expect?
                            <i class="fas fa-angle-down fn3-faq-arrow"></i>
                        </div>
                        <div class="fn3-faq-answer">
                            <p>By implementing the strategies from this workshop, you can expect to generate more
                                qualified leads, understand how to automate parts of your sales process, and build a
                                stronger brand presence online, ultimately leading to more clients and business growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="fn3-footer">
            <div class="fn3-footer-content">
                <p>&copy; 2024 Chirag Chhabra Coaching. All Rights Reserved.</p>
                <p>Empowering Health & Wellness Coaches to Achieve Excellence and Automation.</p>
            </div>
        </footer>

        <div class="fn3-sticky-register-bar">
            <div class="fn3-sticky-timer-section">
                <span class="fn3-sticky-offer-ends">Offer Ends in</span><br />
                <span class="fn3-sticky-countdown" id="countdown">5:00 Mins</span>
            </div>
            <div class="fn3-sticky-logo-section">
                <i class="fas fa-gem fn3-sticky-logo-icon"></i>
                <span class="fn3-sticky-logo-text">Kohinoor</span>
            </div>
            <button class="fn3-sticky-register-now-button" onclick="registerNow()">
                Register Now
            </button>
        </div>
    </div>
            `,
            js: `
                 // FAQ Toggle Functionality
        function toggleFaq(index) {
            const faqItems = document.querySelectorAll('.fn3-faq-item');
            const currentItem = faqItems[index];
            const isOpen = currentItem.classList.contains('open');

            // Close all FAQ items
            faqItems.forEach(item => item.classList.remove('open'));

            // Open the clicked item if it wasn't already open
            if (!isOpen) {
                currentItem.classList.add('open');
            }
        }

        // Countdown Timer
        let timeLeft = 5 * 60; // 5 minutes in seconds

        function updateCountdown() {
            if (timeLeft <= 0) {
                document.getElementById('countdown').textContent = "0:00 Mins";
                return;
            }

            const mins = Math.floor(timeLeft / 60);
            const secs = timeLeft % 60;
           
            timeLeft--;
        }

        // Update countdown every second
        setInterval(updateCountdown, 1000);

        // Registration button functionality
        function registerNow() {
            alert("Registration functionality would be implemented here!");
            // In a real implementation, this would redirect to a registration form
            // or open a modal with registration details
        }

        // Add click handlers to all register buttons
        document.addEventListener('DOMContentLoaded', function () {
            const registerButtons = document.querySelectorAll('.fn3-register-button');
            registerButtons.forEach(button => {
                button.addEventListener('click', registerNow);
            });

            // Progress bar animation on scroll
            const progressBars = document.querySelectorAll('.fn3-progress-fill');
            const observerOptions = {
                threshold: 0.5,
                rootMargin: '0px'
            };

            const progressObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBar = entry.target;
                        const width = progressBar.style.width;
                        progressBar.style.width = '0%';
                        setTimeout(() => {
                            progressBar.style.width = width;
                        }, 100);
                    }
                });
            }, observerOptions);

            progressBars.forEach(bar => progressObserver.observe(bar));
        });

        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add some basic animations on scroll
        const animateOnScrollElements = document.querySelectorAll('.fn3-learn-card, .fn3-coach-testimonial-card, .fn3-carousel-card');

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        animateOnScrollElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            scrollObserver.observe(el);
        });
            `
        },
        ...landing_page1,
           'four_template': {
            name: 'Make form strach',
            description: 'A friendly welcome page with a clean design and clear CTA',
            thumbnail: 'https://placehold.co/400x300/16a34a/ffffff?text=+Blank&font=inter&size=50&style=flate',
                 css: `
           * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      
      body {
        background-color: #f8f9fa;
        color: #333;
        line-height: 1.6;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }
      
      .blank-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        text-align: center;
        padding: 40px 20px;
      }
      
      .blank-page h1 {
        font-size: 36px;
        margin-bottom: 20px;
        color: #2c3e50;
      }
      
      .blank-page p {
        font-size: 18px;
        color: #7f8c8d;
        max-width: 600px;
        margin-bottom: 30px;
      }
      
      .start-button {
        background-color: #3498db;
        color: white;
        padding: 12px 30px;
        border-radius: 5px;
        text-decoration: none;
        font-weight: 500;
        transition: background-color 0.3s;
      }
      
      .start-button:hover {
        background-color: #2980b9;
      }
            `,
            html: `
           <div class="blank-page">
      <div class="container">
        <h1>Start Building Your Website</h1>
        <p>This is a blank canvas ready for your creativity. Use the editor tools to add components, customize styles, and create your perfect website.</p>
        <a href="#" class="start-button">Get Started</a>
      </div>
    </div>
            `,
            js: `// Add any specific JavaScript functionality here if needed`
           },
    'five_template': {
            name: '3 funnal landing page',
            description: 'A friendly welcome page with a clean design and clear CTA',
            thumbnail: 'https://placehold.co/400x300/16a34a/ffffff?text=+Blank&font=inter&size=50&style=flate',
                 css: `
        :root {
            --fn3-bg-primary: #0F0F0F;
            --fn3-bg-secondary: #1A1A1A;
            --fn3-bg-accent-soft: #1F1A0F;
            --fn3-card-bg: #1E1E1E;
            --fn3-card-bg-alt: #262626;
            --fn3-text-primary: #FFFFFF;
            --fn3-text-secondary: #B8B8B8;
            --fn3-text-tertiary: #8A8A8A;
            --fn3-text-on-accent: #000000;
            --fn3-text-on-dark-accent: #FFD700;
            --fn3-accent-yellow: #FFD700;
            --fn3-accent-yellow-light: #FFE55C;
            --fn3-accent-yellow-dark: #FFC000;
            --fn3-accent-teal: #00D4D4;
            --fn3-accent-teal-light: #66E6E6;
            --fn3-success-green: #32CD32;
            --fn3-error-red: #FF4757;
            --fn3-info-blue: #3B82F6;
            --fn3-border-color: #333333;
            --fn3-border-color-strong: #404040;
            --fn3-border-color-accent: var(--fn3-accent-yellow);
            --fn3-font-primary: 'Poppins', sans-serif;
            --fn3-font-secondary: 'Montserrat', sans-serif;
            --fn3-shadow-xs: 0 1px 3px rgba(255, 255, 255, 0.05);
            --fn3-shadow-sm: 0 3px 8px rgba(255, 255, 255, 0.07);
            --fn3-shadow-md: 0 6px 15px rgba(255, 255, 255, 0.08);
            --fn3-shadow-lg: 0 10px 30px rgba(255, 255, 255, 0.1);
            --fn3-shadow-accent: 0 6px 15px rgba(255, 215, 0, 0.3);
            --fn3-shadow-accent-hover: 0 8px 20px rgba(255, 215, 0, 0.4);
            --fn3-radius-sm: 6px;
            --fn3-radius-md: 10px;
            --fn3-radius-lg: 14px;
            --fn3-radius-pill: 50px;
            --fn3-transition-fast: all 0.2s ease-in-out;
            --fn3-transition-medium: all 0.3s ease-in-out;
            --fn3-transition-long: all 0.5s ease-in-out;
            --fn3-accent-yellow-rgb: 255, 215, 0;
            --fn3-accent-teal-rgb: 0, 212, 212;
            --fn3-card-bg-rgb: 30, 30, 30;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: var(--fn3-font-primary);
            background-color: var(--fn3-bg-primary);
            color: var(--fn3-text-primary);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
        }

        .fn3-page-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 15px;
            box-sizing: border-box;
            background-image:
                radial-gradient(circle at 5% 5%, rgba(var(--fn3-accent-teal-rgb), 0.08) 0%, transparent 25%),
                radial-gradient(circle at 95% 95%, rgba(var(--fn3-accent-yellow-rgb), 0.08) 0%, transparent 25%);
        }

        .fn3-main-content {
            max-width: 1200px;
            width: 100%;
            padding: 0 15px;
            box-sizing: border-box;
        }

        .fn3-top-banner {
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
            color: #000000;
            padding: 12px 30px;
            border-radius: var(--fn3-radius-pill);
            margin: 20px auto 40px auto;
            font-weight: 700;
            font-size: 1em;
            text-align: center;
            box-shadow:
                0 8px 25px rgba(255, 215, 0, 0.4),
                0 0 20px rgba(255, 215, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
            transition: var(--fn3-transition-medium);
            position: relative;
            z-index: 5;
            width: fit-content;
            border: 2px solid rgba(255, 215, 0, 0.5);
            text-shadow: none;
        }

        .fn3-top-banner:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow:
                0 12px 35px rgba(255, 215, 0, 0.5),
                0 0 30px rgba(255, 215, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
            background: linear-gradient(135deg, #FFA500 0%, #FFD700 50%, #FFA500 100%);
        }

        .fn3-banner-text {
            margin: 0;
            color: #000000;
            font-weight: 800;
            letter-spacing: 0.5px;
        }


        .fn3-main-content-section {
            position: relative;
            text-align: center;
            color: var(--fn3-text-primary);
            z-index: 1;
            overflow: hidden;
            background: transparent;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .fn3-heading-section {
            text-align: center;
            margin-bottom: 50px;
        }

        .fn3-sub-heading {
            color: var(--fn3-accent-teal);
            font-size: 1.1em;
            font-weight: 600;
            margin-bottom: 12px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
        }

        .fn3-main-title {
            color: var(--fn3-text-primary);
            font-family: var(--fn3-font-secondary);
            font-size: clamp(2.2em, 5vw, 3.5em);
            line-height: 1.15;
            font-weight: 800;
        }

        .fn3-register-button {
            background: linear-gradient(to right, var(--fn3-accent-yellow), var(--fn3-accent-yellow-light)) !important;
            color: #000000 !important;
            padding: 14px 30px;
            border: none;
            border-radius: var(--fn3-radius-pill);
            font-size: clamp(1em, 2.2vw, 1.2em);
            font-weight: 700;
            font-family: var(--fn3-font-secondary);
            cursor: pointer;
            transition: var(--fn3-transition-medium);
            box-shadow: var(--fn3-shadow-accent);
            letter-spacing: 0.03em;
            text-transform: uppercase;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            position: relative;
            overflow: hidden;
            transform-style: preserve-3d;
        }

        .fn3-register-button:hover {
            background: linear-gradient(to right, var(--fn3-accent-yellow-light), var(--fn3-accent-yellow)) !important;
            color: #000000 !important;
            transform: translateY(-4px) scale(1.03);
            box-shadow: var(--fn3-shadow-accent-hover);
        }

        .fn3-centered-button {
            display: block;
            margin: 0 auto 50px auto;
            width: fit-content;
        }

        .fn3-spacing-top {
            margin-top: 35px;
        }

        .fn3-real-coaches-section {
            text-align: center;
            margin-bottom: 60px;
            padding: 35px 25px;
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-lg);
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
        }

        .fn3-real-coaches-testimonials {
            display: flex;
            gap: 25px;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 20px;
        }


        .fn3-two-column-layout {
            display: flex;
            gap: 35px;
            justify-content: center;
            flex-wrap: wrap;
            align-items: flex-start;
            margin-top: 45px;
            margin-bottom: 60px;
        }

        .fn3-left-column,
        .fn3-right-column {
            flex: 1;
            min-width: 320px;
            padding: 5px 0;
        }

        .fn3-speaker-award-image-container {
            background-color: var(--fn3-card-bg-alt);
            padding: 10px;
            border-radius: var(--fn3-radius-lg);
            margin-bottom: 20px;
            overflow: hidden;
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
        }

        .fn3-speaker-award-image {
            max-width: 100%;
            height: auto;
            display: block;
            border-radius: var(--fn3-radius-md);
        }

        .fn3-speaker-info-card {
            background-color: var(--fn3-card-bg);
            padding: 20px;
            border-radius: var(--fn3-radius-lg);
            margin-bottom: 25px;
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
            transition: var(--fn3-transition-medium);
        }

        .fn3-speaker-info-card:hover {
            transform: translateY(-5px) scale(1.01);
            box-shadow: var(--fn3-shadow-lg);
            border-color: var(--fn3-border-color-accent);
        }

        .fn3-speaker-name {
            font-size: 1.8em;
            font-weight: 700;
            margin-bottom: 15px;
            color: var(--fn3-text-primary);
            font-family: var(--fn3-font-secondary);
        }

        .fn3-speaker-detail {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            color: var(--fn3-text-secondary);
            font-size: 1em;
        }

        .fn3-detail-icon {
            margin-right: 12px;
            color: var(--fn3-accent-yellow);
            font-size: 1.2em;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .fn3-webinar-details-heading {
            font-size: 1.5em;
            font-weight: 700;
            margin-bottom: 20px;
            color: var(--fn3-text-primary);
            font-family: var(--fn3-font-secondary);
        }

        .fn3-webinar-details-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }

        .fn3-detail-item {
            background-color: var(--fn3-card-bg-alt);
            padding: 20px 15px;
            border-radius: var(--fn3-radius-md);
            text-align: center;
            box-shadow: var(--fn3-shadow-sm);
            border: 1px solid var(--fn3-border-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: var(--fn3-transition-medium);
            min-height: 120px;
        }

        .fn3-detail-item:hover {
            transform: translateY(-5px);
            box-shadow: var(--fn3-shadow-md);
            border-color: var(--fn3-border-color-accent);
        }

        .fn3-item-icon {
            font-size: 1.8em;
            color: var(--fn3-accent-teal);
            margin-bottom: 10px;
        }

        .fn3-item-label {
            font-size: 0.9em;
            color: var(--fn3-text-tertiary);
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }

        .fn3-item-value {
            font-weight: 600;
            font-size: 1.1em;
            color: var(--fn3-text-primary);
            line-height: 1.2;
        }

        .fn3-why-attend-heading {
            font-size: 1.7em;
            font-weight: 700;
            margin-bottom: 25px;
            color: var(--fn3-text-primary);
            display: flex;
            align-items: center;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-heading-icon {
            color: var(--fn3-accent-yellow);
            font-size: 1.3em;
            margin-right: 12px;
        }

        .fn3-benefit-list {
            list-style: none;
            padding: 0;
            margin: 0 0 25px 0;
            text-align: left;
        }

        .fn3-benefit-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 15px;
            font-size: 1em;
            color: var(--fn3-text-secondary);
            line-height: 1.5;
        }

        .fn3-checkmark {
            color: var(--fn3-success-green);
            font-size: 1.2em;
            margin-right: 10px;
            flex-shrink: 0;
            line-height: 1.4;
            margin-top: 2px;
        }

        .fn3-disclaimer {
            text-align: center;
            font-size: 0.9em;
            color: var(--fn3-text-tertiary);
            margin-top: 20px;
            line-height: 1.5;
        }

        .fn3-featured-section {
            position: relative;
            z-index: 10;
            margin-top: 60px;
            text-align: center;
            margin-bottom: 60px;
            padding: 35px 15px;
            background-color: var(--fn3-bg-secondary);
            border-radius: var(--fn3-radius-lg);
        }

        .fn3-featured-in-label {
            background: linear-gradient(to right, var(--fn3-accent-teal), var(--fn3-accent-teal-light));
            color: var(--fn3-text-on-accent);
            padding: 8px 25px;
            border-radius: var(--fn3-radius-pill);
            font-weight: 600;
            font-size: 0.9em;
            display: inline-block;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            z-index: 1;
            box-shadow: 0 5px 15px rgba(var(--fn3-accent-teal-rgb), 0.25);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .fn3-media-logos {
            border-radius: var(--fn3-radius-lg);
            padding: 25px 30px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            gap: 25px;
        }

        .fn3-media-logo {
            max-height: 35px;
            filter: grayscale(0.7) opacity(0.75);
            transition: var(--fn3-transition-fast);
        }

        .fn3-media-logo:hover {
            filter: none;
            opacity: 1;
            transform: scale(1.1);
        }

        .fn3-struggle-section {
            text-align: center;
            margin-bottom: 60px;
            padding: 35px 15px;
            background-color: var(--fn3-bg-accent-soft);
            border-radius: var(--fn3-radius-lg);
        }

        .fn3-struggle-heading {
            color: var(--fn3-accent-yellow-dark);
            font-size: 2em;
            font-weight: 800;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-struggle-heading .fn3-heading-icon {
            color: var(--fn3-error-red);
            font-size: 1.1em;
        }

        .fn3-struggle-list {
            list-style: none;
            padding: 0;
            margin-bottom: 35px;
            display: inline-block;
            text-align: left;
        }

        .fn3-struggle-item {
            display: flex;
            align-items: center;
            color: var(--fn3-text-secondary);
            font-size: 1.05em;
            margin-bottom: 15px;
            font-weight: 500;
        }

        .fn3-struggle-item .fn3-cross-icon {
            color: var(--fn3-error-red);
            font-size: 1.2em;
            margin-right: 12px;
            flex-shrink: 0;
        }

        .fn3-imagine-text {
            font-size: 1.4em;
            color: var(--fn3-text-primary);
            margin-bottom: 25px;
            line-height: 1.5;
            font-weight: 500;
        }

        .fn3-highlight-text {
            color: var(--fn3-accent-yellow-dark);
            font-weight: 700;
        }

        .fn3-workshop-promise {
            font-size: 1em;
            color: var(--fn3-text-secondary);
            margin-bottom: 30px;
            font-style: italic;
        }

        .fn3-learn-section {
            text-align: center;
            margin-top: 50px;
            margin-bottom: 50px;
        }

        .fn3-learn-separator {
            width: 70%;
            max-width: 500px;
            height: 1.5px;
            background: linear-gradient(to right, transparent, var(--fn3-accent-teal), transparent);
            margin: 0 auto 35px auto;
            opacity: 0.6;
        }

        .fn3-learn-heading {
            font-size: 2.2em;
            font-weight: 800;
            color: var(--fn3-text-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-learn-check-icon {
            color: var(--fn3-success-green);
            font-size: 0.85em;
        }

        .fn3-learn-grid-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin-bottom: 60px;
            padding: 0 10px;
        }

        .fn3-learn-card {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-lg);
            padding: 25px;
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: var(--fn3-transition-medium);
        }

        .fn3-learn-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: var(--fn3-shadow-lg);
            border-color: var(--fn3-border-color-accent);
        }

        .fn3-card-icon {
            font-size: 3em;
            color: var(--fn3-accent-yellow);
            margin-bottom: 15px;
            transition: var(--fn3-transition-fast);
        }

        .fn3-learn-card:hover .fn3-card-icon {
            transform: scale(1.1);
            color: var(--fn3-accent-yellow-light);
        }

        .fn3-card-title {
            font-size: 1.25em;
            font-weight: 700;
            color: var(--fn3-text-primary);
            margin-bottom: 10px;
            line-height: 1.25;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-progress-bar {
            width: 100%;
            height: 4px;
            background-color: var(--fn3-border-color);
            border-radius: 2px;
            margin: 10px 0;
            overflow: hidden;
            position: relative;
        }

        .fn3-progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--fn3-accent-yellow), var(--fn3-accent-teal));
            border-radius: 2px;
            transition: width 2s ease-in-out;
            position: relative;
        }

        .fn3-card-description {
            font-size: 0.95em;
            color: var(--fn3-text-secondary);
            line-height: 1.5;
        }

        .fn3-for-you-section {
            text-align: center;
            margin-bottom: 60px;
            padding: 35px 15px;
            background-color: var(--fn3-bg-secondary);
            border-radius: var(--fn3-radius-lg);
        }

        .fn3-for-you-heading {
            font-size: 2em;
            font-weight: 800;
            color: var(--fn3-text-primary);
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-for-you-heading .fn3-heading-icon {
            color: var(--fn3-accent-yellow);
            font-size: 1.1em;
        }

        .fn3-for-you-list {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }

        .fn3-for-you-item {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-md);
            padding: 15px 25px;
            width: 100%;
            max-width: 600px;
            text-align: left;
            display: flex;
            align-items: center;
            font-size: 1.05em;
            color: var(--fn3-text-primary);
            box-shadow: var(--fn3-shadow-sm);
            border: 1px solid var(--fn3-border-color);
            transition: var(--fn3-transition-medium);
        }

        .fn3-for-you-item:hover {
            transform: translateX(5px) scale(1.01);
            box-shadow: var(--fn3-shadow-md);
            border-left: 4px solid var(--fn3-accent-yellow);
        }

        .fn3-for-you-check {
            color: var(--fn3-success-green);
            font-size: 1.1em;
            margin-right: 12px;
            flex-shrink: 0;
        }

        .fn3-problem-section {
            text-align: center;
            margin-bottom: 60px;
            padding: 35px 25px;
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-lg);
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
        }

        .fn3-problem-heading {
            font-size: clamp(1.6em, 3.5vw, 2.1em);
            font-weight: 700;
            color: var(--fn3-text-primary);
            margin-bottom: 25px;
            line-height: 1.3;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 6px 10px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-problem-icon {
            color: var(--fn3-accent-yellow);
            font-size: 1.1em;
        }

        .fn3-problem-highlight {
            color: var(--fn3-accent-yellow-dark);
        }

        .fn3-problem-text {
            font-size: 1.05em;
            color: var(--fn3-text-secondary);
            margin-bottom: 15px;
            line-height: 1.5;
        }

        .fn3-problem-bold {
            font-weight: 700;
            color: var(--fn3-text-primary);
            font-size: 1.1em;
        }

        .fn3-bonus-section {
            text-align: center;
            margin-bottom: 60px;
            padding: 35px 25px;
            border: 2px dashed var(--fn3-accent-yellow);
            border-radius: var(--fn3-radius-lg);
            background-color: var(--fn3-bg-accent-soft);
        }

        .fn3-bonus-heading {
            font-size: 2em;
            font-weight: 800;
            color: var(--fn3-text-primary);
            margin-bottom: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-coach-testimonial-card {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-lg);
            padding: 25px;
            max-width: 420px;
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
            text-align: left;
            position: relative;
            transition: var(--fn3-transition-medium);
            overflow: hidden;
        }

        .fn3-coach-testimonial-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--fn3-shadow-lg);
            border-color: var(--fn3-border-color-accent);
        }

        .fn3-coach-testimonial-card::before {
            content: '"';
            position: absolute;
            top: 12px;
            left: 18px;
            font-size: 3em;
            color: var(--fn3-accent-yellow);
            opacity: 0.3;
            font-family: serif;
            line-height: 1;
        }

        .fn3-coach-quote {
            font-size: 1.1em;
            font-style: italic;
            color: var(--fn3-text-secondary);
            margin-bottom: 20px;
            line-height: 1.5;
            position: relative;
            padding-left: 5px;
        }

        .fn3-coach-info {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .fn3-coach-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--fn3-accent-yellow);
        }

        .fn3-coach-avatar-placeholder {
            font-size: 2.2em;
            color: var(--fn3-text-tertiary);
            border: 2px solid var(--fn3-border-color);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--fn3-bg-secondary);
        }

        .fn3-carousel-testimonials-section {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 60px;
            padding: 8px 0;
            overflow: hidden;
        }

        .fn3-carousel-nav {
            display: none;
        }

        .fn3-carousel-cards-container {
            display: flex;
            gap: 25px;
            overflow: hidden;
            width: 100%;
        }

        .fn3-carousel-cards-wrapper {
            display: flex;
            gap: 25px;
            animation: scrollCarousel 30s linear infinite;
            width: fit-content;
        }

        @keyframes scrollCarousel {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-50%);
            }
        }

        .fn3-carousel-cards-container:hover .fn3-carousel-cards-wrapper {
            animation-play-state: paused;
        }

        .fn3-carousel-card {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-lg);
            padding: 20px;
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
            min-width: 260px;
            text-align: center;
            flex-shrink: 0;
            transition: var(--fn3-transition-medium);
        }

        .fn3-carousel-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--fn3-shadow-lg);
        }

        .fn3-carousel-card-title {
            font-size: 1.3em;
            font-weight: 700;
            color: var(--fn3-accent-yellow-dark);
            margin-bottom: 5px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-carousel-card-subtitle {
            font-size: 0.85em;
            color: var(--fn3-text-tertiary);
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }

        .fn3-carousel-card-image {
            width: 100%;
            max-height: 160px;
            object-fit: cover;
            border-radius: var(--fn3-radius-md);
            margin-bottom: 12px;
            border: 1px solid var(--fn3-border-color);
        }

        .fn3-carousel-card-text {
            font-size: 0.95em;
            color: var(--fn3-text-secondary);
            line-height: 1.5;
        }

        .fn3-coach-name {
            font-size: 1.05em;
            font-weight: 700;
            color: var(--fn3-accent-yellow-dark);
            margin-bottom: 3px;
        }

        .fn3-coach-role {
            font-size: 0.85em;
            color: var(--fn3-text-tertiary);
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
            .fn3-carousel-testimonials-section {
                gap: 0;
                padding: 8px 10px;
            }

            .fn3-carousel-cards-container {
                gap: 15px;
            }

            .fn3-carousel-cards-wrapper {
                gap: 15px;
            }

            .fn3-carousel-card {
                min-width: 240px;
            }
        }





        .fn3-testimonials-section {
            text-align: center;
            margin-top: 60px;
            margin-bottom: 60px;
            padding: 0 10px;
        }

        .fn3-testimonials-heading {
            font-size: 2.2em;
            font-weight: 800;
            color: var(--fn3-text-primary);
            margin-bottom: 35px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 25px;
            justify-content: center;
        }

        .fn3-testimonial-card {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-lg);
            padding: 0;
            box-shadow: var(--fn3-shadow-md);
            border: 1px solid var(--fn3-border-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            overflow: hidden;
            transition: var(--fn3-transition-medium);
            text-decoration: none;
        }

        .fn3-testimonial-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: var(--fn3-shadow-lg);
        }

        .fn3-testimonial-card:hover .fn3-play-overlay {
            background-color: rgba(0, 0, 0, 0.6);
        }

        .fn3-testimonial-card:hover .fn3-youtube-icon {
            transform: scale(1.1);
        }

        .fn3-testimonial-thumbnail {
            width: 100%;
            height: 180px;
            object-fit: cover;
            display: block;
            border-top-left-radius: var(--fn3-radius-lg);
            border-top-right-radius: var(--fn3-radius-lg);
        }

        .fn3-play-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 180px;
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            border-top-left-radius: var(--fn3-radius-lg);
            border-top-right-radius: var(--fn3-radius-lg);
            transition: var(--fn3-transition-fast);
            cursor: pointer;
        }

        .fn3-youtube-icon {
            color: #FF0000;
            font-size: 3.2em;
            cursor: pointer;
            filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.4));
            transition: var(--fn3-transition-fast);
        }

        .fn3-testimonial-content {
            padding: 18px;
            width: 100%;
            box-sizing: border-box;
        }

        .fn3-testimonial-title {
            font-size: 1.1em;
            font-weight: 700;
            color: var(--fn3-text-primary);
            margin-bottom: 6px;
            text-align: left;
            width: 100%;
        }

        .fn3-testimonial-name {
            font-size: 0.9em;
            color: var(--fn3-text-secondary);
            margin-bottom: 8px;
            text-align: left;
            width: 100%;
        }

        .fn3-star-rating {
            color: var(--fn3-accent-yellow);
            font-size: 0.95em;
            margin-bottom: 10px;
            text-align: left;
            width: 100%;
        }

        .fn3-star-rating svg {
            margin-right: 2px;
        }

        .fn3-watch-on {
            font-size: 0.85em;
            color: var(--fn3-text-tertiary);
            display: flex;
            align-items: center;
            gap: 5px;
            text-align: left;
            width: 100%;
        }

        .fn3-watch-youtube-icon {
            color: #FF0000;
            font-size: 1.05em;
        }

        .fn3-limited-spots-section {
            background-color: var(--fn3-bg-primary);
            border: 3px solid var(--fn3-error-red);
            border-radius: var(--fn3-radius-lg);
            padding: 35px 25px;
            text-align: center;
            margin: 50px auto 60px auto;
            max-width: 650px;
            box-shadow: 0 8px 25px rgba(220, 53, 69, 0.2);
            position: relative;
        }

        .fn3-limited-spots-heading {
            font-size: 2em;
            font-weight: 800;
            color: var(--fn3-error-red);
            margin-bottom: 20px;
            line-height: 1.25;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-limited-spots-heading .fn3-heading-icon {
            color: var(--fn3-error-red);
            font-size: 1.4em;
            margin-bottom: 10px;
        }

        .fn3-limited-spots-text {
            font-size: 1.1em;
            color: var(--fn3-text-secondary);
            margin-bottom: 12px;
            line-height: 1.5;
        }

        .fn3-limited-spots-text .fn3-highlight-text {
            color: var(--fn3-error-red);
            font-weight: 700;
        }

        .fn3-about-mentor-section {
            text-align: center;
            margin-top: 60px;
            margin-bottom: 80px;
            padding: 0 15px;
        }

        .fn3-about-mentor-heading {
            font-size: 2.2em;
            font-weight: 800;
            color: var(--fn3-text-primary);
            margin-bottom: 10px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-about-mentor-subheading {
            font-size: 1.1em;
            color: var(--fn3-text-secondary);
            margin-bottom: 45px;
            font-style: italic;
        }

        .fn3-mentor-details-layout {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 35px;
            align-items: flex-start;
        }

        .fn3-mentor-image-container {
            background-color: var(--fn3-card-bg-alt);
            border-radius: var(--fn3-radius-lg);
            padding: 12px;
            box-shadow: var(--fn3-shadow-lg);
            border: 1px solid var(--fn3-border-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            flex-basis: 300px;
            flex-shrink: 0;
        }

        .fn3-mentor-image {
            max-width: 100%;
            width: 270px;
            height: auto;
            border-radius: var(--fn3-radius-md);
            display: block;
            margin-bottom: -35px;
            position: relative;
            z-index: 1;
            box-shadow: var(--fn3-shadow-md);
        }

        .fn3-mentor-caption {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-md);
            padding: 15px 18px;
            width: calc(100% - 25px);
            max-width: 250px;
            text-align: center;
            box-sizing: border-box;
            position: relative;
            z-index: 2;
            border: 1px solid var(--fn3-border-color);
            box-shadow: var(--fn3-shadow-sm);
        }

        .fn3-mentor-caption-name {
            font-size: 1.2em;
            font-weight: 700;
            color: var(--fn3-accent-yellow-dark);
            margin-bottom: 5px;
            font-family: var(--fn3-font-secondary);
        }

        .fn3-mentor-caption-role,
        .fn3-mentor-caption-specialty {
            font-size: 0.9em;
            color: var(--fn3-text-secondary);
            margin: 2px 0;
            line-height: 1.3;
        }

        .fn3-mentor-caption-specialty {
            font-weight: 600;
            color: var(--fn3-accent-teal);
        }

        .fn3-mentor-text-content {
            flex: 1;
            min-width: 350px;
            text-align: left;
            padding-top: 12px;
        }

        .fn3-mentor-paragraph {
            font-size: 1em;
            color: var(--fn3-text-secondary);
            margin-bottom: 18px;
            line-height: 1.7;
        }

        .fn3-mentor-struggle {
            font-weight: 600;
            color: var(--fn3-accent-yellow-dark);
            border-left: 3px solid var(--fn3-accent-yellow);
            padding-left: 10px;
            margin-left: -10px;
        }

        .fn3-mentor-list {
            list-style: none;
            padding: 0;
            margin-bottom: 20px;
        }

        .fn3-mentor-list li {
            display: flex;
            align-items: flex-start;
            font-size: 1em;
            color: var(--fn3-text-primary);
            margin-bottom: 10px;
        }

        .fn3-mentor-check {
            color: var(--fn3-success-green);
            font-size: 1.1em;
            margin-right: 10px;
            flex-shrink: 0;
            margin-top: 2px;
        }

        .fn3-my-mission-card {
            background: var(--fn3-bg-secondary);
            color: var(--fn3-text-primary);
            border-radius: var(--fn3-radius-lg);
            padding: 25px 30px;
            margin-top: 45px;
            max-width: 750px;
            margin-left: auto;
            margin-right: auto;
            box-shadow: var(--fn3-shadow-md);
            border-left: 5px solid var(--fn3-accent-teal);
        }

        .fn3-my-mission-heading {
            font-size: 1.6em;
            font-weight: 800;
            margin-bottom: 12px;
            font-family: var(--fn3-font-secondary);
            color: var(--fn3-accent-teal);
        }

        .fn3-my-mission-quote {
            font-size: 1.2em;
            font-style: italic;
            line-height: 1.5;
            font-weight: 500;
            color: var(--fn3-text-secondary);
        }

        .fn3-quote-highlight {
            font-weight: 700;
            color: var(--fn3-accent-teal);
        }

        .fn3-faq-section {
            text-align: center;
            margin-top: 60px;
            margin-bottom: 80px;
            padding: 0 15px;
        }

        .fn3-faq-heading {
            font-size: 2.2em;
            font-weight: 800;
            color: var(--fn3-text-primary);
            margin-bottom: 35px;
            font-family: var(--fn3-font-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
        }

        .fn3-faq-heading .fn3-heading-icon {
            color: var(--fn3-accent-yellow);
            font-size: 1.05em;
        }

        .fn3-faq-item {
            background-color: var(--fn3-card-bg);
            border-radius: var(--fn3-radius-md);
            margin-bottom: 15px;
            box-shadow: var(--fn3-shadow-sm);
            border: 1px solid var(--fn3-border-color);
            overflow: hidden;
            max-width: 750px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .fn3-faq-item.open {
            border-color: var(--fn3-border-color-accent);
            box-shadow: var(--fn3-shadow-md);
        }

        .fn3-faq-question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 25px;
            font-size: 1.15em;
            font-weight: 600;
            color: var(--fn3-text-primary);
            cursor: pointer;
            transition: background-color 0.2s ease;
        }

        .fn3-faq-question:hover {
            background-color: var(--fn3-bg-secondary);
        }

        .fn3-faq-arrow {
            font-size: 1em;
            color: var(--fn3-accent-yellow);
            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }

        .fn3-faq-item.open .fn3-faq-arrow {
            transform: rotate(180deg);
        }

        .fn3-faq-answer {
            padding: 0 25px;
            font-size: 1em;
            color: var(--fn3-text-secondary);
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out, padding-bottom 0.5s ease-in-out;
            line-height: 1.7;
        }

        .fn3-faq-answer p {
            margin-top: 0;
            margin-bottom: 1em;
        }

        .fn3-faq-answer p:last-child {
            margin-bottom: 0;
        }

        .fn3-faq-item.open .fn3-faq-answer {
            max-height: 1000px;
            padding-bottom: 20px;
        }

        .fn3-sticky-register-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            max-width: 100vw;
            background-color: rgba(30, 30, 30, 0.95);
            backdrop-filter: blur(10px);
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            box-shadow: 0 -4px 15px rgba(255, 255, 255, 0.1);
            border-top: 2px solid var(--fn3-accent-yellow);
            transition: all 0.3s ease;
            color: var(--fn3-text-primary);
            box-sizing: border-box;
        }

        .fn3-sticky-register-now-button {
            background: linear-gradient(to right, var(--fn3-accent-yellow), var(--fn3-accent-yellow-light));
            color: #000000 !important;
            padding: 12px 20px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9em;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            white-space: nowrap;
            flex-shrink: 0;
        }

        .fn3-sticky-timer-section {
            color: var(--fn3-accent-yellow);
            text-align: left;
        }

        .fn3-sticky-offer-ends {
            font-size: 0.9em;
            font-weight: 500;
        }

        .fn3-sticky-countdown {
            font-size: 1.2em;
            font-weight: 700;
        }

        .fn3-sticky-logo-section {
            display: flex;
            align-items: center;
            color: var(--fn3-text-primary);
        }

        .fn3-sticky-logo-icon {
            color: var(--fn3-accent-yellow);
            margin-right: 8px;
            font-size: 1.2em;
        }

        .fn3-sticky-logo-text {
            font-size: 1.1em;
            font-weight: 600;
        }



        .fn3-sticky-register-now-button:hover {
            background: linear-gradient(to right, var(--fn3-accent-yellow-light), var(--fn3-accent-yellow)) !important;
            color: #000000 !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 192, 0, 0.4);
        }

        .fn3-footer {
            width: 100%;
            text-align: center;
            padding: 40px 20px 25px 20px;
            margin-top: 60px;
            margin-bottom: 80px;
            background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
            border-top: 1px solid #333333;
            color: var(--fn3-text-secondary);
            font-size: 0.9em;
            position: relative;
            z-index: 1;
            transition: all 0.3s ease;
        }

        .fn3-footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .fn3-footer p {
            margin-bottom: 8px;
            line-height: 1.6;
            font-weight: 500;
        }

        .fn3-footer p:last-child {
            margin-bottom: 0;
        }

        @media (max-width: 992px) {
            .fn3-main-title {
                font-size: clamp(2.4em, 5.5vw, 3.5em);
            }

            .fn3-two-column-layout,
            .fn3-mentor-details-layout {
                flex-direction: column;
                align-items: center;
                gap: 40px;
            }

            .fn3-left-column,
            .fn3-right-column,
            .fn3-mentor-text-content {
                min-width: unset;
                width: 100%;
                max-width: 600px;
            }

            .fn3-mentor-image-container {
                flex-basis: auto;
                width: 100%;
                max-width: 380px;
            }

            .fn3-mentor-image {
                width: 100%;
                max-width: 330px;
            }

            .fn3-struggle-heading,
            .fn3-learn-heading,
            .fn3-for-you-heading,
            .fn3-testimonials-heading,
            .fn3-about-mentor-heading,
            .fn3-problem-heading,
            .fn3-bonus-heading,
            .fn3-real-coaches-heading,
            .fn3-limited-spots-heading,
            .fn3-faq-heading {
                font-size: clamp(1.9em, 4.5vw, 2.4em);
            }

            .fn3-struggle-item,
            .fn3-imagine-text,
            .fn3-for-you-item {
                font-size: 1.05em;
            }

            .fn3-register-button {
                font-size: clamp(1em, 2.8vw, 1.3em);
                padding: 16px 30px;
            }

            .fn3-testimonial-grid {
                grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            }

            .fn3-carousel-nav {
                font-size: 2.3em;
            }
        }

        @media (max-width: 768px) {
            .fn3-sticky-register-bar {
                padding: 10px 15px;
                flex-wrap: wrap;
                gap: 8px;
            }

            .fn3-sticky-timer-section {
                order: 1;
                flex: 1;
                min-width: 120px;
            }

            .fn3-sticky-logo-section {
                order: 2;
                flex: 1;
                justify-content: center;
                min-width: 100px;
            }

            .fn3-sticky-register-now-button {
                order: 3;
                padding: 8px 16px;
                font-size: 0.8em;
                flex-shrink: 0;
            }

            .fn3-footer {
                margin-bottom: 100px;
            }
        }

        @media (max-width: 480px) {
            .fn3-sticky-register-bar {
                flex-direction: column;
                text-align: center;
                padding: 8px 10px;
            }

            .fn3-sticky-timer-section,
            .fn3-sticky-logo-section {
                margin-bottom: 5px;
            }

            .fn3-sticky-register-now-button {
                width: calc(100% - 20px);
                margin-top: 5px;
            }
        }

        @media (max-width: 768px) {
            .fn3-webinar-details-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
        }

        @media (max-width: 600px) {
            .fn3-main-title {
                font-size: clamp(1.9em, 6.5vw, 2.6em);
            }

            .fn3-top-banner {
                padding: 10px 20px;
                font-size: 1em;
            }

            .fn3-media-logos {
                flex-direction: column;
                gap: 20px;
                padding: 25px;
            }

            .fn3-media-logo {
                max-height: 35px;
            }

            .fn3-struggle-heading,
            .fn3-learn-heading,
            .fn3-for-you-heading,
            .fn3-testimonials-heading,
            .fn3-about-mentor-heading,
            .fn3-problem-heading,
            .fn3-bonus-heading,
            .fn3-real-coaches-heading,
            .fn3-limited-spots-heading,
            .fn3-faq-heading {
                font-size: clamp(1.7em, 5.5vw, 2.1em);
                margin-bottom: 35px;
            }

            .fn3-learn-grid-section,
            .fn3-webinar-details-grid,
            .fn3-bonus-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .fn3-learn-card,
            .fn3-detail-item,
            .fn3-bonus-item {
                padding: 20px;
            }

            .fn3-card-icon {
                font-size: 2.8em;
            }

            .fn3-card-title {
                font-size: 1.3em;
            }

            .fn3-my-mission-quote {
                font-size: 1.1em;
            }

            .fn3-mentor-image-container {
                width: 100%;
                max-width: 300px;
            }

            .fn3-mentor-image {
                margin-bottom: -35px;
            }

            .fn3-mentor-caption {
                font-size: 0.85em;
                padding: 12px;
            }

            .fn3-mentor-text-content {
                min-width: unset;
            }

            .fn3-limited-spots-section {
                padding: 30px 20px;
            }

            .fn3-limited-spots-heading {
                font-size: 1.9em;
            }

            .fn3-faq-question {
                font-size: 1.05em;
                padding: 16px 20px;
            }

            .fn3-faq-answer {
                padding: 0 20px;
                font-size: 0.95em;
            }

            .fn3-faq-item.open .fn3-faq-answer {
                padding-bottom: 18px;
            }

            .fn3-register-button {
                width: 100%;
                text-align: center;
                justify-content: center;
            }

            .fn3-centered-button {
                width: 100%;
            }

            .fn3-carousel-nav {
                display: none;
            }

            .fn3-carousel-cards-container {
                padding: 0 10px 20px 10px;
            }

            .fn3-carousel-card {
                min-width: 240px;
            }

            .fn3-testimonial-thumbnail {
                height: 160px;
            }

            .fn3-play-overlay {
                height: 160px;
            }

            .fn3-youtube-icon {
                font-size: 2.8em;
            }
        }

        @media (max-width: 768px) {
            .fn3-sticky-register-bar {
                padding: 12px 15px;
                flex-wrap: wrap;
                gap: 10px;
            }

            .fn3-sticky-timer-section {
                order: 1;
                flex: 1;
            }

            .fn3-sticky-logo-section {
                order: 2;
                flex: 1;
                justify-content: center;
            }

            .fn3-sticky-register-now-button {
                order: 3;
                padding: 10px 20px;
                font-size: 0.9em;
            }

            .fn3-footer {
                margin-bottom: 100px;
            }
        }

        @media (max-width: 480px) {
            .fn3-sticky-register-bar {
                flex-direction: column;
                text-align: center;
                padding: 10px 15px;
            }

            .fn3-sticky-timer-section,
            .fn3-sticky-logo-section {
                margin-bottom: 8px;
            }

            .fn3-sticky-register-now-button {
                width: 100%;
                margin-top: 5px;
            }
        }
            `,
            html: `
         <div class="fn3-page-container">
        <main class="fn3-main-content">
            <section class="fn3-main-content-section">
                <!-- Top Banner -->
                <header class="fn3-top-banner">
                    <p class="fn3-banner-text">Leads and Sales Automation Workshop</p>
                </header>

                <!-- Hero Content -->
                <div class="fn3-hero-content">
                    <div class="fn3-heading-section">
                        <p class="fn3-sub-heading">Unblock: 3-Hour LIVE webinar Uncovers...</p>
                        <h1 class="fn3-main-title">
                            Build a 6-Figure Health & Wellness Coaching Business Using AI – Without Offline Meetings
                        </h1>
                    </div>

                    <div class="fn3-two-column-layout">
                        <div class="fn3-left-column">
                            <div class="fn3-speaker-award-image-container">
                                <img src="https://placehold.co/600x400/E0E0E0/777777?text=Speaker+Award"
                                    alt="Chirag Chhabra receiving award" class="fn3-speaker-award-image" />
                            </div>

                            <div class="fn3-speaker-info-card">
                                <h2 class="fn3-speaker-name">Chirag Chhabra</h2>
                                <p class="fn3-speaker-detail">
                                    <i class="fas fa-users fn3-detail-icon"></i>
                                    Trained 1000+ Coaches and Affiliate Marketers
                                </p>
                                <p class="fn3-speaker-detail">
                                    <i class="fas fa-star fn3-detail-icon"></i>
                                    Rated 4.9/5
                                </p>
                            </div>

                            <h3 class="fn3-webinar-details-heading">Webinar Details</h3>

                            <div class="fn3-webinar-details-grid">
                                <div class="fn3-detail-item">
                                    <img width="55" height="55" src="https://img.icons8.com/color/48/clock.png" alt="clock"/>
                                    <p class="fn3-item-label">Duration</p>
                                    <p class="fn3-item-value">2 hours</p>
                                </div>
                                <div class="fn3-detail-item">
                                    <img width="55" height="55"
                                        src="https://img.icons8.com/3d-fluency/100/calendar.png" alt="calendar"
                                        class="fn3-item-icon" />
                                    <p class="fn3-item-label">Date</p>
                                    <p class="fn3-item-value">Upcoming Date</p>
                                </div>
                                <div class="fn3-detail-item">
                                    <img width="50" height="50" src="https://img.icons8.com/cotton/64/globe.png"
                                        alt="globe" class="fn3-item-icon" />
                                    <p class="fn3-item-label">Language</p>
                                    <p class="fn3-item-value">Hindi & English</p>
                                </div>
                                <div class="fn3-detail-item">
                                    <img width="55" height="55" src="https://img.icons8.com/ios/50/228BE6/camera--v3.png" alt="camera--v3"/>
                                    <p class="fn3-item-label">Venue</p>
                                    <p class="fn3-item-value">Zoom</p>
                                </div>
                            </div>
                        </div>

                        <div class="fn3-right-column">
                            <h3 class="fn3-why-attend-heading">
                                <i class="fas fa-lightbulb fn3-heading-icon"></i> Why Attend This Workshop?
                            </h3>

                            <div class="fn3-benefit-list">
                                <div class="fn3-benefit-item">
                                    <i class="fas fa-check-circle fn3-checkmark"></i>
                                    Break free from the constant hustle of chasing clients and still feeling stuck.
                                </div>
                                <div class="fn3-benefit-item">
                                    <i class="fas fa-check-circle fn3-checkmark"></i>
                                    No Tech Skills Needed | No Funnel Knowledge Required
                                </div>
                                <div class="fn3-benefit-item">
                                    <i class="fas fa-check-circle fn3-checkmark"></i>
                                    Discover why your current efforts aren't bringing results – and what to do instead.
                                </div>
                                <div class="fn3-benefit-item">
                                    <i class="fas fa-check-circle fn3-checkmark"></i>
                                    Build your dream coaching business without tech overwhelm, confusion, or burnout.
                                </div>
                                <div class="fn3-benefit-item">
                                    <i class="fas fa-check-circle fn3-checkmark"></i>
                                    Finally feel in control of your growth, income, and impact – without ads, funnels,
                                    or cold messages.
                                </div>
                                <div class="fn3-benefit-item">
                                    <i class="fas fa-check-circle fn3-checkmark"></i>
                                    Learn a simple yet powerful system that gets you results from Day 1 (without complex
                                    automations, paid tools, or boring theory).
                                </div>
                            </div>

                            <button class="fn3-register-button">
                                Register For Free
                            </button>

                            <p class="fn3-disclaimer">This free workshop will show you how to do exactly that.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="fn3-featured-section">
                <div class="fn3-featured-in-label">Featured in</div>
                <div class="fn3-media-logos">
                    <img src="https://placehold.co/150x50/E0E0E0/777777?text=Dailyhunt" alt="Dailyhunt"
                        class="fn3-media-logo" />
                    <img src="https://placehold.co/150x50/E0E0E0/777777?text=Hindustan+Times" alt="Hindustan Times"
                        class="fn3-media-logo" />
                    <img src="https://placehold.co/150x50/E0E0E0/777777?text=The+Print" alt="The Print"
                        class="fn3-media-logo" />
                    <img src="https://placehold.co/150x50/E0E0E0/777777?text=Business+Standard" alt="Business Standard"
                        class="fn3-media-logo" />
                </div>
            </section>

            <section class="fn3-struggle-section">
                <h2 class="fn3-struggle-heading">
                    <i class="fas fa-exclamation-triangle fn3-heading-icon"></i> STOP STRUGGLING TO FIND CLIENTS
                </h2>
                <div class="fn3-struggle-list">
                    <div class="fn3-struggle-item">
                        <i class="fas fa-times-circle fn3-cross-icon"></i> Tried posting on Instagram, but nothing
                        converts?
                    </div>
                    <div class="fn3-struggle-item">
                        <i class="fas fa-times-circle fn3-cross-icon"></i> Done with cold DMs and random content?
                    </div>
                    <div class="fn3-struggle-item">
                        <i class="fas fa-times-circle fn3-cross-icon"></i> Feel like you're meant for more, but tech
                        holds you back?
                    </div>
                </div>

                <p class="fn3-imagine-text">
                    Now imagine waking up to <span class="fn3-highlight-text">100+ quality leads a day</span>, reaching
                    out to work with you
                    – <span class="fn3-highlight-text">without paid ads, without DMing, and without begging.</span>
                </p>

                <p class="fn3-workshop-promise">
                    This free workshop will show you how to do exactly that.
                </p>
                <button class="fn3-register-button">
                    Register For Free
                </button>
            </section>

            <section class="fn3-learn-section">
                <div class="fn3-learn-separator"></div>
                <h3 class="fn3-learn-heading">
                    <i class="fas fa-check-circle fn3-learn-check-icon"></i> In Just 2 hours, You Will Learn:
                </h3>
            </section>

            <section class="fn3-learn-grid-section">
                <div class="fn3-learn-card">
                    <span class="fn3-card-icon">
                        <i class="fas fa-fire"></i>
                    </span>
                    <h4 class="fn3-card-title">100 Leads A Day Formula</h4>
                    <div class="fn3-progress-bar">
                        <div class="fn3-progress-fill" style="width: 95%"></div>
                    </div>
                    <p class="fn3-card-description">A plug-and-play AI method that brings in leads daily using FREE
                        tools</p>
                </div>
                <div class="fn3-learn-card">
                    <span class="fn3-card-icon">
                        <i class="fas fa-heart"></i>
                    </span>
                    <h4 class="fn3-card-title">No-Objection Sales Framework</h4>
                    <div class="fn3-progress-bar">
                        <div class="fn3-progress-fill" style="width: 90%"></div>
                    </div>
                    <p class="fn3-card-description">Close high-ticket clients (even if you hate selling)</p>
                </div>
                <div class="fn3-learn-card">
                    <span class="fn3-card-icon">
                        <i class="fas fa-gem"></i>
                    </span>
                    <h4 class="fn3-card-title">USP Builder Blueprint</h4>
                    <div class="fn3-progress-bar">
                        <div class="fn3-progress-fill" style="width: 85%"></div>
                    </div>
                    <p class="fn3-card-description">Craft a powerful personal brand that makes you stand out instantly
                    </p>
                </div>
                <div class="fn3-learn-card">
                    <span class="fn3-card-icon">
                        <i class="fas fa-cog"></i>
                    </span>
                    <h4 class="fn3-card-title">Funnels & Content Automation Setup</h4>
                    <div class="fn3-progress-bar">
                        <div class="fn3-progress-fill" style="width: 92%"></div>
                    </div>
                    <p class="fn3-card-description">No tech needed. Watch us build your system live in real time</p>
                </div>
                <div class="fn3-learn-card">
                    <span class="fn3-card-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </span>
                    <h4 class="fn3-card-title">Social Media Strategy for Coaches</h4>
                    <div class="fn3-progress-bar">
                        <div class="fn3-progress-fill" style="width: 88%"></div>
                    </div>
                    <p class="fn3-card-description">We show you what to post, when, and how to get leads without going
                        viral</p>
                </div>
            </section>

            <button class="fn3-register-button fn3-centered-button">
                Register For Free
            </button>

            <section class="fn3-for-you-section">
                <h3 class="fn3-for-you-heading"><i class="fas fa-fire fn3-heading-icon"></i> This Is For You If:</h3>
                <div class="fn3-for-you-list">
                    <div class="fn3-for-you-item">
                        <i class="fas fa-check-circle fn3-for-you-check"></i> You're a Coach, Therapist, Yoga
                        Instructor, or Nutritionist
                    </div>
                    <div class="fn3-for-you-item">
                        <i class="fas fa-check-circle fn3-for-you-check"></i> You want to automate your lead generation
                        and sales
                    </div>
                    <div class="fn3-for-you-item">
                        <i class="fas fa-check-circle fn3-for-you-check"></i> You're stuck offline or doing random stuff
                        online without results
                    </div>
                    <div class="fn3-for-you-item">
                        <i class="fas fa-check-circle fn3-for-you-check"></i> You've never used a landing page or funnel
                        before
                    </div>
                </div>
            </section>

            <section class="fn3-problem-section">
                <h2 class="fn3-problem-heading">
                    <span class="fn3-problem-icon"><i class="fas fa-lightbulb"></i></span> Your Current Problem is NOT
                    Your Content — It's Your System.
                </h2>
                <p class="fn3-problem-text">You don't need more likes or reels.</p>
                <p class="fn3-problem-text">You need a system that brings leads and clients on autopilot.</p>
                <p class="fn3-problem-text fn3-problem-bold">And that's exactly what we're going to build together.</p>
                <button class="fn3-register-button fn3-centered-button fn3-spacing-top">
                    Register For Free
                </button>
            </section>

            <section class="fn3-bonus-section">
                <h3 class="fn3-bonus-heading"><i class="fas fa-gift fn3-heading-icon"></i> BONUS (ONLY FOR LIVE
                    ATTENDEES)</h3>
                <div class="fn3-bonus-grid">
                    <div class="fn3-bonus-item">
                        <i class="fas fa-gift fn3-bonus-item-icon"></i>
                        <p class="fn3-bonus-item-text">AI Funnel Template</p>
                    </div>
                    <div class="fn3-bonus-item">
                        <i class="fas fa-gift fn3-bonus-item-icon"></i>
                        <p class="fn3-bonus-item-text">Social Media Content Calendar</p>
                    </div>
                    <div class="fn3-bonus-item">
                        <i class="fas fa-gift fn3-bonus-item-icon"></i>
                        <p class="fn3-bonus-item-text">High-Converting Lead Magnet Blueprint</p>
                    </div>
                    <div class="fn3-bonus-item">
                        <i class="fas fa-gift fn3-bonus-item-icon"></i>
                        <p class="fn3-bonus-item-text">No-Objection Sales Script</p>
                    </div>
                </div>
                <div class="fn3-bonus-exclusive-access">
                    <i class="fas fa-gift fn3-bonus-item-icon"></i>
                    <p class="fn3-bonus-item-text">Exclusive Lifetime Community Access</p>
                </div>

                <p class="fn3-bonus-giveaway">
                    <i class="fas fa-gift fn3-bonus-giveaway-icon"></i> Plus: Surprise Giveaway for First 50
                    Registrations
                </p>

                <button class="fn3-register-button fn3-centered-button fn3-spacing-top">
                    Register For Free
                </button>
            </section>

            <section class="fn3-real-coaches-section">
                <h2 class="fn3-real-coaches-heading">
                    <i class="fas fa-star fn3-heading-icon"></i> Real Coaches. Real Results
                </h2>
                <div class="fn3-real-coaches-testimonials">
                    <div class="fn3-coach-testimonial-card">
                        <p class="fn3-coach-quote">I was stuck for 8 months with no clients. After this workshop, I got
                            37 leads in 3 days!</p>
                        <div class="fn3-coach-info">
                            <i class="fas fa-user-circle fn3-coach-avatar-placeholder"></i>
                            <div>
                                <p class="fn3-coach-name">Aarti Mehra</p>
                                <p class="fn3-coach-role">Nutrition Coach</p>
                            </div>
                        </div>
                    </div>
                    <div class="fn3-coach-testimonial-card">
                        <p class="fn3-coach-quote">Finally understood how to position and sell my offer without being
                            salesy.</p>
                        <div class="fn3-coach-info">
                            <i class="fas fa-user-circle fn3-coach-avatar-placeholder"></i>
                            <div>
                                <p class="fn3-coach-name">Rohan Kapoor</p>
                                <p class="fn3-coach-role">Holistic Trainer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="fn3-carousel-testimonials-section">
                <div class="fn3-carousel-cards-container">
                    <div class="fn3-carousel-cards-wrapper">
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET KHUSHBOO</h4>
                            <p class="fn3-carousel-card-subtitle">Digital Marketer</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Khushboo" alt="Khushboo"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Closing High Ticket Offers with Email Daily</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET SHIVAY</h4>
                            <p class="fn3-carousel-card-subtitle">Business Consultant</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Shivay" alt="Shivay"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">AFTER - Closing Multi Lakh Every Month</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET AKSHAY</h4>
                            <p class="fn3-carousel-card-subtitle">Founder</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Akshay" alt="Akshay"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Closed his 2nd Deal Within 10 days</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET PRIYA</h4>
                            <p class="fn3-carousel-card-subtitle">Yoga Instructor</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Priya" alt="Priya"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Automated her client onboarding successfully</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET RAHUL</h4>
                            <p class="fn3-carousel-card-subtitle">Life Coach</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Rahul" alt="Rahul"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Generated 200+ leads in first month</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET ANJALI</h4>
                            <p class="fn3-carousel-card-subtitle">Wellness Expert</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Anjali" alt="Anjali"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Scaled to 6-figure business in 6 months</p>
                        </div>
                        <!-- Duplicate set for seamless loop -->
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET KHUSHBOO</h4>
                            <p class="fn3-carousel-card-subtitle">Digital Marketer</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Khushboo" alt="Khushboo"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Closing High Ticket Offers with Email Daily</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET SHIVAY</h4>
                            <p class="fn3-carousel-card-subtitle">Business Consultant</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Shivay" alt="Shivay"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">AFTER - Closing Multi Lakh Every Month</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET AKSHAY</h4>
                            <p class="fn3-carousel-card-subtitle">Founder</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Akshay" alt="Akshay"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Closed his 2nd Deal Within 10 days</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET PRIYA</h4>
                            <p class="fn3-carousel-card-subtitle">Yoga Instructor</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Priya" alt="Priya"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Automated her client onboarding successfully</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET RAHUL</h4>
                            <p class="fn3-carousel-card-subtitle">Life Coach</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Rahul" alt="Rahul"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Generated 200+ leads in first month</p>
                        </div>
                        <div class="fn3-carousel-card">
                            <h4 class="fn3-carousel-card-title">MEET ANJALI</h4>
                            <p class="fn3-carousel-card-subtitle">Wellness Expert</p>
                            <img src="https://placehold.co/300x180/E0E0E0/777777?text=Anjali" alt="Anjali"
                                class="fn3-carousel-card-image" />
                            <p class="fn3-carousel-card-text">Scaled to 6-figure business in 6 months</p>
                        </div>
                    </div>
                </div>
            </section>

            <button class="fn3-register-button fn3-centered-button fn3-spacing-top">
                Register For Free
            </button>

            <section class="fn3-testimonials-section">
                <h2 class="fn3-testimonials-heading">Hear From Coaches Like You</h2>
                <div class="fn3-testimonial-grid">
                    <a href="#" class="fn3-testimonial-card">
                        <img src="https://placehold.co/300x200/E0E0E0/777777?text=Testimonial+1" alt="Testimonial 1"
                            class="fn3-testimonial-thumbnail" />
                        <div class="fn3-play-overlay"><i class="fab fa-youtube fn3-youtube-icon"></i></div>
                        <div class="fn3-testimonial-content">
                            <p class="fn3-testimonial-title">"This One Decision Made A..."</p>
                            <p class="fn3-testimonial-name">Arun Chhabra</p>
                            <div class="fn3-star-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                    class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p class="fn3-watch-on">Watch on <i class="fab fa-youtube fn3-watch-youtube-icon"></i></p>
                        </div>
                    </a>
                    <a href="#" class="fn3-testimonial-card">
                        <img src="https://placehold.co/300x200/E0E0E0/777777?text=Testimonial+2" alt="Testimonial 2"
                            class="fn3-testimonial-thumbnail" />
                        <div class="fn3-play-overlay"><i class="fab fa-youtube fn3-youtube-icon"></i></div>
                        <div class="fn3-testimonial-content">
                            <p class="fn3-testimonial-title">"7 Figure Sales Closer, Shyre..."</p>
                            <p class="fn3-testimonial-name">Shreyank Jain</p>
                            <div class="fn3-star-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                    class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p class="fn3-watch-on">Watch on <i class="fab fa-youtube fn3-watch-youtube-icon"></i></p>
                        </div>
                    </a>
                    <a href="#" class="fn3-testimonial-card">
                        <img src="https://placehold.co/300x200/E0E0E0/777777?text=Testimonial+3" alt="Testimonial 3"
                            class="fn3-testimonial-thumbnail" />
                        <div class="fn3-play-overlay"><i class="fab fa-youtube fn3-youtube-icon"></i></div>
                        <div class="fn3-testimonial-content">
                            <p class="fn3-testimonial-title">"Sandeep's 6-Figure Digital..."</p>
                            <p class="fn3-testimonial-name">Sandeep</p>
                            <div class="fn3-star-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                    class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p class="fn3-watch-on">Watch on <i class="fab fa-youtube fn3-watch-youtube-icon"></i></p>
                        </div>
                    </a>
                    <a href="#" class="fn3-testimonial-card">
                        <img src="https://placehold.co/300x200/E0E0E0/777777?text=Testimonial+4" alt="Testimonial 4"
                            class="fn3-testimonial-thumbnail" />
                        <div class="fn3-play-overlay"><i class="fab fa-youtube fn3-youtube-icon"></i></div>
                        <div class="fn3-testimonial-content">
                            <p class="fn3-testimonial-title">"Shivan's Game Changing Moment!"</p>
                            <p class="fn3-testimonial-name">Shivani</p>
                            <div class="fn3-star-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                    class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p class="fn3-watch-on">Watch on <i class="fab fa-youtube fn3-watch-youtube-icon"></i></p>
                        </div>
                    </a>
                    <a href="#" class="fn3-testimonial-card">
                        <img src="https://placehold.co/300x200/E0E0E0/777777?text=Testimonial+5" alt="Testimonial 5"
                            class="fn3-testimonial-thumbnail" />
                        <div class="fn3-play-overlay"><i class="fab fa-youtube fn3-youtube-icon"></i></div>
                        <div class="fn3-testimonial-content">
                            <p class="fn3-testimonial-title">"From Dream to Award! Jyotsana's Win"</p>
                            <p class="fn3-testimonial-name">Jyotsana</p>
                            <div class="fn3-star-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                    class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                            <p class="fn3-watch-on">Watch on <i class="fab fa-youtube fn3-watch-youtube-icon"></i></p>
                        </div>
                    </a>
                </div>
            </section>

            <button class="fn3-register-button fn3-centered-button fn3-spacing-top">
                Register For Free
            </button>

            <section class="fn3-limited-spots-section">
                <h3 class="fn3-limited-spots-heading">
                    <i class="fas fa-lock fn3-heading-icon"></i> Limited Spots Available (Fills Fast Every Time)
                </h3>
                <p class="fn3-limited-spots-text">
                    This workshop is <span class="fn3-highlight-text">LIVE, practical, and results-focused.</span>
                </p>
                <p class="fn3-limited-spots-text">
                    We're only accepting <span class="fn3-highlight-text">serious, committed coaches.</span>
                </p>
                <p class="fn3-limited-spots-text">
                    Once it's full — it's full.
                </p>
                <button class="fn3-register-button fn3-centered-button fn3-spacing-top">
                    Secure Your Spot Now
                </button>
            </section>

            <section class="fn3-about-mentor-section">
                <h2 class="fn3-about-mentor-heading">About Mentor</h2>
                <p class="fn3-about-mentor-subheading">& The Tremendous Change She'll Help Bring In Your Life</p>
                <div class="fn3-mentor-details-layout">
                    <div class="fn3-mentor-image-container">
                        <img src="https://placehold.co/300x350/E0E0E0/777777?text=Chirag+Chhabra"
                            alt="Chirag Chhabra - Mentor" class="fn3-mentor-image" />
                        <div class="fn3-mentor-caption">
                            <p class="fn3-mentor-caption-name">Chirag Chhabra</p>
                            <p class="fn3-mentor-caption-role">Leading Business Coach</p>
                            <p class="fn3-mentor-caption-specialty">Quality leads Specialist</p>
                        </div>
                    </div>

                    <div class="fn3-mentor-text-content">
                        <p class="fn3-mentor-paragraph">
                            A Growth-Focused Coach With Real Business Experience Chirag isn't just another trainer. He's
                            a business coach who has worked directly with hundreds of health and wellness coaches to
                            build systems that actually bring clients – without chasing, begging, or burning out.
                        </p>
                        <p class="fn3-mentor-paragraph fn3-mentor-struggle">
                            He knows your struggles. No leads. No sales. No clarity.
                        </p>
                        <p class="fn3-mentor-paragraph">
                            That's exactly why he created this challenge – to help you stop guessing and start growing.
                        </p>
                        <p class="fn3-mentor-paragraph">
                            Over the past few years, he's helped solo coaches:
                        </p>
                        <ul class="fn3-mentor-list">
                            <li>
                                <i class="fas fa-check-circle fn3-mentor-check"></i>
                                Get 100+ leads a day (without paid ads)
                            </li>
                            <li>
                                <i class="fas fa-check-circle fn3-mentor-check"></i>
                                Automate their sales process
                            </li>
                            <li>
                                <i class="fas fa-check-circle fn3-mentor-check"></i>
                                Close high-ticket offers with confidence
                            </li>
                            <li>
                                <i class="fas fa-check-circle fn3-mentor-check"></i>
                                Build six-figure businesses – even with zero tech background.
                            </li>
                        </ul>
                        <p class="fn3-mentor-paragraph">This isn't theory. It's real-world business. And Chirag is here
                            to work with you, step-by-step, until you get the results you deserve.</p>
                    </div>
                </div>
                <div class="fn3-my-mission-card">
                    <h4 class="fn3-my-mission-heading">My Mission</h4>
                    <p class="fn3-my-mission-quote">"To help every coach turn their passion into profit – <span
                            class="fn3-quote-highlight">using simple tools, proven frameworks, and automation that
                            works.</span>"</p>
                </div>
            </section>

            <section class="fn3-faq-section">
                <h2 class="fn3-faq-heading"><i class="fas fa-question-circle fn3-heading-icon"></i> Frequently Asked
                    Questions</h2>
                <div class="fn3-faq-container">
                    <div class="fn3-faq-item">
                        <div class="fn3-faq-question" onclick="toggleFaq(0)">
                            Do I need to be tech-savvy?
                            <i class="fas fa-angle-down fn3-faq-arrow"></i>
                        </div>
                        <div class="fn3-faq-answer">
                            <p>No, absolutely not! This workshop is designed for coaches of all tech levels. We'll show
                                you how to build your system live, step-by-step, with no prior tech or funnel knowledge
                                required.</p>
                        </div>
                    </div>

                    <div class="fn3-faq-item">
                        <div class="fn3-faq-question" onclick="toggleFaq(1)">
                            Is this workshop really free?
                            <i class="fas fa-angle-down fn3-faq-arrow"></i>
                        </div>
                        <div class="fn3-faq-answer">
                            <p>Yes, it's 100% free. We believe in providing immense value upfront to help coaches
                                succeed. Our goal is to demonstrate the power of our methods, hoping you'll consider our
                                advanced programs in the future if you find this workshop beneficial.</p>
                        </div>
                    </div>

                    <div class="fn3-faq-item">
                        <div class="fn3-faq-question" onclick="toggleFaq(2)">
                            What if I miss the live session?
                            <i class="fas fa-angle-down fn3-faq-arrow"></i>
                        </div>
                        <div class="fn3-faq-answer">
                            <p>We highly recommend attending live to get the most out of the interactive sessions, Q&A,
                                and exclusive live bonuses. However, a replay might be available for a limited time for
                                registered participants. Details will be shared during the workshop.</p>
                        </div>
                    </div>

                    <div class="fn3-faq-item">
                        <div class="fn3-faq-question" onclick="toggleFaq(3)">
                            How long is the workshop?
                            <i class="fas fa-angle-down fn3-faq-arrow"></i>
                        </div>
                        <div class="fn3-faq-answer">
                            <p>The workshop is scheduled for 2 hours. We'll cover all the core concepts and practical
                                steps within this timeframe, plus a Q&A session.</p>
                        </div>
                    </div>

                    <div class="fn3-faq-item">
                        <div class="fn3-faq-question" onclick="toggleFaq(4)">
                            What results can I expect?
                            <i class="fas fa-angle-down fn3-faq-arrow"></i>
                        </div>
                        <div class="fn3-faq-answer">
                            <p>By implementing the strategies from this workshop, you can expect to generate more
                                qualified leads, understand how to automate parts of your sales process, and build a
                                stronger brand presence online, ultimately leading to more clients and business growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="fn3-footer">
            <div class="fn3-footer-content">
                <p>&copy; 2024 Chirag Chhabra Coaching. All Rights Reserved.</p>
                <p>Empowering Health & Wellness Coaches to Achieve Excellence and Automation.</p>
            </div>
        </footer>

        <div class="fn3-sticky-register-bar">
            <div class="fn3-sticky-timer-section">
                <span class="fn3-sticky-offer-ends">Offer Ends in</span><br />
                <span class="fn3-sticky-countdown" id="countdown">5:00 Mins</span>
            </div>
            <div class="fn3-sticky-logo-section">
                <i class="fas fa-gem fn3-sticky-logo-icon"></i>
                <span class="fn3-sticky-logo-text">Kohinoor</span>
            </div>
            <button class="fn3-sticky-register-now-button" onclick="registerNow()">
                Register Now
            </button>
        </div>
    </div>
            `,
            js: `    // FAQ Toggle Functionality
        function toggleFaq(index) {
            const faqItems = document.querySelectorAll('.fn3-faq-item');
            const currentItem = faqItems[index];
            const isOpen = currentItem.classList.contains('open');

            // Close all FAQ items
            faqItems.forEach(item => item.classList.remove('open'));

            // Open the clicked item if it wasn't already open
            if (!isOpen) {
                currentItem.classList.add('open');
            }
        }

        // Countdown Timer
        let timeLeft = 5 * 60; // 5 minutes in seconds

        function updateCountdown() {
            if (timeLeft <= 0) {
                document.getElementById('countdown').textContent = "0:00 Mins";
                return;
            }

            const mins = Math.floor(timeLeft / 60);
            const secs = timeLeft % 60;
         document.getElementById('countdown').textContent = mins + ':' + (secs < 10 ? '0' : '') + secs + ' Mins';

            timeLeft--;
        }

        // Update countdown every second
        setInterval(updateCountdown, 1000);

        // Registration button functionality
        function registerNow() {
            alert("Registration functionality would be implemented here!");
            // In a real implementation, this would redirect to a registration form
            // or open a modal with registration details
        }

        // Add click handlers to all register buttons
        document.addEventListener('DOMContentLoaded', function () {
            const registerButtons = document.querySelectorAll('.fn3-register-button');
            registerButtons.forEach(button => {
                button.addEventListener('click', registerNow);
            });

            // Progress bar animation on scroll
            const progressBars = document.querySelectorAll('.fn3-progress-fill');
            const observerOptions = {
                threshold: 0.5,
                rootMargin: '0px'
            };

            const progressObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBar = entry.target;
                        const width = progressBar.style.width;
                        progressBar.style.width = '0%';
                        setTimeout(() => {
                            progressBar.style.width = width;
                        }, 100);
                    }
                });
            }, observerOptions);

            progressBars.forEach(bar => progressObserver.observe(bar));
        });

        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add some basic animations on scroll
        const animateOnScrollElements = document.querySelectorAll('.fn3-learn-card, .fn3-coach-testimonial-card, .fn3-carousel-card');

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        animateOnScrollElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            scrollObserver.observe(el);
        });`
           },

        

        }}