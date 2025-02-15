import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../hooks';

interface SidebarState {
  isOpened: boolean;
}

const initialState: SidebarState = {
  isOpened: false,
};

const pageSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setIsOpened(state, action: PayloadAction<boolean>) {
      state.isOpened = action.payload;
    },
  },
});

const { setIsOpened } = pageSlice.actions;

export const useSidebarStore = () => {
  const dispatch = useAppDispatch();
  const states = useAppSelector((state) => state.sidebar);
  return {
    ...states,
    setIsOpened: (isOpened: boolean) => dispatch(setIsOpened(isOpened)),
    toggleSidebar: () => dispatch(setIsOpened(!states.isOpened)),
  };
};

export default pageSlice.reducer;
