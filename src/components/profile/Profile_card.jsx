import Profile_basic_detail from './Profile_basic_detail'
import Profile_page_banner from './Profile_page_banner'
import Dashboard_stats from './Dashboard_stats'

export default function () {
  return (
    <div className='w-full my-6'>
      <div className=" h-[60vh] flex gap-4">

        <div className="w-[75%] h-full rounded-lg overflow-hidden ">
          <div className="h-[60%]  ">
            <Profile_page_banner />
          </div>
          <div className="h-[40%] ">
            <Profile_basic_detail />
          </div>
        </div>

        <div className="w-[25%] ">
          <Dashboard_stats />
        </div>

      </div>
    </div>
  )
}

