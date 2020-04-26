import React from "react";
import PropTypes from "prop-types";

import { CURRENCY } from "../../constants";
import ActionButton from "./actionButton";

const DefaultCard = (props) => {
  const item = { ...props.item };
  const isPublished = item.published ? "Published" : "Unpublished";

  return (
    <div className="card">
      <h3 className="title">
        {item.title}
        {props.deleteItem && (
          <ActionButton
            onClickFunction={(ev) => props.deleteItem(ev, item._id)}
            modifierClass="text"
            text="X"
          >
            <i className="material-icons">close</i>
          </ActionButton>
        )}
      </h3>
      <p className="description">{item.description}</p>
      <p className={`status ${isPublished}`}>
        {props.showPublished && isPublished}
      </p>
      <p className="price">
        {item.price}
        <sup className="currency">{CURRENCY}</sup>
      </p>
    </div>
  );
};

DefaultCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
  showPublished: PropTypes.bool,
  deleteItem: PropTypes.func,
};

export default DefaultCard;
