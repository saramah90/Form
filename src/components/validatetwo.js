export const validatetwo = (data) => {
   const errors = {};
     if (!data.name.trim()){
         errors.name = "name is required"
     }else {
         delete errors.name
     }

      if (!data.email)  {
          errors.email = " email is required"
      } else if  (!/\S+@\S+\.\S+/.test(data.email)){
          errors.email = "please eneter email format"
      } else {
          delete errors.email
      }

      if (! data.password) {
          errors.password = "pass required"
      }else if (data.password.length <6) {
          errors.password = "more than 6 character"
      } else {
          delete errors.password
      }
      if (!data.confirmPassword){
          errors.confirmPassword = "please enter confirmpassword"
      } else if ( data.confirmPassword !== data.password){
          errors.email = "eneter same password"
      } else {
          delete errors.confirmPassword 
      }

      if (data.isAccept) {
          delete errors.isAccept
      }  else {
          errors.isAccept = "tick bezan"
      }
       return errors;
}


