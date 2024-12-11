// import './Maincontent.css'
// import React , {useState, useEffect} from 'react'
// import axios from "axios";

// function Maincontent(){



    

//     // -----------------------------------------------------------------------------------------------------------------

//     // const videodetail = [
//     //     {id:1,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
//     //     {id:2,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",description:'Infinix Note 12 : AMOLED Helio G88 soC!',channel:'ATC Andriod TOTO Company ',viwes:'4.2M views• 2daysago'},
//     //     {id:3,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",description:'My first UX Design case study - This got me my first job.',channel:'Saptarshi Prakash',viwes:'4.8K views • 1 years ago'},
//     //     {id:4,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",chicon:"",description:'My Mix',channel:'Lopamudra Mitra, Anupam Roy, and more',viwes:''},
//     //     {id:5,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",description:'UX Desigl - What is it? (From AJ & Srnart)',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
//     //     {id:6,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",chicon:"",description:'Mix - Mombati I Mohon Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika',channel:'Mohon Sharif, Odd Signature, Shayan Chowdhury Arnob, and more ',viwes:''},
//     //     {id:7,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",description:'| 48 VISA-FREE',channel:'Nadir On The Go ',viwes:' 1.7M Views.•.s • 1 years ago'},
//     //     {id:8,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",description:'14 Advanced Tips to Design FASTER in Figma',channel:'Mizko ',viwes:'53K Views• 1 years ago'},
//     //     {id:9,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'}
//     //     ,{id:10,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
//     //     {id:11,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
//     //     {id:11,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'}, 
        
//     // ]

//     const [videos, setVideos] = useState([]);
 
  
//     useEffect(() => {
     
//       fetch("https://youtube-api-vxq5.onrender.com/yt")
//         .then((response) =>  response.json()
//         )
//         .then((data) => {
//           setVideos(data.videodetail);
        
//         })
//         .catch((error) => {
//             console.log("error " , error)
       
//         });
//     }, []);
  
   

//     return(
//         <>
//         <div className="Main">
//             <div className="carditems">
               

//         {
//             videos.map((i)=>(
//                 <div className="card">
//             <div className="thumbnailimg">
//                 <img className="thumimg" src={i.thimg} alt="" />
//             </div>
//             <div className="videodetail">
//                 <img src={i.chicon} alt="" className="chennelicon" />
//                 <div className="decription">{i.description} </div>
//             </div>

//                 <div className="channel">{i.channel}</div>
//                 <div className="views">{i.viwes}</div>
            
//         </div>)
//             )
//         }

//             </div>
//         </div>
//         </>
//     )
// }

// export default Maincontent













// import './Maincontent.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_KEY = "AIzaSyAFthZysqYQdL5WnN3TIpt74PvFZWNhybQ";

// function Maincontent() {

  

//   // // result value

// const [result , setResult] = useState(5);
//   const [videos, setVideos] = useState([]);




//   useEffect(() => {
//     // Fetch videos using YouTube API
//     const fetchVideos = () => {
//       axios.get("https://www.googleapis.com/youtube/v3/videos", {
//         params: {
//           part: "snippet,statistics", // Fetch both snippet and statistics
//           chart: "mostPopular", // This can be removed if not needed
//           regionCode: "IN", // Change region code as needed
//           maxResults: result, // Limit results
//           key: API_KEY,
//         },
//       })
//       .then(response => {
//         // Set videos with only necessary details
//         const simplifiedVideos = response.data.items.map(video => ({
//           id: video.id,
//           title: video.snippet.title,
//           thumbnail: video.snippet.thumbnails.high.url,
//           channelTitle: video.snippet.channelTitle,
//           viewCount: video.statistics.viewCount, // Get view count from statistics
//         }));
//         setVideos(simplifiedVideos);
//       })
//       .catch(error => {
//         console.error("Error fetching videos:", error);
//       });
//     };

//     fetchVideos();
//   }, []);


//   // search 
//   const Search1icon = [
//     {id:1 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"},
//     {id:2 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"},
//     {id:3 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"},
//      {id:4 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true"}
// ]

// const [keyword , setKeyword] = useState([]);

// useEffect(() => {
//     fetch("https://youtube-api-vxq5.onrender.com/yt/keyword")
//     .then((response) =>  response.json())
//     .then((data) => {
//         setKeyword(data);
//     })
//     .catch((error) => {console.log(`error : ${error}`);
// });
// },[]);


// // search useEffect 

// const [searchQuery, setSearchQuery] = useState(''); // State for search query
// useEffect(() => {
//   if (searchQuery.trim() === '') return; // Skip if the search query is empty

//   const fetchSearchResults = () => {
//     axios
//       .get("https://www.googleapis.com/youtube/v3/search", {
//         params: {
//           part: "snippet",
//           q: searchQuery,
//           type: "video",
//           maxResults: 2,
//           key: API_KEY,
//         },
//       })
//       .then((response) => {
//         const searchResults = response.data.items.map((item) => ({
//           id: item.id.videoId,
//           title: item.snippet.title,
//           thumbnail: item.snippet.thumbnails.high.url,
//           channelTitle: item.snippet.channelTitle,
//         }));
//         setVideos(searchResults);
//       })
//       .catch((error) => {
//         console.error("Error fetching search results:", error);
//       });
//   };

//   fetchSearchResults();
// }, [searchQuery]);

// // Handle search input submission
// const handleSearch = (event) => {
//   event.preventDefault();
//   const input = document.querySelector('.searchBox').value;
//   setSearchQuery(input);
// };





//   return (
//     // search 
//     <>

//     <div className="Search">

//     <div className="mainSearch">

//         <div className="search1">
//             <input  type="text" placeholder="Search for videos..."   className="searchBox"/>
//             <button  type="submit"  className="searchicon" onClick={handleSearch}  >
//                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" />
//             </button>
//             <div className="mic">
//                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" />
//             </div>
//         </div>

//         <div className="search2">
            
//             {
//                 Search1icon.map((i)=>(
//                     <div className="icon">
//                 <img src={i.url} alt="" />
//             </div>)
//                 )
//             }
//          </div>
//     </div>
//     <div className="line1"></div>

//     <div className="more">
//         <div className="word1">All</div>

      
//         {
//             keyword.map((i) =>(
//                 <div className="word" key={i.id}>{i.value}</div>)
//             )
//         }


//     </div>


//     <div className="line1"></div>

// </div>



//     {/* // -------------------------------------------------------------- */}
   
//     <div className="Main">
//       <div className="carditems">
//         {videos.map((video) => (
//           <div className="card" key={video.id}>
//             <div className="thumbnailimg">
//               <img
//                 className="thumimg"
//                 src={video.thumbnail}
//                 alt={video.title}
//               />
//             </div>
//             <div className="videodetail">
//               <img
//                 src={video.thumbnail} // Assuming you want to show the thumbnail as channel icon
//                 alt={video.channelTitle}
//                 className="chennelicon"
//               />
//               <div className="decription">{video.title}</div>
//             </div>
//             <div className="channel">{video.channelTitle}</div>
//             <div className="views">{video.viewCount} views</div> {/* Use viewCount from the video object */}
//           </div>
//         ))}
//       </div>

//       <div className="result">
//         <button className="baxResult" onClick={() => setResult(result == 10)}>10</button>
//         <button className="baxResult" onClick={ () => setResult(result == 20)}>20</button>
//         <button className="baxResult" onClick={ () => setResult(result == 30)}>30</button>
//         <button className="baxResult" onClick={ () => setResult(result == 50)}>50</button>
//       </div>
//     </div>

//     </>
//   );
// }

// export default Maincontent;














import './Maincontent.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = "AIzaSyAFthZysqYQdL5WnN3TIpt74PvFZWNhybQ";

function Maincontent() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [result, setResult] = useState(5);
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleVideoClick = (video) => {
    setSelectedVideo({
      id: video.id,
      title: video.title,
      channel: video.channelTitle,
      time: new Date(video.publishedAt).toLocaleDateString(),
    });
  };

  const handleBackClick = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    const fetchVideos = () => {
      axios
        .get("https://www.googleapis.com/youtube/v3/videos", {
          params: {
            part: "snippet,statistics",
            chart: "mostPopular",
            regionCode: "IN",
            maxResults: result,
            key: API_KEY,
          },
        })
        .then((response) => {
          const simplifiedVideos = response.data.items.map((video) => ({
            id: video.id,
            title: video.snippet.title,
            thumbnail: video.snippet.thumbnails.high.url,
            channelTitle: video.snippet.channelTitle,
            viewCount: video.statistics.viewCount,
            publishedAt: video.snippet.publishedAt,
          }));
          setVideos(simplifiedVideos);
        })
        .catch((error) => {
          console.error("Error fetching videos:", error);
        });
    };

    fetchVideos();
  }, [result]);



  
  useEffect(() => {
    fetch("https://youtube-api-vxq5.onrender.com/yt/keyword")
      .then((response) => response.json())
      .then((data) => {
        setKeyword(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') return;

    const fetchSearchResults = () => {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            part: "snippet",
            q: searchQuery,
            type: "video",
            maxResults: 5,
            key: API_KEY,
          },
        })
        .then((response) => {
          const searchResults = response.data.items.map((item) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
            channelTitle: item.snippet.channelTitle,
            publishedAt: item.snippet.publishedAt,
          }));
          setVideos(searchResults);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    };

    fetchSearchResults();
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    const input = document.querySelector('.searchBox').value;
    setSearchQuery(input);
  };


  const Search1icon = [
        {id:1 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"},
        {id:2 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"},
        {id:3 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"},
         {id:4 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true"}
    ]

  return (
    <>
      <div className="Search">
        <div className="mainSearch">
          <div className="search1">
            <input type="text" placeholder="Search for videos..." className="searchBox" />
            <button type="submit" className="searchicon" onClick={handleSearch}>
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                alt=""
              />
            </button>
            <div className="mic">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
                alt=""
              />
            </div>
          </div>

          <div className="search2">
            {Search1icon.map((i) => (
              <div className="icon" key={i.id}>
                <img src={i.url} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="line1"></div>

        <div className="more">
          <div className="word1">All</div>
          {keyword.map((i) => (
            <div className="word" key={i.id}>
              {i.value}
            </div>
          ))}
        </div>

        <div className="line1"></div>
      </div>

      {selectedVideo ? (
        <div className="video_detail">
          <button onClick={handleBackClick} className="back_button">
            Back to Videos
          </button>
          <div className="video_player">
            <iframe
              width="90%"
              height="450"
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={selectedVideo.title}
            ></iframe>
          </div>
          <div className="video_info">
            <h2 className="title1">{selectedVideo.title}</h2>
            <p className="channel1"> {selectedVideo.channel}</p>
            {/* <p className="time1">Published: {selectedVideo.time}</p> */}
          </div>
        </div>
      ) : (
            <div className="carditems">
              {videos.map((video) => (
            <div
              className="card"
              key={video.id}
              onClick={() => handleVideoClick(video)}
            >
              <div className="thumbnailimg">
                <img className="thumimg" src={video.thumbnail} alt={video.title} />
              </div>


              <div className="videodetail">
                <img
                  src={video.thumbnail}
                  alt={video.channelTitle}
                  className="chennelicon"
                />
                <div className="decription">{video.title}</div>
              </div>
              <div className="channel">{video.channelTitle}</div>
              <div className="views">{video.viewCount} views</div>
            </div>

              ))}
            </div>
            
            

          )
          
          }
         


      <div className="Main">
        
   

        <div className="result">
          <button className="baxResult" onClick={() => setResult(10)}>
            10
          </button>
          <button className="baxResult" onClick={() => setResult(20)}>
            20
          </button>
          <button className="baxResult" onClick={() => setResult(30)}>
            30
          </button>
          <button className="baxResult" onClick={() => setResult(50)}>
            50
          </button>
        </div>
      </div>
    </>
  );
}

export default Maincontent;





















// import './Maincontent.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_KEY = "AIzaSyAFthZysqYQdL5WnN3TIpt74PvFZWNhybQ";
// const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
// const TRENDING_URL = "https://www.googleapis.com/youtube/v3/videos";

// function Maincontent() {
//   const [videos, setVideos] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(""); // For user input
//   const [isSearching, setIsSearching] = useState(false); // To differentiate search and trending fetch

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(
//           isSearching ? SEARCH_URL : TRENDING_URL,
//           {
//             params: isSearching
//               ? {
//                   part: "snippet",
//                   q: searchQuery, // Search query
//                   type: "video",
//                   maxResults: 12,
//                   key: API_KEY,
//                 }
//               : {
//                   part: "snippet,statistics",
//                   chart: "mostPopular",
//                   regionCode: "US",
//                   maxResults: 122,
//                   key: API_KEY,
//                 },
//           }
//         );
//         const data = isSearching ? response.data.items : response.data.items;
//         setVideos(data);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     // Fetch videos if the component mounts or when the search query changes
//     fetchVideos();
//   }, [searchQuery, isSearching]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim() === "") {
//       setIsSearching(false); // Show trending if search query is empty
//     } else {
//       setIsSearching(true); // Enable search mode
//     }
//   };

//   return (
//     <div className="Main">
//       {/* Search Bar */}
//       <div className="search-bar-container">
//         <form onSubmit={handleSearch} className="search-form">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search videos..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button type="submit" className="search-button">
//             Search
//           </button>
//         </form>
//       </div>

//       {/* Video Cards */}
//       <div className="carditems">
//         {videos.map((video) => {
//           const videoId = isSearching ? video.id.videoId : video.id;
//           return (
//             <div className="card" key={videoId}>
//               <div className="thumbnailimg">
//                 <img
//                   className="thumimg"
//                   src={
//                     isSearching
//                       ? video.snippet.thumbnails.high.url
//                       : video.snippet.thumbnails.high.url
//                   }
//                   alt={video.snippet.title}
//                 />
//               </div>
//               <div className="videodetail">
//                 <img
//                   src={video.snippet.thumbnails.default.url}
//                   alt={video.snippet.channelTitle}
//                   className="chennelicon"
//                 />
//                 <div className="decription">{video.snippet.title}</div>
//               </div>
//               <div className="channel">{video.snippet.channelTitle}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Maincontent;
