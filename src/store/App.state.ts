import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ASSETS_URL } from "../consts/api";
import { APRhistory } from "../mock-data/apr-history";
import { getData } from "../utils/getData";

interface AssetData {
  asset: string;
  selected_farm: Array<{ tvlStakedHistory: [] }>;
}

export interface AppState {
  assetData: AssetData;
  aprData: { date: string; value: number };
}

const initialState: AppState = {
  assetData: { asset: "", selected_farm: [{ tvlStakedHistory: [] }] },
  aprData: { date: "", value: 0 },
};

const AppSlice = createSlice({
  name: "AppState",
  initialState: initialState,
  reducers: {
    setAssetData(state: AppState, action: PayloadAction<any>) {
      state.assetData = action.payload;
    },
    setAPRData(state: AppState, action: PayloadAction<any>) {
      state.aprData = action.payload;
    },
  },
});

export const { setAssetData, setAPRData } = AppSlice.actions;

export default AppSlice.reducer;

export const onAppInit = () => async (dispatch: any) => {
  const response = await getData(ASSETS_URL);

  const lunaData = response.data.find(
    (asset: any) => asset.assetId === "TERRA_Lido__LUNA"
  );

  dispatch(setAssetData(lunaData));
  dispatch(setAPRData(APRhistory));
};
