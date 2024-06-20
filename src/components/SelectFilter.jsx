import { FormControl, InputLabel, OutlinedInput, Select } from "@mui/material";

export default function SelectFilter({typeOfFilter,filters=[], setFilter}) {
  return(

     <Select
     labelId="multiple-filter"
     multiple
     value={filters}
     onChange={(e) => setFilter(e.target.value)}
     input={<OutlinedInput label={"Filter by"} />}
     MenuProps={{
       PaperProps: {
         style: {
           maxHeight: 300,
           width: 250,
         },
       },
     }}
     >
       {
         filters.map(filter=>(
           <option key={filter.name} value={filter}>
             {filter.name}
           </option>
         ))
       }
     </Select>
  );
}