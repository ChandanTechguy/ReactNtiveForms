import * as Yup from "yup"
//npx expo install yup

export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
        .email("Enter a valid email")
        .required("Please enter a registered email"),
    password: Yup.string()
        .required("Please enter a password")
        .min(6, "Password must have at least 6 characters"),
    confirmPassword: Yup.string()
        .required("Please confirm password")
        .oneOf([Yup.ref("password")],
            "Password & Confirm Password does not match"),
})