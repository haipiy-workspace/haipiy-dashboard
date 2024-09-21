import { getBaseData } from "@/domain/shared/mappers";
import { CustomApiServiceError } from "@/domain/shared/services";
import { notFound } from "next/navigation";
import { useState } from "react";
import { useCountdown } from "@/domain/shared/hooks";
import { resendEmailVerification } from "../services/api";
import { getResendEmailVerificationData } from "../mappers";

export const useVerify = (resendTimeout: string) => {
  const [timeout, setTimeout] = useState(resendTimeout);
  const { seconds } = useCountdown(timeout);

  const handleResendEmail = async (email: string) => {
    try {
      const response = await resendEmailVerification(email);

      const baseData = getBaseData(response);
      const resendEmailVerificationData = getResendEmailVerificationData(response);

      setTimeout(resendEmailVerificationData.resendTimeout);

      if (baseData.statusCode !== 200) {
        throw new CustomApiServiceError(
          `error code ${baseData.errorCode}, status code ${baseData.statusCode}, message ${baseData.message} on handleResendVerification function`,
          "Error",
        );
      }
      // notFound();
    } catch (error) {
      console.error(error);
      notFound();
    }
  };

  return { handleResendEmail, seconds };
};

export default useVerify;
