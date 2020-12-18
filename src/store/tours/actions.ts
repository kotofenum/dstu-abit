import { TourType } from './../graphql-global-types';
import { AsyncAction } from "overmind";

export const getTours: AsyncAction = async ({ state, effects }) => {
  const { tours } = await effects.tours.gql.queries.tours();
  console.log(tours);

  state.tours.inhouse = tours.filter(tour => tour.type === TourType.inhouse);
  state.tours.partners = tours.filter(tour => tour.type === TourType.partner)
};
