import React from "react";

function Footer(){
    return(
        <div className="Footer">
                <footer className="page-footer font-small special-color-dark">
                    <div className="footer-copyright text-center py-3">
                            <p>© { new Date().getFullYear() } 
                                {/* {credit} */}
                                . All rights reserved.
                            </p>
                    </div>
                </footer>
                {}
        </div>
    )
}

export default Footer;