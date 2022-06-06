import React from "react";
import {Row} from "react-bootstrap";

const Footer: React.FC = () => {
    return (
        <Row className='text-center text-white'>

            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <h3>Made by Thineth Athukorala</h3>
                        <p className="copyright">Copyrights © 2022 - All Rights Reserved</p>
                    </div>
                </footer>
            </div>
        </Row>
    )
}

export default Footer;