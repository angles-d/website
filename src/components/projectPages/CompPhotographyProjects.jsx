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
import castleRed from '../../assets/img/compPhotography/castle_red.gif'
import castleFinal from '../../assets/img/compPhotography/castle_final.png'

const content = (
    <>
        <p>
            These projects were from Georgia Tech's Graduate Computational Photography Class (CS6475)
        </p>

        <h3 className='mt-8 my-2'>Object Removal</h3>
        <p>
            I joined the team in the second year of the project's development as
            a programmer and am now the lead programmer and project manager.
            This project has been a huge undertaking, and I've been lucky to
            work with an interdisciplinary team of designers, historians, and UX
            researchers. This project is developed in Unity and designed for an
            iPad or tablet.
        </p>
        <div className='grid grid-cols-2'>
            <div className="relative">
                <img
                    className="img-project absolute z-0"
                    src={fillOg1}
                    alt="Seam Carving visualized with red seams"
                />
                <img
                    className="img-project z-10"
                    src={mask1}
                    alt="Seam Carving visualized with red seams"
                />

            </div>
            <img
                className="img-project"
                src={fillRes1}
                alt="Seam Carving visualized with red seams"
            />
            <div className="relative">
                <img
                    className="img-project absolute z-0"
                    src={fillOg2}
                    alt="Seam Carving visualized with red seams"
                />
                <img
                    className="img-project z-10"
                    src={mask2}
                    alt="Seam Carving visualized with red seams"
                />
            </div>
            <img
                className="img-project"
                src={fillRes2}
                alt="Seam Carving visualized with red seams"
            />
        </div>
        <h3 className='mt-8 my-2'>Seam Carving</h3>
        <p>
            I joined the team in the second year of the project's development as
            a programmer and am now the lead programmer and project manager.
            This project has been a huge undertaking, and I've been lucky to
            work with an interdisciplinary team of designers, historians, and UX
            researchers. This project is developed in Unity and designed for an
            iPad or tablet.
        </p>
        <div className='flex'>
            <img
                className="img-project"
                src={castleOg}
                alt="Seam Carving visualized with red seams"
            />
            <img
                className="img-project"
                src={castleFinal}
                alt="Seam Carving visualized with red seams"
            />
        </div>
        <img
            className="img-project"
            src={castleRed}
            alt="Seam Carving visualized with red seams"
        />

        <h2>Forward vs Backward Energy</h2>
        <img
            className="img-project"
            src={catOg}
            alt="Seam Carving visualized with red seams"
        />
        <div className='flex'>
            <img
                className="img-project"
                src={catBack}
                alt="Seam Carving visualized with red seams"
            />
            <img
                className="img-project"
                src={catForward}
                alt="Seam Carving visualized with red seams"
            />
        </div>
        <h2>Insertion</h2>
        <div className='flex mx-auto'>
            <img
                className="img-project w-1/3 h-auto"
                src={dolphin}
                alt="Seam Carving visualized with red seams"
            />
            <div className="relative">
                <img
                    className="img-project z-0 absolute"
                    src={dolphinBack}
                    alt="Seam Carving visualized with red seams"
                />
                <img
                    className="img-project z-10"
                    src={dolphinRed}
                    alt="Seam Carving visualized with red seams"
                />
            </div>
        </div>


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
