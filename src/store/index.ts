import { IConfig } from "overmind";
import { namespaced } from "overmind/config";
import { createHook } from "overmind-react";

import * as ui from "./ui";
import * as logger from "./logger";
import { config as events } from "./events";
import { config as tags } from "./tags";
import { config as majors } from "./majors";
import { config as specialties } from "./specialties";
import { config as programs } from "./programs";
import { config as auth } from "./auth";
import { config as tours } from "./tours";
import { config as preuniversity } from "./preuniversity";

export const config = namespaced({
  ui,
  logger,
  events,
  tags,
  majors,
  specialties,
  programs,
  auth,
  tours,
  preuniversity,
});

declare module "overmind" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Config
    extends IConfig<{
      state: typeof config.state;
      actions: typeof config.actions;
      effects: typeof config.effects;
    }> {}
  // Due to circular typing we have to define an
  // explicit typing of state, actions and effects since
  // TS 3.9
}

export const useOvermind = createHook<typeof config>();
