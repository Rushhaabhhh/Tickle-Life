'use client';

import React, { useState, useEffect } from 'react';

const PSPHomepage = () => {
  // State management
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showQualificationModal, setShowQualificationModal] = useState(false);
  const [showComplianceModal, setShowComplianceModal] = useState(false);
  interface CalculatorResult {
    rate: number;
    fee: string;
    setupDays: string;
  }

  const [calculatorResult, setCalculatorResult] = useState<CalculatorResult | null>(null);
  const [formData, setFormData] = useState({
    geography: '',
    vertical: ''
  });

  // Testimonials data
  const testimonials = [
    {
      text: "TrustPay transformed our iGaming operations across Europe. Their compliance expertise and technical reliability are unmatched.",
      author: "— Marcus Chen, CEO at EuroGaming Ltd"
    },
    {
      text: "Finally found a PSP that understands Forex. 95% approval rates in our key markets and excellent fraud protection.",
      author: "— Sarah Ahmed, Director at ForexPro International"
    },
    {
      text: "As an agent, I've never seen merchant approval rates this high. TrustPay's transparency and support are exceptional.",
      author: "— David Rodriguez, Senior Payment Agent"
    }
  ];

  // Rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle form submission
  const handleCalculatorSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    if (!formData.geography || !formData.vertical) return;
    
    // Simulate calculation
    const approvalRates = {
      'eu-igaming': 85,
      'india-igaming': 92,
      'gcc-forex': 88,
      'uk-adult': 78,
      'apac-crypto': 82
    };
    
    const key = `${formData.geography}-${formData.vertical}` as keyof typeof approvalRates;
    const rate = approvalRates[key] ?? Math.floor(Math.random() * 30) + 60;
    const fee = (Math.random() * 1 + 2).toFixed(2);
    const setupDays = `${Math.floor(Math.random() * 3) + 1}-${Math.floor(Math.random() * 3) + 3}`;
    
    setCalculatorResult({
      rate,
      fee,
      setupDays
    });
  };

  // Scroll to calculator
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Modal component
  const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 backdrop-blur z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[80vh] overflow-y-auto relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-6 text-2xl text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            ×
          </button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 text-xl">
      {/* Hero Section */}
      <section className="relative bg-[linear-gradient(135deg,#1e3a8a_0%,#3b82f6_100%)] text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 18" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern
                id="bgPattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <polygon fill="currentColor" points="0,20 20,0 20,20" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bgPattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-5 relative z-10 p-5">
          <div className="text-center">
            <h1 className="md:text-9xl font-bold mb-5 drop-shadow-sm">
              The trusted PSP for regulated, high-risk merchants
            </h1>
            <p className="md:text mb-8 text-amber-300 font-semibold text-right p-10">
              Not everyone is eligible — see if you fit.
            </p>

            <div className="flex justify-between items-start mt-10 p-10">
            {/* Trust Badges on Left */}
            <div className="flex flex-col gap-4">
              {['🛡️ PCI DSS Level 1', '🏦 27 Bank Partners', '🌍 Multi-Geo Licensed', '🏆 Industry Awards'].map((badge, index) => (
                <div
                  key={index}
                  className="px-9 py-3 rounded-full backdrop-blur border border-white border-opacity-20"
                >
                  {badge}
                </div>
              ))}
            </div>

            {/* Button on Right */}
            <button
              onClick={() => setShowQualificationModal(true)}
              className="bg-amber-500 hover:bg-amber-600 text-white px-14 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-amber-500/30 cursor-pointer"
            >
              Check if you qualify
            </button>
          </div>

            
            {/* Stats */}
            <div className="flex justify-center gap-10 mt-8 flex-wrap">
              {[
                { number: '27', label: 'Bank Partners' },
                { number: '99.99%', label: 'Uptime' },
                { number: '<48h', label: 'Approval Time' },
                { number: '15+', label: 'Licensed Geos' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-5xl font-bold text-amber-300">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            What Makes Us Unique
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {[
              {
                icon: '🌍',
                title: 'Geo Flexibility',
                description: 'Process payments across 15+ regulated jurisdictions with local acquiring and compliance expertise.'
              },
              {
                icon: '🧩',
                title: 'Modular Product Stack',
                description: 'Mix and match payment methods, risk tools, and reporting features to fit your exact business needs.'
              },
              {
                icon: '🛡️',
                title: 'Custom Fraud & Routing',
                description: 'AI-powered fraud detection and intelligent routing optimize your approval rates and minimize chargebacks.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl border-2 border-gray-200 transition-all duration-450 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500">
                <div className="text-5xl mb-5">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-8">
            <button
              onClick={scrollToCalculator}
              className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              Try eligibility calculator
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-2">🎯 90%+ approval rates in India & GCC markets</h3>
            <p>Our localized approach delivers exceptional results where others struggle</p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Trusted by Industry Leaders
          </h2>
          
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center mb-10 max-w-3xl mx-auto">
            <div className="text-xl italic mb-5 text-gray-600 transition-opacity duration-300">
              {testimonials[currentTestimonial].text}
            </div>
            <div className="font-semibold text-blue-900 transition-opacity duration-300">
              {testimonials[currentTestimonial].author}
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setShowComplianceModal(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              ✅ Compliance Verified - View Certificates
            </button>
          </div>
        </div>
      </section>

      {/* Merchant/Agent Split Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Are you a merchant or agent?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 mb-8">
            {[
              {
                title: '💳 Process Payments',
                description: 'Get approved for high-risk merchant processing with transparent pricing and instant dashboard access.'
              },
              {
                title: '🤝 Agent? Refer & Earn',
                description: 'Join our agent network and earn competitive commissions with industry-leading merchant approval rates.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900 to-blue-500 text-white p-10 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-blue-900/40">
                <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                <p className="text-lg opacity-90">{card.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center text-gray-600 text-lg">
            Get instant dashboard access with transparent commissions. 90%+ merchant approval rates for our agents.
          </div>
        </div>
      </section>

      {/* Interactive Eligibility Calculator */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Eligibility Calculator
          </h2>
          
          <div className="bg-white p-10 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <p className="text-center mb-8 text-lg text-gray-600">
              Pick your geo & vertical, see live approval odds and pricing
            </p>
            
            <form onSubmit={handleCalculatorSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold text-blue-900">
                  Select Geography :
                </label>
                <select
                  value={formData.geography}
                  onChange={(e) => setFormData({...formData, geography: e.target.value})}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl text-base focus:border-blue-500 focus:outline-none cursor-pointer"
                  required
                >
                  <option value="">Choose your region...</option>
                  <option value="eu">European Union</option>
                  <option value="uk">United Kingdom</option>
                  <option value="india">India</option>
                  <option value="gcc">GCC Countries</option>
                  <option value="latam">Latin America</option>
                  <option value="apac">Asia Pacific</option>
                </select>
              </div>
              
              <div>
                <label className="block mb-2 font-semibold text-blue-900">
                  Select Business Vertical :
                </label>
                <select
                  value={formData.vertical}
                  onChange={(e) => setFormData({...formData, vertical: e.target.value})}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl text-base focus:border-blue-500 focus:outline-none cursor-pointer"
                  required
                >
                  <option value="">Choose your industry...</option>
                  <option value="igaming">iGaming</option>
                  <option value="forex">Forex/CFD Trading</option>
                  <option value="adult">Adult Entertainment</option>
                  <option value="crypto">Cryptocurrency</option>
                  <option value="nutra">Nutraceuticals</option>
                  <option value="travel">High-Risk Travel</option>
                  <option value="cbd">CBD/Cannabis</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 cursor-pointer"
              >
                Calculate My Approval Odds
              </button>
            </form>
            
            {calculatorResult && (
              <div className="mt-5 p-5 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
                <h4 className="text-emerald-600 font-bold mb-2">Your Eligibility Results:</h4>
                <div className="space-y-1">
                  <div><strong>Approval Probability: {calculatorResult.rate}%</strong></div>
                  <div><strong>Estimated Processing Fee: {calculatorResult.fee}%</strong></div>
                  <div><strong>Setup Time: {calculatorResult.setupDays} business days</strong></div>
                </div>
                <button
                  onClick={() => setShowQualificationModal(true)}
                  className="mt-4 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer"
                >
                  Start Full Application
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Qualification Modal */}
      <Modal isOpen={showQualificationModal} onClose={() => setShowQualificationModal(false)}>
        <h3 className="text-2xl font-bold mb-5 text-blue-900">Quick Qualification Check</h3>
        <form className="space-y-5">
          <div>
            <label className="block mb-2 font-semibold text-blue-900">Business Type:</label>
            <select className="w-full p-3 border-2 border-gray-200 rounded-xl" required>
              <option value="">Select...</option>
              <option>iGaming/Online Casino</option>
              <option>Forex/CFD Trading</option>
              <option>Adult Entertainment</option>
              <option>Cryptocurrency Exchange</option>
              <option>Other High-Risk</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-blue-900">Monthly Volume (USD):</label>
            <select className="w-full p-3 border-2 border-gray-200 rounded-xl" required>
              <option value="">Select...</option>
              <option>$50K - $250K</option>
              <option>$250K - $1M</option>
              <option>$1M - $5M</option>
              <option>$5M+</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-blue-900">Primary Markets:</label>
            <select className="w-full p-3 border-2 border-gray-200 rounded-xl" required>
              <option value="">Select...</option>
              <option>Europe</option>
              <option>Asia Pacific</option>
              <option>India/GCC</option>
              <option>Latin America</option>
              <option>Multiple Regions</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition-colors duration-300 cursor-pointer"
          >
            Check My Eligibility
          </button>
        </form>
      </Modal>

      {/* Compliance Modal */}
      <Modal isOpen={showComplianceModal} onClose={() => setShowComplianceModal(false)}>
        <h3 className="text-2xl font-bold mb-5 text-blue-900">Compliance Certifications</h3>
        <div className="text-center space-y-5">
          <div>
            <h4 className="text-lg font-semibold">🛡️ PCI DSS Level 1 Certified</h4>
            <p className="text-gray-600">Highest level of payment card security compliance</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">🏛️ Multi-Jurisdictional Licenses</h4>
            <p className="text-gray-600">Licensed and regulated across 15+ jurisdictions</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">🔒 ISO 27001 Security Management</h4>
            <p className="text-gray-600">International standard for information security</p>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 mt-5 cursor-pointer">
            Download Certificate Pack
          </button>
        </div>
      </Modal>      
    </div>
  );
};

export default PSPHomepage;