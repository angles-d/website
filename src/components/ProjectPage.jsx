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
        team.push(React.createElement('p', { className: "mb-1" }, element));
    });

    let formattedTeam = React.createElement(
        'div',
        { className: 'team', style: { fontSize: "1rem" } },
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
                { className: 'readmore mr-3 mb-3', href: link, target: "_blank" },
                text
            )
        );
    });

    return React.createElement('div', { className: 'links my-2' }, formattedLinks);
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
            <div className="container mx-auto w-10/12">
                <NavBar />
                <div className="grid grid-cols-6 gap-8  mx-auto mt-20">
                    <div className="col-span-2">
                        <h1 className="mb-4 text-4xl"> {projectTitle}</h1>
                        <h5 className="mb-2 text-xl ">{date}</h5>
                        <p className="mb-6">
                            {' '}
                            {projectType} | {toolsUsed}
                        </p>

                        {/* links */}
                        {formattedLinks}

                        {/* team */}
                        {teamList != null && (
                            <div className="team">
                                <h5 className="mt-12 text-lg font-bold">The Team </h5>
                                {team}
                            </div>
                        )}
                    </div>

                    {/* body content */}
                    <div className="col-span-4">

                        <div className="mb-5">
                            <div className="sticky top-0">{content}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
