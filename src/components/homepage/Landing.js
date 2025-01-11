import React from "react";
import School from "../assets/school.jpg";
import School1 from "../assets/schoolphoto1.jpg";
import Lab from "../assets/lab.jpg";
import Footerlinks from "../footer/footerLink";

export default function Homepage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <div className="relative flex items-center justify-center min-h-screen bg-black">
          <div className="absolute top-0 w-full h-full">
            <img
              className="w-full h-full object-cover opacity-70"
              src={School}
              alt="School Background"
            />
          </div>
          <div className="relative z-10 text-center px-4 lg:px-8">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
              Shree Bindhyeshwori Secondary School
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto font-medium">
              Dedicated to excellence in education and nurturing students with
              holistic development for a brighter future.
            </p>
          </div>
        </div>

        {/* About Section */}
        <section className="py-16 bg-gray-100 drop-shadow-2xl">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                  About Our School
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Shree Bindhyeshwori Secondary School is renowned for providing
                  high-quality education with a vibrant learning atmosphere. Our
                  experienced educators emphasize both academic and personal
                  growth, ensuring our students are well-prepared for future
                  challenges. Join us in shaping young minds with knowledge and
                  values.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  src={School1}
                  alt="School Environment"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 border rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-500 text-white rounded-full">
                  <i className="fas fa-award text-2xl"></i>
                </div>
                <h4 className="text-2xl font-semibold mb-3">
                  Quality Education
                </h4>
                <p className="text-gray-600 text-lg">
                  Offering a meticulously crafted curriculum that ensures
                  students achieve their academic and personal goals.
                </p>
              </div>

              <div className="text-center p-8 border rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-500 text-white rounded-full">
                  <i className="fas fa-chalkboard-teacher text-2xl"></i>
                </div>
                <h4 className="text-2xl font-semibold mb-3">
                  Skilled Teachers
                </h4>
                <p className="text-gray-600 text-lg">
                  Experienced and passionate educators dedicated to guiding
                  students toward success.
                </p>
              </div>

              <div className="text-center p-8 border rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-500 text-white rounded-full">
                  <i className="fas fa-basketball-ball text-2xl"></i>
                </div>
                <h4 className="text-2xl font-semibold mb-3">
                  Extracurricular Excellence
                </h4>
                <p className="text-gray-600 text-lg">
                  Encouraging holistic development through diverse
                  extracurricular activities and programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lab Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <img
                  src={Lab}
                  alt="Lab Facilities"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                  Modern Lab Facilities
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our state-of-the-art labs provide hands-on learning
                  opportunities, enhancing students' understanding of
                  theoretical concepts through practical applications. With
                  cutting-edge equipment, we foster scientific inquiry and
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 shadow-2xl bg-gray-50">
          <Footerlinks />
        </section>
      </main>
    </>
  );
}
