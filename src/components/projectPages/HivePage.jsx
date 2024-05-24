import NavBar from "../NavBar"
import hiveImg from "../../assets/img/hive/hive_actual.jpg"
import refImg from "../../assets/img/hive/ref.jpg"
import modelImg from "../../assets/img/hive/model.png"
import blenderImg from "../../assets/img/hive/hive_blender.png"
import unityImg from "../../assets/img/hive/hive_unity.png"


export default function HivePage(){
  return (<>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Modeling the Hive</title>
    {/* header */}
    <div className="container">
      {/* .sticky-top for scrolling navbar */}
      <NavBar/>
      <div className="mt-5 mb-4 row" />
    </div>
    <div className="container">
        <div className="row mb-4">
            <div className="col-4">
                <h1 className="mb-2">Modeling <br/>the Hive</h1>
                <h5>2021</h5>
                <p className="mb-4">AR/VR | C#, Unity, Blender</p>
                <p><a href="https://github.com/EmpathyBytes/Hive" className="readmore">Github</a></p>
                <p><a href="https://educast.library.gatech.edu/makerspaces/makerspace-collection/"
                        className="readmore">Makerspace Interview Collection
                    </a>
                </p>
                <div className = "team"> 
                    <div className="row mt-5 mb-4"></div>
                    <h5 style = {{"margin-bottom":"4px"}}>The Team </h5>
                    <div style = {{"font-size":"15px"}}>
                        <p>Angela Dai (Team Lead: Modeling)</p>
                        <p>Joseph Liu (Team Lead: Unity)</p>
                        <p>Seth Morill (Team Lead: Unity)</p>
                        <p>Jacqueline Le (Modeler)</p>
                        <p>Elise Polo (Modeler)</p>
                        <p>Alison Jasadipura (Programmer)</p>
                        <p>John Pham (Programmer)</p>
                        <p>Rutika Karande (Programmer)</p>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="mb-5">
                    <div className="sticky-content">
                        <p>The Hive is an interactive AR/VR experience of Georgia Tech's ECE makerspace, the Hive. </p>
                        <img className="img-fluid mt-2 mb-4 pl-4 pr-4" src={hiveImg}/>
                        <p>As part of the EmpathyBytes VIP's exploration of GT makerspaces, the emerging
                            technologies team decided to expand on their research by creating a virtual version of the
                            ECE makerspace, The Hive. The goal of this project was to introduce the space and machinery
                            to a wider audience allowing those not on campus to experience the resources and creativity
                            that occurs daily within the space.</p>

                        <p>The app was created in Unity using ARFoundation. Within the space, the user can
                            navigate through The Hive and interact with any machinery they encounter.</p>
                        <img className="img-fluid mt-2 mb-4 pl-4 pr-4" src={unityImg}/>

                        <p>The models for the project were created in Blender and modeled using reference photos from the makerspace.</p>
                        <div className = "row">
                            <div className = "col pr-1">
                                <img className="img-fluid pl-4  mt-2 mb-3" src={refImg}/>
                            </div>
                            <div className = "col pl-1">
                                <img className="img-fluid pr-4 mt-2 mb-3" src={modelImg}/>
                            </div>
                        </div>
                        <img className="img-fluid mt-2 mb-4 pl-4 pr-4" src={blenderImg}/>

                    </div>
                </div>
            </div>

        </div>

    </div>
  </>
  )
}