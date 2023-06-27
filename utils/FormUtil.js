// import PhoneNumber from 'awesome-phonenumber';
const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;



class FormUtils {
 static isValidEmail(value) {
    return !!value && EMAIL_REGEXP.test(value) ;
  }

  
}
// export const isValidPhoneNumber = (value) => {
//     if (!value) return false;
//     const phoneNumber = new PhoneNumber(value);
//     if (phoneNumber.isValid(value)) {
//       return true;
//     }
//     return phoneNumber.isValid(value);
//   }
 


