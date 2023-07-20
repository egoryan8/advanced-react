import {createSelector} from "@reduxjs/toolkit";
import {getProfile} from "entities/Profile/model/selectors/getProfile/getProfile";

export const getProfileData = createSelector(
  getProfile,
  (profile) => profile?.data
)
