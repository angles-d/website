import React from 'react';
import NavBar from './NavBar';

//team given in structure of [[Name, Job]]
function createTeam(teamList) {
    if (teamList == null) {
        return;
    }

    let team = [];
    teamList.forEach((element, i) => {
        team.push(React.createElement('p', { className: "mb-1", key: i }, element));
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
    links.forEach((element, i) => {
        let [text, link] = element;
        formattedLinks.push(
            React.createElement(
                'a',
                { className: 'readmore mr-3 mb-3', href: link, target: "_blank", key: i },
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
            <div className="container mx-auto w-9/12">
                <NavBar />
                <div className="grid grid-cols-6 gap-8  mx-auto mt-20">
                    <div className="col-span-2">
                        <h1 className="mb-6 text-5xl"> {projectTitle}</h1>
                        <h5 className="mb-2 text-2xl ">{date}</h5>
                        <p className="mb-6">
                            {' '}
                            {projectType} | {toolsUsed}
                        </p>
                        {formattedLinks}
                        {teamList != null && (
                            <div className="team">
                                <h5 className="mt-12 text-lg font-bold">The Team </h5>
                                {team}
                            </div>
                        )}
                    </div>

                    <div className="col-span-4">
                        <div className="mb-5">
                            <div className="">{content}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
