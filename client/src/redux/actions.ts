export interface Action {
  type: string;
  payload?: any;
}

export const ActionTypes = {
  JoinDen: 'JoinDen',
  KickoffJoin: 'KickoffJoin',
  CompleteJoin: 'CompleteJoin',
  SaveId: 'SaveId',
  LeaveDen: 'LeaveDen',
  KickoffLeave: 'KickoffLeave',
  CompleteLeave: 'CompleteLeave',
  ClearId: 'ClearId',
};

export function JoinDen(handle: string): Action {
  return {
    type: ActionTypes.JoinDen,
    payload: handle,
  };
}

export function KickoffJoin(): Action {
  return {
    type: ActionTypes.KickoffJoin,
  };
}

export function CompleteJoin(): Action {
  return {
    type: ActionTypes.CompleteJoin,
  };
}

export function SaveId(id: string): Action {
  return {
    type: ActionTypes.SaveId,
    payload: id,
  };
}

export function LeaveDen(): Action {
  return {
    type: ActionTypes.LeaveDen,
  };
}

export function KickoffLeave(): Action {
  return {
    type: ActionTypes.KickoffLeave,
  };
}

export function CompleteLeave(): Action {
  return {
    type: ActionTypes.CompleteLeave,
  };
}

export function ClearId(): Action {
  return {
    type: ActionTypes.ClearId,
  };
}
