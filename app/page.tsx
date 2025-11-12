'use client';

import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingDown, CheckCircle, ArrowRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PaymentMethod {
  base: number;
  name: string;
  rate?: number;
  cost?: number;
}

interface Breakdown {
  [key: string]: number;
}

interface CalculationResult {
  volumeAmex: number;
  volumeVM: number;
  settledAmex: number;
  settledVM: number;
  breakdown: Breakdown;
  blendedRate: number;
  grandTotal: number;
}

export default function PaymentCalculatorPage() {
  const [formData, setFormData] = useState({
    volumeAmex: '',
    volumeVM: '',
    settledAmex: '',
    settledVM: '',
  });

  const [results, setResults] = useState<CalculationResult | null>(null);
  const [showCTA, setShowCTA] = useState(false);

  // Pricing constants (from Excel)
  const AMEX_IC = 0.0401; // 4.01%
  const VM_IC = 0.0376;   // 3.76%
  const TXN_FEE = 0.4;    // Per transaction fee

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCosts = () => {
    const volumeAmex = parseFloat(formData.volumeAmex || '0');
    const volumeVM = parseFloat(formData.volumeVM || '0');
    const settledAmex = parseFloat(formData.settledAmex || '0');
    const settledVM = parseFloat(formData.settledVM || '0');
  
    // Require at least one card type to have non-zero volume and transactions
    const amexValid = volumeAmex > 0 && settledAmex > 0;
    const vmValid = volumeVM > 0 && settledVM > 0;
  
    if (!amexValid && !vmValid) {
      alert('Please provide at least one non-zero payment method with volume and settled transactions.');
      return;
    }
  
    // Interchange charges
    const interchangeAmex = amexValid ? volumeAmex * AMEX_IC : 0;
    const interchangeVM = vmValid ? volumeVM * VM_IC : 0;
  
    // Transaction charges
    const txnChargeAmex = amexValid ? settledAmex * TXN_FEE : 0;
    const txnChargeVM = vmValid ? settledVM * TXN_FEE : 0;
  
    // Total charges per card type
    const totalAmex = interchangeAmex + txnChargeAmex;
    const totalVM = interchangeVM + txnChargeVM;
  
    // Grand total and blended rate
    const grandTotal = totalAmex + totalVM;
    const totalVolume = volumeAmex + volumeVM;
    const blendedRate = grandTotal / totalVolume;
  
    // Breakdown for display
    const breakdown: Breakdown = {
      'Amex Interchange': interchangeAmex,
      'Amex Transaction Charges': txnChargeAmex,
      'Amex Total': totalAmex,
      'Visa/Master Interchange': interchangeVM,
      'Visa/Master Transaction Charges': txnChargeVM,
      'Visa/Master Total': totalVM,
      'Grand Total': grandTotal,
      'Total Volume': totalVolume,
      'Blended Rate (percent)': blendedRate * 100,
    };
  
    setResults({
      volumeAmex,
      volumeVM,
      settledAmex,
      settledVM,
      breakdown,
      blendedRate,
      grandTotal,
    });
  
    setTimeout(() => setShowCTA(true), 1000);
  };  

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatPercentage = (rate: number) => {
    return `${rate.toFixed(4)}%`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-80 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Payment Processing Cost Calculator</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter projected values for Amex and Visa/MasterCard to calculate real monthly costs and blended rate.
          </p>
        </motion.div>

        {/* Calculator Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Amex Monthly Volume (USD)
              </label>
              <input
                type="number"
                placeholder="e.g., 25000"
                className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={formData.volumeAmex}
                onChange={(e) => handleInputChange('volumeAmex', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Visa/Master Monthly Volume (USD)
              </label>
              <input
                type="number"
                placeholder="e.g., 75000"
                className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={formData.volumeVM}
                onChange={(e) => handleInputChange('volumeVM', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Amex Settled Transactions
              </label>
              <input
                type="number"
                placeholder="e.g., 50"
                className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={formData.settledAmex}
                onChange={(e) => handleInputChange('settledAmex', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Visa/Master Settled Transactions
              </label>
              <input
                type="number"
                placeholder="e.g., 150"
                className="w-full p-3 border border-gray-300 text-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={formData.settledVM}
                onChange={(e) => handleInputChange('settledVM', e.target.value)}
              />
            </div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculateCosts}
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calculator className="w-5 h-5" />
            Calculate My Processing Costs
          </motion.button>
        </motion.div>

        {/* Results */}
        <AnimatePresence>
          {results && (
            <div className="space-y-6">
              {/* Main Results */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cost Estimate</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center p-6 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{formatCurrency(results.grandTotal)}</div>
                    <div className="text-gray-600">Monthly Processing Cost</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {formatPercentage(results.blendedRate * 100)} blended rate
                    </div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-700 mb-2">{formatCurrency(results.breakdown['Total Volume'])}</div>
                    <div className="text-gray-600">Transaction Volume (All)</div>
                  </div>
                </div>
              </motion.div>

              {/* Cost Breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Cost Breakdown</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">Amex Interchange</span>
                    <span className="font-semibold">{formatCurrency(results.breakdown['Amex Interchange'])}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">Amex Transaction Charges</span>
                    <span className="font-semibold">{formatCurrency(results.breakdown['Amex Transaction Charges'])}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">Amex Total</span>
                    <span className="font-semibold">{formatCurrency(results.breakdown['Amex Total'])}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">Visa/Master Interchange</span>
                    <span className="font-semibold">{formatCurrency(results.breakdown['Visa/Master Interchange'])}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">Visa/Master Transaction Charges</span>
                    <span className="font-semibold">{formatCurrency(results.breakdown['Visa/Master Transaction Charges'])}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">Visa/Master Total</span>
                    <span className="font-semibold">{formatCurrency(results.breakdown['Visa/Master Total'])}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-bold text-gray-900">Grand Total</span>
                    <span className="font-bold text-blue-600 text-lg">{formatCurrency(results.breakdown['Grand Total'])}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-bold text-gray-900">Blended Rate</span>
                    <span className="font-bold text-blue-600 text-lg">{formatPercentage(results.breakdown['Blended Rate (percent)'])}</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <AnimatePresence>
                {showCTA && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white"
                  >
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">Want to Save Even More?</h3>
                      <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Our payment experts can analyze your specific situation and identify additional cost-saving opportunities. 
                        Get a free, personalized audit of your payment processing setup.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                      >
                        Get Your Free Cost-Saving Audit
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                      <div className="text-sm text-blue-200 mt-3">
                        No commitment required • 15-minute consultation • Instant recommendations
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}