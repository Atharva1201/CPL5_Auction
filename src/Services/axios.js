// import axios from 'axios';
// import configData from '../configData';

// export const axiosRequest = axios.create({
//   'baseURL': configData.API_URL,
//   'headers': {
//     'orgId': '1',
//     'Authorization': `Bearer ${configData.TOKEN}`,
//     'Client-Ip': window.public_ip,
//   },
// });

// export const userRequest = axios.create({
//   baseURL: API_zURL,
// });

// axiosRequest.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (
//       error?.response?.status == 403 &&
//       window.location.pathname != '/forbidden'
//     ) {
//       localStorage.clear();
//       history.push('/forbidden');
//       history.go(0);
//     }
//     return Promise.reject(error);
//   },
// );

// axiosRequest.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (
//       error?.response?.status == 403 &&
//       window.location.pathname != '/forbidden'
//     ) {
//       localStorage.clear();
//       history.push('/forbidden');
//       history.go(0);
//     }

//     if (!error?.response?.data.auth && error?.response?.status === 401) {
//       localStorage.clear();
//       history.push('/');
//       history.go(0);
//     }

//     return Promise.reject(error);
//   },
// );

// axiosRequest.interceptors.request.use(
//   async (request) => {
//     request.headers = {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': '*',
//       'orgId': '1',
//       'Client-Ip': window.public_ip,
//       'Authorization': JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)
//       ?.userDetails?.accessToken ?
//         `Bearer ${JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//             .userDetails.accessToken}` :
//             `Bearer ${configData.TOKEN}`,
//     };
//     return request;
//   },
//   (error) => {
//     console.error(error);
//     return Promise.reject(error);
//   },
// );
