import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1です</h1>
      <Link to="/paga1/datailA">DatailA</Link>
      <br />
      <Link to="/paga1/datailB">DatailB</Link>
    </div>
  );
};
