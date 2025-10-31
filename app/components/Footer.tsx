"use client";
import { ShieldCheck, Landmark, Euro, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Sticky Bar */}
      <div className="sticky bottom-0 bg-gray-800 bg-opacity-90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2" title="PCI DSS Compliant">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">PCI DSS Compliant</span>
              </div>
              <div className="flex items-center gap-2" title="Partner Bank">
                <Landmark className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Partner Bank Secured</span>
              </div>
              <div className="flex items-center gap-2" title="EU Jurisdiction">
                <Euro className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">EU Jurisdiction</span>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-300 cursor-pointer">
              Contact Compliance
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Real Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-gray-300">
          {/* Column 1: Real Headings */}
          <div className="space-y-2">
            <span className="font-bold text-gray-400 text-lg">Real </span><span className="font-bold text-white text-lg">Support</span><br/>
            <span className="font-bold text-gray-400 text-lg">Real </span><span className="font-bold text-white text-lg">Compliance</span><br/>
            <span className="font-bold tex,t-gray-400 text-lg">Real </span><span className="font-bold text-white text-lg">Coverage</span>
          </div>

          {/* Column 2: First Set of Points */}
          <div>
            <ul className="space-y-2 text-sm">
              <li>27+ licensed partner banks</li>
              <li>PCI DSS compliant</li>
              <li>Registered with FinCEN (U.S.) and FINTRAC (Canada)</li>
            </ul>
          </div>

          {/* Column 3: Second Set of Points */}
          <div>
            <ul className="space-y-2 text-sm">
              <li>Licensed across 22 jurisdictions</li>
              <li>Crypto + card + APM stack coverage</li>
              <li>Industry awards (if applicable)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Contact Us :</h3>
              <p className="text-gray-400 text-sm">
                <a
                  href="mailto:ticklecharge@tickle.life"
                  className="hover:underline hover:text-white transition-colors duration-300"
                >
                  ticklecharge@tickle.life
                </a>
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Office Address */}
            <div className="md:col-span-2">
              <div>
                <p className="font-bold text-white mb-1">North America</p>
                <p>830 Bryant Street, San Francisco, CA 94103</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
