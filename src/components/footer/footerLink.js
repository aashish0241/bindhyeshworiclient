import { useEffect, useState } from "react";

const Footerlinks = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  // Function to fetch recent posts from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/event/event`
        );
        const data = await response.json();
        console.log(data);
        const sortedData = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setRecentPosts(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container my-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-20">
      {/* Left Side: Recent Posts */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Recent Posts
        </h2>
        <ul className="w-full">
          {recentPosts?.slice(0, 3).map(
            (
              post // Displaying only the first 3 posts
            ) => (
              <li
                key={post._id}
                className="mb-6 p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all"
              >
                <a
                  href={post.url}
                  className="flex items-center space-x-4 text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post?.file && (
                    <img
                      src={post?.file}
                      alt={post?.title}
                      className="w-16 h-16 rounded-lg shadow-md"
                    />
                  )}
                  <span className="font-medium text-lg">{post.title}</span>
                </a>

                {/* Description aligned to the right */}
                <div className="mt-4 flex justify-between items-start">
                  <p className="text-gray-600 flex-1 text-sm sm:text-base md:text-lg leading-relaxed">
                    {post.description?.slice(0, 100)}...
                  </p>
                </div>
              </li>
            )
          )}
          {recentPosts?.length === 0 && (
            <p className="text-center text-gray-600">
              No recent posts available.
            </p>
          )}
        </ul>
      </div>

      {/* Right Side: Important Links */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Links
        </h2>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <a
              href="/contact"
              className="text-lg text-blue-500 hover:text-blue-700 transition-all"
            >
              Report Issue
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-lg text-blue-500 hover:text-blue-700 transition-all"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100071135523931"
              className="text-lg text-blue-500 hover:text-blue-700 transition-all"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps?ll=28.308285,83.961252&z=15&t=m&hl=en&gl=NP&mapclient=embed&cid=15756628495109909907"
              className="text-lg text-blue-500 hover:text-blue-700 transition-all"
            >
              Map
            </a>
          </li>
          <li>
            <a
              href="/event"
              className="text-lg text-blue-500 hover:text-blue-700 transition-all"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="/study"
              className="text-lg text-blue-500 hover:text-blue-700 transition-all"
            >
              Materials
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footerlinks;
