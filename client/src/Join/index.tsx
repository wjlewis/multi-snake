import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../redux/actions';
import { AppState } from '../redux/app';

export interface JoinProps {
  isInDen: boolean;
  join: (handle: string) => void;
}

const Join: React.FC<JoinProps> = props => {
  const [handle, setHandle] = React.useState('');

  function updateHandle(e: any) {
    setHandle(e.target.value);
  }

  function join(e: any) {
    props.join(handle);
  }

  return props.isInDen ? (
    <Redirect push to="/arena" />
  ) : (
    <div>
      <input
        type="text"
        placeholder="rake"
        value={handle}
        onChange={updateHandle}
      />
      <button onClick={join}>Join</button>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  isInDen: state.id !== null && !state.isJoining && !state.isLeaving,
});

const mapDispatchToProps = { join: actions.JoinDen };

export default connect(mapStateToProps, mapDispatchToProps)(Join);
