import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EquipmentDetail from "../components/EquipmentDetail";
import "../styles/EquipmentPage.css";
import axios from "axios";

function EquipmentPage() {
  const { index } = useParams();
  const [equipment, setEquipment] = useState(null);

  async function handleEquipmentDetails() {
    const response = await axios.get(
      `https://www.dnd5eapi.co/api/equipment/${index}`
    );
    console.log(response);
    if (response.status === 200) {
      setEquipment(response.data);
    } else {
      alert("Some error occured during api call.");
    }
  }

  useEffect(() => {
    handleEquipmentDetails();
  }, []);

  console.log(equipment)

  if (!equipment)
    return (
      <div className="equipment-page-container">
        <div className="loading">Loading...</div>
      </div>
    );

  return (
    <div className="equipment-page-container">
      <div className="equipment-card">
        <h2 className="equipment-title">{equipment.name}</h2>
        <EquipmentDetail equipment={equipment} />
      </div>
    </div>
  );
}

export default EquipmentPage;
