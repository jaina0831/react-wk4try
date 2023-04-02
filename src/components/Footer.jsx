export default function Footer(){
    return(
<footer className="footer">
    <div className="footer__above py-5">
      <div className="container">
        <div className="row my-3">
          <ul className="footer__list col-lg-4">
            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-facebook-f"></i></a></li>
            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-google-plus-g"></i></a></li>
            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        <h5 className="footer__description col-lg-8">
        使用條款 隱私權政策 客服中心
        </h5>
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
