import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
  value?: string;
  content?: string;
}
interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  value: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}
export const Select = (props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange,
    } = props;

    const mods = {
        [cls.readonly]: readonly,
    };

    const optionsList = useMemo(() => options?.map((o) => (
        <option key={o.value} value={o.value}>{o.content}</option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
                className={cls.select}
            >
                {optionsList}
            </select>
        </div>
    );
};
