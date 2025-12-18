'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    <section id="calculator" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight text-gray-900">
            Try our calculator
          </h2>
          <p className="text-lg text-gray-400 font-light">
            See what you could be paying instead of that 4.5%
          </p>
        </motion.div>

        <motion.div
          className="border rounded-3xl p-12 md:p-16 max-w-4xl w-full mx-auto"
          style={{ borderColor: "rgba(100, 100, 100, 0.3)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleCalculatorSubmit} className="space-y-8">
            {/* Geography Select */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <label className="block mb-3 text-xs font-medium text-gray-400 uppercase tracking-widest">
                Select Geography
              </label>
              <select
                value={formData.geography}
                onChange={(e) => setFormData({...formData, geography: e.target.value})}
                className="w-full p-4 border border-gray-200 rounded-xl text-base font-light text-gray-900 bg-white focus:border-gray-900 focus:outline-none transition-all duration-300 cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center'
                }}
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
            </motion.div>

            {/* Vertical Select */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <label className="block mb-3 text-xs font-medium text-gray-400 uppercase tracking-widest">
                Select Business Vertical
              </label>
              <select
                value={formData.vertical}
                onChange={(e) => setFormData({...formData, vertical: e.target.value})}
                className="w-full p-4 border border-gray-200 rounded-xl text-base font-light text-gray-900 bg-white focus:border-gray-900 focus:outline-none transition-all duration-300 cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center'
                }}
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
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-medium text-base hover:bg-gray-800 transition-all duration-300 hover:shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Calculate My Real Rate
            </motion.button>

            {/* Results */}
            <AnimatePresence>
              {calculatorResult && (
                <motion.div
                  className="bg-transparent mt-8 p-8 rounded-2xl bg-gray-50 border border-gray-200"
                  initial={{ opacity: 0, height: 0, y: 20 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h4 className="text-lg font-medium text-gray-900 mb-6">Your potential savings</h4>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-sm text-gray-500 font-light">Your Rate</span>
                      <span className="text-base font-medium text-gray-900">
                        {calculatorResult.fee}% <span className="text-gray-400 text-sm">(vs industry 4.5%)</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-sm text-gray-500 font-light">Approval Rate</span>
                      <span className="text-base font-medium text-gray-900">{calculatorResult.rate}%</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm text-gray-500 font-light">Setup Time</span>
                      <span className="text-base font-medium text-gray-900">{calculatorResult.setupDays} business days</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowQualificationModal(true)}
                    className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium text-sm hover:bg-gray-800 transition-all duration-300 hover:shadow-md cursor-pointer"
                  >
                    Get Started →
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Calculator
