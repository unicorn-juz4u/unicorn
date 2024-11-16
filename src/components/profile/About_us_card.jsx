
const About_us_card = () =>
{
  const aboutUsData = {
    title: "About Our Company",
    description: "We are a leading technology company focused on innovative solutions.",
    date: "Established in 2023",
    mission: "To empower businesses through cutting-edge technology.",
    vision: "To be the world's most innovative technology company.",
    values: ["Innovation", "Customer Focus", "Integrity", "Teamwork"],
    team: [
      { name: "John Doe", role: "CEO", bio: "Experienced leader with a passion for technology." },
      { name: "Jane Smith", role: "CTO", bio: "Skilled engineer driving technological advancements." }
    ],
    contact: {
      email: "info@example.com",
      phone: "+123-456-7890",
      address: "123 Main Street, Anytown, CA 12345"
    },
    socialMedia: {
      facebook: "https://www.facebook.com/ourcompany",
      twitter: "https://twitter.com/ourcompany",
      linkedin: "https://www.linkedin.com/company/ourcompany"
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{aboutUsData.title}</h1>
      <p>{aboutUsData.description}</p>
      <p className="text-gray-500">{aboutUsData.date}</p>

      {/* Mission and Vision */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission and Vision</h2>
      <p>
        <strong>Mission:</strong> {aboutUsData.mission}
      </p>
      <p>
        <strong>Vision:</strong> {aboutUsData.vision}
      </p>

      {/* Core Values */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Core Values</h2>
      <ul>
        {aboutUsData.values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      {/* Team Members */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
      <div className="grid grid-cols-2 gap-4">
        {aboutUsData.team.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>

      {/* Contact Information */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
      <p>
        <strong>Email:</strong> {aboutUsData.contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {aboutUsData.contact.phone}
      </p>
      <p>
        <strong>Address:</strong> {aboutUsData.contact.address}
      </p>

      {/* Social Media */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Follow Us</h2>
      <div className="flex space-x-4">
        <a href={aboutUsData.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href={aboutUsData.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href={aboutUsData.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default About_us_card;