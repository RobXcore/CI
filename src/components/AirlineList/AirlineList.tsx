import * as React from "react";
import { AirlineListItem } from "./AirlineListItem";
import "./AirlineList.scss";

export const AirlineList: React.FC<any> = ({ items = [] }: any) => {
  return (
    <div className="airline-list">
      {items.map((item: any) => (
        <AirlineListItem />
      ))}
    </div>
  );
};
