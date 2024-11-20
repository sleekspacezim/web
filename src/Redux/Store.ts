import { configureStore } from "@reduxjs/toolkit";
import { screenSizeSlice } from "./Slices/ScreenSizeSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: {
        warnAfter: 100,
        ignoredPaths: ["largeData"],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
