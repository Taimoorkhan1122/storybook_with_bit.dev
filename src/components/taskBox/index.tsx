import React from 'react'
import ProviderWrapper from './redux/ProviderWrapper';
import { store } from './redux/store';
import { PureInboxScreen } from './InboxScreen'

const TaskBox = () => {
    return (
      <ProviderWrapper store={store}>
        <PureInboxScreen error={null} />
      </ProviderWrapper>
    );
}

export default TaskBox
