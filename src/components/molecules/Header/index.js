import './styles.scss';
import Logo from 'assets/icons/LogoIcon';

function Header() {
  return (
    <header>
      <div className="header">
        <h1>Challenge</h1>
        <Logo />
      </div>
    </header>
  );
}

export default Header;
