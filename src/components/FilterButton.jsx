import { Divider, IconButton, InputAdornment, TextField } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import SelectFilter from "./SelectFilter";

export default function FilterButton({
  searchedTitle,
  setSearchedTitle,
  filters = [{ title: "Lu" }, { title: "Lels" }],
  setSelectedFilter,
}) {
  function selected(e) {
    setSelectedFilter(JSON.parse(e.target.value));
  }
  return (
    <TextField
      id="filter-button"
      type="text"
      placeholder="Search Podcasts by title"
      onChange={(e) => setSearchedTitle(e.target.value)}
      value={searchedTitle}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {
              <IconButton
                sx={{ borderRadius: 1, backgroundColor: "transparent" }}
                onClick={() => {
                  setSearchedTitle("");
                }}
              >
                <FaSearch size={"15px"} />
              </IconButton>
            }
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="start">
            {
              <>
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
                <select
                  onChange={selected}
                  name="selectedGenre"
                  value={filters}
                  defaultValue={{ id: "0", title: "All Genre" }}
                >
                  {filters.map((filter) => (
                    <option value={JSON.stringify(filter)} key={filter.title}>
                      {filter.title}
                    </option>
                  ))}
                </select>
              </>
            }
          </InputAdornment>
        ),
      }}
    />
  );
}
