import './LogoMark.scss';

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 64 64" role="img">
        <path className="logo-mark__petal logo-mark__petal--left" d="M31 43C18 37 11 27 14 15c11 2 19 11 18 24z" />
        <path className="logo-mark__petal logo-mark__petal--right" d="M33 43c13-6 20-16 17-28-11 2-19 11-18 24z" />
        <path className="logo-mark__petal logo-mark__petal--top" d="M32 29c-7-8-7-17 0-24 7 7 7 16 0 24z" />
        <path className="logo-mark__v-stem" d="M20 38c6 7 10 13 12 21 2-8 6-14 12-21" />
        <circle className="logo-mark__center" cx="32" cy="33" r="4.5" />
      </svg>
    </span>
  );
}

export default LogoMark;
