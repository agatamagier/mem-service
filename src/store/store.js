import { createStore } from "redux";
import { memReducer } from "./reducers/globalReducer";

export const store = createStore(memReducer)
