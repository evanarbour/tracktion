import {
  ADD_HABIT,
  SET_USER,
  ADD_GOAL,
  ADD_GOAL_STEP,
  UPDATE_HABIT,
  TOGGLE_TRACKTION_DAY,
  UPDATE_GOAL,
  TOGGLE_GOAL_STEP,
  REMOVE_HABIT,
  REMOVE_GOAL,
  REMOVE_GOAL_STEP
} from './actions';

const intitialState = {
  username: '',
  email: '',
  goals: [],
  habits: []
}

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case ADD_HABIT: {
      return {
        ...state,
        habits: [...state.habits, action.payload]
      }
    }
    case SET_USER: {
      return {
        ...state,
        ...action.payload
      }
    }
    case ADD_GOAL:
      return state;
    case ADD_GOAL_STEP:
      return state;
    case UPDATE_HABIT:
      return state;
    case TOGGLE_TRACKTION_DAY:
      return state;
    case UPDATE_GOAL:
      return state;
    case TOGGLE_GOAL_STEP:
      return state;
    case REMOVE_HABIT:
      return state;
    case REMOVE_GOAL:
      return state;
    case REMOVE_GOAL_STEP:
      return state;
    // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
    // case UPDATE_PRODUCTS:
    //   return {
    //     ...state,
    //     products: [...action.products],
    //   };

    // case ADD_TO_CART:
    //   return {
    //     ...state,
    //     cartOpen: true,
    //     cart: [...state.cart, action.product],
    //   };
    // case ADD_MULTIPLE_TO_CART:
    //   return {
    //     ...state,
    //     cart: [...state.cart, ...action.products],
    //   };
    // // Returns a copy of state, sets the cartOpen to true and maps through the items in the cart.
    // // If the item's `id` matches the `id` that was provided in the action.payload, we update the purchase quantity.
    // case UPDATE_CART_QUANTITY:
    //   return {
    //     ...state,
    //     cartOpen: true,
    //     cart: state.cart.map((product) => {
    //       if (action._id === product._id) {
    //         product.purchaseQuantity = action.purchaseQuantity;
    //       }
    //       return product;
    //     }),
    //   };

    // // First we iterate through each item in the cart and check to see if the `product._id` matches the `action._id`
    // // If so, we remove it from our cart and set the updated state to a variable called `newState`
    // case REMOVE_FROM_CART:
    //   let newState = state.cart.filter((product) => {
    //     return product._id !== action._id;
    //   });

    //   // Then we return a copy of state and check to see if the cart is empty.
    //   // If not, we set the cartOpen status to  `true`. Then we return an updated cart array set to the value of `newState`.
    //   return {
    //     ...state,
    //     cartOpen: newState.length > 0,
    //     cart: newState,
    //   };

    // case CLEAR_CART:
    //   return {
    //     ...state,
    //     cartOpen: false,
    //     cart: [],
    //   };

    // case TOGGLE_CART:
    //   return {
    //     ...state,
    //     cartOpen: !state.cartOpen,
    //   };

    // case UPDATE_CATEGORIES:
    //   return {
    //     ...state,
    //     categories: [...action.categories],
    //   };

    // case UPDATE_CURRENT_CATEGORY:
    //   return {
    //     ...state,
    //     currentCategory: action.currentCategory,
    //   };

    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
  }
};

// export function useProductReducer(initialState) {
//   return useReducer(reducer, initialState);
// }
