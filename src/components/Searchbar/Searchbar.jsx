// import './Searchbar.css'
// import React , {useState , useEffect} from 'react'
// import axios from 'axios';


// function Searchbar(){

    
//     const [searchQuery, setSearchQuery] = useState(""); // For user input

//     useEffect(() => {
//         if (searchQuery) {
//           const fetchSearchResults = async () => {
//             try {
//               const response = await axios.get(SEARCH_URL, {
//                 params: {
//                   part: 'snippet',
//                   q: searchQuery,
//                   type: 'video', // Search only for videos
//                   maxResults: 12,
//                   key: API_KEY,
//                 },
//               });
//               setVideos(response.data.items);
//             } catch (error) {
//               console.error('Error fetching search results:', error);
//             }
//           };
    
//           fetchSearchResults();
//         }
//       }, [searchQuery]);
    
//       // Handle input change in the search bar
//       const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value);
//       };
    
//     // useEffect(() => {
//     //     if (searchQuery) {
//     //       const fetchSearchedVideos = () => {
//     //         axios.get("https://www.googleapis.com/youtube/v3/search", {
//     //           params: {
//     //             part: "snippet",
//     //             maxResults: 5,
//     //             q: searchQuery,
//     //             type: "video",
//     //             key: API_KEY,
//     //           },
//     //         })
//     //         .then(response => {
//     //           const simplifiedVideos = response.data.items.map(video => ({
//     //             id: video.id.videoId, // Use videoId from the search response
//     //             title: video.snippet.title,
//     //             thumbnail: video.snippet.thumbnails.high.url,
//     //             channelTitle: video.snippet.channelTitle,
//     //           }));
//     //           setVideos(response);
//     //         })
//     //         .catch(error => {
//     //           console.error("Error fetching searched videos:", error);
//     //         });
//     //       };
    
//     //       fetchSearchedVideos();
//     //     }
//     //   }, [searchQuery]); // Dependency array includes searchQuery
    
//     //   const handleSearch = (event) => {
//     //     setSearchQuery(event.target.value);
//     //   };
    

//     const Search1icon = [
//         {id:1 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"},
//         {id:2 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"},
//         {id:3 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"},
//          {id:4 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true"}
//     ]

//     const [keyword , setKeyword] = useState([]);

//     useEffect(() => {
//         fetch("https://youtube-api-vxq5.onrender.com/yt/keyword")
//         .then((response) =>  response.json())
//         .then((data) => {
//             setKeyword(data);
//         })
//         .catch((error) => {console.log(`error : ${error}`);
//     });
//     },[]);

//     console.log(keyword.length)

//     // const word = [
//     //     {id:1 , value:'Cook Studio'},
//     //     {id:2 , value:'UX'},
//     //     {id:3 , value:'Case Study'},
//     //     {id:4 , value:'Music'},
//     //     {id:5 , value:'Bangla Lofi'},
//     //     {id:6 , value:'Tour'},
//     //     {id:7 , value:'Saintmartin'},
//     //     {id:8 , value:'Tech'},
//     //     {id:9 , value:'i phone 13'},
//     //     {id:10 , value:'User Interface Design'},
//     //     {id:11 , value:'computer'}
//     // ]


//     return(
//         <>
//         <div className="Search">

//             <div className="mainSearch">

//                 <div className="search1">
//                     <input  type="text" placeholder="Search for videos..." value={searchQuery} onChange={handleSearchChange}  className="searchBox"/>
//                     <button  type="submit" onClick={handleSearchChange} className="searchicon">
//                         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" />
//                     </button>
//                     <div className="mic">
//                         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" />
//                     </div>
//                 </div>

//                 <div className="search2">
                    
//                     {
//                         Search1icon.map((i)=>(
//                             <div className="icon">
//                         <img src={i.url} alt="" />
//                     </div>)
//                         )
//                     }
//                  </div>
//             </div>
//             <div className="line1"></div>

//             <div className="more">
//                 <div className="word1">All</div>

//                 {/* {
//                     keyword.map((i)=>
//                         // hover
//                         <div className="word">{i.value}</div>
//                     )
//                 } */}
//                 {
//                     keyword.map((i) =>(
//                         <div className="word" key={i.id}>{i.value}</div>)
//                     )
//                 }


//             </div>


//             <div className="line1"></div>

//         </div>

        
//         </>
//     )
// }

// export default Searchbar













// import './Searchbar.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_KEY = "AIzaSyAFthZysqYQdL5WnN3TIpt74PvFZWNhybQ"; // Replace with your actual API key

// function Searchbar() {
//     const [searchQuery, setSearchQuery] = useState(""); // For user input
//     const [videos, setVideos] = useState([]); // For storing search results

//     useEffect(() => {
//         if (searchQuery) {
//             const fetchSearchedVideos = () => {
//                 axios.get("https://www.googleapis.com/youtube/v3/search", {
//                     params: {
//                         part: "snippet",
//                         maxResults: 5,
//                         q: searchQuery,
//                         type: "video",
//                         key: API_KEY,
//                     },
//                 })
//                 .then(response => {
//                     const simplifiedVideos = response.data.items.map(video => ({
//                         id: video.id.videoId, // Use videoId from the search response
//                         title: video.snippet.title,
//                         thumbnail: video.snippet.thumbnails.high.url,
//                         channelTitle: video.snippet.channelTitle,
//                     }));
//                     setVideos(simplifiedVideos);
//                 })
//                 .catch(error => {
//                     console.error("Error fetching searched videos:", error);
//                 });
//             };

//             fetchSearchedVideos();
//         } else {
//             setVideos([]); // Clear videos if searchQuery is empty
//         }
//     }, [searchQuery]); // Dependency array includes searchQuery

//     const handleSearch = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     const Search1icon = [
//         { id: 1, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" },
//         { id: 2, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" },
//         { id: 3, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" },
//         { id: 4, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true" }
//     ];

//     const [keyword, setKeyword] = useState([]);

//     useEffect(() => {
//         fetch("https://youtube-api-vxq5.onrender.com/yt/keyword")
//             .then((response) => response.json())
//             .then((data) => {
//                 setKeyword(data);
//             })
//             .catch((error) => {
//                 console.log(`error : ${error}`);
//             });
//     }, []);

//     return (
//         <>
//             <div className="Search">
//                 <div className="mainSearch">
//                     <div className="search1">
//                         <input
//                             type="text"
//                             placeholder="Search for videos..."
//                             value={searchQuery}
//                             onChange={handleSearch}
//                             className="searchBox"
//                         />
//                         <button type="submit" className="searchicon">
//                             <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" />
//                         </button>
//                         <div className="mic">
//                             <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" />
//                         </div>
//                     </div>

//                     <div className="search2">
//                         {Search1icon.map((i) => (
//                             <div className="icon" key={i.id}>
//                                 <img src={i.url} alt="" />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="line1"></div>

//                 <div className="more">
//                     <div className="word1">All</div>
//                     {keyword.map((i) => (
//                         <div className="word" key={i.id}>{i.value}</div>
//                     ))}
//                 </div>

//                 <div className="line1"></div>

//                 {/* Display search results */}

//                 {/* Display search results */}
//                 {videos.length > 0 && (
//                     <div className="searchResults">
//                         {videos.map((video) => (
//                             <div className="videoItem" key={video.id}>
//                                 <img
//                                     src={video.thumbnail}
//                                     alt={video.title}
//                                     className="videoThumbnail"
//                                 />
//                                 <div className="videoDetails">
//                                     <div className="videoTitle">{video.title}</div>
//                                     <div className="videoChannel">{video.channelTitle}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// }

// export default Searchbar;





import { useEffect, useState } from "react";
// import "./App.css";

function Searchbar() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("explore"); 
    const [userInput, setUserInput] = useState("");

    const API_KEY = "AIzaSyAFthZysqYQdL5WnN3TIpt74PvFZWNhybQ";

 
    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
                        searchQuery
                    )}&maxResults=10&key=${API_KEY}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch videos");
                }

                const data = await response.json();

                const transformedVideos = data.items.map((item) => ({
                    title: item.snippet.title,
                    channel: item.snippet.channelTitle,
                    views: "N/A", 
                    date: new Date(item.snippet.publishedAt).toLocaleDateString(),
                    thumbnail: item.snippet.thumbnails.medium.url,
                }));

                setVideos(transformedVideos);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, [searchQuery]); 
    const handleSearch = () => {
        if (userInput.trim()) {
            setSearchQuery(userInput);
        }
    };

    if (loading) {
        return <div>Loading videos...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="all">
            <div className="navbar">
                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)} 
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                            alt="Search"
                        />
                    </button>
                    <button className="mic-btn">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
                            alt="Mic"
                        />
                    </button>
                </div>
            </div>

            <div className="main-content">
                <div className="row">
                    {videos.map((video, index) => (
                        <div className="video" key={index}>
                            <div className="photo-container">
                                <img
                                    src={video.thumbnail}
                                    alt="Video Thumbnail"
                                    onError={(e) =>
                                        (e.target.src =
                                            "https://via.placeholder.com/150")
                                    }
                                />
                            </div>
                            <div className="cpy">
                                <div className="title">{video.title}</div>
                                <div className="channel">{video.channel}</div>
                                <div className="cpy3">
                                    <div className="views">{video.views}</div>
                                    <div className="date">{video.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Searchbar;



















// // Searchbar.js
// import './Searchbar.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key

// function Searchbar({ onSearch }) {
//     const [searchQuery, setSearchQuery] = useState(""); // For user input

//     const handleSearch = (event) => {
//         setSearchQuery(event.target.value);
//         onSearch(event.target.value); // Call the onSearch prop to pass the query to the parent
//     };

//     return (
//         <div className="Search">
//             <div className="mainSearch">
//                 <div className="search1">
//                     <input
//                         type="text"
//                         placeholder="Search for videos..."
//                         value={searchQuery}
//                         onChange={handleSearch}
//                         className="searchBox"
//                     />
//                     <button type="submit" className="searchicon">
//                         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" />
//                     </button>
//                     <div className="mic">
//                         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Searchbar;