//   function addLandingPageComponents(editor) {
//     const bm = editor.BlockManager;
//     const domc = editor.DomComponents;
  

//   const getAssetUrl = (src) => {
//     if (!src) return src;
//     // If it's already a full URL, return as-is
//     if (src.startsWith('http') || src.startsWith('data:')) return src;
//     // Otherwise, assume it's from our backend
//     return `http://localhost:5000${src.startsWith('/') ? src : `/${src}`}`;
//   };

//   // Enhanced Video Component with Upload Functionality
//   editor.DomComponents.addType('custom-video', {
//     model: {
//       defaults: {
//         tagName: 'div',
//         classes: ['custom-video-container'],
//         droppable: false,
//         resizable: true,
//         traits: [
//           {
//             type: 'checkbox',
//             name: 'controls',
//             label: 'Show Controls'
//           },
//           {
//             type: 'checkbox',
//             name: 'autoplay',
//             label: 'Autoplay'
//           },
//           {
//             type: 'checkbox',
//             name: 'loop',
//             label: 'Loop Video'
//           },
//           {
//             type: 'checkbox',
//             name: 'muted',
//             label: 'Muted'
//           }
//         ],
//         attributes: {
//           'data-video-src': '',
//         },
//       },
//     },
    
//     view: {
//       events: {
//         'click .video-upload-btn': 'openVideoUpload',
//         'dblclick .video-upload-placeholder': 'openVideoUpload',
//       },
      
//       openVideoUpload() {
//         const input = document.createElement('input');
//         input.type = 'file';
//         input.accept = 'video/*';
//         input.style.display = 'none';
        
//         input.onchange = async (e) => {
//           const file = e.target.files[0];
//           if (file) {
//             try {
//               this.showLoadingState();
              
//               const formData = new FormData();
//               formData.append('assets', file);
              
//               const response = await fetch('http://localhost:5000/api/assets', {
//                 method: 'POST',
//                 body: formData,
//               });
              
//               if (!response.ok) {
//                 throw new Error('Upload failed');
//               }
              
//               const result = await response.json();
//               const uploadedVideo = result.data[0];
              
//               this.model.set({
//                 attributes: {
//                   ...this.model.get('attributes'),
//                   'data-video-src': getAssetUrl(uploadedVideo.src),
//                 }
//               });
              
//               this.render();
              
//             } catch (error) {
//               console.error('Video upload failed:', error);
//               alert('Failed to upload video');
//               this.render();
//             }
//           }
//         };
        
//         document.body.appendChild(input);
//         input.click();
//         document.body.removeChild(input);
//       },

//       showLoadingState() {
//         this.el.innerHTML = `
//           <div style="
//             width: 100%; 
//             height: 100%; 
//             display: flex; 
//             align-items: center; 
//             justify-content: center; 
//             background: #f5f5f5;
//             border: 2px dashed #ddd;
//             color: #666;
//           ">
//             <div style="
//               width: 40px;
//               height: 40px;
//               border: 4px solid #ddd;
//               border-top: 4px solid #3498db;
//               border-radius: 50%;
//               animation: spin 1s linear infinite;
//             "></div>
//           </div>
//           <style>
//             @keyframes spin {
//               0% { transform: rotate(0deg); }
//               100% { transform: rotate(360deg); }
//             }
//           </style>
//         `;
//       },
      
//       render() {
//         const videoSrc = this.model.get('attributes')['data-video-src'];
//         const showControls = this.model.getTrait('controls')?.get('value');
//         const autoplay = this.model.getTrait('autoplay')?.get('value');
//         const loop = this.model.getTrait('loop')?.get('value');
//         const muted = this.model.getTrait('muted')?.get('value');
        
//         if (videoSrc) {
//           this.el.innerHTML = `
//             <video 
//               style="width: 100%; height: 100%; display: block;"
//               ${showControls ? 'controls' : ''}
//               ${autoplay ? 'autoplay' : ''}
//               ${loop ? 'loop' : ''}
//               ${muted ? 'muted' : ''}
//               playsinline
//               preload="metadata"
//             >
//               <source src="${getAssetUrl(videoSrc)}" type="video/mp4">
//               Your browser does not support the video tag.
//             </video>
//           `;
//         } else {
//           this.el.innerHTML = `
//             <div style="
//               width: 100%;
//               height: 100%;
//               min-height: 200px;
//               border: 2px dashed #ccc; 
//               display: flex; 
//               flex-direction: column; 
//               align-items: center; 
//               justify-content: center; 
//               background: #f9f9f9;
//               cursor: pointer;
//             ">
//               <svg width="48" height="48" viewBox="0 0 24 24" fill="#3498db">
//                 <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
//                 <path d="M14 2V8H20" stroke="currentColor" stroke-width="1.5" fill="none"/>
//                 <polygon points="10,12 14,16 18,12" fill="currentColor"/>
//                 <line x1="14" y1="16" x2="14" y2="8" stroke="currentColor" stroke-width="2"/>
//               </svg>
//               <button class="video-upload-btn" style="
//                 margin-top: 15px;
//                 padding: 8px 16px;
//                 background: #3498db;
//                 color: white;
//                 border: none;
//                 border-radius: 4px;
//                 cursor: pointer;
//               ">
//                 Upload Video
//               </button>
//             </div>
//           `;
//         }
        
//         return this;
//       }
//     }
//   });

//   // Enhanced Image Component with Upload Functionality
//   editor.DomComponents.addType('custom-image', {
//     model: {
//       defaults: {
//         tagName: 'div',
//         classes: ['custom-image-container'],
//         droppable: false,
//         resizable: true,
//         traits: [
//           {
//             type: 'text',
//             name: 'alt',
//             label: 'Alt Text',
//             placeholder: 'Image description'
//           },
//           {
//             type: 'select',
//             name: 'object_fit',
//             label: 'Image Fit',
//             options: [
//               { value: 'cover', name: 'Cover' },
//               { value: 'contain', name: 'Contain' },
//               { value: 'fill', name: 'Fill' },
//               { value: 'none', name: 'None' }
//             ],
//             default: 'cover'
//           }
//         ],
//         attributes: {
//           'data-image-src': '',
//         },
//       },
//     },
    
//     view: {
//       events: {
//         'click .image-upload-btn': 'openImageUpload',
//         'dblclick .image-upload-placeholder': 'openImageUpload',
//       },
      
//       openImageUpload() {
//         const input = document.createElement('input');
//         input.type = 'file';
//         input.accept = 'image/*';
//         input.style.display = 'none';
        
//         input.onchange = async (e) => {
//           const file = e.target.files[0];
//           if (file) {
//             try {
//               this.showLoadingState();
              
//               const formData = new FormData();
//               formData.append('assets', file);
              
//               const response = await fetch('http://localhost:5000/api/assets', {
//                 method: 'POST',
//                 body: formData,
//               });
              
//               if (!response.ok) {
//                 throw new Error('Upload failed');
//               }
              
//               const result = await response.json();
//               const uploadedImage = result.data[0];
              
//               // Update the model with the new image source
//               this.model.set({
//                 attributes: {
//                   ...this.model.get('attributes'),
//                   'data-image-src': getAssetUrl(uploadedImage.src),
//                 }
//               });
              
//               // Trigger a re-render
//               this.render();
              
//             } catch (error) {
//               console.error('Image upload failed:', error);
//               alert('Failed to upload image');
//               this.render();
//             }
//           }
//         };
        
//         document.body.appendChild(input);
//         input.click();
//         document.body.removeChild(input);
//       },

//       showLoadingState() {
//         this.el.innerHTML = `
//           <div style="
//             width: 100%; 
//             height: 100%; 
//             display: flex; 
//             align-items: center; 
//             justify-content: center; 
//             background: #f5f5f5;
//             border: 2px dashed #ddd;
//             color: #666;
//           ">
//             <div style="
//               width: 40px;
//               height: 40px;
//               border: 4px solid #ddd;
//               border-top: 4px solid #e74c3c;
//               border-radius: 50%;
//               animation: spin 1s linear infinite;
//             "></div>
//           </div>
//           <style>
//             @keyframes spin {
//               0% { transform: rotate(0deg); }
//               100% { transform: rotate(360deg); }
//             }
//           </style>
//         `;
//       },
      
//       render() {
//         const imageSrc = this.model.get('attributes')['data-image-src'];
//         const altText = this.model.getTrait('alt')?.get('value') || '';
//         const objectFit = this.model.getTrait('object_fit')?.get('value') || 'cover';
        
//         if (imageSrc) {
//           // Use the actual image element instead of a div
//           this.el.innerHTML = `
//             <img 
//               src="${getAssetUrl(imageSrc)}"
//               alt="${altText}"
//               style="width: 100%; height: 100%; object-fit: ${objectFit}; display: block;"
//               draggable="false"
//             />
//           `;
//         } else {
//           this.el.innerHTML = `
//             <div style="
//               width: 100%;
//               height: 100%;
//               min-height: 150px;
//               border: 2px dashed #ccc; 
//               display: flex; 
//               flex-direction: column; 
//               align-items: center; 
//               justify-content: center; 
//               background: #f9f9f9;
//               cursor: pointer;
//             ">
//               <svg width="48" height="48" viewBox="0 0 24 24" fill="#e74c3c">
//                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="1.5" fill="none"/>
//                 <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
//                 <path d="M21 15L16 10L5 21" stroke="currentColor" stroke-width="1.5" fill="none"/>
//               </svg>
//               <button class="image-upload-btn" style="
//                 margin-top: 15px;
//                 padding: 8px 16px;
//                 background: #e74c3c;
//                 color: white;
//                 border: none;
//                 border-radius: 4px;
//                 cursor: pointer;
//               ">
//                 Upload Image
//               </button>
//             </div>
//           `;
//         }
        
//         return this;
//       }
//     }
//   });

//   // Rest of your existing components (VSL Video, WhatsApp Button, etc.)
//   // ... [keep all your existing component definitions as they are]

//   // Add video block to the Basic section
//   editor.BlockManager.add('custom-video', {
//     label: 'Video',
//     category: 'Basic',
//     content: {
//       type: 'custom-video'
//     },
//     media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
//   });

//   // Add image block to the Basic section
//   editor.BlockManager.add('custom-image', {
//     label: 'Image',
//     category: 'Basic',
//     content: {
//       type: 'custom-image'
//     },
//     media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2z"/></svg>`,
//   });

//     // VSL Video Component
//     bm.add("vsl-video", {
//       label: "VSL Video",
//       category: "Landing Page",
//       content: {
//         type: "video",
//         provider: "yt",
//         videoId: "dQw4w9WgXcQ",
//         style: { 
//           width: "100%", 
//           "aspect-ratio": "16 / 9",
//           "border-radius": "8px",
//           "box-shadow": "0 5px 15px rgba(0,0,0,0.1)"
//         },
//         attributes: {
//           "data-vsl": "true"
//         }
//       },
//     });

//     // WhatsApp Button Component
//     bm.add("whatsapp-button", {
//       label: "WhatsApp Button",
//       category: "Landing Page",
//       content: {
//         tagName: "a",
//         content: "Join on WhatsApp",
//         attributes: {
//           href: "https://chat.whatsapp.com/YourGroupInviteLink",
//           target: "_blank",
//           style: "display:inline-block;padding:15px 25px;background-color:#25D366;color:white;text-decoration:none;border-radius:8px;font-weight:bold;transition:all 0.3s;"
//         },
//       },
//     });

//     // CTA Button
//     bm.add("cta-button", {
//       label: "CTA Button",
//       category: "Landing Page",
//       content: {
//         tagName: "a",
//         content: "Get Started Now",
//         attributes: {
//           href: "#",
//           style: "display:inline-block;padding:15px 30px;background-color:#e74c3c;color:white;text-decoration:none;border-radius:5px;font-weight:bold;font-size:1.1em;transition:all 0.3s;"
//         },
//       },
//     });

//     // Feature Box
//     bm.add("feature-box", {
//       label: "Feature Box",
//       category: "Landing Page",
//       content: {
//         style: {
//           "flex": "1",
//           "min-width": "300px",
//           "max-width": "350px",
//           "margin": "20px",
//           "padding": "30px",
//           "background": "white",
//           "border-radius": "8px",
//           "box-shadow": "0 5px 15px rgba(0,0,0,0.05)",
//           "text-align": "center"
//         },
//         components: [
//           {
//             type: "text",
//             content: "<h3>Amazing Feature</h3><p>Description of this great feature that will benefit the user.</p>",
//             style: { "margin": "0" }
//           }
//         ]
//       },
//     });

//     // Testimonial Component
//     bm.add("testimonial", {
//       label: "Testimonial",
//       category: "Landing Page",
//       content: {
//         style: {
//           "background": "white",
//           "padding": "30px",
//           "border-radius": "8px",
//           "box-shadow": "0 5px 15px rgba(0,0,0,0.05)",
//           "max-width": "500px",
//           "margin": "20px auto",
//           "position": "relative"
//         },
//         components: [
//           {
//             type: "text",
//             content: "<p style='font-style:italic;margin-bottom:20px;'>\"This product changed my life! I've never seen such amazing results before.\"</p>",
//             style: { "margin": "0" }
//           },
//           {
//             type: "text",
//             content: "<p style='font-weight:bold;margin:0;'>- Satisfied Customer</p>",
//             style: { "margin": "0" }
//           }
//         ]
//       },
//     });

//     // Webinar Registration Form
//     domc.addType('webinar-form', {
//       model: {
//         defaults: {
//           tagName: 'form',
//           attributes: { 
//             style: 'font-family: Arial, sans-serif;',
//             method: 'post'
//           },
//           components: [
//             {
//               type: 'text',
//               content: '<h3 style="text-align:center;margin-bottom:20px;">Register for the Webinar</h3>',
//               draggable: false
//             },
//             {
//               tagName: 'div',
//               attributes: { class: 'form-group' },
//               components: [
//                 {
//                   tagName: 'label',
//                   attributes: { for: 'name' },
//                   content: 'Full Name'
//                 },
//                 {
//                   tagName: 'input',
//                   attributes: { 
//                     type: 'text', 
//                     id: 'name', 
//                     name: 'name',
//                     required: 'required',
//                     style: 'width:100%;padding:10px;border:1px solid #ddd;border-radius:4px;'
//                   }
//                 }
//               ]
//             },
//             {
//               tagName: 'div',
//               attributes: { class: 'form-group' },
//               components: [
//                 {
//                   tagName: 'label',
//                   attributes: { for: 'email' },
//                   content: 'Email Address'
//                 },
//                 {
//                   tagName: 'input',
//                   attributes: { 
//                     type: 'email', 
//                     id: 'email', 
//                     name: 'email',
//                     required: 'required',
//                     style: 'width:100%;padding:10px;border:1px solid #ddd;border-radius:4px;'
//                   }
//                 }
//               ]
//             },
//             {
//               tagName: 'button',
//               attributes: { 
//                 type: 'submit',
//                 class: 'submit-btn',
//                 style: 'background:#4a89dc;color:white;border:none;padding:12px 20px;width:100%;border-radius:4px;cursor:pointer;font-size:1em;'
//               },
//               content: 'Register Now'
//             }
//           ]
//         }
//       }
//     });

//     bm.add('webinar-form', {
//       label: 'Webinar Form',
//       category: 'Landing Page',
//       content: { type: 'webinar-form' }
//     });

//     // Countdown Timer
//     bm.add('countdown-timer', {
//       label: 'Countdown Timer',
//       category: 'Landing Page',
//       content: {
//         type: 'countdown',
//         attributes: {
//           'data-end': '2025-12-31 23:59:59',
//           style: 'font-size:24px;text-align:center;padding:20px;background:#f8f9fa;border-radius:8px;'
//         }
//       }
//     });

//     // Popup Trigger Button
//     bm.add('popup-trigger', {
//       label: 'Popup Trigger',
//       category: 'Landing Page',
//       content: {
//         tagName: 'button',
//         content: 'Click for Special Offer',
//         attributes: {
//           style: 'padding:12px 25px;background:#ff6b6b;color:white;border:none;border-radius:5px;cursor:pointer;font-weight:bold;',
//           'data-popup': 'true'
//         }
//       }
//     });


    
//         bm.add('advanced-appointment-form', {
//           label: 'Advanced Appointment Form',
//           category: 'Integrations',
//           content: `
//           <style>/* ... (पिछली CSS के सभी स्टाइल यहाँ कॉपी करें) ... */

// /* Overall page background matching the image */
// .page-background {
//   background-color: rgb(255, 174, 0); /* Purple background from image */
//   min-height: 100vh;
//   padding: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
//   box-sizing: border-box;
// }

// .form-card {
//   background-color: #FFFFFF;
//   border-radius: 8px;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 960px;
//   display: flex;
//   flex-direction: column;
// }

// .form-card-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 18px 25px;
//   border-bottom: 1px solid #E9ECEF;
// }

// .logo-container .logo-text {
//   font-weight: bold;
//   font-size: 1.5em;
//   color: rgb(255, 174, 0);
// }

// .user-info {
//   display: flex;
//   align-items: center;
//   font-size: 0.9em;
//   color: #495057;
// }
// .user-avatar {
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   margin-right: 10px;
//   object-fit: cover;
// }
// .dropdown-arrow { margin-left: 8px; font-size: 0.7em; }

// .form-card-body { display: flex; flex-grow: 1; }

// .sidebar {
//   width: 250px;
//   background-color: #F8F9FA;
//   padding: 30px 25px;
//   border-right: 1px solid #E9ECEF;
//   display: flex;
//   flex-direction: column;

// }
// .sidebar-icon-container { margin-bottom: 20px; color: rgb(255, 174, 0); }
// .sidebar-title { font-size: 1.25em; color: #343A40; margin-top: 0; margin-bottom: 8px; }
// .sidebar-subtitle { font-size: 0.85em; color: #6C757D; margin-bottom: 25px; }
// .sidebar-progress-bar {
//   width: 80%; /* Increased width for better visibility */
//   height: 8px; /* Slightly thicker */
//   background-color: #DEE2E6;
//   border-radius: 4px;
//   overflow: hidden;
// }
// .sidebar-progress {
//   height: 100%;
//   background-color: rgb(255, 174, 0);
//   border-radius: 4px;
//   transition: width 0.3s ease-in-out; /* Smooth transition for progress */
// }

// .main-content {
//   flex-grow: 1;
//   padding: 30px 35px;
//   overflow-y: auto;
//   max-height: calc(100vh - 160px); /* (Header + Padding + some buffer) */
// }
// .main-title { font-size: 1.75em; color: #343A40; margin-top: 0; margin-bottom: 25px; }

// .appointment-form .form-section-title { /* For step titles like "Personal Details" */
//   font-size: 1.2em; /* Made slightly larger */
//   color: #343A40; /* Darker for more prominence */
//   margin-bottom: 20px;
//   padding-bottom: 10px;
//   border-bottom: 1px solid #E9ECEF;
// }

// .form-step-content-area {
//   min-height: 300px; /* Ensure some min height for content switching */
// }

// .form-row { display: flex; gap: 20px; margin-bottom: 15px; }
// .form-row .form-group { flex: 1; margin-bottom: 0; }
// .form-group { margin-bottom: 20px; }
// .form-group label { display: block; font-weight: 600; font-size: 0.85em; margin-bottom: 8px; color: #495057; }

// .form-group input[type="text"],
// .form-group input[type="email"],
// .form-group input[type="tel"],
// .form-group input[type="number"],
// .form-group select,
// .form-group textarea {
//   width: 100%;
//   padding: 10px 12px;
//   border: 1px solid #CED4DA;
//   border-radius: 4px;
//   font-size: 0.95em;
//   box-sizing: border-box;
//   background-color: #FFFFFF;
//   color: #495057;
//   transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
// }
// .form-group input:focus,
// .form-group select:focus,
// .form-group textarea:focus {
//   border-color: #80BDFF;
//   outline: 0;
//   box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
// }
// .form-group textarea { resize: vertical; min-height: 80px; }

// .radio-group { display: flex; gap: 15px; flex-wrap: wrap; }
// .radio-group label { font-weight: normal; font-size: 0.9em; display: inline-flex; align-items: center; cursor: pointer; }
// .radio-group input[type="radio"] { margin-right: 6px; accent-color: rgb(255, 174, 0); }
// .conditional-input { margin-top: 10px; }

// .form-actions { margin-top: 30px; display: flex; justify-content: flex-end; gap: 12px; }
// .form-actions button { padding: 10px 20px; border-radius: 4px; font-size: 0.9em; font-weight: 600; cursor: pointer; transition: background-color 0.2s ease, border-color 0.2s ease; }
// .button-cancel { background-color: #F8F9FA; color: #6C757D; border: 1px solid #CED4DA; }
// .button-cancel:hover { background-color: #E2E6EA; border-color: #DAE0E5; }
// .button-next { background-color: rgb(255, 174, 0); color: white; border: 1px solid rgb(255, 174, 0); }
// .button-next:hover { background-color: rgb(255, 174, 0); border-color: rgb(255, 174, 0); }
// .form-actions button:first-child:not(:only-child) { /* If Back button exists */
//     margin-right: auto; /* Pushes Back button to the left */
// }


// /* --- Styles for Calendar and Time Slots --- */
// .calendar-wrapper {
//   padding: 15px;
//   border: 1px solid #E9ECEF;
//   border-radius: 6px;
//   margin-bottom: 25px;
//   background-color: #FDFDFD; /* Slightly off-white for calendar background */
// }
// .calendar-navigation {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 15px;
// }
// .current-month-year { font-size: 1.1em; font-weight: 600; color: #343A40; }
// .nav-arrow {
//   background: none; border: none; font-size: 1.4em; color: rgb(255, 174, 0); cursor: pointer; padding: 0 8px;
// }
// .nav-arrow:hover { color: #0056b3; }

// .calendar-grid-headers, .calendar-grid-days {
//   display: grid;
//   grid-template-columns: repeat(7, 1fr);
//   text-align: center;
// }
// .grid-header-cell { font-weight: 600; font-size: 0.8em; padding-bottom: 8px; color: #6C757D; }
// .calendar-day {
//   padding: 10px 5px;
//   border: 1px solid transparent;
//   background-color: #FFFFFF;
//   color: #495057;
//   cursor: pointer;
//   font-size: 0.9em;
//   position: relative;
//   transition: background-color 0.2s, border-color 0.2s, color 0.2s;
//   margin: 1px;
//   border-radius: 4px;
// }
// .calendar-day.empty { background-color: transparent; cursor: default; }
// .calendar-day.unavailable, .calendar-day.past {
//   color: #ADB5BD;
//   background-color: #F1F3F5; /* Lighter grey for unavailable/past */
//   cursor: not-allowed;
//   text-decoration: line-through;
// }
// .calendar-day.available:hover { background-color: #E9ECEF; border-color: #CED4DA; }
// .calendar-day.selected {
//   background-color: rgb(255, 174, 0) !important;
//   color: white !important;
//   border-color: rgb(255, 174, 0) !important;
//   font-weight: bold;
// }
// .availability-dot {
//   height: 5px; width: 5px; background-color: #28A745; /* Green dot for availability */
//   border-radius: 50%; display: block; margin: 3px auto 0;
// }
// .calendar-day.selected .availability-dot { background-color: white; }

// .time-selector-wrapper { margin-top: 20px; }
// .time-selector-title { font-size: 1em; font-weight: 600; margin-bottom: 10px; color: #343A40; }
// .time-slots-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
//   gap: 10px;
// }
// .time-slot-btn {
//   padding: 8px 10px;
//   border: 1px solid #CED4DA;
//   background-color: #FFFFFF;
//   color: rgb(255, 174, 0);
//   border-radius: 4px;
//   cursor: pointer;
//   text-align: center;
//   font-size: 0.9em;
//   transition: background-color 0.2s, color 0.2s, border-color 0.2s;
// }
// .time-slot-btn:hover { background-color: #E9ECEF; border-color: rgb(255, 174, 0); }
// .time-slot-btn.selected {
//   background-color: rgb(255, 174, 0) !important;
//   color: white !important;
//   border-color: rgb(255, 174, 0) !important;
//   font-weight: bold;
// }

// /* Review Section Styles */
// .review-section {
//   margin-bottom: 12px;
//   font-size: 0.95em;
//   line-height: 1.6;
// }
// .review-section strong {
//   color: #343A40;
//   min-width: 150px; /* Adjust for alignment if needed */
//   display: inline-block;
// }

// /* Scrollbar and Responsive (from previous CSS) */
// .main-content::-webkit-scrollbar { width: 8px; }
// .main-content::-webkit-scrollbar-track { background: #F1F1F1; border-radius: 10px; }
// .main-content::-webkit-scrollbar-thumb { background: #C0C0C0; border-radius: 10px; }
// .main-content::-webkit-scrollbar-thumb:hover { background: #A0A0A0; }

// @media (max-width: 768px) {
//   .page-background { padding: 15px; }
//   .form-card-body { flex-direction: column; }
//   .sidebar { width: 100%; border-right: none; border-bottom: 1px solid #E9ECEF; padding: 20px; max-height: none; }
//   .main-content { padding: 20px; max-height: none; }
//   .form-row { flex-direction: column; gap: 0; }
//   .form-row .form-group { margin-bottom: 15px; }
//    .form-actions { flex-direction: column; }
//   .form-actions button { width: 100%; }
//   .form-actions button:first-child:not(:only-child) { margin-right: 0; margin-bottom: 10px; } /* Adjust for stacked buttons */
// }


// /* Black Theme with Orange Accents */
// .page-background.dark-theme {
//   background-color: #000000; /* Pure black */
// }

// .page-background.light-theme {
//   background-color: #F3F4F6;
// }

// .dark-theme .form-card {
//   background-color: #121212; /* Slightly lighter than pure black */
//   color: #e0e0e0;
//   border: 1px solid #333333;
// }

// .dark-theme .form-card-header {
//   border-bottom-color: #333333;
//   background-color: #121212;
// }

// .dark-theme .logo-text,
// .dark-theme .main-title,
// .dark-theme .form-section-title,
// .dark-theme .sidebar-title {
//   color: rgb(255, 174, 0); /* Orange headings */
// }

// .dark-theme .review-section strong {
//   color: rgb(255, 174, 0); /* Orange for strong text */
// }

// .dark-theme .sidebar {
//   background-color: #121212;
//   border-right-color: #333333;
// }

// .dark-theme .form-group label,
// .dark-theme .sidebar-subtitle {
//   color: #b0b0b0;
// }

// .dark-theme .review-section {
//   color: #d0d0d0;
// }

// .dark-theme input[type="text"],
// .dark-theme input[type="email"],
// .dark-theme input[type="tel"],
// .dark-theme input[type="number"],
// .dark-theme select,
// .dark-theme textarea {
//   background-color: #1e1e1e;
//   border-color: #333333;
//   color: #e0e0e0;
// }

// .dark-theme input:focus,
// .dark-theme select:focus,
// .dark-theme textarea:focus {
//   border-color: rgb(255, 174, 0);
//   box-shadow: 0 0 0 0.2rem rgba(255, 174, 0, 0.25);
// }

// .dark-theme .calendar-wrapper {
//   background-color: #1e1e1e;
//   border-color: #333333;
// }

// .dark-theme .calendar-day {
//   background-color: #1e1e1e;
//   color: #e0e0e0;
// }

// .dark-theme .calendar-day.available:hover {
//   background-color: #2a2a2a;
// }

// .dark-theme .calendar-day.selected {
//   background-color: rgb(255, 174, 0) !important;
//   color: #121212 !important;
//   border-color: rgb(255, 174, 0) !important;
// }

// .dark-theme .calendar-day.unavailable,
// .dark-theme .calendar-day.past {
//   background-color: #2a2a2a;
//   color: #707070;
// }

// .dark-theme .time-slot-btn {
//   background-color: #1e1e1e;
//   border-color: #333333;
//   color: #e0e0e0;
// }

// .dark-theme .time-slot-btn.selected {
//   background-color: rgb(255, 174, 0) !important;
//   color: #121212 !important;
//   border-color: rgb(255, 174, 0) !important;
// }

// .dark-theme .button-next {
//   background-color: rgb(255, 174, 0);
//   color: #121212;
//   border-color: rgb(255, 174, 0);
// }

// .dark-theme .button-next:hover {
//   background-color: rgb(255, 190, 50);
//   border-color: rgb(255, 190, 50);
// }

// .dark-theme .button-cancel {
//   background-color: #2a2a2a;
//   color: #e0e0e0;
//   border-color: #333333;
// }

// .dark-theme .button-cancel:hover {
//   background-color: #333333;
// }

// .dark-theme .radio-group input[type="radio"] {
//   accent-color: rgb(255, 174, 0);
// }

// .dark-theme .sidebar-progress {
//   background-color: rgb(255, 174, 0);
// }

// .dark-theme .availability-dot {
//   background-color: rgb(255, 174, 0);
// }

// /* ... (Existing CSS) ... */

// /* Sidebar improvements */
// .sidebar {
//   width: 300px; /* Aap ise 250px ya apni pasand se adjust kar sakte hain */
//   /* Image ke अनुसार white background */
//   border-right: 1px solid #E9ECEF;
//   display: flex;
//   flex-direction: column; /* Scrollable content aur cookie link ko stack karne ke liye */
//   /* Agar form-card-body ki height main-content ke hisab se stretch hoti hai, toh sidebar bhi stretch hoga */
// }

// .sidebar-scrollable-content {
//   flex-grow: 1; /* Bachi hui jagah lega */
//   overflow-y: auto; /* Vertical scroll agar content zyada ho */
//   padding: 25px;
//   color: #343A40; /* Default text color */
// }

// /* Sidebar scrollbar styling (optional) */
// .sidebar-scrollable-content::-webkit-scrollbar {
//   width: 6px;
// }
// .sidebar-scrollable-content::-webkit-scrollbar-track {
//   background: #f0f0f0;
//   border-radius: 3px;
// }
// .sidebar-scrollable-content::-webkit-scrollbar-thumb {
//   background: #cccccc;
//   border-radius: 3px;
// }
// .sidebar-scrollable-content::-webkit-scrollbar-thumb:hover {
//   background: #aaaaaa;
// }

// .cookie-settings-container {
//   padding: 15px 25px;
//   border-top: 1px solid #E9ECEF; /* Separator */
//   font-size: 0.85em;
//   background-color: #FFFFFF; /* Ensures background consistency */
//   flex-shrink: 0; /* Prevents shrinking */
//   text-align: left; /* Ensure text is aligned left */
// }

// .cookie-settings-link {
//   color: #6C757D; /* Image jaisa halka color */
//   text-decoration: none;
// }
// .cookie-settings-link:hover {
//   text-decoration: underline;
// }

// /* Content styling inside sidebar */
// .sidebar-coach-name {
//   font-size: 0.9em;
//   color: #6C757D;
//   margin-bottom: 4px;
// }

// .sidebar-main-assessment-title {
//   font-size: 1.5em; /* Image ke bade title jaisa */
//   font-weight: bold;
//   color: #1f2d3d; /* Thoda gehra color */
//   margin-bottom: 15px;
//   line-height: 1.3;
// }

// .sidebar-info-item {
//   display: flex;
//   align-items: flex-start; /* Align items to the start for multi-line text */
//   margin-bottom: 10px;
//   font-size: 0.9em;
//   color: #495057;
// }

// .sidebar-info-item svg {
//   margin-right: 8px;
//   flex-shrink: 0; /* Icon ko shrink hone se bachaye */
//   width: 18px; /* Explicit width */
//   height: 18px; /* Explicit height */
//   margin-top: 2px; /* Align with first line of text */
// }

// .sidebar-section-heading {
//   font-size: 0.9em; /* Consistent with image's smaller headings */
//   font-weight: bold;
//   color: #1f2d3d;
//   margin-top: 20px;
//   margin-bottom: 8px;
// }

// .sidebar-list {
//   list-style-position: outside;
//   padding-left: 20px;
//   margin-top: 0;
//   margin-bottom: 15px;
//   font-size: 0.85em; /* Thoda chhota text list ke liye */
//   color: #495057;
//   line-height: 1.5;
// }

// .sidebar-list-item {
//   margin-bottom: 6px;
// }

// .sidebar-small-text {
//   font-size: 0.85em; /* Consistent chhota text */
//   color: #495057;
//   line-height: 1.5;
//   margin-bottom: 15px;
// }

// /* Dark Theme adjustments for new sidebar content */
// .dark-theme .sidebar {
//   background-color: #121212; /* Dark card background */
//   border-right-color: #333333;
// }

// .dark-theme .sidebar-scrollable-content {
//   color: #e0e0e0; /* Light text for dark background */
// }
// .dark-theme .sidebar-scrollable-content::-webkit-scrollbar-track {
//   background: #2a2a2a;
// }
// .dark-theme .sidebar-scrollable-content::-webkit-scrollbar-thumb {
//   background: #555555;
// }
// .dark-theme .sidebar-scrollable-content::-webkit-scrollbar-thumb:hover {
//   background: #777777;
// }


// .dark-theme .cookie-settings-container {
//   background-color: #121212;
//   border-top-color: #333333;
// }

// .dark-theme .cookie-settings-link {
//   color: #a0a0a0; /* Lighter grey for dark theme */
// }

// .dark-theme .sidebar-coach-name {
//   color: #a0a0a0;
// }

// .dark-theme .sidebar-main-assessment-title,
// .dark-theme .sidebar-section-heading {
//   color: #f0f0f0; /* Brighter white/off-white for headings */
// }

// .dark-theme .sidebar-info-item,
// .dark-theme .sidebar-list,
// .dark-theme .sidebar-small-text {
//   color: #b0b0b0; /* Lighter grey for general text */
// }

// /* Ensure icons in dark theme also adapt if they use currentColor */
// .dark-theme .sidebar-info-item svg {
//   color: #b0b0b0; /* Match text color or use accent */
// }

// /* Ensure .form-card-body allows sidebar and main-content to define its height */
// .form-card-body {
//   display: flex;
//   flex-grow: 1;
//   /* align-items: stretch; /* Default, good */
// }
// /* --- Styles for Form Subsection Titles --- */
// .form-subsection-title {
//   font-size: 1.1em; /* Slightly smaller than form-section-title */
//   color: #495057;   /* A bit softer than the main section title */
//   margin-top: 25px; /* More top margin for separation */
//   margin-bottom: 15px;
//   padding-bottom: 8px;
//   border-bottom: 1px solid #E9ECEF; /* Consistent with other borders */
//   font-weight: 600; /* Make it semi-bold */
// }

// .dark-theme .form-subsection-title {
//   color: #c0c0c0; /* Lighter grey for dark theme */
//   border-bottom-color: #333333;
// }

// /* --- Styles for Congratulations Screen --- */
// .congratulations-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   padding: 40px 20px; /* Responsive padding */
//   background-color: #FFFFFF;
//   border-radius: 12px; /* Slightly more rounded */
//   box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
//   width: 100%;
//   max-width: 650px; 
//   margin: 40px auto; /* Centered on the page-background */
//   animation: fadeInScaleUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; /* Playful bounce */
//   color: #343A40; /* Darker text for better readability */
// }

// .congratulations-container h2 {
//   font-size: 2.2em; /* Adjusted size */
//   color: rgb(255, 174, 0); /* Theme accent color */
//   margin-bottom: 15px;
//   font-weight: 700;
// }

// .congratulations-container p {
//   font-size: 1.05em; /* Slightly larger paragraph text */
//   color: #495057;
//   margin-bottom: 12px;
//   line-height: 1.7;
//   max-width: 90%; /* Prevent text from being too wide */
// }

// .congratulations-container p strong {
//     color: #343A40;
// }

// .congratulations-icon {
//   color: rgb(255, 174, 0); /* Accent color for the icon */
//   margin-bottom: 20px;
//   animation: iconPop 0.5s 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) backwards; /* Delayed pop with bounce */
// }

// @keyframes fadeInScaleUp {
//   0% {
//     opacity: 0;
//     transform: translateY(30px) scale(0.9);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0) scale(1);
//   }
// }

// @keyframes iconPop {
//   0% { transform: scale(0); opacity: 0; }
//   70% { transform: scale(1.15); opacity: 1; }
//   100% { transform: scale(1); opacity: 1; }
// }

// /* Dark theme adjustments for congratulations */
// .dark-theme .congratulations-container {
//   background-color: #1A1A1A; /* Darker card background */
//   color: #e0e0e0;
//   border: 1px solid #383838; /* Slightly more prominent border */
//   box-shadow: 0 12px 30px rgba(255, 174, 0, 0.08); /* Subtle orange glow */
// }
// .dark-theme .congratulations-container h2 {
//   color: rgb(255, 174, 0);
// }
// .dark-theme .congratulations-container p {
//   color: #b0b0b0;
// }
// .dark-theme .congratulations-container p strong {
//     color: #e0e0e0;
// }
// .dark-theme .congratulations-icon {
//   color: rgb(255, 174, 0); /* Orange accent for dark theme icon too */
// }

// /* Ensure the page background accommodates the congratulations box if it's taller */
// .page-background {
//     min-height: 100vh;
//     padding: 20px; /* Ensure some padding even on smaller screens */
//     display: flex; /* Helps center the congratulations box if it's the only child */
//     align-items: center; /* Vertically center if content is not too tall */
//     justify-content: center;
// }

// /* --- Styles for NEW Enhanced Congratulations Screen --- */
// .page-background { /* Ensure it's set up for centering */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     min-height: 100vh;
//     overflow: hidden; /* Hide confetti that goes off-screen */
// }

// .congratulations-container-wrapper {
//   position: relative; /* For confetti positioning */
//   perspective: 1000px; /* For 3D-ish effects if desired later */
// }

// .congratulations-container {
//   position: relative; /* For z-index stacking of confetti */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   padding: 35px 25px;
//   background-color: #FFFFFF;
//   border-radius: 15px; /* Softer, more modern radius */
//   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0,0,0,0.07); /* Deeper shadow */
//   width: 100%;
//   max-width: 600px; /* Slightly narrower for a sleeker look */
//   margin: 20px;
//   color: #343A40;
//   z-index: 10; /* Above confetti background if any */
//   /* Entrance Animation */
//   opacity: 0;
//   transform: translateY(50px) scale(0.8);
//   animation: energeticEntrance 0.8s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
// }

// .congratulations-title { /* Renamed from h2 for clarity */
//   font-size: 2.3em;
//   color: rgb(255, 174, 0); /* Your theme accent */
//   margin-bottom: 10px;
//   font-weight: 700;
//   animation: textGlow 1.5s ease-in-out infinite alternate; /* Subtle glow */
// }

// .congratulations-container p {
//   font-size: 1em;
//   color: #495057;
//   margin-bottom: 10px;
//   line-height: 1.6;
//   max-width: 95%;
// }

// .congratulations-container p strong {
//   color: #2c3e50; /* Slightly darker strong text */
// }

// .congratulations-icon {
//   color: rgb(255, 174, 0);
//   margin-bottom: 15px;
//   transform: scale(0);
//   opacity: 0;
//   animation: iconCelebration 0.7s 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
// }

// /* Keyframe Animations */
// @keyframes energeticEntrance {
//   0% {
//     opacity: 0;
//     transform: translateY(50px) scale(0.8);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0) scale(1);
//   }
// }

// @keyframes iconCelebration {
//   0% { transform: scale(0) rotate(-30deg); opacity: 0; }
//   60% { transform: scale(1.2) rotate(10deg); opacity: 1; }
//   100% { transform: scale(1) rotate(0deg); opacity: 1; }
// }

// @keyframes textGlow {
//   from {
//     text-shadow: 0 0 5px rgba(255, 174, 0, 0.4), 0 0 10px rgba(255, 174, 0, 0.3);
//   }
//   to {
//     text-shadow: 0 0 10px rgba(255, 174, 0, 0.6), 0 0 20px rgba(255, 174, 0, 0.4);
//   }
// }

// /* Confetti Styles */
// .confetti-burst-container {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: visible; /* Allow confetti to fly out */
//   pointer-events: none; /* Don't interfere with clicks */
//   z-index: 1; /* Behind the main content but visible */
// }

// .confetti-piece {
//   position: absolute;
//   opacity: 0; /* Start hidden */
//   animation-name: confettiFall;
//   animation-timing-function: linear; /* Consistent fall speed */
//   animation-fill-mode: forwards;
// }

// @keyframes confettiFall {
//   0% {
//     opacity: 1;
//     transform: translateY(0vh) rotate(0deg); /* Start from their random 'top' position */
//   }
//   100% {
//     opacity: 0;
//     transform: translateY(100vh) rotate(720deg); /* Fall down and rotate */
//   }
// }

// /* Dark Theme Adjustments for Enhanced Congratulations */
// .dark-theme .congratulations-container {
//   background-color: #1E1E1E; /* Darker, richer background */
//   color: #e0e0e0;
//   border: 1px solid #333;
// }
// .dark-theme .congratulations-title {
//   color: rgb(255, 174, 0);
//   animation-name: textGlowDark; /* Different glow for dark theme if needed, or adjust existing */
// }
// .dark-theme .congratulations-container p {
//   color: #b0b0b0;
// }
// .dark-theme .congratulations-container p strong {
//   color: #dadada;
// }
// .dark-theme .congratulations-icon {
//   color: rgb(255, 174, 0);
// }

// @keyframes textGlowDark { /* Optional: slightly different glow for dark */
//   from {
//     text-shadow: 0 0 8px rgba(255, 174, 0, 0.5), 0 0 15px rgba(255, 174, 0, 0.4);
//   }
//   to {
//     text-shadow: 0 0 15px rgba(255, 174, 0, 0.7), 0 0 30px rgba(255, 174, 0, 0.5);
//   }
// }
// </style>
//           <div class="page-background light-theme">
//             <div class="form-card" id="appointment-form-card">
//               <header class="form-card-header">
//                 <div class="logo-container"><span class="logo-text">Your Brand</span></div>
//                 <div class="user-info"><img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" class="user-avatar" /></div>
//               </header>
//               <div class="form-card-body">
//                 <aside class="sidebar">
//                   <div class="sidebar-scrollable-content">
//                     <h3 style="margin: 0; padding: 0; font-size: 1.2rem; font-weight: 600;">Hi, Valued Guest!</h3>
//                     <div class="sidebar-info-item" style="display: flex; align-items: center; gap: 8px; margin: 10px 0;">
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
//                       <span>30 min</span>
//                     </div>
//                     <div class="sidebar-info-item" style="display: flex; align-items: center; gap: 8px; margin: 10px 0;">
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 12H5V6h14v9zM8 12h8v2H8v-2z"/></svg>
//                       <span>Web conferencing details provided upon confirmation.</span>
//                     </div>
//                     <h3 class="sidebar-title" id="sidebar-step-title">Schedule Slot</h3>
//                     <p class="sidebar-subtitle" id="sidebar-step-subtitle">Step 1 of 2</p>
//                     <div class="sidebar-progress-bar"><div class="sidebar-progress" id="sidebar-progress-indicator" style="width: 50%;"></div></div>
//                   </div>
//                 </aside>
//                 <main class="main-content">
//                   <h2 class="main-title">Book Your Free Health Assessment Call</h2>
//                   <form class="appointment-form">
                    
//                     <!-- Step 1: Schedule -->
//                     <div class="form-step" id="form-step-1">
//                       <h4 class="form-section-title">Select Date & Time</h4>
//                       <div class="calendar-wrapper">
//                         <div class="calendar-navigation">
//                           <button type="button" class="nav-arrow" id="cal-prev-month">&lt;</button>
//                           <h5 class="current-month-year" id="cal-month-year">Month Year</h5>
//                           <button type="button" class="nav-arrow" id="cal-next-month">&gt;</button>
//                         </div>
//                         <div class="calendar-grid-headers">
//                           <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
//                         </div>
//                         <div class="calendar-grid-days" id="cal-days-grid"></div>
//                       </div>
//                       <div class="time-selector-wrapper" id="time-selector-container" style="display: none;">
//                         <h5 class="time-selector-title" id="time-selector-title">Available Times for...</h5>
//                         <div class="time-slots-grid" id="time-slots-grid"></div>
//                       </div>
//                     </div>

//                     <!-- Step 2: Additional Info -->
//                     <div class="form-step" id="form-step-2" style="display: none;">
//                       <h4 class="form-section-title">Complete Your Information</h4>
//                       <h5 class="form-subsection-title">Personal Details</h5>
//                       <div class="form-row">
//                         <div class="form-group"><label>Full Name*</label><input type="text" name="fullName" required /></div>
//                         <div class="form-group"><label>Email Address*</label><input type="email" name="emailAddress" required /></div>
//                       </div>
//                       <div class="form-row">
//                         <div class="form-group"><label>WhatsApp Number*</label><input type="tel" name="whatsappNumber" required /></div>
//                         <div class="form-group"><label>City & Country*</label><input type="text" name="cityCountry" required /></div>
//                       </div>
//                       <div class="form-row">
//                         <div class="form-group"><label>Instagram/Facebook username</label><input type="text" name="socialMediaUsername" /></div>
//                         <div class="form-group"><label>What is your age?*</label><input type="number" name="age" min="1" required /></div>
//                       </div>
//                       <h5 class="form-subsection-title">Health & Lifestyle Assessment</h5>
//                       <div class="form-group"><label>Did you watch the full video before booking this call?*</label><div class="radio-group"><label><input type="radio" name="watchedVideo" value="Yes" required /> Yes</label><label><input type="radio" name="watchedVideo" value="No" /> No</label><label><input type="radio" name="watchedVideo" value="Soon" /> I plan to watch it soon</label></div></div>
//                       <div class="form-group"><label>Current profession/daily routine?*</label><input type="text" name="currentProfession" required /></div>
//                       <div class="form-group"><label>Main health goal?*</label><select name="mainHealthGoal" required><option value="">Select goal</option><option value="Weight Loss">Weight Loss</option><option value="Weight Gain">Weight Gain</option><option value="Muscle Building">Muscle Building</option><option value="Other">Other</option></select></div>
//                       <div class="form-group"><label>Any medical conditions/lifestyle diseases?*</label><div class="radio-group"><label><input type="radio" name="medicalConditions" value="Yes" required /> Yes</label><label><input type="radio" name="medicalConditions" value="No" checked /> No</label></div></div>
//                     </div>

//                     <div class="form-actions" id="form-actions-container">
//                       <button type="button" class="button-cancel" id="btn-back" style="display: none;">Back</button>
//                       <button type="button" class="button-next" id="btn-next">Next &rarr;</button>
//                       <button type="button" class="button-next" id="btn-submit" style="display: none;">Confirm & Submit Booking</button>
//                     </div>
//                   </form>
//                 </main>
//               </div>
//             </div>
            
//             <!-- Congratulations Screen -->
//             <div class="congratulations-container-wrapper" id="congrats-screen" style="display: none;">
//               <div class="congratulations-container">
//                 <div class="confetti-burst-container" id="confetti-container"></div>
//                 <svg class="congratulations-icon" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
//                 <h2 class="congratulations-title" id="congrats-name">Congratulations!</h2>
//                 <p>Your Free Health Assessment Call is successfully booked for:</p>
//                 <p><strong>Date:</strong> <span id="congrats-date"></span></p>
//                 <p><strong>Time:</strong> <span id="congrats-time"></span></p>
//                 <p>We're excited to speak with you and will send a confirmation email to <strong id="congrats-email"></strong> shortly.</p>
//               </div>
//             </div>
//           </div>
          
//           <script>
//             (() => {
//               // Self-contained script to avoid scope issues
//               const formWrapper = document.querySelector('.page-background');
//               if (!formWrapper) return;

//               // --- DOM ELEMENT SELECTION ---
//               const formCard = formWrapper.querySelector('#appointment-form-card');
//               const congratsScreen = formWrapper.querySelector('#congrats-screen');
//               const step1Div = formWrapper.querySelector('#form-step-1');
//               const step2Div = formWrapper.querySelector('#form-step-2');
//               const btnNext = formWrapper.querySelector('#btn-next');
//               const btnBack = formWrapper.querySelector('#btn-back');
//               const btnSubmit = formWrapper.querySelector('#btn-submit');
//               const sidebarTitle = formWrapper.querySelector('#sidebar-step-title');
//               const sidebarSubtitle = formWrapper.querySelector('#sidebar-step-subtitle');
//               const progressIndicator = formWrapper.querySelector('#sidebar-progress-indicator');
//               const calMonthYear = formWrapper.querySelector('#cal-month-year');
//               const calDaysGrid = formWrapper.querySelector('#cal-days-grid');
//               const calPrevBtn = formWrapper.querySelector('#cal-prev-month');
//               const calNextBtn = formWrapper.querySelector('#cal-next-month');
//               const timeSelectorContainer = formWrapper.querySelector('#time-selector-container');
//               const timeSelectorTitle = formWrapper.querySelector('#time-selector-title');
//               const timeSlotsGrid = formWrapper.querySelector('#time-slots-grid');
              
//               // --- STATE MANAGEMENT ---
//               let currentStep = 1;
//               const totalSteps = 2;
//               let selectedMonthDate = new Date();
//               const formData = {
//                 bookingDate: '', bookingTime: '', fullName: 'Valued Guest', emailAddress: ''
//               };

//               const availableDates = (() => {
//                 const today = new Date();
//                 const currentYear = today.getFullYear();
//                 const currentMonth = today.getMonth();
//                 let dates = {};
//                 for (let i = 0; i <= 10; i++) {
//                     const dayCandidate = new Date(currentYear, currentMonth, today.getDate() + i);
//                     const dateStr = \`\${dayCandidate.getFullYear()}-\${String(dayCandidate.getMonth() + 1).padStart(2, '0')}-\${String(dayCandidate.getDate()).padStart(2, '0')}\`;
//                     dates[dateStr] = ['09:00', '11:30', '14:00', '16:30'];
//                 }
//                 return dates;
//               })();

//               // --- UI UPDATE FUNCTIONS ---
//               const updateUI = () => {
//                 step1Div.style.display = currentStep === 1 ? 'block' : 'none';
//                 step2Div.style.display = currentStep === 2 ? 'block' : 'none';
//                 btnBack.style.display = currentStep > 1 ? 'inline-block' : 'none';
//                 btnNext.style.display = currentStep < totalSteps ? 'inline-block' : 'none';
//                 btnSubmit.style.display = currentStep === totalSteps ? 'inline-block' : 'none';
                
//                 sidebarTitle.textContent = currentStep === 1 ? 'Schedule Slot' : 'Your Information';
//                 sidebarSubtitle.textContent = \`Step \${currentStep} of \${totalSteps}\`;
//                 progressIndicator.style.width = \`\${(currentStep / totalSteps) * 100}%\`;
//               };

//               const renderCalendar = (monthDate) => {
//                 const year = monthDate.getFullYear();
//                 const month = monthDate.getMonth();
//                 calMonthYear.textContent = monthDate.toLocaleString('default', { month: 'long', year: 'numeric' });
//                 calDaysGrid.innerHTML = '';
                
//                 const today = new Date();
//                 today.setHours(0,0,0,0);
//                 const daysInMonth = new Date(year, month + 1, 0).getDate();
//                 const firstDayOfMonth = new Date(year, month, 1).getDay();

//                 for (let i = 0; i < firstDayOfMonth; i++) {
//                   calDaysGrid.insertAdjacentHTML('beforeend', '<div class="calendar-day empty"></div>');
//                 }

//                 for (let day = 1; day <= daysInMonth; day++) {
//                   const currentDateObj = new Date(year, month, day);
//                   const dateStr = \`\${year}-\${String(month + 1).padStart(2, '0')}-\${String(day).padStart(2, '0')}\`;
//                   const isAvailable = availableDates[dateStr] && availableDates[dateStr].length > 0;
//                   const isSelected = formData.bookingDate === dateStr;
//                   const isPast = currentDateObj < today;
                  
//                   const dayBtn = document.createElement('button');
//                   dayBtn.type = 'button';
//                   dayBtn.className = 'calendar-day';
//                   if (isPast) dayBtn.classList.add('past');
//                   else if (isAvailable) dayBtn.classList.add('available');
//                   else dayBtn.classList.add('unavailable');
//                   if (isSelected) dayBtn.classList.add('selected');

//                   dayBtn.textContent = day;
//                   dayBtn.dataset.date = dateStr;
//                   dayBtn.disabled = !isAvailable || isPast;
//                   if(isAvailable && !isPast) {
//                     dayBtn.insertAdjacentHTML('beforeend', '<span class="availability-dot"></span>');
//                   }
//                   calDaysGrid.appendChild(dayBtn);
//                 }
//               };

//               const renderTimeSlots = (dateStr) => {
//                 const times = availableDates[dateStr] || [];
//                 timeSlotsGrid.innerHTML = '';
//                 if (times.length > 0) {
//                   timeSelectorTitle.textContent = \`Available Times for \${new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}\`;
//                   times.forEach(time => {
//                     const timeBtn = document.createElement('button');
//                     timeBtn.type = 'button';
//                     timeBtn.className = 'time-slot-btn';
//                     if (formData.bookingTime === time) timeBtn.classList.add('selected');
//                     timeBtn.textContent = time;
//                     timeBtn.dataset.time = time;
//                     timeSlotsGrid.appendChild(timeBtn);
//                   });
//                   timeSelectorContainer.style.display = 'block';
//                 } else {
//                   timeSelectorContainer.style.display = 'none';
//                 }
//               };

//               const triggerConfetti = () => {
//                 const container = formWrapper.querySelector('#confetti-container');
//                 container.innerHTML = '';
//                 const colors = ['#FFD700', '#FF69B4', '#00BFFF', '#32CD32', '#FF4500', '#9370DB'];
//                 for (let i = 0; i < 50; i++) {
//                   const piece = document.createElement('div');
//                   piece.className = 'confetti-piece';
//                   piece.style.left = \`\${Math.random() * 100}%\`;
//                   piece.style.top = \`\${Math.random() * -50 - 50}%\`;
//                   piece.style.width = \`\${Math.random() * 8 + 4}px\`;
//                   piece.style.height = \`\${Math.random() * 10 + 5}px\`;
//                   piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//                   piece.style.transform = \`rotate(\${Math.random() * 360}deg)\`;
//                   piece.style.animationDelay = \`\${Math.random() * 0.5}s\`;
//                   piece.style.animationDuration = \`\${Math.random() * 2 + 2}s\`;
//                   container.appendChild(piece);
//                 }
//               };

//               // --- EVENT HANDLERS ---
//               calPrevBtn.addEventListener('click', () => {
//                 selectedMonthDate.setMonth(selectedMonthDate.getMonth() - 1);
//                 renderCalendar(selectedMonthDate);
//               });
//               calNextBtn.addEventListener('click', () => {
//                 selectedMonthDate.setMonth(selectedMonthDate.getMonth() + 1);
//                 renderCalendar(selectedMonthDate);
//               });

//               calDaysGrid.addEventListener('click', (e) => {
//                 if (e.target.classList.contains('available')) {
//                   formData.bookingDate = e.target.dataset.date;
//                   formData.bookingTime = ''; // Reset time
//                   renderCalendar(selectedMonthDate); // Re-render to show selection
//                   renderTimeSlots(formData.bookingDate);
//                 }
//               });

//               timeSlotsGrid.addEventListener('click', (e) => {
//                 if (e.target.classList.contains('time-slot-btn')) {
//                   formData.bookingTime = e.target.dataset.time;
//                   renderTimeSlots(formData.bookingDate); // Re-render to show selection
//                 }
//               });

//               btnNext.addEventListener('click', () => {
//                 if (currentStep === 1 && (!formData.bookingDate || !formData.bookingTime)) {
//                   alert('Please select a date and time.');
//                   return;
//                 }
//                 if (currentStep < totalSteps) {
//                   currentStep++;
//                   updateUI();
//                 }
//               });

//               btnBack.addEventListener('click', () => {
//                 if (currentStep > 1) {
//                   currentStep--;
//                   updateUI();
//                 }
//               });

//               btnSubmit.addEventListener('click', () => {
//                 // Simplified validation for demo
//                 const inputs = step2Div.querySelectorAll('input[required], select[required]');
//                 let isValid = true;
//                 inputs.forEach(input => {
//                   if (!input.value) isValid = false;
//                   // Store data
//                   if (input.name) formData[input.name] = input.value;
//                 });
                
//                 if (!isValid) {
//                   alert('Please fill all required fields.');
//                   return;
//                 }
                
//                 formWrapper.querySelector('#congrats-name').textContent = \`Congratulations, \${formData.fullName}!\`;
//                 formWrapper.querySelector('#congrats-date').textContent = new Date(formData.bookingDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
//                 formWrapper.querySelector('#congrats-time').textContent = formData.bookingTime;
//                 formWrapper.querySelector('#congrats-email').textContent = formData.emailAddress;
                
//                 formCard.style.display = 'none';
//                 congratsScreen.style.display = 'flex';
//                 triggerConfetti();
//               });

//               // --- INITIALIZATION ---
//               renderCalendar(selectedMonthDate);
//               updateUI();
//             })();
//           </script>
//           `,
//           media: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="m16 16-2-2-4 4"></path></svg>`,
//         });

        
//       // Enhanced VSL Block
//       bm.add('vsl-block', {
//         label: 'VSL Section',
//         category: 'Marketing',
//         content: `
//           <section style="padding: 80px 20px; background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d); color: white; text-align: center; position: relative; overflow: hidden;">
//             <div style="max-width: 1200px; margin: 0 auto; position: relative; z-index: 2;">
//               <div style="margin-bottom: 30px;">
//                 <h2 style="font-size: 2.8em; margin-bottom: 15px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">Watch This Life-Changing Video</h2>
//                 <p style="font-size: 1.2em; max-width: 700px; margin: 0 auto;">Discover the secret that's helping thousands transform their lives in just 30 minutes</p>
//               </div>
              
//               <div style="max-width: 800px; margin: 0 auto 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); border-radius: 8px; overflow: hidden; position: relative;">
//                 <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
//                   <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #000; display: flex; align-items: center; justify-content: center;">
//                     <svg width="80" height="80" viewBox="0 0 24 24" fill="white" style="opacity: 0.8;">
//                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
              
//               <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
//                 <a href="#" style="background-color: #ff4500; color: white; padding: 18px 40px; text-decoration: none; font-size: 1.2em; border-radius: 50px; font-weight: 600; box-shadow: 0 4px 15px rgba(255,69,0,0.4); transition: all 0.3s; border: none;">Get Instant Access</a>
//                 <a href="#" style="background-color: rgba(255,255,255,0.2); color: white; padding: 18px 40px; text-decoration: none; font-size: 1.2em; border-radius: 50px; font-weight: 600; transition: all 0.3s; border: 2px solid white;">Learn More</a>
//               </div>
//             </div>
            
//             <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.3) 100%); z-index: 1;"></div>
//           </section>
//         `,
//         media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m5 6l6 4-6 4V9Z"/></svg>`,
//       });
      
//       // Enhanced WhatsApp Button Block
//       bm.add('whatsapp-button', {
//         label: 'WhatsApp Button',
//         category: 'Lead Generation',
//         content: {
//           type: 'link',
//           content: '<i class="fab fa-whatsapp" style="margin-right: 8px;"></i> Chat on WhatsApp',
//           attributes: { href: 'https://wa.me/1234567890', target: '_blank' },
//           style: {
//             display: 'inline-flex',
//             alignItems: 'center',
//             padding: '14px 28px',
//             'background-color': '#25D366',
//             color: 'white',
//             'text-decoration': 'none',
//             'border-radius': '50px',
//             'font-weight': '600',
//             'font-size': '1.1em',
//             'box-shadow': '0 4px 15px rgba(37,211,102,0.3)',
//             'transition': 'all 0.3s ease',
//             'border': 'none',
//             'cursor': 'pointer'
//           },
//           traits: [
//             { name: 'href', label: 'WhatsApp Link (wa.me/...)' },
//             { name: 'content', label: 'Button Text', changeProp: 1 },
//           ],
//           script: function() {
//             this.style.backgroundColor = '#25D366';
//             this.style.color = 'white';
//             this.addEventListener('mouseenter', () => {
//               this.style.backgroundColor = '#128C7E';
//               this.style.transform = 'translateY(-2px)';
//               this.style.boxShadow = '0 6px 20px rgba(37,211,102,0.4)';
//             });
//             this.addEventListener('mouseleave', () => {
//               this.style.backgroundColor = '#25D366';
//               this.style.transform = 'translateY(0)';
//               this.style.boxShadow = '0 4px 15px rgba(37,211,102,0.3)';
//             });
//           }
//         },
//         media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.52 3.48 1.41 4.93L2.06 22l5.32-1.48c1.37.81 2.96 1.29 4.66 1.29h.01c5.46 0 9.91-4.45 9.91-9.91c0-5.46-4.45-9.91-9.91-9.91zM17.47 16c-.2-.1-1.18-.58-1.36-.65c-.18-.07-.31-.1-.45.1s-.51.65-.63.78c-.12.13-.24.15-.45.05c-.2-.1-.85-.31-1.62-.99c-.6-.54-1-1.2-1.12-1.4c-.12-.2-.02-.31.08-.41c.09-.09.2-.24.3-.36c.1-.12.13-.2.2-.34c.07-.13.04-.25 0-.35c-.04-.1-.45-1.08-.61-1.48c-.16-.4-.33-.34-.45-.34h-.4c-.13 0-.31.05-.45.25c-.14.2-.51.62-.51 1.51s.53 1.75.61 1.88c.07.13 1.03 1.58 2.5 2.2c.36.15.64.24.86.31c.36.12.68.1.93-.05c.29-.18.85-.7.97-.85c.12-.15.12-.28 0-.38z"/></svg>`,
//       });

//       // Enhanced Appointment Booking Block
//       bm.add('appointment-block', {
//         label: 'Appointment Booking',
//         category: 'Integrations',
//         content: `
//           <div style="padding: 60px 20px; background-color: #f8f9fa; text-align: center;">
//             <div style="max-width: 1000px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); padding: 40px; position: relative;">
//               <div style="position: absolute; top: 0; left: 0; width: 100%; height: 5px; background: linear-gradient(90deg, #4b6cb7, #182848); border-radius: 12px 12px 0 0;"></div>
              
//               <h2 style="font-size: 2.2em; margin-bottom: 10px; color: #2c3e50;">Schedule Your Appointment</h2>
//               <p style="font-size: 1.1em; color: #7f8c8d; margin-bottom: 40px; max-width: 700px; margin-left: auto; margin-right: auto;">Book a time that works for you with our simple scheduling system</p>
              
//               <div style="border: 2px dashed #e0e0e0; border-radius: 8px; padding: 30px; background-color: #fafafa; min-height: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
//                 <svg width="60" height="60" viewBox="0 0 24 24" fill="#4b6cb7" style="margin-bottom: 20px;">
//                   <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V8h14m-7-7h2v2h-2Z"/>
//                 </svg>
//                 <h3 style="font-size: 1.5em; margin-bottom: 15px; color: #2c3e50;">Embed Your Appointment Calendar</h3>
//                 <p style="color: #7f8c8d; margin-bottom: 25px; max-width: 500px;">Double-click this block to paste the embed code from your booking service (e.g., Calendly, Acuity).</p>
//                 <div style="display: flex; gap: 15px; flex-wrap: wrap; justify-content: center;">
//                   <a href="#" style="background-color: #4b6cb7; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-flex; align-items: center;">
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style="margin-right: 8px;">
//                       <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-2 16v-4H8v4H6v-6h12v6h-2m-3-6.5V14h-2v-2.5A1.5 1.5 0 0 1 10.5 10h3a1.5 1.5 0 0 1 1.5 1.5Z"/>
//                     </svg>
//                     Setup Guide
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         `,
//         media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V8h14m-7-7h2v2h-2Z"/></svg>`,
//       });

//       // Enhanced PDF Download Block
//       bm.add('Switch_button', {
//   label: 'Switch button',
//   category: 'Landing page',
//   content: ` <div style="display: flex; gap: 15px; flex-wrap: wrap; justify-content: center;">

// <a href="#" style="background-color: #4b6cb7; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-flex; align-items: center;">

//  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style="margin-right: 8px;">

//  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-2 16v-4H8v4H6v-6h12v6h-2m-3-6.5V14h-2v-2.5A1.5 1.5 0 0 1 10.5 10h3a1.5 1.5 0 0 1 1.5 1.5Z"/>

// </svg>
// Next page

//  </a>

// </div>`});


//   // Enhanced PDF Download Block with Popup Form
// bm.add('pdf-download-block', {
//   label: 'PDF Download with Email Capture',
//   category: 'Lead Generation',
//   content: `
//     <div class="pdf-download-container">
//       <button class="pdf-download-btn" id="pdf-download-trigger">
//         <i class="fas fa-file-pdf"></i> Download Free E-book
//       </button>
  
//       <div class="pdf-download-modal" id="pdf-download-modal">
//         <div class="pdf-download-modal-content">
//           <span class="pdf-download-close">&times;</span>
//           <div class="pdf-download-icon">
//             <i class="fas fa-file-pdf"></i>
//           </div>
//           <h3>Get Your Free E-book</h3>
//           <p>Enter your email to download the PDF</p>
//           <form id="pdf-download-form">
//             <div class="form-group">
//               <input type="email" placeholder="Your best email" required>
//             </div>
//             <div class="form-group">
//               <input type="text" placeholder="Your name (optional)">
//             </div>
//             <button type="submit" class="download-submit-btn">
//               <i class="fas fa-download"></i> Download Now
//             </button>
//           </form>
//           <p class="privacy-text">We respect your privacy. Unsubscribe at any time.</p>
//         </div>
//       </div>
//     </div>

//     <style>
//       .pdf-download-container {
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//       }
      
//       .pdf-download-btn {
//         display: inline-flex;
//         align-items: center;
//         justify-content: center;
//         padding: 14px 28px;
//         background-color: #d9534f;
//         color: white;
//         text-decoration: none;
//         border-radius: 8px;
//         font-weight: 600;
//         font-size: 1.1em;
//         box-shadow: 0 4px 15px rgba(217,83,79,0.3);
//         transition: all 0.3s ease;
//         border: none;
//         cursor: pointer;
//         gap: 10px;
//       }
      
//       .pdf-download-btn:hover {
//         background-color: #c9302c;
//         transform: translateY(-2px);
//         box-shadow: 0 6px 20px rgba(217,83,79,0.4);
//       }
      
//       .pdf-download-btn i {
//         font-size: 1.2em;
//       }
      
//       .pdf-download-modal {
//         display: none;
//         position: fixed;
//         z-index: 1000;
//         left: 0;
//         top: 0;
//         width: 100%;
//         height: 100%;
//         background-color: rgba(0,0,0,0.7);
//         animation: fadeIn 0.3s;
//       }
      
//       @keyframes fadeIn {
//         from { opacity: 0; }
//         to { opacity: 1; }
//       }
      
//       .pdf-download-modal-content {
//         background-color: white;
//         margin: 10% auto;
//         padding: 30px;
//         border-radius: 12px;
//         width: 90%;
//         max-width: 450px;
//         text-align: center;
//         position: relative;
//         box-shadow: 0 10px 30px rgba(0,0,0,0.2);
//       }
      
//       .pdf-download-close {
//         position: absolute;
//         top: 15px;
//         right: 25px;
//         color: #aaa;
//         font-size: 28px;
//         font-weight: bold;
//         cursor: pointer;
//       }
      
//       .pdf-download-close:hover {
//         color: #333;
//       }
      
//       .pdf-download-icon {
//         font-size: 3em;
//         color: #d9534f;
//         margin-bottom: 15px;
//       }
      
//       .pdf-download-modal h3 {
//         color: #2c3e50;
//         margin-bottom: 10px;
//         font-size: 1.5em;
//       }
      
//       .pdf-download-modal p {
//         color: #7f8c8d;
//         margin-bottom: 25px;
//       }
      
//       .pdf-download-modal .form-group {
//         margin-bottom: 20px;
//         text-align: left;
//       }
      
//       .pdf-download-modal input {
//         width: 100%;
//         padding: 12px 15px;
//         border: 1px solid #ddd;
//         border-radius: 6px;
//         font-size: 1em;
//         box-sizing: border-box;
//       }
      
//       .pdf-download-modal input:focus {
//         outline: none;
//         border-color: #d9534f;
//         box-shadow: 0 0 0 2px rgba(217,83,79,0.2);
//       }
      
//       .download-submit-btn {
//         width: 100%;
//         padding: 14px;
//         background-color: #d9534f;
//         color: white;
//         border: none;
//         border-radius: 6px;
//         font-weight: 600;
//         font-size: 1em;
//         cursor: pointer;
//         transition: all 0.3s;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         gap: 10px;
//       }
      
//       .download-submit-btn:hover {
//         background-color: #c9302c;
//       }
      
//       .privacy-text {
//         font-size: 0.8em;
//         color: #95a5a6;
//         margin-top: 20px;
//       }
      
//       @media (max-width: 600px) {
//         .pdf-download-modal-content {
//           margin: 20% auto;
//           padding: 20px;
//         }
//       }
//     </style>

//     <script>
//       (function() {
//         const trigger = document.getElementById('pdf-download-trigger');
//         const modal = document.getElementById('pdf-download-modal');
//         const closeBtn = document.querySelector('.pdf-download-close');
//         const form = document.getElementById('pdf-download-form');
        
//         if (trigger && modal) {
//           trigger.addEventListener('click', function(e) {
//             e.preventDefault();
//             modal.style.display = 'block';
//           });
          
//           closeBtn.addEventListener('click', function() {
//             modal.style.display = 'none';
//           });
          
//           window.addEventListener('click', function(e) {
//             if (e.target === modal) {
//               modal.style.display = 'none';
//             }
//           });
          
//           if (form) {
//             form.addEventListener('submit', function(e) {
//               e.preventDefault();
//               const email = this.querySelector('input[type="email"]').value;
              
//               // Here you would typically:
//               // 1. Send the email to your server/email service
//               // 2. Then initiate the download
              
//               // For demo purposes, we'll just show an alert and "download"
//               alert('Thank you! Your download will start now.');
              
//               // Create a temporary link to trigger download
//               const link = document.createElement('a');
//               link.href = '#';
//               link.download = 'free-ebook.pdf';
//               document.body.appendChild(link);
//               link.click();
//               document.body.removeChild(link);
              
//               // Close the modal
//               modal.style.display = 'none';
//             });
//           }
//         }
//       })();
//     </script>
//   `,
//   traits: [
//     { 
//       type: 'text',
//       name: 'pdf_url', 
//       label: 'PDF File URL',
//       changeProp: 1,
//     },
//     { 
//       type: 'text',
//       name: 'button_text', 
//       label: 'Button Text',
//       changeProp: 1,
//       default: 'Download Free E-book'
//     },
//     { 
//       type: 'text',
//       name: 'modal_title', 
//       label: 'Modal Title',
//       changeProp: 1,
//       default: 'Get Your Free E-book'
//     },
//     { 
//       type: 'text',
//       name: 'modal_description', 
//       label: 'Modal Description',
//       changeProp: 1,
//       default: 'Enter your email to download the PDF'
//     }
//   ],
//   media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-2 16v-4H8v4H6v-6h12v6h-2m-3-6.5V14h-2v-2.5A1.5 1.5 0 0 1 10.5 10h3a1.5 1.5 0 0 1 1.5 1.5Z"/></svg>`,
// });
//       // Enhanced Thank You Page Block
//       bm.add('thank-you-block', {
//         label: 'Thank You Section',
//         category: 'Content',
//         content: `
//           <div style="padding: 80px 20px; text-align: center; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 70vh; display: flex; align-items: center; justify-content: center;">
//             <div style="max-width: 800px; margin: 0 auto; background: white; padding: 50px; border-radius: 15px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); position: relative; overflow: hidden;">
//               <div style="position: absolute; top: 0; left: 0; width: 100%; height: 8px; background: linear-gradient(90deg, #4CAF50, #8BC34A);"></div>
              
//               <div style="width: 100px; height: 100px; background-color: #4CAF50; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 30px; animation: scaleIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
//                 <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
//                 </svg>
//               </div>
              
//               <h1 style="font-size: 2.8em; color: #2E7D32; margin-bottom: 20px; font-weight: 700;">Thank You!</h1>
//               <p style="font-size: 1.2em; color: #455A64; margin-bottom: 30px; line-height: 1.6;">Your submission has been received. We've sent a confirmation to your email and will be in touch shortly.</p>
              
//               <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-top: 40px;">
//                 <a href="/" style="background-color: #4CAF50; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; box-shadow: 0 4px 15px rgba(76,175,80,0.3); transition: all 0.3s;">Back to Homepage</a>
//                 <a href="#" style="background-color: white; color: #4CAF50; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; border: 2px solid #4CAF50; transition: all 0.3s;">Download Your Free Gift</a>
//               </div>
              
//               <style>
//                 @keyframes scaleIn {
//                   0% { transform: scale(0); opacity: 0; }
//                   80% { transform: scale(1.1); opacity: 1; }
//                   100% { transform: scale(1); opacity: 1; }
//                 }
//               </style>
//             </div>
//           </div>
//         `,
//         media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z"/></svg>`,
//       });
//     // Add a section for all landing page components
//     bm.add('landing-section', {
//       label: 'Landing Section',
//       category: 'Landing Page',
//       content: {
//         tagName: 'section',
//         style: {
//           'padding': '60px 20px',
//           'text-align': 'center'
//         },
//         components: [
//           {
//             type: 'text',
//             content: '<h2>Section Heading</h2><p>Section description text goes here.</p>',
//             style: { 'max-width': '800px', 'margin': '0 auto 30px' }
//           }
//         ]
//       }
//     });




//   }
// export default addLandingPageComponents;


function addLandingPageComponents(editor, userId = 'guest') {
  const bm = editor.BlockManager;
  const domc = editor.DomComponents;

  // Configurable API base URL
  const API_BASE_URL = window.API_BASE_URL || 'http://localhost:5000';

  const getAssetUrl = (src) => {
    if (!src) return src;
    if (src.startsWith('http') || src.startsWith('data:')) return src;
    return `${API_BASE_URL}${src.startsWith('/') ? src : `/${src}`}`;
  };

  // Function to create the media upload popup
  const createMediaUploadPopup = (type, callback) => {
    console.log("👤 User ID:", userId);
    
    const popup = document.createElement('div');
    popup.id = 'media-upload-popup';
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.backgroundColor = 'rgba(0,0,0,0.7)';
    popup.style.display = 'flex';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    popup.style.zIndex = '10000';
    
    const popupContent = document.createElement('div');
    popupContent.style.backgroundColor = 'white';
    popupContent.style.padding = '20px';
    popupContent.style.borderRadius = '8px';
    popupContent.style.width = '90%';
    popupContent.style.maxWidth = '800px';
    popupContent.style.maxHeight = '80vh';
    popupContent.style.overflow = 'auto';
    popupContent.style.position = 'relative';
    
    const title = document.createElement('h3');
    title.textContent = `Upload ${type === 'image' ? 'Image' : 'Video'}`;
    title.style.marginTop = '0';
    title.style.color = '#333';
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '10px';
    closeBtn.style.right = '10px';
    closeBtn.style.background = 'none';
    closeBtn.style.border = 'none';
    closeBtn.style.fontSize = '24px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.color = '#888';
    closeBtn.style.width = '40px';
    closeBtn.style.height = '40px';
    closeBtn.style.display = 'flex';
    closeBtn.style.alignItems = 'center';
    closeBtn.style.justifyContent = 'center';
    closeBtn.style.borderRadius = '50%';
    
    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.backgroundColor = '#f5f5f5';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
      closeBtn.style.backgroundColor = 'transparent';
    });
    
    const uploadBtn = document.createElement('button');
    uploadBtn.textContent = 'Upload Files';
    uploadBtn.style.padding = '10px 20px';
    uploadBtn.style.background = '#3498db';
    uploadBtn.style.color = 'white';
    uploadBtn.style.border = 'none';
    uploadBtn.style.borderRadius = '4px';
    uploadBtn.style.marginTop = '20px';
    uploadBtn.style.cursor = 'pointer';
    uploadBtn.style.display = 'flex';
    uploadBtn.style.alignItems = 'center';
    uploadBtn.style.gap = '8px';
    
    const uploadIcon = document.createElement('span');
    uploadIcon.innerHTML = '&#x1F4C2;';
    uploadBtn.prepend(uploadIcon);
    
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.multiple = true;
    fileInput.accept = type === 'image' ? 'image/*' : 'video/*';
    fileInput.style.display = 'none';
    
    const mediaGrid = document.createElement('div');
    mediaGrid.style.display = 'grid';
    mediaGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
    mediaGrid.style.gap = '15px';
    mediaGrid.style.marginTop = '20px';
    
    // Load existing media for this user
    const loadMedia = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/assets?userId=${userId}`);
        if (!response.ok) throw new Error('Failed to fetch media');
        const result = await response.json();
        
        mediaGrid.innerHTML = '';
        
        if (result.data.length === 0) {
          const emptyMsg = document.createElement('p');
          emptyMsg.textContent = 'No media found. Upload some files!';
          emptyMsg.style.textAlign = 'center';
          emptyMsg.style.color = '#666';
          emptyMsg.style.gridColumn = '1 / -1';
          mediaGrid.appendChild(emptyMsg);
          return;
        }
        
        result.data.forEach(asset => {
          if ((type === 'image' && asset.type === 'image') || 
              (type === 'video' && asset.type === 'video')) {
            const mediaItem = document.createElement('div');
            mediaItem.style.position = 'relative';
            mediaItem.style.cursor = 'pointer';
            mediaItem.style.border = '2px solid #eee';
            mediaItem.style.borderRadius = '4px';
            mediaItem.style.padding = '5px';
            mediaItem.style.transition = 'all 0.2s';
            mediaItem.style.overflow = 'hidden';
            
            mediaItem.addEventListener('mouseenter', () => {
              mediaItem.style.borderColor = '#3498db';
            });
            
            mediaItem.addEventListener('mouseleave', () => {
              mediaItem.style.borderColor = '#eee';
            });
            
            // Remove button
            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = '&times;';
            removeBtn.style.position = 'absolute';
            removeBtn.style.top = '5px';
            removeBtn.style.right = '5px';
            removeBtn.style.background = 'rgba(0,0,0,0.7)';
            removeBtn.style.color = 'white';
            removeBtn.style.border = 'none';
            removeBtn.style.borderRadius = '50%';
            removeBtn.style.width = '25px';
            removeBtn.style.height = '25px';
            removeBtn.style.display = 'flex';
            removeBtn.style.alignItems = 'center';
            removeBtn.style.justifyContent = 'center';
            removeBtn.style.cursor = 'pointer';
            removeBtn.style.fontSize = '16px';
            removeBtn.style.opacity = '0';
            removeBtn.style.transition = 'opacity 0.2s';
            
            removeBtn.addEventListener('click', async (e) => {
              e.stopPropagation();
              if (confirm('Are you sure you want to delete this file?')) {
                try {
                  const deleteResponse = await fetch(`${API_BASE_URL}/api/assets`, {
                    method: 'DELETE',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      src: asset.src,
                      userId: userId
                    }),
                  });
                  
                  if (!deleteResponse.ok) throw new Error('Delete failed');
                  
                  mediaItem.style.transform = 'scale(0)';
                  setTimeout(() => {
                    mediaItem.remove();
                    if (mediaGrid.children.length === 0) {
                      loadMedia();
                    }
                  }, 300);
                } catch (error) {
                  console.error('Delete error:', error);
                  alert('Failed to delete file');
                }
              }
            });
            
            mediaItem.addEventListener('mouseenter', () => {
              removeBtn.style.opacity = '1';
            });
            
            mediaItem.addEventListener('mouseleave', () => {
              removeBtn.style.opacity = '0';
            });
            
            if (type === 'image') {
              const img = document.createElement('img');
              img.src = getAssetUrl(asset.src);
              img.style.width = '100%';
              img.style.height = '150px';
              img.style.objectFit = 'cover';
              img.style.display = 'block';
              img.style.borderRadius = '2px';
              mediaItem.appendChild(img);
            } else {
              const videoContainer = document.createElement('div');
              videoContainer.style.position = 'relative';
              videoContainer.style.paddingBottom = '100%';
              videoContainer.style.overflow = 'hidden';
              
              const video = document.createElement('video');
              video.src = getAssetUrl(asset.src);
              video.style.position = 'absolute';
              video.style.top = '0';
              video.style.left = '0';
              video.style.width = '100%';
              video.style.height = '100%';
              video.style.objectFit = 'cover';
              video.style.display = 'block';
              video.muted = true;
              video.playsInline = true;
              video.loop = true;
              video.autoplay = true;
              
              videoContainer.appendChild(video);
              mediaItem.appendChild(videoContainer);
            }
            
            mediaItem.appendChild(removeBtn);
            
            mediaItem.addEventListener('click', () => {
              callback(asset.src);
              document.body.removeChild(popup);
            });
            
            mediaGrid.appendChild(mediaItem);
          }
        });
      } catch (error) {
        console.error('Error loading media:', error);
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Failed to load media. Please try again.';
        errorMsg.style.color = '#e74c3c';
        errorMsg.style.textAlign = 'center';
        errorMsg.style.gridColumn = '1 / -1';
        mediaGrid.innerHTML = '';
        mediaGrid.appendChild(errorMsg);
      }
    };
    
    uploadBtn.addEventListener('click', () => {
      fileInput.click();
    });
    
    fileInput.addEventListener('change', async (e) => {
      const files = e.target.files;
      if (files.length === 0) return;
      
      const formData = new FormData();
      formData.append('userId', userId);
      for (let i = 0; i < files.length; i++) {
        formData.append('assets', files[i]);
      }
      
      try {
        uploadBtn.disabled = true;
        uploadBtn.innerHTML = '&#x1F504; Uploading...';
        
        const response = await fetch(`${API_BASE_URL}/api/assets`, {
          method: 'POST',
          body: formData,
        });
        
        if (!response.ok) throw new Error('Upload failed');
        
        await loadMedia();
      } catch (error) {
        console.error('Upload error:', error);
        alert('Failed to upload files');
      } finally {
        uploadBtn.disabled = false;
        uploadBtn.innerHTML = '&#x1F4C2; Upload Files';
      }
    });
    
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(popup);
    });
    
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        document.body.removeChild(popup);
      }
    });
    
    popupContent.appendChild(closeBtn);
    popupContent.appendChild(title);
    popupContent.appendChild(uploadBtn);
    popupContent.appendChild(mediaGrid);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
    
    loadMedia();
  };

  // Enhanced Video Component with Upload Functionality
// Enhanced Video Component with Upload Functionality
editor.DomComponents.addType('custom-video', {
  model: {
    defaults: {
      tagName: 'div',
      classes: ['custom-video-container'],
      droppable: false,
      resizable: true,
      traits: [
        {
          type: 'checkbox',
          name: 'controls',
          label: 'Show Controls',
          value: true
        },
        {
          type: 'checkbox',
          name: 'autoplay',
          label: 'Autoplay'
        },
        {
          type: 'checkbox',
          name: 'loop',
          label: 'Loop Video'
        },
        {
          type: 'checkbox',
          name: 'muted',
          label: 'Muted',
          value: true
        }
      ],
      attributes: {
        'data-video-src': '',
      },
    },
  },
  
  view: {
    events: {
      'click .video-upload-btn': 'openVideoUpload',
      'click .video-fullscreen-btn': 'toggleFullscreen',
      'click .video-play-btn': 'togglePlay',
      'click video': 'togglePlay'
    },
    
    init() {
      this.listenTo(this.model, 'change:attributes:data-video-src', this.render);
      this.listenTo(this.model, 'change:traits', this.render);
    },
    
    openVideoUpload() {
      createMediaUploadPopup('video', (src) => {
        this.model.set({
          attributes: {
            ...this.model.get('attributes'),
            'data-video-src': src,
          }
        });
      });
    },
        toggleFullscreen() {
      const container = this.el.querySelector('.video-container');
      if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
          container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
          container.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    },
    togglePlay() {
      const video = this.el.querySelector('video');
      const playBtn = this.el.querySelector('.video-play-btn');
      if (video) {
        if (video.paused) {
          video.play();
          playBtn?.classList.add('playing');
        } else {
          video.pause();
          playBtn?.classList.remove('playing');
        }
      }
    },
    
    render() {
      const videoSrc = this.model.get('attributes')['data-video-src'];
      const showControls = this.model.getTrait('controls')?.get('value') ?? true;
      const autoplay = this.model.getTrait('autoplay')?.get('value') ?? false;
      const loop = this.model.getTrait('loop')?.get('value') ?? false;
      const muted = this.model.getTrait('muted')?.get('value') ?? true;
    
      if (videoSrc) {
        this.el.innerHTML = `
          <div style="
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #000;
          ">
            <video 
              style="width: 100%; height: 100%; display: block;"
              ${showControls ? 'controls' : ''}
              ${autoplay ? 'autoplay' : ''}
              ${loop ? 'loop' : ''}
              ${muted ? 'muted' : ''}
              playsinline
              preload="metadata"
            >
              <source src="${getAssetUrl(videoSrc)}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            
            ${!showControls ? `
              <button class="video-play-btn" style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80px;
                height: 80px;
                background: rgba(231, 76, 60, 0.8);
                border: none;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
              ">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            ` : ''}
          </div>
        `;
        
        // Initialize video functionality
     const video = this.el.querySelector('video');
        const playBtn = this.el.querySelector('.video-play-btn');
        const pulseEffect = this.el.querySelector('.pulse-effect');
        
       if (video && playBtn && pulseEffect) {
          // ऑटोप्ले के लिए चेक
          if (autoplay) {
            playBtn.classList.add('playing');
            pulseEffect.classList.add('active');
          }
          
          // इवेंट लिस्नर्स
          video.addEventListener('play', () => {
            playBtn.classList.add('playing');
            pulseEffect.classList.remove('active');
          });
          
          video.addEventListener('pause', () => {
            playBtn.classList.remove('playing');
            if (!video.ended) {
              pulseEffect.classList.add('active');
            }
          });
          
          video.addEventListener('ended', () => {
            playBtn.classList.remove('playing');
            pulseEffect.classList.add('active');
          });
        }
      } else {
        this.el.innerHTML = `
          <div style="
            width: 100%;
            height: 100%;
            min-height: 200px;
            border: 2px dashed #ccc; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center; 
            background: #f9f9f9;
            cursor: pointer;
          ">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#3498db">
              <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <path d="M14 2V8H20" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <polygon points="10,12 14,16 18,12" fill="currentColor"/>
              <line x1="14" y1="16" x2="14" y2="8" stroke="currentColor" stroke-width="2"/>
            </svg>
            <button class="video-upload-btn" style="
              margin-top: 15px;
              padding: 8px 16px;
              background: #3498db;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            ">
              Upload Video
            </button>
          </div>
        `;
      }
      
      return this;
    }
  }
});

  // Enhanced Image Component with Upload Functionality
  editor.DomComponents.addType('custom-image', {
    model: {
      defaults: {
        tagName: 'div',
        classes: ['custom-image-container'],
        droppable: false,
        resizable: true,
        traits: [
          {
            type: 'text',
            name: 'alt',
            label: 'Alt Text',
            placeholder: 'Image description'
          },
          {
            type: 'select',
            name: 'object_fit',
            label: 'Image Fit',
            options: [
              { value: 'cover', name: 'Cover' },
              { value: 'contain', name: 'Contain' },
              { value: 'fill', name: 'Fill' },
              { value: 'none', name: 'None' }
            ],
            default: 'cover'
          }
        ],
        attributes: {
          'data-image-src': '',
        },
      },
    },
    
    view: {
      events: {
        'click .image-upload-btn': 'openImageUpload',
        'dblclick .image-upload-placeholder': 'openImageUpload',
      },
      
      init() {
        this.listenTo(this.model, 'change:attributes:data-image-src', this.render);
        this.listenTo(this.model, 'change:traits', this.render);
      },
      
      openImageUpload() {
        createMediaUploadPopup('image', (src) => {
          this.model.set({
            attributes: {
              ...this.model.get('attributes'),
              'data-image-src': src,
            }
          });
        });
      },
      
      render() {
        const imageSrc = this.model.get('attributes')['data-image-src'];
        const altText = this.model.getTrait('alt')?.get('value') || '';
        const objectFit = this.model.getTrait('object_fit')?.get('value') || 'cover';
        
        if (imageSrc) {
          this.el.innerHTML = `
            <img 
              src="${getAssetUrl(imageSrc)}"
              alt="${altText}"
              style="width: 100%; height: 100%; object-fit: ${objectFit}; display: block;"
              draggable="false"
            />
          `;
        } else {
          this.el.innerHTML = `
            <div style="
              width: 100%;
              height: 100%;
              min-height: 150px;
              border: 2px dashed #ccc; 
              display: flex; 
              flex-direction: column; 
              align-items: center; 
              justify-content: center; 
              background: #f9f9f9;
              cursor: pointer;
            ">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#e74c3c">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                <path d="M21 15L16 10L5 21" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
              <button class="image-upload-btn" style="
                margin-top: 15px;
                padding: 8px 16px;
                background: #e74c3c;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
              ">
                Upload Image
              </button>
            </div>
          `;
        }
        
        return this;
      }
    }
  });

  // Add video block to the Basic section
  editor.BlockManager.add('custom-video', {
    label: 'Video',
    category: 'Basic',
    content: {
      type: 'custom-video',
      attributes: {
        'data-video-src': '',
      },
      traits: [
        { name: 'controls', value: true },
        { name: 'muted', value: true }
      ]
    },
    media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
  });

  // Add image block to the Basic section
  editor.BlockManager.add('custom-image', {
    label: 'Image',
    category: 'Basic',
    content: {
      type: 'custom-image',
      attributes: {
        'data-image-src': '',
      }
    },
    media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2z"/></svg>`,
  });
}

export default addLandingPageComponents;