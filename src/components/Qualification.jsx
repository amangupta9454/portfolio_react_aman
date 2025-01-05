import React from "react";
import starsImage from "../assets/star.jpg";
const Qualification = () => {
  return (
    <div
      name="qualification"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${starsImage})`,
      }}
    >
      <div className="max-w-screen-lg px-4 mx-auto">
       
        <div className="mb-6 text-center">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Qualification
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-white border-collapse">
            <thead className="bg-blue-600">
              <tr>
                <th className="px-4 py-2 text-sm sm:text-lg font-semibold">Degree</th>
                <th className="px-4 py-2 text-sm sm:text-lg font-semibold">Institute</th>
                <th className="px-4 py-2 text-sm sm:text-lg font-semibold">Year</th>
                <th className="px-4 py-2 text-sm sm:text-lg font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white hover:bg-violet-700">
                <td className="px-4 py-3 text-sm sm:text-base truncate">B.Tech</td>
                <td className="px-4 py-3 text-sm sm:text-base truncate">Hi-Tech Institute, Ghaziabad</td>
                <td className="px-4 py-3 text-sm sm:text-base">2023-2027</td>
                <td className="px-4 py-3 text-sm sm:text-base truncate">7.2 SGPA</td>
              </tr>
              <tr className="border-t border-white hover:bg-violet-700">
                <td className="px-4 py-3 text-sm sm:text-base truncate">Intermediate</td>
                <td className="px-4 py-3 text-sm sm:text-base truncate">New Modern Children School</td>
                <td className="px-4 py-3 text-sm sm:text-base">2020-2022</td>
                <td className="px-4 py-3 text-sm sm:text-base truncate">59%</td>
              </tr>
              <tr className="border-t border-white hover:bg-violet-700">
                <td className="px-4 py-3 text-sm sm:text-base truncate">High School</td>
                <td className="px-4 py-3 text-sm sm:text-base truncate">Shree Balkrishna Vidyalaya</td>
                <td className="px-4 py-3 text-sm sm:text-base">2018-2020</td>
                <td className="px-4 py-3 text-sm sm:text-base truncate">66.8%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
