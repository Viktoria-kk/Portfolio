import { Link } from 'react-router-dom';
import './Button.scss';

function Button({ children, to, href, variant = 'primary', type = 'button', onClick, className = '' }) {
  const classes = `button button--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
