import React, { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getOTP, login } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
  const [method, setMethod] = useState('email');
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          email: 'sample@gmail.com',
          password: 'Password123!',
          submit: null
        },
        validationSchema: Yup.object({
          email: Yup
            .string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          otp: Yup
            .string()
            .max(255)
            .required('OTP is required')
        }),
        onSubmit: async (values, helpers) => {
            dispatch(login(values.email, values.otp))
          }
      });
    
      const handleMethodChange = useCallback(
        (event, value) => {
          setMethod(value);
        },
        []
      );

     /*  const handleSkip = useCallback(
        () => {
          auth.skip();
          router.push('/');
        },
        [auth, router]
      ); */

      /* const login = useSelector(state => state.login)
      const {loading, error, userInfo} = login

      useEffect(() => {
        if(userInfo){
            debugger;
            navigate('/products');
        }
      })
 */
  return (
    <div>
        <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4" >
                Login
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Don&apos;t have an account?
                &nbsp;
                <Link
                  /* component={NextLink} */
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>
           
            {method === 'email' && (
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                    <Typography variant="subtitle2" >
                        Email Address *
                    </Typography>
                    <TextField
                        error={!!(formik.touched.email && formik.errors.email)}
                        fullWidth
                        helperText={formik.touched.email && formik.errors.email}
                        /* label="Email Address" */
                        name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="email"
                        value={formik.values.email}
                        style={{backgroundColor: "#E5FEF2"}}
                    />
                    <Button
                        fullWidth
                        size="large"
                        sx={{ mt: 3 , backgroundColor: "#3D808C"}}
                        variant="contained"
                        onClick={() => dispatch(getOTP(formik.values.email))}
                        >
                        Get OTP
                    </Button>


                  <Typography variant="subtitle2" >
                        OTP *
                    </Typography>
                  <TextField
                    error={!!(formik.touched.otp && formik.errors.otp)}
                    fullWidth
                    helperText={formik.touched.otp && formik.errors.otp}
                    /* label="Password" */
                    name="otp"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="otp"
                    value={formik.values.otp}
                    style={{backgroundColor: "#E5FEF2"}}
                  />
                </Stack>
                {/* <FormHelperText sx={{ mt: 1 }}>
                  Optionally you can skip.
                </FormHelperText> */}
                {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 , backgroundColor: "#3D808C"}}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
                {/* <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  onClick={handleSkip}
                >
                  Skip authentication
                </Button>
                <Alert
                  color="primary"
                  severity="info"
                  sx={{ mt: 3 }}
                >
                  <div>
                    You can use <b>demo@devias.io</b> and password <b>Password123!</b>
                  </div>
                </Alert> */}
              </form>
            )}
            {method === 'phoneNumber' && (
              <div>
                <Typography
                  sx={{ mb: 1 }}
                  variant="h6"
                >
                  Not available in the demo
                </Typography>
                <Typography color="text.secondary">
                  To prevent unnecessary costs we disabled this feature in the demo.
                </Typography>
              </div>
            )}
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default Login
