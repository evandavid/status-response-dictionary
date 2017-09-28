module.exports = {
  Roles: {
    SuperAdmin: 1,
    Administrator: 2,
    User: 3
  },
  CheckoutResult: {
    Success: 0,
    InsufficientBalance: 1,
    InsufficientUnit: 2,
    WrongPassword: 3,
    UnknownError: 4,
    PasswordIsEmpty: 5,
    NoActiveUserFound: 6,
    UserNotYetDeposit: 7,
    ActiveCartNotFound: 8,
    UserNotYetVerified: 9,
    ProductNotFound: 10,
    SwitchingProductCannotBeEqual: 10,
    TransactionNotSupported: 11,
    SecurityCodeInvalid: 26,
  },
  AuthenticationResult: {
    Success: 0,
    UserNotExists: 1,
    NotVerified: 2,
    UserAlreadyExists: 3,
    Error: 4,
    NewPasswordSameWithOldOne: 5,
    OldPasswordNotMatchWithCurrent: 6,
    RequiredTwoFactorAuth: 7,
    RedirectToProfile: 8,
    UserNotActive: 9,
    UserIsLocked: 10,
    ProfileNotComplete: 11,
    UserNotTopUp: 12,
    CaptchaNotSolve: 15,
    CaptchaMissingInputSecret: 16,
    CaptchaInvalidInputSecret: 17,
    CaptchaMissingInputResponse: 18,
    CaptchaInvalidInputResponse: 19,
    CaptchaMissingServerKey: 20,
    CaptchaMissingEncodedToken: 21
  },
  TransactionType: {
    Unknown: 0,
    Buy: 1,
    Sell: 2,
    SwitchingIn: 5,
    SwitchingOut: 6
  },
  TransactionStatus: {
    Pending: 0,
    Complete: 1,
    Reject: 2
  }
};
