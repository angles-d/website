import ProjectPage from '../ProjectPage.jsx';
import raytracingImg from '../../assets/img/compGraphics/ray_tracing.png';
import raytracingImg2 from '../../assets/img/compGraphics/ray_tracing2.png';
import dragonRaytrace from '../../assets/img/compGraphics/dragon_raytrace.png';
import blobbySphereImg from '../../assets/img/compGraphics/blobby_sphere.png';
import lotsBlobsImg from '../../assets/img/compGraphics/lots_blobs.png';
import flower1 from '../../assets/img/compGraphics/flower1.png';
import flower2 from '../../assets/img/compGraphics/flower2.png';
import meshImg from '../../assets/img/compGraphics/mesh.png';
import butterflySubImg from '../../assets/img/compGraphics/butterfly_sub.png';
import loopSubImg from '../../assets/img/compGraphics/loop_sub.png';
import randomNoiseImg from '../../assets/img/compGraphics/random_noise.png';
import taubinImg from '../../assets/img/compGraphics/taubin.png';
import laplacianImg from '../../assets/img/compGraphics/laplacian.png';

const content = (
    <>
        <p>
            These projects are from Georgia Tech's Advanced Computer Graphics
            Class (CS 6491) with Professor Greg Turk. Fun fact: he was one of the original creators of the Stanford bunny model; he still has the original bunny in his office.
        </p>
        <p>
            Slightly less fun fact, all projects below were completed with Processing in Java.
        </p>
        <h3 className='mt-8 my-2'>Raytracer </h3>
        <p>
            This raytracer is coded from scratch, including the implementation
            of scene objects such as triangles, meshes, lights and spheres and
            functionality such as matrix transformations. This raytracer
            implements phong shading to allow for specular highlights. This
            raytracer uses a bounding volume hierarchy to speed up raytracing.
            By using this acceleration structure, the rendering time is reduced
            from 5s to under 0.2s for a 100k poly mesh (ex: the dragon below).
            This allows the rendering of scenes with many objects.
        </p>
        <img
            className="img-project my-4"
            src={raytracingImg}
            alt="Raytracing Image"
        />
        <p className='text-lg'> Shading </p>
        <p>
            This raytracer implements phong shading to allow for specular
            highlights. Through the use of disk lighting we create distrubtion
            sampling and soft shadows in the scene. The ray object functionality
            is further leveraged to create mirrored objects using a depth of 10
            bounces.
        </p>
        <p>
            Additionally, the implementaiton of object instancing allows for
            multiple copies of the same object to be drawn using the original
            geometry file..
        </p>
        <div className="flex my-4 gap-3">
            <img
                className="img-project"
                src={dragonRaytrace}
                alt="Raytraced dragon Image"
            />
            <img
                className="img-project "
                src={raytracingImg2}
                alt="Second Raytracing Image"
            />
        </div>
        <p>
            There are also a variety of visual effect features implemented in
            this raytracer, such as depth of field and motion blur.
        </p>

        <h3 className='mt-8 my-2'>Mesh Manipulation</h3>
        <p>
            This mesh is created using the corners mesh representation to store
            mesh connectivity data using an geometry, vertex and opposites
            table. Using this data structure to traverse the mesh, I coded two
            different types of mesh subdivision algothims: loop and butterfly.
        </p>
        <div className="flex items-center justify-center my-4">
            <div className="div ">
                <img className="img-project" src={meshImg} alt="Original Mesh" />
                <p className="div-caption text-center">
                    Original Mesh
                </p>
            </div>
            <div className="div ">
                <img
                    className="img-project"
                    src={loopSubImg}
                    alt="Second Raytracing Image"
                />
                <p className="div-caption text-center">
                    Loop Subdivision
                </p>
            </div>
            <div className="div">
                <img
                    className="img-project"
                    src={butterflySubImg}
                    alt="Second Raytracing Image"
                />
                <p className="div-caption text-center">
                    Butterfly Subdivision
                </p>
            </div>
        </div>

        <p>
            With these subdivided meshes, we could then use similar methods of
            traversing them to apply smoothing with the Laplacian and Taubin
            smoothing algorithms.
        </p>
        <div className="flex items-center justify-center my-4">
            <div className="div ">
                <img
                    className="img-project"
                    src={randomNoiseImg}
                    alt="Raytraced dragon Image"
                />
                <p className="div-caption text-center">
                    Mesh with random noise
                </p>
            </div>
            <div className="div ">
                <img
                    className="img-project"
                    src={laplacianImg}
                    alt="Second Raytracing Image"
                />
                <p className="div-caption text-center">
                    Laplacian Smoothing
                </p>
            </div>
            <div className="div col-4">
                <img
                    className="img-project"
                    src={taubinImg}
                    alt="Second Raytracing Image"
                />
                <p className="div-caption text-center">
                    Taubin Smoothing
                </p>
            </div>
        </div>
        <p></p>
        <h3 className='mt-8 my-2'>Implicit Surfaces</h3>
        <p>
            For this project I created different implicit surfaces and used the
            marching cubes algorithm to convert the surface to a rendered mesh.
            With these surfaces I implemented effects such as blobby meshes
            using the wyvil distance function, distance based coloring mixing,
            and created my own flower mesh out of a combination of various
            distance functions.
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 m-4">
            <div className="div ">
                <img
                    className="img-project aspect-square"
                    src={blobbySphereImg}
                    alt="Front of implicit surface flower"
                />
                <p className="div-caption text-center">
                    Blobby Spheres
                </p>
            </div>
            <div className="div col-6">
                <img
                    className="img-project aspect-square"
                    src={lotsBlobsImg}
                    alt="Back of implicit surface flower"
                />
                <p className="div-caption text-center">
                    Color blending
                </p>
            </div>
            <div className="div col-6">
                <img
                    className="img-project aspect-square"
                    src={flower1}
                    alt="Front of implicit surface flower"
                />
                <p className="div-caption text-center">
                    Front of implicit surface flower
                </p>
            </div>
            <div className="div col-6">
                <img
                    className="img-project aspect-square"
                    src={flower2}
                    alt="Back of implicit surface flower"
                />
                <p className="div-caption text-center">
                    Back of implicit surface flower
                </p>
            </div>
        </div>
        <div className='my-48'></div>
    </>
);

const links = [
    ['Github', 'https://github.com/angles-d/Computer-Graphics-Projects']
];

const pageInfo = {
    teamList: null,
    projectTitle: ['Computer Graphics', <br />, 'Projects'],
    date: ['Spring 2022'],
    projectType: 'Class',
    toolsUsed: 'Java',
    content: content,
    links: links
};

export default function GraphicsInfo() {
    return (
        <>
            <ProjectPage props={pageInfo} />
        </>
    );
}
