import React, { useState, useContext } from 'react';
import { ReactComponent as EyeSlash } from './eyeSlash.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useFormik, FormikProvider } from 'formik';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Inputs from '../../../components/input';
import Button from '../../../components/button';

const Login = () => {
  const [username] = useState('');
  const [password] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('admin');

  const formik = useFormik({
    initialValues: {
      username,
      password,
    },
    validationSchema: yup.object().shape({
      username: yup.string().required('Above field cannot be blank.'),
      password: yup.string().required('Above field is required.'),
    }),
    onSubmit: (values) => {
      navigate('/');
    },
  });

  const { handleBlur, errors, values, handleSubmit, setFieldValue } = formik;
  return (
    <main className="w-screen h-screen grid grid-cols-12 place-item-center">
      <section className=" bg-white col-span-12  flex justify-center items-center flex-col">
        <>
          <h3 className=" font-bold font-['Young_Serif'] text-agrivest text-4xl">
            Agrivest
          </h3>
          <FormikProvider value={formik}>
            <form
              className="w-full px-6 md:w-[600px] my-4"
              onSubmit={handleSubmit}
            >
              <div className="my-6">
                <Inputs
                  type="text"
                  name="username"
                  displayName="username"
                  value={values.username}
                  handleInputChange={setFieldValue}
                  handleBlur={handleBlur}
                  error={errors?.username}
                />
              </div>
              <div className="my-6">
                <Inputs
                  type="password"
                  name="password"
                  displayName="password"
                  value={values.password}
                  handleInputChange={setFieldValue}
                  handleBlur={handleBlur}
                  error={errors?.password}
                />
              </div>
              <Button
                // isSubmitting={adminLoading || merchantLoading}
                // handleClick={}
                text={'login'}
              />

              <p className="w-full  text-black py-3 rounded-2xl uppercase text-sm cursor-pointer">
                Dont have an account ?
                <Link to="/register" className="text-agrivest">
                  {' '}
                  sign up
                </Link>
              </p>
              <p className="my-4 text-center uppercase text-sm">
                <span className="text-agrivest underline">
                  forgot password?
                </span>
              </p>
            </form>
          </FormikProvider>
        </>
      </section>
    </main>
  );
};

export default Login;
