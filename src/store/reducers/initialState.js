export default {
  userReducer: {
    token: null,
  },
  itemsReducer: {
    items: [],
  },
  confirmationModalReducer: {
    isOpen: false,
    confirmationFunction: () => {},
    message: "CONFIRM?",
  },
};
