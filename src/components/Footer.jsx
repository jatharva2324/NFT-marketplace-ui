import React from "react";

function Footer(){
    return(
        <div class="Footer">
                <footer class="page-footer font-small special-color-dark">
                    <div class="footer-copyright text-center py-3">
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