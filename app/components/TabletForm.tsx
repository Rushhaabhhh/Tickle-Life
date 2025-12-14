'use client';

import React, { useState, useEffect } from 'react';
import { Oxanium } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['500'],
});

interface CalculationResult {
  blendedRate: number;
  totalVolume: number;
  numberOfTransactions: number;
  moneyYouKeepAmount: number;
}

interface CountryAPI {
  cca2?: string;
  ccn3?: string;
  name: {
    common: string;
  };
}

const industries = [
  { key: 'igaming', name: 'iGaming' },
  { key: 'adult', name: 'Adult' },
  { key: 'forex', name: 'Forex' },
  { key: 'others', name: 'Others' },
];

interface TabletFormProps {
  trigger: boolean;
  triggerExplosion: boolean;
  formRef?: React.Ref<HTMLDivElement>;
}

const TabletForm: React.FC<TabletFormProps> = ({
  trigger,
  triggerExplosion,
  formRef,
}) => {
  const [formData, setFormData] = useState({
    totalVolume: '',
    avgTicket: '',
    visaMasterVolume: '',
    otherCardsVolume: '',
    industry: '',
    country: '',
  });

  const [results, setResults] = useState<CalculationResult | null>(null);
  const [otherIndustry, setOtherIndustry] = useState('');
  const [countries, setCountries] = useState<{ key: string; name: string }[]>(
    []
  );
  const [loadingCountries, setLoadingCountries] = useState(true);

  // Fee constants (same as page.tsx)
  const VISA_MASTER_RATE = 0.0376; // 3.76%
  const OTHER_CARD_RATE = 0.0401; // 4.01%
  const PER_TRANSACTION_FEE = 0.4; // fixed fee per transaction

  // Fetch countries (same logic as page.tsx)
  useEffect(() => {
    async function fetchCountries() {
      setLoadingCountries(true);
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=cca2,name'
        );
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Unexpected API response format');
        }

        const mapped = (data as CountryAPI[])
          .map((country) => ({
            key: country.cca2?.toLowerCase() ?? country.ccn3 ?? '',
            name: country.name.common,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(mapped);
      } catch (error) {
        console.error('Failed to fetch countries', error);
        setCountries([]);
      } finally {
        setLoadingCountries(false);
      }
    }
    fetchCountries();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateCosts = () => {
    const totalVolume = parseFloat(formData.totalVolume || '0');
    const avgTicket = parseFloat(formData.avgTicket || '0');
    const visaMasterVolume = parseFloat(formData.visaMasterVolume || '0');
    const otherCardsVolume = parseFloat(formData.otherCardsVolume || '0');

    if (!totalVolume || !avgTicket || !formData.industry || !formData.country) {
      alert(
        'Please fill in Total Volume, Average Ticket Size, Industry, and Country.'
      );
      return;
    }

    if (visaMasterVolume + otherCardsVolume !== totalVolume) {
      alert(
        'Visa/Master Volume + Other Cards Volume must equal Total Volume'
      );
      return;
    }

    const numberOfTransactions = totalVolume / avgTicket;

    const interchangeVisaMaster = visaMasterVolume * VISA_MASTER_RATE;
    const interchangeOtherCards = otherCardsVolume * OTHER_CARD_RATE;

    const txnCharges = numberOfTransactions * PER_TRANSACTION_FEE;

    const totalFees = interchangeVisaMaster + interchangeOtherCards + txnCharges;

    const blendedRate = totalFees / totalVolume;

    const moneyYouKeepAmount = totalVolume * (1 - blendedRate);

    setResults({
      blendedRate,
      totalVolume,
      numberOfTransactions,
      moneyYouKeepAmount,
    });
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
    <div
      ref={formRef}
      className={
        trigger || triggerExplosion
          ? 'form futuristic-tablet active'
          : 'form futuristic-tablet'
      }
      // let height be auto so it grows with content
      style={{
        height: 'auto',
      }}
    >
      <div
        className={oxanium.className}
        style={{
          width: '100%',
          display: 'grid',
          placeItems: 'center',
          gridTemplateColumns: '1fr',
          gap: '10px',
        }}
      >
        {/* Total Monthly Volume */}
        <div className="lbl" style={{ width: '95%' }}>
          <label
            style={{
              color: '#00eaff',
              fontSize: '1rem',
              marginBottom: '5px',
              display: 'block',
            }}
          >
            Total Monthly Volume (USD) *
          </label>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              autoFocus={true}
              type="range"
              min="0"
              max="100000000"
              step="1000"
              name="totalVolume"
              value={formData.totalVolume}
              onChange={(e) => handleInputChange('totalVolume', e.target.value)}
              style={{ flex: 1 }}
            />

            <input
              type="number"
              min="0"
              max="100000000"
              step="1000"
              name="totalVolume"
              value={formData.totalVolume}
              onChange={(e) => handleInputChange('totalVolume', e.target.value)}
              style={{
                flex: '0 0 110px',
                padding: '6px',
                borderRadius: '10px',
                border: '2px solid rgba(0,255,255,0.35)',
                background: 'rgba(0,10,18,0.9)',
                color: '#00eaff',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Average Ticket Size */}
        <div className="lbl" style={{ width: '95%' }}>
          <label
            style={{
              color: '#00eaff',
              fontSize: '1rem',
              marginBottom: '5px',
              display: 'block',
            }}
          >
            Average Ticket Size (USD) *
          </label>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="range"
              min="0"
              max="10000"
              step="10"
              name="avgTicket"
              value={formData.avgTicket}
              onChange={(e) => handleInputChange('avgTicket', e.target.value)}
              style={{ flex: 1 }}
            />

            <input
              type="number"
              min="0"
              max="10000"
              step="10"
              name="avgTicket"
              value={formData.avgTicket}
              onChange={(e) => handleInputChange('avgTicket', e.target.value)}
              style={{
                flex: '0 0 110px',
                padding: '6px',
                borderRadius: '10px',
                border: '2px solid rgba(0,255,255,0.35)',
                background: 'rgba(0,10,18,0.9)',
                color: '#00eaff',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Visa/Mastercard Volume */}
        <div className="lbl" style={{ width: '95%' }}>
          <label
            style={{
              color: '#00eaff',
              fontSize: '1rem',
              marginBottom: '5px',
              display: 'block',
            }}
          >
            Visa/Mastercard Volume (USD) *
          </label>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="range"
              min="0"
              max="100000000"
              step="1000"
              name="visaMasterVolume"
              value={formData.visaMasterVolume}
              onChange={(e) =>
                handleInputChange('visaMasterVolume', e.target.value)
              }
              style={{ flex: 1 }}
            />

            <input
              type="number"
              min="0"
              max="100000000"
              step="1000"
              name="visaMasterVolume"
              value={formData.visaMasterVolume}
              onChange={(e) =>
                handleInputChange('visaMasterVolume', e.target.value)
              }
              style={{
                flex: '0 0 110px',
                padding: '6px',
                borderRadius: '10px',
                border: '2px solid rgba(0,255,255,0.35)',
                background: 'rgba(0,10,18,0.9)',
                color: '#00eaff',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Other Cards Volume */}
        <div className="lbl" style={{ width: '95%' }}>
          <label
            style={{
              color: '#00eaff',
              fontSize: '1rem',
              marginBottom: '5px',
              display: 'block',
            }}
          >
            Other Cards Volume (USD) *
          </label>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="range"
              min="0"
              max="100000000"
              step="1000"
              name="otherCardsVolume"
              value={formData.otherCardsVolume}
              onChange={(e) =>
                handleInputChange('otherCardsVolume', e.target.value)
              }
              style={{ flex: 1 }}
            />

            <input
              type="number"
              min="0"
              max="100000000"
              step="1000"
              name="otherCardsVolume"
              value={formData.otherCardsVolume}
              onChange={(e) =>
                handleInputChange('otherCardsVolume', e.target.value)
              }
              style={{
                flex: '0 0 110px',
                padding: '6px',
                borderRadius: '10px',
                border: '2px solid rgba(0,255,255,0.35)',
                background: 'rgba(0,10,18,0.9)',
                color: '#00eaff',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Industry + Country row */}
        <div
          style={{
            width: '95%',
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {/* Industry */}
          <div style={{ flex: '1 1 220px', minWidth: 0 }}>
            <select
              style={{
                width: '100%',
                padding: '0.4rem',
                borderRadius: '12px',
                background: 'rgba(0,10,18,0.9)',
                border: '2px solid rgba(0,255,255,0.25)',
                borderBottom: '4px solid #00eaff',
                color: '#00eaff',
                fontSize: '1rem',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: '0 0 12px rgba(0,255,255,0.2)',
                appearance: 'none',
                transition: '0.2s',
              }}
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
            >
              <option value="">Industry *</option>
              {industries.map((industry) => (
                <option key={industry.key} value={industry.key}>
                  {industry.name}
                </option>
              ))}
            </select>

            {formData.industry === 'others' && (
              <input
                type="text"
                placeholder="Please specify your industry"
                value={otherIndustry}
                onChange={(e) => setOtherIndustry(e.target.value)}
                style={{
                  width: '100%',
                  marginTop: '10px',
                  padding: '0.4rem',
                  borderRadius: '12px',
                  background: 'rgba(0,10,18,0.9)',
                  border: '2px solid rgba(0,255,255,0.25)',
                  color: '#00eaff',
                  fontSize: '1rem',
                  outline: 'none',
                }}
              />
            )}
          </div>

          {/* Country */}
          <div style={{ flex: '1 1 220px', minWidth: 0 }}>
            <select
              style={{
                width: '100%',
                padding: '0.4rem',
                borderRadius: '12px',
                background: 'rgba(0,10,18,0.9)',
                border: '2px solid rgba(0,255,255,0.25)',
                borderBottom: '4px solid #00eaff',
                color: '#00eaff',
                fontSize: '1rem',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: '0 0 12px rgba(0,255,255,0.2)',
                appearance: 'none',
                transition: '0.2s',
              }}
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              disabled={loadingCountries}
            >
              <option value="">
                {loadingCountries
                  ? 'Loading countries...'
                  : 'Country of Registration *'}
              </option>
              {countries.map((country) => (
                <option key={country.key} value={country.key}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Calculate Button */}
      <button
        className={oxanium.className}
        style={{
          width: '95%',
          padding: '0.8rem',
          marginTop: '10px',
          borderRadius: '14px',
          background: 'rgba(0,15,25,1)',
          border: '2px solid rgba(0,255,255,0.35)',
          borderBottom: '4px solid #00eaff',
          color: '#00eaff',
          fontSize: '1.25rem',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 0 18px rgba(0,255,255,0.35)',
          transition: '0.25s ease',
        }}
        onClick={calculateCosts}
        onPointerOver={(e) => {
          e.currentTarget.style.background = 'rgba(0,255,255,0.25)';
          e.currentTarget.style.boxShadow = '0 0 25px rgba(0,255,255,0.55)';
          e.currentTarget.style.borderBottom = '4px solid #D7B750';
        }}
        onPointerOut={(e) => {
          e.currentTarget.style.background = 'rgba(0,15,25,1)';
          e.currentTarget.style.boxShadow = '0 0 18px rgba(0,255,255,0.35)';
          e.currentTarget.style.borderBottom = '4px solid #00eaff';
        }}
      >
        Calculate
      </button>

      <p
        className={oxanium.className}
        style={{ marginTop: '15px', color: '#00eaff', fontSize: '0.9rem' }}
      >
        These rates are estimates for low-risk businesses. If your business
        involves higher risk, please reach out and we will provide a tailored
        rate based on your risk level and overall business needs.
      </p>

      {/* Results (form height grows with this) */}
      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              width: '95%',
              marginTop: '20px',
              padding: '20px',
              borderRadius: '14px',
              background: 'rgba(0,255,255,0.1)',
              border: '2px solid rgba(0,255,255,0.35)',
              boxShadow: '0 0 18px rgba(0,255,255,0.2)',
            }}
            className={oxanium.className}
          >
            <h3
              style={{
                color: '#00eaff',
                fontSize: '1.2rem',
                marginBottom: '10px',
              }}
            >
              Your Cost Estimate
            </h3>
            <p style={{ color: '#00eaff', marginBottom: '8px' }}>
              Money You Keep:{' '}
              <span style={{ color: '#00ff88', fontWeight: 'bold' }}>
                {formatCurrency(results.moneyYouKeepAmount ?? 0)}
              </span>
            </p>
            <p style={{ color: '#00eaff', fontSize: '0.9rem' }}>
              Based on a total monthly volume of {formatCurrency(results.totalVolume)} and
              blended processing fee rate of{' '}
              <span style={{ fontWeight: 'bold' }}>
                {formatPercentage(results.blendedRate)}
              </span>
              .
            </p>
            <p
              style={{
                color: '#00eaff',
                fontSize: '0.9rem',
                marginTop: '10px',
              }}
            >
              Number of Transactions:{' '}
              {Math.round(results.numberOfTransactions).toLocaleString('en-US')}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TabletForm;
