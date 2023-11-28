import { Stack } from "@mui/material"
import SearchBar from "./SearchBar"





function Navbar() {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#0f0f0f', top: 0, justifyContent: "space-between" }}>
    {/* <Link to="/" style={{ display: "flex", alignItems: "center" }}> */}
      <img src='https://i.ibb.co/s9Qys2j/logo.png' alt="logo" height={45} />
    {/* </Link> */}
    <SearchBar  />
  </Stack>
  )
}

export default Navbar