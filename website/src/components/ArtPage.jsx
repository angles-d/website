import NavBar from "./NavBar"

export default function ArtPage(){
  return (
   <>
    <div className="container">
      {/* .sticky-top for scrolling navbar */}
      <NavBar/>
      <div className="mt-5 mb-4 row" />
    </div>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <h1 class="mb-2">Art</h1>
                <h5>2018-Present</h5>
                <p class="mb-5">Mixed Media</p>
                <div class="art-wrap">
                    <div class="art-background">
                        <div class="art-text">
                            <h3>3:00 AM</h3>
                            <span>Papercutting, Digital</span>
                        </div>
                    </div>
                    <img class="img-fluid" src="./src/assets/img/art/shapes.jpg"/>
                </div>
                <br/>


            </div>

            <div class="col-8">
                <div class="row">
                    <div class="col-6 mb-5">
                        <div class="art-wrap">
                            <div class="art-background">
                                <div class="art-text">
                                    <h3>yellow</h3>
                                    <span>Digital</span>
                                </div>
                            </div>
                            <img class="img-fluid" src="./src/assets/img/art/yellow.png"/>
                        </div>
                   
                        <div class="art-wrap">
                            <div class="art-background">
                                <div class="art-text">
                                    <h3>Blueming</h3>
                                    <span>Digital</span>
                                </div>
                            </div>
                            <img class="img-fluid" src="./src/assets//img/art/blueming.gif"/>
                        </div>
                        <br/>

                    </div>
                    <div class="col-6 mb-5">

                        <div class="art-wrap">
                            <div class="art-background">
                                <div class="art-text">
                                    <h3>Sky Summer</h3>
                                    <span>Papercutting, Digital</span>
                                </div>
                            </div>
                            <img class="img-fluid" src="./src/assets/img/art/umbrella-2.gif"/>
                        </div>
                        <br/>
                        <div class="art-wrap">
                            <div class="art-background">
                                <div class="art-text">
                                    <h3>Last piece</h3>
                                    <span>Papercutting</span>
                                </div>
                            </div>
                            <img class="img-fluid" src="./src/assets/img/art/face.jpg"/>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}