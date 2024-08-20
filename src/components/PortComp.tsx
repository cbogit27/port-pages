"use client";
import { useState } from "react";

export default function PortComp() {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1. This project is about...",
    },
    {
      title: "Project 2",
      description: "Description of Project 2. This project is about...",
    },
    {
      title: "Project 3",
      description: "Description of Project 3. This project is about...",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row max-w-[1240px] mx-auto px-3 sm:px-4 lg:px-6 py-24">
      {/* Sidebar */}
      <aside className="lg:w-1/4 w-full bg-gray-100 p-4 rounded-xs shadow-[-4px_4px_4px_0px_#000000] mb-6 lg:mb-0">
        <h2 className="text-lg font-bold text-gray-800 mb-6">Portfolio</h2>
        <ul>
          {projects.map((project, index) => (
            <li
              key={index}
              className={`cursor-pointer p-3 mb-3 rounded-xs ${
                activeTab === index
                  ? "bg-gray-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/4 w-full p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {projects[activeTab].title}
        </h2>
        <p className="text-md text-gray-600">{projects[activeTab].description}</p>
      </main>
    </div>
  );
}
