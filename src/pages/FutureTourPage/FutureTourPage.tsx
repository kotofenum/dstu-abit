import { Paper, Tab, Tabs } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Brick } from "../../components/utility/Brick";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";
import { TourItem } from "./components";

import "./styles.scss";

const block = cn("future-tour-page");

export function FutureTourPage() {
  const [tab, setTab] = useState<'inhouse' | 'partners'>("inhouse");

  const { actions, state } = useOvermind();

  useEffect(() => {
    actions.tours.getTours();
  }, []);

  return (
    <div className={block()}>
      <span className={block("heading")}>Экскурсии в будущее</span>
      <Brick size={2} />
      <div className={block("tabs")}>
        <Paper square>
          <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={(_, value) => setTab(value)}
          >
            <Tab label="Экскурсии ДГТУ" value="inhouse"/>
            <Tab label="Бизнес-партнеры ДГТУ" value="partners"/>
          </Tabs>
        </Paper>
      </div>
      <Brick size={3} />
      {state.tours[tab].map((tour) => (
        <TourItem
          title={tour.title}
          description={tour.description}
          videoId={tour.videoId}
        />
      ))}
    </div>
  );
}
