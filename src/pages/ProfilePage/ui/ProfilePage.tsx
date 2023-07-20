import { classNames } from 'shared/lib/classNames/classNames';
import {memo, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import {fetchProfileData, ProfileCard, profileReducer} from 'entities/Profile';
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";

const reducers: ReducersList = {
    profile: profileReducer,
};
export interface ProfilePageProps {
  className?: string;
}
const ProfilePage = memo((props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchProfileData())
    }, [])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ProfileCard/>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
