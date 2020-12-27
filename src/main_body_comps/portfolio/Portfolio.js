import React from 'react';
import ReactPlayer from 'react-player';
import { pubImg } from '../../global/globalFunctions';
import VideoPlayer from 'react-video-js-player';

let videoWidth;

// Set maximum video width
const maxVideoWidth = 800;

const Portfolio = (props) => {
    // Check width of window and set video size (in case of phone screens)
    let windowInnerWidth = window.innerWidth;
    if (windowInnerWidth >= maxVideoWidth) {
        videoWidth = maxVideoWidth;
    }
    else {
        videoWidth = windowInnerWidth;
    }

    return (
        <div>
            <div>
                <p>
                    With a musician and mobile DJ background, wide knowledge of
                    multiple music scenes and genres, and experience with many 
                    types of audio software and hardware, founder Ross Duncan brings a focused
                    attitude and attention to detail, putting emphasis on friendly
                    communication at each step of the technical process to iron out issues,
                    along with practical degree experience in music technology and a
                    critically-trained ear, to help produce the best results for your music,
                    broadcast or video project.
                </p>
            </div>

            <div>
                <div>
                    <h3>Music Mixing and Mastering</h3>
                </div>
                <div>
                    <p><b>Rude Edit – Orchard Ave EP</b>: original drum {'&'} bass and UK garage music 
                        composed, mixed and mastered by Ross of Step 9 Prouductions under the 
                        Rude Edit alias:</p>
                    <ReactPlayer
                        url={'https://soundcloud.com/rudeedit/sets/orchard-ave-ep-free-download'}
                        width={'100%'}
                    />
                </div>
                <div>
                    <p><b>Changing States - Silver Linings</b> (part of a self-released EP): 
                        mastered by Step 9 Productions.
                    </p>
                    <ReactPlayer
                        url={'https://soundcloud.com/step9productions/changing-states-silver-linings'}
                        width={'100%'}
                    />
                </div>
                <div>
                    <p><b>Kings Kin - 'Trixie'</b>: mastered by Step 9 Productions.</p>
                    <ReactPlayer
                        url={'https://soundcloud.com/kings-kin-band/trixie'}
                        width={'100%'}
                    />
                </div>
                <div>
                    <p><b>'You Don't Wanna Say'</b> - part of a 10-track demo from Bristol-based band
                        The Orange Skies: fully recorded, mixed and mastered by Step 9 Productions.
                    </p>
                    <ReactPlayer
                        url={'https://soundcloud.com/step9productions/you-dont-wanna-say'}
                        width={'100%'}
                    />
                </div>
                <div>
                    <p><b>Arwel Brown - cover of Biffy Clyro's 'Fingerhut'</b>: recorded, mixed and 
                        mastered as part of a group university assignment. It achieved a first.
                    </p>
                    <ReactPlayer
                        url={'https://soundcloud.com/step9productions/arwel-brown-fingerhut-biffy-clyro-cover'}
                        width={'100%'}
                    />
                </div>

                <div>
                    <h3>Audio and Video Production</h3>
                </div>
                <div>
                    <p><b>Reconstruction of the movie 'Raiders of the Lost Ark' (1981)</b>. The effects and
                        atmos were all re-sourced and re-edited to produce this interpretation of the famous
                        fight scene. <i>Disclaimer: this video was created for an academic assignment and is
                            intended to be transformative under fair use. If the copyright holder of the
                            original material has any issues, please get in touch via the Contact section.
                        </i>
                    </p>
                    <VideoPlayer src={pubImg('RaidersLostArkDemo.mp4')} width={videoWidth}/>
                </div>
                <div>
                    <p>
                        <b>Training Video for Finlingo (Financial Markets), part of their Introduction to Banking series. </b>
                        Finlingo is a website and app teaching finance. Step 9 Productions edited and mixed the video and audio
                        segments for their series of videos within the new app. See the startup's website at: <a 
                        href={"https://finlingo.com"} target={"_blank"} rel={"noopener noreferrer"}>Finlingo.com</a>
                    </p>
                    <VideoPlayer src={pubImg('FinlingoIntroToBanking_FinancialMarkets.mp4')} width={videoWidth}/>
                </div>

                <div>
                    <h3>Audio for Spoken Word</h3>
                </div>
                <div>
                    <p><b>'Don't Do Drugs Kids'</b> - a 5 minute radio drama recorded and mixed as part of a group
                        university assignment. This achieved the highest marks in the year group.
                    </p>
                    <ReactPlayer
                        url={'https://soundcloud.com/step9productions/dont-do-drugs-kids-joshs-wild-ride-radio-drama'}
                        width={'100%'}
                    />
                </div>
                <div>
                    <p><b>‘Mushnik and Son’</b> – part of a cast recording of ‘Little Shop of Horrors’ performed by
                        UWE Bristol’s Centre for Music students, March 2017. Edited, mixed and mastered by
                        Step 9 Productions. Solos by Frazer Meakin {'&'} Jack Blackmore.</p>
                    <ReactPlayer
                        url={'https://soundcloud.com/step9productions/mushnik-and-son'}
                        width={'100%'}
                    />
                </div>

                <div>
                    <h3>Audio for Games</h3>
                </div>
                <div>
                    <p><b>Interactive Music for Shooter Games Presentation</b> – produced for a university assignment, this
                        FMOD project is a music state machine for a multiplayer shooter game idea. This video
                        demonstrates the different states and how they apply to a gameplay scenario.</p>
                    <VideoPlayer src={pubImg('ShooterGameMusic.mp4')} width={videoWidth}/>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;