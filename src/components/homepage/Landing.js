import React from "react";
import developerImage from "../assets/developer.jpg"
import School from "../assets/school.jpg"
// components

export default function Homepage() {
  return (
    <>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <img
              className="absolute top-0 w-full h-full object-cover"
              src={School} alt="Background"
            />
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
            <div className="w-full lg:w-10/12 px-4 mx-auto text-center">
  <div className="pr-4 lg:pr-12 lg:flex lg:items-center"> {/* Updated line */}
    <h1 className="text-white font-semibold text-3xl max-w-content mb-4 lg:mb-0"> {/* Updated line */}
      Shree Bindhyeshwori Secondary School
    </h1>
    <p className="mt-4 text-lg text-white lg:ml-4"> {/* Updated line */}
      Shree Bindhyeshwori Secondary School is known for its
      excellent education and vibrant learning atmosphere. The
      dedicated educators focus on holistic student development,
      emphasizing not only academic excellence but also essential
      life skills. The curriculum is thoughtfully crafted to
      empower students with the knowledge and skills needed for
      future success, reflecting the school's commitment to
      quality education.
    </p>
  </div>
</div>

</div>

            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      {" "}
                      Quality Education
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      We are renowned for its unwavering commitment to
                      delivering high-quality education. The curriculum is
                      meticulously crafted to meet rigorous academic standards,
                      ensuring students receive a comprehensive and well-rounded
                      learning experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Skilled Teachers</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      The school boasts a team of experienced and skilled
                      teachers who are dedicated to the success and development
                      of their students. These educators bring a wealth of
                      knowledge and expertise to the classroom, fostering an
                      environment conducive to effective learning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Extracurricular </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      The school excels in extracurricular activities, fostering
                      holistic development. From sports to arts, students engage
                      in diverse pursuits, enhancing their skills and nurturing
                      talents beyond the classroom for a well-rounded
                      educational experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-3">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-200">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mt-0  w-max-content mb-2 font-semibold leading-normal">
                  Study Environment for student{" "}
                </h3>
                <p className="text-lg font-normal leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Shree Bindhyeshwori Secondary School boasts a conducive study
                  environment, providing students with quiet and well-equipped
                  spaces for focused learning. The classrooms are designed to
                  facilitate interactive teaching, and the school emphasizes a
                  balance between academic rigour and a comfortable atmosphere,
                  fostering an optimal setting for intellectual growth and
                  educational success.
                </p>
                <p className="text-lg font-normal leading-relaxed mt-0 mb-4 text-blueGray-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="fill-Blue-500"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">Our Lab</h4>
                    <p className="text-md font-light mt-2 text-white"></p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl items-center font-semibold">
                    Our Lab
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    We are prioritizes practical learning with state-of-the-art
                    lab facilities. Students benefit from well-equipped science
                    and computer labs, enabling hands-on exploration and
                    experimentation. The school ensures a dynamic environment
                    for scientific inquiry, enhancing students' understanding
                    and application of theoretical concepts through experiential
                    learning in modern and fully-equipped laboratories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-1 bg-slate-500">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-0">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Here are our Developer Team
                </h2>
              </div>
              <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img
  src={developerImage}
  alt="Developer"
  className="self-center flex-shrink-0 w-40 h-40 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />

                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-center md:text-left">
                      Aashish Timsina
                    </h4>
                    <p className="dark:text-gray-400">
                      I am proficient MERN stack developer
                      specializing in client website development. With a strong
                      background in MongoDB, Express.js, React, and Node.js,
                      I possesses the skills to create dynamic and
                      efficient web applications. His expertise lies in crafting
                      seamless user experiences and implementing robust backend
                      solutions. I am dedication to staying updated on the
                      latest web development trends ensures that he delivers
                      modern and scalable websites for clients. As a MERN stack
                      developer, I brings a valuable combination of
                      frontend and backend skills to the table, making him a
                      reliable and versatile asset in the field of client
                      website development.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center pt-4 space-x-4 align-center">
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/aashish0241"
                    aria-label="GitHub"
                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      viewBox="0 0 496 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://aashishtimsina.com.np"
                    aria-label="Dribble"
                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/profile.php?id=100053096056726"
                    aria-label="Twitter"
                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"                       className="w-4 h-4 fill-current" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
</svg>

                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="email"
                    aria-label="Email"
                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                  >
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                    </svg>
                  </a>
                  
                </div>
                
                <hr className="text-xl" style={{ height: '4px' }} />

                <a href="https://aashishtimsina.com.np">
                  <>
                  <p className="dark:text-gray-400  text-blue-500 font-bold text-2xl"> My Portfilio website: Click Here</p>
                  </>
                  </a>
<p className="dark:text-gray-400"> Email: timsinaashish6@gmail.com</p>

<hr className="text-xl" style={{ height: '4px' }} />

<p className="dark:text-gray-400"> Addres:Pokhara 19</p>

<hr className="text-xl" style={{ height: '4px' }} />

<p className="dark:text-gray-400"> currently study BIT</p>

<hr className="text-xl" style={{ height: '4px' }} />

<p className="dark:text-gray-400">Phone:9861524169</p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-2 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>


        </section>
         */}
      </main>
    </>
  );
}
