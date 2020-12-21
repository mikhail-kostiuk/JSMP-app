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
import { LoginData } from '../../types/auth';

const Login: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<LoginData>();

  const onSubmit = (data: LoginData) => console.log(data);

  console.log(errors);

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

export default Login;
