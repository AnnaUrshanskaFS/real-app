import { useState } from "react";
import PageHeader from "./common/pageHeader";

import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader title="Sign In Page" description="sign in" />

      <div className="my-4">
        <button type="submit" className=" btn btn-outline-primary">
          Sign In
        </button>
      </div>
    </>
  );
};
export default SignIn;
