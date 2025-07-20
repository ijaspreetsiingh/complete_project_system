const landing_page1 = {
      'six_template': {
            name: 'new landing page',
            description: 'A friendly welcome page with a clean design and clear CTA',
            thumbnail: 'https://placehold.co/400x300/16a34a/ffffff?text=+Blank&font=inter&size=50&style=flate',
                 css: `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #fff;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        .top-strip {
            background-color: black;
            color: #FFAE00;
            text-align: center;
            padding: 15px 0;
            font-weight: 800;
            font-family: 'Barlow', sans-serif;
        }

        /* Hero Section */
        .hero-section {
            text-align: center;
            padding: 60px 0;
            background-color: #f8f9fa;
        }

        .hero-section h1 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.4;
        }

        .hero-section .highlight-green {
            color: gray;
        }

        .hero-section .subtitle {
            font-size: 1.125rem;
            max-width: 800px;
            margin: 20px auto 0;
            color: #333;
        }

        .video-section {
            position: relative;
            width: 100%;
            max-width: 900px;
            margin: 40px auto;
            min-height: 350px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            overflow: hidden;
            background-image: url('https://antux-react.vercel.app/assets/img/about/1.jpg');
            background-size: cover;
            background-position: center;
        }

        .video-play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70px;
            height: 70px;
            background: linear-gradient(90deg, #F54200 0%, #FFAE00 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        .video-play-button:hover {
            transform: translate(-50%, -50%) scale(1.1);
        }

        .video-play-button i {
            color: white;
            font-size: 26px;
            margin-left: 4px;
        }

        .effect {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: linear-gradient(90deg, #F54200 0%, #FFAE00 100%);
            border: 3px solid rgba(255, 255, 255, 0.7);
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
            animation: rippleEffect 1.5s infinite ease-out;
            z-index: -1;
        }

        @keyframes rippleEffect {
            0% {
                transform: translate(-50%, -50%) scale(0.95);
                opacity: 0.7;
            }

            100% {
                transform: translate(-50%, -50%) scale(1.4);
                opacity: 0;
            }
        }

        /* Training Section - Updated */
        .training-section {
            padding: 80px 0;
            background-color: #fff;
        }

        .section-title {
            text-align: center;
            margin-bottom: 60px;
        }

        .section-title h4 {
            color: #FFAE00;
            font-size: 2rem;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .section-title h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #333;
        }

        .training-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }

        .training-card {
            background: #fff;
            padding: 40px 30px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            border: 2px solid transparent;
            position: relative;
        }

        .training-card:hover {
            transform: translateY(-8px);
            border-color: #FFAE00;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .training-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 25px;
            border-radius: 50%;
            background: linear-gradient(135deg, #FFAE00, #F54200);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 5px 15px rgba(255, 174, 0, 0.3);
        }

        .training-icon img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
        }

        .training-card h4 {
            font-size: 1.3rem;
            font-weight: 700;
            color: #333;
            margin-bottom: 15px;
        }

        .training-card p {
            font-size: 1rem;
            color: #666;
            line-height: 1.6;
            margin: 0;
        }

        /* Main Enroll Button - matching the footer style */
        .enroll-button-main {
            background: linear-gradient(90deg, #FFAE00 0%, #F54200 100%);
            color: white;
            font-size: 18px;
            font-weight: bold;
            padding: 15px 40px;
            border: none;
            border-radius: 50px;
            text-decoration: none;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-block;
            letter-spacing: 1px;
            box-shadow: 0 8px 25px rgba(255, 174, 0, 0.3);
        }

        .enroll-button-main:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(255, 174, 0, 0.4);
            color: white;
            text-decoration: none;
        }

        /* About Section - Updated with images under text */
        /* About Section - Updated with proper spacing and full width images */
        .about-section {
            padding: 80px 0;
            background-color: #f8f9fa;
        }

        .about-content {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 40px;
            align-items: flex-start;
        }

        .stats-container {
            background: #fff;
            padding: 40px 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .stat-item {
            margin-bottom: 30px;
        }

        .stat-item:last-child {
            margin-bottom: 0;
        }

        .stat-number {
            font-size: 3rem;
            font-weight: 700;
            color: #FFAE00;
            display: block;
            line-height: 1;
        }

        .stat-label {
            font-size: 1rem;
            color: #666;
            font-weight: 500;
            margin-top: 5px;
        }

        .about-text-content {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .about-text {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #555;
            margin-bottom: 20px;
        }

        .btn-primary {
            background: transparent;
            border: 2px solid #ccc;
            color: #666;
            padding: 12px 25px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            width: fit-content;
            display: inline-block;
            margin-bottom: 40px;
        }

        .btn-primary:hover {
            border-color: #FFAE00;
            color: #FFAE00;
            text-decoration: none;
        }

        .about-images {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 20px;
            width: calc(100% + 340px);
            margin-left: -340px;
            margin-top: 50px;
        }

        .about-image-container {
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .about-image-container img {
            width: 100%;
            height: 400px;
            object-fit: cover;
        }

        .about-image-container.with-play {
            position: relative;
        }

        .about-play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70px;
            height: 70px;
            background: linear-gradient(90deg, #F54200 0%, #FFAE00 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        .about-play-button:hover {
            transform: translate(-50%, -50%) scale(1.1);
        }

        .about-play-button i {
            color: white;
            font-size: 24px;
            margin-left: 4px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .about-content {
                grid-template-columns: 1fr;
                gap: 30px;
            }

            .stats-container {
                display: flex;
                justify-content: space-around;
                text-align: center;
            }

            .stat-item {
                margin-bottom: 0;
            }

            .about-images {
                grid-template-columns: 1fr;
                max-width: 400px;
                margin-left: 0;
                width: 100%;
            }

            .about-image-container img {
                height: 200px;
            }
        }

        /* Expertise Section */
        /* Expertise Section - Enhanced Vibrant Icons */
        .expertise-section {
            padding: 80px 0;
            background-color: #fff;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 35px;
            margin-bottom: 60px;
        }

        .skill-item {
            text-align: center;
            padding: 45px 25px;
            background: #fff;
            border-radius: 20px;
            transition: all 0.4s ease;
            border: 2px solid #f0f0f0;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
            
        }

        .skill-item:hover {
            transform: translateY(-10px);
            border-color: transparent;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .skill-icon {
            width: 100px;
            height: 100px;
            margin: 0 auto 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease;
            position: relative;
        }

        .skill-icon i {
            font-size: 40px;
            color: white;
            z-index: 2;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        /* Enhanced Skill Colors - More Vibrant */
        .skill-icon.strength {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.5);
        }

        .skill-icon.cardio {
            background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%);
            box-shadow: 0 10px 30px rgba(236, 72, 153, 0.5);
        }

        .skill-icon.health {
            background: linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%);
            box-shadow: 0 10px 30px rgba(6, 182, 212, 0.5);
        }

        .skill-icon.nutrition {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.5);
        }

        .skill-icon.weight {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            box-shadow: 0 10px 30px rgba(245, 158, 11, 0.5);
        }

        .skill-icon.wellness {
            background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
            box-shadow: 0 10px 30px rgba(168, 85, 247, 0.5);
        }

        /* Enhanced Certification Colors - More Vibrant */
        .skill-icon.cert-1 {
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
            box-shadow: 0 10px 30px rgba(249, 115, 22, 0.5);
        }

        .skill-icon.cert-2 {
            background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
            box-shadow: 0 10px 30px rgba(139, 92, 246, 0.5);
        }

        .skill-icon.cert-3 {
            background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%);
            box-shadow: 0 10px 30px rgba(244, 63, 94, 0.5);
        }

        .skill-icon.cert-4 {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.5);
        }

        .skill-icon.cert-5 {
            background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
            box-shadow: 0 10px 30px rgba(6, 182, 212, 0.5);
        }

        .skill-icon.cert-6 {
            background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
            box-shadow: 0 10px 30px rgba(14, 165, 233, 0.5);
        }

        .skill-icon.cert-7 {
            background: linear-gradient(135deg, #eab308 0%, #ca8a04 100%);
            box-shadow: 0 10px 30px rgba(234, 179, 8, 0.5);
        }

        .skill-item:hover .skill-icon {
            transform: scale(1.1) rotate(5deg);
            filter: brightness(1.1);
        }

        .skill-name {
            font-weight: 500;
            color: #333;
            font-size: 1rem;
            margin-top: 20px;
            letter-spacing: 0.5px;
        }

        .skill-item:hover .skill-name {
            color: #2c3e50;
        }

        /* Additional enhancement for better visibility */
        .skill-icon::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: inherit;
            border-radius: 50%;
            z-index: -1;
            opacity: 0.3;
            transition: all 0.4s ease;
        }

        .skill-item:hover .skill-icon::before {
            opacity: 0.5;
            transform: scale(1.1);
        }


        /* Resume Section */
        .resume-section {
            padding: 80px 0;
            background-color: #f8f9fa;
        }

        .resume-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
        }

        .timeline-item {
            background: #fff;
            padding: 25px;
            border-radius: 10px;
            margin-bottom: 25px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            position: relative;
        }

        .timeline-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
        }

        .timeline-header h4 {
            color: #333;
            font-size: 1.2rem;
            margin-bottom: 5px;
        }

        .timeline-header p {
            color: #666;
            font-size: 0.9rem;
        }

        .timeline-date {
            background: #FFAE00;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
        }

        .timeline-body p {
            color: #555;
            line-height: 1.6;
        }

        /* Portfolio Section */
        /* Portfolio Section */
.portfolio-section {
    padding: 80px 0;
    background-color: #fff;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.portfolio-item {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease, box-shadow 0.4s ease; /* Enhanced transition for transform and shadow */
}

.portfolio-item:hover {
    transform: translateY(-8px) scale(1.02); /* Slightly less aggressive translateY, added scale */
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
}

.portfolio-item img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.4s ease; /* Smooth transition for image zoom */
}

.portfolio-item:hover img {
    transform: scale(1.05); /* Slight zoom on the image itself */
}

.portfolio-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); /* Semi-transparent overlay */
    display: flex; /* Always display but control visibility with opacity */
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.4s ease; /* Smooth transition for opacity */
}

.portfolio-item:hover .portfolio-overlay {
    opacity: 1;
}

.portfolio-overlay i {
    color: white;
    font-size: 2rem;
    transform: scale(0.8); /* Start smaller */
    transition: transform 0.4s ease, font-size 0.4s ease; /* Smooth transition for icon */
}

.portfolio-item:hover .portfolio-overlay i {
    transform: scale(1); /* Zoom to normal size on hover */
    font-size: 2.5rem; /* Slightly larger icon on hover for emphasis */
}

        /* Video Section */
        .video-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 30px;
        }

        .video-container {
            position: relative;
            overflow: hidden;
            width: 100%;
            padding-top: 56.25%;
            border-radius: 12px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border: none;
        }

        /* Partner Section */
        .partner-section {
            padding: 80px 0;
            background-color: #f8f9fa;
        }

        .partner-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 30px;
            align-items: center;
        }

        

        .partner-item img {
    max-width: 100%;
    height: 40px;
    object-fit: contain;
    transition: all 0.3s ease;
    opacity: 1;
    filter: brightness(1);
}

.partner-item:hover img {
    transform: scale(1.15);
    filter: brightness(1.2) drop-shadow(0 5px 15px rgba(0,0,0,0.2));
}

.partner-item {
    background: #fff;
    padding: 25px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90px;
    border: 2px solid transparent;
}

.partner-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    border-color: #FFAE00;
}




        /* Testimonial Section */
        /* Testimonial Carousel Styles */
        /* Testimonial Carousel Styles */
.testimonial-carousel {
    position: relative;
    overflow: hidden;
    max-width: 1100px;
    margin: 0 auto;
    margin-bottom: 50px;
}

.testimonial-track {
    display: flex;
    animation: slide 15s infinite;
}

.testimonial-slide {
    min-width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

.testimonial-card-new {
    display: flex;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    overflow: hidden;
    min-height: 280px;
    max-width: 1000px;
    margin: 0 auto;
}

.testimonial-left {
    flex: 0 0 350px;
    background: linear-gradient(135deg, #FF6B35 0%, #FFAE00 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

/* Enhanced left side with decorative elements */
.testimonial-left::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
}



.testimonial-image-container {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px dashed rgba(255,255,255,0.6);
    padding: 12px;
    z-index: 2;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
}

.testimonial-image-container::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(255,255,255,0.3), transparent);
    z-index: -1;
}

.testimonial-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255,255,255,0.8);
}

.testimonial-right {
    flex: 1;
    padding: 40px 50px;
    position: relative;
    background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.review-header {
    margin-bottom: 25px;
}

.review-label {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
    display: block;
    font-weight: 500;
}

.stars {
    color: #FFAE00;
    margin-bottom: 12px;
    font-size: 18px;
}

.platform-info {
    display: flex;
    align-items: center;
    gap: 15px;
}

.platform-name {
    font-weight: 700;
    color: #4CAF50;
    font-size: 18px;
}

.review-count {
    font-size: 14px;
    color: #666;
}

.testimonial-text-new {
    font-size: 17px;
    line-height: 1.7;
    color: #555;
    margin-bottom: 35px;
    font-style: italic;
    position: relative;
    padding-left: 20px;
}

.testimonial-text-new::before {
    content: '"';
    position: absolute;
    left: 0;
    top: -10px;
    font-size: 40px;
    color: #FFAE00;
    font-family: serif;
}

.client-info h4 {
    margin: 0 0 5px 0;
    font-size: 20px;
    color: #333;
    font-weight: 600;
}

.client-info span {
    color: #666;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.slide-number {
    position: absolute;
    bottom: 40px;
    right: 50px;
    font-size: 60px;
    font-weight: 700;
    color: #f0f0f0;
    line-height: 1;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Animations */
@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes slide {
    0% { transform: translateX(0); }
    30% { transform: translateX(0); }
    35% { transform: translateX(-100%); }
    65% { transform: translateX(-100%); }
    70% { transform: translateX(-200%); }
    95% { transform: translateX(-200%); }
    100% { transform: translateX(0); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .testimonial-carousel {
        max-width: 100%;
    }
    
    .testimonial-card-new {
        flex-direction: column;
        min-height: auto;
        max-width: 100%;
    }
    
    .testimonial-left {
        flex: 0 0 250px;
    }
    
    .testimonial-image-container {
        width: 160px;
        height: 160px;
    }
    
    .testimonial-right {
        padding: 30px 25px;
    }
    
    .slide-number {
        font-size: 40px;
        bottom: 25px;
        right: 25px;
    }
}




        /* FAQ Section */
        .faq-section {
            padding: 80px 0;
            background-color: #f8f9fa;
        }

        .faq-item {
            background: #fff;
            margin-bottom: 20px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .faq-question {
            background: #fff;
            border: none;
            padding: 25px;
            width: 100%;
            text-align: left;
            font-size: 1.1rem;
            font-weight: 600;
            color: #333;
            cursor: pointer;
            position: relative;
            transition: background-color 0.3s ease;
        }

        .faq-question:hover {
            background-color: #f8f9fa;
        }

        .faq-question::after {
            content: '+';
            position: absolute;
            right: 25px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.5rem;
            color: #FFAE00;
            transition: transform 0.3s ease;
        }

        .faq-question.active::after {
            transform: translateY(-50%) rotate(45deg);
        }

        .faq-answer {
            padding: 0 25px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .faq-answer.active {
            padding: 0 25px 25px;
            max-height: 200px;
        }

        .faq-answer p {
            color: #555;
            line-height: 1.6;
        }

        /* Blog Section */
        .blog-section {
            padding: 80px 0;
            background-color: #fff;
        }

        .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
        }

        .blog-card {
            background: #fff;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .blog-card:hover {
            transform: translateY(-10px);
        }

        .blog-image {
            width: 100%;
            height: 250px;
            background-color: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #999;
            font-size: 1.2rem;
        }

        .blog-content {
            padding: 25px;
        }

        .blog-meta {
            display: flex;
            gap: 15px;
            margin-bottom: 15px;
        }

        .blog-tag {
            background: #FFAE00;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .blog-date {
            color: #666;
            font-size: 0.9rem;
        }

        .blog-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 15px;
            line-height: 1.4;
        }

        .blog-link {
            color: #FFAE00;
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }

        .blog-link:hover {
            color: #F54200;
            text-decoration: none;
        }

        /* Contact Section with Background */
.contact-section {
    padding: 80px 0;
    background: linear-gradient(135deg, rgba(255,174,0,0.1) 0%, rgba(245,66,0,0.1) 100%),
                url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    text-align: center;
    position: relative;
}

.contact-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(248, 249, 250, 0.9);
    z-index: 1;
}

.contact-content {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.contact-section h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
}

.contact-section h4 {
    color: #666;
    margin-bottom: 30px;
}

.chat-button {
    background: linear-gradient(90deg, #F54200 0%, #FFAE00 100%);
    color: white;
    padding: 15px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(245, 66, 0, 0.3);
}

.chat-button:hover {
    transform: translateY(-2px);
    text-decoration: none;
    color: white;
    box-shadow: 0 12px 35px rgba(245, 66, 0, 0.4);
}

/* Enhanced Footer */
.footer {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: #fff;
    position: relative;
    overflow: hidden;
}

.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="80" cy="80" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="40" cy="60" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="60" cy="40" r="1" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
}

.footer-main {
    padding: 60px 0 40px;
    position: relative;
    z-index: 2;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 60px;
    align-items: flex-start;
}

.footer-left {
    max-width: 400px;
}

.footer-logo {
    font-size: 2.5rem;
    font-weight: 700;
    color: #FFAE00;
    margin-bottom: 20px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.footer-description {
    color: #bdc3c7;
    line-height: 1.8;
    margin-bottom: 30px;
    font-size: 1.1rem;
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a {
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, #FFAE00 0%, #F54200 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 174, 0, 0.3);
}

.social-links a:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 174, 0, 0.5);
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}

.footer-column h4 {
    color: #FFAE00;
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: 600;
    position: relative;
}

.footer-column h4::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #FFAE00 0%, #F54200 100%);
}

.footer-column ul {
    list-style: none;
}

.footer-column ul li {
    margin-bottom: 12px;
}

.footer-column ul li a {
    color: #bdc3c7;
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.footer-column ul li a:hover {
    color: #FFAE00;
    transform: translateX(5px);
}

.footer-column ul li i {
    color: #FFAE00;
    width: 16px;
}

.footer-bottom {
    background: rgba(0, 0, 0, 0.2);
    padding: 25px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 2;
}

.footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.footer-bottom-content p {
    color: #bdc3c7;
    margin: 0;
}

.footer-bottom-links {
    display: flex;
    gap: 25px;
}

.footer-bottom-links a {
    color: #bdc3c7;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
    color: #FFAE00;
}

/* Responsive Design */
@media (max-width: 768px) {
    .contact-section {
        background-attachment: scroll;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    
    .footer-links {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .footer-bottom-content {
        flex-direction: column;
        text-align: center;
    }
    
    .footer-bottom-links {
        flex-wrap: wrap;
        justify-content: center;
    }
}


        /* Sticky Enroll Bar */
        .sticky-enroll-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: beige;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            padding: 10px 0;
        }

        .enroll-bar-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .price-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .price-wrapper {
            display: flex;
            align-items: baseline;
            gap: 8px;
        }

        .current-price {
            font-size: 24px;
            font-weight: bold;
            color: #FFAE00;
        }

        .original-price {
            font-size: 18px;
            color: #dc3545;
            text-decoration: line-through;
        }

        .deadline {
            font-size: 14px;
            color: #555;
        }

        .enroll-action {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
        }

        .enroll-button {
            background-color: #FFAE00;
            color: white;
            font-size: 18px;
            font-weight: bold;
            padding: 12px 30px;
            border: none;
            border-radius: 8px;
            text-decoration: none;
            text-transform: uppercase;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .enroll-button:hover {
            background-color: #F54200;
            color: white;
            text-decoration: none;
        }

        .bonus-text {
            font-size: 12px;
            color: #333;
            font-weight: 500;
        }

        /* Main content padding to prevent overlap with sticky bar */
        .main-content {
            padding-bottom: 80px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 0 15px;
            }

            .hero-section h1 {
                font-size: 1.8rem;
            }

            .section-title h2 {
                font-size: 1.6rem;
            }

            .training-grid {
                grid-template-columns: 1fr;
            }

            .about-content {
                grid-template-columns: 1fr;
                gap: 30px;
            }

            .skills-grid {
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }

            .resume-content {
                grid-template-columns: 1fr;
                gap: 30px;
            }

            .portfolio-grid {
                grid-template-columns: 1fr;
            }

            .video-grid {
                grid-template-columns: 1fr;
            }

            .blog-grid {
                grid-template-columns: 1fr;
            }

            .enroll-bar-content {
                flex-direction: column;
                gap: 15px;
                text-align: center;
            }

            .main-content {
                padding-bottom: 120px;
            }
        }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
        }

        .modal-content {
            background-color: #fff;
            margin: 5% auto;
            padding: 30px;
            border-radius: 15px;
            width: 90%;
            max-width: 500px;
            position: relative;
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            position: absolute;
            right: 20px;
            top: 15px;
            cursor: pointer;
        }

        .close:hover {
            color: #000;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #333;
        }

        .form-group input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
        }

        .form-group input:focus {
            outline: none;
            border-color: #FFAE00;
        }

        .submit-btn {
            background: linear-gradient(90deg, #F54200 0%, #FFAE00 100%);
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
        }

        .submit-btn:hover {
            opacity: 0.9;
        }
            `,
            html: `
             <div class="top-strip">
        For People Struggling Everyday Due To Their Health Issues...
    </div>

    <div class="main-content">
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="container">
                <h1>
                    I 👋 am John Doe, Revealing My Secret To Reversing <br />
                    <span class="highlight-green">PCOD/PCOS, Thyroid Health, Hormonal Balance</span><br />
                    And Achieving Your Health Goals, Naturally.
                </h1>
                <p class="subtitle">
                    As a dedicated coach, I specialize in guiding individuals toward their personal and professional
                    goals through structured, actionable strategies. I excel at identifying strengths, unlocking
                    potential, and fostering growth with a focus on clarity, accountability, and transformation.
                </p>

                <div class="video-section">
                    <div class="video-play-button" onclick="openModal()">
                        <i class="fas fa-play"></i>
                        <div class="effect"></div>
                    </div>
                </div>
            </div>
        </section>



        <!-- Updated About Section HTML -->
        <!-- Updated About Section HTML -->
        <section class="about-section">
            <div class="container">
                <div class="about-content">
                    <!-- Left Stats -->
                    <div class="stats-container">
                        <div class="stat-item">
                            <span class="stat-number">10+</span>
                            <span class="stat-label">Years of Experience</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">150+</span>
                            <span class="stat-label">Projects completed on 30 countries</span>
                        </div>
                    </div>

                    <!-- Right Text Content with Images Below -->
                    <div class="about-text-content">
                        <p class="about-text">
                            As a skilled web developer, I specialize in creating responsive, user-friendly websites with
                            a focus on modern design and efficient code. I excel in front-end development, with a deep
                            understanding of HTML, CSS, JavaScript, and various frameworks. My passion is turning ideas
                            into functional and aesthetically pleasing digital experiences.
                        </p>
                        <a href="#" class="btn-primary" onclick="openModal()">Watch Video</a>

                        <!-- Images Below Text -->
                        <div class="about-images">
                            <div class="about-image-container with-play">
                                <img src="https://antux-react.vercel.app/assets/img/about/1.jpg" alt="Teamwork">
                                <div class="about-play-button" onclick="openModal()">
                                    <i class="fas fa-play"></i>
                                </div>
                            </div>
                            <div class="about-image-container">
                                <img src="https://antux-react.vercel.app/assets/img/illustration/1.png"
                                    alt="Professional">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Training Section - Updated with proper images -->
        <!-- Training Section - Updated with better styling -->
        <section class="training-section">
            <div class="container">
                <div class="section-title">
                    <h4>Trainings</h4>
                    <h2>This Training Is Perfect For You If:</h2>
                </div>

                <div class="training-grid">
                    <div class="training-card">
                        <div class="training-icon">
                            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop&crop=center"
                                alt="Weight Management">
                        </div>
                        <h4>Weight Management</h4>
                        <p>You want to lose weight without damaging your metabolism</p>
                    </div>
                    <div class="training-card">
                        <div class="training-icon">
                            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=60&h=60&fit=crop&crop=center"
                                alt="Health Conditions">
                        </div>
                        <h4>Health Conditions</h4>
                        <p>You're managing a health condition like PCOS, thyroid issues, or diabetes</p>
                    </div>
                    <div class="training-card">
                        <div class="training-icon">
                            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=60&h=60&fit=crop&crop=center"
                                alt="Digestive Issues">
                        </div>
                        <h4>Digestive Health</h4>
                        <p>You struggle with digestive problems or hormonal imbalances</p>
                    </div>
                    <div class="training-card">
                        <div class="training-icon">
                            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=60&h=60&fit=crop&crop=center"
                                alt="Nutrition Guidance">
                        </div>
                        <h4>Nutrition Guidance</h4>
                        <p>You're tired of contradictory nutrition advice and want clear, practical guidance</p>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 40px;">
                    <a href="#" class="enroll-button-main" onclick="openModal()">ENROLL NOW</a>
                </div>
            </div>
        </section>




        <!-- Expertise Section -->
        <!-- Expertise Section -->
        <section class="expertise-section">
            <div class="container">
                <div class="section-title">
                    <h4>Top Skills</h4>
                    <h2>See my expertise</h2>
                </div>

                <div class="skills-grid">
                    <div class="skill-item">
                        <div class="skill-icon strength">
                            <i class="fas fa-dumbbell"></i>
                        </div>
                        <div class="skill-name">Strength Training</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon cardio">
                            <i class="fas fa-running"></i>
                        </div>
                        <div class="skill-name">Cardio Training</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon health">
                            <i class="fas fa-heart-pulse"></i>
                        </div>
                        <div class="skill-name">Health Coaching</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon nutrition">
                            <i class="fas fa-apple-alt"></i>
                        </div>
                        <div class="skill-name">Nutrition Planning</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon weight">
                            <i class="fas fa-weight-scale"></i>
                        </div>
                        <div class="skill-name">Weight Management</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon wellness">
                            <i class="fas fa-spa"></i>
                        </div>
                        <div class="skill-name">Wellness Therapy</div>
                    </div>
                </div>

                <!-- Certifications -->
                <div class="section-title" style="margin-top: 60px;">
                    <h4>Certifications</h4>
                </div>

                <div class="skills-grid">
                    <div class="skill-item">
                        <div class="skill-icon cert-1">
                            <i class="fas fa-certificate"></i>
                        </div>
                        <div class="skill-name">ACSM Certified</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon cert-2">
                            <i class="fas fa-medal"></i>
                        </div>
                        <div class="skill-name">NASM Trainer</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon cert-3">
                            <i class="fas fa-award"></i>
                        </div>
                        <div class="skill-name">Nutrition Specialist</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon cert-4">
                            <i class="fas fa-user-md"></i>
                        </div>
                        <div class="skill-name">Health Coach</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon cert-5">
                            <i class="fas fa-leaf"></i>
                        </div>
                        <div class="skill-name">Wellness Expert</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon cert-6">
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="skill-name">Fitness Professional</div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon cert-7">
                            <i class="fas fa-trophy"></i>
                        </div>
                        <div class="skill-name">Master Coach</div>
                    </div>
                </div>
            </div>
        </section>



        <!-- Resume Section -->
        <section class="resume-section">
            <div class="container">
                <div class="resume-content">
                    <div>
                        <h2>My Expertise</h2>
                        <div class="timeline-item">
                            <div class="timeline-header">
                                <div>
                                    <h4>Lead Developer</h4>
                                    <p>Blockdots, London</p>
                                </div>
                                <div class="timeline-date">2022 - Present</div>
                            </div>
                            <div class="timeline-body">
                                <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.
                                    Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                    sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart
                                    software.</p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-header">
                                <div>
                                    <h4>Full Stack Web Developer</h4>
                                    <p>Parsons, The New School</p>
                                </div>
                                <div class="timeline-date">2021 - 2022</div>
                            </div>
                            <div class="timeline-body">
                                <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.
                                    Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                    sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart
                                    software.</p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-header">
                                <div>
                                    <h4>UI Designer</h4>
                                    <p>House of Life, Leeds</p>
                                </div>
                                <div class="timeline-date">2018 - 2023</div>
                            </div>
                            <div class="timeline-body">
                                <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.
                                    Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                    sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart
                                    software.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2>Education Background</h2>
                        <div class="timeline-item">
                            <div class="timeline-header">
                                <div>
                                    <h4>Programming Course</h4>
                                    <p>Harvard University</p>
                                </div>
                                <div class="timeline-date">2006 - 2014</div>
                            </div>
                            <div class="timeline-body">
                                <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.
                                    Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                    sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart
                                    software.</p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-header">
                                <div>
                                    <h4>Graphic Design Course</h4>
                                    <p>Blockdots, London</p>
                                </div>
                                <div class="timeline-date">2016 - 2020</div>
                            </div>
                            <div class="timeline-body">
                                <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.
                                    Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                    sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart
                                    software.</p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-header">
                                <div>
                                    <h4>Web design course</h4>
                                    <p>University of California</p>
                                </div>
                                <div class="timeline-date">2012 - 2015</div>
                            </div>
                            <div class="timeline-body">
                                <p>The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.
                                    Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                    sectors of the economy or areas of culture sed mauris hendrerit, laoreet smart
                                    software.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section class="portfolio-section">
            <div class="container">
                <div class="section-title">
                    <h4>Portfolio</h4>
                    <h2>My Recent Work</h2>
                </div>

                <div class="portfolio-grid">
                    <div class="portfolio-item">
                        <img src="https://antux-react.vercel.app/assets/img/about/1.jpg" alt="Portfolio Item">
                        <div class="portfolio-overlay">
                            <i class="fas fa-eye"></i>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <img src="https://antux-react.vercel.app/assets/img/about/2.jpg" alt="Portfolio Item">
                        <div class="portfolio-overlay">
                            <i class="fas fa-eye"></i>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <img src="https://antux-react.vercel.app/assets/img/projects/1.jpg" alt="Portfolio Item">
                        <div class="portfolio-overlay">
                            <i class="fas fa-eye"></i>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <img src="https://antux-react.vercel.app/assets/img/projects/2.jpg" alt="Portfolio Item">
                        <div class="portfolio-overlay">
                            <i class="fas fa-eye"></i>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <img src="https://antux-react.vercel.app/assets/img/projects/3.jpg" alt="Portfolio Item">
                        <div class="portfolio-overlay">
                            <i class="fas fa-eye"></i>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <img src="https://antux-react.vercel.app/assets/img/projects/6.jpg" alt="Portfolio Item">
                        <div class="portfolio-overlay">
                            <i class="fas fa-eye"></i>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <img src="https://antux-react.vercel.app/assets/img/projects/5.jpg" alt="Portfolio Item">
                        <div class="portfolio-overlay">
                            <i class="fas fa-eye"></i>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <img src="https://antux-react.vercel.app/assets/img/projects/4.jpg" alt="Portfolio Item">
                        <div class="portfolio-overlay">
                            <i class="fas fa-eye"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Video Section -->
        <section class="video-section-main" style="padding: 80px 0; background-color: #f8f9fa;">
            <div class="container">
                <div class="section-title">
                    <h4>Videos</h4>
                    <h2>Unleash Everything In Videos</h2>
                </div>

                <div class="video-grid">
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/FEpK8l1hJdA"
                            title="Zehr Vibe x Intense - One Wish (Official Visualizer)"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/WZjqblzUIXE"
                            title="Gminxr, Tegi Pannu & Zehr Vibe - WEEKEND (Official Music Video)"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partner Section -->
        <!-- Partner Section -->
        <!-- Partner Section -->
<!-- Partner Section -->
<section class="partner-section">
    <div class="container">
        <div class="section-title">
            <h4>Partner</h4>
            <h2>With The World Premier 80+ Brands</h2>
        </div>
        
        <div class="partner-grid">
            <div class="partner-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft">
            </div>
            <div class="partner-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google">
            </div>
            <div class="partner-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple">
            </div>
            <div class="partner-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle">
            </div>
            <div class="partner-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon">
            </div>
            <div class="partner-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" alt="Tesla">
            </div>
        </div>
    </div>
</section>




        <!-- Testimonial Section -->
        <!-- Testimonial Section -->
<section class="testimonial-section">
    <div class="container">
        <div class="section-title">
            <h4>Testimonials</h4>
            <h2>Clients Testimonials</h2>
        </div>
        
        <div class="testimonial-carousel">
            <div class="testimonial-track">
                <div class="testimonial-slide">
                    <div class="testimonial-card-new">
                        <div class="testimonial-left">
                            <div class="testimonial-image-container">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="John Doe" class="testimonial-image">
                            </div>
                        </div>
                        <div class="testimonial-right">
                            <div class="review-header">
                                <span class="review-label">Reviews On</span>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="platform-info">
                                    <span class="platform-name">fundall</span>
                                    <span class="review-count">4.9/ 60 Reviews</span>
                                </div>
                            </div>
                            <p class="testimonial-text-new">
                                "Life changing! Amazing coach! Thanks to your web agency team for their professional work. The website they created for my business exceeded my expectations, and my clients have given positive feedback about its design and user-friendliness."
                            </p>
                            <div class="client-info">
                                <h4>John Doe</h4>
                                <span>CLIENT</span>
                            </div>
                            <div class="slide-number">01</div>
                        </div>
                    </div>
                </div>

                <div class="testimonial-slide">
                    <div class="testimonial-card-new">
                        <div class="testimonial-left">
                            <div class="testimonial-image-container">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Sarah Johnson" class="testimonial-image">
                            </div>
                        </div>
                        <div class="testimonial-right">
                            <div class="review-header">
                                <span class="review-label">Reviews On</span>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="platform-info">
                                    <span class="platform-name">fundall</span>
                                    <span class="review-count">4.9/ 60 Reviews</span>
                                </div>
                            </div>
                            <p class="testimonial-text-new">
                                "Amazing coach! Thanks to your web agency team for their professional work. The website they created for my business exceeded my expectations, and my clients have given positive feedback about its design and user-friendliness."
                            </p>
                            <div class="client-info">
                                <h4>Sarah Johnson</h4>
                                <span>CLIENT</span>
                            </div>
                            <div class="slide-number">02</div>
                        </div>
                    </div>
                </div>

                <div class="testimonial-slide">
                    <div class="testimonial-card-new">
                        <div class="testimonial-left">
                            <div class="testimonial-image-container">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Mike Wilson" class="testimonial-image">
                            </div>
                        </div>
                        <div class="testimonial-right">
                            <div class="review-header">
                                <span class="review-label">Reviews On</span>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="platform-info">
                                    <span class="platform-name">fundall</span>
                                    <span class="review-count">4.9/ 60 Reviews</span>
                                </div>
                            </div>
                            <p class="testimonial-text-new">
                                "Highly recommend! Amazing coach! Thanks to your web agency team for their professional work. The website they created for my business exceeded my expectations, and my clients have given positive feedback."
                            </p>
                            <div class="client-info">
                                <h4>Mike Wilson</h4>
                                <span>CLIENT</span>
                            </div>
                            <div class="slide-number">03</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


        <!-- FAQ Section -->
        <section class="faq-section">
            <div class="container">
                <div class="section-title">
                    <h4>FAQ</h4>
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div class="faq-item">
                    <button class="faq-question" onclick="toggleFAQ(this)">
                        Can I see your coaching success stories?
                    </button>
                    <div class="faq-answer">
                        <p>Yes! I have helped numerous clients achieve their fitness goals. You can view testimonials
                            and before/after photos in my portfolio section.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" onclick="toggleFAQ(this)">
                        What are your nutrition coaching rates?
                    </button>
                    <div class="faq-answer">
                        <p>My coaching programs start at $99/month for basic nutrition plans. Customized programs with
                            weekly check-ins start at $199/month. I offer discounts for 3-month commitments.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" onclick="toggleFAQ(this)">
                        How do you communicate with clients?
                    </button>
                    <div class="faq-answer">
                        <p>I use a combination of WhatsApp for quick check-ins, weekly Zoom calls for deep dives, and a
                            custom app for meal tracking and progress monitoring.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" onclick="toggleFAQ(this)">
                        Do you offer customized workout plans?
                    </button>
                    <div class="faq-answer">
                        <p>Absolutely! After assessing your fitness level and goals, I create personalized workout
                            routines that fit your schedule and available equipment.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Blog Section -->
        <section class="blog-section">
            <div class="container">
                <div class="section-title">
                    <h4>Blog Insight</h4>
                    <h2>Valuable insights to change your startup idea</h2>
                </div>

                <div class="blog-grid">
                    <div class="blog-card">
                        <div class="blog-image">800X600</div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span class="blog-tag">Design</span>
                                <span class="blog-date">JULY 24, 2024</span>
                            </div>
                            <h3 class="blog-title">Picked up brussels burger signications with ham efforts.</h3>
                            <a href="#" class="blog-link">READ MORE <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="blog-card">
                        <div class="blog-image">800X600</div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span class="blog-tag">Mockup</span>
                                <span class="blog-date">OCTOBER 18, 2024</span>
                            </div>
                            <h3 class="blog-title">This prefabrice passive house is highly sustainable with intent</h3>
                            <a href="#" class="blog-link">READ MORE <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="blog-card">
                        <div class="blog-image">800X600</div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span class="blog-tag">Discuss</span>
                                <span class="blog-date">AUGUST 26, 2024</span>
                            </div>
                            <h3 class="blog-title">Announcing if attachment resolution sentim commercial.</h3>
                            <a href="#" class="blog-link">READ MORE <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
<section class="contact-section">
    <div class="container">
        <div class="contact-content">
            <h2>Hello👋i'm available to assist you</h2>
            <h4>For quick response: <i class="fab fa-skype"></i> Chat now</h4>
            <a href="#" class="chat-button" onclick="openModal()">
                Contact Us <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="footer">
    <div class="footer-main">
        <div class="container">
            <div class="footer-content">
                <div class="footer-left">
                    <div class="footer-logo">John Doe</div>
                    <p class="footer-description">
                        Transforming lives through personalized health coaching and wellness programs. 
                        Your journey to better health starts here.
                    </p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                
                <div class="footer-links">
                    <div class="footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Weight Management</a></li>
                            <li><a href="#">Nutrition Coaching</a></li>
                            <li><a href="#">Fitness Training</a></li>
                            <li><a href="#">Wellness Programs</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h4>Contact Info</h4>
                        <ul>
                            <li><i class="fas fa-envelope"></i> john@example.com</li>
                            <li><i class="fas fa-phone"></i> +1 (555) 123-4567</li>
                            <li><i class="fas fa-map-marker-alt"></i> New York, NY</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer-bottom">
        <div class="container">
            <div class="footer-bottom-content">
                <p>&copy; 2024 John Doe. All Rights Reserved</p>
                <div class="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </div>
    </div>
</footer>

    <!-- Sticky Enroll Bar -->
    <div class="sticky-enroll-bar">
        <div class="enroll-bar-content">
            <div class="price-info">
                <div class="price-wrapper">
                    <span class="current-price">free</span>
                    <span class="original-price">₹999</span>
                </div>
                <div class="deadline">Deadline Coming Soon</div>
            </div>
            <div class="enroll-action">
                <a href="#" class="enroll-button" onclick="openModal()">ENROLL NOW</a>
                <div class="bonus-text">+ Unbelievable Bonuses</div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div id="leadModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h3>Get Your Free Health Assessment Call</h3>
            <p>Take the first step towards a healthier you.</p>
            <form onsubmit="submitForm(event)">
                <div class="form-group">
                    <label for="name">Full Name*</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address*</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">WhatsApp Number*</label>
                    <input type="tel" id="phone" name="phone" required>
                </div>
                <button type="submit" class="submit-btn">Book Free Call</button>
            </form>
        </div>
    </div>
            `,
            js: `      function toggleFAQ(element) {
            const answer = element.nextElementSibling;
            const isActive = element.classList.contains('active');

            // Close all FAQs
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });

            // Open clicked FAQ if it wasn't active
            if (!isActive) {
                element.classList.add('active');
                answer.classList.add('active');
            }
        }

        // Modal Functions
        function openModal() {
            document.getElementById('leadModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('leadModal').style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function (event) {
            const modal = document.getElementById('leadModal');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // Form Submission
        function submitForm(event) {
            event.preventDefault();

            const formData = new FormData(event.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');

            // Here you would typically send the data to your server
            console.log('Form submitted:', { name, email, phone });

            // Show success message
            alert('Thank you ' + name + '! Your information has been submitted. We\'ll contact you soon at ' + email + '.');


            // Close modal and reset form
            closeModal();
            event.target.reset();
        }

        // Smooth Scrolling for anchor links
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

        // Add animation on scroll - Fixed version
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation - Fixed version
        document.addEventListener('DOMContentLoaded', () => {
            // Add CSS for animations
            const style = document.createElement('style');
          style.textContent =
    '.animate-element {' +
        'opacity: 0;' +
        'transform: translateY(30px);' +
        'transition: opacity 0.6s ease, transform 0.6s ease;' +
    '}' +

    '.animate-element.animate-in {' +
        'opacity: 1;' +
        'transform: translateY(0);' +
    '}' +

    '.animate-element:nth-child(1) { transition-delay: 0.1s; }' +
    '.animate-element:nth-child(2) { transition-delay: 0.2s; }' +
    '.animate-element:nth-child(3) { transition-delay: 0.3s; }' +
    '.animate-element:nth-child(4) { transition-delay: 0.4s; }' +
    '.animate-element:nth-child(5) { transition-delay: 0.5s; }' +
    '.animate-element:nth-child(6) { transition-delay: 0.6s; }' +
    '.animate-element:nth-child(7) { transition-delay: 0.7s; }' +
    '.animate-element:nth-child(8) { transition-delay: 0.8s; }';


            const elementsToAnimate = document.querySelectorAll('.training-card, .skill-item, .timeline-item, .portfolio-item, .testimonial-card, .blog-card');

            elementsToAnimate.forEach((el) => {
                el.classList.add('animate-element');
                observer.observe(el);
            });
        });`
           },}
export default landing_page1;