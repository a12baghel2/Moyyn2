export const authresetforminitialvalue = {
  old_pass: "",
  new_pass: "",
  confirm_pass: "",
};

export const resetforminitialvalue = {
  otp: "",
  password: "",
  confirmpassword: "",
};

export const initialValues = [
  //first page
  {
    Complete: false,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    activeJobSeeking: true,
    termsAndPrivacyFlag: false,
  },
  //second page
  {
    Complete: false,
    cvEnglish: [],
    cvGerman: [],
    desiredPositions: [],
  },
  //third page
  {
    Complete: false,
    country: "",
    city: "",
    visaType: "",
    currentlyEmployedFlag: false,
    drivingPermitFlag: false,
    noticePeriod: "",
    contactNumber: "",
    earliestJoiningDate: "",
  },
  //fourth page
  {
    Complete: false,
    relocationWillingnes: false,
    countryPreferences: [],
    cityPreferences: [],
    desiredEmployment: {
      remote: false,
      partTime: false,
      fulltime: false,
      freelance: false,
    },
    onlineProfiles: {
      Stackoverflow: "",
      LinkedIn: "",
      Github: "",
      Xing: "",
      Dribbble: "",
      Behance: "",
      Other: "",
    },
  },
  //fifth page
  {
    Complete: false,
    careerLevel: "",
    industries: [],
    skills: [],
    workExperience: [],
    languages: [],
  },
];

