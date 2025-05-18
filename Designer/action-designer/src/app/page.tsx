"use client";

import React, { useState } from 'react';
//import 'tailwindcss/tailwind.css';
import Image from "next/image";

const ActionListManager = () => {
  const [actions, setActions] = useState([
    {
      id: 1,
      name: "Create VM",
      description: "Creates a new virtual machine instance",
      language: "Python",
      cloud: "AWS",
      parameters: [
        {
          name: "instanceType",
          type: "string",
          required: true,
          description: "The type of instance to launch",
          defaultValue: "t2.micro",
        },
        {
          name: "imageId",
          type: "string",
          required: true,
          description: "The AMI ID to use for the instance",
        },
      ],
    },
    {
      id: 2,
      name: "Deploy Function",
      description: "Deploys a serverless function",
      language: "NodeJS",
      cloud: "Azure",
      parameters: [
        {
          name: "functionName",
          type: "string",
          required: true,
          description: "Name of the function to deploy",
        },
        {
          name: "runtime",
          type: "string",
          required: false,
          description: "Runtime version",
          defaultValue: "nodejs14.x",
        },
        {
          name: "memorySize",
          type: "number",
          required: false,
          description: "Memory allocation in MB",
          defaultValue: "128",
        },
      ],
    },
  ]);

  const handleAddAction = () => {
    // Logic to add a new action
  };

  const handleEditAction = (id: number) => {
    // Logic to edit an action
  };

  const handleDeleteAction = (id: number) => {
    setActions(actions.filter((action) => action.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-indigo-800">Action List Manager</h1>
        <p className="text-gray-600">Create, Read, Update, and Delete actions with parameters</p>
      </header>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Actions</h2>
          <button
            onClick={handleAddAction}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center"
          >
            Add Action
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Language
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cloud
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parameters
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {actions.map((action) => (
                <tr key={action.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{action.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{action.language}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{action.cloud}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{action.parameters.length} parameters</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                      onClick={() => handleEditAction(action.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDeleteAction(action.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActionListManager;
