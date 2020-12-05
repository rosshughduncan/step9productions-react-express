import React from 'react';
import classes from '../styling/App.module.css';

const IntroSection = (props) => {
    return (
        <div>
            <p>
                Step 9 Productions is an audio engineering, media production and events
                technician service. Providing: music mixing {'&'} mastering, broadcast production,
                live sound, lighting programming and crew skills to the industry since 2018.
            </p>
            <p>Step 9 Productions strives to provide an objective, comprehensive and friendly
                service for all kinds of audio projects. Previous happy clients have included
                musicians, arts organisations, amateur drama groups, music venues, sound hire
                companies and theatres.
            </p>
            <div className={classes.QuoteSection}>
                <p>"Ross did a great job on the sound ... it's the best sound job that
                    I've experienced whilst I've been at Henbury [School]."
                </p>
                <cite>Liz Mowat and Samanta Harper: Joint Heads of Performing Arts,
                    Blaise High School, Bristol (school stage production of "The Wiz" with
                    live band)
                </cite>
            </div>
        </div>
    );
};

export default IntroSection;