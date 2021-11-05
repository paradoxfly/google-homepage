import '../index.css'

function Search(props){
  return(
    <div className="search">
      <input id="searchInput" type="text" onChange= { props.onChange }/>
    </div>
  )
}

export default Search;