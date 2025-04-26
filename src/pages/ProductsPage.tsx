
import React from "react";
import { Button } from "@/components/ui/button"; // Fixed import
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Calendar,
  ChartBar,
  Clock,
  Database,
  FileText,
  Heart,
  MessageCircle,
  Shield,
  Users,
} from "lucide-react";

const ProductsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Product Features</h1>
            <p className="text-xl mb-8">
              Discover our comprehensive suite of mental health tools designed to support
              your wellbeing journey.
            </p>
          </div>
        </div>
      </section>

      {/* AI Assessment Feature */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-primary mr-3" />
                <h3 className="heading-md">AI Mental Health Assessment</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Our AI-powered assessment analyzes your responses to provide
                personalized insights into your mental wellbeing. The assessment takes
                just 5-10 minutes to complete and gives you actionable recommendations.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Evidence-based assessment methodology
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Personalized recommendations based on your responses
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Track progress with repeat assessments
                  </span>
                </li>
              </ul>
              <Link to="/signup">
                <button className="btn-primary flex items-center">
                  Try the Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="AI Assessment Interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Feature */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-12">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 text-primary mr-3" />
                <h3 className="heading-md">24/7 AI Therapy Chat</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Access immediate support through our AI-powered therapy chatbot.
                Available 24/7, it helps you process thoughts, learn coping strategies,
                and provides guidance when you need it most.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Available anytime, anywhere with internet connection
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Evidence-based cognitive behavioral therapy techniques
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Seamless referral to human therapists when needed
                  </span>
                </li>
              </ul>
              <Link to="/signup">
                <button className="btn-primary flex items-center">
                  Start Chatting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  alt="AI Therapy Chat Interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapist Feature */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-primary mr-3" />
                <h3 className="heading-md">Licensed Therapist Sessions</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Connect with licensed therapists through virtual sessions. Browse
                profiles, read reviews, and find the perfect match for your unique
                mental health needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Extensive network of licensed and vetted professionals
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Flexible scheduling with video, audio, or text options
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Specialists in various mental health areas
                  </span>
                </li>
              </ul>
              <Link to="/signup">
                <button className="btn-primary flex items-center">
                  Browse Therapists
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="Therapist Session Interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Additional Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform offers a comprehensive suite of tools designed to support
              your mental health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Heart className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Wellness Tracking</h3>
              <p className="text-gray-600 mb-6">
                Track your mood, sleep, meditation, and other wellness metrics to
                monitor your progress and identify patterns.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Daily mood check-ins</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Sleep quality monitoring</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Activity correlation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <Users className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Community Support</h3>
              <p className="text-gray-600 mb-6">
                Connect with others facing similar challenges through moderated support
                groups and forums.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Moderated groups</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Topic-based forums</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Expert-led discussions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <FileText className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Resource Library</h3>
              <p className="text-gray-600 mb-6">
                Access a vast library of articles, videos, and exercises designed to
                support your mental health journey.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Expert-written articles</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Guided meditation videos</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Interactive exercises</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <ChartBar className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Progress Analytics</h3>
              <p className="text-gray-600 mb-6">
                View detailed analytics and insights about your mental health journey
                to track improvements over time.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Progress visualization</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Customizable dashboards</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Exportable reports</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <Clock className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Mindfulness Exercises</h3>
              <p className="text-gray-600 mb-6">
                Access guided meditation, breathing exercises, and mindfulness practices
                to reduce stress and anxiety.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Guided meditations</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Breathing techniques</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Sleep stories</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <Shield className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Privacy & Security</h3>
              <p className="text-gray-600 mb-6">
                Your data is protected with enterprise-grade encryption and strict
                privacy protocols.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">HIPAA compliant</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">End-to-end encryption</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">Customizable privacy controls</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">Ready to Transform Your Mental Wellbeing?</h2>
            <p className="text-xl mb-8">
              Join thousands of individuals who have improved their mental health with
              our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-lg shadow-md">
                  Get Started Free
                </button>
              </Link>
              <Link to="/pricing">
                <button className="border border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-lg">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
