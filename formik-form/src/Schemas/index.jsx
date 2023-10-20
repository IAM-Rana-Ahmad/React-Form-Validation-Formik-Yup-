import * as Yup from "yup";

export const FormSchema = Yup.object({
    name: Yup.string().min(3, "Name must be at least 3 characters").max(20, "Name can't exceed 20 characters").required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
});
