import { m } from "framer-motion";
// @mui
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
// hooks
import { useResponsive } from "src/hooks/use-responsive";
// routes
import { paths } from "src/routes/paths";
// components
import Image from "src/components/image";
import Iconify from "src/components/iconify";
import { MotionViewport, varFade } from "src/components/animate";
import { BASE_PATH_SITE } from "src/config-global";

// ----------------------------------------------------------------------

export default function HomeLookingFor() {
  const mdUp = useResponsive("up", "md");

  const renderBtn = (
    <Button
      color="inherit"
      size="large"
      variant="outlined"
      target="_blank"
      rel="noopener"
      href={paths.zoneUI}
      endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
    >
      Visit Zone Landing Page
    </Button>
  );

  const renderDescription = (
    <Stack
      sx={{
        textAlign: {
          xs: "center",
          md: "left",
        },
      }}
    >
      <m.div variants={varFade().inDown}>
        <Typography
          variant="overline"
          component="div"
          sx={{ color: "text.disabled" }}
        >
          Looking For a
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography
          variant="h2"
          sx={{
            mt: 3,
            mb: { md: 5 },
          }}
        >
          Landing Page Template?
        </Typography>
      </m.div>

      {mdUp && <m.div variants={varFade().inDown}> {renderBtn} </m.div>}
    </Stack>
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={{ xs: 5, md: 0 }}
      >
        <Grid size={{ xs: 12, md: 4 }}>{renderDescription}</Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <m.div variants={varFade().inUp}>
            <Image
              disabledEffect
              alt="rocket"
              src={`${BASE_PATH_SITE}/assets/images/home/zone_landing.webp`}
            />
          </m.div>
        </Grid>

        {!mdUp && (
          <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
            {renderBtn}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
