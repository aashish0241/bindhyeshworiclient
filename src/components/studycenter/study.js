import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from "../../assets/loader.gif";
const StudyCard = ({ study }) => (
  <NavLink to={study.link} className={`group ${study.class}`}>
    <article className="flex flex-col items-start justify-between max-w-xl">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={study.createdAt} className="text-gray-500">
          {new Date(study.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        </time>
      </div>
      <div className="group relative">
        <img src={study.file} alt="" className="h-60 w-60 bg-gray-50" />
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
          Subject: {study.name}
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{study.description}</p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="text-gray-900 text-xl font-bold">Topic: {study.topic}</p>
        </div>
      </div>
    </article>
  </NavLink>
);

const Study = () => {
  const [studies, setStudies] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        setSelectedClass(null);
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/study/study`);
        const data = await response.json();
        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setStudies(sortedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching study data:', error);
        setIsLoading(false);
      }
    };

    fetchStudies();
  }, []);

  const filteredStudies = selectedClass
    ? studies.filter((study) => study.class === selectedClass)
    : studies;

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our School Studies</h2>
          <p className="mt-2 text-lg leading-6 text-gray-600">
            Explore our diverse range of study topics.
          </p>
        </div>
        {isLoading ? (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
          <img src={Loader} alt="Loading..." style={{ width: '100px', height: '100px', display: 'block', margin: '0 auto' }} />
          <p className="text-2xl text-center font-bold">Wait student Data is Loading...</p>
        </div>
        ) : (
          <div className="grid mt-8 max-w-2xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredStudies.map((study) => (
              <StudyCard key={study.id} study={study} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Study;
