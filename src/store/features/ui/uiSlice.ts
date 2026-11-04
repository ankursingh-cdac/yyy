import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  isMobileMenuOpen: boolean;
  isEnquiryModalOpen: boolean;
  selectedCourseForEnquiry: string | null;
  activeGalleryFilter: string;
}

const initialState: UiState = {
  isMobileMenuOpen: false,
  isEnquiryModalOpen: false,
  selectedCourseForEnquiry: null,
  activeGalleryFilter: "all",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
    openEnquiryModal: (state, action: PayloadAction<string | undefined>) => {
      state.isEnquiryModalOpen = true;
      state.selectedCourseForEnquiry = action.payload ?? null;
    },
    closeEnquiryModal: (state) => {
      state.isEnquiryModalOpen = false;
      state.selectedCourseForEnquiry = null;
    },
    setGalleryFilter: (state, action: PayloadAction<string>) => {
      state.activeGalleryFilter = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  setMobileMenuOpen,
  openEnquiryModal,
  closeEnquiryModal,
  setGalleryFilter,
} = uiSlice.actions;

export default uiSlice.reducer;
