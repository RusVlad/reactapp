import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import * as ItemsActions from "../../store/actions/itemsActions";
import DefaultCard from "../../components/common/defaultCard";
import ItemForm from "../../components/items/itemForm";
import NavButton from "../../components/common/navButton";
import ActionButton from "../../components/common/actionButton";

const ItemPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const storeItems = useSelector((state) => state.itemsReducer.items);
  const [errors, setErrors] = useState({ message: [] });

  const saveEdit = () => {
    dispatch(ItemsActions.editItem(editData)).then((res) => {
      if (res.error) {
        setErrors({ message: res.error });
      }
    });
  };

  useEffect(() => {
    let filterItem =
      storeItems.length > 0 && storeItems.find((data) => data._id === id);
    if (filterItem) {
      setItem(filterItem);
    } else {
      dispatch(ItemsActions.getItems());
    }
  }, []);

  useEffect(() => {
    let filterItem = storeItems.find(
      (data) => data._id === id && data !== item
    );
    setItem(filterItem);
    setIsEditing(false);
  }, [storeItems]);

  const renderEditingActions = () => {
    return (
      <div>
        <div className="actions">
          <button className="btn light" type="submit">
            Save
          </button>
          <ActionButton
            onClickFunction={() => {
              setIsEditing(false);
            }}
            text="Cancel"
          />
        </div>
        <p className="errorMessage">
          {errors.message.map((err, index) => {
            return <span key={index}>{err}</span>;
          })}
        </p>
      </div>
    );
  };

  const renderDefaultActions = () => {
    return (
      <div className="actions">
        <ActionButton
          onClickFunction={() => {
            setEditData(item);
            setIsEditing(true);
          }}
          modifierClass="light"
          text="Edit"
        />
        <NavButton path="/items" text="Items" />
      </div>
    );
  };

  return (
    <div className="container item-page">
      {isEditing ? (
        <ItemForm
          submitFunction={saveEdit}
          item={editData}
          setEditItem={setEditData}
        >
          {renderEditingActions()}
        </ItemForm>
      ) : (
        <div>
          <DefaultCard item={item} showPublished={true} />
          {renderDefaultActions()}
        </div>
      )}
    </div>
  );
};

export default ItemPage;
