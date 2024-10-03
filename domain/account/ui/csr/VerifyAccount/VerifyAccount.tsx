"use client";

import { useResendEmail } from "@/domain/account/hook";
import LgVerifyCheck from "@/domain/shared/assets/svg/verify-check.svg";
import { Button } from "@/domain/shared/ui";
import Link from "next/link";

export const VerifyAccount = ({
  resendTimeout,
  email,
}: {
  resendTimeout: string;
  email: string;
}) => {
  const { handleResendEmail, seconds } = useResendEmail(resendTimeout);

  return (
    <div className="flex max-w-[412px] flex-col items-center justify-center rounded-[10px] bg-haip-black-100 p-[15px] text-haip-black-800">
      <h2 className="display-small mb-4 font-normal">Verifikasi Akunmu!</h2>
      <LgVerifyCheck className="mb-3 h-[79px] w-[79px]" />
      <p className="body-b1 mb-4 text-center">
        Periksa email kamu ya! Kami sudah kirim link verifikasi. Kalau nggak ada di kotak masuk,
        coba cek folder spam atau promosi juga.
      </p>
      <Link href="/login" className="w-full">
        <Button className="mb-3 w-full" type="submit">
          Kembali ke halaman masuk
        </Button>
      </Link>
      <Button
        disabled={!!(seconds !== 0)}
        onClick={() => handleResendEmail(email)}
        className="button-large w-full tracking-normal"
        variant="outline"
        suppressHydrationWarning
      >
        {seconds !== 0
          ? `Tunggu dalam ${seconds} detik`
          : "Verifikasi belum masuk? Kirim ulang email"}
      </Button>
    </div>
  );
};

export default VerifyAccount;
