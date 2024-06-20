import { Divider, IconButton, InputAdornment, TextField } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";

export default function FilterButton({searchedTitle,setSearchedTitle,openSearch,setOpenSearch}){
  return(
    <TextField
    id="filter-button"
    type="text"
    placeholder="Search Podcasts by title"
    onChange={(e) => setSearchedTitle(e.target.value)}
    value={searchedTitle}
    InputProps={{
      startAdornment: (
        <InputAdornment
          position="start"
        >
          {
            <IconButton
              sx={{ borderRadius: 1, backgroundColor: "transparent" }}
              onClick={() => {
                setSearchedTitle("");
                setOpenSearch(false);
              }}
            >
              <FaFilter size={"15px"} />
            </IconButton>
          }
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment
          position="start"
        >
          {
            <IconButton
              sx={{ borderRadius: 1, backgroundColor: "transparent" }}
              onClick={() => {
                setSearchedTitle("");
                setOpenSearch(false);
              }}
            >
              <Divider orientation="vertical" flexItem />
              <IoClose size={"20px"} />
            </IconButton>
          }
        </InputAdornment>
      ),
    }}
  />
  );
}