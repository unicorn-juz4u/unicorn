import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Profile_basic_detail = () =>
{
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () =>
  {
    setIsLoading(true);
    setError(null);

    try
    {
      const response = await axios.get('https://randomuser.me/api/');
      if(userData) return;
      setUserData(response.data.results[0]); // Access the first user object
    } catch(error)
    {
      console.error('Error fetching user data:', error);
      setError('An error occurred while fetching user data.');
    } finally
    {
      setIsLoading(false);
    }
  }, []);

  useEffect(() =>
  {
    fetchData();
  }, []); // Re-run the effect only when fetchData changes

  if(isLoading)
  {
    return <p>Loading user data...</p>;
  }

  if(error)
  {
    return <p className="error">{error}</p>;
  }

  if(!userData)
  {
    return <p>No user data found.</p>;
  }

  const { name, picture, location, email, phone } = userData;
  const { title, first, last } = name;
  const { city, country } = location;

  return (
    <div className="flex h-full bg-black border-1 border-transparent gap-2">

      <div className="relative w-[20%] mx-6">
        <div className=" absolute top-[-20%] w-[100%] bg-white flex justify-center items-center rounded-full overflow-hidden">
          <img src={picture.large} alt={`${first} ${last}`} className="profile-picture w-[11rem] h-[11rem] p-1 rounded-full " />
        </div>
      </div>

      <div className="w-[80%] flex flex-col justify-around px-2 py-2">

        <div className=" flex justify-around items-center ">
          <h2 className='font-bold text-xl'>{`${title} ${first} ${last}`}</h2>
          <p>
            <span className="label">Location:</span> {`${city}, ${country}`}
          </p>
        </div>
          
        {/* <div className="">
            <p>
              <span className="label">Email:</span> {email}
            </p>
            <p>
              <span className="label">Phone:</span> {phone}
            </p>
          </div> */}

        <div className="about text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto earum ducimus eaque necessitatibus porro tempora molestiae quisquam. Vitae iusto nobis, nemo, libero,  recusandae similique nostrum.
        </div>

        <div className="flex justify-around">
          <button className=" bg-sky-600 text-white px-6 py-2 rounded-lg">Contact info</button>
          <button className=" text-sky-600 bg-white px-6 py-2 rounded-lg">1,043 connections</button>
        </div>
        
      </div>

    </div>
  );
};

export default Profile_basic_detail;