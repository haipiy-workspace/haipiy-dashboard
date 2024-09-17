import { RegisterForm } from "@/domain/account/ui/csr";
import { Layout } from "@/domain/account/ui/ssr";

const Register = () => (
  <Layout childrenClassName="h-[120vh]">
    <RegisterForm />
  </Layout>
);

export default Register;
