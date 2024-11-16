
const CourseCard = ({ thumbnailUrl, title, viewerCount }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <div className="relative">
        <img src={thumbnailUrl} alt={title} className="w-full h-40 rounded-lg" />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.293 0l-3.197 2.132a1 1 0 001.293 1.293l3.197-2.132v7.664a1 1 0 001.293.707l3.197 2.132a1 1 0 001.293-.707v-7.664z" />
          </svg>
        </button>
      </div>
      <h3 className="text-lg font-semibold text-white mt-2">{title}</h3>
      <p className="text-sm text-gray-400">{viewerCount} viewers</p>
    </div>
  );
};

const CourseRecommendations = () => {
  const courses = [
    {
      thumbnailUrl: 'https://example.com/course1.jpg',
      title: 'Lorem ipsum dolor sit amet',
      viewerCount: 12963,
    },
    {
      thumbnailUrl: 'https://example.com/course2.jpg',
      title: 'Lorem ipsum dolor sit amet',
      viewerCount: 4598,
    },
    // ... more courses
  ];

  return (
    <div className="bg-black p-4 my-4 rounded-lg">
      <h2 className="text-lg font-semibold text-white">You May Like These Courses</h2>
      <div>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      <a href="#" className="text-blue-400 hover:underline mt-4">SEE ALL RECOMMENDATIONS</a>
    </div>
  );
};

export default CourseRecommendations;