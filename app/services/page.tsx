'use client';
import React, { useState } from 'react';

interface Module {
  id: string;
  icon: string;
  title: string;
  description: string;
  selected: boolean;
}

interface StackCalculation {
  setupFee: string;
  processingRate: string;
  integrationTime: string;
  goLiveTime: string;
}

const Services: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([
    {
      id: 'cards',
      icon: '💳',
      title: 'Card Processing',
      description: 'Visa, Mastercard, local schemes with optimized routing and fraud protection',
      selected: false
    },
    {
      id: 'apms',
      icon: '🏦',
      title: 'Alternative Payment Methods',
      description: 'E-wallets, bank transfers, buy-now-pay-later, and regional APMs',
      selected: false
    },
    {
      id: 'crypto',
      icon: '₿',
      title: 'Crypto Ramp',
      description: 'Accept Bitcoin, Ethereum, USDT and 50+ cryptocurrencies with instant settlement',
      selected: false
    },
    {
      id: 'routing',
      icon: '🌍',
      title: 'Geo-specific Routing',
      description: 'Intelligent routing based on geography, BIN, and issuer preferences',
      selected: false
    },
    {
      id: 'fraud',
      icon: '🛡️',
      title: 'Custom Fraud Filter',
      description: 'AI-powered risk scoring with customizable rules and real-time decisions',
      selected: false
    }
  ]);

  const [showStackPreview, setShowStackPreview] = useState(false);
  const [showOtherVerticals, setShowOtherVerticals] = useState(false);
  interface EligibilityResult {
    eligible: boolean;
    mdr: string;
    setupTime: string;
    compliance: string;
  }
  
  const [eligibilityResult, setEligibilityResult] = useState<EligibilityResult | null>(null);

  const toggleModule = (moduleId: string) => {
    setModules(prev => 
      prev.map(module => 
        module.id === moduleId 
          ? { ...module, selected: !module.selected }
          : module
      )
    );
  };

  const getSelectedModules = () => {
    return modules.filter(module => module.selected);
  };

  const calculateStack = (): StackCalculation => {
    const selectedCount = getSelectedModules().length;
    const baseFee = 5000;
    const moduleMultiplier = 2000;
    
    return {
      setupFee: `$${(baseFee + (selectedCount * moduleMultiplier)).toLocaleString()}`,
      processingRate: selectedCount > 3 ? '2.4% + $0.30' : '2.8% + $0.30',
      integrationTime: selectedCount > 3 ? '3-4 weeks' : '2-3 weeks',
      goLiveTime: selectedCount > 3 ? '6-8 weeks' : '4-6 weeks'
    };
  };

  const handleShowStack = () => {
    if (getSelectedModules().length > 0) {
      setShowStackPreview(prev => !prev);
    }
  };

  const handleEligibilitySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate calculation
    const result = {
      eligible: true,
      mdr: '2.6% + $0.25',
      setupTime: '3-4 weeks',
      compliance: 'Pre-approved for selected vertical'
    };
    
    setEligibilityResult(result);
  };

  const scrollToEligibility = () => {
    document.getElementById('eligibilityWidget')?.scrollIntoView({ 
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
        

      {/* Services Hero */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 drop-shadow-sm">
              Build your payment stack for high-risk, high-volume, multi-geo business
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Combine cards, APMs, crypto, custom routing—all tuned for regulated verticals
            </p>
          </div>
        </div>
      </section>

      {/* Modular Offering Selector */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Select modules to preview
            </h2>
            <p className="text-xl text-slate-600">
              Choose the payment components you need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {modules.map((module) => (
              <div
                key={module.id}
                className={`
                  relative bg-slate-50 border-2 rounded-xl p-8 text-center cursor-pointer
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                  ${module.selected 
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg' 
                    : 'border-slate-200 hover:border-blue-300'
                  }
                `}
                onClick={() => toggleModule(module.id)}
              >
                <div className={`
                  absolute top-4 right-4 w-5 h-5 border-2 rounded
                  transition-all duration-300
                  ${module.selected 
                    ? 'bg-blue-500 border-blue-500' 
                    : 'bg-white border-slate-300'
                  }
                `}>
                  {module.selected && (
                    <div className="text-white text-xs flex items-center justify-center h-full">
                      ✓
                    </div>
                  )}
                </div>
                
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  {module.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button
              className={`
                px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300
                ${getSelectedModules().length > 0
                  ? 'bg-amber-500 text-white hover:bg-amber-600 hover:-translate-y-1 shadow-lg hover:shadow-xl cursor-pointer'
                  : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                }
              `}
              onClick={handleShowStack}
              disabled={getSelectedModules().length === 0}
            >
              Show My Stack
            </button>
            <p className="text-slate-600 text-lg mt-4">
              Pick what you need—see eligibility, pricing, integration, onboarding timeline instantly
            </p>
          </div>
          
          {/* Stack Preview */}
          {showStackPreview && (
            <div className="mt-8 bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-500 rounded-xl p-8">
              <h4 className="text-2xl font-bold text-emerald-800 text-center mb-6">
                Your Custom Payment Stack
              </h4>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {getSelectedModules().map((module) => (
                  <div
                    key={module.id}
                    className="bg-white px-5 py-2 rounded-full border-2 border-emerald-500 font-semibold text-emerald-800"
                  >
                    {module.title}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(calculateStack()).map(([key, value]) => (
                  <div key={key} className="bg-white p-6 rounded-lg border-l-4 border-emerald-500 text-center">
                    <h5 className="font-semibold text-emerald-800 mb-2">
                      {key === 'setupFee' && 'Estimated Setup Fee'}
                      {key === 'processingRate' && 'Processing Rate'}
                      {key === 'integrationTime' && 'Integration Time'}
                      {key === 'goLiveTime' && 'Go-Live Timeline'}
                    </h5>
                    <p className="text-emerald-700 font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
            Advanced Features
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl text-blue-500 mb-6">🚀</div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                Global Instant Onboarding
              </h3>
              <p className="text-slate-600 mb-6">
                Get approved and start processing in multiple markets simultaneously
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <strong className="text-blue-800">Available Markets:</strong>
                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  {['EU', 'UK', 'GCC', 'LATAM', '+9 more'].map((market) => (
                    <span key={market} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {market}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl text-blue-500 mb-6">🏛️</div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                27+ Bank Partners
              </h3>
              <p className="text-slate-600 mb-6">
                Local compliance expertise with custom flows tailored to your business model and risk profile
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-left">
                <strong className="text-blue-800">Partnership Benefits:</strong>
                <ul className="mt-3 space-y-1 text-slate-600">
                  <li>• Direct bank relationships</li>
                  <li>• Competitive interchange rates</li>
                  <li>• Regulatory compliance support</li>
                  <li>• Custom settlement terms</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl text-blue-500 mb-6">📊</div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                Transparent Dashboards
              </h3>
              <p className="text-slate-600 mb-6">
                Real-time reporting, transaction analytics, and comprehensive business intelligence tools
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-left">
                <strong className="text-blue-800">Dashboard Features:</strong>
                <ul className="mt-3 space-y-1 text-slate-600">
                  <li>• Real-time transaction monitoring</li>
                  <li>• Advanced analytics & reporting</li>
                  <li>• Chargeback management</li>
                  <li>• Revenue optimization insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Matcher */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
            Accept payments for:
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: '🎰', title: 'iGaming' },
              { icon: '📈', title: 'Forex' },
              { icon: '🔞', title: 'Adult' }
            ].map((vertical) => (
              <div
                key={vertical.title}
                className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-8 rounded-xl text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                <div className="text-4xl mb-4 relative z-10">{vertical.icon}</div>
                <h4 className="text-xl font-semibold relative z-10">{vertical.title}</h4>
              </div>
            ))}
            
            <div className="relative">
              <div
                className="bg-slate-50 border-2 border-dashed border-slate-300 text-slate-600 p-8 rounded-xl text-center cursor-pointer transition-all duration-300 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50"
                onClick={() => setShowOtherVerticals(!showOtherVerticals)}
              >
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold">Other Industries</h4>
              </div>
              
              {showOtherVerticals && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl z-10">
                  <div className="p-4">
                    {[
                      'Cryptocurrency', 'Nutraceuticals', 'CBD/Cannabis', 'High-Risk Travel',
                      'Dating & Social', 'Telemarketing', 'E-cigarettes', 'Weight Loss'
                    ].map((industry) => (
                      <div
                        key={industry}
                        className="py-2 px-3 hover:bg-slate-100 rounded cursor-pointer transition-colors duration-200"
                      >
                        {industry}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center">
            <button
              className="bg-emerald-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-emerald-600 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl cursor-pointer"
              onClick={scrollToEligibility}
            >
              Check eligibility in my vertical
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Widget */}
      <section id="eligibilityWidget" className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-4">
            Eligibility Calculator
          </h2>
          
          <div className="bg-white p-12 rounded-2xl shadow-xl">
            <p className="text-center text-xl text-slate-600 mb-8">
              Instantly see qualification, integration timeline, and sample MDR
            </p>
            
            <form onSubmit={handleEligibilitySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-blue-800 font-semibold mb-2">
                  Primary Geography:
                </label>
                <select 
                  name="geography"
                  className="text-black w-full p-4 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 cursor-pointer"
                  required
                >
                  <option value="">Select region...</option>
                  <option value="eu">European Union</option>
                  <option value="uk">United Kingdom</option>
                  <option value="gcc">GCC Countries</option>
                  <option value="latam">Latin America</option>
                  <option value="apac">Asia Pacific</option>
                  <option value="na">North America</option>
                </select>
              </div>
              
              <div>
                <label className="block text-blue-800 font-semibold mb-2">
                  Monthly Volume (USD):
                </label>
                <select 
                  name="volume"
                  className="text-black w-full p-4 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 cursor-pointer"
                  required
                >
                  <option value="">Select volume...</option>
                  <option value="50k-250k">$50K - $250K</option>
                  <option value="250k-1m">$250K - $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="5m-20m">$5M - $20M</option>
                  <option value="20m+">$20M+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-blue-800 font-semibold mb-2">
                  Traffic Type:
                </label>
                <select 
                  name="traffic"
                  className="text-black w-full p-4 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 cursor-pointer"
                  required
                >
                  <option value="">Select traffic type...</option>
                  <option value="organic">Organic/Direct</option>
                  <option value="paid">Paid Advertising</option>
                  <option value="affiliate">Affiliate Network</option>
                  <option value="mixed">Mixed Sources</option>
                </select>
              </div>
              
              <div>
                <label className="block text-blue-800 font-semibold mb-2">
                  Business Vertical:
                </label>
                <select 
                  name="vertical"
                  className="text-black w-full p-4 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 cursor-pointer"
                  required
                >
                  <option value="">Select vertical...</option>
                  <option value="igaming">iGaming</option>
                  <option value="forex">Forex/CFD</option>
                  <option value="adult">Adult Entertainment</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-4 rounded-full text-xl font-semibold hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Calculate Eligibility
                </button>
              </div>
            </form>
            
            {/* Results */}
            {eligibilityResult && (
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl border-l-4 border-emerald-500">
                <h4 className="text-2xl font-bold text-emerald-800 text-center mb-6">
                  Eligibility Results
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-emerald-600 mb-2">
                      {eligibilityResult.mdr}
                    </div>
                    <div className="text-emerald-800 font-medium">
                      Merchant Discount Rate
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-emerald-600 mb-2">
                      {eligibilityResult.setupTime}
                    </div>
                    <div className="text-emerald-800 font-medium">
                      Setup Timeline
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-emerald-600 mb-2">
                      ✅ Eligible
                    </div>
                    <div className="text-emerald-800 font-medium">
                      Compliance Status
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Layer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-12">
            Trusted by Industry Leaders
          </h2>
          
          {/* Bank Partners */}
          <div className="flex justify-center gap-8 flex-wrap mb-12">
            {['HSBC', 'Barclays', 'Chase', 'Deutsche Bank', 'ING', 'BBVA'].map((bank) => (
              <div
                key={bank}
                className="w-32 h-16 bg-slate-100 border-2 border-slate-200 rounded-lg flex items-center justify-center font-semibold text-slate-600 hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
              >
                {bank}
              </div>
            ))}
          </div>
          
          {/* Trust Badges */}
          <div className="flex justify-center gap-10 flex-wrap mb-12">
            {['PCI DSS Compliant', 'ISO 27001 Certified', '99.9% Uptime SLA'].map((badge) => (
              <div
                key={badge}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
              >
                {badge}
              </div>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="bg-slate-50 p-10 rounded-xl border-l-4 border-blue-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "TrustPay enabled us to expand into 15 new markets within 3 months. Their compliance expertise is unmatched.",
                  author: "Sarah Johnson",
                  context: "VP Growth, iGaming Platform"
                },
                {
                  quote: "The modular approach saved us 6 months of development time. We went live with crypto payments in just 2 weeks.",
                  author: "Michael Chen",
                  context: "CTO, Forex Broker"
                },
                {
                  quote: "Finally, a PSP that understands high-risk business. Our approval rates improved by 23% after switching.",
                  author: "Emma Rodriguez",
                  context: "CEO, Adult Entertainment"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="italic text-slate-600 mb-4">
                  &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="font-semibold text-blue-800">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.context}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;