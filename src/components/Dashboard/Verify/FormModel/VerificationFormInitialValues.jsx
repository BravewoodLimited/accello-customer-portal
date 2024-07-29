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


const VerificationInitialFormValues ={
    [PFirstName.name]: '',
    [PLastName.name]: '',
    [PEmail.name]: '',
    [PPhoneNumber.name]: '',
    [PDateOfBirth.name]: '',
    [PBVN.name]: '',
    [PMaritalStatus.name]: '',
    [PDependant.name]: '',
    [PEducationLevel.name]: '',
    // [PProofOfIdentity.name]: '',
    [HState.name]: '',
    [HCity.name]: '',
    [HResidentialAddress.name]: '',
    // [HProofOfAddress.name]: '',
    // [WEmploymentStatus.name]: '',
    // [WCompanyName.name]: '',
    // [WState.name]: '',
    // [WCity.name]: '',
    // [WCompanyAddress.name]: '',
    // [EEmploymentType.name]: '',
    // [EJobRole.name]: '',
    // [EDateJoined.name]: '',
    // [ESalaryDate.name]: '',
    // [ECity.name]: '',
    // [ESalaryRange.name]: '',
    // [EStaffID.name]: '',
    // [NFirstName.name]: '',
    // [NLastName.name]: '',
    // [NEmail.name]: '',
    // [NPhoneNumber.name]: '',
    // [NRelationship.name]: '',
    // [NState.name]: '',
    // [NLocalGovernment.name]: '',
    // [NAddress.name]: '',
  };

export default VerificationInitialFormValues