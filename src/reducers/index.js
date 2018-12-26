import {APPLY_OPERATOR, CLEAR, UPDATE_SCREEN_VALUE} from './../constants/actions';

const initialState = {
  operator: null,
  accumulator: 0,
  screen: 0,
  pristine: true,
};

function calculate({operator, accumulator, screen}) {
  switch (operator) {
    case '/':
      return Number(accumulator) / Number(screen);

    case '*':
      return Number(accumulator) * Number(screen);

    case '-':
      return Number(accumulator) - Number(screen);

    case '+':
      return Number(accumulator) + Number(screen);

    default:
      return screen;
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case APPLY_OPERATOR:
      return {
        ...state,
        screen: state.pristine ? calculate(state) : state.screen,
        accumulator: state.pristine ? calculate(state) : state.accumulator,
        operator: action.payload,
        pristine: false
      };

    case UPDATE_SCREEN_VALUE:
      return {
        ...state,
        screen: state.pristine ? Number(state.screen + action.payload) : action.payload,
        pristine: true
      };

    case CLEAR:
      return {
        ...state,
        ...initialState
      };

    default:
      return state;
  }
}

export default reducer;