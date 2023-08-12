import { createSelector } from '@reduxjs/toolkit';
import { getProfile } from 'entities/Profile/model/selectors/getProfile/getProfile';

export const getProfileForm = createSelector(
    getProfile,
    (profile) => profile?.form,
);
