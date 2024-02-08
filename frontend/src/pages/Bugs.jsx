import React from "react";
import { useSelector } from "react-redux";
function Bugs(props) {
  const bugs = useSelector((state) => state.issues.data);

  console.log("bugs", bugs);

  return (
    <div>
      <div class="flex">
        <div class="flex flex-col">
          <div class="w-full">
            <div class="border-b border-gray-200 shadow">
              <table class="divide-y divide-green-400 ">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-2 text-xs text-gray-500">ID</th>
                    <th class="px-6 py-2 text-xs text-gray-500">Bug Title</th>
                    <th class="px-6 py-2 text-xs text-gray-500">Bug Severity</th>
                    <th class="px-6 py-2 text-xs text-gray-500">Bug Priority</th>
                    <th class="px-6 py-2 text-xs text-gray-500">Status</th>
                    <th class="px-6 py-2 text-xs text-gray-500">Delete</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-300">
                 {bugs.map((bug) => (
                     <tr key={bug.id} class="whitespace-nowrap">
                     <td class="px-6 py-4 text-sm text-gray-500">{bug.id}</td>
                     <td class="px-6 py-4">
                       <div class="text-sm text-gray-900">{bug.title}</div>
                     </td>
                     <td class="px-6 py-4">
                       <div class="text-sm text-gray-500">
                        {bug.severity}
                       </div>
                     </td>
                     <td class="px-6 py-4 text-sm text-gray-500"><span className={`${bug.priority === "high" ? 'bg-red-400' : 'bg-red-100'} + px-2 rounded`}>{bug.priority}</span></td>
                     <td class="px-6 py-4">
                       <a href="#">
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="w-6 h-6 text-blue-400"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                         >
                           <path
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             stroke-width="2"
                             d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 
                       2 0 112.828 
                       2.828L11.828 15H9v-2.828l8.586-8.586z"
                           />
                         </svg>
                       </a>
                     </td>
                     <td class="px-6 py-4">
                       <a href="#">
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="w-6 h-6 text-red-400"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                         >
                           <path
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             stroke-width="2"
                             d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 
                       4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                           />
                         </svg>
                       </a>
                     </td>
                   </tr>
                 ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Bugs;
