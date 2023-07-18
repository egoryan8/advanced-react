import { classNames } from 'shared/lib/classNames/classNames';

export interface ProfilePageProps {
  className?: string;
}
const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            PROFILE PAGE
        </div>
    );
};

export default ProfilePage;
