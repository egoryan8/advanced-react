import { Profile, ValidateProfileError } from '../../types/profile';

function isValidHttpUrl(string: string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === 'http:' || url.protocol === 'https:';
}

export const validateProfileData = (profile?: Profile) => {
    const errors: ValidateProfileError[] = [];

    if (!profile) {
        return [ValidateProfileError.DATA_ERROR];
    }

    const {
        lastName,
        firstName,
        age,
        avatar,
        city,
        country,
    } = profile;

    if (!lastName || !firstName) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    if (avatar && !isValidHttpUrl(avatar)) {
        errors.push(ValidateProfileError.INCORRECT_AVATAR);
    }

    return errors;
};
