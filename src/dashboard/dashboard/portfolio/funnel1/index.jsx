import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import AppointmentCalendar from './calender.jsx';
import {
  setStages,
  setSelectedTemplateForStage,
  addStage,
  removeStage,
  saveFunnelToBackend,
  updateStageBasicInfo,
  fetchFunnelBySlug,
  resetState,
} from '../../../../redux/funnel.jsx';
import { templates } from './df_temp.jsx';
import './style.css';

// Icons
const FiTrash2 = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>;
const FiEdit = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;
const FiSave = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>;
const FiExternalLink = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;
const FiPlus = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const FiChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;
const FiChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>;
const FiCalendar = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const FiCreditCard = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;

// Stage Template Selector Component
const StageTemplateSelector = ({ stageType, selectedKey, onSelect }) => {
  const templateSet = { 
    'welcome-page': templates.welcomeTemplates, 
    'vsl-page': templates.vslTemplates, 
    'thankyou-page': templates.thankyouTemplates, 
    'whatsapp-page': templates.whatsappTemplates, 
    'product-offer': templates.productOfferTemplates, 
    'custom-page': templates.miscTemplates, 
    'appointment-page': templates.appointmentTemplates, 
    'payment-page': templates.paymentTemplates 
  }[stageType];

  if (!templateSet || Object.keys(templateSet).length === 0) {
    return (
      <div className="content-section animate-fadeIn">
        <p>This stage is managed by system settings and does not have a selectable design here.</p>
      </div>
    );
  }

  return (
    <div className="content-section animate-fadeIn">
      <h3 className="section-title">Select a Design</h3>
      <p className="field-note" style={{ marginBottom: '20px' }}>
        Choose a starting point for your page. This will be the initial design in the editor.
      </p>
      <div className="template-grid">
        {Object.keys(templateSet).map((templateKey) => {
          const template = templateSet[templateKey];
          const isSelected = selectedKey === templateKey;
          return (
            <div 
              key={templateKey} 
              className={`template-card ${isSelected ? 'selected' : ''}`} 
              onClick={() => onSelect(templateKey)}
            >
              <div className="template-thumbnail">
                <img 
                  src={template.thumbnail} 
                  alt={template.name} 
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src='https://placehold.co/400x300/ccc/ffffff?text=Error'; 
                  }} 
                />
              </div>
              <div className="template-info">
                <h4>{template.name}</h4>
                <p>{template.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Basic Info Form Component (Updated with proper state handling)
const BasicInfoForm = ({ stage, stageConfig, onUpdate }) => {
  const [expanded, setExpanded] = useState(true);
  
  // Create local state from props
  const [formData, setFormData] = useState({
    name: stageConfig?.name || stage.name || '',
    slug: stageConfig?.basicInfo?.slug || '',
    title: stageConfig?.basicInfo?.title || '',
    description: stageConfig?.basicInfo?.description || '',
    keywords: stageConfig?.basicInfo?.keywords || '',
    favicon: stageConfig?.basicInfo?.favicon || null,
    socialImage: stageConfig?.basicInfo?.socialImage || null,
    socialTitle: stageConfig?.basicInfo?.socialTitle || '',
    socialDescription: stageConfig?.basicInfo?.socialDescription || '',
    customHtmlHead: stageConfig?.basicInfo?.customHtmlHead || '',
    customHtmlBody: stageConfig?.basicInfo?.customHtmlBody || ''
  });

  // Handle input changes
  const handleChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
    // Immediately update Redux state
    onUpdate(stage.id, key, value);
  };

  // Handle file uploads
  const handleFileChange = (key, e) => {
    const file = e.target.files[0];
    if (file) {
      const fileData = {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        // You might want to store a preview URL or process the file
      };
      handleChange(key, fileData);
    }
  };

  return (
    <div className="content-section animate-fadeIn">
      <div className="section-header" onClick={() => setExpanded(!expanded)}>
        <h3 className="section-title" style={{border: 'none', paddingBottom: 0, marginBottom: 0}}>
          Basic Details
        </h3>
        <span className="expand-icon">
          {expanded ? <FiChevronDown /> : <FiChevronRight />}
        </span>
      </div>
      
      {expanded && (
        <div className="form-grid animate-fadeIn">
          <div className="form-field">
            <label>Name</label>
            <input
              type="text"
              className="styled-input"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Page name"
            />
          </div>
          
          <div className="form-field">
            <label>Slug</label>
            <input
              type="text"
              className="styled-input"
              value={formData.slug}
              onChange={(e) => handleChange('slug', e.target.value)}
              placeholder="url-friendly-name"
            />
            <p className="field-note">URL-friendly version of the name (e.g., my-awesome-page).</p>
          </div>
          
          <div className="form-field">
            <label>Title</label>
            <input
              type="text"
              className="styled-input"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Page title for browser tab"
            />
          </div>
          
          <div className="form-field">
            <label>Keywords</label>
            <input
              type="text"
              className="styled-input"
              value={formData.keywords}
              onChange={(e) => handleChange('keywords', e.target.value)}
              placeholder="Comma-separated keywords"
            />
          </div>

          <div className="form-field full-width">
            <label>Description</label>
            <textarea
              className="styled-textarea"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Short summary of page content for SEO"
              rows="3"
            />
          </div>
          
          <div className="form-field">
            <label>Favicon</label>
            <div className="file-upload">
              <input
                id={`favicon-upload-${stage.id}`}
                type="file"
                onChange={(e) => handleFileChange('favicon', e)}
                accept="image/*"
              />
              <label htmlFor={`favicon-upload-${stage.id}`} className="button-secondary">
                Select image
              </label>
              {formData.favicon && (
                <span className="file-name">{formData.favicon.name || 'Selected'}</span>
              )}
            </div>
          </div>

          <div className="form-field">
            <label>Social Share Image</label>
            <div className="file-upload">
              <input
                id={`social-image-upload-${stage.id}`}
                type="file"
                onChange={(e) => handleFileChange('socialImage', e)}
                accept="image/*"
              />
              <label htmlFor={`social-image-upload-${stage.id}`} className="button-secondary">
                Select image
              </label>
              {formData.socialImage && (
                <span className="file-name">{formData.socialImage.name || 'Selected'}</span>
              )}
            </div>
          </div>
          
          <div className="form-field">
            <label>Social Title</label>
            <input
              type="text"
              className="styled-input"
              value={formData.socialTitle}
              onChange={(e) => handleChange('socialTitle', e.target.value)}
              placeholder="Title for social sharing"
            />
          </div>
          
          <div className="form-field">
            <label>Social Description</label>
            <textarea
              className="styled-textarea"
              value={formData.socialDescription}
              onChange={(e) => handleChange('socialDescription', e.target.value)}
              placeholder="Description for social sharing"
              rows="2"
            />
          </div>
          
          <div className="form-field full-width">
            <label>Custom HTML head</label>
            <textarea
              className="styled-textarea code"
              value={formData.customHtmlHead}
              onChange={(e) => handleChange('customHtmlHead', e.target.value)}
              placeholder="<meta>, <link>, <style>, <script> tags"
              rows="4"
            />
            <p className="field-note">Add custom HTML to be included in the &lt;head&gt; section.</p>
          </div>
          
          <div className="form-field full-width">
            <label>Custom HTML body</label>
            <textarea
              className="styled-textarea code"
              value={formData.customHtmlBody}
              onChange={(e) => handleChange('customHtmlBody', e.target.value)}
              placeholder="Tracking codes, scripts"
              rows="4"
            />
            <p className="field-note">Add custom HTML to be included just before the closing &lt;/body&gt; tag.</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Payment Settings Component
const PaymentSettings = ({ settings, onUpdate }) => {
  return (
    <div className="content-section animate-fadeIn">
      <h3 className="section-title">Payment Settings</h3>
      <div className="form-field">
        <label>Default Currency</label>
        <select
          className="styled-select"
          value={settings.currency}
          onChange={(e) => onUpdate('currency', e.target.value)}
        >
          <option value="INR">Indian Rupee (INR)</option>
          <option value="USD">US Dollar (USD)</option>
        </select>
      </div>
      
      <div className="payment-gateway-card">
        <div className="gateway-header">
          <h4>Razorpay</h4>
          <span className={`status-badge ${settings.gateways.razorpay.connected ? 'connected' : ''}`}>
            {settings.gateways.razorpay.connected ? 'Connected' : 'Not Connected'}
          </span>
        </div>
        <div className="form-field">
          <label>Razorpay Key ID</label>
          <input
            type="text"
            className="styled-input"
            value={settings.gateways.razorpay.keyId}
            onChange={(e) => onUpdate('gateways.razorpay.keyId', e.target.value)}
            placeholder="rzp_live_..."
          />
        </div>
        <div className="form-field">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={settings.gateways.razorpay.connected}
              onChange={(e) => onUpdate('gateways.razorpay.connected', e.target.checked)}
            />
            <span>Connect Razorpay</span>
          </label>
        </div>
      </div>
    </div>
  );
};

// Stage Type Modal
const StageTypeModal = ({ onClose, onAddStage }) => {
  const [stageType, setStageType] = useState('');
  const [customName, setCustomName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);

  const defaultStages = [
    { type: 'welcome-page', name: 'Welcome Page', icon: <FiEdit /> },
    { type: 'vsl-page', name: 'Video Sales Letter', icon: <FiEdit /> },
    { type: 'product-offer', name: 'Product Offer', icon: <FiEdit /> },
    { type: 'thankyou-page', name: 'Thank You Page', icon: <FiEdit /> },
    { type: 'whatsapp-page', name: 'WhatsApp Community', icon: <FiEdit /> },
    { type: 'appointment-page', name: 'Appointment', icon: <FiCalendar /> },
    { type: 'payment-page', name: 'Payment', icon: <FiCreditCard /> },
    { type: 'custom-page', name: 'Custom Page', icon: <FiPlus /> }
  ];

  const handleStageSelect = (type, name) => {
    if (type === 'custom-page') {
      setStageType(type);
      setShowNameInput(true);
    } else {
      onAddStage(type, name);
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stageType === 'custom-page' && !customName.trim()) {
      alert('Please enter a name for your custom stage');
      return;
    }
    onAddStage(stageType, customName || defaultStages.find(s => s.type === stageType)?.name);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Add New Stage</h3>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {!showNameInput ? (
            <>
              <h4>Select Stage Type</h4>
              <div className="stage-type-grid">
                {defaultStages.map(stage => (
                  <div 
                    key={stage.type} 
                    className="stage-option-card" 
                    onClick={() => handleStageSelect(stage.type, stage.name)}
                  >
                    <div className="stage-option-icon">{stage.icon}</div>
                    <div className="stage-option-card-content">
                      <h4>{stage.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <> 
              <form onSubmit={handleSubmit}>
                <h4>Enter Custom Stage Name</h4>
                <div className="form-field">
                  <input
                    type="text"
                    className="styled-input"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="e.g., My Awesome Page"
                    autoFocus
                  />
                </div>
                <br />
                <div className="modal-footer" style={{margin:'-30px'}}>
                  <button type="button" className="button-dark" onClick={() => setShowNameInput(false)}>
                    Back
                  </button>
                  <button type="submit" className="button-primary">
                    Add Stage
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const FunnelEditorIndex = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();

  const { contentData, stages, apiStatus, error } = useSelector((state) => state.funnel);
  const [activeStageId, setActiveStageId] = useState('');
  const [showStageModal, setShowStageModal] = useState(false);
  const [activeTab, setActiveTab] = useState('Basic');

  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef(null);
  const tabRefs = useRef({});

  // Fetch funnel data when slug changes
  useEffect(() => {
    if (slug) {
      dispatch(fetchFunnelBySlug(slug));
    } else {
      dispatch(resetState());
    }
    setActiveStageId('');
  }, [slug, dispatch]);

  // Set active stage when stages load
  useEffect(() => {
    if (apiStatus !== 'loading' && stages && stages.length > 0 && !activeStageId) {
      setActiveStageId(stages[0].id);
    }
  }, [stages, apiStatus, activeStageId]);

  const activeStage = stages.find(s => s.id === activeStageId);

  const TABS = ['Basic', 'Template'];
  if (activeStage && ['appointment-page', 'payment-page'].includes(activeStage.type)) {
    TABS.push('Settings');
  }

  // Update tab indicator position
  useEffect(() => {
    const activeTabNode = tabRefs.current[activeTab];
    if (activeTabNode) {
      setIndicatorStyle({
        left: activeTabNode.offsetLeft,
        width: activeTabNode.offsetWidth,
      });
    }
  }, [activeTab, activeStageId, TABS.length]);

  const handleBuildPage = (stageId) => {
    const stage = stages.find(s => s.id === stageId);
    if (!stage) { 
      alert("Stage not found"); 
      return; 
    }
    const isCustom = stage.type === 'custom-page';
    const config = isCustom ? contentData.customStagesConfig[stageId] : contentData.stagesConfig[stage.type];
    if (!config?.selectedTemplateKey && ['welcome-page', 'vsl-page', 'thankyou-page', 'whatsapp-page', 'product-offer', 'custom-page', 'appointment-page', 'payment-page'].includes(stage.type)) {
      alert("Please select a template first."); 
      return;
    }
    window.open(`/dashboard/funnel_edit/${slug}/${stageId}`);
  };

// FunnelEditorIndex.jsx (updated publish handler)

const handlePublish = () => {
  const funnelName = contentData.name || `Funnel: ${slug}`; 
  dispatch(saveFunnelToBackend({ 
    slug, 
    funnelName
  }))
  .then((result) => {
    if (saveFunnelToBackend.fulfilled.match(result)) {
      alert("Funnel published successfully!");
    } else if (saveFunnelToBackend.rejected.match(result)) {
      alert(`Failed to publish funnel: ${result.error.message}`);
    }
  });
};
  const handleAddStage = (type, name) => {
    if (type !== 'custom-page' && stages.some(s => s.type === type)) {
      alert(`A ${name} stage already exists in this funnel.`); 
      return;
    }
    const id = type === 'custom-page' ? `custom_${Date.now()}` : type;
    dispatch(addStage({ id, name, type, fixed: false }));
    setActiveStageId(id);
    setActiveTab('Basic');
  };

  const handleRemoveStage = (stageId) => {
    if (window.confirm(`Are you sure you want to delete this stage?`)) {
      const currentIndex = stages.findIndex(s => s.id === stageId);
      dispatch(removeStage(stageId));
      if (activeStageId === stageId) {
        const remainingStages = stages.filter(s => s.id !== stageId);
        const nextStageIndex = currentIndex > 0 ? currentIndex - 1 : 0;
        setActiveStageId(remainingStages[nextStageIndex]?.id || '');
      }
    }
  };

  const handleUpdateBasicInfo = (stageId, key, value) => {
    dispatch(updateStageBasicInfo({ stageId, key, value }));
  };

  const handleUpdatePaymentSettings = (key, value) => {
    dispatch(updateStageBasicInfo({ 
      stageId: 'payment-page', 
      key: `settings.${key}`, 
      value 
    }));
  };

  // Loading state UI
  if (apiStatus === 'loading') {
    return (
      <div className="editor-container" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        flexDirection: 'column' 
      }}>
        <h2>Loading Funnel: {slug}...</h2>
        <p>Please wait while we fetch your funnel data.</p>
      </div>
    );
  }

  const renderContentArea = () => {
    if (!activeStage) {
      if (apiStatus === 'failed' && error) {
        return (
          <div className="content-section">
            <strong>Error:</strong> {error} You can start building a new funnel.
          </div>
        );
      }
      return (
        <div className="content-section">
          Please select a stage, or click 'Add New Stage' to begin.
        </div>
      );
    }

    const { type, id } = activeStage;
    const isCustom = type === 'custom-page';
    let stageConfig = isCustom ? contentData.customStagesConfig[id] : contentData.stagesConfig[type];

    // Ensure stage config exists
    if (!stageConfig) { 
      stageConfig = {}; 
    }

    const canBeBuilt = [
      'welcome-page', 
      'vsl-page', 
      'thankyou-page', 
      'whatsapp-page', 
      'product-offer', 
      'custom-page', 
      'appointment-page', 
      'payment-page'
    ].includes(type);

    return (
      <>
        <div className="content-area-header animate-fadeIn">
          <h2 className="content-title">
            {stageConfig?.name || activeStage.name}
          </h2>
        </div>
        
        <div className="sub-nav-container" ref={tabsRef}>
          {TABS.map(tab => (
            <button 
              key={tab} 
              ref={el => tabRefs.current[tab] = el} 
              className={`sub-nav-button ${activeTab === tab ? 'active' : ''}`} 
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <div className="sub-nav-indicator" style={indicatorStyle}></div>
        </div>
        
        <div className="content-body" key={id}>
          {activeTab === 'Basic' && (
            <BasicInfoForm 
              stage={activeStage} 
              stageConfig={stageConfig} 
              onUpdate={handleUpdateBasicInfo} 
            />
          )}
          
          {activeTab === 'Template' && (
            <>
              <StageTemplateSelector
                stageType={type}
                selectedKey={stageConfig?.selectedTemplateKey}
                onSelect={(templateKey) => dispatch(setSelectedTemplateForStage({ 
                  stageId: id, 
                  templateKey 
                }))}
              />
              {canBeBuilt && (
                <div className="content-section animate-fadeIn">
                  <h3 className="section-title">Page Content & Design</h3>
                  <p className="field-note" style={{marginBottom: '20px'}}>
                    After selecting a design, click the button below to open the visual page builder.
                  </p>
                  <button
                    className="button-primary"
                    onClick={() => handleBuildPage(id)}
                    disabled={!stageConfig?.selectedTemplateKey}
                  >
                    <FiEdit /> Build Page
                  </button>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'Settings' && type === 'appointment-page' && (
            <div className="content-section animate-fadeIn">
              <h3 className="section-title">Appointment Settings</h3>
              <AppointmentCalendar
                availabilityRange={contentData.generalSettings.appointment.settings.availabilityRange}
                onUpdate={(range) => handleUpdateBasicInfo(
                  'appointment-page', 
                  'settings.availabilityRange', 
                  range
                )}
              />
            </div>
          )}
          
          {activeTab === 'Settings' && type === 'payment-page' && (
            <PaymentSettings
              settings={contentData.generalSettings.payment.settings}
              onUpdate={handleUpdatePaymentSettings}
            />
          )}
        </div>
      </>
    );
  };

  const getPublishButtonText = () => {
    switch (apiStatus) {
      case 'publishing': return 'Publishing...';
      case 'published': return 'Published!';
      default: return 'Publish';
    }
  };

  return (
    <div className="editor-container">
      <header className="editor-header">
        <div>
          <h1>Funnel: {slug}</h1>
          <p>Editing Stage: {activeStage?.name || 'N/A'}</p>
        </div>
        <div className="header-actions">
          <button className="button-secondary">
            <FiExternalLink /> Preview
          </button>
          <button 
            className="button-primary" 
            onClick={handlePublish} 
            disabled={apiStatus === 'publishing'}
          >
            <FiSave /> {getPublishButtonText()}
          </button>
        </div>
      </header>
      
      <div className="editor-layout">
        <aside className="editor-sidebar">
          <h3 className="sidebar-title">Funnel Stages</h3>
          <ul className="stages-list">
            {stages.map(stage => (
              <li 
                key={stage.id} 
                className={`stage-item ${activeStageId === stage.id ? 'active' : ''}`} 
                onClick={() => { 
                  setActiveStageId(stage.id); 
                  if (!['appointment-page', 'payment-page'].includes(stage.type) && activeTab === 'Settings') {
                    setActiveTab('Basic'); 
                  } else { 
                    setActiveTab('Basic'); 
                  } 
                }}
              >
                <span className="stage-name">{stage.name}</span>
                <div className="stage-actions">
                  <button 
                    type="button" 
                    className="remove-stage-button" 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      handleRemoveStage(stage.id); 
                    }}
                  >
                    <FiTrash2 />
                  </button>
                  <FiChevronRight />
                </div>
              </li>
            ))}
          </ul>
          <button 
            type="button" 
            className="button-primary-full" 
            onClick={() => setShowStageModal(true)}
          >
            <FiPlus /> Add New Stage
          </button>
        </aside>
        
        <main className="editor-main-content">
          {renderContentArea()}
        </main>
      </div>
      
      {showStageModal && (
        <StageTypeModal 
          onClose={() => setShowStageModal(false)} 
          onAddStage={handleAddStage} 
        />
      )}
    </div>
  );
};

export default FunnelEditorIndex;