export default function Footer(){
    return(
<footer className="footer">
    <div className="footer__above py-5">
      <div className="container">
        <div className="row my-3">
          <div className="first-icon-wrap">
          <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-facebook-f"></i></a></li>
            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-google-plus-g"></i></a></li>
            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-linkedin-in"></i></a></li>
          </div>
        <div classNam="row">
                <div className="col-md-12 col-sm-12">
                    <div className="secondfooter-box">
                        <ul className="secondfooter-list">
                            <li className="secondfooter-list-items">
                                <a className="secondfooter-list-items-link" href="#">使用者合約</a>
                            </li>
                            <li className="secondfooter-list-items">
                                <a className="secondfooter-list-items-link" href="#">偏好設定</a>
                            </li>
                            <li className="secondfooter-list-items">
                                <a className="secondfooter-list-items-link" href="#">服務條款</a>
                            </li>
                            <li className="secondfooter-list-items">
                                <a className="secondfooter-list-items-link" href="#">隱私權設定</a>
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>   
        </div>
        </div>
      </div>

    <div className="footer__below">
      <div className="container">
        <h6>
          &copy; Copyright All rights reserved.
        </h6>
      </div>
    </div>
  </footer>
    );
}
