import * as Yup from 'yup';
import VerificationFormModel from "./VerificationFormModel";
const {
  formField: {
    PFirstName,
    PLastName,
    PEmail,
    PPhoneNumber,
    PDateOfBirth,
    PBVN,
    PMaritalStatus,
    PDependant,
    PEducationLevel,
    // PProofOfIdentity,
    HState,
    HCity,
    HResidentialAddress,
    // HProofOfAddress,
    // WEmploymentStatus,
    // WCompanyName,
    // WState,
    // WCity,
    // WCompanyAddress,
    // EEmploymentType,
    // EJobRole,
    // EDateJoined,
    // ESalaryDate,
    // ECity,
    // ESalaryRange,
    // EStaffID,
    // NFirstName,
    // NLastName,
    // NEmail,
    // NPhoneNumber,
    // NRelationship,
    // NState,
    // NLocalGovernment,
    // NAddress,
  }
} = VerificationFormModel;


const VerificationValidationShema = [
  Yup.object().shape({
    [PFirstName.name]: Yup.string().required(`${PFirstName.requiredErrorMsg}`),
    [PLastName.name]: Yup.string().required(`${PLastName.requiredErrorMsg}`),
    [PEmail.name]: Yup.string('Enter your email address').required(`${PEmail.requiredErrorMsg}`).email('invalid email'),
    [PPhoneNumber.name]: Yup.string('Enter your phone number').nullable().required(`${PPhoneNumber.requiredErrorMsg}`),
    [PDateOfBirth.name]: Yup.date().nullable().required(`${PDateOfBirth.requiredErrorMsg}`).default(() => new Date()) ,
    [PBVN.name]: Yup.string().required(`${PBVN.requiredErrorMsg}`),
    [PMaritalStatus.name]: Yup.string().required(`${PMaritalStatus.requiredErrorMsg}`),
    [PDependant.name]: Yup.string().required(`${PDependant.requiredErrorMsg}`),
    [PEducationLevel.name]: Yup.string().required(`${PEducationLevel.requiredErrorMsg}`),
    // [PProofOfIdentity.name]: Yup.string().required(`${PProofOfIdentity.requiredErrorMsg}`),

  }),
  Yup.object().shape({
    [HState.name]: Yup.string().required(`${HState.requiredErrorMsg}`),
    [HCity.name]: Yup.string().required(`${HCity.requiredErrorMsg}`),
    [HResidentialAddress.name]: Yup.string('Enter residential address').required(`${HResidentialAddress.requiredErrorMsg}`),
    // [HProofOfAddress.name]: Yup.string('Enter your phone number').nullable().required(`${HProofOfAddress.requiredErrorMsg}`),

  }),
  // Yup.object().shape({
  //   [WEmploymentStatus.name]: Yup.string().required(`${WEmploymentStatus.requiredErrorMsg}`),
  //   [WCompanyName.name]: Yup.string().required(`${WCompanyName.requiredErrorMsg}`),
  //   [WState.name]: Yup.string('Enter your email address').required(`${WState.requiredErrorMsg}`).email('invalid email'),
  //   [WCity.name]: Yup.string('Enter your phone number').nullable().required(`${WCity.requiredErrorMsg}`),
  //   [WCompanyAddress.name]: Yup.date().nullable().required(`${WCompanyAddress.requiredErrorMsg}`).default(() => new Date()) ,
  // }),
  // Yup.object().shape({
  //   [EEmploymentType.name]: Yup.string().required(`${EEmploymentType.requiredErrorMsg}`),
  //   [EJobRole.name]: Yup.string().required(`${EJobRole.requiredErrorMsg}`),
  //   [EDateJoined.name]: Yup.date().nullable().required(`${EDateJoined.requiredErrorMsg}`).default(() => new Date()) ,
  //   [ESalaryDate.name]: Yup.date().nullable().required(`${ESalaryDate.requiredErrorMsg}`).default(() => new Date()) ,
  //   [ECity.name]: Yup.string('Enter your phone number').nullable().required(`${ECity.requiredErrorMsg}`),
  //   [ESalaryRange.name]: Yup.string('Enter your phone number').nullable().required(`${ESalaryRange.requiredErrorMsg}`),
  //   [EStaffID.name]: Yup.string('Enter your phone number').nullable().required(`${EStaffID.requiredErrorMsg}`),
  // }),
  // Yup.object().shape({
  //   [NFirstName.name]: Yup.string().required(`${NFirstName.requiredErrorMsg}`),
  //   [NLastName.name]: Yup.string().required(`${NLastName.requiredErrorMsg}`),
  //   [NEmail.name]: Yup.string('Enter your email address').required(`${NEmail.requiredErrorMsg}`).email('invalid email'),
  //   [NPhoneNumber.name]: Yup.string('Enter your phone number').nullable().required(`${NPhoneNumber.requiredErrorMsg}`),
  //   [NRelationship.name]: Yup.string().required(`${NRelationship.requiredErrorMsg}`),
  //   [NState.name]: Yup.string().required(`${NState.requiredErrorMsg}`),
  //   [NLocalGovernment.name]: Yup.string().required(`${NLocalGovernment.requiredErrorMsg}`),
  //   [NAddress.name]: Yup.string().required(`${NAddress.requiredErrorMsg}`),
  // }),
];

export default VerificationValidationShema