import React from 'react';
import NavBar from './NavBar';

//team given in structure of
//[[Name, Job]]
function createTeam(teamList) {
    if (teamList == null) {
        return;
    }

    let team = [];
    teamList.forEach((element) => {
        team.push(React.createElement('p', {}, element));
    });
    let formattedTeam = React.createElement(
        'div',
        { className: 'team', style: { fontSize: 15 } },
        team
    );
    return formattedTeam;
}

function formatLinks(links) {
    let formattedLinks = [];
    links.forEach((element) => {
        let [text, link] = element;
        formattedLinks.push(
            React.createElement(
                'a',
                { className: 'readmore', href: link },
                text
            )
        );
    });

    return React.createElement('div', { className: 'links' }, formattedLinks);
}

export default function Page(props) {
    const {
        teamList,
        projectTitle,
        date,
        projectType,
        toolsUsed,
        content,
        links
    } = props.props;
    let team = createTeam(teamList);
    let formattedLinks = formatLinks(links);
    return (
        <>
            {/* header */}
            <div className="container">
                <NavBar />
                <div className="mt-5 mb-4 row" />
            </div>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-4">
                        <h1 className="mb-2"> {projectTitle}</h1>
                        <h5>{date}</h5>
                        <p className="mb-4">
                            {' '}
                            {projectType} | {toolsUsed}
                        </p>

                        {/* links */}
                        {formattedLinks}

                        {/* team */}
                        {teamList != null && (
                            <div className="team">
                                <div className="row mt-5 mb-4" />
                                <h5 style={{ marginBottom: 4 }}>The Team </h5>
                                {team}
                            </div>
                        )}
                    </div>

                    {/* body content */}
                    <div className="col">
                        <div className="mb-5">
                            <div className="sticky-content">{content}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
