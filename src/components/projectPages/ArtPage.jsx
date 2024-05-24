import NavBar from "../NavBar"
import shapeImage from "../../assets/img/art/shapes.jpg";
import yellowImage from "../../assets/img/art/yellow.png";
import bluemingImage from "../../assets/img/art/blueming.gif";
import umbrellaImage from "../../assets/img/art/umbrella-2.gif";
import faceImage from "../../assets/img/art/face.jpg";

function ArtSquare(props){
    return (
     <>
          <div className="art-wrap">
              <div className="art-background">
                  <div className="art-text">
                      <h3>{props.title}</h3>
                      <span>{props.medium}</span>
                  </div>
              </div>
              <img className="img-fluid" src={props.src}/>
          </div>
          <br/>
    </>
    )
  }

export default function ArtPage(){
  return (
   <>
    <div className="container">
      <NavBar/>
      <div className="mt-5 mb-4 row" />
    </div>
    <div className="container">
        <div className="row">
            {/* Column A */}
            <div className="col-4">
                {/* Title */}
                <h1 className="mb-2">Art</h1>
                <h5>2018-Present</h5>
                <p className="mb-5">Mixed Media</p>

                {/* Art */}
                <ArtSquare title ="3:00 AM" medium = "Papercutting, Digital" src={shapeImage} />
            </div>
             {/* Column B */}
            <div className="col-8">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-6 mb-5">
                        <ArtSquare title ="yellow" medium = "Digital" src={yellowImage} />
                        <ArtSquare title ="Blueming" medium = "Digital" src={bluemingImage} />
                    </div>

                    {/* Column 2 */}
                    <div className="col-6 mb-5">
                        <ArtSquare title ="Summer Sky" medium = "Papercutting, Digital" src={umbrellaImage}/>
                        <ArtSquare title ="Last Piece" medium = "Papercutting" src={faceImage} />
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}