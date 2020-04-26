import React, { useEffect, useState } from "react";
import Items from "../../components/items/itemList";
import { useDispatch, useSelector } from "react-redux";

import { FILTER_VIEW_TYPE_CARDS, FILTER_VIEW_TYPE_LIST } from "../../constants";
import * as ItemsActions from "../../store/actions/itemsActions";
import * as ConfirmationModalActions from "../../store/actions/confirmationModalActions";
import SearchForm from "../../components/common/searchForm";
import ListViewTypeFilter from "../../components/common/listViewTypeFilter";
import DefaultList from "../../components/common/defaultList";

const ItemsPage = () => {
  const items = useSelector((state) => state.itemsReducer.items);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [filterViewType, setFilterViewType] = useState(FILTER_VIEW_TYPE_CARDS);
  const dispatch = useDispatch();

  // fetch items
  useEffect(() => {
    if (!items.length) {
      dispatch(ItemsActions.getItems());
    }
  }, []);

  useEffect(() => {
    setFilteredItems([...items]);
  }, [items]);

  // search filter
  useEffect(() => {
    let filterKeyword = searchInputValue.toLowerCase();
    let filteredItems = items.filter((item) => {
      let textToFilter =
        item.title.toLowerCase() +
        item.description.toLowerCase() +
        item.price.toString();

      if (textToFilter.includes(filterKeyword)) {
        return item;
      }
    });

    setFilteredItems(filteredItems);
  }, [searchInputValue]);

  /**
   *
   * @param {string} id
   */
  const deleteItemFromList = (id) => {
    dispatch(ItemsActions.deleteItem(id));
  };

  /**
   *
   * @param {string} id
   */
  const openDeleteConfirmationModal = (id) => {
    dispatch(
      ConfirmationModalActions.setConfirmationFunction(() =>
        deleteItemFromList(id)
      )
    );
    dispatch(ConfirmationModalActions.setIsOpen(true));
  };

  /**
   *
   * @param {Object} ev Click event
   * @param {string} id Id of item to delete
   */
  const deleteItem = (ev, id) => {
    ev.preventDefault();
    openDeleteConfirmationModal(id);
  };

  return (
    <Items
      searchForm={
        <SearchForm
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
      }
      viewTypeFilter={
        <ListViewTypeFilter
          filterViewType={filterViewType}
          setFilterViewType={setFilterViewType}
          cardsView={FILTER_VIEW_TYPE_CARDS}
          listView={FILTER_VIEW_TYPE_LIST}
        />
      }
      list={
        <DefaultList
          deleteItem={deleteItem}
          items={filteredItems}
          filterViewType={filterViewType}
        />
      }
    />
  );
};

export default ItemsPage;
