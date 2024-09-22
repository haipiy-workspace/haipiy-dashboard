"use client";

import { useVerify } from "@/domain/account/hook";
import { LoginForm } from "@/domain/account/ui/csr";
import { Layout } from "@/domain/account/ui/ssr";

const Login = ({ searchParams }: { searchParams: { token: string } }) => {
  const { token } = searchParams;

  useVerify(token);

  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default Login;
