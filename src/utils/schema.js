import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  email: Yup.string().email('Email address is invalid').required('Email address is required'),
  password: Yup.string().required('Password is required'),
});

export const forgotPassword = Yup.object({
  email: Yup.string().email('Email address is invalid').required('Email address is required'),
});

export const withdrawalSchema = Yup.object({
  password: Yup.string()
    .required('Password is required'),
  amount: Yup.number()
    .required('Amount is required')
    // .min(1, 'Amount must be at least 1')
    // .max(10000, 'Amount must be no more than 10000')
    .typeError('Amount must be a number')

});


export const RegistrationSchema = Yup.object({
  name: Yup.string()
    .required('Full name is required'),
  username: Yup.string()
    .required('Username is required'),
  referral_code: Yup.string()
    .optional(),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  phone: Yup.string()
    // .matches(/^[0-9]+$/, "Phone number is not valid")
    .required('Phone number is required'),
  btc_address: Yup.string()
    .optional(),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required')
});

export const ProfileSchema = Yup.object({
  name: Yup.string()
    .required('Full name is required'),
    // address: Yup.string()
    // .required('Address is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  phone: Yup.string()
    // .matches(/^[0-9]+$/, "Phone number is not valid")
    .required('Phone number is required'),
});


export const ResetPasswordSchema = Yup.object({
  otp: Yup.string().required('Reset OTP is required').min(4, 'OTP must be 4 characters long'),
  password: Yup.string().required('Password is required').min(5, 'Password must be at least 5 characters long'),
  password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Password does not match').required('Password Confirmation is required'),
});

export const VerifySchema = Yup.object({
  otp: Yup.string().required('Reset OTP is required').min(4, 'OTP must be 4 characters long or more'),
});

export const ResetOtp = Yup.object({
  email: Yup.string().email('Email address is invalid').required('Email address is required'),
});

export const updatePasswordShema = Yup.object({
  currentPassword: Yup.string().required('Current Password is required'),
  password: Yup.string().required('Password is required').min(5, 'Password must be at least 5 characters long'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password does not match').required('Password Confirmation is required'),
});
