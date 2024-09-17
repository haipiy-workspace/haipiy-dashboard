import { ICheckVerificationData } from "@/domain/account/interfaces";
import { getCheckVerificationtData } from "@/domain/account/mappers";
import { checkVerificationAccount } from "@/domain/account/services/api";
import { VerifyAccount } from "@/domain/account/ui/csr";
import { Layout } from "@/domain/account/ui/ssr";
import { getBaseData } from "@/domain/shared/mappers";
import { CustomApiServiceError } from "@/domain/shared/services";
import { notFound } from "next/navigation";

const Verify = async ({ searchParams }: { searchParams: { email: string } }) => {
  const { email } = searchParams;
  let checkVerificationData: ICheckVerificationData;

  try {
    const response = await checkVerificationAccount(email);

    const baseData = getBaseData(response);
    checkVerificationData = getCheckVerificationtData(response);

    if (baseData.statusCode !== 200) {
      throw new CustomApiServiceError(
        `error code ${baseData.errorCode}, status code ${baseData.statusCode}, message ${baseData.message} on VerifyAccount component`,
        "Error",
      );
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    notFound();
  }

  return (
    <Layout childrenClassName="h-[120vh]">
      <VerifyAccount resendTimeout={checkVerificationData.resendTimeout} />
    </Layout>
  );
};

export default Verify;
