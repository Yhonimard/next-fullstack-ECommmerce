import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const SignupSchema = () => {
  const schema = yup.object({
    username: yup.string().min(4).required(),
    age: yup.number().min(15).max(70).positive().integer().required(),
    email: yup.string().email().required(),
    address: yup.string().min(5).required(),
    password: yup.string().min(6).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return {
    register,
    handleSubmit,
    errors,
  };
};

export const LoginSchema = () => {
  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().min(6).max(20).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return {
    register,
    handleSubmit,
    errors,
  };
};
