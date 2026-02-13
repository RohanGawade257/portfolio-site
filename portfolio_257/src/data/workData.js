import mywork_data from "../assets/mywork_data";

// Example structure
const workData = {
  "graphic-design": {
    title: "Graphic Design Projects",
    items: mywork_data.map((item) => ({
      name: item.w_name,
      image: item.w_img,
    })),
  },

  "video-editing": {
    title: "Video Editing Projects",
    items: [
      {
        name: "Cinematic Reel",
        image: "ADD_IMAGE_PATH_HERE",
      },
      {
        name: "YouTube Edit",
        image: "ADD_IMAGE_PATH_HERE",
      },
    ],
  },

  "web-design": {
    title: "Web Design Projects",
    items: [
      {
        name: "Portfolio Website",
        image: "ADD_IMAGE_PATH_HERE",
      },
    ],
  },
};

export default workData;