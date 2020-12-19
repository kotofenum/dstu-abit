import React, { ReactNode } from "react";
import YouTube from "react-youtube";
import { cn } from "../../../services/helpers/classname";

import "./styles.scss";

const block = cn("tour-item");

interface ITourItemProps {
  title: string;
  description: string;
  videoId: string;
}

export function TourItem({ title, description, videoId }: ITourItemProps) {
  return (
    <div className={block()}>
      <div className={block("title")}>{title}</div>
      <div
        className={block("description")}
        dangerouslySetInnerHTML={{
          __html: "<p>" + description.replace(/\n/g, "&nbsp;</p><p>") + "</p>",
        }}
      />
      <YouTube
        containerClassName={block("video").toString()}
        videoId={videoId}
      />
    </div>
  );
}
