
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Board-certified psychiatrist with 15+ years of experience in digital therapeutics and mental health technology.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
    },
    {
      name: "Dr. Michael Chen",
      role: "CTO & Co-Founder",
      bio: "AI researcher and psychiatrist specializing in mental health technology integration.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Medical Officer",
      bio: "Specialist in digital therapeutics with extensive research in mental health interventions.",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f",
    },
    {
      name: "Dr. David Williams",
      role: "Head of Clinical Research",
      bio: "Leading researcher in behavioral health technology and evidence-based therapeutic approaches.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    },
  ];

  const values = [
    {
      title: "Clinical Excellence",
      description: "Our platform is built on evidence-based therapeutic approaches validated by leading mental health professionals.",
    },
    {
      title: "Patient-First Care",
      description: "We prioritize patient outcomes and well-being in every aspect of our service delivery.",
    },
    {
      title: "Medical Privacy",
      description: "HIPAA-compliant platform ensuring the highest standards of patient data protection and confidentiality.",
    },
    {
      title: "Technology Innovation",
      description: "Leveraging cutting-edge AI and telemedicine to enhance mental healthcare delivery.",
    },
    {
      title: "Research-Driven",
      description: "Continuously evolving our approach based on clinical research and patient outcomes data.",
    },
    {
      title: "Comprehensive Care",
      description: "Providing integrated mental health solutions that address the full spectrum of patient needs.",
    },
  ];

  return (
    <>
      {/* Hero Section with Medical Theme */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Mental Healthcare Through Technology
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're a team of medical professionals and technology experts dedicated to making mental healthcare accessible and effective for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section with Medical Office Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded by leading psychiatrists and healthcare technologists, GetWell 
                emerged from a vision to transform mental healthcare delivery through 
                innovative technology and evidence-based practices.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team of medical professionals recognized the need for accessible, 
                high-quality mental healthcare that could reach patients wherever they are.
              </p>
              <p className="text-lg text-gray-700">
                Today, we serve thousands of patients worldwide, combining clinical 
                expertise with advanced technology to deliver personalized mental 
                healthcare solutions.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e6a8f657ebc2"
                alt="Modern medical office"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're guided by a clear mission and a strong set of core values that
              inform everything we do.
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To make effective mental healthcare accessible to everyone by combining
                cutting-edge technology with human expertise and compassion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines expertise in mental health, technology, and healthcare
              to build the best platform for our users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 overflow-hidden rounded-full border-4 border-blue-100 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section with Medical Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clinical Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering measurable improvements in mental health outcomes through 
              evidence-based care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-xl font-medium mb-2">Patient Satisfaction</p>
              <p className="text-gray-600">
                Of our patients report improved mental well-being after treatment
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-xl font-medium mb-2">Care Availability</p>
              <p className="text-gray-600">
                Round-the-clock access to mental health support
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-xl font-medium mb-2">Patients Served</p>
              <p className="text-gray-600">
                Successfully treating patients across multiple countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                alt="Healthcare professional using technology"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Healthcare Technology</h2>
              <p className="text-lg text-gray-700 mb-6">
                At GetWell, we're integrating advanced AI algorithms and medical expertise 
                to deliver personalized mental health care at scale.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our platform uses evidence-based therapeutic approaches, adapted to each 
                individual's unique needs and delivered through an easy-to-use digital interface.
              </p>
              <p className="text-lg text-gray-700">
                We're committed to continuous innovation in mental health technology, 
                partnering with leading research institutions to stay at the forefront 
                of digital therapeutics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research and Publications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research & Publications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team actively contributes to advancing the field of digital mental healthcare
              through research and academic publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Digital Therapeutics for Anxiety Disorders</h3>
              <p className="text-gray-700 mb-3">Journal of Digital Health, 2024</p>
              <p className="text-gray-600">A randomized controlled trial demonstrating the efficacy of our digital intervention for generalized anxiety disorder.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">AI-Assisted CBT: Clinical Outcomes</h3>
              <p className="text-gray-700 mb-3">Mental Health Technology Review, 2023</p>
              <p className="text-gray-600">Analysis of treatment outcomes from AI-enhanced cognitive behavioral therapy compared to traditional methods.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Telemedicine for Depression Management</h3>
              <p className="text-gray-700 mb-3">Psychiatric Services Online, 2023</p>
              <p className="text-gray-600">Multi-site study on remote mental healthcare delivery systems and patient engagement factors.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Digital Biomarkers in Mental Health</h3>
              <p className="text-gray-700 mb-3">Journal of Behavioral Data Science, 2022</p>
              <p className="text-gray-600">Exploring novel digital biomarkers for early detection of mental health condition changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us on Our Mission</h2>
            <p className="text-xl mb-8">
              Whether you're looking for support, interested in joining our team, or
              want to partner with us, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/careers">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Careers at GetWell
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
