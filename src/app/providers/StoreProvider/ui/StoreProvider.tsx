import { ReactNode } from 'react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const navigate = useNavigate();

    const store = createReduxStore(
      initialState as StateSchema,
      navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
