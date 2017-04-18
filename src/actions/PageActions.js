import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_FAIL,
  GET_PHOTOS_SUCCESS
} from 'constants/Page';

let photosArr = [];
let cached = false;

function makeYearPhotos(photos, selectedYear) {
  let createdYear;
  const yearPhotos = [];

  photos.forEach((item) => {
    createdYear = new Date(item.created * 1000).getFullYear();
    if (createdYear === selectedYear) {
      yearPhotos.push(item);
    }
  });

  yearPhotos.sort((a, b) => b.likes.count - a.likes.count);
  return yearPhotos;
}
// console.log(`Max ${makeYearPhotos}`);

function getMorePhotos(offset, count, year, dispatch) {
  console.log(offset);
  VK.Api.call('photos.getAll', { count, offset, extended:1 }, (r) => { // eslint-disable-line no-undef
    console.log('count');
    try {
      if (offset <= r.response[0] - count) {
        const newOffset = offset + count;

        photosArr = photosArr.concat(r.response);
        getMorePhotos(newOffset, count, year, dispatch);
      } else {
        const photos = makeYearPhotos(photosArr, year);

        cached = true;

        dispatch({
          type: GET_PHOTOS_SUCCESS,
          payload: photos
        });
      }
    } catch (e) {
      dispatch({
        type: GET_PHOTOS_FAIL,
        error: true,
        payload: new Error(e)
      });
    }
  });
}

export function getPhotos(year) {
  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    });
    if (cached) {
      const photos = makeYearPhotos(photosArr, year);

      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: photos
      });
    } else {
      getMorePhotos(0, 2, year, dispatch);
    }
  };
}
