import React, { ComponentType } from 'react';

import { GameContextProvider } from './context';

const withPosition = <Props extends Record<string, unknown>>(Component: ComponentType<Props>) => {
  const ComponentWithPositionContext = (props: Props) => {
    return (
      <GameContextProvider>
        <Component {...props} />
      </GameContextProvider>
    );
  };

  return ComponentWithPositionContext;
};

export default withPosition;
