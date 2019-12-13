export const Types = {
  lista: 'crise/lista',
  ultima: 'crise/ultima',
};

const INITIAL = {
  lista: [],
  loading: false,
  error: false,
  ultimaCrise: null,
  numeroCrises: 0,
  crisesMes: 7,
  crisesSemana: 2,
};

export default function crise(state = INITIAL, action) {
  switch (action.type) {
    case Types.lista:
      return {
        ...state,
        lista: action.payload,
        numeroCrises: action.payload.length,
      };
    case Types.ultima:
      return {...state, ultimaCrise: action.payload};
    default:
      return state;
  }
}

export const Actions = {
  listaCrises: (lista = []) => ({
    type: Types.lista,
    payload: lista,
  }),
  ultimaCrise: (ultimaCrise = null) => ({
    type: Types.ultima,
    payload: ultimaCrise,
  }),
};
