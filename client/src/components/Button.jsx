import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  let variantClass = `btn-${variant}`;
  let sizeClass = `btn-${size}`;
  let disabledClass = disabled ? 'btn-disabled' : '';
  return (
    <button
      className={`btn ${variantClass} ${sizeClass} ${disabledClass} ${className}`.trim()}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 