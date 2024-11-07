import React from 'react';
import type { BillingToggleProps } from '../../types';

const BillingToggle: React.FC<BillingToggleProps> = ({ isYearly, toggleBilling }) => (
  <div className="flex justify-center items-center mb-8">
    <span className={`mr-3 ${!isYearly ? 'text-blue-400' : 'text-gray-400'}`}>Monthly</span>
    <label className="switch">
      <input type="checkbox" checked={isYearly} onChange={toggleBilling} />
      <span className="slider round"></span>
    </label>
    <span className={`ml-3 ${isYearly ? 'text-blue-400' : 'text-gray-400'}`}>Yearly (Save 20%)</span>
  </div>
);

export default BillingToggle; 