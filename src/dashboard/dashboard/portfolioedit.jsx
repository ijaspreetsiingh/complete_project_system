// src/views/PortfolioEditView.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiTrash2, FiPlus, FiMinus, FiImage, FiUser, FiBriefcase, FiStar, FiLink, FiSettings, FiEye, FiLayout } from 'react-icons/fi'; // Added more icons
import "./dd.css"; // Ensure this CSS file is created and styled

const PortfolioEditView = () => {
  const [activeTab, setActiveTab] = useState('publicProfile'); // Default to the first tab

  const [portfolio, setPortfolio] = useState({
    theme: 'light',
    username: 'shadcn',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    name: 'John Doe', // Will map to 'actualName'
    email: 'john.doe@example.com',
    mobile: '1234567890',
    specialty: ['Fitness', 'Yoga'],
    headline: 'As a dedicated coach, I specialize in guiding individuals...',
    bio: 'As a skilled web developer, I specialize in creating responsive...',
    specializations: ['ACE', 'NASM'],
    certifications: ['ACE', 'NASM'],
    experienceYears: 10,
    totalProjectsCompleted: 150,
    profilePicture: '',
    gallery: [],
    normalVideos: ['https://video.com/1'],
    clients: ['Client A', 'Client B'],
    testimonials: [
        { id: Date.now() + 1, text: 'Amazing coach!', name:'jassi', image: 'https://via.placeholder.com/50' },
        { id: Date.now() + 2, text: 'Life changing!',name:'jassi2', image: '' }
    ],
    videoEmbedUrls: ['https://youtube.com/embed/xyz'],
    actualName: 'John Doe',
    urls: [
      { id: Date.now() + 3, value: 'https://shadcn.com' },
      { id: Date.now() + 4, value: 'http://twitter.com/shadcn' }
    ],
    leadMagnets: [],
    programsOffered: []
  });

  // State for new item inputs (condensed for brevity, same as before)
  const [newUrl, setNewUrl] = useState('');
  const [newSpecialty, setNewSpecialty] = useState('');
  const [newSpecialization, setNewSpecialization] = useState('');
  const [newCertification, setNewCertification] = useState('');
  const [newProgram, setNewProgram] = useState('');
  const [newLeadMagnet, setNewLeadMagnet] = useState('');
  const [newNormalVideo, setNewNormalVideo] = useState('');
  const [newClientName, setNewClientName] = useState('');
  const [newVideoEmbedUrl, setNewVideoEmbedUrl] = useState('');
  const [newTestimonial, setNewTestimonial] = useState({ text: '', name: '', image: '', imagePreview: '' });

  // --- Handlers (handleChange, handleNumericChange, handleAddItem, handleRemoveItem, handleUrlChange, handleImageUpload, handleRemoveGalleryImage, handleTestimonialChange, addTestimonial) ---
  // These handlers remain the same as in the previous version. For brevity, I'm not repeating them here.
  // Assume they are correctly implemented as before.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPortfolio(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNumericChange = (e) => {
    const { name, value } = e.target;
    setPortfolio(prev => ({ ...prev, [name]: value === '' ? '' : Number(value) }));
  };

  const handleAddItem = (field, newItemValue, setNewItemState) => {
    if (typeof newItemValue === 'string' && newItemValue.trim()) {
      const newItem = field === 'urls' ? { id: Date.now(), value: newItemValue } : newItemValue;
      setPortfolio(prev => ({ ...prev, [field]: [...prev[field], newItem] }));
      if (setNewItemState) setNewItemState('');
    } else if (typeof newItemValue === 'object' && newItemValue !== null) { // For objects like testimonials
      setPortfolio(prev => ({ ...prev, [field]: [...prev[field], {...newItemValue, id: Date.now()}] }));
      if (setNewItemState) setNewItemState({ text: '', name: '', image: '', imagePreview: '' }); // Reset testimonial form
    }
  };
  
  const handleRemoveItem = (field, itemIdOrIndex) => {
    setPortfolio(prev => ({
      ...prev,
      [field]: prev[field].filter((item, index) => {
        if (typeof item === 'object' && item !== null && item.id) { // For items with an ID (URLs, Testimonials)
          return item.id !== itemIdOrIndex;
        }
        return index !== itemIdOrIndex; // For simple array items by index
      })
    }));
  };

  const handleUrlChange = (id, value) => {
    setPortfolio(prev => ({
      ...prev,
      urls: prev.urls.map(url => url.id === id ? { ...url, value } : url)
    }));
  };

  const handleImageUpload = (e, field, itemId = null) => { // itemId for testimonial image
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (field === 'profilePicture') {
          setPortfolio(prev => ({ ...prev, profilePicture: reader.result }));
        } else if (field === 'gallery') {
          setPortfolio(prev => ({ ...prev, gallery: [...prev.gallery, reader.result] }));
        } else if (field === 'testimonialImage') {
          setNewTestimonial(prev => ({ ...prev, image: reader.result, imagePreview: reader.result }));
        } else if (field === 'updateTestimonialImage' && itemId !== null) {
          setPortfolio(prev => ({
            ...prev,
            testimonials: prev.testimonials.map(t => t.id === itemId ? {...t, image: reader.result} : t)
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleRemoveGalleryImage = (index) => {
    setPortfolio(prev => ({
        ...prev,
        gallery: prev.gallery.filter((_, i) => i !== index)
    }));
  };

  const handleTestimonialChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial(prev => ({ ...prev, [name]: value }));
  };

  const addTestimonial = () => {
    if (newTestimonial.text.trim() && newTestimonial.name.trim()) {
      handleAddItem('testimonials', newTestimonial, setNewTestimonial);
    }
  };


  const sidebarTabs = [
    { id: 'publicProfile', label: 'My Public Profile', icon: <FiUser/> },
    { id: 'expertiseMedia', label: 'Expertise & Media', icon: <FiBriefcase/> },
    { id: 'clientSocials', label: 'Client Proof & Socials', icon: <FiStar/> },
    { id: 'contactAccount', label: 'Contact & Account', icon: <FiSettings/> },
    { id: 'portfolioDesign', label: 'Portfolio Design & Visibility', icon: <FiLayout/> },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'publicProfile':
        return (
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <section className="content-section">
              <h2 className="content-title">My Public Profile</h2>
              <p className="content-subtitle">Core identity and introductory content for your portfolio.</p>
              <hr className="divider" />
              <div className="form-field">
                <label htmlFor="username">Username (Public Display)</label>
                <input type="text" id="username" name="username" value={portfolio.username} onChange={handleChange}/>
              </div>
              <div className="form-field">
                <label htmlFor="actualName">Full Name</label>
                <input type="text" id="actualName" name="actualName" value={portfolio.actualName} onChange={handleChange} placeholder="Your legal or full name"/>
              </div>
              <div className="form-field">
                  <label>Profile Picture</label>
                  <div className="profile-picture-upload">
                      {portfolio.profilePicture ? (
                      <div className="image-preview-container">
                          <img src={portfolio.profilePicture} alt="Profile" className="profile-pic-preview"/>
                          <button type="button" className="remove-image-btn" onClick={() => setPortfolio(prev => ({ ...prev, profilePicture: '' }))}><FiTrash2 /> Change</button>
                      </div>
                      ) : (
                      <label className="upload-box-label"><FiUpload /><span>Upload Picture</span><input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'profilePicture')} hidden /></label>
                      )}
                  </div>
              </div>
              <div className="form-field">
                <label htmlFor="headline">Professional Headline</label>
                <textarea id="headline" name="headline" value={portfolio.headline} onChange={handleChange} rows="3" placeholder="e.g., Certified Fitness Coach..."/>
              </div>
              <div className="form-field">
                <label htmlFor="bio">Biography / About Me</label>
                <textarea id="bio" name="bio" value={portfolio.bio} onChange={handleChange} rows="5"/>
              </div>
              <div className="form-actions"><button type="button" className="button-primary">Save Profile</button></div>
            </section>
          </motion.div>
        );
      case 'expertiseMedia':
        return (
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <section className="content-section">
              <h2 className="content-title">Expertise & Media Content</h2>
              <p className="content-subtitle">Showcase your skills, experience, and visual portfolio.</p>
              <hr className="divider" />
              <div className="form-field">
                <label htmlFor="experienceYears">Years of Experience</label>
                <input type="number" id="experienceYears" name="experienceYears" value={portfolio.experienceYears} onChange={handleNumericChange} min="0"/>
              </div>
              <div className="form-field">
                <label htmlFor="totalProjectsCompleted">Total Clients / Projects Completed</label>
                <input type="number" id="totalProjectsCompleted" name="totalProjectsCompleted" value={portfolio.totalProjectsCompleted} onChange={handleNumericChange} min="0"/>
              </div>
              <div className="form-field">
                <label>Primary Specialties (e.g., Fitness, Yoga)</label>
                <div className="array-input-container">
                  <input type="text" value={newSpecialty} onChange={(e) => setNewSpecialty(e.target.value)} placeholder="Add a specialty"/>
                  <button type="button" className="add-item-btn" onClick={() => handleAddItem('specialty', newSpecialty, setNewSpecialty)}><FiPlus /></button>
                </div>
                <div className="items-list">{portfolio.specialty.map((item, index) => (<div key={index} className="list-item"><span>{item}</span><button type="button" className="remove-list-item-btn" onClick={() => handleRemoveItem('specialty', index)}><FiMinus /></button></div>))}</div>
              </div>
              <div className="form-field">
                <label>Detailed Specializations / Skills</label>
                <div className="array-input-container"><input type="text" value={newSpecialization} onChange={(e) => setNewSpecialization(e.target.value)} placeholder="Add specialization"/><button type="button" className="add-item-btn" onClick={() => handleAddItem('specializations', newSpecialization, setNewSpecialization)}><FiPlus /></button></div>
                <div className="items-list">{portfolio.specializations.map((item, index) => (<div key={index} className="list-item"><span>{item}</span><button type="button" className="remove-list-item-btn" onClick={() => handleRemoveItem('specializations', index)}><FiMinus /></button></div>))}</div>
              </div>
              <div className="form-field">
                <label>Certifications</label>
                <div className="array-input-container"><input type="text" value={newCertification} onChange={(e) => setNewCertification(e.target.value)} placeholder="Add certification"/><button type="button" className="add-item-btn" onClick={() => handleAddItem('certifications', newCertification, setNewCertification)}><FiPlus /></button></div>
                <div className="items-list">{portfolio.certifications.map((item, index) => (<div key={index} className="list-item"><span>{item}</span><button type="button" className="remove-list-item-btn" onClick={() => handleRemoveItem('certifications', index)}><FiMinus /></button></div>))}</div>
              </div>
              <hr className="divider" />
              <h3 className="form-section-title">Media Gallery & Videos</h3>
              <div className="form-field">
                <label>Image Gallery</label>
                <label className="button-secondary upload-gallery-btn" style={{display: 'inline-block', marginBottom:'10px'}}><FiUpload /> Upload Image to Gallery<input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'gallery')} hidden /></label>
                <div className="gallery-previews">{portfolio.gallery.map((imgSrc, index) => (<div key={index} className="gallery-item-preview"><img src={imgSrc} alt={`Gallery item ${index + 1}`} /><button type="button" onClick={() => handleRemoveGalleryImage(index)}><FiTrash2 /></button></div>))}{portfolio.gallery.length === 0 && <p className="field-description">No images in your gallery yet.</p>}</div>
              </div>
              <div className="form-field">
                <label>Normal Video URLs</label>
                <div className="array-input-container"><input type="url" value={newNormalVideo} onChange={(e) => setNewNormalVideo(e.target.value)} placeholder="https://yourvideo.com/video_id"/><button type="button" className="add-item-btn" onClick={() => handleAddItem('normalVideos', newNormalVideo, setNewNormalVideo)}><FiPlus /></button></div>
                <div className="items-list">{portfolio.normalVideos.map((item, index) => (<div key={index} className="list-item"><span>{item}</span><button type="button" className="remove-list-item-btn" onClick={() => handleRemoveItem('normalVideos', index)}><FiMinus /></button></div>))}</div>
              </div>
              <div className="form-field">
                <label>Video Embed URLs (YouTube, Vimeo)</label>
                 <div className="array-input-container"><input type="url" value={newVideoEmbedUrl} onChange={(e) => setNewVideoEmbedUrl(e.target.value)} placeholder="https://youtube.com/embed/your_video_id"/><button type="button" className="add-item-btn" onClick={() => handleAddItem('videoEmbedUrls', newVideoEmbedUrl, setNewVideoEmbedUrl)}><FiPlus /></button></div>
                <div className="items-list">{portfolio.videoEmbedUrls.map((item, index) => (<div key={index} className="list-item"><span>{item}</span><button type="button" className="remove-list-item-btn" onClick={() => handleRemoveItem('videoEmbedUrls', index)}><FiMinus /></button></div>))}</div>
              </div>
              <div className="form-actions"><button type="button" className="button-primary">Save Expertise & Media</button></div>
            </section>
          </motion.div>
        );
      case 'clientSocials':
        return (
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <section className="content-section">
              <h2 className="content-title">Client Proof & Social Media</h2>
              <p className="content-subtitle">Share testimonials and connect your social profiles.</p>
              <hr className="divider" />
              <h3 className="form-section-title">Client Testimonials & Mentions</h3>
              <div className="form-field">
                <label>Client Names / Companies Worked With</label>
                <div className="array-input-container"><input type="text" value={newClientName} onChange={(e) => setNewClientName(e.target.value)} placeholder="Add client name or company"/><button type="button" className="add-item-btn" onClick={() => handleAddItem('clients', newClientName, setNewClientName)}><FiPlus /></button></div>
                <div className="items-list">{portfolio.clients.map((item, index) => (<div key={index} className="list-item"><span>{item}</span><button type="button" className="remove-list-item-btn" onClick={() => handleRemoveItem('clients', index)}><FiMinus /></button></div>))}</div>
              </div>
              <div className="form-field">
                  <label>Testimonials</label>
                  <div className="testimonial-form">
                      <textarea name="text" value={newTestimonial.text} onChange={handleTestimonialChange} placeholder="Testimonial text" rows="3"/>
                      <input type="text" name="name" value={newTestimonial.name} onChange={handleTestimonialChange} placeholder="Client's Name"/>
                      <div className="testimonial-image-upload">
                          {newTestimonial.imagePreview && <img src={newTestimonial.imagePreview} alt="preview" className="testimonial-img-preview"/>}
                          <label className="button-secondary"><FiImage /> {newTestimonial.imagePreview ? 'Change Image' : 'Upload Client Image (Optional)'}<input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'testimonialImage')} hidden/></label>
                          {newTestimonial.imagePreview && <button type="button" className="remove-image-btn small-btn" onClick={() => setNewTestimonial(p=>({...p, image:'', imagePreview:''}))}><FiTrash2/></button>}
                      </div>
                      <button type="button" className="button-primary" onClick={addTestimonial} style={{marginTop:'10px'}}>Add Testimonial</button>
                  </div>
                  <div className="testimonials-list">{portfolio.testimonials.map((testimonial) => (<div key={testimonial.id} className="testimonial-item-display">{testimonial.image && <img src={testimonial.image} alt={testimonial.name} className="testimonial-img-display"/>}<div><p><strong>"{testimonial.text}"</strong></p><p>- {testimonial.name}</p></div><button type="button" className="remove-list-item-btn" onClick={() => handleRemoveItem('testimonials', testimonial.id)}><FiTrash2 /></button></div>))}</div>
              </div>
              <hr className="divider" />
              <h3 className="form-section-title">Social Media & Web Links</h3>
              <div className="form-field">
                <label htmlFor="facebook">Facebook Profile URL</label>
                <input type="url" id="facebook" name="facebook" value={portfolio.facebook} onChange={handleChange} placeholder="https://facebook.com/yourprofile"/>
              </div>
              <div className="form-field">
                <label htmlFor="instagram">Instagram Profile URL</label>
                <input type="url" id="instagram" name="instagram" value={portfolio.instagram} onChange={handleChange} placeholder="https://instagram.com/yourprofile"/>
              </div>
              <div className="form-field">
                <label>Other URLs (Website, Blog, etc.)</label>
                {portfolio.urls.map((urlItem) => (<div key={urlItem.id} className="url-input-group"><input type="text" value={urlItem.value} onChange={(e) => handleUrlChange(urlItem.id, e.target.value)} placeholder="https://example.com"/><button type="button" className="remove-url-btn" onClick={() => handleRemoveItem('urls', urlItem.id)}><FiTrash2 /></button></div>))}
                <div className="add-url-group"><input type="text" value={newUrl} onChange={(e) => setNewUrl(e.target.value)} placeholder="Add new URL" style={{flexGrow: 1, marginRight: '10px'}}/><button type="button" className="button-secondary add-url-btn" onClick={() => handleAddItem('urls', newUrl, setNewUrl)}>Add URL</button></div>
              </div>
              <div className="form-actions"><button type="button" className="button-primary">Save Client Proof & Socials</button></div>
            </section>
          </motion.div>
        );
      case 'contactAccount':
        return (
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <section className="content-section">
              <h2 className="content-title">Contact Information & Account</h2>
              <p className="content-subtitle">Manage your contact details and platform account settings.</p>
              <hr className="divider" />
              <h3 className="form-section-title">Contact Details</h3>
              <div className="form-field">
                <label htmlFor="email">Contact Email</label>
                <input type="email" id="email" name="email" value={portfolio.email} onChange={handleChange} placeholder="Your primary contact email"/>
              </div>
              <div className="form-field">
                <label htmlFor="mobile">Mobile Phone</label>
                <input type="tel" id="mobile" name="mobile" value={portfolio.mobile} onChange={handleChange} placeholder="Your contact number"/>
              </div>
              <hr className="divider" />
              <h3 className="form-section-title">Account Management</h3>
              <div className="form-field">
                <label>Current Subscription Plan</label>
                <p>Your current plan: <strong>Premium Coach</strong> (Example)</p>
                <button className="button-secondary">Manage Subscription</button>
              </div>
               <div className="form-field">
                <label htmlFor="changePassword">Change Password</label>
                <input type="password" id="currentPassword" placeholder="Current Password" style={{marginBottom:'0.5rem'}}/>
                <input type="password" id="newPassword" placeholder="New Password" style={{marginBottom:'0.5rem'}}/>
                <input type="password" id="confirmNewPassword" placeholder="Confirm New Password" />
                 <button type="button" className="button-primary" style={{marginTop:'1rem'}}>Update Password</button>
              </div>
              {/* No specific save button here as these are usually separate actions */}
            </section>
          </motion.div>
        );
      case 'portfolioDesign':
        return (
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <section className="content-section">
              <h2 className="content-title">Portfolio Design & Visibility</h2>
              <p className="content-subtitle">Customize the appearance and what's displayed on your public portfolio.</p>
              <hr className="divider" />
              <h3 className="form-section-title">Appearance</h3>
               <div className="form-field">
                <label htmlFor="theme">Portfolio Theme</label>
                <select id="theme" name="theme" value={portfolio.theme} onChange={handleChange}>
                  <option value="light">Light Theme</option>
                  <option value="dark">Dark Theme</option>
                  <option value="professional">Professional Blue</option>
                  <option value="vibrant">Vibrant Modern</option>
                </select>
              </div>
              <hr className="divider" />
              <h3 className="form-section-title">Content Offering</h3>
               <div className="form-field">
                <label>Programs Offered</label>
                <div className="array-input-container"><input type="text" value={newProgram} onChange={(e) => setNewProgram(e.target.value)} placeholder="Add program name"/><button type="button" className="add-item-btn" onClick={() => handleAddItem('programsOffered', newProgram, setNewProgram)}><FiPlus /></button></div>
                <div className="items-list">{portfolio.programsOffered.map((item, index) => (<div key={index} className="list-item"><span>{item}</span><button type="button" className="remove-list-item-btn" onClick={() => handleRemoveItem('programsOffered', index)}><FiMinus /></button></div>))}</div>
              </div>
              <div className="form-field">
                <label>Lead Magnets (e.g., Free eBook Title)</label>
                <div className="array-input-container"><input type="text" value={newLeadMagnet} onChange={(e) => setNewLeadMagnet(e.target.value)} placeholder="Add lead magnet"/><button type="button" className="add-item-btn" onClick={() => handleAddItem('leadMagnets', newLeadMagnet, setNewLeadMagnet)}><FiPlus /></button></div>
                <div className="items-list">{portfolio.leadMagnets.map((item, index) => (<div key={index} className="list-item"><span>{item}</span><button type="button" className="remove-list-item-btn" onClick={() => handleRemoveItem('leadMagnets', index)}><FiMinus /></button></div>))}</div>
              </div>
              <hr className="divider" />
              <h3 className="form-section-title">Visibility Controls (Placeholders)</h3>
              <p className="field-description">Future options to toggle visibility of specific sections on your portfolio.</p>
              {/* Example: <label><input type="checkbox" /> Show Experience Years</label> */}
              <div className="form-actions"><button type="button" className="button-primary">Save Design & Visibility Settings</button></div>
            </section>
          </motion.div>
        );
      default:
        return <p>Select a tab to edit.</p>;
    }
  };

  return (
    <div className="settings-page">
      <header className="settings-header">
        <h1>Portfolio & Account Settings</h1>
        <p>Manage your public portfolio content, contact details, and account preferences.</p>
      </header>

      <div className="settings-layout">
        <aside className="settings-sidebar">
          <nav>
            <ul>
              {sidebarTabs.map(tab => (
                <li key={tab.id}>
                  <button
                    className={activeTab === tab.id ? 'active' : ''}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon && <span className="sidebar-icon">{tab.icon}</span>}
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="settings-content">
          {renderActiveTabContent()}
        </main>
      </div>
    </div>
  );
};

export default PortfolioEditView;

