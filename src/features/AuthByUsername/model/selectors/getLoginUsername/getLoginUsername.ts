import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';

export const getLoginUsername = createSelector(
    getLoginState,
    (state) => state.username,
);
