import * as React from "react";
import "./AirlineListItem.scss";

export const AirlineListItem: React.FC<any> = ({ item }: any) => {
  return (
    <div>
      <h2>{item.id}</h2>
      <h2>{item.name}</h2>
      <h2>{item.icao}</h2>
      <h2>{item.callsign}</h2>
      <h2>{item.country}</h2>
    </div>
  );
};
