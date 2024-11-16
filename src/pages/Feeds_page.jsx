import AddsForFeeds_Card from '../components/Feeds/AddsForFeeds_Card'
import CreatePost from '../components/Feeds/CreatePost'
import Latest_card from '../components/Feeds/Latest_card'
import MainTagLinks from '../components/Feeds/MainTagLinks'
import PostCards from '../components/Feeds/PostCards'
import ProfileCard from '../components/Feeds/ProfileCard'
import Events_card from '../components/Feeds/Events_card'
import Tracked_hashtags from '../components/Feeds/Tracked_hashtags'

const Feeds_page = () => {
  return (

    <div className="md:w-[80%] w-full h-full mx-auto flex gap-6 py-4 my-4">

      <div className="w-3/12 ">
        <ProfileCard />
        <Latest_card />
        <Events_card />
        <Tracked_hashtags />
      </div>
      <div className=" md:w-6/12 w-full">
        <CreatePost />
        <PostCards />
      </div>
      <div className="w-3/12 ">
        <AddsForFeeds_Card />
        <MainTagLinks />
      </div>

    </div>
  )
}

export default Feeds_page