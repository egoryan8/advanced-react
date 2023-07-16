import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';

export const getLoginError = createSelector(
    getLoginState,
    (state) => state.error,
);
