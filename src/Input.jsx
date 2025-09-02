import React from 'react';

function Input({ id, label, type = 'text', value, onChange, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
        />
        {children}
      </div>
    </div>
  );
}

export default Input;
