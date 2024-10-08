import ProjectPage from '../ProjectPage.jsx';

import React from 'react';

// Importing images
import accGraphGif from '../../assets/img/animation/acc_graph.gif';
import freeFallGraphPng from '../../assets/img/animation/free_fall_graph.png';
import freeFallGif from '../../assets/img/animation/freefall.gif';
import ikGif from '../../assets/img/animation/IK.gif';
import mocapCartwheelGif from '../../assets/img/animation/mocap_cartwheel.gif';
import rbGif from '../../assets/img/animation/rb.gif';
import splinesGif from '../../assets/img/animation/splines.gif';

const content = (
    <>
        <p>
            These projects were from Georgia Tech's Advanced Computer Animation
            Class (CS 7496). The course covers the low level math behind animation fundamentals such as Quaternions, Kinematics, and Constrained Particle Systems.
        </p>

        <h3 className='mt-8 my-2'>Splines & Integrators</h3>
        <p>
            The first few projects were centered around using splines and integrators for keyframe animation. We used the matrices and control points to encode Bezier, Hermite, B-spline and Catmull-Rom curves. Analyzing the differences and advantages of each curve.
        </p>
        <img
            className="img-project w-8/12"
            src={splinesGif}
            alt="Splines Animation"
        />
        <p>
            Likewise for integrators, we first created a closed physics system allowing for free fall simulation. Then we coded 3 types of interpolation methods (Explicit Euler, Midpoint, and RK-4) using the analytical solution as a control.
        </p>

        <div className='grid grid-cols-7 my-4 gap-1 items-end'>
            <div className='col-span-3' >
                <img
                    className="img-project "
                    src={freeFallGraphPng}
                    alt="Free Fall Graph"
                />
                <p className="text-sm div-caption text-center mt-1">
                    Free Fall Position Graph
                </p>
            </div>
            <div className="col-span-4" >
                <img
                    className="img-project "
                    src={accGraphGif}
                    alt="Free Fall Animation"
                />
                <p className="text-sm div-caption text-center mt-1">
                    Free fall Acceleration Graph
                </p>
            </div>
        </div>
        Below is the visualized free fall animation for the various integration methods.
        < img
            className="img-project my-4 w-9/12"
            src={freeFallGif}
            alt="Free Fall Animation"
        />


        <h3 className='mt-8 my-2'>Rigid Bodies</h3>
        <p>
            For this project we created a rigid body simulator with the ability to compute rigid body motion and handle collisions. The rigid body's motion was simulated using explicit euler integration.
        </p>

        <img
            className="img-project w-9/12"
            src={rbGif}
            alt="Rigid Body Animation"
        />

        <h3 className='mt-8 my-2'>Inverse Kinematics</h3>
        <p>
            For the last project we coded a simple IK solver, animating the model to match the final hand and foot positions (the end effectors) represented by the red spheres.
        </p>
        <img
            className="img-project my-4 w-8/12"
            src={ikGif}
            alt="Inverse Kinematics Animation"
        />
        <p>
            Georgia Tech also has a mocap studio, so we were able to mocap ourselves and use the data recorded by the system to create an animation of our own motion. Below is an animation of me doing a cartwheel! I'm honestly impressed that the animation turned out decent as I only wore sensors on  my hands and feet.
        </p>
        <img
            className="img-project mt-4 w-9/12 mb-24"
            src={mocapCartwheelGif}
            alt="Mocap Cartwheel"
        />
    </>
);

const links = [['Github', 'https://github.com/aelatgt/GCG']];

const pageInfo = {
    teamList: null,
    projectTitle: ['Animation', <br />, 'Projects'],
    date: ['Fall 2023'],
    projectType: 'Class',
    toolsUsed: 'Python',
    content: content,
    links: links
};

export default function Animation() {
    return (
        <>
            <ProjectPage props={pageInfo} />
        </>
    );
}
