import { Link } from 'react-router-dom'

const Dashboard_stats = () => {
  return (
    <div className='h-full flex flex-col justify-around p-6 bg-black rounded-lg'>
      <div className="dash-heading flex justify-between mb-2">
        <p className="text">OUR DASHBOARD</p>
        <Link to="" className="text-blue-500 underline">GO TO STATS</Link>
      </div>
      <hr className="" />
      <div className="flex flex-col justify-around h-full">
        <div className="total_views">
          <span className="text-5xl text-blue-400 font-bold">317</span>
          <p className=" text-lg">
            views today
          </p>
        </div>
        <div className="total_views">
          <span className="text-5xl text-blue-400 font-bold">37</span>
          <p className="text-lg">
            posts views
          </p>
        </div>
        <div className="total_views">
          <span className="text-5xl text-blue-400 font-bold">17</span>
          <p className="text-lg">
            search appereances
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard_stats