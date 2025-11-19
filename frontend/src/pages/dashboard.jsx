import React, { useEffect, useState } from "react";
import API from "../api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Footer from "../components/footer";

const Dashboard = () => {
  const [activities, setActivities] = useState([]);
  const [text, setText] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await API.get("/api/weather/today");
        setWeather(res.data.weather);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchActivities = async () => {
      try {
        const res = await API.get("/api/activity");
        setActivities(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
    fetchActivities();
  }, []);

  const handleAddActivity = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/activity", { text, lat: 0, lng: 0 });
      setActivities([...activities, res.data]);
      setText("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Today's Weather: {weather}</p>

      <form onSubmit={handleAddActivity}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add farm activity" required />
        <button type="submit">Add</button>
      </form>

      <ul>
        {activities.map((a, index) => (
          <li key={index}>{a.text}</li>
        ))}
      </ul>

      <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px", marginTop: "20px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {activities.map((a, index) => (
          <Marker key={index} position={[a.lat, a.lng]}>
            <Popup>{a.text}</Popup>
          </Marker>
        ))}
      </MapContainer>

      <Footer />
    </div>
  );
};

export default Dashboard;
