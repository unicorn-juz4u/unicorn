
const Projects_card = () =>
{
  const projects = [
    {
      title: '10X UI Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '02 09 2022',
      tags: ['UI Design', 'UX', 'React'],
      link: 'https://www.example.com/project1'
    },
    {
      title: 'E-commerce Website',
      description: 'Development of a fully functional e-commerce platform.',
      date: '15 11 2022',
      tags: ['E-commerce', 'React', 'Node.js'],
      image: 'https://www.example.com/ecommerce.jpg'
    },
    {
      title: 'Mobile App Development',
      description: 'Creating a mobile app for iOS and Android.',
      date: '01 01 2023',
      tags: ['Mobile App', 'React Native', 'Swift'],
      client: 'Acme Corporation'
    },
    {
      title: 'Corporate Website',
      description: 'Designing a modern and responsive website for a corporation.',
      date: '20 03 2023',
      tags: ['Web Design', 'WordPress', 'SEO']
    }
  ];

  return (
    <div className="bg-black shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-lg font-bold mb-4">Projects 3 of 10</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">{project.title}</h2>
            <p>{project.description}</p>
            <p className="text-sm text-gray-500">{project.date}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 text-blue-500 hover:underline">SHOW ALL (12)</button>
    </div>
  );
};

export default Projects_card;