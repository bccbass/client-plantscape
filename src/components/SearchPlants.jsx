import React, {useState} from 'react'



const SearchPlants = () => {
const [searchResults, setSearchResults] = useState([])
const [query, setQuery] = useState([])
const [querySelection, setQuerySelection] = useState()

const queryPlants = async (query) => {
    // const result = await fetch(`${import.meta.env.VITE_API_HOST}/plants?q=${query}`)
    const result = await fetch(`http://localhost:4001/plants?q=${query}`)
    const parsedResult = await result.json()
    setSearchResults(parsedResult)
} 

return <>

<form className="input-group mb-3 w-50 ">
  <input type="text" className="form-control"  value={query} onChange={e => setQuery(e.target.value)}aria-label="Recipient's username" aria-describedby="basic-addon2" id="searchplants" placeholder='Search plants...'/>
  <label  htmlFor="searchplants"></label>
  <button type="button" className="btn btn-primary " id="basic-addon2" onClick={() => queryPlants(query)}>Search</button>
</form>
   <div>
        <ul className='list-group'>
            {searchResults.map((res, i) => <li className='list-group-item' key={i}><button  className='btn btn-success'onClick={(e)=> {setQuerySelection(res)}}> {res.common_name} </button></li>)}
        </ul>
        <div>
            {querySelection ?
                <div class="card w-75">
                <img src={querySelection.default_image.medium_url} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{querySelection.common_name}</h5>
                    <div class="card-text"><p> Watering: {querySelection.watering}</p> <p>sunlight: {querySelection.sunlight.join(', ')}</p></div>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                : <h1>No Selection</h1>}
                        </div>

   </div>
</>

}


export default SearchPlants