"use client"
import React from 'react';

export default function aBout(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-14">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center">About Doctor.ai</h1>
        <p className="mb-4">
          Welcome to Doctor.ai, a platform using machine learning to predict diseases accurately. Our tools analyze patient data and symptoms to identify health issues quickly. With an easy-to-use interface, Doctor.ai supports informed decisions for better health outcomes. Experience advanced disease prediction with Doctor.ai.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Shadcn</li>
          <li>Tailwind CSS</li>
          <li>Machine Learning</li>
          <li>Express.js</li>
          <li>Next Auth</li>
          <li>Node.js</li>
          <li>Prisma</li>
          <li>Postgres SQL</li>
        </ul>
      </div>
    </div>
  );
};
