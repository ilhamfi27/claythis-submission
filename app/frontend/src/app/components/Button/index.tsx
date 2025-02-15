import { FC, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren & {
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  onClick,
  className,
  children,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      onClick={() => onClick?.()}
      className={`rounded-3xl ${className}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
