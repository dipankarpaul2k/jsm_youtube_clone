import { Link } from "react-router-dom";

import { Typography, Collapse, Stack, Chip, Box } from "@mui/material";

function Description({ description, tags, expanded }) {
  return (
    <Box bgcolor={"#272727"} p={2} borderRadius={2}>
      <Collapse in={expanded} collapsedSize={50}>
        <Typography
          variant="body1"
          sx={{ textWrap: "balance", wordBreak: "break-word" }}
        >
          {description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap={"wrap"} mt={2}>
          {tags?.map((tag) => (
            <>
              <Link to={`/search/${tag}`} key={tag}>
                <Chip label={`#${tag}`} color="primary" variant="outlined" />
              </Link>
            </>
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
}

export default Description;

/*
<Chip
  key={tag}
  label={`#${tag}`}
  color="primary"
  variant="outlined"
/>
*/

/*
 <Link to=`/search/${tag}` key={tag}>
  <Chip
    label={`#${tag}`}
    color="primary"
    variant="outlined"
  />
 </Link>
*/
