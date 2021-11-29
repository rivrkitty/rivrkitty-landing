import { builderHandler as fetchTvlHandler } from "./fetchTvl";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { CommonState } from "../model/reducer";

const initialState: CommonState = {
  tvl: null,
  tvlFetching: false,
};

export default reducerWithInitialState(initialState).withHandling(
  fetchTvlHandler
);
