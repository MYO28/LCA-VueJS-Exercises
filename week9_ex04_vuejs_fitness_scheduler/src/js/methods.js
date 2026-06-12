export const formatClassTime = (hour) => {
  return `${hour}:00 AM`;
};

export const getWorkoutType = (type) => {
  const types = {
    hiit: "HIIT - High Intensity",
    yoga: "Yoga - Recovery",
    spin: "Cycling - Cardio",
  };
  return types[type] || "General Fitness";
};
