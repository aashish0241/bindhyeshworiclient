import React, { useEffect, useState } from "react";

const Event = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedPostDetails, setSelectedPostDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/event/event`);
        const data = await response.json();
        const sortedData = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePostClick = (postId) => {
    setSelectedPost(selectedPost === postId ? null : postId);
  };

  const truncateDescription = (description, limit) => {
    const words = description.split(" ");
    const truncatedText = words.slice(0, limit).join(" ");

    if (words.length > limit) {
      return (
        <>
          {truncatedText}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => handlePostClick(selectedPost)}
          >
            {" Read More"}
          </span>
        </>
      );
    }

    return truncatedText;
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            School News and Notice
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            All school events are uploaded here. Check your events.
          </p>
        </div>

        <div className="mx-auto grid mt-10 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {isLoading ? (
            <div className=" bg-blue items-center justify-center flex text-black">
             <h1 className="text-black text-2xl font-bold">Wait  Data is Loading...</h1>
            </div>
          ) : (
            posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={post.datetime}
                    className="text-gray-500 text-xl font-bold"
                  >
                    Post date: {post.date}
                  </time>
                </div>
                <div className="group relative bg-gray-200 bg-opacity-50 p-6 ">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <div onClick={() => handlePostClick(post.id)}>
                      <span className="absolute inset-0 text-3xl font-bold flex items-center" />
                      {post.title}
                    </div>
                  </h3>
                  <img
                    src={post.file}
                    alt="logo"
                    className="mt-5 h-60 w-80  bg-gray-50"
                  />
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {truncateDescription(post.description, 40)}
                  </p>
                  {selectedPost === post.id && (
                    <>
                      <p className="mt-5 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                      <p className="text-sm leading-6 font-semibold text-gray-900">
                        {post.name}
                      </p>
                      {selectedPostDetails}
                    </>
                  )}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
