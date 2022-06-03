import React from 'react';
import '../styles/Home.css'
import fantasyLandPic from '../assets/pics/fantasyland.png'
import jeopardyPic from '../assets/pics/jeopardy-screen.png'
import githubIcon from '../assets/pics/github-icon.png';


const projectArray = [
    {
        title: 'Fantasy Land',
        picLink: fantasyLandPic,
        picAlt: 'screenshot of game website',
        deployedLink: 'https://calm-fjord-53373.herokuapp.com/',
        repoLink: 'https://github.com/JaHa675/fantasy-land-games?organization=JaHa675&organization=JaHa675'
    }
    , {
        title: 'Inspirational Jeopardy',
        picLink: jeopardyPic,
        picAlt: 'image of a jeopardy website',
        deployedLink: 'https://lola-violet.github.io/inspirational-jeopardy/',
        repoLink: 'https://github.com/JaHa675/inspirational-jeopardy'
    },
    //  {
    //     title: 'this is a title',
    //     picLink: 'href will go here',
    //     picAlt: '',
    //     deployedLink: 'deployed link goes here',
    //     repoLink: 'github repo link goes here'
    // }
]

export default function Project() {
    return (
        <div className="container rounded grid-container" style={{ display: "grid", gridTemplateColumn: "repeat(2, 1fr)" }}>
            {projectArray.map(({ title, picLink, picAlt, deployedLink, repoLink }) => {
                return (
                    <div key={title} className="project card">
                        <a className='deployed-link' href={deployedLink} target='_blank' rel='noreferrer'>
                            <img className='project-image card-img-top' src={picLink} alt={picAlt}></img>
                        </a>
                        <div className="card-body card-Content">
                            <p className="project-title">{title}</p>
                            <a className='git-link ' href={repoLink} target='_blank' rel='noreferrer'><img className='git-icon' src={githubIcon} alt='github icon'></img></a>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
