import { useForm } from "react-hook-form";
import yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginSchema() {
  const LoginSchema = yup.object({
    username: yup.string().min().max().required(),
    age: yup.number().min(15).max(70).positive().integer().required(),
    email: yup.string().email().required(),
    address: yup.string().length(20).required(),
    password: yup.string().min(6).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  return {
    LoginSchema,
    register,
    handleSubmit,
  };
}
