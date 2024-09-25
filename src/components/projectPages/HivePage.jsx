import hiveImg from "../../assets/img/hive/hive_actual.jpg";
import refImg from "../../assets/img/hive/ref.jpg";
import modelImg from "../../assets/img/hive/model.png";
import blenderImg from "../../assets/img/hive/hive_blender.png";
import unityImg from "../../assets/img/hive/hive_unity.png";
import ProjectPage from "../ProjectPage.jsx";

const content = [
  <p>
    The Hive is an interactive AR/VR experience of Georgia Tech's ECE
    makerspace, the Hive.{" "}
  </p>,
  <img className="img-project my-4" src={hiveImg} />,
  <p>
    As part of the EmpathyBytes VIP's exploration of GT makerspaces, the
    emerging technologies team decided to expand on their research by creating a
    virtual version of the ECE makerspace, The Hive. The goal of this project
    was to introduce the space and machinery to a wider audience allowing those
    not on campus to experience the resources and creativity that occurs daily
    within the space.
  </p>,
  <p>
    The app was created in Unity using ARFoundation. Within the space, the user
    can navigate through The Hive and interact with any machinery they
    encounter.
  </p>,
  <img className="img-project my-4" src={unityImg} />,
  <p>
    The models for the project were created in Blender and modeled using
    reference photos from the makerspace.
  </p>,
  <div className="flex img-project mx-auto mt-4 mb-2">
    <div className="w-1/2 pr-1">
      <img className=" " src={refImg} />
    </div>
    <div className="w-1/2 pl-1">
      <img className="" src={modelImg} />
    </div>
  </div>,
  <img className="img-project" src={blenderImg} />,
];
const team = [
  "Angela Dai (Team Lead: Modeling)",
  "Joseph Liu (Team Lead: Unity)",
  "Seth Morill (Team Lead: Unity)",
  "Jacqueline Le (Modeler)",
  "Elise Polo (Modeler)",
  "Alison Jasadipura (Programmer)",
  "John Pham (Programmer)",
  "Rutika Karande (Programmer)",
];

const links = [
  ["Github", "https://github.com/EmpathyBytes/Hive"],
  [
    "Makerspace Interview Collection",
    "https://educast.library.gatech.edu/makerspaces/makerspace-collection/",
  ],
];
const pageInfo = {
  teamList: team,
  projectTitle: "Modeling the Hive",
  date: "2021",
  projectType: "AR/VR",
  toolsUsed: "C#, Unity, Blender",
  content: content,
  links: links,
};

export default function HivePageInfo() {
  return (
    <>
      <ProjectPage props={pageInfo} />
    </>
  );
}
