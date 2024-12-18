import Cookie from "js-cookie";

import { paths } from "src/routes/paths";
// utils
import axios from "src/utils/axios";

// ----------------------------------------------------------------------

function jwtDecode(token: string) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );

  return JSON.parse(jsonPayload);
}

// ----------------------------------------------------------------------

export const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

// ----------------------------------------------------------------------
const STORAGE_KEY = "accessToken";

export const tokenExpired = (exp: number) => {
  // eslint-disable-next-line prefer-const
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 60000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    alert("Seu token expirou. Realizei um novo login." + timeLeft);
    Cookie.remove(STORAGE_KEY);
    window.location.href = paths.auth.login;
  }, timeLeft);
};

export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    Cookie.set(STORAGE_KEY, accessToken, {
      secure: true, // Use HTTPS para maior segurança
      sameSite: "Strict", // Evita vazamento do cookie para outros domínios
      expires: 7, // Expira em 7 dias
    });

    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // This function below will handle when token is expired
    const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
    tokenExpired(exp);
  } else {
    sessionStorage.removeItem("accessToken");

    delete axios.defaults.headers.common.Authorization;
  }
};
