// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Thunk to fetch funnel data from backend
// export const fetchFunnelBySlug = createAsyncThunk(
//   'funnel/fetchBySlug',
//   async (slug, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`/api/funnels/${slug}`);
//       if (response.status === 404) return null;
//       if (!response.ok) throw new Error(`Server error: ${response.status}`);
//       return await response.json();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // Thunk to save the entire funnel state to the backend
// export const saveFunnelToBackend = createAsyncThunk(
//   'funnel/saveToBackend',
//   async ({ slug, funnelName }, { getState, rejectWithValue }) => {
//     try {
//       const state = getState().funnel;
      
//       const currentSlug = slug || state.contentData.slug || 'new';
//       const currentFunnelName = funnelName || state.contentData.name || 'My New Funnel';

//       const payload = {
//         funnel: {
//           slug: currentSlug,
//           name: currentFunnelName,
//           stages: state.stages.map(stage => {
//             const isCustom = stage.type === 'custom-page';
            
//             // **मुख्य समाधान**: हमेशा projectData.pages से डेटा लें, क्योंकि यह एडिटर से अपडेट होता है।
//             const projectPage = state.contentData.projectData?.pages?.find(p => p.id === stage.id) || {};
            
//             // कॉन्फिग से केवल नाम और टेम्पलेट की (key) लें।
//             const config = isCustom 
//               ? state.contentData.customStagesConfig[stage.id] 
//               : state.contentData.stagesConfig[stage.type];
            
//             // basicInfo के लिए projectPage को प्राथमिकता दें।
//             const basicInfoToSend = projectPage.basicInfo || {};

//             return {
//               pageId: stage.id,
//               name: projectPage.name || config?.name || stage.name, // नाम भी projectData से प्राथमिकता दें
//               type: stage.type,
//               selectedTemplateKey: config?.selectedTemplateKey || null,
//               html: projectPage.html || '',
//               css: state.contentData.projectData.globalCss || '', // सभी पेजों के लिए ग्लोबल CSS
//               js: projectPage.js || '',
//               assets: projectPage.assets || [],
//               basicInfo: basicInfoToSend, // **यही फिक्स है**
//             };
//           })
//         }
//       };

//       const response = await fetch('http://localhost:5000/api/pages/save-all', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to save funnel');
//       }

//       return await response.json();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
// // Default content structure
// const DEFAULT_FUNNEL_CONTENT = {
//   name: 'My New Funnel',
//   welcomePage: { 
//     basicInfo: { 
//       name: 'Welcome Page', 
//       title: 'Welcome to My Funnel', 
//       description: '', 
//       favicon: null, 
//       keywords: '', 
//       socialTitle: '', 
//       socialImage: null, 
//       socialDescription: '', 
//       customHtmlHead: '', 
//       customHtmlBody: '' 
//     }, 
//     selectedTemplateKey: null 
//   },
//   generalSettings: {
//     appointment: { 
//       basicInfo: { 
//         name: 'Appointment Page', 
//         title: 'Book Your Appointment', 
//         description: '', 
//         favicon: null, 
//         keywords: '', 
//         socialTitle: '', 
//         socialImage: null, 
//         socialDescription: '', 
//         customHtmlHead: '', 
//         customHtmlBody: '' 
//       }, 
//       settings: { 
//         availabilityRange: { 
//           startDate: new Date().toISOString(), 
//           endDate: null 
//         } 
//       } 
//     }, 
//     payment: { 
//       basicInfo: { 
//         name: 'Payment Page', 
//         title: 'Complete Your Purchase', 
//         description: '', 
//         favicon: null, 
//         keywords: '', 
//         socialTitle: '', 
//         socialImage: null, 
//         socialDescription: '', 
//         customHtmlHead: '', 
//         customHtmlBody: '' 
//       }, 
//       settings: { 
//         currency: 'INR', 
//         gateways: { 
//           razorpay: { 
//             connected: false, 
//             keyId: '' 
//           } 
//         } 
//       } 
//     } 
//   },
//   projectData: { 
//     pages: [
//       { 
//         id: 'welcome-page', 
//         name: 'Welcome Page', 
//         html: `<h1>Welcome Page</h1><p>Design your welcome page here.</p>`, 
//         js: '', 
//         assets: [],
//         basicInfo: { 
//           name: 'Welcome Page',
//           title: 'Welcome Page', 
//           description: '', 
//           favicon: null, 
//           keywords: '', 
//           socialTitle: '', 
//           socialImage: null, 
//           socialDescription: '', 
//           customHtmlHead: '', 
//           customHtmlBody: '' 
//         } 
//       },
//       { 
//         id: 'thankyou-page', 
//         name: 'Thank You Page', 
//         html: `<h1>Thank You Page</h1><p>Design your thank you page here.</p>`, 
//         js: '', 
//         assets: [],
//         basicInfo: { 
//           name: 'Thank You Page',
//           title: 'Thank You Page', 
//           description: '', 
//           favicon: null, 
//           keywords: '', 
//           socialTitle: '', 
//           socialImage: null, 
//           socialDescription: '', 
//           customHtmlHead: '', 
//           customHtmlBody: '' 
//         } 
//       }
//     ], 
//     globalCss: '' 
//   },
//   stagesConfig: {
//     'welcome-page': { name: 'Welcome Page', selectedTemplateKey: null }, 
//     'vsl-page': { name: 'VSL Page', selectedTemplateKey: null }, 
//     'product-offer': { name: 'Product Offer', selectedTemplateKey: null }, 
//     'payment-page': { name: 'Payment Page', selectedTemplateKey: null }, 
//     'appointment-page': { name: 'Appointment Page', selectedTemplateKey: null }, 
//     'whatsapp-page': { name: 'WhatsApp Community', selectedTemplateKey: null }, 
//     'thankyou-page': { name: 'Thank You Page', selectedTemplateKey: null }
//   },
//   customStages: {},
//   customStagesConfig: {}
// };

// const getDefaultStages = () => [
//   { id: 'welcome-page', name: 'Welcome Page', type: 'welcome-page', fixed: true },
//   { id: 'thankyou-page', name: 'Thank You Page', type: 'thankyou-page', fixed: true }
// ];

// // Load initial state from localStorage
// const loadInitialState = () => {
//   const localStorageKey = 'funnelBuilderState_v6';
//   try {
//     const savedState = localStorage.getItem(localStorageKey);
//     if (savedState) {
//       const parsedState = JSON.parse(savedState);
      
//       const defaultFixedPages = DEFAULT_FUNNEL_CONTENT.projectData.pages;
//       const existingProjectPages = parsedState.contentData.projectData?.pages || [];
      
//       const mergedProjectPages = defaultFixedPages.map(defaultPage => {
//         const existingPage = existingProjectPages.find(p => p.id === defaultPage.id);
//         if (existingPage) {
//           return { 
//             ...defaultPage, 
//             ...existingPage,
//             basicInfo: { ...defaultPage.basicInfo, ...(existingPage.basicInfo || {}) }
//           };
//         }
//         return defaultPage;
//       }).concat(existingProjectPages.filter(existingPage => 
//         !defaultFixedPages.some(defaultPage => defaultPage.id === existingPage.id)
//       ));

//       return {
//         contentData: { 
//           ...DEFAULT_FUNNEL_CONTENT, 
//           ...parsedState.contentData,
//           welcomePage: {
//             ...DEFAULT_FUNNEL_CONTENT.welcomePage,
//             ...(parsedState.contentData.welcomePage || {}),
//             basicInfo: { ...DEFAULT_FUNNEL_CONTENT.welcomePage.basicInfo, ...(parsedState.contentData.projectData?.pages?.find(p=>p.id === 'welcome-page')?.basicInfo || {}) }
//           },
//           generalSettings: {
//             ...DEFAULT_FUNNEL_CONTENT.generalSettings,
//             ...(parsedState.contentData.generalSettings || {}),
//             appointment: {
//               ...DEFAULT_FUNNEL_CONTENT.generalSettings.appointment,
//               ...(parsedState.contentData.generalSettings?.appointment || {}),
//                basicInfo: { ...DEFAULT_FUNNEL_CONTENT.generalSettings.appointment.basicInfo, ...(parsedState.contentData.projectData?.pages?.find(p=>p.id === 'appointment-page')?.basicInfo || {}) }
//             },
//             payment: {
//               ...DEFAULT_FUNNEL_CONTENT.generalSettings.payment,
//               ...(parsedState.contentData.generalSettings?.payment || {}),
//               basicInfo: { ...DEFAULT_FUNNEL_CONTENT.generalSettings.payment.basicInfo, ...(parsedState.contentData.projectData?.pages?.find(p=>p.id === 'payment-page')?.basicInfo || {}) }
//             }
//           },
//           projectData: {
//             pages: mergedProjectPages,
//             globalCss: parsedState.contentData.projectData?.globalCss || ''
//           },
//           stagesConfig: {
//             ...DEFAULT_FUNNEL_CONTENT.stagesConfig,
//             ...(parsedState.contentData.stagesConfig || {})
//           },
//           customStages: parsedState.contentData.customStages || {},
//           customStagesConfig: parsedState.contentData.customStagesConfig || {}
//         },
//         stages: parsedState.stages || getDefaultStages(),
//         apiStatus: 'idle',
//         error: null,
//       };
//     }
//   } catch (e) {
//     console.error('Error loading state from localStorage', e);
//   }
//   return { 
//     contentData: DEFAULT_FUNNEL_CONTENT,
//     stages: getDefaultStages(), 
//     apiStatus: 'idle', 
//     error: null 
//   };
// };

// const initialState = loadInitialState();

// // Save state to localStorage
// const saveStateToLocalStorage = (state) => {
//   const localStorageKey = 'funnelBuilderState_v6';
//   try {
//     const stateToSave = { 
//       contentData: state.contentData, 
//       stages: state.stages 
//     };
//     localStorage.setItem(localStorageKey, JSON.stringify(stateToSave));
//   } catch (e) {
//     console.error('Error saving state to localStorage', e);
//   }
// };

// export const funnelSlice = createSlice({
//   name: 'funnel',
//   initialState,
//   reducers: {
//     resetState: (state) => {
//       localStorage.removeItem('funnelBuilderState_v6');
//       Object.assign(state, {
//         contentData: DEFAULT_FUNNEL_CONTENT,
//         stages: getDefaultStages(),
//         apiStatus: 'idle',
//         error: null,
//       });
//     },
//     updateProjectData(state, action) {
//       const { pages: newPages, globalCss } = action.payload;
//       const existingPages = state.contentData.projectData?.pages || [];
      
//       newPages.forEach(newPage => {
//         const index = existingPages.findIndex(p => p.id === newPage.id);
//         if (index !== -1) {
//           existingPages[index] = { 
//             ...existingPages[index], 
//             ...newPage,
//             basicInfo: { ...(existingPages[index].basicInfo || {}), ...(newPage.basicInfo || {}) }
//           };
//         } else {
//           existingPages.push(newPage);
//         }
//       });

//       state.contentData.projectData = {
//         ...state.contentData.projectData,
//         pages: existingPages,
//         globalCss: typeof globalCss === 'string' ? globalCss : state.contentData.projectData.globalCss,
//       };
//       saveStateToLocalStorage(state);
//     },
//     addStage: (state, action) => {
//       const newStage = action.payload;
//       if (state.stages.some(s => s.id === newStage.id)) return;
      
//       const defaultBasicInfo = {
//         name: newStage.name,
//         title: newStage.name,
//         description: '',
//         favicon: null,
//         keywords: '',
//         socialTitle: '',
//         socialImage: null,
//         socialDescription: '',
//         customHtmlHead: '',
//         customHtmlBody: ''
//       };

//       state.stages.push(newStage);
      
//       if (newStage.type === 'custom-page') {
//         state.contentData.customStagesConfig[newStage.id] = { 
//           name: newStage.name, 
//           selectedTemplateKey: null, 
//           basicInfo: defaultBasicInfo
//         };
//       }
      
//       if (!state.contentData.projectData.pages.find(p => p.id === newStage.id)) {
//         state.contentData.projectData.pages.push({ 
//           id: newStage.id, 
//           name: newStage.name, 
//           html: `<h1>${newStage.name}</h1><p>Design your page here.</p>`, 
//           js: '', 
//           assets: [],
//           basicInfo: defaultBasicInfo
//         });
//       }
//       saveStateToLocalStorage(state);
//     },
//     removeStage: (state, action) => {
//       const stageIdToRemove = action.payload;
//       state.stages = state.stages.filter(stage => stage.id !== stageIdToRemove);
      
//       delete state.contentData.customStagesConfig[stageIdToRemove];

//       if (state.contentData.projectData?.pages) { 
//         state.contentData.projectData.pages = state.contentData.projectData.pages.filter(
//           page => page.id !== stageIdToRemove
//         ); 
//       }
//       saveStateToLocalStorage(state);
//     },
//     updateStageBasicInfo: (state, action) => {
//       const { stageId, key, value } = action.payload;
//       const stage = state.stages.find(s => s.id === stageId);
//       if (!stage) return;

//       // **मुख्य अपडेट**: हमेशा projectData.pages को अपडेट करें
//       const projectPage = state.contentData.projectData?.pages?.find(p => p.id === stageId);
//       if (projectPage) {
//         if (!projectPage.basicInfo) projectPage.basicInfo = {};
        
//         projectPage.basicInfo[key] = value;

//         if (key === 'name') {
//           stage.name = value; // stages array में भी नाम अपडेट करें
//           projectPage.name = value; // projectData में भी नाम अपडेट करें
//           projectPage.basicInfo.title = value; // title को भी नाम के साथ सिंक करें
//         }
//       }
      
//       // UI के लिए दूसरे हिस्सों को भी सिंक करें
//       if (stage.type === 'custom-page' && state.contentData.customStagesConfig[stageId]) {
//          state.contentData.customStagesConfig[stageId].basicInfo[key] = value;
//          if(key === 'name') state.contentData.customStagesConfig[stageId].name = value;
//       } else if (stage.type === 'welcome-page') {
//         state.contentData.welcomePage.basicInfo[key] = value;
//       } else if (['appointment-page', 'payment-page'].includes(stage.type)) {
//         const settingKey = stage.type.replace('-page', '');
//         if (state.contentData.generalSettings[settingKey]?.basicInfo) {
//           state.contentData.generalSettings[settingKey].basicInfo[key] = value;
//         }
//       }

//       saveStateToLocalStorage(state);
//     },
//     setSelectedTemplateForStage: (state, action) => {
//       const { stageId, templateKey } = action.payload;
//       const stage = state.stages.find(s => s.id === stageId);
//       if (!stage) return;
      
//       const configTarget = stage.type === 'custom-page'
//         ? state.contentData.customStagesConfig
//         : state.contentData.stagesConfig;
      
//       const keyTarget = stage.type === 'custom-page' ? stageId : stage.type;

//       if (!configTarget[keyTarget]) { 
//         configTarget[keyTarget] = { name: stage.name };
//       }
//       configTarget[keyTarget].selectedTemplateKey = templateKey;
      
//       saveStateToLocalStorage(state);
//     },
//     setFunnelData: (state, action) => { 
//       state.contentData = { ...state.contentData, ...action.payload }; 
//       saveStateToLocalStorage(state); 
//     },
//     setStages: (state, action) => { 
//       state.stages = action.payload; 
//       saveStateToLocalStorage(state); 
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchFunnelBySlug.pending, (state) => {
//         state.apiStatus = 'loading';
//         state.error = null;
//       })
//       .addCase(fetchFunnelBySlug.fulfilled, (state, action) => {
//         if (action.payload && action.payload.funnel) {
//           const backendData = action.payload.funnel;
          
//           const freshState = { contentData: DEFAULT_FUNNEL_CONTENT, stages: getDefaultStages() };
          
//           freshState.contentData.name = backendData.name;
//           freshState.contentData.slug = backendData.slug;

//           freshState.contentData.projectData.pages = backendData.stages.map(stage => ({
//             id: stage.pageId,
//             name: stage.name,
//             html: stage.html,
//             js: stage.js,
//             assets: stage.assets || [],
//             basicInfo: stage.basicInfo || {}
//           }));

//           freshState.contentData.projectData.globalCss = backendData.stages[0]?.css || '';

//           freshState.stages = backendData.stages.map(stage => ({
//             id: stage.pageId,
//             name: stage.name,
//             type: stage.type,
//             fixed: ['welcome-page', 'thankyou-page'].includes(stage.type)
//           }));

//           backendData.stages.forEach(stage => {
//             const basicInfo = stage.basicInfo || {};
//             if (stage.type === 'custom-page') {
//               freshState.contentData.customStagesConfig[stage.pageId] = {
//                 name: stage.name,
//                 selectedTemplateKey: stage.selectedTemplateKey,
//                 basicInfo: basicInfo
//               };
//             } else {
//               freshState.contentData.stagesConfig[stage.type] = {
//                 name: stage.name,
//                 selectedTemplateKey: stage.selectedTemplateKey,
//               };
//               if (stage.type === 'welcome-page') freshState.contentData.welcomePage.basicInfo = basicInfo;
//               if (stage.type === 'appointment-page') freshState.contentData.generalSettings.appointment.basicInfo = basicInfo;
//               if (stage.type === 'payment-page') freshState.contentData.generalSettings.payment.basicInfo = basicInfo;
//             }
//           });
          
//           Object.assign(state, { ...freshState, apiStatus: 'idle', error: null });
//         } else {
//           Object.assign(state, { contentData: DEFAULT_FUNNEL_CONTENT, stages: getDefaultStages(), apiStatus: 'idle', error: null });
//         }
//       })
//       .addCase(fetchFunnelBySlug.rejected, (state, action) => {
//         state.apiStatus = 'failed';
//         state.error = action.payload || 'Failed to fetch funnel';
//         Object.assign(state, { contentData: DEFAULT_FUNNEL_CONTENT, stages: getDefaultStages() });
//       })
//       .addCase(saveFunnelToBackend.pending, (state) => {
//         state.apiStatus = 'publishing';
//         state.error = null;
//       })
//       .addCase(saveFunnelToBackend.fulfilled, (state) => {
//         state.apiStatus = 'published';
//       })
//       .addCase(saveFunnelToBackend.rejected, (state, action) => {
//         state.apiStatus = 'failed';
//         state.error = action.payload || 'Failed to save funnel';
//       });
//   }
// });

// export const {
//   resetState,
//   updateProjectData,
//   addStage,
//   removeStage,
//   updateStageBasicInfo,
//   setSelectedTemplateForStage,
//   setFunnelData,
//   setStages
// } = funnelSlice.actions;

// export default funnelSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk to fetch funnel data from backend
export const fetchFunnelBySlug = createAsyncThunk(
  'funnel/fetchBySlug',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/funnels/${slug}`);
      if (response.status === 404) return null;
      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to save the entire funnel state to the backend
export const saveFunnelToBackend = createAsyncThunk(
  'funnel/saveToBackend',
  async ({ slug, funnelName }, { getState, rejectWithValue }) => {
    try {
      const state = getState().funnel;
      
      const currentSlug = slug || state.contentData.slug || 'new';
      const currentFunnelName = funnelName || state.contentData.name || 'My New Funnel';
      const rootState = getState(); // ✅ this gives the entire Redux state
      const coachId = rootState.auth?.user?.id;
      console.log("Coach ID:", coachId); // ✅ ADD THIS

        if (!coachId) throw new Error('Coach ID not found. Please log in.');

      const payload = {
        funnel: {
          slug: currentSlug,
          name: currentFunnelName,
          stages: state.stages.map(stage => {
            const isCustom = stage.type === 'custom-page';
            
            // **मुख्य समाधान**: हमेशा projectData.pages से डेटा लें, क्योंकि यह एडिटर से अपडेट होता है।
            const projectPage = state.contentData.projectData?.pages?.find(p => p.id === stage.id) || {};
            
            // कॉन्फिग से केवल नाम और टेम्पलेट की (key) लें।
            const config = isCustom 
              ? state.contentData.customStagesConfig[stage.id] 
              : state.contentData.stagesConfig[stage.type];
            
            // basicInfo के लिए projectPage को प्राथमिकता दें।
            const basicInfoToSend = projectPage.basicInfo || {};

            return {
              pageId: stage.id,
              name: projectPage.name || config?.name || stage.name, // नाम भी projectData से प्राथमिकता दें
              type: stage.type,
              selectedTemplateKey: config?.selectedTemplateKey || null,
              html: projectPage.html || '',
              css: state.contentData.projectData.globalCss || '', 
              js: projectPage.js || '',
              assets: projectPage.assets || [],
              basicInfo: basicInfoToSend, 
            };
          })
        }
      };

       const response = await fetch(`http://api.funnelseye.com/api/funnels/coach/${coachId}/funnels`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // const response = await fetch('http://localhost:5000/api/pages/save-all', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload)
      // });

   if (!response.ok) {
  const errorData = await response.json();
  console.error("Failed Response Data:", errorData); // ✅ Add this
  throw new Error(errorData.message || 'Failed to save funnel');
}

      return await response.json();
    } catch (error) {
        console.error("[Thunk Error] Save Funnel Error:", error); // ✅ ADD THIS
      return rejectWithValue(error.message);
    }
  }
);
// Default content structure
const DEFAULT_FUNNEL_CONTENT = {
  name: 'My New Funnel',
  welcomePage: { 
    basicInfo: { 
      name: 'Welcome Page', 
      title: 'Welcome to My Funnel', 
      description: '', 
      favicon: null, 
      keywords: '', 
      socialTitle: '', 
      socialImage: null, 
      socialDescription: '', 
      customHtmlHead: '', 
      customHtmlBody: '' 
    }, 
    selectedTemplateKey: null 
  },
  generalSettings: {
    appointment: { 
      basicInfo: { 
        name: 'Appointment Page', 
        title: 'Book Your Appointment', 
        description: '', 
        favicon: null, 
        keywords: '', 
        socialTitle: '', 
        socialImage: null, 
        socialDescription: '', 
        customHtmlHead: '', 
        customHtmlBody: '' 
      }, 
      settings: { 
        availabilityRange: { 
          startDate: new Date().toISOString(), 
          endDate: null 
        } 
      } 
    }, 
    payment: { 
      basicInfo: { 
        name: 'Payment Page', 
        title: 'Complete Your Purchase', 
        description: '', 
        favicon: null, 
        keywords: '', 
        socialTitle: '', 
        socialImage: null, 
        socialDescription: '', 
        customHtmlHead: '', 
        customHtmlBody: '' 
      }, 
      settings: { 
        currency: 'INR', 
        gateways: { 
          razorpay: { 
            connected: false, 
            keyId: '' 
          } 
        } 
      } 
    } 
  },
  projectData: { 
    pages: [
      { 
        id: 'welcome-page', 
        name: 'Welcome Page', 
        html: `<h1>Welcome Page</h1><p>Design your welcome page here.</p>`, 
        js: '', 
        assets: [],
        basicInfo: { 
          name: 'Welcome Page',
          title: 'Welcome Page', 
          description: '', 
          favicon: null, 
          keywords: '', 
          socialTitle: '', 
          socialImage: null, 
          socialDescription: '', 
          customHtmlHead: '', 
          customHtmlBody: '' 
        } 
      },
      { 
        id: 'thankyou-page', 
        name: 'Thank You Page', 
        html: `<h1>Thank You Page</h1><p>Design your thank you page here.</p>`, 
        js: '', 
        assets: [],
        basicInfo: { 
          name: 'Thank You Page',
          title: 'Thank You Page', 
          description: '', 
          favicon: null, 
          keywords: '', 
          socialTitle: '', 
          socialImage: null, 
          socialDescription: '', 
          customHtmlHead: '', 
          customHtmlBody: '' 
        } 
      }
    ], 
    globalCss: '' 
  },
  stagesConfig: {
    'welcome-page': { name: 'Welcome Page', selectedTemplateKey: null }, 
    'vsl-page': { name: 'VSL Page', selectedTemplateKey: null }, 
    'product-offer': { name: 'Product Offer', selectedTemplateKey: null }, 
    'payment-page': { name: 'Payment Page', selectedTemplateKey: null }, 
    'appointment-page': { name: 'Appointment Page', selectedTemplateKey: null }, 
    'whatsapp-page': { name: 'WhatsApp Community', selectedTemplateKey: null }, 
    'thankyou-page': { name: 'Thank You Page', selectedTemplateKey: null }
  },
  customStages: {},
  customStagesConfig: {}
};

const getDefaultStages = () => [
  { id: 'welcome-page', name: 'Welcome Page', type: 'welcome-page', fixed: true },
  { id: 'thankyou-page', name: 'Thank You Page', type: 'thankyou-page', fixed: true }
];

// Load initial state from localStorage
const loadInitialState = () => {
  const localStorageKey = 'funnelBuilderState_v6';
  try {
    const savedState = localStorage.getItem(localStorageKey);
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      
      const defaultFixedPages = DEFAULT_FUNNEL_CONTENT.projectData.pages;
      const existingProjectPages = parsedState.contentData.projectData?.pages || [];
      
      const mergedProjectPages = defaultFixedPages.map(defaultPage => {
        const existingPage = existingProjectPages.find(p => p.id === defaultPage.id);
        if (existingPage) {
          return { 
            ...defaultPage, 
            ...existingPage,
            basicInfo: { ...defaultPage.basicInfo, ...(existingPage.basicInfo || {}) }
          };
        }
        return defaultPage;
      }).concat(existingProjectPages.filter(existingPage => 
        !defaultFixedPages.some(defaultPage => defaultPage.id === existingPage.id)
      ));

      return {
        contentData: { 
          ...DEFAULT_FUNNEL_CONTENT, 
          ...parsedState.contentData,
          welcomePage: {
            ...DEFAULT_FUNNEL_CONTENT.welcomePage,
            ...(parsedState.contentData.welcomePage || {}),
            basicInfo: { ...DEFAULT_FUNNEL_CONTENT.welcomePage.basicInfo, ...(parsedState.contentData.projectData?.pages?.find(p=>p.id === 'welcome-page')?.basicInfo || {}) }
          },
          generalSettings: {
            ...DEFAULT_FUNNEL_CONTENT.generalSettings,
            ...(parsedState.contentData.generalSettings || {}),
            appointment: {
              ...DEFAULT_FUNNEL_CONTENT.generalSettings.appointment,
              ...(parsedState.contentData.generalSettings?.appointment || {}),
               basicInfo: { ...DEFAULT_FUNNEL_CONTENT.generalSettings.appointment.basicInfo, ...(parsedState.contentData.projectData?.pages?.find(p=>p.id === 'appointment-page')?.basicInfo || {}) }
            },
            payment: {
              ...DEFAULT_FUNNEL_CONTENT.generalSettings.payment,
              ...(parsedState.contentData.generalSettings?.payment || {}),
              basicInfo: { ...DEFAULT_FUNNEL_CONTENT.generalSettings.payment.basicInfo, ...(parsedState.contentData.projectData?.pages?.find(p=>p.id === 'payment-page')?.basicInfo || {}) }
            }
          },
          projectData: {
            pages: mergedProjectPages,
            globalCss: parsedState.contentData.projectData?.globalCss || ''
          },
          stagesConfig: {
            ...DEFAULT_FUNNEL_CONTENT.stagesConfig,
            ...(parsedState.contentData.stagesConfig || {})
          },
          customStages: parsedState.contentData.customStages || {},
          customStagesConfig: parsedState.contentData.customStagesConfig || {}
        },
        stages: parsedState.stages || getDefaultStages(),
        apiStatus: 'idle',
        error: null,
      };
    }
  } catch (e) {
    console.error('Error loading state from localStorage', e);
  }
  return { 
    contentData: DEFAULT_FUNNEL_CONTENT,
    stages: getDefaultStages(), 
    apiStatus: 'idle', 
    error: null 
  };
};

const initialState = loadInitialState();

// Save state to localStorage
const saveStateToLocalStorage = (state) => {
  const localStorageKey = 'funnelBuilderState_v6';
  try {
    const stateToSave = { 
      contentData: state.contentData, 
      stages: state.stages 
    };
    localStorage.setItem(localStorageKey, JSON.stringify(stateToSave));
  } catch (e) {
    console.error('Error saving state to localStorage', e);
  }
};

export const funnelSlice = createSlice({
  name: 'funnel',
  initialState,
  reducers: {
    resetState: (state) => {
      localStorage.removeItem('funnelBuilderState_v6');
      Object.assign(state, {
        contentData: DEFAULT_FUNNEL_CONTENT,
        stages: getDefaultStages(),
        apiStatus: 'idle',
        error: null,
      });
    },
    updateProjectData(state, action) {
      const { pages: newPages, globalCss } = action.payload;
      const existingPages = state.contentData.projectData?.pages || [];
      
      newPages.forEach(newPage => {
        const index = existingPages.findIndex(p => p.id === newPage.id);
        if (index !== -1) {
          existingPages[index] = { 
            ...existingPages[index], 
            ...newPage,
            basicInfo: { ...(existingPages[index].basicInfo || {}), ...(newPage.basicInfo || {}) }
          };
        } else {
          existingPages.push(newPage);
        }
      });

      state.contentData.projectData = {
        ...state.contentData.projectData,
        pages: existingPages,
        globalCss: typeof globalCss === 'string' ? globalCss : state.contentData.projectData.globalCss,
      };
      saveStateToLocalStorage(state);
    },
    addStage: (state, action) => {
      const newStage = action.payload;
      if (state.stages.some(s => s.id === newStage.id)) return;
      
      const defaultBasicInfo = {
        name: newStage.name,
        title: newStage.name,
        description: '',
        favicon: null,
        keywords: '',
        socialTitle: '',
        socialImage: null,
        socialDescription: '',
        customHtmlHead: '',
        customHtmlBody: ''
      };

      state.stages.push(newStage);
      
      if (newStage.type === 'custom-page') {
        state.contentData.customStagesConfig[newStage.id] = { 
          name: newStage.name, 
          selectedTemplateKey: null, 
          basicInfo: defaultBasicInfo
        };
      }
      
      if (!state.contentData.projectData.pages.find(p => p.id === newStage.id)) {
        state.contentData.projectData.pages.push({ 
          id: newStage.id, 
          name: newStage.name, 
          html: `<h1>${newStage.name}</h1><p>Design your page here.</p>`, 
          js: '', 
          assets: [],
          basicInfo: defaultBasicInfo
        });
      }
      saveStateToLocalStorage(state);
    },
    removeStage: (state, action) => {
      const stageIdToRemove = action.payload;
      state.stages = state.stages.filter(stage => stage.id !== stageIdToRemove);
      
      delete state.contentData.customStagesConfig[stageIdToRemove];

      if (state.contentData.projectData?.pages) { 
        state.contentData.projectData.pages = state.contentData.projectData.pages.filter(
          page => page.id !== stageIdToRemove
        ); 
      }
      saveStateToLocalStorage(state);
    },
    updateStageBasicInfo: (state, action) => {
      const { stageId, key, value } = action.payload;
      const stage = state.stages.find(s => s.id === stageId);
      if (!stage) return;

      // **मुख्य अपडेट**: हमेशा projectData.pages को अपडेट करें
      const projectPage = state.contentData.projectData?.pages?.find(p => p.id === stageId);
      if (projectPage) {
        if (!projectPage.basicInfo) projectPage.basicInfo = {};
        
        projectPage.basicInfo[key] = value;

        if (key === 'name') {
          stage.name = value; // stages array में भी नाम अपडेट करें
          projectPage.name = value; // projectData में भी नाम अपडेट करें
          projectPage.basicInfo.title = value; // title को भी नाम के साथ सिंक करें
        }
      }
      
      // UI के लिए दूसरे हिस्सों को भी सिंक करें
      if (stage.type === 'custom-page' && state.contentData.customStagesConfig[stageId]) {
         state.contentData.customStagesConfig[stageId].basicInfo[key] = value;
         if(key === 'name') state.contentData.customStagesConfig[stageId].name = value;
      } else if (stage.type === 'welcome-page') {
        state.contentData.welcomePage.basicInfo[key] = value;
      } else if (['appointment-page', 'payment-page'].includes(stage.type)) {
        const settingKey = stage.type.replace('-page', '');
        if (state.contentData.generalSettings[settingKey]?.basicInfo) {
          state.contentData.generalSettings[settingKey].basicInfo[key] = value;
        }
      }

      saveStateToLocalStorage(state);
    },
    setSelectedTemplateForStage: (state, action) => {
      const { stageId, templateKey } = action.payload;
      const stage = state.stages.find(s => s.id === stageId);
      if (!stage) return;
      
      const configTarget = stage.type === 'custom-page'
        ? state.contentData.customStagesConfig
        : state.contentData.stagesConfig;
      
      const keyTarget = stage.type === 'custom-page' ? stageId : stage.type;

      if (!configTarget[keyTarget]) { 
        configTarget[keyTarget] = { name: stage.name };
      }
      configTarget[keyTarget].selectedTemplateKey = templateKey;
      
      saveStateToLocalStorage(state);
    },
    setFunnelData: (state, action) => { 
      state.contentData = { ...state.contentData, ...action.payload }; 
      saveStateToLocalStorage(state); 
    },
    setStages: (state, action) => { 
      state.stages = action.payload; 
      saveStateToLocalStorage(state); 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFunnelBySlug.pending, (state) => {
        state.apiStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchFunnelBySlug.fulfilled, (state, action) => {
        if (action.payload && action.payload.funnel) {
          const backendData = action.payload.funnel;
          
          const freshState = { contentData: DEFAULT_FUNNEL_CONTENT, stages: getDefaultStages() };
          
          freshState.contentData.name = backendData.name;
          freshState.contentData.slug = backendData.slug;

          freshState.contentData.projectData.pages = backendData.stages.map(stage => ({
            id: stage.pageId,
            name: stage.name,
            html: stage.html,
            js: stage.js,
            assets: stage.assets || [],
            basicInfo: stage.basicInfo || {}
          }));

          freshState.contentData.projectData.globalCss = backendData.stages[0]?.css || '';

          freshState.stages = backendData.stages.map(stage => ({
            id: stage.pageId,
            name: stage.name,
            type: stage.type,
            fixed: ['welcome-page', 'thankyou-page'].includes(stage.type)
          }));

          backendData.stages.forEach(stage => {
            const basicInfo = stage.basicInfo || {};
            if (stage.type === 'custom-page') {
              freshState.contentData.customStagesConfig[stage.pageId] = {
                name: stage.name,
                selectedTemplateKey: stage.selectedTemplateKey,
                basicInfo: basicInfo
              };
            } else {
              freshState.contentData.stagesConfig[stage.type] = {
                name: stage.name,
                selectedTemplateKey: stage.selectedTemplateKey,
              };
              if (stage.type === 'welcome-page') freshState.contentData.welcomePage.basicInfo = basicInfo;
              if (stage.type === 'appointment-page') freshState.contentData.generalSettings.appointment.basicInfo = basicInfo;
              if (stage.type === 'payment-page') freshState.contentData.generalSettings.payment.basicInfo = basicInfo;
            }
          });
          
          Object.assign(state, { ...freshState, apiStatus: 'idle', error: null });
        } else {
          Object.assign(state, { contentData: DEFAULT_FUNNEL_CONTENT, stages: getDefaultStages(), apiStatus: 'idle', error: null });
        }
      })
      .addCase(fetchFunnelBySlug.rejected, (state, action) => {
        state.apiStatus = 'failed';
        state.error = action.payload || 'Failed to fetch funnel';
        Object.assign(state, { contentData: DEFAULT_FUNNEL_CONTENT, stages: getDefaultStages() });
      })
      .addCase(saveFunnelToBackend.pending, (state) => {
        state.apiStatus = 'publishing';
        state.error = null;
      })
      .addCase(saveFunnelToBackend.fulfilled, (state) => {
        state.apiStatus = 'published';
      })
      .addCase(saveFunnelToBackend.rejected, (state, action) => {
        state.apiStatus = 'failed';
        state.error = action.payload || 'Failed to save funnel';
      });
  }
});

export const {
  resetState,
  updateProjectData,
  addStage,
  removeStage,
  updateStageBasicInfo,
  setSelectedTemplateForStage,
  setFunnelData,
  setStages
} = funnelSlice.actions;

export default funnelSlice.reducer;
