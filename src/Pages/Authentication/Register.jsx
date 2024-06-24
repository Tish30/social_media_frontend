import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Field, Formik, ErrorMessage } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { registerUserAction } from '../../Redux/Auth/auth.action';

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: ""
};

const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password should be at least 6 characters").required("Password is required"),
    gender: Yup.string().required("Gender is required")
});

const Register = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        console.log('handleSubmit', values);
        dispatch(registerUserAction(values)); // Dispatching values directly

        // Optionally, you can reset the form after submission
        // formikBag.resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, values, errors }) => (
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <div className='space-y-5'>
                        <Field
                            as={TextField}
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />
                        <ErrorMessage
                            name="firstName"
                            component={"div"}
                            className="text-red-500"
                        />
                    </div>
                    <div className='space-y-5'>
                        <Field
                            as={TextField}
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />
                        <ErrorMessage
                            name="lastName"
                            component={"div"}
                            className="text-red-500"
                        />
                    </div>
                    <div className='space-y-5'>
                        <Field
                            as={TextField}
                            name="email"
                            placeholder="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                        />
                        <ErrorMessage
                            name="email"
                            component={"div"}
                            className="text-red-500"
                        />
                    </div>
                    <div className='space-y-5'>
                        <Field
                            as={TextField}
                            name="password"
                            placeholder="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                        />
                        <ErrorMessage
                            name="password"
                            component={"div"}
                            className="text-red-500"
                        />
                    </div>
                    <div>
                        <Field name="gender">
                            {({ field }) => (
                                <RadioGroup
                                    {...field}
                                    aria-label="gender"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            )}
                        </Field>
                        <ErrorMessage
                            name="gender"
                            component={"div"}
                            className="text-red-500"
                        />
                    </div>
                    <Button
                        sx={{ padding: ".8rem 0rem" }}
                        fullWidth
                        type='submit'
                        variant="contained"
                        color='primary'
                    >
                        Register
                    </Button>
                </form>
            )}
        </Formik>
    );
}

export default Register;










// import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
// import { Field, Formik, ErrorMessage } from 'formik'
// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import * as Yup from "yup";
// import { registerUserAction } from '../../Redux/Auth/auth.action';

// const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     gender: ""
// };

// const validationSchema = Yup.object({
//     firstName: Yup.string().required("First Name is required"),
//     lastName: Yup.string().required("Last Name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string().min(6, "Password should be at least 6 characters").required("Password is required"),
//     gender: Yup.string().required("Gender is required")
// });

// const Register = () => {
//     const dispatch=useDispatch();

//     const handleSubmit = (values) => {
//         console.log('handleSubmit', values);
//         dispatch(registerUserAction({data:values}))

//     }

//     return (
//         <>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//             >
//                 {({ handleSubmit }) => (
//                     <form className='space-y-5' onSubmit={handleSubmit}>
//                         <div className='space-y-5'>
//                             <Field
//                                 as={TextField}
//                                 name="firstName"
//                                 placeholder="First Name"
//                                 type="text"
//                                 variant="outlined"
//                                 fullWidth
//                             />
//                             <ErrorMessage
//                                 name="firstName"
//                                 component={"div"}
//                                 className="text-red-500"
//                             />
//                         </div>
//                         <div className='space-y-5'>
//                             <Field
//                                 as={TextField}
//                                 name="lastName"
//                                 placeholder="Last Name"
//                                 type="text"
//                                 variant="outlined"
//                                 fullWidth
//                             />
//                             <ErrorMessage
//                                 name="lastName"
//                                 component={"div"}
//                                 className="text-red-500"
//                             />
//                         </div>
//                         <div className='space-y-5'>
//                             <Field
//                                 as={TextField}
//                                 name="email"
//                                 placeholder="Email"
//                                 type="email"
//                                 variant="outlined"
//                                 fullWidth
//                             />
//                             <ErrorMessage
//                                 name="email"
//                                 component={"div"}
//                                 className="text-red-500"
//                             />
//                         </div>
//                         <div className='space-y-5'>
//                             <Field
//                                 as={TextField}
//                                 name="password"
//                                 placeholder="Password"
//                                 type="password"
//                                 variant="outlined"
//                                 fullWidth
//                             />
//                             <ErrorMessage
//                                 name="password"
//                                 component={"div"}
//                                 className="text-red-500"
//                             />
//                         </div>
//                         <div>
//                             <Field name="gender">
//                                 {({ field }) => (
//                                     <RadioGroup
//                                         {...field}
//                                         aria-label="gender"
//                                     >
//                                         <FormControlLabel value="female" control={<Radio />} label="Female" />
//                                         <FormControlLabel value="male" control={<Radio />} label="Male" />
//                                     </RadioGroup>
//                                 )}
//                             </Field>
//                             <ErrorMessage
//                                 name="gender"
//                                 component={"div"}
//                                 className="text-red-500"
//                             />
//                         </div>
//                         <Button
//                             sx={{ padding: ".8rem 0rem" }}
//                             fullWidth
//                             type='submit'
//                             variant="contained"
//                             color='primary'
//                         >
//                             Register
//                         </Button>
//                     </form>
//                 )}
//             </Formik>
//         </>
//     )
// }

// export default Register;
