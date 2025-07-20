// import React, { useEffect, useState, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import StudioEditor from "@grapesjs/studio-sdk/react";
// import "@grapesjs/studio-sdk/style";
// import { useParams, useNavigate } from 'react-router-dom';
// import { FaSync, FaDownload, FaArrowLeft, FaMagic, FaFileAlt, FaSave, FaFileExport } from 'react-icons/fa';
// import axios from "axios";

// import { updateProjectData, setSelectedTemplateForStage, updateStageBasicInfo, saveFunnelToBackend } from '../../../../redux/funnel.jsx';
// import { templates } from './df_temp.jsx';
// // import addLandingPageComponents from './function.jsx';
// // import addLandingPageComponents from './function.jsx'; // इसे बदलें
// import addLandingPageComponents from './function.jsx'; // इसमें
// import "./old.css";

// // GrapesJS Plugins
// import gjsPresetWebpage from "grapesjs-preset-webpage";
// import gjsForms from "grapesjs-plugin-forms";
// import gjsCountdown from "grapesjs-component-countdown";
// import gjsTabs from "grapesjs-tabs";
// import gjsCustomCode from "grapesjs-custom-code";
// import gjsTooltip from "grapesjs-tooltip";
// import gjsTyped from "grapesjs-typed";
// import gjsNavbar from "grapesjs-navbar";
// import gjsBlocksBasic from "grapesjs-blocks-basic";

// //** Template Selector Component **//
// const StageTemplateSelector = ({ stageType, selectedKey, onSelect }) => {
//     const templateSet = {
//         'welcome-page': templates.welcomeTemplates,
//         'vsl-page': templates.vslTemplates,
//         'thankyou-page': templates.thankyouTemplates,
//         'whatsapp-page': templates.whatsappTemplates,
//         'product-offer': templates.productOfferTemplates,
//         'custom-page': templates.miscTemplates,
//         'appointment-page': templates.appointmentTemplates,
//         'payment-page': templates.paymentTemplates,
//     }[stageType];

//     if (!templateSet || Object.keys(templateSet).length === 0) {
//         return (
//             <div className="no-templates-message">
//                 <p>No templates available for this stage type.</p>
//             </div>
//         );
//     }

//     return (
//         <div className="template-selector-container">
//             <h3 className="template-selector-title">Select a Template</h3>
//             <div className="template-grid">
//                 {Object.entries(templateSet).map(([key, template]) => (
//                     <div
//                         key={key}
//                         className={`template-card ${selectedKey === key ? 'selected' : ''}`}
//                         onClick={() => onSelect(key)}
//                     >
//                         <div className="template-thumbnail">
//                             <img
//                                 src={template.thumbnail}
//                                 alt={template.name}
//                                 onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src = 'https://placehold.co/400x300/ccc/ffffff?text=No+Image';
//                                 }}
//                             />
//                         </div>
//                         <div className="template-info">
//                             <h4>{template.name}</h4>
//                             <p>{template.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// //** AI Generative Popup Component **//
// const AIGenerativePopup = ({ onClose, onSubmit, isLoading }) => {
//     const [description, setDescription] = useState('');

//     const handleSubmit = () => {
//         if (!description.trim()) {
//             alert('Please provide a description for the content you want to generate.');
//             return;
//         }
//         onSubmit({ description });
//     };

//     return (
//         <div className="ai-popup-content">
//             <h3>AI Content Generation</h3>
//             <p>Describe the changes you want to make to the content:</p>

//             <div className="description-section">
//                 <label>Describe what you want:</label>
//                 <textarea
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     placeholder="e.g., 'Make the headline more exciting and shorten the paragraph about benefits.'"
//                     rows={4}
//                 />
//             </div>

//             <div className="ai-popup-buttons">
//                 <button onClick={onClose} className="ai-cancel-btn cancel" disabled={isLoading}>
//                     Cancel
//                 </button>
//                 <button
//                     onClick={handleSubmit}
//                     className="ai-submit-btn upload"
//                     disabled={isLoading || !description.trim()}
//                 >
//                     {isLoading ? 'Generating...' : 'Update Content'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// //** Main Editor Component **//
// const PortfolioEdit = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { slug, stageId } = useParams();

//     const { contentData, stages, apiStatus } = useSelector((state) => state.funnel);
//     const [editorInstance, setEditorInstance] = useState(null);
//     const [showTemplateSelector, setShowTemplateSelector] = useState(false);
//     const [showAIPopup, setShowAIPopup] = useState(false);
//     const [isAILoading, setIsAILoading] = useState(false);
//     const [currentStage, setCurrentStage] = useState(null);
//     const [forceRefreshKey, setForceRefreshKey] = useState(0);
//     const [assets, setAssets] = useState([]);

//     // Get the current stage data
//     useEffect(() => {
//         if (stages && stageId) {
//             const stage = stages.find(s => s.id === stageId);
//             if (stage) {
//                 setCurrentStage(stage);
//             }
//         }
//     }, [stages, stageId]);

// const uploadFiles = async files => {
//   const fd = new FormData();
//   files.forEach(f => fd.append('assets', f));
  
//   try {
//     const { data } = await axios.post('http://localhost:5000/api/assets', fd);
//     return data.data.map(asset => ({
//       ...asset,
//       // Ensure the src is a complete, accessible URL
//       src: asset.src.startsWith('http') ? asset.src : `http://localhost:5000${asset.src}`
//     }));
//   } catch (error) {
//     console.error('Upload error:', error);
//     throw error;
//   }
// };

//     // Fetch initial assets from the backend when the component mounts
//     useEffect(() => {
//         const fetchInitialAssets = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/assets');
//                 if (!response.ok) {
//                     throw new Error(`Failed to fetch assets: ${response.statusText}`);
//                 }
//                 const result = await response.json();
//                 console.log("✅ [Frontend] Initial assets loaded from backend:", result.data);
//                 setAssets(result.data || []);
//             } catch (error) {
//                 console.error("❌ [Frontend] Error fetching initial assets:", error);
//                 setAssets([]);
//             }
//         };
//         fetchInitialAssets();
//     }, []);

//     const onEditorReady = useCallback((editor) => {
        
//         window.editor = editor;
//         setEditorInstance(editor);
//         addLandingPageComponents(editor);
//         const pagesEl = document.querySelector("#pages");
//         if (pagesEl) {
//             editor.Pages.__appendTo({ el: pagesEl });
//         }
//         setTimeout(() => {
//             const pageToSelect = editor.Pages.get(stageId);
//             if (pageToSelect) {
//                 editor.Pages.select(pageToSelect);
//             } else if (editor.Pages.getAll().length > 0) {
//                 editor.Pages.select(editor.Pages.getAll()[0]);
//             }
//         }, 500);
//     }, [stageId]);

//     useEffect(() => {
//         return () => {
//             if (editorInstance) {
//                 editorInstance.destroy();
//                 setEditorInstance(null);
//                 delete window.editor;
//             }
//         };
//     }, [editorInstance]);

//     const generateInitialProject = useCallback(() => {
//         console.log("[Frontend] Generating initial project structure for GrapesJS...");
//         const savedProjectData = contentData.projectData;
//         const hasSavedPages = savedProjectData && savedProjectData.pages && Array.isArray(savedProjectData.pages) && savedProjectData.pages.length > 0;
    
//         const createPageFromTemplate = (stage) => {
//             const isCustom = stage.type === 'custom-page';
//             const config = isCustom
//                 ? contentData.customStagesConfig?.[stage.id]
//                 : contentData.stagesConfig?.[stage.type];
//             const templateSet = {
//                 'welcome-page': templates.welcomeTemplates, 'vsl-page': templates.vslTemplates,
//                 'thankyou-page': templates.thankyouTemplates, 'whatsapp-page': templates.whatsappTemplates,
//                 'product-offer': templates.productOfferTemplates, 'custom-page': templates.miscTemplates,
//                 'appointment-page': templates.appointmentTemplates, 'payment-page': templates.paymentTemplates,
//             }[stage.type];
//             const templateKey = config?.selectedTemplateKey;
//             let template = (templateKey && templateSet && templateSet[templateKey]) 
//                             ? templateSet[templateKey] 
//                             : (templateSet ? Object.values(templateSet)[0] : null);
    
//             if (!template) {
//                  return {
//                     id: stage.id,
//                     name: stage.name,
//                     component: `<h1>${stage.name}</h1><p>Template not configured for this stage type.</p>`,
//                     styles: '', 
//                     script: '',
//                     basicInfo: config?.basicInfo || {}
//                 };
//             }
    
//             return {
//                 id: stage.id,
//                 name: stage.name,
//                 component: template.html || `<h1>${stage.name}</h1><p>Template content not found.</p>`,
//                 styles: template.css || '',
//                 script: template.js || '',
//                 basicInfo: config?.basicInfo || {}
//             };
//         };
    
//         let pages;
//         let globalCss = '';
    
//         if (hasSavedPages) {
//             console.log("[Frontend] Loading project from saved Redux state (projectData).");
//             globalCss = savedProjectData.globalCss || '';
//             pages = stages.map(stage => {
//                 const savedPage = savedProjectData.pages.find(p => p.pageId === stage.id);
//                 if (savedPage) {
//                     console.log(`[Frontend] Found saved data for stage: ${stage.id}`);
//                     return {
//                         id: stage.id,
//                         name: savedPage.name || stage.name,
//                         component: savedPage.html || `<h1>${stage.name}</h1><p>Saved content loaded.</p>`,
//                         script: savedPage.js || '',
//                         basicInfo: savedPage.basicInfo || {}
//                     };
//                 }
//                 console.log(`[Frontend] No saved data for stage: ${stage.id}. Creating from template.`);
//                 return createPageFromTemplate(stage);
//             });
//         } else {
//             console.log("[Frontend] No saved projectData found. Initializing all pages from templates.");
//             pages = stages.map(stage => createPageFromTemplate(stage));
//         }
    
//         const stageIndex = pages.findIndex(p => p.id === stageId);
//         if (stageIndex > 0) {
//             const [selectedPage] = pages.splice(stageIndex, 1);
//             pages.unshift(selectedPage);
//         }
        
//         console.log("[Frontend] Final project object for GrapesJS:", { pages, css: globalCss });
//         return { pages, css: globalCss };
//     }, [stages, contentData, stageId]);

//     const applyDataToPage = (page, { html, css, js, basicInfo }) => {
//         if (!editorInstance || !page) return;
//         if (html !== undefined) { page.set('component', ''); page.set('component', html); }
//         if (css !== undefined) { editorInstance.Css.clear(); editorInstance.Css.addRules(css); }
//         if (js !== undefined) { page.set('script', js); }
//         if (basicInfo) { page.set('basicInfo', basicInfo); }
//         editorInstance.Pages.select(page);
//         editorInstance.trigger('change:canvas');
//     };

//     const extractContentForAI = (editor) => {
//         const content = [];
//         const page = editor.Pages.getSelected();
//         if (!page) return content;
//         const walkComponents = (component) => {
//             if (!component || !component.view || !component.view.el) return;
//             if (component.is('text') && component.toHTML().trim().length > 0) {
//                 content.push({ id: component.cid, type: 'text', content: component.toHTML() });
//             } else if (component.is('image')) {
//                 content.push({ id: component.cid, type: 'image', src: component.get('src') });
//             }
//             component.components().forEach(walkComponents);
//         };
//         walkComponents(page.getMainComponent());
//         return content;
//     };

//     const applyAIUpdates = (editor, updatedData) => {
//         if (!editor || !updatedData) return;
//         const currentPage = editor.Pages.getSelected();
//         if (!currentPage) return;

//         updatedData.forEach(item => {
//             const component = currentPage.getMainComponent().find(`#${item.id}`)[0];
//             if (component) {
//                 if (item.type === 'text' && item.content !== undefined) {
//                     component.components(item.content);
//                 } else if (item.type === 'image' && item.src !== undefined) {
//                     component.set('src', item.src);
//                 }
//             } else {
//                 console.warn(`[Frontend] AI Update: Component with ID ${item.id} not found.`);
//             }
//         });
//         editor.trigger('change:canvas');
//     };

//     const handleAssetUpload = async (files, onResponse) => {
//         const formData = new FormData();
//         for (let i = 0; i < files.length; i++) {
//             formData.append('assets', files[i]);
//         }
//         console.log("🚀 [Frontend] Uploading files to backend...", files);
//         try {
//             const response = await fetch('http://localhost:5000/api/assets', {
//                 method: 'POST',
//                 body: formData,
//             });
//             if (!response.ok) {
//                 const errData = await response.json();
//                 throw new Error(errData.error || 'Upload failed');
//             }
//             const result = await response.json();
//             console.log('✅ [Frontend] Files uploaded successfully. Backend response:', result);
//             onResponse(result.data);
//             setAssets(prevAssets => [...result.data, ...prevAssets]);
//         } catch (error) {
//             console.error('❌ [Frontend] Upload error:', error);
//             alert(`Failed to upload files: ${error.message}`);
//             onResponse([]);
//         }
//     };

//    // PortfolioEdit.jsx (updated save handler)

// const handleSave = async (saveType) => {
//   if (!editorInstance) {
//     alert("Editor is not ready.");
//     return;
//   }

//   const editor = editorInstance;
//   const globalCss = editor.getCss();

//   const extractAssetsFromHtml = (html) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, 'text/html');
//     const images = Array.from(doc.querySelectorAll('img')).map(img => img.src);
//     const videos = Array.from(doc.querySelectorAll('video source')).map(source => source.src);
//     return [...new Set([...images, ...videos])].filter(url => url.startsWith('http'));
//   };

//   // Get the current funnel name from contentData or use default
//   const funnelName = contentData?.name || 'My Funnel';

//   if (saveType === 'single') {
//     const currentPage = editor.Pages.getSelected();
//     if (!currentPage) {
//       alert("No page is selected to save.");
//       return;
//     }

//     const pageHtml = currentPage.getMainComponent().toHTML();
//     const singlePagePayload = {
//       id: currentPage.id, // Changed from pageId to id to match Redux structure
//       name: currentPage.get('name'),
//       html: pageHtml,
//       css: globalCss,
//       js: currentPage.get('script') || '',
//       assets: extractAssetsFromHtml(pageHtml),
//       basicInfo: currentPage.get('basicInfo') || {},
//     };

//     console.log(`🚀 [Frontend] Saving single page data. Sending to Redux:`, singlePagePayload);

//     try {
//       // First update Redux state
//       dispatch(updateProjectData({
//         pages: [singlePagePayload],
//         globalCss: globalCss
//       }));

//       // Then save to backend
//       const response = await dispatch(saveFunnelToBackend({ 
//         slug, 
//         funnelName 
//       }));

//       if (saveFunnelToBackend.fulfilled.match(response)) {
//         alert("Page saved successfully!");
//       } else {
//         throw new Error(response.error?.message || 'Failed to save page');
//       }
//     } catch (error) {
//       console.error('❌ [Frontend] Save error:', error);
//       alert(`Failed to save data: ${error.message}`);
//     }

//   } else { // 'all'
//     const allPagesData = editor.Pages.getAll().map(page => {
//       const pageHtml = page.getMainComponent().toHTML();
//       return {
//         id: page.id, // Changed from pageId to id to match Redux structure
//         name: page.get('name'),
//         html: pageHtml,
//         css: globalCss,
//         js: page.get('script') || '',
//         assets: extractAssetsFromHtml(pageHtml),
//         basicInfo: page.get('basicInfo') || {},
//       };
//     });

//     console.log(`🚀 [Frontend] Saving all pages data. Sending to Redux:`, allPagesData);

//     try {
//       // First update Redux state
//       dispatch(updateProjectData({
//         pages: allPagesData,
//         globalCss: globalCss
//       }));

//       // Then save to backend
//       const response = await dispatch(saveFunnelToBackend({ 
//         slug, 
//         funnelName 
//       }));

//       if (saveFunnelToBackend.fulfilled.match(response)) {
//         alert("All pages saved successfully!");
//       } else {
//         throw new Error(response.error?.message || 'Failed to save pages');
//       }
//     } catch (error) {
//       console.error('❌ [Frontend] Save error:', error);
//       alert(`Failed to save data: ${error.message}`);
//     }
//   }
// };
//     const handleDownloadProject = () => {
//         if (!editorInstance) { alert("Editor is not ready."); return; }
//         const editor = editorInstance;
//         const currentPage = editor.Pages.getSelected();
//         if (!currentPage) { alert("No page is selected to download."); return; }
//         const pageName = currentPage.get('name') || `page-${currentPage.cid}`;
//         const fullCode = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${pageName}</title><style>${editor.getCss()}</style></head><body>${currentPage.getMainComponent().toHTML()}<script>${currentPage.get('script') || ''}</script></body></html>`;
//         const blob = new Blob([fullCode], { type: 'text/html' });
//         const a = document.createElement('a');
//         a.href = URL.createObjectURL(blob);
//         a.download = `${pageName.toLowerCase().replace(/\s+/g, '-')}.html`;
//         a.click();
//         URL.revokeObjectURL(a.href);
//     };

//     const handleAISubmit = async ({ description }) => {
//         if (!editorInstance) { alert("Editor not available."); return; }
//         const page = editorInstance.Pages.getSelected();
//         if (!page) { alert("Please select a page first."); return; }

//         setIsAILoading(true);
//         const contentToUpdate = extractContentForAI(editorInstance);
//         if (contentToUpdate.length === 0) {
//             alert("No text or image content found on this page to update.");
//             setIsAILoading(false);
//             return;
//         }

//         const requestBody = { description, contentToUpdate, pageInfo: { id: page.id, name: page.get('name') } };
//         console.log("🚀 [Frontend] Sending content to AI API:", requestBody);

//         try {
//             const response = await fetch('http://localhost:5000/api/ai/generate-content', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(requestBody)
//             });

//             if (!response.ok) {
//                 throw new Error(`Server responded with status: ${response.status}`);
//             }

//             const aiResponse = await response.json();
//             console.log("✅ [Frontend] Received AI response:", aiResponse);

//             applyAIUpdates(editorInstance, aiResponse.updatedContent);
//             alert("Content updated successfully by AI!");

//         } catch (error) {
//             console.error('❌ [Frontend] AI Generation Error:', error);
//             alert(`Failed to update content: ${error.message}`);
//         } finally {
//             setIsAILoading(false);
//             setShowAIPopup(false);
//         }
//     };

//     const handleTemplateSelect = (templateKey) => {
//         if (!currentStage || !editorInstance) return;
//         const templateSet = {
//             'welcome-page': templates.welcomeTemplates, 'vsl-page': templates.vslTemplates,
//             'thankyou-page': templates.thankyouTemplates, 'whatsapp-page': templates.whatsappTemplates,
//             'product-offer': templates.productOfferTemplates, 'custom-page': templates.miscTemplates,
//             'appointment-page': templates.appointmentTemplates, 'payment-page': templates.paymentTemplates,
//         }[currentStage.type];
//         const template = templateSet?.[templateKey];
//         if (!template) { console.error('Template not found:', templateKey); return; }
//         dispatch(setSelectedTemplateForStage({ stageId: currentStage.id, templateKey, stageType: currentStage.type }));
//         const page = editorInstance.Pages.get(currentStage.id);
//         if (page) {
//             applyDataToPage(page, { html: template.html, css: template.css, js: template.js, basicInfo: template.basicInfo || {} });
//         }
//         setShowTemplateSelector(false);
//     };

//     const openTemplateSelector = (stage) => { setCurrentStage(stage); setShowTemplateSelector(true); };
//     const getSelectedTemplateKey = () => {
//         if (!currentStage) return null;
//         const config = currentStage.type === 'custom-page'
//             ? contentData.customStagesConfig?.[currentStage.id]
//             : contentData.stagesConfig?.[currentStage.type];
//         return config?.selectedTemplateKey;
//     };
//     const forceTemplateRefresh = () => {
//         if (window.confirm("Are you sure? This will reload all pages from their initial templates and discard unsaved changes.")) {
//             setForceRefreshKey(prev => prev + 1);
//         }
//     };

//     const editorKey = `funnel-editor-${slug}-${forceRefreshKey}`;

//     return (
//         <div className="portfolio-edit-container">
//             {showTemplateSelector && currentStage && (
//                 <div className="modal-overlay">
//                     <div className="modal-content">
//                         <button className="modal-close-btn" onClick={() => setShowTemplateSelector(false)}>×</button>
//                         <StageTemplateSelector
//                             stageType={currentStage.type}
//                             selectedKey={getSelectedTemplateKey()}
//                             onSelect={handleTemplateSelect}
//                         />
//                     </div>
//                 </div>
//             )}

//             {showAIPopup && (
//                 <div className="modal-overlay">
//                     <div className="modal-content ai-modal-content">
//                         <AIGenerativePopup
//                             isLoading={isAILoading}
//                             onClose={() => setShowAIPopup(false)}
//                             onSubmit={handleAISubmit}
//                         />
//                     </div>
//                 </div>
//             )}

//             <div className="action-buttons">
//                 <button onClick={() => handleSave('single')} className="action-button save-button">
//                     <FaSave /> <span>Save Page</span>
//                 </button>
//                 <button onClick={() => handleSave('all')} className="action-button save-all-button">
//                     <FaFileExport /> <span>Save All</span>
//                 </button>
//                 <button onClick={() => setShowAIPopup(true)} className="action-button ai-generate-button">
//                     <FaMagic /> <span>AI Content</span>
//                 </button>
//                 <button onClick={forceTemplateRefresh} className="action-button refresh-button">
//                     <FaSync /> <span>Refresh</span>
//                 </button>
//                 <button onClick={handleDownloadProject} className="action-button download-button">
//                     <FaDownload /> <span>Download</span>
//                 </button>
//                 <button onClick={() => navigate(`/dashboard/Funnel_settings/${slug}`)} className="action-button back-button">
//                     <FaArrowLeft /> <span>Back</span>
//                 </button>
//             </div>

//             <div className="editor-main-area">
//                 <div id="pages" className="pages-container" />
//                 <StudioEditor
//                     key={editorKey}
//                     onEditor={onEditorReady}
//                     style={{ width: "100%", height: "100%" }}
//                     options={{
//                         storage: {
//                             type: "self",
//                             onSave: async ({ project }) => console.log("[Frontend] Project auto-synced (GrapesJS internal).", project),
//                             onLoad: () => ({ project: generateInitialProject() }),
//                         },
// assetManager: {
//   assets: assets.map(asset => ({
//     ...asset,
//     src: asset.src.startsWith('http') ? asset.src : `http://localhost:5000${asset.src}`
//   })),
//   upload: 'http://localhost:5000/api/assets',
//   uploadName: 'assets',
//   multiUpload: true,
//   customUpload: async (files, onComplete, onError) => {
//     try {
//       const uploaded = await uploadFiles(files);
//       onComplete(uploaded);
//       setAssets(prev => [...uploaded, ...prev]);
//     } catch (err) {
//       console.error(err);
//       onError(err.message);
//     }
//   },
// },
//                         plugins: [
//                             gjsForms, gjsCountdown, gjsTabs, gjsCustomCode,
//                             gjsTooltip, gjsTyped, gjsNavbar, gjsBlocksBasic,
//                         ],
//                     }}

//                 />
//             </div>

//             <style jsx>{`
//                 /* --- Main Layout --- */
//                 .portfolio-edit-container {
//                     display: flex;
//                     height: 100vh; 
//                     width: 100vw;
//                     position: relative; 
//                     overflow: hidden;
//                     font-family: 'Segoe UI', Tahoma, sans-serif;
//                     background-color: #f0f2f5;
//                 }
//                 .editor-main-area {
//                     flex-grow: 1;
//                     position: relative;
//                     height: 100%;
//                 }
//                 .pages-container {
//                     position: absolute; 
//                     top: 15px; 
//                     left: 15px;
//                     z-index: 1000; 
//                     background: rgba(30, 30, 30, 0.9);
//                     color: white;
//                     padding: 8px; 
//                     border-radius: 8px;
//                     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
//                 }

//                 /* --- Action Buttons --- */
//                 .action-buttons {
//                     position: fixed; 
//                     bottom: 20px; 
//                     right: 20px;
//                     z-index: 1001; 
//                     display: flex;
//                     flex-direction: column; 
//                     gap: 12px;
//                 }
//                 .action-button {
//                     padding: 12px 18px; 
//                     border: none; 
//                     border-radius: 8px;
//                     font-weight: 600; 
//                     cursor: pointer;
//                     transition: all 0.2s ease;
//                     box-shadow: 0 2px 5px rgba(0,0,0,0.1);
//                     display: flex; 
//                     align-items: center; 
//                     gap: 10px; 
//                     font-size: 14px;
//                 }
//                 .action-button:hover {
//                     transform: translateY(-3px);
//                     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//                 }
//                 .action-button > svg { 
//                     font-size: 1.1rem; 
//                 }
//                 .save-button { background-color: #3498db; color: white; }
//                 .save-all-button { background-color: #16a085; color: white; }
//                 .ai-generate-button { background-color: #8e44ad; color: white; }
//                 .refresh-button { background-color: #f39c12; color: white; }
//                 .download-button { background-color: #27ae60; color: white; }
//                 .back-button { background-color: #c0392b; color: white; }

//                 /* --- Modal Styles --- */
//                 .modal-overlay {
//                     position: fixed; top: 0; left: 0;
//                     width: 100%; height: 100%;
//                     background-color: rgba(0, 0, 0, 0.6);
//                     display: flex; justify-content: center; align-items: center;
//                     z-index: 2000;
//                 }
//                 .modal-content {
//                     background: white; padding: 25px; border-radius: 10px;
//                     box-shadow: 0 5px 15px rgba(0,0,0,0.3);
//                     max-width: 90vw; max-height: 90vh;
//                     overflow-y: auto; position: relative;
//                 }
//                 .modal-close-btn {
//                     position: absolute; top: 10px; right: 15px;
//                     background: transparent; border: none;
//                     font-size: 24px; cursor: pointer; color: #888;
//                 }
//                     .cancel{
//                         background-color: #4a5568 !important;
//     color: #e0e6ed;
//     border: 1px solid #5a6b7d;
//     padding: 12px 25px;
//     border-radius: 10px;
//     font-size: 15px;
//     font-weight: 700;
//     cursor: pointer;
//     transition: all 0.3s ease-in-out, transform 0.2s ease-out;
//     letter-spacing: 0.3px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//                     }
//                 .ai-modal-content { max-width: 550px; }

//                 /* --- AI Popup Specific Styles --- */
//                 .ai-popup-content h3 { margin-top: 0; color: #333; }
//                 .ai-popup-content p { color: #555; margin-bottom: 20px; }
//                 .description-section { margin-top: 15px; }
//                 .description-section label { display: block;color:black; margin-bottom: 8px; font-weight: 500; }
//                 .description-section textarea { width: 100%; color:black; padding: 10px; border-radius: 5px; border: 1px solid #ccc; resize: vertical; box-sizing: border-box; }
//                 .ai-popup-buttons { display: flex; justify-content: flex-end; gap: 10px; margin-top: 25px; }
//                 .ai-popup-buttons button { padding: 10px 20px; border-radius: 5px; border: none; font-weight: 500; cursor: pointer; }
//                 .ai-cancel-btn { background-color: #eee; }
//                 .ai-submit-btn { background-color: #4f46e5; color: white; }
//                 .ai-submit-btn:disabled { background-color: #ccc; cursor: not-allowed; }

//                 /* --- Template Selector Styles --- */
//                 .template-selector-container { width: 90vw; max-width: 1200px; }
//                 .template-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
//                 .template-card { border: 2px solid transparent; border-radius: 8px; overflow: hidden; cursor: pointer; transition: all 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
//                 .template-card:hover { transform: translateY(-5px); box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
//                 .template-card.selected { border-color: #3498db; box-shadow: 0 0 10px rgba(52, 152, 219, 0.5); }
//                 .template-thumbnail img { width: 100%; height: auto; display: block; background-color: #eee; }
//                 .template-info { padding: 15px; }
//                 .template-info h4 { margin: 0 0 8px 0; font-size: 16px; }
//                 .template-info p { margin: 0; font-size: 14px; color: #666; }
//                 .main-content.fixed-sidebar { margin-left:0px; }
//             `}</style>
            
//         </div>
        
//     );
    
// };

// export default PortfolioEdit;

import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StudioEditor from "@grapesjs/studio-sdk/react";
import "@grapesjs/studio-sdk/style";
import { useParams, useNavigate } from 'react-router-dom';
import { FaSync, FaDownload, FaArrowLeft, FaMagic, FaFileAlt, FaSave, FaFileExport } from 'react-icons/fa';
import axios from "axios";

import { updateProjectData, setSelectedTemplateForStage, updateStageBasicInfo, saveFunnelToBackend } from '../../../../redux/funnel.jsx';
import { templates } from './df_temp.jsx';
// import addLandingPageComponents from './function.jsx';
// import addLandingPageComponents from './function.jsx'; // इसे बदलें
import addLandingPageComponents from './function.jsx'; // इसमें
import "./old.css";

// GrapesJS Plugins
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsForms from "grapesjs-plugin-forms";
import gjsCountdown from "grapesjs-component-countdown";
import gjsTabs from "grapesjs-tabs";
import gjsCustomCode from "grapesjs-custom-code";
import gjsTooltip from "grapesjs-tooltip";
import gjsTyped from "grapesjs-typed";
import gjsNavbar from "grapesjs-navbar";
import gjsBlocksBasic from "grapesjs-blocks-basic";

//** Template Selector Component **//
const StageTemplateSelector = ({ stageType, selectedKey, onSelect }) => {
    const templateSet = {
        'welcome-page': templates.welcomeTemplates,
        'vsl-page': templates.vslTemplates,
        'thankyou-page': templates.thankyouTemplates,
        'whatsapp-page': templates.whatsappTemplates,
        'product-offer': templates.productOfferTemplates,
        'custom-page': templates.miscTemplates,
        'appointment-page': templates.appointmentTemplates,
        'payment-page': templates.paymentTemplates,
    }[stageType];

    if (!templateSet || Object.keys(templateSet).length === 0) {
        return (
            <div className="no-templates-message">
                <p>No templates available for this stage type.</p>
            </div>
        );
    }

    return (
        <div className="template-selector-container">
            <h3 className="template-selector-title">Select a Template</h3>
            <div className="template-grid">
                {Object.entries(templateSet).map(([key, template]) => (
                    <div
                        key={key}
                        className={`template-card ${selectedKey === key ? 'selected' : ''}`}
                        onClick={() => onSelect(key)}
                    >
                        <div className="template-thumbnail">
                            <img
                                src={template.thumbnail}
                                alt={template.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://placehold.co/400x300/ccc/ffffff?text=No+Image';
                                }}
                            />
                        </div>
                        <div className="template-info">
                            <h4>{template.name}</h4>
                            <p>{template.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

//** AI Generative Popup Component **//
const AIGenerativePopup = ({ onClose, onSubmit, isLoading }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (!description.trim()) {
            alert('Please provide a description for the content you want to generate.');
            return;
        }
        onSubmit({ description });
    };

    return (
        <div className="ai-popup-content">
            <h3>AI Content Generation</h3>
            <p>Describe the changes you want to make to the content:</p>

            <div className="description-section">
                <label>Describe what you want:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="e.g., 'Make the headline more exciting and shorten the paragraph about benefits.'"
                    rows={4}
                />
            </div>

            <div className="ai-popup-buttons">
                <button onClick={onClose} className="ai-cancel-btn cancel" disabled={isLoading}>
                    Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    className="ai-submit-btn upload"
                    disabled={isLoading || !description.trim()}
                >
                    {isLoading ? 'Generating...' : 'Update Content'}
                </button>
            </div>
        </div>
    );
};

//** Main Editor Component **//
const PortfolioEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { slug, stageId } = useParams();

    const { contentData, stages, apiStatus } = useSelector((state) => state.funnel);
    const { user } = useSelector((state) => state.auth); // Add this line to get user data
const API_BASE_URL = window.API_BASE_URL || 'http://localhost:5000';

    const [editorInstance, setEditorInstance] = useState(null);
    const [showTemplateSelector, setShowTemplateSelector] = useState(false);
    const [showAIPopup, setShowAIPopup] = useState(false);
    const [isAILoading, setIsAILoading] = useState(false);
    const [currentStage, setCurrentStage] = useState(null);
    const [forceRefreshKey, setForceRefreshKey] = useState(0);
    const [assets, setAssets] = useState([]);

    // Get the current stage data
    useEffect(() => {
        if (stages && stageId) {
            const stage = stages.find(s => s.id === stageId);
            if (stage) {
                setCurrentStage(stage);
            }
        }
    }, [stages, stageId]);

const uploadFiles = async files => {
  const fd = new FormData();
  files.forEach(f => fd.append('assets', f));
  
  try {
    const { data } = await axios.post(`${API_BASE_URL}/api/assets`, fd, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return data.data.map(asset => ({
      ...asset,
      // Ensure consistent path format
      src: asset.src.startsWith('/') ? asset.src : `/${asset.src}`
    }));
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};
    // Fetch initial assets from the backend when the component mounts
    useEffect(() => {
        const fetchInitialAssets = async () => {
            try {
      const response = await fetch(`http://localhost:5000/api/assets?userId=${user?.name || 'guest'}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch assets: ${response.statusText}`);
                }
                const result = await response.json();
                console.log("✅ [Frontend] Initial assets loaded from backend:", result.data);
                setAssets(result.data || []);
            } catch (error) {
                console.error("❌ [Frontend] Error fetching initial assets:", error);
                setAssets([]);
            }
        };
        fetchInitialAssets();
    }, []);

    const onEditorReady = useCallback((editor) => {
        
        window.editor = editor;
        setEditorInstance(editor);
  addLandingPageComponents(editor, user?.name || 'guest');
        const pagesEl = document.querySelector("#pages");
        if (pagesEl) {
            editor.Pages.__appendTo({ el: pagesEl });
        }
        setTimeout(() => {
            const pageToSelect = editor.Pages.get(stageId);
            if (pageToSelect) {
                editor.Pages.select(pageToSelect);
            } else if (editor.Pages.getAll().length > 0) {
                editor.Pages.select(editor.Pages.getAll()[0]);
            }
        }, 500);
    }, [stageId]);

    useEffect(() => {
        return () => {
            if (editorInstance) {
                editorInstance.destroy();
                setEditorInstance(null);
                delete window.editor;
            }
        };
    }, [editorInstance]);

    const generateInitialProject = useCallback(() => {
        console.log("[Frontend] Generating initial project structure for GrapesJS...");
        const savedProjectData = contentData.projectData;
        const hasSavedPages = savedProjectData && savedProjectData.pages && Array.isArray(savedProjectData.pages) && savedProjectData.pages.length > 0;
    
        const createPageFromTemplate = (stage) => {
            const isCustom = stage.type === 'custom-page';
            const config = isCustom
                ? contentData.customStagesConfig?.[stage.id]
                : contentData.stagesConfig?.[stage.type];
            const templateSet = {
                'welcome-page': templates.welcomeTemplates, 'vsl-page': templates.vslTemplates,
                'thankyou-page': templates.thankyouTemplates, 'whatsapp-page': templates.whatsappTemplates,
                'product-offer': templates.productOfferTemplates, 'custom-page': templates.miscTemplates,
                'appointment-page': templates.appointmentTemplates, 'payment-page': templates.paymentTemplates,
            }[stage.type];
            const templateKey = config?.selectedTemplateKey;
            let template = (templateKey && templateSet && templateSet[templateKey]) 
                            ? templateSet[templateKey] 
                            : (templateSet ? Object.values(templateSet)[0] : null);
    
            if (!template) {
                 return {
                    id: stage.id,
                    name: stage.name,
                    component: `<h1>${stage.name}</h1><p>Template not configured for this stage type.</p>`,
                    styles: '', 
                    script: '',
                    basicInfo: config?.basicInfo || {}
                };
            }
    
            return {
                id: stage.id,
                name: stage.name,
                component: template.html || `<h1>${stage.name}</h1><p>Template content not found.</p>`,
                styles: template.css || '',
                script: template.js || '',
                basicInfo: config?.basicInfo || {}
            };
        };
    
        let pages;
        let globalCss = '';
    
        if (hasSavedPages) {
            console.log("[Frontend] Loading project from saved Redux state (projectData).");
            globalCss = savedProjectData.globalCss || '';
            pages = stages.map(stage => {
                const savedPage = savedProjectData.pages.find(p => p.pageId === stage.id);
                if (savedPage) {
                    console.log(`[Frontend] Found saved data for stage: ${stage.id}`);
                    return {
                        id: stage.id,
                        name: savedPage.name || stage.name,
                        component: savedPage.html || `<h1>${stage.name}</h1><p>Saved content loaded.</p>`,
                        script: savedPage.js || '',
                        basicInfo: savedPage.basicInfo || {}
                    };
                }
                console.log(`[Frontend] No saved data for stage: ${stage.id}. Creating from template.`);
                return createPageFromTemplate(stage);
            });
        } else {
            console.log("[Frontend] No saved projectData found. Initializing all pages from templates.");
            pages = stages.map(stage => createPageFromTemplate(stage));
        }
    
        const stageIndex = pages.findIndex(p => p.id === stageId);
        if (stageIndex > 0) {
            const [selectedPage] = pages.splice(stageIndex, 1);
            pages.unshift(selectedPage);
        }
        
        console.log("[Frontend] Final project object for GrapesJS:", { pages, css: globalCss });
        return { pages, css: globalCss };
    }, [stages, contentData, stageId]);

    const applyDataToPage = (page, { html, css, js, basicInfo }) => {
        if (!editorInstance || !page) return;
        if (html !== undefined) { page.set('component', ''); page.set('component', html); }
        if (css !== undefined) { editorInstance.Css.clear(); editorInstance.Css.addRules(css); }
        if (js !== undefined) { page.set('script', js); }
        if (basicInfo) { page.set('basicInfo', basicInfo); }
        editorInstance.Pages.select(page);
        editorInstance.trigger('change:canvas');
    };

    const extractContentForAI = (editor) => {
        const content = [];
        const page = editor.Pages.getSelected();
        if (!page) return content;
        const walkComponents = (component) => {
            if (!component || !component.view || !component.view.el) return;
            if (component.is('text') && component.toHTML().trim().length > 0) {
                content.push({ id: component.cid, type: 'text', content: component.toHTML() });
            } else if (component.is('image')) {
                content.push({ id: component.cid, type: 'image', src: component.get('src') });
            }
            component.components().forEach(walkComponents);
        };
        walkComponents(page.getMainComponent());
        return content;
    };

    const applyAIUpdates = (editor, updatedData) => {
        if (!editor || !updatedData) return;
        const currentPage = editor.Pages.getSelected();
        if (!currentPage) return;

        updatedData.forEach(item => {
            const component = currentPage.getMainComponent().find(`#${item.id}`)[0];
            if (component) {
                if (item.type === 'text' && item.content !== undefined) {
                    component.components(item.content);
                } else if (item.type === 'image' && item.src !== undefined) {
                    component.set('src', item.src);
                }
            } else {
                console.warn(`[Frontend] AI Update: Component with ID ${item.id} not found.`);
            }
        });
        editor.trigger('change:canvas');
    };

    const handleAssetUpload = async (files, onResponse) => {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('assets', files[i]);
        }
        console.log("🚀 [Frontend] Uploading files to backend...", files);
        try {
            const response = await fetch('http://localhost:5000/api/assets', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || 'Upload failed');
            }
            const result = await response.json();
            console.log('✅ [Frontend] Files uploaded successfully. Backend response:', result);
            onResponse(result.data);
            setAssets(prevAssets => [...result.data, ...prevAssets]);
        } catch (error) {
            console.error('❌ [Frontend] Upload error:', error);
            alert(`Failed to upload files: ${error.message}`);
            onResponse([]);
        }
    };

   // PortfolioEdit.jsx (updated save handler)

const handleSave = async (saveType) => {
  if (!editorInstance) {
    alert("Editor is not ready.");
    return;
  }

  const editor = editorInstance;
  const globalCss = editor.getCss();

const extractAssetsFromHtml = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const images = Array.from(doc.querySelectorAll('[data-image-src], img')).map(el => {
    // Prefer data-image-src if available, otherwise fall back to src
    return el.getAttribute('data-image-src') || el.src;
  }).filter(src => src && !src.startsWith('data:')); // Exclude data URIs
  
  const videos = Array.from(doc.querySelectorAll('video source')).map(source => {
    return source.getAttribute('data-video-src') || source.src;
  }).filter(src => src && !src.startsWith('data:'));
  
  return [...new Set([...images, ...videos])];
};

  // Get the current funnel name from contentData or use default
  const funnelName = contentData?.name || 'My Funnel';

  if (saveType === 'single') {
    const currentPage = editor.Pages.getSelected();
    if (!currentPage) {
      alert("No page is selected to save.");
      return;
    }

    const pageHtml = currentPage.getMainComponent().toHTML();
    const singlePagePayload = {
      id: currentPage.id, // Changed from pageId to id to match Redux structure
      name: currentPage.get('name'),
      html: pageHtml,
      css: globalCss,
      js: currentPage.get('script') || '',
      assets: extractAssetsFromHtml(pageHtml),
      basicInfo: currentPage.get('basicInfo') || {},
    };

    console.log(`🚀 [Frontend] Saving single page data. Sending to Redux:`, singlePagePayload);

    try {
      // First update Redux state
      dispatch(updateProjectData({
        pages: [singlePagePayload],
        globalCss: globalCss
      }));

      // Then save to backend
      const response = await dispatch(saveFunnelToBackend({ 
        slug, 
        funnelName 
      }));

      if (saveFunnelToBackend.fulfilled.match(response)) {
        alert("Page saved successfully!");
      } else {
        throw new Error(response.error?.message || 'Failed to save page');
      }
    } catch (error) {
      console.error('❌ [Frontend] Save error:', error);
      alert(`Failed to save data: ${error.message}`);
    }

  } else { // 'all'
    const allPagesData = editor.Pages.getAll().map(page => {
      const pageHtml = page.getMainComponent().toHTML();
      return {
        id: page.id, // Changed from pageId to id to match Redux structure
        name: page.get('name'),
        html: pageHtml,
        css: globalCss,
        js: page.get('script') || '',
        assets: extractAssetsFromHtml(pageHtml),
        basicInfo: page.get('basicInfo') || {},
      };
    });

    console.log(`🚀 [Frontend] Saving all pages data. Sending to Redux:`, allPagesData);

    try {
      // First update Redux state
      dispatch(updateProjectData({
        pages: allPagesData,
        globalCss: globalCss
      }));

      // Then save to backend
      const response = await dispatch(saveFunnelToBackend({ 
        slug, 
        funnelName 
      }));

      if (saveFunnelToBackend.fulfilled.match(response)) {
        alert("All pages saved successfully!");
      } else {
        throw new Error(response.error?.message || 'Failed to save pages');
      }
    } catch (error) {
      console.error('❌ [Frontend] Save error:', error);
      alert(`Failed to save data: ${error.message}`);
    }
  }
};
    const handleDownloadProject = () => {
        if (!editorInstance) { alert("Editor is not ready."); return; }
        const editor = editorInstance;
        const currentPage = editor.Pages.getSelected();
        if (!currentPage) { alert("No page is selected to download."); return; }
        const pageName = currentPage.get('name') || `page-${currentPage.cid}`;
        const fullCode = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${pageName}</title><style>${editor.getCss()}</style></head><body>${currentPage.getMainComponent().toHTML()}<script>${currentPage.get('script') || ''}</script></body></html>`;
        const blob = new Blob([fullCode], { type: 'text/html' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${pageName.toLowerCase().replace(/\s+/g, '-')}.html`;
        a.click();
        URL.revokeObjectURL(a.href);
    };

    const handleAISubmit = async ({ description }) => {
        if (!editorInstance) { alert("Editor not available."); return; }
        const page = editorInstance.Pages.getSelected();
        if (!page) { alert("Please select a page first."); return; }

        setIsAILoading(true);
        const contentToUpdate = extractContentForAI(editorInstance);
        if (contentToUpdate.length === 0) {
            alert("No text or image content found on this page to update.");
            setIsAILoading(false);
            return;
        }

        const requestBody = { description, contentToUpdate, pageInfo: { id: page.id, name: page.get('name') } };
        console.log("🚀 [Frontend] Sending content to AI API:", requestBody);

        try {
            const response = await fetch('http://localhost:5000/api/ai/generate-content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.status}`);
            }

            const aiResponse = await response.json();
            console.log("✅ [Frontend] Received AI response:", aiResponse);

            applyAIUpdates(editorInstance, aiResponse.updatedContent);
            alert("Content updated successfully by AI!");

        } catch (error) {
            console.error('❌ [Frontend] AI Generation Error:', error);
            alert(`Failed to update content: ${error.message}`);
        } finally {
            setIsAILoading(false);
            setShowAIPopup(false);
        }
    };

    const handleTemplateSelect = (templateKey) => {
        if (!currentStage || !editorInstance) return;
        const templateSet = {
            'welcome-page': templates.welcomeTemplates, 'vsl-page': templates.vslTemplates,
            'thankyou-page': templates.thankyouTemplates, 'whatsapp-page': templates.whatsappTemplates,
            'product-offer': templates.productOfferTemplates, 'custom-page': templates.miscTemplates,
            'appointment-page': templates.appointmentTemplates, 'payment-page': templates.paymentTemplates,
        }[currentStage.type];
        const template = templateSet?.[templateKey];
        if (!template) { console.error('Template not found:', templateKey); return; }
        dispatch(setSelectedTemplateForStage({ stageId: currentStage.id, templateKey, stageType: currentStage.type }));
        const page = editorInstance.Pages.get(currentStage.id);
        if (page) {
            applyDataToPage(page, { html: template.html, css: template.css, js: template.js, basicInfo: template.basicInfo || {} });
        }
        setShowTemplateSelector(false);
    };

    const openTemplateSelector = (stage) => { setCurrentStage(stage); setShowTemplateSelector(true); };
    const getSelectedTemplateKey = () => {
        if (!currentStage) return null;
        const config = currentStage.type === 'custom-page'
            ? contentData.customStagesConfig?.[currentStage.id]
            : contentData.stagesConfig?.[currentStage.type];
        return config?.selectedTemplateKey;
    };
    const forceTemplateRefresh = () => {
        if (window.confirm("Are you sure? This will reload all pages from their initial templates and discard unsaved changes.")) {
            setForceRefreshKey(prev => prev + 1);
        }
    };

    const editorKey = `funnel-editor-${slug}-${forceRefreshKey}`;

    return (
        <div className="portfolio-edit-container">
            {showTemplateSelector && currentStage && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close-btn" onClick={() => setShowTemplateSelector(false)}>×</button>
                        <StageTemplateSelector
                            stageType={currentStage.type}
                            selectedKey={getSelectedTemplateKey()}
                            onSelect={handleTemplateSelect}
                        />
                    </div>
                </div>
            )}

            {showAIPopup && (
                <div className="modal-overlay">
                    <div className="modal-content ai-modal-content">
                        <AIGenerativePopup
                            isLoading={isAILoading}
                            onClose={() => setShowAIPopup(false)}
                            onSubmit={handleAISubmit}
                        />
                    </div>
                </div>
            )}

            <div className="action-buttons">
                <button onClick={() => handleSave('single')} className="action-button save-button">
                    <FaSave /> <span>Save Page</span>
                </button>
                <button onClick={() => handleSave('all')} className="action-button save-all-button">
                    <FaFileExport /> <span>Save All</span>
                </button>
                <button onClick={() => setShowAIPopup(true)} className="action-button ai-generate-button">
                    <FaMagic /> <span>AI Content</span>
                </button>
                <button onClick={forceTemplateRefresh} className="action-button refresh-button">
                    <FaSync /> <span>Refresh</span>
                </button>
                <button onClick={handleDownloadProject} className="action-button download-button">
                    <FaDownload /> <span>Download</span>
                </button>
                <button onClick={() => navigate(`/dashboard/Funnel_settings/${slug}`)} className="action-button back-button">
                    <FaArrowLeft /> <span>Back</span>
                </button>
            </div>

            <div className="editor-main-area">
                <div id="pages" className="pages-container" />
                <StudioEditor
                    key={editorKey}
                    onEditor={onEditorReady}
                    style={{ width: "100%", height: "100%" }}
                    options={{
                        storage: {
                            type: "self",
                            onSave: async ({ project }) => console.log("[Frontend] Project auto-synced (GrapesJS internal).", project),
                            onLoad: () => ({ project: generateInitialProject() }),
                        },
assetManager: {
  assets: assets.map(asset => ({
    ...asset,
    src: asset.src.startsWith('/') ? asset.src : `/${asset.src}`
      })),
  upload: `${API_BASE_URL}/api/assets`,
  uploadName: 'assets',
  multiUpload: true,
  customUpload: async (files, onComplete, onError) => {
  try {
      const uploaded = await uploadFiles(files);
      onComplete(uploaded.map(asset => ({
        ...asset,
        // Store the raw path without domain in the editor
            src: asset.src.startsWith('/') ? asset.src : `/${asset.src}`
      })));
      setAssets(prev => [...uploaded, ...prev]);
    } catch (err) {
      console.error(err);
      onError(err.message);
    }
  },
},
                        plugins: [
                            gjsForms, gjsCountdown, gjsTabs, gjsCustomCode,
                            gjsTooltip, gjsTyped, gjsNavbar, gjsBlocksBasic,
                        ],
                    }}

                />
            </div>

            <style jsx>{`
                /* --- Main Layout --- */
                .portfolio-edit-container {
                    display: flex;
                    height: 100vh; 
                    width: 100vw;
                    position: relative; 
                    overflow: hidden;
                    font-family: 'Segoe UI', Tahoma, sans-serif;
                    background-color: #f0f2f5;
                }
                .editor-main-area {
                    flex-grow: 1;
                    position: relative;
                    height: 100%;
                }
                .pages-container {
                    position: absolute; 
                    top: 15px; 
                    left: 15px;
                    z-index: 1000; 
                    background: rgba(30, 30, 30, 0.9);
                    color: white;
                    padding: 8px; 
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
                }

                /* --- Action Buttons --- */
                .action-buttons {
                    position: fixed; 
                    bottom: 20px; 
                    right: 20px;
                    z-index: 1001; 
                    display: flex;
                    flex-direction: column; 
                    gap: 12px;
                }
                .action-button {
                    padding: 12px 18px; 
                    border: none; 
                    border-radius: 8px;
                    font-weight: 600; 
                    cursor: pointer;
                    transition: all 0.2s ease;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                    display: flex; 
                    align-items: center; 
                    gap: 10px; 
                    font-size: 14px;
                }
                .action-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                }
                .action-button > svg { 
                    font-size: 1.1rem; 
                }
                .save-button { background-color: #3498db; color: white; }
                .save-all-button { background-color: #16a085; color: white; }
                .ai-generate-button { background-color: #8e44ad; color: white; }
                .refresh-button { background-color: #f39c12; color: white; }
                .download-button { background-color: #27ae60; color: white; }
                .back-button { background-color: #c0392b; color: white; }

                /* --- Modal Styles --- */
                .modal-overlay {
                    position: fixed; top: 0; left: 0;
                    width: 100%; height: 100%;
                    background-color: rgba(0, 0, 0, 0.6);
                    display: flex; justify-content: center; align-items: center;
                    z-index: 2000;
                }
                .modal-content {
                    background: white; padding: 25px; border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                    max-width: 90vw; max-height: 90vh;
                    overflow-y: auto; position: relative;
                }
                .modal-close-btn {
                    position: absolute; top: 10px; right: 15px;
                    background: transparent; border: none;
                    font-size: 24px; cursor: pointer; color: #888;
                }
                    .cancel{
                        background-color: #4a5568 !important;
    color: #e0e6ed;
    border: 1px solid #5a6b7d;
    padding: 12px 25px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out, transform 0.2s ease-out;
    letter-spacing: 0.3px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }
                .ai-modal-content { max-width: 550px; }

                /* --- AI Popup Specific Styles --- */
                .ai-popup-content h3 { margin-top: 0; color: #333; }
                .ai-popup-content p { color: #555; margin-bottom: 20px; }
                .description-section { margin-top: 15px; }
                .description-section label { display: block;color:black; margin-bottom: 8px; font-weight: 500; }
                .description-section textarea { width: 100%; color:black; padding: 10px; border-radius: 5px; border: 1px solid #ccc; resize: vertical; box-sizing: border-box; }
                .ai-popup-buttons { display: flex; justify-content: flex-end; gap: 10px; margin-top: 25px; }
                .ai-popup-buttons button { padding: 10px 20px; border-radius: 5px; border: none; font-weight: 500; cursor: pointer; }
                .ai-cancel-btn { background-color: #eee; }
                .ai-submit-btn { background-color: #4f46e5; color: white; }
                .ai-submit-btn:disabled { background-color: #ccc; cursor: not-allowed; }

                /* --- Template Selector Styles --- */
                .template-selector-container { width: 90vw; max-width: 1200px; }
                .template-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
                .template-card { border: 2px solid transparent; border-radius: 8px; overflow: hidden; cursor: pointer; transition: all 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
                .template-card:hover { transform: translateY(-5px); box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
                .template-card.selected { border-color: #3498db; box-shadow: 0 0 10px rgba(52, 152, 219, 0.5); }
                .template-thumbnail img { width: 100%; height: auto; display: block; background-color: #eee; }
                .template-info { padding: 15px; }
                .template-info h4 { margin: 0 0 8px 0; font-size: 16px; }
                .template-info p { margin: 0; font-size: 14px; color: #666; }
                .main-content.fixed-sidebar { margin-left:0px; }
            `}</style>
            
        </div>
        
    );
    
};

export default PortfolioEdit;