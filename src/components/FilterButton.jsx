import { Divider, IconButton, InputAdornment, TextField } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import SelectFilter from "./SelectFilter";

export default function FilterButton({
  searchedTitle,
  setSearchedTitle,
  filters = [
    { id: "1", name: "Personal Growth" },
    { id: "2", name: "Investigative Journalism" },
    { id: "3", name: "History" },
    { id: "4", name: "Comedy" },
    { id: "5", name: "Entertainment" },
    { id: "6", name: "Business" },
    { id: "7", name: "Fiction" },
    { id: "8", name: "News" },
    { id: "9", name: "Kids and Family" },
    
  ],
  selectedFilter,
  setSelectedFilter,
}) {
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };
  return (
    <div>
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
                </>
              }
            </InputAdornment>
          ),
        }}
      />
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        {filters.map((filter, index) => (
          <option key={index}>{filter.name}</option>
        ))}
      </select>
    </div>
  );
}
