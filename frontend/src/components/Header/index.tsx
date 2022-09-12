import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={logo} alt="DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por
            <a href="https://www.linkedin.com/in/romulo-hip%C3%B3lito-abbiati-73b9b696/?locale=en_US">
              &nbsp;Romulo Abbiati
            </a>
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
