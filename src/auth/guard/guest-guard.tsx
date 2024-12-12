import { useCallback, useEffect } from "react";
// routes
import { paths } from "src/routes/paths";
import { useRouter } from "src/routes/hook";
//
import { useAuthContext } from "../hooks";
import { PATH_AFTER_LOGIN } from "src/config-global";

// ----------------------------------------------------------------------

type GuestGuardProps = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
  const router = useRouter();

  const { authenticated } = useAuthContext();

  const check = useCallback(() => {
    if (authenticated) {
      // router.replace(PATH_AFTER_LOGIN);
    }
  }, [authenticated, router]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
}
