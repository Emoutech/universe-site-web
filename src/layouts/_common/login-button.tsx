// @mui
import { Theme, SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
// routes
import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";
// auth
import { useAuthContext } from "src/auth/hooks";
import { BASE_PATH_SITE } from "src/config-global";

type Props = {
  sx?: SxProps<Theme>;
};

export default function LoginButton({ sx }: Props) {
  return (
    <Button
      component={RouterLink}
      href={"/login"}
      variant="outlined"
      sx={{ mr: 1, ...sx }}
    >
      Login
    </Button>
  );
}
