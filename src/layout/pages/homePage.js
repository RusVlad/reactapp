import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as itemsActions from "../../store/actions/itemsActions";
import DefaultList from "../../components/common/defaultList";

const HomePage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.itemsReducer.items);
  const [publishedItems, setPublishedItems] = useState([]);

  // fetch items
  useEffect(() => {
    if (!items.length) {
      dispatch(itemsActions.getItems());
    }
  }, []);

  useEffect(() => {
    let filteredItems = items.filter((item) => item.published).slice(0, 3);
    setPublishedItems(filteredItems);
  }, [items]);

  return (
    <div className="container">
      <h2 className="header">Home</h2>
      {publishedItems.length > 0 && (
        <div>
          <h3 className="header">Published items</h3>
          <div className="published-items">
            <DefaultList items={publishedItems} />
            <NavLink className="nav-link" to="/items">
              More...
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
