import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material/";
function Header() {
  return (
    <Stack spacing={3} direction="row">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained">All Todos</Button>
      </Link>
      <Link to="/done" style={{ textDecoration: "none" }}>
        <Button variant="contained">Done Todos</Button>{" "}
      </Link>
    </Stack>
  );
}

export default Header;
