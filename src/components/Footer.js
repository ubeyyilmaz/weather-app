import React from 'react';
import {
    MDBFooter,
    MDBContainer
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter className='footer mt-5'>
            <h4 className='text-center'>You can make your feedback from our references below.</h4>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4 '>
                    <div align="center">
                        <a href="https://www.linkedin.com/in/ubeydullah-yilmaz/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo" />
                        </a>
                        <a href="https://www.instagram.com/yilmazzubey/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg" width="52" height="40" alt="instagram logo" />
                        </a>
                        <a href="https://twitter.com/ubey_ylmz_dev" target="_blank" rel="noreferrer" >
                            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" width="52" height="40" alt="twitter logo" />
                        </a>
                    </div>
                </section>
            </MDBContainer>
            <hr />
            <div className='text-center p-3'>
                © 2023 Copyright:
                <a href='https://github.com/ubeyyilmaz'>
                    Ubeydullah YILMAZ
                </a>
            </div>
        </MDBFooter>
    );
}