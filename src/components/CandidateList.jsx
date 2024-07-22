import { MdDeleteForever } from "react-icons/md";
import { candidates } from "../pages/CandidateList";
import { FaUserEdit } from "react-icons/fa";
import { BiShowAlt } from "react-icons/bi";

export const CandidateList = () => {
  return (
    <>
      <div className="container mx-auto p-4 pt-20">
        <div className="bg-white shadow-2xl rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-50 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-50 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-50 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-50 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-50 uppercase tracking-wider">Modify</th>
              </tr>
            </thead>
            <tbody className="bg-green-50 divide-y divide-gray-200">
              {candidates.map((candidate, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-green-100' : 'bg-green-200'}>
                  <td className="px-6 py-4 whitespace-nowrap text-green-950 font-medium">{candidate.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-950 font-medium">{candidate.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-950 font-medium">{candidate.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-950 font-medium">{candidate.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-green-600 cursor-pointer flex text-xl">
                    <FaUserEdit className="hover:text-indigo-900" />&nbsp;&nbsp;<MdDeleteForever className="hover:text-indigo-900" />&nbsp;&nbsp;<BiShowAlt className="hover:text-indigo-900" />

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
    </>
  );
};
export default CandidateList