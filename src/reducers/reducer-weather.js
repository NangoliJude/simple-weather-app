import {FETCH_WEATHER} from '../actions'

export default function(state = [], action) {
    if (action.error) {
        return state;
        }
        // eslint-disable-next-line
        switch (action.type) {
            case FETCH_WEATHER:
              return [action.payload.data, ...state];
          }
          return state;
        }

