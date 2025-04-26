import { useNavigate } from "react-router-dom";
import "../styles/EquipmentTable.css";

function EquipmentTable({ equipment }) {
  const navigate = useNavigate();

  return (
    <table className="equipment-table">
      <thead>
        <tr>
          <th>Equipment</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {equipment.map(eq => (
          <tr key={eq.index}>
            <td>{eq.name}</td>
            <td>
              <button
                className="view-btn"
                onClick={() => navigate(`/equipment/${eq.index}`)}
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EquipmentTable;
