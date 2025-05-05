import { Button, LoadingOverlay, PasswordInput, rem, TextInput } from '@mantine/core';
import { IconAt, IconCheck, IconLock, IconX } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { loginValidation } from '../Services/fromValidation';
import { notifications } from '@mantine/notifications';
import { useDispatch } from 'react-redux';
import { setUser } from '../Slices/UserSlice';
import { useDisclosure } from '@mantine/hooks';
import ResetPassword from './ResetPassword';
import { errorNotification, successNotification } from '../Services/NotificationService';
import { loginUser } from '../Services/AuthService';
import { setJwt } from '../Slices/JWTSlice';
import { jwtDecode } from 'jwt-decode';

const form = {
  email: '',
  password: '',
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setFormError({ ...formError, [event.target.name]: '' });
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    let valid = true;
    const newFormError: { [key: string]: string } = {};

    for (let key in data) {
      if (key === 'accountType') continue;
      if (key !== 'confirmPassword') newFormError[key] = loginValidation(key, data[key]);
      else if (data[key] !== data['password']) newFormError[key] = 'Passwords do not match.';
      if (newFormError[key]) valid = false;
    }

    setFormError(newFormError);

    if (valid) {
      loginUser(data)
        .then((res) => {
         
          successNotification("Login Successfull","Redirecting to home page...");
          dispatch(setJwt(res.jwt));
          const decoded=jwtDecode(res.jwt);
          // console.log("DECODED TOKEN : ",decoded);
          dispatch(setUser({...decoded,email:decoded.sub}));

          setTimeout(() => {
            setLoading(false);           
            navigate('/');
          }, 4000);
        })
        .catch((err) => {
          setLoading(false);
         errorNotification("Login Failed","Something went wrong..PLease try again");
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
      />
      <div className="w-1/2 px-20 bs-mx:px-10 md-mx:px-5 sm-mx:w-full flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Login to Your Account</div>

        <TextInput
          value={data.email}
          name="email"
          error={formError.email}
          onChange={handleChange}
          withAsterisk
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          label="Your email"
          placeholder="Your email"
        />

        <PasswordInput
          value={data.password}
          error={formError.password}
          name="password"
          onChange={handleChange}
          leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
          label="Password"
          placeholder="Password"
        />

        <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">
          Login
        </Button>

        <div className='text-center sm-mx:text-sm xs-mx:text-xs'>
          Don't have an account?{' '}
          <span
            onClick={() => {
              navigate('/signup');
              setFormError(form);
              setData(form);
            }}
            className="text-bright-sun-400 hover:underline cursor-pointer"
          >
            SignUp
          </span>
        </div>

        <div onClick={open} className="text-bright-sun-400 hover:underline cursor-pointer text-center sm-mx:text-sm xs-mx:text-xs">
          Forgot Password?
        </div>
      </div>
      <ResetPassword opened={opened} close={close} />
    </>
  );
};

export default Login;
