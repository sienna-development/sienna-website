const colours = ["#11AD75", "#DE4747", "#A2ABFE", "#FCCDE6"];

const changeColour = () => {
  return colours[Math.floor(Math.random() * 4)];
};

export default changeColour;
