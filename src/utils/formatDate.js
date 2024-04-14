export default function formatDate(timestamp) {
  const date = new Date(timestamp);
  const currentDate = new Date();
  const diffInMilliseconds = currentDate - date;
  const diffInSeconds = diffInMilliseconds / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;
  const diffInMonths = diffInDays / 30;
  const diffInYears = diffInDays / 365;

  if (diffInSeconds < 60) {
    return `${Math.floor(diffInSeconds)} seconds ago`;
  } else if (diffInMinutes < 60) {
    return `${Math.floor(diffInMinutes)} minutes ago`;
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)} hours ago`;
  } else if (diffInDays < 8) {
    return `${Math.floor(diffInDays)} days ago`;
  } else if (diffInDays < 31) {
    return `${Math.floor(diffInDays / 7)} weeks ago`;
  } else if (diffInYears < 1) {
    return `${Math.floor(diffInMonths)} months ago`;
  } else {
    return `${Math.floor(diffInYears)} years ago`;
  }
}

// if (diffInSeconds < 60) {
//   return `${Math.floor(diffInSeconds)} seconds ago`;
// } else if (diffInMinutes < 60) {
//   return `${Math.floor(diffInMinutes)} minutes ago`;
// } else if (diffInHours < 24) {
//   return `${Math.floor(diffInHours)} hours ago`;
// } else if (diffInDays < 30) {
//   return `${Math.floor(diffInDays)} days ago`;
// } else if (diffInYears < 1) {
//   return `${Math.floor(diffInMonths)} months ago`;
// } else {
//   return `${Math.floor(diffInYears)} years ago`;
// }
