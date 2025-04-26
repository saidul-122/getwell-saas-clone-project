
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, HelpCircle, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PricingCard from "@/components/PricingCard";

const PricingPage = () => {
  const pricingPlans = [
    {
      title: "Free",
      price: "$0",
      description: "Basic access to mental wellness tools",
      features: [
        "AI Mental Health Assessment",
        "Limited AI Chat (5 conversations/month)",
        "Basic wellness tracking",
        "Access to community forums",
        "Limited resource library access",
      ],
      isPopular: false,
      ctaText: "Sign Up Free",
      ctaLink: "/signup",
    },
    {
      title: "Personal",
      price: "$19",
      description: "Full access for individual users",
      features: [
        "Unlimited AI Chat conversations",
        "Full wellness tracking features",
        "1 therapy session/month",
        "Complete resource library access",
        "Progress analytics dashboard",
        "Guided meditation library",
      ],
      isPopular: true,
      ctaText: "Get Started",
      ctaLink: "/signup?plan=personal",
    },
    {
      title: "Professional",
      price: "$49",
      description: "Enhanced features for deeper support",
      features: [
        "Everything in Personal plan",
        "4 therapy sessions/month",
        "Priority support response",
        "Advanced analytics and reporting",
        "Personalized wellness plan",
        "Progress sharing with providers",
      ],
      isPopular: false,
      ctaText: "Choose Professional",
      ctaLink: "/signup?plan=professional",
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For organizations and healthcare providers",
      features: [
        "Everything in Professional plan",
        "Custom number of therapy sessions",
        "Admin dashboard and team management",
        "White-label options available",
        "API access for integration",
        "Dedicated account manager",
      ],
      isPopular: false,
      ctaText: "Contact Sales",
      ctaLink: "/contact",
    },
  ];

  const faqs = [
    {
      question: "How does the AI therapy chat work?",
      answer:
        "Our AI therapy chat uses natural language processing to understand your concerns and provide evidence-based responses. It's trained on cognitive behavioral therapy principles and can help with stress management, anxiety, depression, and more. However, it's not a replacement for a human therapist in severe cases.",
    },
    {
      question: "Can I switch between plans?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference for the remainder of your billing cycle. If you downgrade, the change will take effect at the start of your next billing cycle.",
    },
    {
      question: "Are the therapists licensed professionals?",
      answer:
        "Yes, all therapists on our platform are licensed mental health professionals with verified credentials. They include psychologists, licensed clinical social workers, licensed professional counselors, and marriage and family therapists.",
    },
    {
      question: "Is my data kept private and secure?",
      answer:
        "Absolutely. We take privacy extremely seriously. All data is encrypted end-to-end, and we comply with HIPAA regulations. Your personal information is never sold to third parties, and you can delete your data at any time.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your plan until the end of your current billing cycle.",
    },
    {
      question: "Do you offer any discounts for students or healthcare workers?",
      answer:
        "Yes, we offer special pricing for students, healthcare workers, and non-profit organizations. Please contact our support team with your credentials to apply for these discounts.",
    },
  ];

  const comparisonFeatures = [
    {
      name: "AI Mental Health Assessment",
      free: true,
      personal: true,
      professional: true,
      enterprise: true,
    },
    {
      name: "AI Therapy Chat",
      free: "Limited (5/month)",
      personal: "Unlimited",
      professional: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      name: "Therapy Sessions",
      free: false,
      personal: "1/month",
      professional: "4/month",
      enterprise: "Custom",
    },
    {
      name: "Wellness Tracking",
      free: "Basic",
      personal: "Advanced",
      professional: "Advanced",
      enterprise: "Advanced",
    },
    {
      name: "Resource Library",
      free: "Limited",
      personal: "Full Access",
      professional: "Full Access",
      enterprise: "Full Access",
    },
    {
      name: "Community Support",
      free: true,
      personal: true,
      professional: true,
      enterprise: true,
    },
    {
      name: "Progress Analytics",
      free: "Basic",
      personal: "Advanced",
      professional: "Advanced",
      enterprise: "Advanced",
    },
    {
      name: "Guided Meditations",
      free: "Limited",
      personal: "Full Library",
      professional: "Full Library",
      enterprise: "Custom Library",
    },
    {
      name: "Priority Support",
      free: false,
      personal: false,
      professional: true,
      enterprise: true,
    },
    {
      name: "API Access",
      free: false,
      personal: false,
      professional: false,
      enterprise: true,
    },
    {
      name: "Admin Dashboard",
      free: false,
      personal: false,
      professional: false,
      enterprise: true,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl mb-8">
              Choose the plan that best fits your mental wellness journey. All plans
              include our core features to support your wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>

          <div className="text-center mt-12 text-gray-600">
            <p className="flex items-center justify-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Need help choosing? <Link to="/contact" className="text-primary ml-1 underline">Contact us</Link> for personalized guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">Feature Comparison</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A detailed comparison of what's included in each plan.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-700">Feature</th>
                  <th className="px-6 py-4 text-center text-gray-700">Free</th>
                  <th className="px-6 py-4 text-center text-gray-700">Personal</th>
                  <th className="px-6 py-4 text-center text-gray-700">Professional</th>
                  <th className="px-6 py-4 text-center text-gray-700">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.free === "boolean" ? (
                        feature.free ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.free}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.personal === "boolean" ? (
                        feature.personal ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.personal}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.professional === "boolean" ? (
                        feature.professional ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">
                          {feature.professional}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">
                          {feature.enterprise}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our plans and features.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
                  <AccordionTrigger className="text-left text-lg font-medium px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h3 className="heading-md mb-4">Need a Custom Solution?</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our enterprise plan is perfect for organizations looking to provide
                  mental health support for their employees or patients. Contact our
                  sales team to discuss your specific needs.
                </p>
                <div className="flex space-x-4">
                  <Link to="/contact">
                    <Button size="lg">Contact Sales</Button>
                  </Link>
                  <Link to="/case-studies">
                    <Button variant="outline" size="lg">View Case Studies</Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-blue-50 p-8 rounded-xl text-center">
                  <h4 className="font-bold text-lg mb-3">Enterprise Features</h4>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>White-label options</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Team management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Usage analytics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>API integration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Dedicated support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">Start Your Mental Wellness Journey Today</h2>
            <p className="text-xl mb-8">
              Join thousands of individuals and organizations who have transformed
              their approach to mental health with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-lg shadow-md">
                  Get Started Free
                </button>
              </Link>
              <Link to="/products">
                <button className="border border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-lg">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
