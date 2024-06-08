import video from '../video/video.mp4'


const Video = () => {
    return(
        <video src={video} loop type="video/mp4" width="100%" autoPlay>
        </video>
    )
}

export default Video