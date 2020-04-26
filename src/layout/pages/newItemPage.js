import React, { useState } from "react";
import ItemForm from "../../components/items/itemForm";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as ConfirmationModalActions from "../../store/actions/confirmationModalActions";
import * as ItemsActions from "../../store/actions/itemsActions";
import NavButton from "../../components/common/navButton";

const NewItemPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({ message: "" });

  const defaultNewItemState = {
    title: "",
    description: "",
    price: 0,
    published: false,
  };

  const [newItem, setNewItem] = useState(defaultNewItemState);

  const createNewItem = () => {
    dispatch(ItemsActions.createItem(newItem)).then((res) => {
      if (res.error) {
        setErrors({ message: res.error });
      } else {
        history.push("/items");
      }
    });
  };

  const confirmCreateItem = () => {
    if (!newItem.title || !newItem.description) {
      setErrors({ message: ["All fields must be filled"] });
    } else {
      dispatch(ConfirmationModalActions.setConfirmationFunction(createNewItem));
      dispatch(ConfirmationModalActions.setIsOpen(true));
    }
  };

  return (
    <div className="container item-page">
      <h2 className="header">New Item</h2>
      <ItemForm
        submitFunction={confirmCreateItem}
        item={newItem}
        setEditItem={setNewItem}
      >
        <button className="btn light" type="submit">
          Save
        </button>
        <NavButton path="/items" text="Cancel" />
      </ItemForm>
      <p className="errorMessage">{errors.message}</p>
    </div>
  );
};

export default NewItemPage;
