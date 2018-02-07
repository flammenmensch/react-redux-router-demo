import {getLatest} from '../../services/fixerApi';

const SET_CURRENCY = 'app/currency/set_currency';
const SET_LOADING = 'app/currency/set_loading';

const initialState = {
  loading: false,
  rates: null,
  base: 'RUB',
};

const setCurrency = (data) => ({
  type: SET_CURRENCY,
  payload: data
});

const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value
});

export const loadCurrency = (base) => (dispatch) => {
  dispatch(setLoading(true));

  getLatest(base)
    .then((data) => dispatch(setCurrency(data)))
    .catch(() => dispatch(setLoading(false)));
};

export default (state=initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_CURRENCY:
      return {
        ...state,
        base: action.payload.base,
        rates: action.payload.rates,
        loading: false
      };
    default:
      return state;
  }
};
