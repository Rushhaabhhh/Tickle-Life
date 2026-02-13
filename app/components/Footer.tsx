"use client";
import { ShieldCheck, Landmark, Euro, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full shrink-0 bg-brand-paper text-brand border-t border-brand text-[10px]">
      {/* Compliance Bar */}
      <div className="bg-brand-paper2 border-b border-brand">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5" title="PCI DSS Compliant">
                <ShieldCheck className="w-3 h-3 text-brand" />
                <span className="font-medium text-[9px]">PCI DSS Compliant</span>
              </div>
              <div className="flex items-center gap-1.5" title="Partner Bank">
                <Landmark className="w-3 h-3 text-brand" />
                <span className="font-medium text-[9px]">Partner Bank Secured</span>
              </div>
              <div className="flex items-center gap-1.5" title="EU Jurisdiction">
                <Euro className="w-3 h-3 text-brand" />
                <span className="font-medium text-[9px]">EU Jurisdiction</span>
              </div>
            </div>
            <button className="ui-btn ui-btn-primary text-xs font-semibold py-2 px-4 rounded-md">
              Contact Compliance
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-3 text-[9px]">
          <a href="#" className="text-brand/70 hover:text-brand transition-colors duration-300">Careers</a>
          <a href="#" className="text-brand/70 hover:text-brand transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-brand/70 hover:text-brand transition-colors duration-300">Terms of Service</a>
          <a href="#" className="text-brand/70 hover:text-brand transition-colors duration-300">Support Center</a>
          <a href="#" className="text-brand/70 hover:text-brand transition-colors duration-300">Agent Login</a>
        </div>

        <div className="border border-brand rounded-lg p-3 mb-3 bg-brand-paper2">
          <h3 className="font-semibold text-[10px] mb-1">Careers — We&apos;re Hiring</h3>
          <p className="text-brand/80 text-[9px] mb-1.5">Current openings for our team:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-[9px]" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.625rem' }}>
            <div className="rounded-md border border-brand p-2 bg-white/60">
              <p className="font-medium text-brand mb-0.5 text-[9px]">Intern (Operations & Compliance)</p>
              <p className="text-brand/80 text-[8px]">Support onboarding documentation, compliance checks, reporting, and cross-team coordination.</p>
            </div>
            <div className="rounded-md border border-brand p-2 bg-white/60">
              <p className="font-medium text-brand mb-0.5 text-[9px]">Accountant</p>
              <p className="text-brand/80 text-[8px]">Own reconciliations, invoicing, payout records, month-end close, and finance process accuracy.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-brand pt-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1rem' }}>
            {/* Company Info & Social Links */}
            <div>
              <h3 className="font-semibold text-[10px] mb-1">Your Company Inc.</h3>
              <p className="text-brand/70 text-[9px]">&copy; 2024 Your Company Inc. All Rights Reserved.</p>
              <div className="flex space-x-2.5 mt-2">
                <a href="#" aria-label="LinkedIn" className="text-brand/70 hover:text-brand transition-colors duration-300">
                  <Linkedin className="w-3 h-3" />
                </a>
                <a href="#" aria-label="Twitter" className="text-brand/70 hover:text-brand transition-colors duration-300">
                  <Twitter className="w-3 h-3" />
                </a>
                <a href="#" aria-label="Facebook" className="text-brand/70 hover:text-brand transition-colors duration-300">
                  <Facebook className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Registered Offices */}
            <div className="md:col-span-2">
              <h3 className="font-semibold text-[10px] mb-1">Registered Offices</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[9px] text-brand/70">
                <div>
                  <p className="font-medium text-brand mb-0.5 text-[9px]">North America</p>
                  <p>123 Innovation Drive, Suite 100<br />Palo Alto, CA 94304, USA</p>
                </div>
                <div>
                  <p className="font-medium text-brand mb-0.5 text-[9px]">Europe</p>
                  <p>789 Global Avenue, Floor 5<br />Dublin 2, D02 F8X, Ireland</p>
                </div>
                <div>
                  <p className="font-medium text-brand mb-0.5 text-[9px]">Asia-Pacific</p>
                  <p>456 Tech Park, Tower B<br />Singapore 188953</p>
                </div>
              </div>
            </div>
          </div>

          {/* Licensing & Regulatory Info */}
          <div className="border-t border-brand mt-3 pt-3 text-center text-brand/60 text-[8px]">
            <p>Your Company Inc. is licensed and regulated by the Financial Conduct Authority under registration number 900507.</p>
            <p className="mt-1">Services are provided in accordance with the Payment Services Regulations 2017. All trademarks and brand names belong to their respective owners.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}