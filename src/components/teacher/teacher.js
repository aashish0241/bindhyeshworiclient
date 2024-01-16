import React, { useState, useEffect } from 'react';

export default function Teacher() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/teacher/teacher`);
        const data = await response.json();
        // Sort the data by createdAt date in descending order
        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setTeachers(sortedData);
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our School Teachers</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Meet our dedicated and skilled teaching professionals.
          </p>
        </div>
        <div className="mx-auto grid mt-10 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {teachers.map((teacher) => (
            <article key={teacher.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={teacher.createdAt} className="text-gray-500">
                  {new Date(teacher.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </time>
              </div>
              <div className="group relative">
              <img src={teacher.file} alt="" className="h-60 w-60 rounded-full bg-gray-50" />
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  {teacher.name}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{teacher.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                
                <div className="text-sm leading-6">
                  <p className=" text-gray-900 text-xl font-bold">
                   Position:  {teacher.position}
                  </p>
                  <p className="text-gray-600 text-xl font-bold">Subject Teach: {teacher.subject}</p>
                  <p className="text-gray-600 text-xl font-bold">Phone Number: {teacher.phone}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
