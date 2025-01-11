import React, { useEffect, useState } from "react";
import Loader from "../../assets/loader.gif";
import Footerlinks from "../footer/footerLink";

const Event = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);
  const [selectedPostDetails, setSelectedPostDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/event/event`
        );
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

  const fetchPostDetails = async (postId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/event/event/${postId}`
      );
      const data = await response.json();
      setSelectedPostDetails(data);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  };

  const handlePostClick = async (index) => {
    setSelectedPostIndex((prevIndex) => (prevIndex === index ? null : index));
    console.log(selectedPostDetails);
    if (index !== null) {
      await fetchPostDetails(posts[index].id);
    }
  };

  const truncateDescription = (description, limit, index) => {
    const words = description.split(" ");
    const truncatedText = words.slice(0, limit).join(" ");

    if (words.length > limit) {
      return (
        <>
          {truncatedText}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => handlePostClick(index)}
          >
            {" Read More"}
          </span>
        </>
      );
    }

    return truncatedText;
  };

  return (
    <div className="bg-white  py-24 sm:py-32">
      <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-8">
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
              <p className="text-2xl text-center font-bold">
                Wait student Data is Loading...
              </p>
            </div>
          ) : (
            <>
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <article
                    key={index}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={post.file}
                      alt="Event"
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{post.title}</div>
                      <p className="text-gray-700 text-base">
                        {truncateDescription(post.description, 10, index)}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <button
                        onClick={() => handlePostClick(index)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        {selectedPostIndex === index
                          ? "Hide Details"
                          : "Show Details"}
                      </button>
                    </div>
                    {selectedPostIndex === index && (
                      <div className="px-6 py-4">
                        <p className="text-gray-700 text-base">
                          {post.description}
                        </p>
                        {/* Render additional details if needed */}
                      </div>
                    )}
                  </article>
                ))
              ) : (
                <h1 className="justify-center text-center text-2xl text-gray-800 mt-10">
                  No Data Found
                </h1>
              )}
            </>
          )}
        </div>
      </div>
      <Footerlinks />
    </div>
  );
};

export default Event;
