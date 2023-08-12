import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        try {
            const formData = getProfileForm(getState());
            const response = await extra.api.put('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
        }
    },
);
