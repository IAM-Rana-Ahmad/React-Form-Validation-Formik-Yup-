import React from 'react';
import { useFormik } from 'formik';
import { FormSchema } from '../../Schemas';

const Form = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    };

    const {
        values,
        errors,
        touched, 
        handleChange,
        handleBlur,
        handleSubmit
    } = useFormik({
        initialValues,
        validationSchema: FormSchema,
        onSubmit: (values) => {
            console.log(values);
            alert("Form data submitted successfully");
        },
    });
    console.log("These are the values------->",values)

    return (
        <div className="container mt-5 pt-5">
            <div className="row d-flex justify-content-center align-content-center">
                <div className="col-xxl-5 border p-5 shadow-lg">
                    <h2 className="text-center text-info mb-5 display-6 fw-bold">
                        Enter your Information
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="name" className="form-label">
                                Enter your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className="form-control"
                                id="name"
                            />
                            {errors.name && touched.name && (
                                <p className="text-danger">{errors.name}</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                            />
                            {errors.email && touched.email && (
                                <p className="text-danger">{errors.email}</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className="form-control"
                                id="password"
                            />
                            {errors.password && touched.password && (
                                <p className="text-danger">{errors.password}</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirm_password" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirm_password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirm_password}
                                className="form-control"
                                id="confirm_password"
                            />
                            {errors.confirm_password && touched.confirm_password && (
                                <p className="text-danger">{errors.confirm_password}</p>
                            )}
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
