import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from 'entities/Profile/model/selectors/getProfile/getProfile';

export const getProfileValidateErrors = createSelector(
    getProfile,
    (profile) => profile?.validateErrors,
);
