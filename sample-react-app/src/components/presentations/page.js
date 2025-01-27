
import React, { useState, useEffect } from "react";

const Presentation = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState("ML");

  useEffect(() => {
    // Simulate an authentication check
    const checkAuthentication = async () => {
      try {
        // Simulate a successful authentication check
        setLoading(false);
      } catch (error) {
        // Handle authentication error
        console.error("Authentication error:", error);
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return (
      <div className="mt-32 flex h-screen items-center justify-center pb-24 text-xl text-dark dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
        <div className="text-md mb-4 text-center font-medium text-black dark:text-white sm:text-2xl">
          Loading&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="inline h-[30px] w-[30px] text-black dark:text-white sm:h-[50px] sm:w-[50px]"
          >
            <circle cx="4" cy="12" r="3" fill="currentColor">
              <animate
                id="svgSpinners3DotsScale0"
                attributeName="r"
                begin="0;svgSpinners3DotsScale1.end-0.2s"
                dur="0.6s"
                values="3;.2;3"
              />
            </circle>
            <circle cx="12" cy="12" r="3" fill="currentColor">
              <animate
                attributeName="r"
                begin="svgSpinners3DotsScale0.end-0.48s"
                dur="0.6s"
                values="3;.2;3"
              />
            </circle>
            <circle cx="20" cy="12" r="3" fill="currentColor">
              <animate
                id="svgSpinners3DotsScale1"
                attributeName="r"
                begin="svgSpinners3DotsScale0.end-0.36s"
                dur="0.6s"
                values="3;.2;3"
              />
            </circle>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div>
      <main className="container">
        <nav className="mt-20 flex h-28 flex-col items-start justify-center sm:mt-28 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-center text-2xl font-bold sm:pt-0 sm:text-start sm:text-3xl lg:text-4xl">
            Course Material
            <span className="text-lg font-light sm:text-2xl"> (PDF)</span>
          </h1>
        </nav>
        <section className="mb-8 flex flex-col justify-start sm:flex-row">
          <div className="mt-10 flex justify-center sm:w-1/4">
            <div className="flex flex-col">
              <button
                className="mb-1 w-full rounded-md px-4 py-2 font-bold text-black hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-36 bg-gradient-to-br from-primary to-blue-400 text-white border-2 border-blue-600 shadow-lg"
              >
                Presentations
              </button>
            </div>
          </div>
          <div className="mt-10 flex justify-center sm:-mt-10 sm:w-4/5">
            <div>
              {/* Placeholder for Presentations content */}
              <h2 className="text-2xl font-bold">Presentations for {course}</h2>
              <p>Here you will see the list of presentations for the course.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Presentation;
