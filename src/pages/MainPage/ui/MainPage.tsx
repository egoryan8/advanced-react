import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input
                value={value}
                onChange={onChange}
                placeholder={t('Введите текст')}
            />
        </div>
    );
}

export default MainPage;
