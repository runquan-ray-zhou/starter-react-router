import { Link } from "react-router-dom";
export default function Nav() {
  return (
      <nav>
        <div>
          <Link to="/lamps"><h3>Lamps</h3></Link>
          <Link to="/lamps/type/Floor"><h3>Floor Lamps</h3></Link>
          <Link to="/lamps/type/Ceiling"><h3>Ceiling Lamps</h3></Link>
          <Link to="/lamps/type/Table"><h3>Table Lamps</h3></Link>
          <Link to="/candles"><h3>Candles</h3></Link>
          <Link to="/candles/type/Decorative"><h3>Decorative Candles</h3></Link>
          <Link to="/candles/type/Flameless"><h3>Flameless Candles</h3></Link>
          <Link to="/candles/type/Celebratory"><h3>Celebratory Candles</h3></Link>
        </div>
      </nav>
  );
};