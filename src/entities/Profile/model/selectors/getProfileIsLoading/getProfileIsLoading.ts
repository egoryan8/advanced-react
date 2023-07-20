import {createSelector} from "@reduxjs/toolkit";
import {getProfile} from "entities/Profile/model/selectors/getProfile/getProfile";

export const getProfileIsLoading = createSelector(
  getProfile,
  (profile) => profile?.isLoading
)
