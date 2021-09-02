export function fetchCollectionStart() {
  return { type: 'FETCH_COLLECTIONS_START' };
}
export function fetchCollectionSuccess(collections) {
  return { type: 'FETCH_COLLECTIONS_SUCCESS', payLoad: collections };
}
export function fetchCollectionFailure(err) {
  return { type: 'FETCH_COLLECTIONS_FAILURE', payLoad: err };
}
