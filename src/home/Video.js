import video from '../video/video.mp4'


const Video = () => {
    return(
        <video src={video} loop={true} type="video/mp4" width="100%" autoPlay={true} muted={true}>
        </video>
    )
}

export default Video
