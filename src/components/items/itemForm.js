import React from "react";
import PropTypes from "prop-types";

const ItemForm = (props) => {
  const item = props.item;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.submitFunction();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-item">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={item.title}
          onChange={(ev) =>
            props.setEditItem({ ...item, title: ev.target.value })
          }
        />
      </div>
      <div className="form-item">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={item.description}
          onChange={(ev) =>
            props.setEditItem({ ...item, description: ev.target.value })
          }
        />
      </div>
      <div className="form-item">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          value={item.price}
          onChange={(ev) =>
            props.setEditItem({ ...item, price: Number(ev.target.value) })
          }
          type="number"
          step="0.01"
        />
      </div>
      <div className="form-item checkbox">
        <label htmlFor="published">Published</label>
        <input
          id="published"
          name="published"
          value="true"
          checked={item.published === true || item.published === "true"}
          onChange={() => props.setEditItem({ ...item, published: true })}
          type="checkbox"
        />
      </div>
      <div className="form-item checkbox">
        <label htmlFor="unpublished">Unpublished</label>
        <input
          id="unpublished"
          name="unpublished"
          value="false"
          checked={item.published === false || item.published === "false"}
          onChange={() => props.setEditItem({ ...item, published: false })}
          type="checkbox"
        />
      </div>
      {props.children}
    </form>
  );
};

ItemForm.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    published: PropTypes.bool,
  }).isRequired,
  setEditItem: PropTypes.func.isRequired,
  children: PropTypes.node,
  submitFunction: PropTypes.func.isRequired,
};

export default ItemForm;
