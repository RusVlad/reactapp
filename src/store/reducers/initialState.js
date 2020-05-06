export default {
  userReducer: {
    token: null,
    user: {},
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
