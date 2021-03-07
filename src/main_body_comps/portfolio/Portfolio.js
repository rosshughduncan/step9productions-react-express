import React from 'react';
import ReactPlayer from 'react-player';
import { pubImg } from '../../global/globalFunctions';
import SpotifyPlayer from 'react-spotify-player';
import VideoJSPlayer from '../../global/VideoJSPlayer';
import videojs from 'video.js';

// react-video-js-player is no longer used
//import VideoPlayer from 'react-video-js-player';

let videoWidth;

// Set maximum video width
const maxVideoWidth = 800;

const Portfolio = (props) => {
    // Check width of window and set video size (in case of phone screens)
    let windowInnerWidth = window.innerWidth;
    if (windowInnerWidth >= maxVideoWidth) {
        videoWidth = `${maxVideoWidth}`;
    }
    else {
        videoWidth = `${windowInnerWidth}`;
    }

    // VideoJS player options for each of the videos
    const videoJsOptions_RaidersOfTheLostArk = {
        autoplay: false,
        controls: true,
        sources: [{
            src: pubImg('RaidersLostArkDemo.mp4'),
            type: 'video/mp4'
        }],
        width: videoWidth
    };
    const videoJsOptions_FinlingoFinancialMarkets = {
        autoplay: false,
        controls: true,
        sources: [{
            src: pubImg('FinlingoIntroToBanking_FinancialMarkets.mp4'),
            type: 'video/mp4'
        }],
        width: videoWidth
    };
    const videoJsOptions_ShooterGameMusic = {
        autoplay: false,
        controls: true,
        sources: [{
            src: pubImg('ShooterGameMusic.mp4'),
            type: 'video/mp4'
        }],
        width: videoWidth
    };

    return (
        <div>

            {/* Introduction div */}
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

            {/* Main content div */}
            <div>

                {/* Audio for spoken word div */}
                <div>
                    <div>
                        <h3>Audio for Spoken Word</h3>
                    </div>
                    <div>
                        <p><b>Science and Faith with Radio Maria England</b> - a podcast series on exploring the relationship 
                        between science and Christianity. Ross of Step 9 Productions is working on this project while serving as
                        the radio station's broadcast engineer. The programme is produced and edited by a number of volunteers,
                        with Ross training them and monitoring the project's progress. The final masters and quality control
                        corrections are made by Ross.</p>
                        <SpotifyPlayer
                            uri={'spotify:episode:0PIX5bohOdotuZ9GDr1q3R'}
                            size={{width: videoWidth, height: 200}}
                            theme={'black'}
                        />
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
                        <p>
                            <b>Radio Maria England: The Children's Rosary: The Glorious Mysteries</b> - an episode produced for
                            Christian radio station Radio Maria England whilst serving as their broadcast engineer. 2 families
                            come together to pray the Holy Rosary. Recorded, edited and mixed by Ross of Step 9 Productions.
                            <i> Note: this version contains different music to the original episode because of copyright reasons.</i>
                        </p>
                        <ReactPlayer
                                url={'https://soundcloud.com/step9productions/radio-maria-england-the-childrens-rosary-glorious-mysteries'}
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
                </div>

                {/* Music mixing and mastering div */}
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
                </div>

                {/* Audio and video production div */}
                <div>
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
                            <br></br>
                            <br></br>
                        </p>
                        
                        <VideoJSPlayer { ...videoJsOptions_RaidersOfTheLostArk }/>
                    </div>
                    <div>
                        <p><b>Training Video for Finlingo (Financial Markets), part of their Introduction
                        to Banking series.</b> Finlingo is a website and app teaching finance. Step 9
                        Productions edited and mixed the video and audio segments for their series of
                        videos within the new app. See the startup's website at: <a
                                href={"https://finlingo.com"}
                                target={"_blank"}
                                rel={"noopener noreferrer"}>
                                    Finlingo.com
                            </a>
                            <br></br>
                            <br></br>
                        </p>
                    </div>
                </div>

                {/* Audio for games div */}
                <div>
                    <p>Shooter game music</p>
                    
                </div>
                {/* See ShooterGameMusicUnused.js*/}
                
            </div>
        </div>
    );
};

export default Portfolio;