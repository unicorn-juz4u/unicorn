
const EducationCard = ({ avatarUrl, title, description, dateRange }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <div className="flex items-center mb-2">
        <img src={avatarUrl} alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
      <p className="text-sm text-gray-400">{dateRange}</p>
    </div>
  );
};

const EducationSection = () => {
  const education = [
    {
        avatarUrl: 'https://www.universitadelladanza.it/wp-content/uploads/2023/10/logo-universita-della-danza.png',
        title: 'Laurea Magistrale in Coreografia',
        description: 'Laurea magistrale conseguita presso l\'Università della Danza di Roma, con una tesi incentrata sull\'uso della tecnologia nella danza contemporanea.',
        dateRange: '2019 - 2021',
    },
    // {
    //     avatarUrl: 'https://www.unimi.it/sites/default/files/styles/logo_unimi_bianco/public/logo_unimi_bianco.png',
    //     title: 'Laurea Triennale in Scienze della Comunicazione',
    //     description: 'Laurea triennale conseguita presso l\'Università degli Studi di Milano, con un focus particolare sui nuovi media e il marketing digitale.',
    //     dateRange: '2015 - 2018',
    // },
    // {
    //     avatarUrl: 'https://www.liceoartisticobrera.edu.it/wp-content/uploads/2021/04/logo-liceo-artistico-brera.png',
    //     title: 'Diploma di Maturità Artistica',
    //     description: 'Diploma conseguito presso il Liceo Artistico di Brera, con specializzazione in grafica e comunicazione visiva.',
    //     dateRange: '2011 - 2015',
    // },
  ];

  return (
    <div className="bg-black p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Education</h2>
      <div>
        {education.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;