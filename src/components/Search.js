

export default function Search({movieCards, search, setSearch}) {


    if ( !movieCards.length){
        return (
            <div className="search-box">
            <input 
            className="search"
            type="text"
            placeholder='Search Movies'
            value={search}
            onChange={event => setSearch(event.target.value)}
        />
        <div className='movies-container'>
            <p className="no-results">Sorry, No Results</p>
        </div>
    </div>
       
        )
      
      } else {

        return (

    <div className="search-box">
            <input 
            className="search"
            type="text"
            placeholder='Search Movies'
            value={search}
            onChange={event => setSearch(event.target.value)}
        />
        <div className='movies-container'>
            
        { movieCards }
           
        </div>
    </div>
        )
      }

}