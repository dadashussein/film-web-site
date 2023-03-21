// Release Date Fix function
export const dateFix = (date) => {
  return date.split("-")[0];
};

// Run time fix
export const runTimeFix = (time) => {
  const hours = Math.floor(time / 60);
  const minute = time % 60;
  return `${hours}H ${minute}M`;
};

// Percent circle color
export const circleColor = (voteAverage) => {
  if (voteAverage >= 70) {
    return "#00cc00"; // green
  } else if (voteAverage >= 50) {
    return "#ffd700"; // yellow
  } else {
    return "#ff0000"; // red
  }
};
