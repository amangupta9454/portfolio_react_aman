const Qualification = () => {
    return (
      <div name="qualification" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg mx-auto p-5 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Qualification</p>
            <p className="py-6">My academic qualifications are as follows:</p>
          </div>
  
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm sm:text-base border border-gray-500">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="py-2 px-4 border border-gray-500">Qualification</th>
                  <th className="py-2 px-4 border border-gray-500">Institute</th>
                  <th className="py-2 px-4 border border-gray-500">Year</th>
                  <th className="py-2 px-4 border border-gray-500">Percentage/SGPA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-gray-500">
                  <td className="py-2 px-4 border border-gray-500">B.Tech in Computer Science & Engineering</td>
                  <td className="py-2 px-4 border border-gray-500">Hi-Tech Institute of Engineering and Technology (HIET), Ghaziabad</td>
                  <td className="py-2 px-4 border border-gray-500">2023-2027</td>
                  <td className="py-2 px-4 border border-gray-500">SGPA: 7.2</td>
                </tr>
                <tr className="border border-gray-500">
                  <td className="py-2 px-4 border border-gray-500">Intermediate</td>
                  <td className="py-2 px-4 border border-gray-500">New Modern Children School, Dullahapur, Ghazipur</td>
                  <td className="py-2 px-4 border border-gray-500">2020-2022</td>
                  <td className="py-2 px-4 border border-gray-500">59%</td>
                </tr>
                <tr className="border border-gray-500">
                  <td className="py-2 px-4 border border-gray-500">High School</td>
                  <td className="py-2 px-4 border border-gray-500">Shree Balkrishna Public Vidyalaya, Sherpur, Mau</td>
                  <td className="py-2 px-4 border border-gray-500">2018-2020</td>
                  <td className="py-2 px-4 border border-gray-500">66.8%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default Qualification;
  