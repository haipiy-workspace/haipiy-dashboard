import { useEffect } from "react";
import toast from "react-hot-toast";
import { ApiServiceError } from "@/domain/shared/services/apiServiceError";
import { verifyAccount } from "../services/api";

export const useVerify = (token?: string) => {
  const handleVerifyAccount = async (verifyToken: string) => {
    try {
      await verifyAccount(verifyToken);
      toast.success("berhasil konfirmasi email kamu!");
    } catch (error) {
      if (!(error instanceof ApiServiceError)) return;

      if (error.data?.errorCode === 1004) {
        toast.error("akun sudah terverifikasi");
      }

      if (error.data?.errorCode === 1002) {
        toast.error("token tidak ditemukan");
      }
    }
  };

  useEffect(() => {
    if (token) handleVerifyAccount(token);
  }, [token]);
};

export default useVerify;
