import { useEffect, useState } from "react";
import EquipmentTable from "../components/EquipmentTable";
import { FaSearch } from "react-icons/fa";
import "../styles/Home.css";
import axios from "axios";

function Home() {
  const [equipment, setEquipment] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchResult() {
    const result = await axios.get("https://www.dnd5eapi.co/api/equipment");
    console.log(result);
    if (result?.status === 200) {
      setEquipment(result?.data?.results);
    }
    else{
        alert('Some error occured during api call.')
      }
  }
 console.log(equipment)
  useEffect(() => {
    fetchResult();
  }, []);

  const filtered = equipment.filter((eq) =>
    eq.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1 className="home-title">D & D Equipment</h1>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search equipment"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </div>
      <div className="table-container">
        <EquipmentTable equipment={filtered} />
      </div>
    </div>
  );
}

export default Home;
