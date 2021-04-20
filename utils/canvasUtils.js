const colours = ["#11AD75", "#DE4747", "#A2ABFE", "#FCCDE6", "#FFE3BA", "#FFD600", "#FE961D", "#F55081", "#F55081", "#0926BD", "#24E8C4", "#AD119E", "#BAFFDA", "#D680FF", "#FFA98E"];

export default function changeColour() {
  return colours[Math.floor(Math.random() * 15)];
};

