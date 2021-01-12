import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as net from '../net';

export function* rootSaga() {
  yield takeLatest(actions.ActionTypes.JoinDen, joinDen);
  yield takeLatest(actions.ActionTypes.LeaveDen, leaveDen);
}

function* joinDen(action: actions.Action) {
  try {
    yield put(actions.KickoffJoin());
    yield call(net.duplex.connect.bind(net.duplex));
    const info = yield call(net.joinDen, action.payload);
    yield put(actions.SaveId(info.id));
  } catch (err) {
    console.log(`failed with: ${err.message}`);
  } finally {
    yield put(actions.CompleteJoin());
  }
}

function* leaveDen() {
  try {
    yield put(actions.KickoffLeave());
    const state = yield select();
    yield call(net.duplex.disconnect.bind(net.duplex));
    yield call(net.leaveDen, state.id);
    yield put(actions.ClearId());
  } catch (err) {
    console.log(`failed with: ${err.message}`);
  } finally {
    yield put(actions.CompleteLeave());
  }
}
