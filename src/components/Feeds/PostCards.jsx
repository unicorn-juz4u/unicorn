import FeedsStats from './FeedsStats'
import ImageGallery from './ImageGallery'
import VidoePlayer from './VidoePlayer'
import SocialMediaButtons from './SocialMediaButtons'
import VideoPlayer from './VidoePlayer'
import CustomVideoPlayer from './CustomVideoPlayer.jsx'

const PostCards = () => {
  const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  return (

    <div className="bg-black w-full my-8 p-4">
    
      <div className=" mb-2 gap-3 rounded-lg flex items-center justify-center">
      
        <div className="bg-white user-icon w-14 h-14">
          {/* For profile Icon */}
        </div>
      
        <div className="w-10/12 flex flex-col">
          <h2 className="font-bold ">Brand Name</h2>
          <span> {26.548} followers</span>
          <span>Promoted</span>
        </div>
        <span className=" text-white text-4xl items-center mb-6">...</span>
      </div>

      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, augue eget scelerisque efficitur.</p>
      <div className=" w-full h-96 border border-gray-500 rounded-md overflow-hidden">

        {/* items by type of incoming data for presentation */}

        {/* <ImageGallery /> */}


        <CustomVideoPlayer videoUrl={videoUrl} />
      </div>

      <FeedsStats />

      <SocialMediaButtons />
      

    </div>
  )
}

export default PostCards