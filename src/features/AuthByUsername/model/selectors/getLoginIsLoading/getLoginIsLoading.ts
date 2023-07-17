import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';

export const getLoginIsLoading = createSelector(
    getLoginState,
    (state) => state?.isLoading || false,
);
