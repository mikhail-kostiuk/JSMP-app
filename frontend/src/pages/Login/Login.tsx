import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Center,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { login } from '../../store/auth/actions';
import { RootState } from '../../store/reducer';
import { LoginData } from '../../types/auth';

type LoginProps = {
  login: (loginData: LoginData) => void;
};

const Login: React.FC<LoginProps> = (props) => {
  const { register, handleSubmit, errors } = useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    console.log('submit');
    console.log(props);

    props.login(data);
  };

  return (
    <Center h="calc(100vh - 60px)">
      <Box as="form" w="300px" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address format',
              },
            })}
          />
          {errors.email?.type === 'required' && (
            <FormErrorMessage>This field is required</FormErrorMessage>
          )}
          {errors.email?.type === 'pattern' && (
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel>Password</FormLabel>
          <Input name="password" ref={register({ required: true })} />
          {errors.email?.type === 'required' && (
            <FormErrorMessage>This field is required</FormErrorMessage>
          )}
        </FormControl>
        <Button w="100%" mt="32px" type="submit">
          Login
        </Button>
      </Box>
    </Center>
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, unknown, Action<string>>
) => ({
  login: (loginData: LoginData) => dispatch(login(loginData)),
});

export default connect(null, mapDispatchToProps)(Login);
