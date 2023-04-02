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
                    <div className="footer-box">
                        <ul className="footer-list">
                            <li className="footer-list-items">
                                <a className="footer-list-items-link" href="#">說明中心</a>
                            </li>
                            <li className="footer-list-items">
                                <a className="footer-list-items-link" href="#">使用條件</a>
                            </li>
                            <li className="footer-list-items">
                                <a className="footer-list-items-link" href="#">法律聲明</a>
                            </li>
                            <li className="footer-list-items">
                                <a className="footer-list-items-link" href="#">連絡我們</a>
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
            <div classNam="row">
                <div className="col-md-12 col-sm-12">
                    <div className="footer-box">
                        <ul className="footer-list">
                            <li className="sfooter-list-items">
                                <a className="footer-list-items-link" href="#">隱私權</a>
                            </li>
                            <li className="footer-list-items">
                                <a className="footer-list-items-link" href="#">訂閱協議</a>
                            </li>
                            <li className="footer-list-items">
                                <a className="footer-list-items-link" href="#">媒體資訊</a>
                            </li>
                            <li className="footer-list-items">
                                <a className="footer-list-items-link" href="#">投資人關係</a>
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
