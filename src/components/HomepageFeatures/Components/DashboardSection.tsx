import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";

import logs_page from "/static/vid/notifyLogs_page.gif";
import users_page from "/static/vid/users_page.gif";
import analytics_page from "/static/vid/analytics_page.gif";
import DLQ_page from "/static/vid/DLQ_page.gif";

export default function DashBoardPreview(): JSX.Element {
  const thumbs = [logs_page, users_page, analytics_page, DLQ_page];

  const renderThumbs = () => {
    return thumbs.map((thumb, index) => (
      <img
        src={thumb}
        alt="thumbnail for telegraph dashboard carousel"
        key={index}
      />
    ));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-20 px-10">
      <h2 className="text-center xl:text-3xl lg:text-3xl text-2xl">
        Track & trace all notifications with the dashboard
      </h2>
      <Carousel className="max-w-[1000px] w-full" renderThumbs={renderThumbs}>
        <div>
          <img
            src={logs_page}
            alt="Demo of the notification logs page"
            className="rounded-md"
          ></img>
        </div>
        <div>
          <img
            src={users_page}
            alt="Demo of the users page"
            className="rounded-md"
          ></img>
        </div>
        <div>
          <img
            src={analytics_page}
            alt="Demo of the analytics page"
            className="rounded-md"
          ></img>
        </div>
        <div>
          <img
            src={DLQ_page}
            alt="Demo of the Dead Letter Queue page"
            className="rounded-md"
          ></img>
        </div>
      </Carousel>
    </div>
  );
}
