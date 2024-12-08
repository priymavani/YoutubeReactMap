import './Maincontent.css'

function Maincontent(){

    const videodetail = [
        {id:1,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
        {id:2,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'Infinix Note 12 : AMOLED Helio G88 soC!',channel:'ATC Andriod TOTO Company ',viwes:'4.2M views• 2daysago'},
        {id:3,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'My first UX Design case study - This got me my first job.',channel:'Saptarshi Prakash',viwes:'4.8K views • 1 years ago'},
        {id:4,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'My Mix',channel:'Lopamudra Mitra, Anupam Roy, and more',viwes:''},
        {id:5,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'UX Desigl - What is it? (From AJ & Srnart)',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
        {id:6,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'Mix - Mombati I Mohon Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika',channel:'Mohon Sharif, Odd Signature, Shayan Chowdhury Arnob, and more ',viwes:''},
        {id:7,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
        {id:8,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
        {id:9,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'}
        ,{id:10,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
        {id:11,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
        {id:11,thimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",chicon:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",description:'Bulbuli I Coke Studio Bangla | Season One I Ritu X Nandita',channel:'Coke Studio Bangla ',viwes:'1.5M views • 2 days ago'},
        



        
        
    ]
    return(
        <>
        <div className="Main">
            <div className="carditems">
                {/* <div className="card">
                    <div className="thumbnailimg">
                        <img className="thumimg" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" alt="" />
                    </div>
                    <div className="videodetail">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" alt="" className="chennelicon" />
                        <div className="decription">Bulbuli I Coke Studio Bangla I
                        Season One I Ritu X Nandita </div>
                    </div>

                        <div className="channel">Coke Studio Bangla </div>
                        <div className="views">1.5M views • 2 days ago</div>
                    
                </div> */}

        {
            videodetail.map((i)=>
                <div className="card">
            <div className="thumbnailimg">
                <img className="thumimg" src={i.thimg} alt="" />
            </div>
            <div className="videodetail">
                <img src={i.chicon} alt="" className="chennelicon" />
                <div className="decription">{i.description} </div>
            </div>

                <div className="channel">{i.channel}</div>
                <div className="views">{i.viwes}</div>
            
        </div>
            )
        }

                {/* <div className="card">
                    <div className="thumbnailimg">
                        <img className="thumimg" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" alt="" />
                    </div>
                    <div className="videodetail">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" alt="" className="chennelicon" />
                        <div className="decription">Bulbuli I Coke Studio Bangla I
                        Season One I Ritu X Nandita </div>
                    </div>

                        <div className="channel">Coke Studio Bangla </div>
                        <div className="views">1.5M views • 2 days ago</div>
                    
                </div> */}
            </div>
        </div>
        </>
    )
}

export default Maincontent