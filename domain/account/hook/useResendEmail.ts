import { useState } from "react";
import { useCountdown } from "@/domain/shared/hooks";
import toast from "react-hot-toast";
import { resendEmailVerification } from "../services/api";
import { getResendEmailVerificationData } from "../mappers";

export const useResendEmail = (resendTimeout: string) => {
  const [timeout, setTimeout] = useState(resendTimeout);
  const { seconds } = useCountdown(timeout);

  const handleResendEmail = async (email: string) => {
    try {
      const response = await resendEmailVerification(email);
      const resendEmailVerificationData = getResendEmailVerificationData(response);

      setTimeout(resendEmailVerificationData.resendTimeout);
    } catch (error) {
      toast.error("akun sudah terverifikasi");
    }
  };

  return { handleResendEmail, seconds };
};

export default useResendEmail;
