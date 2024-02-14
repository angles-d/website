import NavBar from "./NavBar"

export default function ArchivesInfo(){
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

    <div class="container">
            <div class="row mb-4">
                <div class="col-4">
                    <h1 class="mb-2">LetsBuild!</h1>
                    <h5>HackGT 2022</h5>
                    <p class="mb-4">AR | C#, Unity</p>
                    <p><a href="https://devpost.com/software/lets-build" class="readmore">Devpost</a>
                    <a href="https://github.com/angles-d/HackGT9" class="readmore">Github</a>
                    <a href="https://www.figma.com/file/ZaGfzMxBhxcRp7UBoxerV7/HackGT9?node-id=0%3A1" class="readmore">Figma</a></p>

                <div class = "team"> 
                        <div class="row mt-5 mb-4"></div>
                        <h5 style = {{"margin-bottom":"4px"}}>The Team </h5>
                        <p>Angela Dai (Programmer)</p>
                        <p>Sabiha Shaik (Programmer)</p>
                        <p>Alison Jasadipura (Programmer)</p>
                        <p>Riddhi Madeka (UI)</p>
                       
                    </div>
                </div>


                <div class="col">
                    <div class="sticky-content">

                        <div class="mb-5">
                            <p>
                                Lets Build! is a block-based multiplayer AR application that allows users to collaboratively build structures, memories, and endless amounts of chaos built for HackGT9.
                            </p>
                            <div class="embed-responsive embed-responsive-16by9 mb-4">
                                <iframe  class="mb-4 pl-4 pr-4" src="https://www.youtube.com/embed/tW86dV27mk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <p class="mb-0">Lets Build creates a virtual AR sandbox playground where the children can build together with blocks. Nearby users will be able to influence each other's space and view and interact with each other's block additions. Each user is assigned a unique block color and must collaborate with the others to create and design the scene. 
                            </p>
                            <br/>
                            <p>
                               To implement the multiplayer functionality, we used Apple's Multiplayer connectivity Framework coupled with ARFoundation Samples library. We used both physics and AR rays to detect potential collisions between both AR and real-world objects allowing the player to interact with both the AR blocks and world around them. Plane tracking was used to create the initial game board and placeable area for the blocks.
                            </p>
                            <div class="d-flex justify-content-center">
                                <img class="" src="../src/assets/img/letsbuild/letsbuild.gif"/>
                            </div>
                        
                        </div>

                    </div>
                </div>

            </div>
        </div>
  </>
  )
}