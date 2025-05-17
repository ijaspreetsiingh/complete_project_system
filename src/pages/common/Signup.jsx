import { useState, useEffect, useMemo, createRef } from 'react'; // Added useMemo and createRef
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authSlice'; // Ensure this path is correct
import swal from 'sweetalert';

// Inject keyframes for pulse animation once
const styles = `
  @keyframes pulseEffect {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.7); /* Assuming orange-500 or similar */
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 0 5px 5px rgba(255, 107, 0, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(255, 107, 0, 0);
    }
  }
  .otp-input-active {
    animation: pulseEffect 0.8s infinite;
    border-color: #F97316 !important; /* Tailwind orange-500 */
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


const Signup = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    confirmPassword: '',
    check: false,
    whatsapp: '',
    socialMedia: '',
    description: '',
    vslWatched: '',
    callReason: '',
    supplements: '',
    supplementsDetails: '',
    mlmAssociation: '',
    readiness: '',
    commitment: '',
    timeCommitment: '',
    zoomAvailability: '',
    businessUnderstanding: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state?.plan;

  // Effect for initial OTP input focus
  useEffect(() => {
    if (currentStep === 2) {
      // The OtpBoxes component will handle its own first input focus via refs now
      // but we can ensure activeOtpIndex is reset.
      setActiveOtpIndex(0);
      // If you still want to use getElementById for the very first focus:
      const firstOtpInputElement = document.getElementById('otp-0');
      if (firstOtpInputElement) {
        setTimeout(() => firstOtpInputElement.focus(), 0);
      }
    }
  }, [currentStep]);

  useEffect(() => {
    let timer;
    if (resendDisabled && resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    } else if (resendTimer === 0) {
      setResendDisabled(false);
      setResendTimer(30);
    }
    return () => clearTimeout(timer);
  }, [resendDisabled, resendTimer]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckBox = (value) => {
    setInput((prev) => ({ ...prev, check: value }));
  };

  const validateEmail = () => {
    setErrors({});
    if (!input.email) {
      setErrors({ email: "Email is required" });
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(input.email)) {
      setErrors({ email: "Please enter a valid email" });
      return false;
    }
    return true;
  };

  const validateFullForm = () => {
    const newErrors = {};
    if (!input.name) newErrors.name = "Name is required";
    if (!input.phone) newErrors.phone = "Phone is required";
    else if (!/^\+?[1-9]\d{1,14}$/.test(input.phone)) newErrors.phone = "Invalid phone number format";
    if (!input.password) newErrors.password = "Password is required";
    if (input.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (input.password !== input.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateQuestions = () => {
    const newErrors = {};
    if (!input.whatsapp) newErrors.whatsapp = "WhatsApp number is required";
    else if (!/^\+?[1-9]\d{1,14}$/.test(input.whatsapp)) newErrors.whatsapp = "Invalid WhatsApp number format";
    if (!input.description) newErrors.description = "This field is required";
    if (!input.vslWatched) newErrors.vslWatched = "This field is required";
    if (!input.callReason) newErrors.callReason = "This field is required";
    if (!input.supplements) newErrors.supplements = "This field is required";
    if (input.supplements === "Yes" && !input.supplementsDetails) newErrors.supplementsDetails = "Please specify supplement details";
    if (!input.mlmAssociation) newErrors.mlmAssociation = "This field is required";
    if (!input.readiness) newErrors.readiness = "This field is required";
    if (!input.commitment) newErrors.commitment = "This field is required";
    if (!input.timeCommitment) newErrors.timeCommitment = "This field is required";
    if (!input.zoomAvailability) newErrors.zoomAvailability = "This field is required";
    if (!input.businessUnderstanding) newErrors.businessUnderstanding = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendOtp = async (isResend = false) => {
    if (!isResend && !validateEmail()) return;
    setLoading(true);
    setOtpError('');
    try {
      console.log('Sending OTP to:', input.email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!isResend) setCurrentStep(2);
      setResendDisabled(true);
      setResendTimer(30);
      setOtp(''); 
      setActiveOtpIndex(0); 
      // Initial focus for otp-0 will be handled by OtpBoxes or parent useEffect
      const firstOtpInputElement = document.getElementById('otp-0');
      if (firstOtpInputElement) {
        setTimeout(() => firstOtpInputElement.focus(), 0);
      }

    } catch (err) {
      console.error('Error sending OTP:', err);
      setOtpError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (otp.length !== 6) {
      setOtpError("Please enter a 6-digit OTP");
      return;
    }
    setLoading(true);
    setOtpError('');
    try {
      console.log('Verifying OTP:', otp);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (otp === '123456') { // MOCK: Replace with actual OTP check
        setCurrentStep(3);
        setOtpError('');
      } else {
        setOtpError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setOtpError("OTP verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitBasicInfo = async (e) => {
    e.preventDefault();
    if (!validateFullForm()) return;
    setCurrentStep(4); 
  };

  const handleSubmitQuestions = async (e) => {
    e.preventDefault();
    if (!input.check) { 
      swal('Oops', 'Please accept the Terms & Conditions and Privacy Policy', 'error');
      return;
    }
    if (!validateQuestions()) return;

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
  
      const registrationData = { ...input };
      delete registrationData.confirmPassword;
      delete registrationData.check;

      const fakeResponse = {
        data: { user: registrationData, token: 'mock-jwt-token-123456789' }
      };
      console.log('Submitting registration:', fakeResponse.data.user);
      dispatch(register(fakeResponse.data));
      swal('Success', 'Account created successfully!', 'success');
      
      if (selectedPlan) {
        navigate('/payment', { state: { plan: selectedPlan } });
      } else {
        navigate('/dashboard');
      }
      
    } catch (err) {
      console.error('Registration failed:', err);
      swal('Error', 'Registration failed. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    console.log("Redirecting to Google OAuth...");
    window.location.href = "http://localhost:5000/auth/google";
  };

  // OTP input boxes component
  const OtpBoxes = () => {
    // Line 178 (approx) after changes. Create stable refs.
    const otpInputsRef = useMemo(() => Array(6).fill(null).map(() => createRef()), []);

  useEffect(() => {
    if (otpInputsRef[activeOtpIndex]?.current) {
      otpInputsRef[activeOtpIndex].current.focus();
    }
  }, [activeOtpIndex, otpInputsRef]);



  const handleOtpChange = (e, index) => {
    const digit = e.target.value;
    if (!/^[0-9]$/.test(digit) && digit !== '') return;

    const otpChars = (otp + '      ').substring(0, 6).split('');
    otpChars[index] = digit;
    setOtp(otpChars.join('').replace(/\s/g, ''));
    setOtpError('');

    if (digit && index < 5) {
      setActiveOtpIndex(index + 1);
    }
  };
  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        setActiveOtpIndex(index - 1);
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      setActiveOtpIndex(index - 1);
      e.preventDefault();
    } else if (e.key === 'ArrowRight' && index < 5) {
      setActiveOtpIndex(index + 1);
      e.preventDefault();
    }
  };
    
  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/[^0-9]/g, '').slice(0, 6);
    if (pastedData) {
      setOtp(pastedData);
      const focusIndex = Math.min(pastedData.length, 5);
      setActiveOtpIndex(focusIndex);
      if (pastedData.length === 6) {
        const verifyButton = document.querySelector('button[type="button"][onClick*="verifyOtp"]');
        if (verifyButton) setTimeout(() => verifyButton.focus(), 50);
      }
    }
  };
  return (
    <div 
      className="flex justify-center gap-2 mb-4"
      onPaste={handleOtpPaste}
    >
      {Array(6).fill('').map((_, index) => (
        <input
          key={index}
          id={`otp-${index}`}
          ref={otpInputsRef[index]}
          type="tel"
          maxLength="1"
          value={otp[index] || ''}
          onChange={(e) => handleOtpChange(e, index)}
          onKeyDown={(e) => handleOtpKeyDown(e, index)}
          onFocus={() => setActiveOtpIndex(index)}
          className={`w-12 h-12 text-2xl text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${activeOtpIndex === index ? 'otp-input-active' : 'border-gray-300'} ${otpError ? '!border-red-500' : ''}`}
          style={{ transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
          autoComplete="off"
        />
      ))}
    </div>
  );
};
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        <section id='signup-section'>
          <div className='py-20 pt-28 md:py-40 md:pt-36 xl:pb-[200px] xl:pt-[180px]'>
            <div className='global-container'>
              <div className='mx-auto max-w-[910px] text-center'>
                <h1 className='mb-8 md:mb-[50px] text-3xl md:text-4xl font-semibold'>
                  {currentStep === 1 && "Create your Account"}
                  {currentStep === 2 && "Enter OTP"}
                  {currentStep === 3 && "Complete Your Profile"}
                  {currentStep === 4 && "Tell Us More About You"}
                  {(![1,2,3,4].includes(currentStep)) && "Create Account" }
                </h1>
                <div className='block rounded-lg bg-white px-4 py-8 md:px-[30px] md:py-[50px] text-left shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] sm:px-10'>
                  
                  <form onSubmit={
                      currentStep === 3 ? handleSubmitBasicInfo : 
                      currentStep === 4 ? handleSubmitQuestions : 
                      (e) => e.preventDefault() 
                    } className='flex flex-col gap-y-5'>

                    {/* Step 1: Email Verification */}
                    {currentStep === 1 && (
                      <div className='grid grid-cols-1 gap-6'>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label htmlFor='signup-email' className='text-lg font-bold leading-[1.6]'>
                            Email address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type='email' name='email' value={input.email} onChange={handleInput} id='signup-email' placeholder='example@gmail.com'
                            className={`rounded-[10px] border bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-orange-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} required
                          />
                          {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
                        </div>
                        <button
                          type='button' onClick={() => sendOtp(false)} disabled={loading}
                          className='button mt-7 block rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-orange-500 hover:border-orange-500 hover:text-white disabled:opacity-50'
                        >
                          {loading ? 'Sending OTP...' : 'Verify Email'}
                        </button>
                      </div>
                    )}

                    {/* Step 2: OTP Verification */}
                    {currentStep === 2 && (
                      <div className='grid grid-cols-1 gap-6'>
                        <div className='flex flex-col gap-y-[10px] items-center'>
                          <p className='text-center mb-4'>We've sent a 6-digit OTP to <strong className="text-orange-600">{input.email}</strong></p>
                          <OtpBoxes />
                          {otpError && <span className='text-red-500 text-sm text-center mt-2'>{otpError}</span>}
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                          <button
                            type='button' onClick={verifyOtp} disabled={loading || otp.length !== 6}
                            className='button flex-1 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-orange-500 hover:border-orange-500 hover:text-white disabled:opacity-50'
                          >
                            {loading ? 'Verifying...' : 'Verify OTP'}
                          </button>
                          <button
                            type='button' onClick={() => sendOtp(true)} disabled={resendDisabled || loading}
                            className='button flex-1 rounded-[50px] border-2 border-[#EAEDF0] bg-white py-4 text-black hover:bg-slate-200 disabled:opacity-50'
                          >
                            {resendDisabled ? `Resend OTP (${resendTimer}s)` : 'Resend OTP'}
                          </button>
                        </div>
                        <button type="button" onClick={() => { setCurrentStep(1); setOtp(''); setOtpError('');}} className="text-sm text-orange-600 hover:underline text-center mt-2">Change Email</button>
                      </div>
                    )}

                    {/* Step 3: Full Registration Form */}
                    {currentStep === 3 && (
                      <div className='grid grid-cols-1 gap-6'>
                        {selectedPlan && (
                          <div className='mb-4 p-4 bg-gray-100 rounded-lg'>
                            <p className='font-bold'>Selected Plan: {selectedPlan.name}</p>
                            <p>${selectedPlan.price}/{selectedPlan.type === 'monthly' ? 'month' : 'year'}</p>
                          </div>
                        )}
                        <div className='flex flex-col gap-y-[10px]'>
                          <label htmlFor='signup-name' className='text-lg font-bold leading-[1.6]'>Full Name <span className="text-red-500">*</span></label>
                          <input type='text' name='name' value={input.name} onChange={handleInput} id='signup-name' placeholder='Adam Smith'
                            className={`rounded-[10px] border bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-orange-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`} required />
                          {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label htmlFor='signup-phone' className='text-lg font-bold leading-[1.6]'>Phone Number <span className="text-red-500">*</span></label>
                          <input type='tel' name='phone' value={input.phone} onChange={handleInput} id='signup-phone' placeholder='+1 234 567 890'
                            className={`rounded-[10px] border bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-orange-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} required />
                          {errors.phone && <span className='text-red-500 text-sm'>{errors.phone}</span>}
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label htmlFor='signup-password' className='text-lg font-bold leading-[1.6]'>Password <span className="text-red-500">*</span></label>
                          <input type='password' name='password' value={input.password} onChange={handleInput} id='signup-password' placeholder='Minimum 8 characters'
                            className={`rounded-[10px] border bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-orange-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`} required />
                          {errors.password && <span className='text-red-500 text-sm'>{errors.password}</span>}
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label htmlFor='signup-confirm-password' className='text-lg font-bold leading-[1.6]'>Confirm Password <span className="text-red-500">*</span></label>
                          <input type='password' name='confirmPassword' value={input.confirmPassword} onChange={handleInput} id='signup-confirm-password' placeholder='Re-enter password'
                            className={`rounded-[10px] border bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-orange-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`} required />
                          {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword}</span>}
                        </div>
                        <button type='submit' disabled={loading}
                          className='button mt-7 block rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-orange-500 hover:border-orange-500 hover:text-white disabled:opacity-50'>
                          {loading ? 'Processing...' : 'Continue'}
                        </button>
                      </div>
                    )}

                    {/* Step 4: Questions */}
                    {currentStep === 4 && (
                      <div className='grid grid-cols-1 gap-6'>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label htmlFor='whatsapp' className='text-lg font-bold leading-[1.6]'>WhatsApp Number (with country code) <span className="text-red-500">*</span></label>
                          <input type='tel' name='whatsapp' value={input.whatsapp} onChange={handleInput} id='whatsapp' placeholder='+1 234 567 890'
                            className={`rounded-[10px] border bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-orange-500 ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'}`} required />
                          {errors.whatsapp && <span className='text-red-500 text-sm'>{errors.whatsapp}</span>}
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label htmlFor='socialMedia' className='text-lg font-bold leading-[1.6]'>Instagram/Facebook (Username or Profile Link)</label>
                          <input type='text' name='socialMedia' value={input.socialMedia} onChange={handleInput} id='socialMedia' placeholder='@username or https://...'
                            className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-orange-500' />
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label className='text-lg font-bold leading-[1.6]'>What best describes you? <span className="text-red-500">*</span></label>
                          <select name='description' value={input.description} onChange={handleInput}
                            className={`rounded-[10px] border bg-white px-6 py-[18px] font-bold text-black outline-none transition-all focus:border-orange-500 ${errors.description ? 'border-red-500' : 'border-gray-300'}`} required >
                            <option value=''>Select an option</option> <option value='Full-time job'>Full-time job</option> <option value='Student'>Student</option> <option value='Housewife'>Housewife</option> <option value='Business owner'>Business owner</option> <option value='Unemployed'>Unemployed</option> <option value='Other'>Other</option>
                          </select>
                          {errors.description && <span className='text-red-500 text-sm'>{errors.description}</span>}
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label className='text-lg font-bold leading-[1.6]'>Have you watched the full video presentation (VSL)? <span className="text-red-500">*</span></label>
                          <div className='flex flex-col gap-2'> {['Yes, 100%', 'Partially', 'Not yet'].map(option => (<label key={option} className='flex items-center gap-2 cursor-pointer'><input type='radio' name='vslWatched' value={option} checked={input.vslWatched === option} onChange={handleInput} className='h-4 w-4 accent-orange-500' required />{option}</label>))}</div>
                          {errors.vslWatched && <span className='text-red-500 text-sm'>{errors.vslWatched}</span>}
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label htmlFor='callReason' className='text-lg font-bold leading-[1.6]'>What made you book this call today? (briefly) <span className="text-red-500">*</span></label>
                          <textarea name='callReason' value={input.callReason} onChange={handleInput} id='callReason' rows='3'
                            className={`rounded-[10px] border bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-orange-500 ${errors.callReason ? 'border-red-500' : 'border-gray-300'}`} required />
                          {errors.callReason && <span className='text-red-500 text-sm'>{errors.callReason}</span>}
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label className='text-lg font-bold leading-[1.6]'>Do you use any health supplements? <span className="text-red-500">*</span></label>
                          <div className='flex flex-col gap-2'>
                            <label className='flex items-center gap-2 cursor-pointer'><input type='radio' name='supplements' value='Yes' checked={input.supplements === 'Yes'} onChange={handleInput} className='h-4 w-4 accent-orange-500' required />Yes (please mention)</label>
                            <label className='flex items-center gap-2 cursor-pointer'><input type='radio' name='supplements' value='No' checked={input.supplements === 'No'} onChange={handleInput} className='h-4 w-4 accent-orange-500' required />No</label>
                            {input.supplements === 'Yes' && (<input type='text' name='supplementsDetails' value={input.supplementsDetails} onChange={handleInput} placeholder='Enter supplement details' className={`mt-2 rounded-[10px] border bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-orange-500 ${errors.supplementsDetails ? 'border-red-500' : 'border-gray-300'}`} required={input.supplements === 'Yes'} />)}
                          </div>
                          {errors.supplements && !input.supplementsDetails && input.supplements === 'Yes' && <span className='text-red-500 text-sm'>{errors.supplementsDetails || "Supplement details required"}</span>}
                          {errors.supplements && !input.supplements && <span className='text-red-500 text-sm'>{errors.supplements}</span>}
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label htmlFor='mlmAssociation' className='text-lg font-bold leading-[1.6]'>Are you/were you ever associated with a wellness/MLM brand? <span className="text-red-500">*</span></label>
                          <input type='text' name='mlmAssociation' value={input.mlmAssociation} onChange={handleInput} id='mlmAssociation' placeholder='If Yes, which brand? Else type No'
                            className={`rounded-[10px] border bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-orange-500 ${errors.mlmAssociation ? 'border-red-500' : 'border-gray-300'}`} required />
                          {errors.mlmAssociation && <span className='text-red-500 text-sm'>{errors.mlmAssociation}</span>}
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label className='text-lg font-bold leading-[1.6]'>How ready are you to start your health coaching business? <span className="text-red-500">*</span></label>
                          <select name='readiness' value={input.readiness} onChange={handleInput} className={`rounded-[10px] border bg-white px-6 py-[18px] font-bold text-black outline-none transition-all focus:border-orange-500 ${errors.readiness ? 'border-red-500' : 'border-gray-300'}`} required >
                            <option value=''>Select an option</option><option value='100% ready'>100% ready</option><option value='Curious but exploring'>Curious but exploring</option><option value='Not sure yet'>Not sure yet</option>
                          </select>
                          {errors.readiness && <span className='text-red-500 text-sm'>{errors.readiness}</span>}
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label className='text-lg font-bold leading-[1.6]'>Are you willing to invest time and effort to follow a step-by-step system? <span className="text-red-500">*</span></label>
                          <select name='commitment' value={input.commitment} onChange={handleInput} className={`rounded-[10px] border bg-white px-6 py-[18px] font-bold text-black outline-none transition-all focus:border-orange-500 ${errors.commitment ? 'border-red-500' : 'border-gray-300'}`} required >
                            <option value=''>Select an option</option><option value='Yes, fully committed'>Yes, fully committed</option><option value='Maybe, depends on the plan'>Maybe, depends on the plan</option><option value='No, not ready'>No, not ready</option>
                          </select>
                          {errors.commitment && <span className='text-red-500 text-sm'>{errors.commitment}</span>}
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label className='text-lg font-bold leading-[1.6]'>How much time weekly can you realistically commit? <span className="text-red-500">*</span></label>
                          <select name='timeCommitment' value={input.timeCommitment} onChange={handleInput} className={`rounded-[10px] border bg-white px-6 py-[18px] font-bold text-black outline-none transition-all focus:border-orange-500 ${errors.timeCommitment ? 'border-red-500' : 'border-gray-300'}`} required >
                            <option value=''>Select an option</option><option value='1–2 hours/day'>1–2 hours/day</option><option value='3–4 hours/day'>3–4 hours/day</option><option value='Weekends only'>Weekends only</option><option value='Not sure'>Not sure</option>
                          </select>
                          {errors.timeCommitment && <span className='text-red-500 text-sm'>{errors.timeCommitment}</span>}
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label className='text-lg font-bold leading-[1.6]'>Can you attend the Zoom call distraction-free and on time? <span className="text-red-500">*</span></label>
                          <div className='flex gap-4'>
                            <label className='flex items-center gap-2 cursor-pointer'><input type='radio' name='zoomAvailability' value='Yes' checked={input.zoomAvailability === 'Yes'} onChange={handleInput} className='h-4 w-4 accent-orange-500' required />Yes</label>
                            <label className='flex items-center gap-2 cursor-pointer'><input type='radio' name='zoomAvailability' value='No' checked={input.zoomAvailability === 'No'} onChange={handleInput} className='h-4 w-4 accent-orange-500' required />No</label>
                          </div>
                          {errors.zoomAvailability && <span className='text-red-500 text-sm'>{errors.zoomAvailability}</span>}
                        </div>
                        <div className='flex flex-col gap-y-[10px]'>
                          <label className='text-lg font-bold leading-[1.6]'>Do you understand this is a serious business-building opportunity? <span className="text-red-500">*</span></label>
                          <div className='flex gap-4'>
                            <label className='flex items-center gap-2 cursor-pointer'><input type='radio' name='businessUnderstanding' value='Yes' checked={input.businessUnderstanding === 'Yes'} onChange={handleInput} className='h-4 w-4 accent-orange-500' required />Yes</label>
                            <label className='flex items-center gap-2 cursor-pointer'><input type='radio' name='businessUnderstanding' value='No' checked={input.businessUnderstanding === 'No'} onChange={handleInput} className='h-4 w-4 accent-orange-500' required />No</label>
                          </div>
                          {errors.businessUnderstanding && <span className='text-red-500 text-sm'>{errors.businessUnderstanding}</span>}
                        </div>
                        <div className='flex items-center gap-x-3 gap-y-[10px] mt-4'>
                          <input
                            type='checkbox'
                            className="custom-checkbox relative appearance-none h-5 w-5 border border-gray-400 rounded-sm bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                            name='check' checked={input.check} onChange={() => handleCheckBox(!input.check)} id='signup-check-final' required
                          />
                          <label htmlFor='signup-check-final' className='text-sm leading-[1.6]'>
                            I have read and accept the
                            <Link to='/terms' className='font-bold text-orange-600 hover:underline'> Terms &amp; Conditions </Link>
                             and 
                            <Link to='/privacy' className='font-bold text-orange-600 hover:underline'> Privacy Policy</Link>. <span className="text-red-500">*</span>
                          </label>
                        </div>
                        <div className="flex gap-4 mt-7">
                            <button type='button' onClick={() => setCurrentStep(3)}
                                className='button flex-1 rounded-[50px] border-2 border-gray-300 bg-white py-4 text-black hover:bg-slate-100'>
                                Back
                            </button>
                            <button type='submit' disabled={loading}
                                className='button flex-1 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-orange-500 hover:border-orange-500 hover:text-white disabled:opacity-50'>
                                {loading ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </div>
                      </div>
                    )}

                    {currentStep === 1 && (
                      <>
                        <div className='relative z-[1] mb-8 mt-6 text-center font-bold before:absolute before:left-0 before:top-1/2 before:-z-[1] before:h-[1px] before:w-full before:-translate-y-1/2 before:bg-[#EAEDF0]'>
                          <span className='inline-block bg-white px-6'>Or</span>
                        </div>
                        <div className='flex flex-col gap-y-6'>
                          <button type='button' onClick={handleGoogleSignup}
                            className='button flex w-full items-center justify-center gap-x-4 rounded-[50px] border-2 border-[#EAEDF0] bg-white py-4 text-black hover:bg-slate-200 cursor-pointer'>
                            <img src='/assets/img/th-1/flat-color-icons-google.svg' alt='Google' width={24} height={24} className='h-6 w-6' />
                            <span>Sign up with Google</span>
                          </button>
                        </div>
                      </>
                    )}
                  </form>

                  {currentStep !== 4 && (
                    <div className='mt-10 text-center'>
                      Already have an account? &nbsp;
                      <Link to='/login' className='text-base font-semibold text-orange-600 hover:underline'>
                        Log in here
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Signup;
