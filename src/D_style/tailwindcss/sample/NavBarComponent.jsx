import React from "react";

export default function NavBarComponent({ contents = [] }) {
  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-lime-50 shadow-md rounded">
        <div className="text-xl font-bold text-indigo-600">MyLogo</div>
        <ul className="flex space-x-6 list-none">
          {contents.map((data) => (
            <li className="text-gray-600 hover:text-indigo-500 transition-colors">
              {data}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
