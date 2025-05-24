import lungs from "../assets/lungs.png";
import teeth from "../assets/tooth.png";
import heart from "../assets/heart.png";
import bone from "../assets/bone.png";

const healthData = [
  {
    name: "Lungs",
    status: "Operation Required",
    color: "red",
    image: lungs,
    progressbar: 25,
  },
  {
    name: "Teeth",
    status: "Need Checkup",
    color: "green",
    image: teeth,
    progressbar: 45,
  },
  {
    name: "Bone",
    status: "Exercise Recommended",
    color: "green",
    image: bone,
    progressbar: 75,
  },
  {
    name: "Heart",
    status: "Healthy",
    color: "green",
    image: heart,
    progressbar: 85,
  },
];

export default healthData;
