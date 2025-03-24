export const ValidateCreditialDetials = (bvn, nin) => {
//   console.log("ValidateCredentials", nin.dob.split(" ")[0]);

  if (bvn.first_name === nin.first_name) {
    return true;
  } else if (bvn.last_name === nin.surname) {
    return true;
  } else if (bvn.middle_name === nin.middle_name) {
    return true;
  } else if (bvn.dob === nin.dob.split(" ")[0]) {
    return true;
  } else if (bvn.msisdn === nin.msisdn) {
    return true;
  }

  return false;
};
