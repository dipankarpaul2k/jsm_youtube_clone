import { CircularProgress, Box } from "@mui/material";

export default function AppLoader() {
  return (
    <Box
      width="100%"
      minHeight="95vh"
      bgcolor="#000"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size={50} />
    </Box>
  );
}

{
  /* <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  height="80vh"
>
  <CircularProgress size={50} />
</Stack>; */
}

// sx={{
//     width: "100%",
//     minHeight: "95vh",
//     bgcolor: "#000",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }}
