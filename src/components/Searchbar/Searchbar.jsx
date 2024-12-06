import './Searchbar.css'

function Searchbar(){
    return(
        <>
        <div className="Search">

            <div className="mainSearch">

                <div className="search1">
                <input type="text" className="searchBox" placeholder='Search'/>
                <div className="searchicon">
                    img
                </div>
                <div className="voice"></div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Searchbar