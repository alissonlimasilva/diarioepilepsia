export const Types = {
  REQUEST: 'crise/REQUEST',
  SUCCESS: 'crise/SUCCESS',
  FAILURE: 'crise/FAILURE',
};

const INITIAL = {
  user: undefined,
  loading: false,
  error: false,
};

export default function user(state = INITIAL, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {user: undefined, loading: true, error: false};
    case Types.FAILURE:
      return {...state, loading: false, error: true};
    case Types.SUCCESS:
      return {user: action.payload, loading: false, error: false};
    default:
      return state;
  }
}

export const Actions = {
  requestUserdata: () => ({
    type: Types.REQUEST,
  }),
};
