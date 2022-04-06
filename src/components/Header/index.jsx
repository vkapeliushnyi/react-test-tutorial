import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material/";
function Header() {
  return (
    <header>
      <Stack spacing={3} direction="row">
        <Button variant="contained" href="/">
          All Todos
        </Button>
        <Button variant="contained" href="/done">
          Done Todos
        </Button>
      </Stack>
    </header>
  );
}

export default Header;
