import mywork_data from "../assets/mywork_data";
import video_work_data from "../assets/video_work_data";
import web_work_data from "../assets/web_work_data";

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
    items: video_work_data.map((item) => ({
      name: item.name,
      image: item.image,
      url: item.url,   // ✅ ADD THIS
    })),
  },

  "web-design": {
    title: "Web Design Projects",
    items: web_work_data.map((item) => ({
      name: item.name,
      image: item.image,
      url: item.url,   // ✅ ADD THIS
    })),
  },
};

export default workData;
