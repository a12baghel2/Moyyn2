import { mixed, string, boolean, object, number, array } from "yup";
import { ref } from "yup";

export const AuthResetPass = object({
  old_pass: string("*Please enter a valid one time password")
    .trim()
    .required("*Required"),
  new_pass: string("*Please enter a valid password.")
    .trim()
    .required("Required")
    .min(8, "Too short - minimum 8 characters reuired")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      "Password Must contain number & uppercase letters"
    ),
  confirm_pass: string("*Please confirm the password.")
    .trim()
    .required("*Please confirm the password.")
    .oneOf([ref("new_pass"), null], "Passwords must match"),
});

export const ResetPass = object({
  otp: string("*Please enter a valid one time password")
    .trim()
    .required("*Required"),
  password: string("*Please enter a valid password.")
    .trim()
    .required("Required")
    .min(8, "Too short - minimum 8 characters reuired")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      "Password Must contain number & uppercase letters"
    ),
  confirmpassword: string("*Please confirm the password.")
    .trim()
    .required("*Please confirm the password.")
    .oneOf([ref("password"), null], "Passwords must match"),
});

export const pageOneValidation = object({
  email: string()
    .email("*Please enter a valid email address.")
    .required("*Required field."),
  firstname: string("*Please enter a valid name.")
    .min(2, "Required field.")
    .required("*Required field."),
  lastname: string("*Please enter a valid name.")
    .min(2, "*Required field.")
    .required("*Required field."),
  password: string("*Please enter a valid password.")
    .trim()
    .required("Required")
    .min(8, "Too short - minimum 8 characters reuired")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      "Password Must contain number & uppercase letters"
    ),
  confirmpassword: string("*Please confirm the password.")
    .required("*Please confirm the password.")
    .oneOf([ref("password"), null], "Passwords must match"),
  termsAndPrivacyFlag: boolean().oneOf(
    [true],
    "*Please accept Terms of Use and Privacy Policy."
  ),
});

export const pageTwoValidation = object().shape(
  {
    cvEnglish: array().when("cvGerman", {
      is: (cvGerman) => !cvGerman || cvGerman.length <= 0,
      then: array()
        .min(1, "*Please pick a file.")
        .required("*Please pick a file."),
      otherwise: array(),
    }),
    cvGerman: array().when("cvEnglish", {
      is: (cvEnglish) => !cvEnglish || cvEnglish.length <= 0,
      then: array()
        .min(1, "*Please pick a file.")
        .required("*Please pick a file."),
      otherwise: array(),
    }),
    desiredPositions: array()
      .min(1, "*Please pick at least one option.")
      .required("*Required field."),
  },
  [["cvEnglish", "cvGerman"]]
);

export const pageThreeValidation = object({
  country: string("*Please enter a valid country name.")
    .min(2, "*Required field.")
    .required("*Required field."),
  city: string("*Please enter a valid city name.")
    .min(2, "*Required field.")
    .required("*Required field."),
  visaType: string().required("*Required field."),
  earliestJoiningDate: string("*Required field.")
    .min(10, "*Please use following format: DD/MM/YYYY")
    .max(10, "Invalid date.")
    .nullable()
    .required("*Required field."),
  contactNumber: string()
    .min(7, "*Required field.")
    .required("*Required field."),
  currentlyEmployedFlag: boolean(),
  noticePeriod: number()
    .nullable()
    .when("currentlyEmployedFlag", {
      is: true,
      then: number("*Please enter a number.")
        .positive("*Please enter a valid value.")
        .required("*Required field."),
    }),
});

const hasTrueValue = (obj) => {
  const values = Object.values(obj);
  for (const value of values) {
    if (value) {
      return true;
    }
  }
  return false;
};

export const pageFourValidation = object({
  relocationWillingnes: boolean(),
  countryPreferences: array().when("relocationWillingnes", {
    is: true,
    then: array()
      .min(1, "*Please pick at least one option.")
      .required("Required field."),
  }),
  cityPreferences: array().when("relocationWillingnes", {
    is: true,
    then: array()
      .min(1, "*Please pick at least one option.")
      .required("*Required field."),
  }),
  desiredEmployment: mixed()
    .test("employmentTest", "*Please pick at least one option.", (obj) =>
      hasTrueValue(obj)
    )
    .required("*Required field."),
});

function hasNativeLanguage(myArray) {
  return myArray.some((lang) => {
    return lang.level === "Native";
  });
}

export const pageFiveValidation = object({
  workExperience: array()
    .min(1, "*Please pick at least one option.")
    .required("*Required field."),
  careerLevel: string().required("*Required field."),
  industries: array()
    .min(1, "*Please pick at least one option.")
    .required("*Required field."),
  skills: array()
    .min(1, "*Please pick at least one option.")
    .required("*Required field."),
  languages: array()
    .test("nativeTest", "*Please pick at least one native language.", (value) =>
      hasNativeLanguage(value)
    )
    .required("*Required field."),
});
