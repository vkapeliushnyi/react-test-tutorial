import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>
        <Link to="/"> All Todos </Link>
      </h1>
      <h1>
        <Link to="/done"> Done Todos </Link>
      </h1>
    </header>
  );
}

export default Header;
