import React from 'react';
import Aux from '../global/Aux';

const ContactSimple = (props) => {
    return (
        <Aux>
            <p>Send us an email at: <a href={'maito@step9productions@gmail.com'}>step9productions@gmail.com</a></p>
            <p>Like us on Facebook by <a href={'https://www.facebook.com/step9productions'}>clicking here</a></p>
        </Aux>
    );
};

export default ContactSimple;