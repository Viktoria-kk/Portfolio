import logo from '../../assets/viktoria-logo-clean.png';
import './LogoMark.scss';

function LogoMark() {
  return (
    <span className="logo-mark">
      <img src={logo} alt="Viktoria flower V logo" />
    </span>
  );
}

export default LogoMark;
