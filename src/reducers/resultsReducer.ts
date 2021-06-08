const initialResultsState: ResultsState = {
  coordinates: {
    center: {
      lat: 0,
      lng: 0
    }
  },
  libraries: [],
  selectedLib: {
    id: 0,
    charter: 0,
    name: "",
    sponsers: []
  },
  searchSuccess: false
};

export interface ResultsState {
  coordinates: {
    center: {
      lat: number;
      lng: number;
    };
  };
  libraries: {
    id: number;
    charter: number;
    name: string;
    address: {
      lat: number;
      lng: number;
    } 
  }[];
  selectedLib: {
    id: number;
    charter: number;
    name: string;
    sponsers: {
      id: number;
      user: {
        id: number;
        first_name: string;
        last_name: string;
      }
    }[];
  }
  searchSuccess: boolean
};

export default function resultsReducer(state = initialResultsState, action: {type:string} & ResultsState): ResultsState {
  switch(action.type) {
    case 'SET_RESULTS':
      return {
        ...state,
        coordinates: {
          center: {
            lat: action.coordinates.center.lat,
            lng: action.coordinates.center.lng,
          }
        },
        libraries: action.libraries,
        searchSuccess: true
      };
    case 'SET_LIBRARY':
      debugger;
      return {
        ...state,
        selectedLib: {
          id: action.selectedLib.id,
          charter: action.selectedLib.charter,
          name: action.selectedLib.name,
          sponsers: action.selectedLib.sponsers
        }
      }
    default:
      return state;  
  };
};