
import {Link} from 'react-router-dom'
import Search from "./Search";

function Header() {
  return (
    <div className="header">
        <Link to="/">
        </Link>
        <div>
          <Link to="/cart" className="button button--cart">
          </Link>
      </div>
</div>
  );
}
export default Header;
