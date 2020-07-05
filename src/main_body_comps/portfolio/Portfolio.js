import React from 'react';
import ReactPlayer from 'react-player';
//import { pubImg } from '../../global/globalFunctions';
//import VideoPlayer from 'react-video-js-player';

const Portfolio = (props) => {
    return (
        <div>
            <p>With a musician and mobile DJ background and knowledge of multiple
                music genres and scenes, as well as having used many types of 
                digital and analogue gear (both in the studio and live), founder
                Ross Duncan brings a focused attitude and attention to detail, putting
                emphasis on communication at each step of the technical process to
                iron out issues, along with practical degree experience in music
                technology and a critically-trained ear, to help produce the best
                results.</p>

            <h3>Music Mixing and Mastering</h3>
            <p>Rude Edit – Orchard Ave EP: original drum {'&'} bass and UK garage music 
                composed, mixed and mastered by Ross of Step 9 Prouductions under the 
                Rude Edit alias:</p>
            <ReactPlayer
                url={'https://soundcloud.com/rudeedit/sets/orchard-ave-ep-free-download'}
                width={'100%'}
            />
            <p>Changing States - Silver Linings (part of a self-released EP): 
                mastered by Step 9 Productions.
            </p>
            <ReactPlayer
                url={'https://soundcloud.com/step9productions/changing-states-silver-linings'}
                width={'100%'}
            />
            <p>Kings Kin - 'Trixie': mastered by Step 9 Productions.</p>
            <ReactPlayer
                url={'https://soundcloud.com/kings-kin-band/trixie'}
                width={'100%'}
            />
            <p>'You Don't Wanna Say' - part of a 10-track demo from Bristol-based band
                The Orange Skies: fully recorded, mixed and mastered by Step 9 Productions.
            </p>
            <ReactPlayer
                url={'https://soundcloud.com/step9productions/you-dont-wanna-say'}
                width={'100%'}
            />
            <p>Arwel Brown - cover of Biffy Clyro's 'Fingerhut': record, mixed and 
                mastered as part of a group university assignment. It achieved a first.
            </p>
            <ReactPlayer
                url={'https://soundcloud.com/step9productions/arwel-brown-fingerhut-biffy-clyro-cover'}
                width={'100%'}
            />

            {/*
            <h3>Audio for Video</h3>
            <p>Reconstruction of the movie 'Raiders of the Lost Ark' (1981). The effects and
                atmos were all re-sourced and re-edited to produce this interpretation of the famous
                fight scene. <i>Disclaimer: this video was created for an academic assignment and is
                    intended to be transformative under fair use. If the copyright holder of the
                    original material has any issues, please get in touch via the Contact section.
                </i>
            </p>
             <VideoPlayer src={pubImg('RaidersLostArkDemo.mp4')} width={'800px'}/>
             <p>BBC Autumnwatch “Sheffield” segment. This is a post sound edit and mix of a cut
                from the 2016 season of the programme, produced for a university assignment.
                It achieved a first. <i>Disclaimer: this video was created for an academic assignment and
                    is intended to be transformative under fair use. If the copyright holder of the
                    original material has any issues, please get in touch via the Contact section.</i></p>
            <VideoPlayer src={pubImg('AutumwatchSheffieldDemo3.mp4')} width={'800px'}/>
            */}

            <h3>Audio for Spoken Word</h3>
            <p>'Don't Do Drugs Kids' - a 5 minute radio drama recorded and mixed as part of a group
                university assignment. This achieved the highest marks in the year group.
            </p>
            <ReactPlayer
                url={'https://soundcloud.com/step9productions/dont-do-drugs-kids-joshs-wild-ride-radio-drama'}
                width={'100%'}
            />
            <p>‘Mushnik and Son’ – part of a cast recording of ‘Little Shop of Horrors’ performed by
                UWE Bristol’s Centre for Music students, March 2017. Edited, mixed and mastered by
                Step 9 Productions. Solos by Frazer Meakin {'&'} Jack Blackmore.</p>
            <ReactPlayer
                url={'https://soundcloud.com/step9productions/mushnik-and-son'}
                width={'100%'}
            />

            {/*
            <h3>Audio for Games</h3>
            <p>Interactive Music for Shooter Games Presentation – produced for a university assignment, this
                FMOD project is a music state machine for a multiplayer shooter game idea. This video
                demonstrates the different states and how they apply to a gameplay scenario.</p>
            <VideoPlayer src={pubImg('ShooterGameMusic.mp4')} width={'800px'}/>
            */}
        </div>
    );
};

export default Portfolio;