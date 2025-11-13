'use client';

import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CalculationResult {
  blendedRate: number;
  moneyYouKeepPercent: number;
  totalVolume: number;
  numberOfTransactions: number;
}

const industries = [
  { key: 'igaming', name: 'iGaming' },
  { key: 'adult', name: 'Adult' },
  { key: 'forex', name: 'Forex' },
];

const countries = [
  { key: 'us', name: 'United States' },
  { key: 'uk', name: 'United Kingdom' },
  { key: 'ca', name: 'Canada' },
];

// Fee constants from your Excel math for Visa/Mastercard and other cards (using example Amex values)
const VISA_MASTER_RATE = 0.0376; // 3.76%
const OTHER_CARD_RATE = 0.0401;  // 4.01%
const PER_TRANSACTION_FEE = 0.4; // fixed fee per transaction

export default function PaymentCalculatorPage() {
  const [formData, setFormData] = useState({
    totalVolume: '',
    avgTicket: '',
    visaMasterVolume: '',
    otherCardsVolume: '',
    industry: '',
    country: '',
  });

  const [results, setResults] = useState<CalculationResult | null>(null);
  const [, setShowCTA] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCosts = () => {
    const totalVolume = parseFloat(formData.totalVolume || '0');
    const avgTicket = parseFloat(formData.avgTicket || '0');
    const visaMasterVolume = parseFloat(formData.visaMasterVolume || '0');
    const otherCardsVolume = parseFloat(formData.otherCardsVolume || '0');

    if (
      !totalVolume ||
      !avgTicket ||
      !formData.industry ||
      !formData.country
    ) {
      alert('Please fill in Total Volume, Average Ticket Size, Industry, and Country.');
      return;
    }

    if (visaMasterVolume + otherCardsVolume !== totalVolume) {
      alert('Visa/Master Volume + Other Cards Volume must equal Total Volume');
      return;
    }

    // Calculate number of transactions
    const numberOfTransactions = totalVolume / avgTicket;

    // Interchange charges
    const interchangeVisaMaster = visaMasterVolume * VISA_MASTER_RATE;
    const interchangeOtherCards = otherCardsVolume * OTHER_CARD_RATE;

    // Transaction charges based on inferred tx count
    const txnCharges = numberOfTransactions * PER_TRANSACTION_FEE;

    const totalFees = interchangeVisaMaster + interchangeOtherCards + txnCharges;

    // Calculate blended rate (total fees / total volume)
    const blendedRate = totalFees / totalVolume;

    // Money you keep (%)
    const moneyYouKeepPercent = 1 - blendedRate;

    setResults({
      blendedRate,
      moneyYouKeepPercent,
      totalVolume,
      numberOfTransactions,
    });

    setTimeout(() => setShowCTA(true), 1000);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (rate: number) => {
    return `${(rate * 100).toFixed(2)}%`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-40 px-4">
      <div className="max-w-3xl mx-auto">
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
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Enter your total volume, average ticket size, card volumes, industry and country to estimate your payment processing costs.
          </p>
        </motion.div>

        {/* Calculator Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Total Monthly Volume (USD) <span className="text-red-700">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g., 100000"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                value={formData.totalVolume}
                onChange={(e) => handleInputChange('totalVolume', e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Average Ticket Size (USD) <span className="text-red-700">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g., 100"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                value={formData.avgTicket}
                onChange={(e) => handleInputChange('avgTicket', e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Visa/Mastercard Volume (USD)
              </label>
              <input
                type="number"
                placeholder="e.g., 70000"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                value={formData.visaMasterVolume}
                onChange={(e) => handleInputChange('visaMasterVolume', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Other Cards Volume (USD)
              </label>
              <input
                type="number"
                placeholder="e.g., 30000"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                value={formData.otherCardsVolume}
                onChange={(e) => handleInputChange('otherCardsVolume', e.target.value)}
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Industry <span className="text-red-700">*</span>
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                required
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
              >
                <option value="">Select industry</option>
                {industries.map((industry) => (
                  <option key={industry.key} value={industry.key}>
                    {industry.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Country of Registration <span className="text-red-700">*</span>
            </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                required
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
              >
                <option value="">Select country</option>
                {countries.map((country) => (
                  <option key={country.key} value={country.key}>
                    {country.name}
                  </option>
                ))}
              </select>
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
            Calculate
          </motion.button>

          <p className="mt-6 text-md text-gray-600 italic max-w-lg mx-auto text-center">
            These rates are estimates for low-risk businesses. If your business involves higher risk, please reach out and we will provide a tailored rate based on your risk level and overall business needs.
          </p>
        </motion.div>

        {/* Results */}
        <AnimatePresence>
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md mx-auto"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cost Estimate</h2>
              <p className="text-xl text-gray-700 mb-2">
                Money You Keep:
                <span className="text-green-600 font-semibold ml-2">
                  {formatPercentage(results.moneyYouKeepPercent)}
                </span>
              </p>
              <p className="text-gray-600 text-sm">
                Based on a total monthly volume of {formatCurrency(results.totalVolume)} and blended processing fee rate of {formatPercentage(results.blendedRate)}.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}