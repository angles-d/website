import blobbySphereImg from '../../assets/img/compGraphics/blobby_sphere.png';
import butterflySubImg from '../../assets/img/compGraphics/butterfly_sub.png';
import dragonRaytrace from '../../assets/img/compGraphics/dragon_raytrace.png';
import flower1 from '../../assets/img/compGraphics/flower1.png';
import flower2 from '../../assets/img/compGraphics/flower2.png';
import instanceImg from '../../assets/img/compGraphics/instancing.png';
import laplacianImg from '../../assets/img/compGraphics/laplacian.png';
import loopSubImg from '../../assets/img/compGraphics/loop_sub.png';
import lotsBlobsImg from '../../assets/img/compGraphics/lots_blobs.png';
import meshImg from '../../assets/img/compGraphics/mesh.png';
import randomNoiseImg from '../../assets/img/compGraphics/random_noise.png';
import raytracingImg from '../../assets/img/compGraphics/ray_tracing.png';
import raytracingImg2 from '../../assets/img/compGraphics/ray_tracing2.png';
import taubinImg from '../../assets/img/compGraphics/taubin.png';

import bunny500 from '../../assets/img/compGraphics/bunny_500.png';
import bunny69k from '../../assets/img/compGraphics/bunny_69k.png';

import ProjectPage from '../ProjectPage.jsx';

const content = (
    <>
        <p>
            These projects are from Georgia Tech's Advanced Computer Graphics
            Class (CS 6491) with Professor Greg Turk. Fun fact: he was one of the original creators of the Stanford bunny model; he still has the original bunny in his office. A slightly less fun fact, all projects below were completed using Processing in Java.
        </p>
        <h3 className='mt-8 my-2'>Ray Tracer </h3>
        <p>
            A ray tracer is a rendering method which uses ray-object intersections to detect and render objects. The ray intersection method allows for a more realistic rendering of the scene especially for those with lots of shadows and shiny surfaces. By tracking the ray's intersection hits as it bounces through the scene, we can capture a more nuanced rendering than classic rasterization (ex: caustics, reflections, etc).
            <div>
                <img
                    className="img-project my-4"
                    src={raytracingImg}
                    alt="Raytracing Image"
                />
            </div>

            This ray tracer is coded from scratch, including the implementation
            of scene primitives such as rays, triangles, and lights. I also coded the fundamental operations such as matrix transformations. This ray tracer also implements phong shading to allow for specular highlights and distribution ray tracing for soft shadows and other effects (ex: glossy surfaces). It additionally has a variety of visual effects such as depth of field and motion blur.
        </p>
        <br></br>
        <div>
            <p className='text-lg font-semibold'> Acceleration </p>
            <p>
                This ray tracer uses a bounding volume hierarchy to speed up ray tracing process. Due to the binary nature of the BVH tree structure, the runtime for scenes increases logarithmically instead of linearly per the number of objects in the scene. This allows a mesh with 69k polygons to take less than 1.5x the time of a mesh with a 500 polygons despite having 138x the number objects to test against.

                By using this acceleration structure, the rendering time is reduced significantly. This allows the rendering of scenes with many objects, even with effects such as mirroring or soft shadows which further increase the ray intersection count.
            </p>
            <div className="my-4 gap-3 grid grid-cols-2">
                <div>
                    <img
                        className="img-project"
                        src={bunny500}
                        alt="Raytraced dragon Image"
                    />
                    <p className="text-sm div-caption text-center mt-1">
                        500 poly bunny. Render time: 0.47s.
                    </p>
                </div>
                <div>
                    <img
                        className="img-project "
                        src={bunny69k}
                        alt="Second Raytracing Image"
                    />
                    <p className="text-sm div-caption text-center mt-1">
                        69k poly bunny. Render time: 0.646s.
                    </p>
                </div>
            </div>
        </div>

        <br></br>
        <div>
            <p className='text-lg font-semibold'> Shading </p>
            <p>
                This ray tracer implements Phong shading to allow for both specular highlights and diffuse shading. Soft shadows were implemented through the use of a disk light, using random sampling of the disk light. The ray object functionality is further leveraged to create mirrored objects using a recursion shading algorithm which had a depth of 10 bounces.
            </p>

            <div className="my-4 gap-3 grid grid-cols-2">
                <div>
                    <img
                        className="img-project"
                        src={dragonRaytrace}
                        alt="Raytraced dragon Image"
                    />
                    <p className="text-sm div-caption text-center  mt-1">
                        Both meshes and the floor have a high reflectance value creating a series of mirrored reflections.
                    </p>
                </div>
                <div>
                    <img
                        className="img-project "
                        src={raytracingImg2}
                        alt="Second Raytracing Image"
                    />
                    <p className="text-sm div-caption text-center mt-1">
                        Diffuse and specular shading. The floor has a high gloss factor softening the reflection of the spheres.
                    </p>
                </div>
            </div>

        </div>
        <div>
            <p className='text-lg font-semibold'> Instancing </p>
            <p>
                The ray tracer also utilizes for object instancing. This allows for multiple copies of the same object to be drawn multiple times using a single copy of the object in code. By transforming the ray with the inverse of the object's transformation matrix, we are able to render the object in a new transformation without having transform the object's polygons saving a lot of extra multiplication.
            </p>
            <div className=' my-4'>
                <img
                    className="img-project"
                    src={instanceImg}
                    alt="Raytracing Image"
                />
                <p className="text-sm div-caption text-center mt-1">
                    This bunny is a 69k mesh instanced 7 times. Render time: 1.1s.
                </p>
            </div>
        </div>

        <h3 className='mt-12'>Mesh Manipulation</h3>
        <p>
            These meshes are created using the <a className="underline" href="https://faculty.cc.gatech.edu/~jarek/papers/CornerTable.pdf" target='_blank'>corners mesh representation</a> by Jarek Rossignac. The corners method stores mesh connectivity data using the geometry, vertex and opposite tables. With this method traversing the mesh is simple using a series of mesh operations and Depth First Search (DFS). Using this mesh traversal method, I coded two different types of mesh subdivision algorithms: loop and butterfly.
        </p>
        <div className="grid grid-cols-3  mx-auto items-center my-4">
            <div className="div ">
                <img className="img-project" src={meshImg} alt="Original Mesh" />
                <p className="text-sm div-caption text-center">
                    Original Mesh
                </p>
            </div>
            <div className="">
                <img
                    className="img-project"
                    src={loopSubImg}
                    alt="Second Raytracing Image"
                />
                <p className="text-sm div-caption text-center">
                    Loop Subdivision
                </p>
            </div>
            <div className="div">
                <img
                    className="img-project"
                    src={butterflySubImg}
                    alt="Second Raytracing Image"
                />
                <p className="text-sm div-caption text-center">
                    Butterfly Subdivision
                </p>
            </div>
        </div>

        <p>
            With these subdivided meshes, we can then use similar methods of
            traversing them to apply smoothing with the Laplacian and Taubin
            algorithms. Notice with the Taubin the mesh doesn't shrink as much as we alternate between using a negative and positive lambda value to shrink and grow the mesh between each smoothing iteration.
        </p>
        <div className="grid grid-cols-3 items-center mx-auto my-4">
            <div className="div ">
                <img
                    className="img-project"
                    src={randomNoiseImg}
                    alt="Raytraced dragon Image"
                />
                <p className="text-sm div-caption text-center">
                    Mesh with random noise
                </p>
            </div>
            <div className="div ">
                <img
                    className="img-project"
                    src={laplacianImg}
                    alt="Second Raytracing Image"
                />
                <p className="text-sm div-caption text-center">
                    3x Laplacian Smoothing
                </p>
            </div>
            <div className="div col-4">
                <img
                    className="img-project"
                    src={taubinImg}
                    alt="Second Raytracing Image"
                />
                <p className="text-sm div-caption text-center">
                    3x Taubin Smoothing
                </p>
            </div>
        </div>
        <p></p>
        <h3 className='mt-12 my-2'>Implicit Surfaces</h3>
        <p>
            For this project I created a variety of implicit surfaces and used the marching cubes algorithm to convert the surface to a rendered mesh. With these surfaces I implemented effects such as blobby meshes using the wyvil distance function and distance-based coloring mixing. I also created my own flower mesh out of a combination of various
            distance functions.
        </p>
        <br></br>
        <p>I've previously used the metaballs in Blender so it was very cool to be able to understand the math behind them. It's very satisfying to be able to represent anything as simply a series of equations. </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 m-4">
            <div className="div col-6">
                <img
                    className="img-project aspect-square"
                    src={blobbySphereImg}
                    alt="Front of implicit surface flower"
                />
                <p className="text-sm div-caption text-center">
                    Blobby Spheres
                </p>
            </div>
            <div className="div col-6">
                <img
                    className="img-project aspect-square"
                    src={lotsBlobsImg}
                    alt="Back of implicit surface flower"
                />
                <p className="text-sm div-caption text-center">
                    Color blending
                </p>
            </div>
            <div className="div col-6">
                <img
                    className="img-project aspect-square"
                    src={flower1}
                    alt="Front of implicit surface flower"
                />
                <p className="text-sm div-caption text-center">
                    Front of implicit surface flower
                </p>
            </div>
            <div className="div col-6">
                <img
                    className="img-project aspect-square"
                    src={flower2}
                    alt="Back of implicit surface flower"
                />
                <p className="text-sm div-caption text-center">
                    Back of implicit surface flower
                </p>
            </div>
        </div>
        <div className='mb-24'></div>
    </>
);

const links = [
    ['Github', 'https://github.com/angles-d/grad-graphics-projects']
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
