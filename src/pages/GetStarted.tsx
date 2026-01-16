import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const GetStarted = () => {
    const steps = [
        {
            number: "01",
            title: "Register as a creator",
            description: "Onboard within minutes with just your PAN card and bank details."
        },
        {
            number: "02",
            title: "Craft your first event",
            description: "Tell us all about your event, set up custom shows and price tickets just the way you want."
        },
        {
            number: "03",
            title: "Publish on District for free",
            description: "Submit your event and go live within 24 hours! Commissions will only be charged on tickets sold."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Main Content Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 py-20 md:py-32">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
                <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Left Side - Heading */}
                        <div className="text-left animate-fade-up">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Reach the right audience,
                                <br />
                                <span className="text-gradient">earn as your grow</span>
                            </h1>
                        </div>

                        {/* Right Side - Steps */}
                        <div className="space-y-8 md:space-y-10 animate-fade-up">
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className="relative animate-slide-in"
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <div className="flex gap-4 md:gap-6">
                                        {/* Step Number */}
                                        <div className="flex-shrink-0">
                                            <span
                                                className="text-4xl md:text-5xl font-bold"
                                                style={{ color: '#5331ea' }}
                                            >
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* Step Content */}
                                        <div className="flex-1 pt-1">
                                            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-white/60 text-sm md:text-base leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* CTA Button */}
                            <div className="pt-4 animate-bounce-in" style={{ animationDelay: '0.6s' }}>
                                <Button
                                    className="px-6 py-6 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 group"
                                    style={{
                                        backgroundColor: '#000000',
                                        color: 'white'
                                    }}
                                >
                                    Start your journey
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div
                    className="absolute top-1/3 left-20 w-32 h-32 rounded-full opacity-10 animate-float"
                    style={{ backgroundColor: '#5331ea', filter: 'blur(60px)' }}
                ></div>
                <div
                    className="absolute bottom-1/3 right-20 w-40 h-40 rounded-full opacity-10 animate-float"
                    style={{
                        backgroundColor: '#5331ea',
                        filter: 'blur(80px)',
                        animationDelay: '1.5s'
                    }}
                ></div>
            </section>

            <Footer />
        </div>
    );
};

export default GetStarted;
