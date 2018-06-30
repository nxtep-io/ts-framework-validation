import isValidId from './isValidId';
import isValidEmail from './isValidEmail';
import isValidPassword from './isValidPassword';
import isValidPhoneNumber from './isValidPhoneNumber';
export { isValidId, isValidEmail, isValidPassword, isValidPhoneNumber };
declare const _default: {
    isValidId: (id: string) => Promise<Boolean>;
    isValidName: (name?: string) => Promise<Boolean>;
    isValidEmail: (email?: string) => Promise<Boolean>;
    isValidUsername: (username?: string) => Promise<Boolean>;
    isValidPassword: (password?: string) => Promise<Boolean>;
    isValidPhoneNumber: (phoneNumber?: string) => Promise<Boolean>;
};
export default _default;
