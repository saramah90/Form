export const validate = (data, type) => {

    const errors = {};
    
    

    if (!data.email) {
        errors.email = "email required"
    } else if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "email is invalid"
    } else {
       delete errors.email
    //    errors.email = "looks good"
    }

    if (!data.password) {
        errors.password = "password requird"

    } else if (data.password.length < 6 ) {
        errors.password = "password must be more than 6 character" 
    } else {
        delete errors.password 
    }

    
    if (type === "SignUP") {

        if (!data.name.trim()){
            errors.name = "name required"
    
        }else {
            delete errors.name
        }
    
    if (!data.confirmpassword) {
        errors.confirmpassword = "confirmpassword is requird"
    } else if ( data.confirmpassword !== data.password) {
        errors.confirmpassword = "password & confirmPasswordmust be same"
    } else {
        delete errors.confirmpassword
    }
    if (data.isAccept){
        delete errors.isAccept
    } else{
        errors.isAccept = "please accept"
    }
    }
    return errors;
}