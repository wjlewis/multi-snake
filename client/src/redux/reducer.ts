import { AppState, initState } from './app';
import * as actions from './actions';

export function appReducer(
  state: AppState = initState,
  action: actions.Action
): AppState {
  switch (action.type) {
    case actions.ActionTypes.KickoffJoin:
      return { ...state, isJoining: true };
    case actions.ActionTypes.CompleteJoin:
      return { ...state, isJoining: false };
    case actions.ActionTypes.SaveId:
      return { ...state, id: action.payload };
    case actions.ActionTypes.KickoffLeave:
      return { ...state, isLeaving: true };
    case actions.ActionTypes.CompleteLeave:
      return { ...state, isLeaving: false };
    case actions.ActionTypes.ClearId:
      return { ...state, id: null };
    default:
      return state;
  }
}
