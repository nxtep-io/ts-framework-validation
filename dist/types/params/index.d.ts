import isValidId from './isValidId';
import isValidEmail from './isValidEmail';
import isValidPassword from './isValidPassword';
import isValidPhoneNumber from './isValidPhoneNumber';
export { isValidId, isValidEmail, isValidPassword, isValidPhoneNumber };
declare const _default: {
    isValidId: (id: string) => Promise<boolean>;
    isValidName: (name?: string) => Promise<boolean>;
    isValidEmail: (email?: string) => Promise<boolean>;
    isValidUsername: (username?: string) => Promise<boolean>;
    isValidPassword: (password?: string) => Promise<boolean>;
    isValidPhoneNumber: (phoneNumber?: string) => Promise<boolean>;
};
export default _default;
