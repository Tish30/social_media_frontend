import { Button, TextField } from '@mui/material';
import { Field, Formik, ErrorMessage } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { loginUserAction } from '../../Redux/Auth/auth.action';

const initialValues = { email: "", password: "" };

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password should be at least 6 characters").required("Password is required")
});

const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        console.log('handleSubmit', values);
        dispatch(loginUserAction(values)); // Dispatching values directly

        // Optionally, you can reset the form after submission
        // formikBag.resetForm();
    }

    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => (
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <div className='space y-5'>
                        <Field as={TextField}
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
                    <div className='space y-5'>
                        <Field as={TextField}
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
                    <Button
                        sx={{ padding: ".8rem 0rem" }}
                        fullWidth
                        type='submit'
                        variant="contained"
                        color='primary'
                    >
                        Login
                    </Button>
                </form>
            )}
        </Formik>
    );
}

export default Login;





// import { Button, TextField } from '@mui/material'
// import { Field, Formik, ErrorMessage } from 'formik'
// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import * as Yup from "yup";
// import { loginUserAction } from '../../Redux/Auth/auth.action';

// const initialValues = { email: "", password: "" }
// const validationSchema = {
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string().min(6, "Password should be atleast 6 characters").required("Password is required")
// };

// const Login = () => {
//     const [formValue, setFormValue] = useState();
//     const dispatch=useDispatch();

//     const handelSubmit = (values) => {
//         console.log('handelSubmit', values);
//         dispatch(loginUserAction({data:values}))
//     }
//     return (
//         <>
//             <Formik onSubmit={handelSubmit}
//                 // validationSchema={validationSchema}  
//                 initialValues={initialValues}>
//                 <form className='space-y-5'>
//                     <div className='space y-5'>
//                         <Field as={TextField}
//                             name="email"
//                             placeholder="Email"
//                             type="email"
//                             varient="outlined"
//                             fullWidth />
//                         <ErrorMessage name="email"
//                             component={"div"}
//                             className="text-red-500" />
//                     </div>
//                     <div className='space y-5'>
//                         <Field as={TextField}
//                             name="password"
//                             placeholder="Password"
//                             type="password"
//                             varient="outlined"
//                             fullWidth />
//                         <ErrorMessage name="password"
//                             component={"div"}
//                             className="text-red-500" />
//                     </div>
//                     <Button sx={{ padding: ".8rem 0rem" }}
//                      fullWidth type='submit' 
//                      variant="contained" 
//                      color='primary'>Login</Button>
//                 </form>
//             </Formik>
//         </>
//     )
// }

// export default Login