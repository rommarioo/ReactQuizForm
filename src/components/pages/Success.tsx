import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success">
      <div className="success__wrapper">
        <h1 className="success__title">Success</h1>
        <p>Your choice)</p>
        <table className="success__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            {/* {massive.map((item) => (
              <tr key={item[0]}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
              </tr>
            ))} */}
          </tbody>
          <tfoot></tfoot>
        </table>

        <button className="success__button" onClick={() => navigate("/")}>
          To start
        </button>
      </div>
    </div>
  );
};

export default Success;
