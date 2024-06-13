const EpisodeObject={title:String, description:String,file:String, episode:Number};
const  Episode = ({data=EpisodeObject}) => {
  console.log(data)
  return (
    <div className="episode-card" key={data.episode}>
       <div className="play-icon-container">Icon Episode</div>
       <div className="episode-details">
        <h3>{data.title}</h3>
        <h5>{data.description}</h5>
       </div>
    </div>
  )

}

export default Episode;