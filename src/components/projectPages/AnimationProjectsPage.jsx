import ProjectPage from '../ProjectPage.jsx';

import React from 'react';

// Importing images
import splinesGif from '../../assets/img/animation/splines.gif';
import hermitePng from '../../assets/img/animation/hermite.png';
import accGraphGif from '../../assets/img/animation/acc_graph.gif';
import freeFallGif from '../../assets/img/animation/free_fall.gif';
import freeFallGraphPng from '../../assets/img/animation/free_fall_graph.png';
import beadOnWireGif from '../../assets/img/animation/bead_on_wire.gif';
import rigidBodySetupPng from '../../assets/img/animation/rigid_body_setup.png';
import rbGif from '../../assets/img/animation/rb.gif';
import ikGif from '../../assets/img/animation/IK.gif';
import mocapCartwheelGif from '../../assets/img/animation/mocap_cartwheel.gif';

const content = (
    <>
        <p>
            These projects were from Georgia Tech's Advanced Computer Animation
            Class (CS 7496)
        </p>

        <h3>Splines</h3>
        <p>
            I joined the team in the second year of the project's development as
            a programmer and am now the lead programmer and project manager.
            This project has been a huge undertaking, and I've been lucky to
            work with an interdisciplinary team of designers, historians, and UX
            researchers. This project is developed in Unity and designed for an
            iPad or tablet.
        </p>
        <img
            className="col-8 d-flex align-items-center justify-content-center"
            src={splinesGif}
            alt="Splines Animation"
        />
        <img
            className="col-8 d-flex align-items-center justify-content-center"
            src={hermitePng}
            alt="Hermite"
        />

        <h3>Integrators</h3>
        <p>
            I joined the team in the second year of the project's development as
            a programmer and am now the lead programmer and project manager.
            This project has been a huge undertaking, and I've been lucky to
            work with an interdisciplinary team of designers, historians, and UX
            researchers. This project is developed in Unity and designed for an
            iPad or tablet.
        </p>
        <img
            className="col-8 d-flex align-items-center justify-content-center"
            src={accGraphGif}
            alt="Acceleration Graph"
        />
        <img
            className="col-md d-flex align-items-center justify-content-center"
            src={freeFallGif}
            alt="Free Fall Animation"
        />
        <img
            className="col-8 d-flex align-items-center justify-content-center"
            src={freeFallGraphPng}
            alt="Free Fall Graph"
        />

        <h3>Constrained Particle System</h3>
        <p>
            I joined the team in the second year of the project's development as
            a programmer and am now the lead programmer and project manager.
            This project has been a huge undertaking, and I've been lucky to
            work with an interdisciplinary team of designers, historians, and UX
            researchers. This project is developed in Unity and designed for an
            iPad or tablet.
        </p>
        <img
            className="col-md d-flex align-items-center justify-content-center"
            src={beadOnWireGif}
            alt="Bead on Wire Animation"
        />

        <h3>Rigid Bodies</h3>
        <p>
            I joined the team in the second year of the project's development as
            a programmer and am now the lead programmer and project manager.
            This project has been a huge undertaking, and I've been lucky to
            work with an interdisciplinary team of designers, historians, and UX
            researchers. This project is developed in Unity and designed for an
            iPad or tablet.
        </p>
        <img
            className="col-md d-flex align-items-center justify-content-center"
            src={rigidBodySetupPng}
            alt="Rigid Body Setup"
        />
        <img
            className="col-md d-flex align-items-center justify-content-center"
            src={rbGif}
            alt="Rigid Body Animation"
        />

        <h3>Inverse Kinematics</h3>
        <p>
            I joined the team in the second year of the project's development as
            a programmer and am now the lead programmer and project manager.
            This project has been a huge undertaking, and I've been lucky to
            work with an interdisciplinary team of designers, historians, and UX
            researchers. This project is developed in Unity and designed for an
            iPad or tablet.
        </p>
        <img
            className="col-md d-flex align-items-center justify-content-center"
            src={ikGif}
            alt="Inverse Kinematics Animation"
        />
        <img
            className="col-md d-flex align-items-center justify-content-center"
            src={mocapCartwheelGif}
            alt="Mocap Cartwheel"
        />
    </>
);

const links = [['Github', 'https://github.com/aelatgt/GCG']];

const pageInfo = {
    teamList: null,
    projectTitle: ['Animation', <br />, 'Projects'],
    date: ['Fall 2023 | Class'],
    projectType: 'Animation',
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
