import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

const ListEvents = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 py-20 md:py-32">
                {/* Background Gradient Effects */}
                <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
                <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-glow-hero opacity-40 pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 md:mb-8 animate-fade-up"
                        style={{
                            backgroundColor: 'rgba(83, 49, 234, 0.15)',
                            border: '1px solid rgba(83, 49, 234, 0.3)'
                        }}>
                        <Sparkles className="w-4 h-4" style={{ color: '#5331ea' }} />
                        <span className="text-white/90 text-sm font-medium">
                            Elevate your Events to new heights
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight animate-fade-up">
                        List all your
                        <br />
                        <span className="text-gradient">"Going-Out" events</span> with us
                    </h1>

                    {/* Description */}
                    <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-up">
                        Maximise your event's reach by listing it on District, where millions discover and book exciting events every day.
                    </p>

                    {/* CTA Button */}
                    <Link to="/get-started">
                        <Button
                            className="px-8 py-6 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-bounce-in"
                            style={{
                                backgroundColor: '#5331ea',
                                color: 'white',
                                boxShadow: '0 10px 30px rgba(83, 49, 234, 0.4)'
                            }}
                        >
                            Get started
                        </Button>
                    </Link>

                    {/* Floating Elements */}
                    <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full opacity-20 animate-float"
                        style={{ backgroundColor: '#5331ea', filter: 'blur(40px)' }}>
                    </div>
                    <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full opacity-20 animate-float"
                        style={{
                            backgroundColor: '#5331ea',
                            filter: 'blur(60px)',
                            animationDelay: '1s'
                        }}>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ListEvents;
