const Experience = () => {
    const experiences = [
      {
        id: 1,
        title: "Web Development Internship",
        company: "CodSoft",
        duration: "10 Sep 2024 - 10 Oct 2024",
        description: "I enhanced my web development skills by building dynamic and responsive web pages using HTML, CSS, and JavaScript.",
        
      },
      {
        id: 2,
        title: "Frontend Web Development Internship",
        company: "CodeAlpha",
        duration: "15 Sep 2024 - 15 Oct 2024",
        description: "Worked on building advanced websites with a focus on user experience and clean, maintainable code.",
       
      },
      {
        id: 3,
        title: "Python Internship",
        company: "CodeAlpha",
        duration: "15 Sep 2024 - 15 Oct 2024",
        description: "Applied Python programming for various projects including automation and data analysis tasks.",
        
      },
    ];
  
    return (
      <div name="experience" className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-screen-lg p-4 py-4 mx-auto flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-3xl font-bold inline border-b-4 border-gray-500">Experience</p>
            <p className="py-6 text-lg">Here is my experience in various roles along with certificates:</p>
          </div>
  
          <div className="grid gap-8 px-2 sm:px-0">
            {experiences.map(({ id, title, company, duration, description }) => (
              <div key={id} className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-lg"><strong>Company:</strong> {company}</p>
              <p className="text-lg"><strong>Duration:</strong> {duration}</p>
              <p className="py-2 text-lg">{description}</p>
              
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
  