export interface EmployeeDetails {
  contactName: String;
  dateOfBirth: Date;
  maskedSocialSecurity: String;
  employmentStatus: String;
  hireDate: Date;
  streetAddress: {
    addressLine1: String;
    addressLine2: String | null;
    city: String;
    state: String;
    zip: String;
  };
  mailingAddress: {
    addressLine1: String | null;
    addressLine2: String | null;
    city: String | null;
    state: String | null;
    zip: String | null;
  };
  personalEmail: String;
  // personalEmail: null,
  workEmail: String;
  // workEmail: null,
  mobilePhone: String;
  // mobilePhone: null,
  workPhone: String;
  // workPhone: null,
  genderDescription: String;
  medicareEligible: boolean | null;
  smoker: boolean | null;
  disabled: boolean | null;
  student: boolean | null;
}

export const EMPLOYEEDETAILS_MOCK: EmployeeDetails = {
  contactName: "Carrie Conway",
  dateOfBirth: new Date("February 7, 1990"),
  maskedSocialSecurity: "*1234",
  employmentStatus: "Part-Time",
  hireDate: new Date("January 15, 2019"),
  // streetAddress: {
  //   addressLine1: '12345 Aldergrove Street',
  //   addressLine2: null,
  //   city: 'Portland',
  //   state: 'OR',
  //   zip: '97217',
  // },
  // mailingAddress: {
  //   addressLine1: 'PO Box 51323',
  //   addressLine2: null,
  //   city: 'Portland',
  //   state: 'OR',
  //   zip: '97221'
  // },
  streetAddress: {
    addressLine1: "12345 Aldergrove Street",
    addressLine2: null,
    city: "Portland",
    state: "OR",
    zip: "97217",
  },
  mailingAddress: {
    addressLine1: null,
    addressLine2: null,
    city: null,
    state: null,
    zip: null,
  },
  personalEmail: "carrieconway@gmail.com",
  // personalEmail: null,
  workEmail: "carrie.conway@work.com",
  // workEmail: null,
  mobilePhone: "555-555-5555",
  // mobilePhone: null,
  workPhone: "222-222-2222",
  // workPhone: null,
  genderDescription: "Female",
  medicareEligible: null,
  smoker: null,
  disabled: null,
  student: null,
};
