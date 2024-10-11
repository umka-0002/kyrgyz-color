// src/features/Search/model/selectors.js
export const selectSearchResults = (state) => state.search.results;
export const selectSearchStatus = (state) => state.search.status;
export const selectSearchError = (state) => state.search.error;
