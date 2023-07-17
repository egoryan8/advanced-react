import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';

export const getLoginPassword = createSelector(
    getLoginState,
    (state) => state?.password || '',
);
