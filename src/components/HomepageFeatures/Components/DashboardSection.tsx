import React, { useRef, useEffect } from "react";
import { Carousel, Flowbite } from "flowbite-react";
import "./DashboardSection.css";

import logs_page from "/static/vid/logs.mp4";
import users_page from "/static/vid/users.mp4";
import analytics_page from "/static/vid/analytics.mp4";

export default function DashBoardPreview(): JSX.Element {
  // Refs to store the video elements
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Handle slide change to autoplay videos on active slide and pause others
  const handleSlideChange = (currentIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          // Autoplay the video on the current slide
          video.play();
        } else {
          // Pause the video if it's not the active slide
          video.pause();
          video.currentTime = 0; // Reset to the beginning of the video
        }
      }
    });
  };

  useEffect(() => {
    // Ensure the first video starts autoplaying when the component mounts
    if (videoRefs.current[0]) {
      videoRefs.current[0].play();
    }
  }, []);

  return (
    <Flowbite>
      <div className="bg-gray-100 dark:bg-componentDarkMode">
        {/* Container for the header and carousel */}
        <div className="max-w-4xl mx-auto p-4">
          {/* Header */}
          <h2 className="text-center xl:text-3xl lg:text-3xl text-2xl mb-4">
            Track & trace notifications with the dashboard
          </h2>

          {/* Carousel Container */}
          <div className="h-64 sm:h-72 xl:h-80 2xl:h-96 overflow-hidden relative flex justify-center items-center">
            <Carousel
              slide={false}
              leftControl={
                <button className="text-white bg-blue hover:bg-gray-500 rounded-full p-2">
                  <span className="text-3xl">&#8249;</span>{" "}
                  {/* Left Arrow Icon */}
                </button>
              }
              rightControl={
                <button className="text-white bg-blue hover:bg-gray-500 rounded-full p-2">
                  <span className="text-3xl">&#8250;</span>{" "}
                  {/* Right Arrow Icon */}
                </button>
              }
              onSlideChange={handleSlideChange} // Listen for slide changes
            >
              {/* Carousel Slides */}
              <div className="flex justify-center items-center h-full">
                <video
                  ref={(el) => (videoRefs.current[0] = el)}
                  loop
                  autoPlay
                  muted
                  className="rounded-md h-full w-auto"
                >
                  <source src={logs_page} type="video/mp4"></source>
                </video>
              </div>
              <div className="flex justify-center items-center h-full">
                <video
                  ref={(el) => (videoRefs.current[1] = el)}
                  loop
                  autoPlay
                  muted
                  className="rounded-md h-full w-auto"
                >
                  <source src={users_page} type="video/mp4"></source>
                </video>
              </div>
              <div className="flex justify-center items-center h-full">
                <video
                  ref={(el) => (videoRefs.current[2] = el)}
                  loop
                  autoPlay
                  muted
                  className="rounded-md h-full w-auto"
                >
                  <source src={analytics_page} type="video/mp4"></source>
                </video>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </Flowbite>
  );
}
