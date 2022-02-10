import * as React from "react";
import { AirlineList } from "./components/AirlineList/AirlineList";
import "./styles.scss";
import { useAirLine } from "./hooks/useAirLine";

export default function App() {
  const useAirline = useAirLine();

  return (
    <div className="App">
      <AirlineList items={useAirline} />
    </div>
  );
}
