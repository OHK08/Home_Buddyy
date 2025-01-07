import React from "react";
import Layout from "../../components/layout/Layout";
import { Outlet } from "react-router-dom";

const SignupPage: React.FC = () => {
  return (
    <>
      <Layout>{<Outlet />}</Layout>
    </>
  );
};

export default SignupPage;
