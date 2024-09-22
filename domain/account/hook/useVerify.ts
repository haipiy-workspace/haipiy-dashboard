import { useEffect } from "react";
import { getBaseData } from "@/domain/shared/mappers";
import toast from "react-hot-toast";
import { CustomApiServiceError } from "@/domain/shared/services";
import { verifyAccount } from "../services/api";

export const useVerify = (token?: string) => {
  const handleVerifyAccount = async (verifyToken: string) => {
    try {
      const response = await verifyAccount(verifyToken);

      const baseData = getBaseData(response);

      if (baseData.statusCode === 200) {
        return toast.success("berhasil konfirmasi email kamu!");
      }

      if (baseData.statusCode === 403) {
        return toast.error("akun sudah terverifikasi");
      }

      throw new CustomApiServiceError(
        `error code ${baseData.errorCode}, status code ${baseData.statusCode}, message ${baseData.message} on VerifyAccount component`,
        "Error",
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return toast.error("gagal melakukan verifikasi, token tidak valid");
    }
  };

  useEffect(() => {
    if (token) handleVerifyAccount(token);
  }, [token]);
};

export default useVerify;
