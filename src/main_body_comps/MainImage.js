import React from 'react';
import { pubImg } from '../global/globalFunctions';
import Aux from '../global/Aux';

const MainImage = (props) => {
    // Only show an image if a source name is given
    // Otherwise, show an empty div
    let thisImage = <div/>;
    if (props.imgObj.source !== '') {
        thisImage = <img
            src={pubImg(props.imgObj.source)}
            alt={props.alt}
            width={'100%'}
        />
    }

    return (
        <Aux>
            {thisImage}
        </Aux>
    );
};

export default MainImage;