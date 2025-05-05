import {
    Anchor,
    Button,
    Checkbox,
    PasswordInput,
    RadioGroup,
    rem,
    TextInput,
    Group,
    Radio,
    LoadingOverlay
  } from '@mantine/core';
  import { IconAt, IconCheck, IconLock, IconX } from '@tabler/icons-react';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { registerUser } from '../Services/UserService';
  import { signUpValidation } from '../Services/fromValidation';
  import { notifications } from '@mantine/notifications';
import { errorNotification, successNotification } from '../Services/NotificationService';
  
  const form = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'APPLICANT'
  };
  
  const SignUp = () => {
    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleChange = (event: any) => {
      if (typeof event === 'string') {
        setData({ ...data, accountType: event });
        return;
      }
  
      const { name, value } = event.target;
      setData({ ...data, [name]: value });
      setFormError({ ...formError, [name]: signUpValidation(name, value) });
  
      if (name === 'confirmPassword' && data.password !== value) {
        setFormError({ ...formError, confirmPassword: 'Passwords do not match.' });
      }
    };
  
    const handleSubmit = () => {
      let valid = true;
      const newFormError: { [key: string]: string } = {};
  
      for (let key in data) {
        if (key === 'accountType') continue;
        if (key !== 'confirmPassword') {
          newFormError[key] = signUpValidation(key, data[key]);
        } else if (data[key] !== data['password']) {
          newFormError[key] = 'Passwords do not match.';
        }
        if (newFormError[key]) valid = false;
      }
  
      setFormError(newFormError);
  
      if (valid) {
        setLoading(true);
        registerUser(data)
          .then((res) => {
            console.log(res);
            setData(form);
           successNotification("Registered Successfully","Redirecting to login page");
  
            setTimeout(() => {
              setLoading(false);
              navigate('/login');
            }, 4000);
          })
          .catch((err) => {
            setLoading(false);
            errorNotification("Registration Failed", 'Please try again.')
          });
      }
    };
  
    return (
      <>
        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          className="translate-x-1/2"
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
        />
  
        <div className="w-1/2 px-20 bs-mx:px-10 md-mx:px-5 sm-mx:py-20 sm-mx:w-full flex flex-col justify-center gap-3">
          <div className="text-2xl font-semibold">Create Account</div>
  
          <TextInput
            value={data.name}
            name="name"
            error={formError.name}
            onChange={handleChange}
            withAsterisk
            label="Full Name"
            placeholder="Your name"
          />
  
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
            name="password"
            error={formError.password}
            onChange={handleChange}
            leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
            label="Password"
            placeholder="Password"
          />
  
          <PasswordInput
            value={data.confirmPassword}
            name="confirmPassword"
            error={formError.confirmPassword}
            onChange={handleChange}
            leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
            label="Confirm Password"
            placeholder="Confirm password"
          />
  
          <RadioGroup
            value={data.accountType}
            onChange={handleChange}
            label="You are?"
            withAsterisk
          >
            <div className='flex gap-6 xs-mx:gap-3'>
              <Radio
                className="py-4 px-6 border sm-mx:px-4 sm-mx:py-2 hover:bg-mine-shaft-900 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
                value="APPLICANT"
                label="Applicant"
              />
              <Radio
                className="py-4 px-6 sm-mx:px-4 sm-mx:py-2 border has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
                value="EMPLOYER"
                label="Employer"
              />
        </div>
          </RadioGroup>
  
          <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">
            Sign up
          </Button>
  
          <div className='text-center sm-mx:text-sm xs-mx:text-xs'>
            Have an account?
            <span
              onClick={() => {
                navigate('/login');
                setFormError(form);
                setData(form);
              }}
              className="text-bright-sun-400 sm-mx:text-sm xs-mx:text-xs hover:underline cursor-pointer"
            >
              Login
            </span>
          </div>
        </div>
      </>
    );
  };
  
  export default SignUp;
  