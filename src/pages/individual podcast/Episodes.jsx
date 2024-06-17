const EpisodeObject={title:String, description:String,file:String, episode:Number};
const  Episode = ({data=EpisodeObject}) => {
  console.log(data)
  return (
    <div className="episode-card" key={data.episode}>
       <div className="play-icon-container">Icon</div>
       <div className="episode-details">
        <h4>{data.title}</h4>
        <p>{data.description}</p>
       </div>
    </div>
  )

}

export default Episode;