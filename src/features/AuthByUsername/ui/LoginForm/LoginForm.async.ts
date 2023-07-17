import { FC, lazy } from 'react';
import { LoginFormProps } from '../../ui/LoginForm/LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // Для имитации загрузки
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
