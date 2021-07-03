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
// export const initialValues = [
// 	//first page
// 	{
// 		Complete: true,
// 		firstname: 'test',
// 		lastname: 'test',
// 		email: 'abc@hh.com',
// 		password:'Moyyn@123',
// 		confirmpassword:'Moyyn@123',
// 		activeJobSeeking:true,
// 		termsAndPrivacyFlag: true
// 	},
// 	//second page
// 	{
// 		Complete: true,
// 		cvEnglish: [],
// 		cvGerman: [],
// 		desiredPositions: ["Electrical Engineer (m/w/x) - MO4 - Talent Pool - Germany","Embedded Software Engineer (m/w/x) - MO3 - Talent Pool - Germany"]
// 	},
// 	//third page
// 	{
// 		Complete: true,
// 		country: 'Germany',
// 		city: 'Berlin',
// 		visaType: 'EU Citizen',
// 		currentlyEmployedFlag: true,
// 		drivingPermitFlag: true,
// 		noticePeriod: '2',
// 		contactNumber: '668877989',
// 		earliestJoiningDate: '01-10-2020'
// 	},
// 	//fourth page
// 	{
// 		Complete: true,
// 		relocationWillingnes: true,
// 		countryPreferences: ['Germany', 'Austria', 'Hungary', 'Poland'],
// 		cityPreferences: ['Krakow', 'Warsaw', 'Budapest', 'Berlin', 'Vienna'],
// 		desiredEmployment:
// 			{
// 				remote: true,
// 				partTime: true,
// 				fulltime: true,
// 				freelance: true,
// 			},
// 		onlineProfiles:
// 			{
// 				Stackoverflow: 'dummy link',
// 				LinkedIn: 'dummy link',
// 				Github: 'dummy link',
// 				Xing: 'dummy link',
// 				Dribbble: 'dummy link',
// 				Behance: 'dummy link',
// 				Other: 'dummy link',
// 			},
// 	},
// 	//fifth page
// 	{
// 		Complete: true,
// 		careerLevel: 'Senior',
// 		industries: ['Computer Software'],
// 		skills: ['Java', 'JavaScript', 'C++', 'Python'],
// 		workExperience: [
// 					{"Category": "IT Operations", "Role": "Solution Architect", "Experience": 2},
// 			        {"Category": "IT Operations", "Role": "Technical Support Specialist", "Experience": 2},
// 			        {"Category": "IT Operations", "Role": "QA Manager", "Experience": 4}
// 				],
// 		languages: [{
// 			               "language":"German",
// 			               "level":"Native"
// 			            },
// 			            {
// 			               "language":"Russian",
// 			               "level":"Native"
// 			            },
// 			            {
// 			               "language":"English",
// 			               "level":"Native"
// 			            }],
// 	},

// ]
