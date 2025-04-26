
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Brain,
  Calendar,
  Heart,
  Lock,
  MessageCircle,
  Shield,
  Sparkles,
  Users,
  ShieldCheck,
  Award,
  BadgeCheck,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";

const HomePage = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Mental Health Assessment",
      description:
        "Get a comprehensive mental health assessment using our advanced AI algorithm",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "24/7 AI Therapy Chat",
      description:
        "Access our AI therapy chatbot anytime, anywhere for immediate support",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Licensed Therapist Sessions",
      description:
        "Book virtual sessions with licensed therapists specialized in various areas",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Mental Wellness Tracking",
      description:
        "Track your mood, sleep, and other wellness metrics to monitor progress",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Private & Secure",
      description:
        "Your data is encrypted and protected with enterprise-grade security",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Support",
      description:
        "Connect with others in moderated support groups and forums",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "CreativeHub",
      testimonial:
        "GetWell has been a game-changer for our team's mental wellness. The AI chat is so helpful during stressful periods, and the therapist network is top-notch.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      company: "TechNova",
      testimonial:
        "I was skeptical at first, but GetWell's analytics and AI assessment gave me insights about my mental health that I never realized. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      name: "Emily Rodriguez",
      role: "HR Manager",
      company: "Global Industries",
      testimonial:
        "Implementing GetWell as our company's mental health solution has reduced stress levels and improved productivity. The analytics dashboard is incredibly useful.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    },
  ];

  const trustedCompanies = [
    {
      name: "MedTech Innovations",
      logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      description: "Leading Healthcare Technology"
    },
    {
      name: "HealthSync Solutions",
      logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      description: "Enterprise Wellness Platform"
    },
    {
      name: "NeuroCare Systems",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "Mental Health Technology"
    },
    {
      name: "PsychTech Research",
      logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      description: "AI-Driven Mental Health"
    },
    {
      name: "WellBeing Analytics",
      logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      description: "Wellness Data Insights"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="heading-xl mb-6 animate-fade-in">
                Your Mental Wellness Journey Starts Here
              </h1>
              <p className="text-lg md:text-xl mb-8 animate-fade-up">
                Access AI-powered therapy, licensed professionals, and mental health tools
                all in one platform. Start your journey to better mental health today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
                <Link to="/signup">
                  <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/products">
                  <Button  className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10 animate-fade-in">
              <div className="relative">
                <img
                  src="/lovable-uploads/96d3ce01-fccb-45c2-90c0-0cd6bd00a098.png"
                  alt="Healthcare Team"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Comprehensive Mental Health Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform offers a holistic approach to mental wellness, combining AI
              technology with human expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">How GetWell Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes mental healthcare accessible in just a few simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-blue-50 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Take the Assessment</h3>
              <p className="text-gray-600">
                Complete our AI-powered mental health assessment to get personalized
                insights and recommendations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-blue-50 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Explore Your Options</h3>
              <p className="text-gray-600">
                Access AI therapy chat, browse therapists, or join community support
                groups based on your needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-blue-50 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Start Your Journey</h3>
              <p className="text-gray-600">
                Begin your mental wellness journey with tools, resources, and support
                tailored to your unique needs.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button className="px-8">Learn More About Our Platform</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of individuals and organizations improving their mental
              wellbeing with GetWell.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">Start Your Mental Wellness Journey Today</h2>
            <p className="text-xl mb-8">
              Join thousands of people who have transformed their mental wellbeing with
              GetWell. Your journey to better mental health starts here.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
                  Sign Up Free
                </Button>
              </Link>
              <Link to="/pricing">
                <Button  className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Trusted by Innovative Healthcare Leaders</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              GetWell is powering mental health solutions for leading organizations, 
              combining cutting-edge technology with compassionate care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {trustedCompanies.map((company, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`} 
                    className="w-full h-40 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">{company.name}</h4>
                <p className="text-gray-600 text-sm">{company.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center mt-12 gap-8">
            <div className="flex items-center bg-soft-purple/10 px-4 py-2 rounded-full">
              <ShieldCheck className="h-6 w-6 text-primary mr-2" />
              <span className="text-sm text-gray-700">HIPAA Compliant</span>
            </div>
            <div className="flex items-center bg-soft-blue/10 px-4 py-2 rounded-full">
              <Award className="h-6 w-6 text-primary mr-2" />
              <span className="text-sm text-gray-700">Industry Certified</span>
            </div>
            <div className="flex items-center bg-soft-green/10 px-4 py-2 rounded-full">
              <BadgeCheck className="h-6 w-6 text-primary mr-2" />
              <span className="text-sm text-gray-700">10,000+ Users</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
