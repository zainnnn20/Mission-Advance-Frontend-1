import React from 'react';

function Button({ children, type = 'button', variant = 'primary', onClick }) {
const baseStyle = "w-full text-center py-3 font-semibold rounded-lg hover:bg-opacity-90 transition-opacity";

const styles = {
primary: `text-white bg-brand-green ${baseStyle}`,
secondary: `text-brand-green bg-brand-green-light ${baseStyle}`,
outline: `inline-flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50
transition-colors ${baseStyle}`,
};

return (
<button type={type} className={styles[variant]} onClick={onClick}>
  {children}
</button>
);
}

export default Button;