import { notesActions } from "@/store/features/notesSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useAppDispatch } from "./useAppDispatch";

const actions = {
    ...notesActions,
}
export const useActions  = () => {
    const dispatch = useAppDispatch();
    return useMemo(
      () => {
        return bindActionCreators(actions, dispatch);
      },
      [dispatch]
    );
  }