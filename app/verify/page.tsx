import { getCheckVerificationtData } from "@/domain/account/mappers";
import { checkVerificationAccount } from "@/domain/account/services/api";
import { VerifyAccount } from "@/domain/account/ui/csr";
import { Layout } from "@/domain/account/ui/ssr";
import { notFound } from "next/navigation";

const Verify = async ({ searchParams }: { searchParams: { email: string } }) => {
  const { email } = searchParams;
  const response = await checkVerificationAccount(email);
  const checkVerificationData = getCheckVerificationtData(response);

  if (checkVerificationData.isAccountVerified) {
    notFound();
  }

  return (
    <Layout childrenClassName="h-[120vh]">
      <VerifyAccount resendTimeout={checkVerificationData.resendTimeout} email={email} />
    </Layout>
  );
};

export default Verify;
