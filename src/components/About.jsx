import HeroImage from "../assets/heroImage.png";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row items-center justify-center w-full h-full space-y-4 md:space-y-0">
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500 mb-4">
            About
          </h2>
          <p className="text-xl sm:text-xl mt-4 leading-relaxed max-w-md">
            Hello everyone, I am Aman Gupta, a web developer with a passion for
            creating powerful and attractive websites. I love designing user-friendly sites that can be
            accessed by anyone, and I find joy in delivering performance that
            satisfies my clients on their personal devices. I look forward to the opportunity to contribute to your esteemed organization. That’s all from my side.
          </p>
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <img
            src={HeroImage}
            alt="Aman Gupta profile"
            className="rounded-2xl w-1/2 mx-auto md:w-1/3 shadow-lg"
          />
        </div>
        
      </div>
    </div>
  );
};

export default About;
