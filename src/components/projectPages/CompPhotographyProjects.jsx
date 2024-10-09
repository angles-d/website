import ProjectPage from '../ProjectPage.jsx';
import React from 'react';
import fillOg1 from '../../assets/img/compPhotography/fill_og_1.jpg'
import fillOg2 from '../../assets/img/compPhotography/fill_og_2.jpg'
import mask1 from '../../assets/img/compPhotography/fill_mask_1.png'
import mask2 from '../../assets/img/compPhotography/fill_mask_2.png'
import fillRes1 from '../../assets/img/compPhotography/fill_res_1.jpg'
import fillRes2 from '../../assets/img/compPhotography/fill_res_2.jpg'
import dolphinBack from '../../assets/img/compPhotography/dolphin_back.png'
import dolphin from '../../assets/img/compPhotography/dolphin.png'
import dolphinRed from '../../assets/img/compPhotography/dolphin_red.png'
import catBack from '../../assets/img/compPhotography/cat_back.png'
import catForward from '../../assets/img/compPhotography/cat_for.png'
import catOg from '../../assets/img/compPhotography/cat_og.jpeg'
import castleOg from '../../assets/img/compPhotography/castle_og.png'
import castleRed from '../../assets/img/compPhotography/castle_red.mp4'
import castleFinal from '../../assets/img/compPhotography/castle_final.png'
import diagramImg from '../../assets/img/compPhotography/inpainting_diagram.png'
import castleCrop from '../../assets/img/compPhotography/crop1.png'

import { MoveRight } from 'lucide-react';
import { MoveDown } from 'lucide-react';

const content = (
    <>
        <p>
            These projects were from Georgia Tech's Graduate Computational Photography Class (CS6475)
        </p>

        <h3 className='mt-8 my-2'>Object Removal</h3>
        <p>
            This project is based on Criminisi et al's paper:  <a href="https://ieeexplore.ieee.org/document/1323101" target="_blank" className="underline">
                Region filling and object removal by exemplar-based image inpainting
            </a>.
            This object removal method finds the pixel patches that best match the area (the examplar) in the target region, iteratively filling along the frontier (pixels at the edge of the target and image) to remove the original portion of the image and inpaint the missing section.
        </p>
        <div className='flex my-4 items-center'>
            <div className="relative w-full">
                <img
                    className="img-project absolute z-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    src={mask2}
                    alt="Seam Carving visualized with red seams"
                />
                <img
                    className="img-project z-10"
                    src={fillOg2}
                    alt="Seam Carving visualized with red seams"
                />
                <p className="text-xs  div-caption text-center mt-1">
                    Original image. Hover to see the fill region
                </p>

            </div>
            <MoveRight className="mx-4 size-16"></MoveRight>
            <div className="relative w-full">
                <img
                    className="img-project absolute z-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    src={fillOg2}
                    alt="Seam Carving visualized with red seams"
                />
                <img
                    className="img-project z-10"
                    src={fillRes2}
                    alt="Seam Carving visualized with red seams"
                />
                <p className="text-xs div-caption text-center mt-1">
                    Inpainting result. Hover to see the original image
                </p>
            </div>

        </div>

        <div className='my-3'></div>
        <p>
            To perform the inpainting, each pixel along the frontier is given a priority score using the pixel's confidence which is determined by it's distance from the original image and the strength of it's gradient. Once the highest priority pixel is determined, it's surrounding patch is filled using the patch from the original image with the highest similarity score.
        </p>
        <div className='my-3'></div>
        <p>
            Below is the full inpainting pipeline with the before and after images on the right.
        </p>

        <div className='grid grid-cols-2 gap-2 my-4'>
            <img
                className="img-project"
                src={diagramImg}
                alt="Seam Carving visualized with red seams"
            />
            <div className=''>
                <div className="relative">
                    <img
                        className="img-project absolute z-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                        src={mask1}
                        alt="Seam Carving visualized with red seams"
                    />
                    <img
                        className="img-project z-10"
                        src={fillOg1}
                        alt="Seam Carving visualized with red seams"
                    />
                </div>
                <MoveDown className='mx-auto size-8 my-8'></MoveDown>
                <div className="relative">
                    <img
                        className="img-project absolute z-0 opacity-0  hover:opacity-100 transition-opacity duration-500 ease-in-out"
                        src={fillOg1}
                        alt="Seam Carving visualized with red seams"
                    />
                    <img
                        className="img-project z-10"
                        src={fillRes1}
                        alt="Seam Carving visualized with red seams"
                    />
                </div>
            </div>

        </div>
        <p>It was rather interesting to see how much could be accomplished with just gradients and similarity scores. In the age of GenAI and massive models, it was a good reminder of how much the classical computer vision algorithms can still accomplish</p>

        <h3 className='mt-8 my-2'>Content-Aware Resizing: Seam Carving</h3>
        <p className='my-3'>
            This project is based on Avidan and Shamir's paper: <a href="https://dl.acm.org/doi/pdf/10.1145/1275808.1276390" target="_blank" className="underline">
                Seam Carving for Content-Aware Image Resizing
            </a>.
            Traditional cropping methods do not consider the content when resizing an image and usually end up removing important features from the final result. In this example, we cannot keep both the castle and the mountain in the final cropped image.
        </p>
        <div className='flex my-4 mx-auto justify-between'>
            <div>
                <img
                    className="img-project  h-auto"
                    src={castleOg}
                    alt="Seam Carving visualized with red seams"
                />
                <p className="text-sm div-caption text-center mt-1">
                    Original Image
                </p>
            </div>
            <MoveRight className="mx-4 size-10 my-auto"></MoveRight>
            <div >
                <img
                    className="img-project"
                    src={castleCrop}
                    alt="Seam Carving visualized with red seams"
                />
                <p className="text-sm div-caption text-center mt-1">
                    Two Potential Image Crops
                </p>
            </div>
        </div>
        <p>
            Seam carving solves this issue by removing seams of low energy and preserving the areas of the image with high visual interest.
        </p>

        <div className='flex my-4 mx-auto justify-between'>
            <div>
                <img
                    className="img-project  h-auto"
                    src={castleOg}
                    alt="Seam Carving visualized with red seams"
                />
                <p className="text-sm div-caption text-center mt-1">
                    Original Image
                </p>
            </div>
            <MoveRight className="mx-4 size-10 my-auto"></MoveRight>
            <div >
                <img
                    className="img-project"
                    src={castleFinal}
                    alt="Seam Carving visualized with red seams"
                />
                <p className="text-sm div-caption text-center mt-1">
                    Seam Carving Result
                </p>
            </div>
        </div>

        <p>
            Energy is defined as the difference between the current pixel and it's right and left neighbors which is calculated using the X and Y gradients. For each row of pixels, the pixel with the lowest energy is determined. This line of pixels forms a seam. Then the seam with the lowest total energy is removed from the image.
        </p>

        <p className='my-3'>
            This technique causes areas of low frequency to be removed first, leaving the areas of high interest. In the video below notice how areas of the sky and sea are removed first. The red seams are those identified with the lowest energy.
        </p>
        <video
            className="img-project w-3/4 my-4"
            src={castleRed}
            alt="Seam Carving visualized with red seams"
            autoPlay
            loop
            controls
        />
        <br></br>
        <p className='text-lg font-semibold'> Insertion </p>
        The same technique of seam identification can be used to increase an image size as well. Like cropping, stretching an image leads to undesired artifacting; however, by inserting low energy seams we can increase the image size with much less noticeable distortion.
        <div className='flex my-4 mx-auto justify-between'>
            <div>
                <img
                    className="img-project  h-auto"
                    src={dolphin}
                    alt="Seam Carving visualized with red seams"
                />
                <p className="text-sm  div-caption text-center mt-1">
                    Original Image
                </p>
            </div>
            <MoveRight className="mx-4 size-10 my-auto"></MoveRight>
            <div className="relative">
                <img
                    className="img-project absolute z-0 opacity-0  hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    src={dolphinRed}
                    alt="Seam Carving visualized with red seams"
                />
                <img
                    className="img-project z-10"
                    src={dolphinBack}
                    alt="Seam Carving visualized with red seams"
                />
                <p className="text-sm  div-caption text-center mt-1">
                    Insertion Result. Hover to the inserted seams.
                </p>
            </div>

        </div>
        <br></br>

        <p className='text-lg font-semibold'> Forward vs Backward Energy </p>
        <p>
            However, in some scenarios only considering the difference between the current pixel and it's neighbors is insufficient.</p>
        <div className='flex my-4 mx-auto justify-between'>
            <div>
                <img
                    className="img-project  h-auto"
                    src={catOg}
                    alt="Seam Carving visualized with red seams"
                />
                <p className="text-sm  div-caption text-center mt-1">
                    Original Image
                </p>
            </div>
            <MoveRight className="mx-4 size-16 my-auto"></MoveRight>
            <div >
                <img
                    className="img-project"
                    src={catBack}
                    alt="Seam Carving visualized with red seams"
                />
                <p className="text-sm  div-caption text-center mt-1">
                    Seam Carving Result
                </p>
            </div>
        </div>
        <p> To solve this Rubenstein et al. in  <a href="https://faculty.runi.ac.il/arik/scweb/vidret/index.html" target="_blank" className="underline">
            Improved Seam Carving for Video Retargeting
        </a> proposed a different energy calculation system called "Forward Energy".
            Unlike the original method (backward energy), to calculate forward energy we look forward and find the difference between neighboring pixels after removing the current one.
        </p>


        <div className='flex my-4 mx-auto gap-4 '>
            <div>
                <img
                    className="img-project  h-auto"
                    src={catBack}
                    alt="Seam Carving visualized with red seams"
                />
                <p className="text-sm div-caption text-center mt-1">
                    Seam carving: Backward Energy
                </p>
            </div>
            <div >
                <img
                    className="img-project"
                    src={catForward}
                    alt="Seam Carving visualized with red seams"
                />
                <p className="text-sm  div-caption text-center mt-1">
                    Seam carving: Forward Energy
                </p>
            </div>
        </div>
        <p> While some of the cats are still a little wonky, the forward energy method gives a much improved result. Since this method accounts for the current pixel's absence when finding areas of low energy, it performs much better than backward energy in instances of subjects with solid color.</p>

        <div className='mb-24'></div>

    </>
);

const links = [['Github', 'https://github.com/angles-d/CS6475']];

const pageInfo = {
    teamList: null,
    projectTitle: ['Computational', <br />, 'Photography', <br />, ' Projects'],
    date: ['Fall 2023'],
    projectType: 'Class',
    toolsUsed: 'Python',
    content: content,
    links: links
};

export default function McCloudInfo() {
    return (
        <>
            <ProjectPage props={pageInfo} />
        </>
    );
}
