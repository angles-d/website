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
import instanceImg from '../../assets/img/compGraphics/instancing.png';
import { Separator } from "@/components/ui/separator"

const content = (
    <>
        <p>
            These projects are from Georgia Tech's Advanced Computer Graphics
            Class (CS 6491) with Professor Greg Turk. Fun fact: he was one of the original creators of the Stanford bunny model; he still has the original bunny in his office. A slightly less fun fact, all projects below were completed using Processing in Java.
        </p>
        <h3 className='mt-8 my-2'>Raytracer </h3>
        <p>
            A raytracer is a rendering method which uses ray-object intersections to detect and render objects. The ray intersection method allows for a more realistic rendering of the scene especially for shadows and shiny surfaces. By tracking the rays intersections as it bounces through the scene like rays of light allowing for a more nuanced rendering than classic rasterization.
            <div>
                <img
                    className="img-project my-4"
                    src={raytracingImg}
                    alt="Raytracing Image"
                />
            </div>

            This raytracer is coded from scratch, including the implementation
            of scene primitives such as rays, triangles, and lights and
            functionality such as matrix transformations. This raytracer
            implements phong shading to allow for specular highlights and distribution raytracing for soft shadows. It also has a variety of visual effects such as depth of field and motion blur.
        </p>
        <br></br>
        <div>
            <p className='text-lg font-semibold'> Acceleration </p>
            <p>
                This raytracer uses a bounding volume hierarchy to speed up raytracing. Due to the binary nature of the BVH tree structure, the runtime for scenes increases logoramthically instead of linearly per polygon , allowing a mesh with 64k polygons to only take 2x the time of a mesh with a 1k polygons despite having 64x the polygons to test against.

                By using this acceleration structure, the rendering time is reduced
                from 5s with out acceleration to under 0.2s for a 100k poly mesh (ex: the dragon below). This allows the rendering of scenes with many objects, even with effects such as mirroring or soft shadows which further increase the ray intersection count.
            </p>
        </div>

        <br></br>
        <div>
            <p className='text-lg font-semibold'> Shading </p>
            <p>
                This raytracer implements Phong shading to allow for both specular
                highlights and diffuse shading. Soft shadows were implemented through the use of a disk light, using random sampling of the disk for distribution ray tracing. The ray object functionality is further leveraged to create mirrored objects using a recursion shading algorithm which had a depth of 10 bounces.
            </p>

            <div className="my-4 gap-3 grid grid-cols-2">
                <div>
                    <img
                        className="img-project"
                        src={dragonRaytrace}
                        alt="Raytraced dragon Image"
                    />
                    <p className="div-caption text-center">
                        Both meshes and the floor have a high reflectance value creating a series of mirrored reflections.
                    </p>
                </div>
                <div>
                    <img
                        className="img-project "
                        src={raytracingImg2}
                        alt="Second Raytracing Image"
                    />
                    <p className="div-caption text-center">
                        The spheres below display both diffuse and specular shading. The floor has a high gloss factor softening the reflection of the spheres.
                    </p>
                </div>
            </div>

        </div>
        <div>
            <p className='text-lg font-semibold'> Instancing </p>
            <p>
                The raytracer also utilizes for object instancing. This allows for
                multiple copies of the same object to be drawn multiple times using a single copy of the object code. By transforming the ray with the inverse of the object's transformation matrix, you are able to render the object in a new transformation without having to actually transform the object's polygons saving a lot of extra multiplication.
            </p>
            <img
                className="img-project my-4"
                src={instanceImg}
                alt="Raytracing Image"
            />
            <p className="div-caption text-center">
                This bunny is a 64k mesh instanced 7 times.
            </p>
        </div>

        <h3 className='mt-16'>Mesh Manipulation</h3>
        <p>
            These meshes are created using the <a className="underline" href="https://faculty.cc.gatech.edu/~jarek/papers/CornerTable.pdf" target='_blank'>corners mesh representation</a> by Jarek Rossignac. The corners method stores mesh connectivity data using the geometry, vertex and opposite tables. With this method traversing the mesh is simple using a series of mesh operations. The whole mesh can be visited using a simple traversal of BFS. Using this to traverse the mesh, I coded two different types of mesh subdivision algothims: loop and butterfly.
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
            With these subdivided meshes, we can then use similar methods of
            traversing them to apply smoothing with the Laplacian and Taubin
            smoothing algorithms. Notice with the Taubin the mesh doesn't shrink as much as we alternate between using a negative and positive lambda value to shrink and grow the mesh between each smoothing iteration.
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
                    3x Laplacian Smoothing
                </p>
            </div>
            <div className="div col-4">
                <img
                    className="img-project"
                    src={taubinImg}
                    alt="Second Raytracing Image"
                />
                <p className="div-caption text-center">
                    3x Taubin Smoothing
                </p>
            </div>
        </div>
        <p></p>
        <h3 className='mt-16 my-2'>Implicit Surfaces</h3>
        <p>
            For this project I created a variety of implicit surfaces and used the
            marching cubes algorithm to convert the surface to a rendered mesh.
            With these surfaces I implemented effects such as blobby meshes
            using the wyvil distance function, distance based coloring mixing,
            and created my own flower mesh out of a combination of various
            distance functions.
        </p>
        <br></br>
        <p>I've previously used the metaball function in blender so it was very cool to be able to understand the math behind the functionality myself. Honestly very satisfying to be able to represent anything as simply a series of equations. </p>
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
    toolsUsed: 'Processing, Java',
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
