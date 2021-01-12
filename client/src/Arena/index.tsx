import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actions from '../redux/actions';

export interface ArenaProps {
  leave: () => void;
}

const Arena: React.FC<ArenaProps> = props => {
  const history = useHistory();

  React.useEffect(() => {
    return history.listen(() => {
      props.leave();
    });
  });

  return <div>arena</div>;
};

const mapDispatchToProps = { leave: actions.LeaveDen };

export default connect(null, mapDispatchToProps)(Arena);
