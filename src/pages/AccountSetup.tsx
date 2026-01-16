import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Upload, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const AccountSetup = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [panNumber, setPanNumber] = useState("");
    const [panName, setPanName] = useState("");
    const [isFetchingPanName, setIsFetchingPanName] = useState(false);

    const steps = [
        { id: 1, label: "PAN details" },
        { id: 2, label: "GST selection" },
        { id: 3, label: "Bank details" },
        { id: 4, label: "Backup contact" },
        { id: 5, label: "Agreement" }
    ];

    // Validate PAN format
    const validatePAN = (pan: string): boolean => {
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(pan);
    };

    // Fetch PAN name from API
    const fetchPanName = async (pan: string) => {
        if (!validatePAN(pan)) {
            return;
        }

        setIsFetchingPanName(true);
        
        try {
            // OPTION 1: Using a real PAN verification API (you'll need to sign up for one)
            // Popular APIs include: RapidAPI PAN Verification, Karza, Signzy, etc.
            
            // Example with a hypothetical API:
            // const response = await fetch('https://api.example.com/pan/verify', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': 'Bearer YOUR_API_KEY'
            //     },
            //     body: JSON.stringify({ pan })
            // });
            // const data = await response.json();
            // if (data.valid && data.name) {
            //     setPanName(data.name);
            //     toast({
            //         title: "PAN Verified",
            //         description: "PAN details fetched successfully!",
            //     });
            // }

            // OPTION 2: Mock implementation for demonstration
            // Simulating API call with delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Mock data - in production, this would come from the API
            const mockPanData: Record<string, string> = {
                'ABCDE1234F': 'JOHN DOE',
                'ABCPD1234E': 'ETERNAL LTD',
                'ABCPE1234F': 'TECH INNOVATIONS PVT LTD',
            };

            const name = mockPanData[pan.toUpperCase()];
            
            if (name) {
                setPanName(name);
                toast({
                    title: "PAN Verified ✓",
                    description: "PAN name fetched successfully!",
                });
            } else {
                // If PAN not found in mock data, show message
                toast({
                    title: "PAN Not Found",
                    description: "Please enter the PAN name manually. (In production, this would fetch from a real API)",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error('Error fetching PAN details:', error);
            toast({
                title: "Error",
                description: "Failed to fetch PAN details. Please enter manually.",
                variant: "destructive",
            });
        } finally {
            setIsFetchingPanName(false);
        }
    };

    // Handle PAN input change
    const handlePanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toUpperCase();
        setPanNumber(value);
        
        // Auto-fetch when PAN is complete (10 characters)
        if (value.length === 10) {
            fetchPanName(value);
        } else {
            // Clear PAN name if user modifies PAN number
            setPanName("");
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative min-h-[85vh] py-12 md:py-20 px-4">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
                <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Page Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16" style={{ color: '#000000' }}>
                        Set up your District account
                    </h1>

                    <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                        {/* Sidebar - Steps Navigation */}
                        <div className="md:col-span-3">
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <ul className="space-y-4">
                                    {steps.map((step) => (
                                        <li key={step.id}>
                                            <button
                                                onClick={() => setCurrentStep(step.id)}
                                                className={`w-full text-left flex items-center gap-3 transition-all duration-200 ${currentStep === step.id
                                                    ? 'font-semibold'
                                                    : 'hover:text-gray-900'
                                                    }`}
                                                style={{ color: currentStep === step.id ? '#000000' : '#9ca3af' }}
                                            >
                                                <span
                                                    className={`text-sm font-medium`}
                                                    style={{ color: currentStep === step.id ? '#000000' : '#d1d5db' }}
                                                >
                                                    {String(step.id).padStart(2, '0')}
                                                </span>
                                                <span className="text-sm md:text-base">{step.label}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Main Content - Form */}
                        <div className="md:col-span-9">
                            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200">
                                {/* PAN Details Form */}
                                {currentStep === 1 && (
                                    <div className="space-y-6 animate-fade-up">
                                        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#000000' }}>PAN details</h2>

                                        {/* Input Fields */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Enter PAN */}
                                            <div className="space-y-2">
                                                <label className="text-sm" style={{ color: '#6b7280' }}>
                                                    Enter your PAN
                                                    {isFetchingPanName && <span className="ml-2 text-xs">(Verifying...)</span>}
                                                </label>
                                                <div className="relative">
                                                    <Input
                                                        type="text"
                                                        placeholder="ABCDE1234F"
                                                        className="bg-white border-gray-300 placeholder:text-gray-400 focus:border-primary rounded-lg h-12"
                                                        style={{ color: '#000000' }}
                                                        maxLength={10}
                                                        value={panNumber}
                                                        onChange={handlePanChange}
                                                    />
                                                    {isFetchingPanName && (
                                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                                            <Loader2 className="w-5 h-5 animate-spin" style={{ color: '#5331ea' }} />
                                                        </div>
                                                    )}
                                                </div>
                                                <p className="text-xs" style={{ color: '#9ca3af' }}>
                                                    PAN format: 5 letters, 4 digits, 1 letter
                                                </p>
                                            </div>

                                            {/* Enter PAN Name */}
                                            <div className="space-y-2">
                                                <label className="text-sm" style={{ color: '#6b7280' }}>Enter your PAN name / your company's name</label>
                                                <Input
                                                    type="text"
                                                    placeholder="Eternal Ltd."
                                                    className="bg-white border-gray-300 placeholder:text-gray-400 focus:border-primary rounded-lg h-12"
                                                    style={{ color: '#000000' }}
                                                    value={panName}
                                                    onChange={(e) => setPanName(e.target.value)}
                                                    disabled={isFetchingPanName}
                                                />
                                                {panName && (
                                                    <p className="text-xs" style={{ color: '#10b981' }}>
                                                        ✓ Auto-filled from PAN verification
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Upload PAN Card */}
                                        <div className="space-y-2 mt-6">
                                            <label className="text-sm" style={{ color: '#6b7280' }}>Upload your PAN card</label>
                                            <div
                                                className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-gray-400 transition-colors cursor-pointer bg-white"
                                            >
                                                <div className="flex flex-col items-center justify-center gap-3">
                                                    <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(83, 49, 234, 0.1)' }}>
                                                        <Upload className="w-6 h-6" style={{ color: '#5331ea' }} />
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="font-medium mb-1" style={{ color: '#000000' }}>Upload document</p>
                                                    </div>
                                                    <p className="text-xs" style={{ color: '#9ca3af' }}>Max 5MB • JPEG, JPG, PNG, PDF</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Continue Button */}
                                        <div className="pt-6">
                                            <Button
                                                onClick={() => setCurrentStep(2)}
                                                className="px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
                                                style={{
                                                    backgroundColor: '#d1d5db',
                                                    color: '#4b5563'
                                                }}
                                            >
                                                Continue
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {/* Placeholder for other steps */}
                                {currentStep === 2 && (
                                    <div className="space-y-6 animate-fade-up">
                                        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#000000' }}>GST selection</h2>
                                        <p style={{ color: '#6b7280' }}>GST selection form coming soon...</p>
                                    </div>
                                )}

                                {currentStep === 3 && (
                                    <div className="space-y-6 animate-fade-up">
                                        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#000000' }}>Bank details</h2>
                                        <p style={{ color: '#6b7280' }}>Bank details form coming soon...</p>
                                    </div>
                                )}

                                {currentStep === 4 && (
                                    <div className="space-y-6 animate-fade-up">
                                        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#000000' }}>Backup contact</h2>
                                        <p style={{ color: '#6b7280' }}>Backup contact form coming soon...</p>
                                    </div>
                                )}

                                {currentStep === 5 && (
                                    <div className="space-y-6 animate-fade-up">
                                        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#000000' }}>Agreement</h2>
                                        <p style={{ color: '#6b7280' }}>Agreement form coming soon...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AccountSetup;
