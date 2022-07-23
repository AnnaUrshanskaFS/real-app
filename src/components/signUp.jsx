import { useState } from "react";
import PageHeader from "./common/pageHeader";
import Input from "./input";
import { useFormik } from "formik";
import Joi from "joi";
import formikValidate from "../functions/formikvalidateJoi";
import { createUser } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SignUp = ({ redirect }) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validate: formikValidate({
      name: Joi.string().min(6).max(25).required(),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      password: Joi.string().min(6).max(255).required(),
    }),

    async onSubmit(values) {
      try {
        await createUser({ ...values, biz: false });
        toast.success("You are signed up", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        if (redirect) {
          navigate(redirect);
        }
      } catch ({ response }) {
        if (response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  return (
    <>
      <PageHeader title="Sign Up Page" description="Create your user account" />
      <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          label="Name"
          name="name"
          type="text"
          {...form.getFieldProps("name")}
          error={form.touched.name && form.errors.name}
        />

        <Input
          label="Email"
          name="email"
          /* error={"input is invalid"} */ type="email"
          {...form.getFieldProps("email")}
          error={form.touched.email && form.errors.email}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          {...form.getFieldProps("password")}
          error={form.touched.password && form.errors.password}
        />

        <div className="my-4">
          <button
            disabled={!form.isValid}
            type="submit"
            className=" btn btn-outline-primary"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
