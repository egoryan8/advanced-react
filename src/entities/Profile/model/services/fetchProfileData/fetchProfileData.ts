import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {Profile} from "entities/Profile";


export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    try {
      const response = await extra.api.get('/profile');
      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
    }
  },
);
