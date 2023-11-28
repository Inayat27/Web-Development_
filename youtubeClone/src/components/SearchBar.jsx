import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function SearchBar() {
  return (
    <Paper
    component='form'
    // onSubmit={onhandleSubmit}
    sx={{
      borderRadius: 20,
      border: '1px solid #868282',
      pl: 2,
      boxShadow: 'none',
      mr: { sm: 5 },
      
    }}
  >

    <input
        className='search-bar'
        placeholder='Search'
       style={{
        width:400,
        height:40,
       borderStyle:'none',
       borderRightStyle:'solid',
       fontSize:17,
       position:'relative',
       top:2,
       outline:'none',
    //    backgroundColor:'#0f0f0f'


       }}
            />


<IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon  />
      </IconButton>
    </Paper>
  )
}

export default SearchBar