import bluemingImage from "../../assets/img/art/blueming.gif";
import faceImage from "../../assets/img/art/face.jpg";
import shapeImage from "../../assets/img/art/shapes.jpg";
import umbrellaImage from "../../assets/img/art/umbrella-2.gif";
import yellowImage from "../../assets/img/art/yellow.png";
import NavBar from "../NavBar";

function ArtSquare(props) {
    return (
        <>
            <div className="art-wrap">
                <div className="art-background">
                    <div className="art-text">
                        <h3>{props.title}</h3>
                        <span>{props.medium}</span>
                    </div>
                </div>
                <img className="w-full h-auto" src={props.src} />
            </div>
            <br />
        </>
    )
}

export default function ArtPage() {
    return (
        <div className="mx-auto w-10/12">
            <NavBar />
            <div className="grid grid-cols-3 gap-8 container mt-20">
                <div className="mb-5">
                    <h1 className="mb-2 text-4xl">Art</h1>
                    <h5 className="mb-2 text-xl ">2018-Present</h5>
                    <p className="mb-6">Mixed Media</p>

                    <ArtSquare title="3:00 AM" medium="Papercutting, Digital" src={shapeImage} />
                </div>
                <div className=" mb-5">
                    <ArtSquare title="yellow" medium="Digital" src={yellowImage} />
                    <ArtSquare title="Blueming" medium="Digital" src={bluemingImage} />
                </div>
                <div className="mb-5">
                    <ArtSquare title="Summer Sky" medium="Papercutting, Digital" src={umbrellaImage} />
                    <ArtSquare title="Last Piece" medium="Papercutting" src={faceImage} />
                    <br />
                </div>
            </div>
        </div>
    )
}