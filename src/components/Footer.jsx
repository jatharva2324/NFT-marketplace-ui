import React from "react";

function Footer(){
    return(
        <div className="Footer py-5 mt-4">
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