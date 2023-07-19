import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

export interface ProfilePageProps {
  className?: string;
}
const ProfilePage = memo((props: ProfilePageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            PROFILE PAGE
        </div>
    );
});

export default ProfilePage;
