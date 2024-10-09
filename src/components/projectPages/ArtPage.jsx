import bluemingImage from "../../assets/img/art/blueming.gif";
import faceImage from "../../assets/img/art/face.jpg";
import shapeImage from "../../assets/img/art/shapes.jpg";
import umbrellaImage from "../../assets/img/art/umbrella-2.gif";
import yellowImage from "../../assets/img/art/yellow.png";
import NavBar from "../NavBar";

export function ArtSquare(props) {
    return (
        <>
            <div className="art-wrap my-6">
                <div className="art-background">
                    <div className="art-text">
                        <h3>{props.title}</h3>
                        <span>{props.medium}</span>
                    </div>
                </div>
                <img className="w-full h-auto" src={props.src} />
            </div>
        </>
    )
}

export default function ArtPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="mx-auto w-10/12">
            <NavBar />
            <div className="grid grid-cols-3 gap-x-6 container mt-20">
                <div className="mb-5">
                    <h1 className="mb-2 text-4xl">Art</h1>
                    <h5 className="mb-2 text-xl ">2018-Present</h5>
                    <p className="mb-16">Mixed Media</p>

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