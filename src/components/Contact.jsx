const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-6 text-white"
    >
      <div className="flex flex-col p-6 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form to contact me</p>
        </div>
        <div className="text-lg text-gray-300 mb-8 flex flex-col items-center space-y-2">
          <p>Email: <a href="mailto:ag0567688@gmail.com" className="text-blue-400 underline">ag0567688@gmail.com</a></p>
          <p>Mobile: <a href="tel:+919560472926" className="text-blue-400 underline">9560472926</a></p>
          <p>WhatsApp: <a href="https://wa.me/919560472926" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">9560472926</a></p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/amddkgwb"
            method="POST"
            className="flex flex-col w-full md:w-1/2 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />

            <select
              name="gender"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            >
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="male" className="text-black">Male</option>
              <option value="female" className="text-black">Female</option>
              <option value="other" className="text-black">Other</option>
            </select>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
