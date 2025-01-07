import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const LoginPage: React.FC = () => {
  return (
    <>
      <Layout>{<Outlet />}</Layout>
    </>
  );
};

export default LoginPage;
