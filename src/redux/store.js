export const actions = {
  increment: "@DATA/increment",
  setBC: "@BC/set",
  decrement: "@DATA/decrement",
};

const initalState = { n: 0, BC: null };
export const reducer = (state = initalState, action) => {
  console.log(action);

  if (state.BC && !action.BCMODE) {
    // can share state?
    state.BC.postMessage(action);
  }

  switch (action.type) {
    case actions.increment:
      return { ...state, n: state.n + 1 };
    case actions.decrement:
      return { ...state, n: state.n - 1 };
    case actions.setBC:
      return { ...state, BC: action.BC };
    default:
      return state;
  }
};
