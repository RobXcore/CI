import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListActions, selectListItems } from "@redux/ListRedux";
import data from "../data/data.json";

export const useAirLine = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectListItems);

  React.useEffect(() => {
    dispatch(ListActions.updateList(data));
  }, []);

  return items;
};
