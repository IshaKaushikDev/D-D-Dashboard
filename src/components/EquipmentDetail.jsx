import "../styles/EquipmentDetail.css";

function EquipmentDetail({ equipment }) {
    return (
      <table className="equipment-detail-table">
        <tbody>
          <tr>
            <td className="detail-label">Equipment Category</td>
            <td className="detail-value">{equipment.equipment_category?.name || "-"}</td>
          </tr>
          <tr>
            <td className="detail-label">Gear Category</td>
            <td className="detail-value">{equipment.gear_category?.name || "-"}</td>
          </tr>
          <tr>
            <td className="detail-label">Weight</td>
            <td className="detail-value">{equipment.weight || "-"}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  
  export default EquipmentDetail;
  