'use client'

import React, { useState } from 'react'

interface CalculatorProps {
  setShowQualificationModal: (show: boolean) => void
}

const Calculator: React.FC<CalculatorProps> = ({ setShowQualificationModal }) => {
  const [calculatorResult, setCalculatorResult] = useState<{
    rate: number
    fee: string
    setupDays: string
  } | null>(null)
  
  const [formData, setFormData] = useState({
    geography: '',
    vertical: ''
  })

  const handleCalculatorSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.geography || !formData.vertical) return
    
    const approvalRates: Record<string, number> = {
      'eu-igaming': 85,
      'india-igaming': 92,
      'gcc-forex': 88,
      'uk-adult': 78,
      'apac-crypto': 82
    }
    
    const key = `${formData.geography}-${formData.vertical}`
    const rate = approvalRates[key] ?? Math.floor(Math.random() * 30) + 60
    const fee = (Math.random() * 1 + 1.5).toFixed(2)
    const setupDays = `${Math.floor(Math.random() * 3) + 1}-${Math.floor(Math.random() * 3) + 3}`
    
    setCalculatorResult({ rate, fee, setupDays })
  }

  return (
    <section id="calculator" className="py-24 px-4 md:px-8 bg-[#fafafa] relative overflow-hidden">
      <div
        className="border p-8 max-w-7xl mx-auto flex flex-col items-center"
        style={{ borderColor: "rgba(100, 100, 100, 0.3)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <svg
            width="100%"
            height="100"
            viewBox="0 0 1600 100"
            fill="none"
            className="opacity-40"
          >
            <path
              d="M0,60 Q400,100 800,40 T1600,80"
              stroke="#bebebe"
              strokeWidth="0.8"
              fill="none"
            />
          </svg>
        </div>

        <div className="w-full max-w-[1200px] flex flex-col items-center relative z-10">
          <h2
            className="text-[3rem] md:text-[5rem] leading-[0.95] font-normal font-sans text-center mb-8"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.05" }}
          >
            Try our calculator
          </h2>
          <p className="text-lg md:text-2xl leading-relaxed text-black max-w-lg text-center mb-12">
            See what you could be paying instead of that 4.5%
          </p>

          <form onSubmit={handleCalculatorSubmit} className="bg-white p-10 rounded-2xl border border-gray-300 max-w-2xl w-full space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-black">Select Geography :</label>
              <select
                value={formData.geography}
                onChange={(e) => setFormData({...formData, geography: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg text-base focus:border-black focus:outline-none cursor-pointer"
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
              <label className="block mb-2 font-semibold text-black">Select Business Vertical :</label>
              <select
                value={formData.vertical}
                onChange={(e) => setFormData({...formData, vertical: e.target.value})}
                className="w-full p-3 border-2 border-gray-300 rounded-lg text-base focus:border-black focus:outline-none cursor-pointer"
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
              className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-colors cursor-pointer"
            >
              Calculate My Real Rate
            </button>

            {calculatorResult && (
              <div className="mt-5 p-5 border-l-4 border-green-500 rounded-lg bg-green-50">
                <h4 className="text-black font-bold mb-2">Your potential savings:</h4>
                <div className="space-y-1 text-black">
                  <div><strong>Your Rate: {calculatorResult.fee}%</strong> (vs industry 4.5%)</div>
                  <div><strong>Approval Rate: {calculatorResult.rate}%</strong></div>
                  <div><strong>Setup Time: {calculatorResult.setupDays} business days</strong></div>
                </div>
                <button
                  onClick={() => setShowQualificationModal(true)}
                  className="mt-4 bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full font-semibold cursor-pointer"
                >
                  Get Started →
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Calculator
