import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../Store/store";
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;