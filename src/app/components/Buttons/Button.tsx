import React from 'react';


type ButtonProps = {
  backgroundColor?: string;
  textColor?: string;
  margin?: string;
  borderColor?: string,
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const GenericButton: React.FC<ButtonProps> = ({
  backgroundColor = '#DCDCDD',
  textColor = 'rgb(21, 23, 31)',
  margin,
  borderColor,
  onClick,
  children,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor,
    color: textColor,
    margin: margin,
    borderColor : borderColor,
    borderRadius: '4px',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '28px',
    cursor:'pointer',
    font: 'inherit',
    fontSize: '14px',
    fontStyle: 'inherit',
    border: borderColor? `${borderColor} 1px solid`: 'none',
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GenericButton;
