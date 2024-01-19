import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const StudyCard = ({ study }) => (
  <NavLink to={`/study/${study._id}`} className="group" key={study._id}>
    <article className="flex flex-col items-start justify-between max-w-xl">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={study.createdAt} className="text-gray-500">
          {new Date(study.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        </time>
      </div>
      <div className="group relative">
        <img
          src={study.file}
          alt=""
          className="h-60 w-60 bg-gray-50"
          onError={(e) => {
            e.target.src = 'fallback-image-url';
          }}
        />
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
          Subject: {study.name}
        </h3>
        <p className="text-gray-600 text-xl font-bold">Class: {study.term}</p>
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchStudies = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/study/study`);
        const data = await response.json();

        if (isMounted) {
          const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setStudies(sortedData);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching study data:', error);
        setIsLoading(false);
      }
    };

    fetchStudies();

    return () => {
      isMounted = false;
    };
  }, []);

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
          <p className="text-2xl font-bold text-center mt-8">Data is loading...</p>
        ) : (
          <div className="grid mt-8 max-w-2xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {studies.map((study) => (
              <StudyCard key={study._id} study={study} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Study;
