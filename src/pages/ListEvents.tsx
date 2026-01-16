import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

const ListEvents = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 py-20 md:py-32">
                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 md:mb-8 animate-fade-up"
                        style={{
                            backgroundColor: 'rgba(83, 49, 234, 0.1)',
                            border: '1px solid rgba(83, 49, 234, 0.3)'
                        }}>
                        <Sparkles className="w-4 h-4" style={{ color: '#5331ea' }} />
                        <span style={{ color: '#1f2937' }} className="text-sm font-medium">
                            Elevate your Events to new heights
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight animate-fade-up" style={{ color: '#000000' }}>
                        List all your
                        <br />
                        <span className="text-gradient">"Going-Out" events</span> with us
                    </h1>

                    {/* Description */}
                    <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-up" style={{ color: '#6b7280' }}>
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

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ListEvents;
