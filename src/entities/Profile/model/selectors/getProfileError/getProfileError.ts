import {createSelector} from "@reduxjs/toolkit";
import {getProfile} from "entities/Profile/model/selectors/getProfile/getProfile";

export const getProfileError = createSelector(
  getProfile,
  (profile) => profile?.error
)
