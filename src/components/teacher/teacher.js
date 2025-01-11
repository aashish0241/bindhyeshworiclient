import React, { useState, useEffect } from "react";
import Loader from "../../assets/loader.gif";
import Footerlinks from "../footer/footerLink";

export default function Teacher() {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch teachers data from the backend
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/teacher/teacher`
        );
        const data = await response.json();
        // Sort teachers by creation date (newest first)
        const sortedData = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setTeachers(sortedData);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  // Render the loader component
  const renderLoader = () => (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    >
      <img
        src={Loader}
        alt="Loading..."
        style={{
          width: "100px",
          height: "100px",
          display: "block",
          margin: "0 auto",
        }}
      />
      <p className="text-2xl text-center m-10 font-bold">
        Wait, Data is Loading...
      </p>
    </div>
  );

  // Render teacher cards
  const renderTeachers = () => (
    <div className="mx-auto grid mt-10 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {teachers.length > 0 ? (
        teachers.map((teacher) => (
          <article
            key={teacher.id}
            className="flex max-w-xl flex-col items-start justify-between"
          >
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={teacher.createdAt} className="text-gray-500">
                {new Date(teacher.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="group relative">
              <img
                src={teacher.file}
                alt=""
                className="h-60 w-60 rounded-full bg-gray-50"
              />
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                {teacher.name}
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {teacher.description}
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <div className="text-sm leading-6">
                <p className="text-gray-900 text-xl font-bold">
                  Position: {teacher.position}
                </p>
                <p className="text-gray-600 text-xl font-bold">
                  Subject Teach: {teacher.subject}
                </p>
                <p className="text-gray-600 text-xl font-bold">
                  Phone Number: {teacher.phone}
                </p>
              </div>
            </div>
          </article>
        ))
      ) : (
        <h1 className="text-center text-2xl text-gray-500 mt-10">
          No Data Found
        </h1>
      )}
    </div>
  );

  return (
    <div className="bg-white m py-24 sm:py-32">
      <div className="mx-auto  mb-5 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our School Teachers
          </h2>
          "Meet our dedicated and skilled teaching professionals."
          <div className="mt-2 text-lg leading-8 text-gray-600">
            {isLoading ? renderLoader() : renderTeachers()}
          </div>
        </div>
      </div>
      <Footerlinks />
    </div>
  );
}
