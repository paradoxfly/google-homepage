import '../index.css'

function Search(props){
  return(
    <div class="search">
      <input id="searchInput" type="text" onChange= { props.onChange }/>
    </div>
  )
}

export default Search;