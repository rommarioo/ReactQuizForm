import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hook/redux";

const Table = () => {
  const steps = useAppSelector((state) => state.question);
  const person = useAppSelector((state) => state.person);
  const massive = [...Object.entries(steps), ...Object.entries(person)];
  delete massive[4];
  const navigate = useNavigate();
  return (
    <>
      <table className="success__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          {massive.map((item) => (
            <tr key={item[0]}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>

      <button className="success__button" onClick={() => navigate("/")}>
        TO START
      </button>
    </>
  );
};

export default Table;
