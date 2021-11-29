import { ReducerBuilder } from "typescript-fsa-reducers";
import { createAsync } from "../../utils/reduxCreators";
import { useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Store } from "../../utils/rootReducer";
import { CommonState, TvlInfo } from "../model/reducer";
import { API } from "../../utils/api";

export const fetchTvl = createAsync<void, TvlInfo, Error>(
  "FETCH_TVL",
  async () => {
    const result = await API.get<TvlInfo>(`/tvl/1285`);
    return result.data;
  }
);

export function useFetchTvl() {
  const dispatch = useDispatch();
  const { totalTvl, tvlFetching } = useSelector(
    (state: Store) => ({
      totalTvl: state.common.tvl?.total,
      tvlFetching: state.common.tvlFetching,
    }),
    shallowEqual
  );
  const boundAction = useCallback(() => dispatch(fetchTvl()), [dispatch]);

  return {
    totalTvl,
    tvlFetching,
    fetchTvl: boundAction,
  };
}

export const builderHandler = (
  builder: ReducerBuilder<CommonState>
): ReducerBuilder<CommonState> =>
  builder
    .case(fetchTvl.async.started, (state) => ({
      ...state,
      tvlFetching: true,
    }))
    .case(fetchTvl.async.failed, (state) => ({
      ...state,
      tvlFetching: false,
    }))
    .case(fetchTvl.async.done, (state, { result }) => ({
      ...state,
      tvl: result,
      tvlFetching: false,
    }));
