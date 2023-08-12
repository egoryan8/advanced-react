import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from 'entities/Profile/model/selectors/getProfile/getProfile';

export const getProfileReadonly = createSelector(
    getProfile,
    (profile) => profile?.readonly,
);
