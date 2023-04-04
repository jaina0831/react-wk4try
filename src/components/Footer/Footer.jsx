import styles from './footer.module.css';

export default function Footer() {
    const {
        token: { colorBgFooter, colorTextFooter },
    } = theme.useToken();
    return (
        <div style={{
            backgroundColor: colorBgFooter,
            color: colorTextFooter,}}>
            <div className="container">
                <footer className={styles.footer}>
                    <div className={styles.firstfooterbox}>
                        <ul className={styles.firstfooter - list}>
                            <li className={styles.firstfooter - list - items}>
                                <a className={styles.firstfooterlistitemslink} href="#">
                                    <img className={styles.firstfooterimg} src="./images/—Pngtree—youtube white icon_3570427.png" alt="youtube" />
                                </a>
                            </li>
                            <li className={styles.firstfooter - list - items}>
                                <a className={styles.firstfooterlistitemslink} href="#">
                                    <img className="firstfooter-img" src="./images/—Pngtree—facebook white icon_3570425.png" alt="facebook" />
                                </a>
                            </li>
                            <li className={styles.firstfooter - list - items}>
                                <a className={styles.firstfooterlistitemslink} href="#">
                                    <img className="firstfooter-img" src="./images/—Pngtree—instagram white icon instagram instagram_3570419.png" alt="ins" />
                                </a>
                            </li>
                        </ul>
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

        <div className="footer__below">
            <div className="container">
                <h6>
                    &copy; Copyright All rights reserved.
                </h6>
            </div>
        </div>
  </footer >
  </div >
  </div >
    );
}


