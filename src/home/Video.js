import video from '../video/video.mp4'


const Video = () => {
    return(
        <video src={video} type="video/mp4" width="100%" autoPlay muted>
        </video>
    )
}

export default Video