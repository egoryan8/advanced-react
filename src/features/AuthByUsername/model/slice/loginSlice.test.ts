import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { loginActions, LoginSchema } from 'features/AuthByUsername';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';

describe('loginSlice.test', () => {
    test('test set username', async () => {
        const state: DeepPartial<LoginSchema> = { username: 'any name' };
        expect(loginReducer(
          state as LoginSchema,
          loginActions.setUserName('admin'),
        )).toEqual({ username: 'admin' });
    });

    test('test set password', async () => {
        const state: DeepPartial<LoginSchema> = { password: '000' };
        expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123'),
        )).toEqual({ password: '123' });
    });
});
