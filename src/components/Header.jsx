export default function Header() {
return (
      <header className="header">
    {/* <div className="container d-flex flex-column align-items-center"> */}

    <div className="contact" id="section3">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="logo text-center">
                        <a href="./index.html"><img className="logo_img" src="images/robotic.png" alt="logo" /></a>
                    </div>
                    <div className="back">
                        <div className="col-md-12">
                            <div>
                                <p className="sign text-center">Log in</p>
                            </div>
                        </div>
                        <div className="form">
                            <div>
                                <p className="title3">Email</p>
                            </div>
                            <div className="enter">
                                <input type="text" placeholder="Enter your email"/>
                            </div>
                            <div>
                                <p className="title4">Password</p>
                            </div>
                            <div>
                                <input type="text" placeholder="Enter your password"/>
                            </div>
                            <hr className="title_line"/>
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <div className="squareRemeber">
                                        <img className="square" src="./images/square.png"/>
                                        <p className="Remeber">Remeber Me</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center">
                                    <a className="Remeber" href="#">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="text-center"><input type="submit" value="Login"/></div>
                            <div className="row">
                                <div className="col-md-4 ">
                                    <hr className="title2_line"/>
                                </div>
                                <div className="col-md-4 text-center">
                                    <p className="Continue"> Continue With</p>
                                </div>
                                <div className="col-md-4 ">
                                    <hr className="title2_line"/>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-12">
                            <div class="social_media text-center">
                                <a href="https://accounts.google.com/" target="_blank"><img class="media-icon"
                                        src="images/chrome.png" alt="ig" /></a>
                                <a href="https://www.facebook.com/" target="_blank"><img class="media-icon"
                                        src="images/fb.png" alt="fb" /></a>
                            </div>
                        </div>
                        <div class="col-md-12 text-center">
                                <p className="dont">Don’t have an account? </p>
                                <a className="Sign" href="#">Sign Up</a>
                        </div>
                        <div className="last"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

{/* 
      <img className="header__avatar" src="./images/avatar.png" alt="avatar"/>
      <h1 className="header__title">Name</h1>
      <hr className="divider--light"/>
      <p className="header__slogan">Slogan</p>
    </div> */}
  </header>
  );
}
