import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { useDispatch } from 'react-redux';
import { registerSuccess } from '../../redux/authSlice';
import swal from 'sweetalert';

const BASE_API_URL = 'https://api.funnelseye.com';

// SVG Components (assuming these are in a separate file or defined as above)
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const RoleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
);

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
        <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
        />
        <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
        />
        <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
        />
        <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
        />
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
        <path
            fill="#1877F2"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        />
    </svg>
);

const OtpInput = ({ length = 6, onOtpSubmit }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.value !== "" && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }

        if (newOtp.join("").length === length) {
            onOtpSubmit(newOtp.join(""));
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").slice(0, length);
        if (!/^\d+$/.test(pasteData)) return;

        const newOtp = [...otp];
        for (let i = 0; i < length; i++) {
            newOtp[i] = pasteData[i] || "";
        }
        setOtp(newOtp);

        if (pasteData.length === length) {
            onOtpSubmit(pasteData);
            inputRefs.current[length - 1].focus();
        }
    };

    return (
        <div className="flex justify-center gap-3" onPaste={handlePaste}>
            {otp.map((value, index) => (
                <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                />
            ))}
        </div>
    );
};

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation(); // Get location object to read state

    const [step, setStep] = useState('details_input');
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        role: 'client',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null); // New state for selected plan

    // Effect to check for selected plan from navigation state
    useEffect(() => {
        if (location.state && location.state.plan) {
            setSelectedPlan(location.state.plan);
            swal('Plan Selected!', `You have selected the ${location.state.plan.name} plan. Please complete your registration.`, 'info');
        }
    }, [location.state]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const handleRequestOtp = async (e) => {
        e.preventDefault();

        // 1. Check if all required fields are filled
        if (!input.name || !input.email || !input.password || !input.role) {
            swal('Oops!', 'Please fill in all the required fields.', 'error');
            return;
        }

        // 2. Check if a subscription plan is selected
if (!selectedPlan) {
        swal({
            title: "Subscription Plan Required",
            text: "Please select a subscription plan before registering.",
            icon: "warning",
            buttons: {
                cancel: "No Thanks",
                confirm: {
                    text: "Go to Pricing",
                    value: true,
                },
            },
        }).then((willRedirect) => {
            if (willRedirect) {
                // First navigate to home, then scroll to pricing
                navigate('/');
                // Use setTimeout to ensure the page has loaded before scrolling
                setTimeout(() => {
                    const pricingSection = document.getElementById('pricing');
                    if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        });
        return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(`${BASE_API_URL}/api/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // 3. Include the selected plan in the body
                body: JSON.stringify({ ...input, subscriptionPlan: selectedPlan.id }), // Assuming plan has an 'id'
            });
            const data = await response.json();

            if (response.ok && data.success) {
                swal('Success!', data.message || 'An OTP has been sent to your email.', 'success');
                setStep('otp_input');
            } else {
                swal('Registration Error', data.message || 'Could not process registration.', 'error');
            }
        } catch (error) {
            console.error('Registration error:', error);
            swal('Connection Error', 'Could not connect to the server.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async (otpValue) => {
        if (!otpValue || otpValue.length < 6) {
            swal('Oops!', 'Please enter a valid 6-digit OTP.', 'error');
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch(`${BASE_API_URL}/api/auth/verify-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: input.email, otp: otpValue }),
            });
            const data = await response.json();

            if (response.ok && data.success) {
                dispatch(registerSuccess({ user: data.user, token: data.token }));
                await swal('Success!', data.message || 'Your account has been created successfully!', 'success');
                navigate('/dashboard');
            } else {
                swal('OTP Verification Failed', data.message || 'Invalid OTP. Please try again.', 'error');
            }
        } catch (error) {
            console.error('OTP verification error:', error);
            swal('Connection Error', 'Could not connect to the server.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        {step === 'details_input' ? 'Create Your Account' : 'Verify Your Email'}
                    </h1>
                    <p className="mt-2 text-gray-600">
                        {step === 'details_input' ? 'Fill in your details to get started' : 'Enter the OTP sent to your email'}
                    </p>
                    {selectedPlan && step === 'details_input' && (
                        <p className="mt-2 text-orange-600 font-semibold">
                            Selected Plan: {selectedPlan.name} ({selectedPlan.price})
                        </p>
                    )}
                </div>

                <div className="bg-white rounded-xl shadow-md p-8 sm:p-10">
                    {step === 'details_input' ? (
                        <>
                            <form onSubmit={handleRequestOtp} className="space-y-5">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <UserIcon />
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={input.name}
                                                onChange={handleInputChange}
                                                className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <EmailIcon />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={input.email}
                                                onChange={handleInputChange}
                                                className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <LockIcon />
                                            </div>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={input.password}
                                                onChange={handleInputChange}
                                                className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                                placeholder="••••••••"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                                            Select Role
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <RoleIcon />
                                            </div>
                                            <select
                                                id="role"
                                                name="role"
                                                value={input.role}
                                                onChange={handleInputChange}
                                                className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition appearance-none"
                                                required
                                            >
                                                <option value="client">Client</option>
                                                <option value="coach">Coach</option>
                                                <option value="admin">Admin</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition ${
                                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center">
                                            <svg
                                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Registering...
                                        </span>
                                    ) : (
                                        'Register & Get OTP'
                                    )}
                                </button>
                            </form>

                            {/* "Or continue with" divider - only shown in details input step */}
                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center items-center py-2 px-4 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition"
                                    >
                                        <GoogleIcon />
                                        <span className="ml-2">Google</span>
                                    </button>

                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center items-center py-2 px-4 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition"
                                    >
                                        <FacebookIcon />
                                        <span className="ml-2">Facebook</span>
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="space-y-6">
                            <p className="text-center text-gray-600">
                                We've sent a 6-digit code to <span className="font-semibold text-gray-900">{input.email}</span>
                            </p>

                            <OtpInput length={6} onOtpSubmit={handleVerifyOtp} />

                            {isLoading && (
                                <p className="text-center text-orange-600 font-medium animate-pulse">
                                    Verifying OTP...
                                </p>
                            )}

                            <button
                                onClick={() => setStep('details_input')}
                                className="w-full text-sm text-center text-gray-600 hover:text-orange-600 font-medium"
                                disabled={isLoading}
                            >
                                Change Email Address
                            </button>
                        </div>
                    )}

                    {/* "Don't have an account?" section - only shown in details input step */}
                    {step === 'details_input' && (
                        <div className="mt-6 text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500">
                                Log In
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Signup;