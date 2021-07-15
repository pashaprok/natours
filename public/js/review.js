/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const postReview = async (review, rating, user, tour) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/reviews',
      data: {
        review,
        rating,
        user,
        tour,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Submitted successfully!');
      window.setTimeout(() => {
        location.reload();
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
