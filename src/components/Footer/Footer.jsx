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
                        <ul className={styles.firstfooterlist}>
                            <li className={styles.firstfooterlistitems}>
                                <a className={styles.firstfooterlistitemslink} href="#">
                                    <img className={styles.firstfooterimg} src="./images/—Pngtree—youtube white icon_3570427.png" alt="youtube" />
                                </a>
                            </li>
                            <li className={styles.firstfooterlistitems}>
                                <a className={styles.firstfooterlistitemslink} href="#">
                                    <img className{style.firstfooterimg} src="./images/—Pngtree—facebook white icon_3570425.png" alt="facebook" />
                                </a>
                            </li>
                            <li className={styles.firstfooterlistitems}>
                                <a className={styles.firstfooterlistitemslink} href="#">
                                    <img className={style.firstfooterimg} src="./images/—Pngtree—instagram white icon instagram instagram_3570419.png" alt="ins" />
                                </a>
                            </li>
                        </ul>
                    </div>
                            <div className={style.footerbox}>
                                <ul className={style.footerlist}>
                                    <li className={style.footerlistitems}>
                                        <a className={style.footerlistitemslink} href="#">說明中心</a>
                                    </li>
                                    <li className={style.footerlistitems}>
                                        <a className={style.footerlistitemslink} href="#">使用條件</a>
                                    </li>
                                    <li className={style.footerlistitems}>
                                        <a className={style.footerlistitemslink} href="#">法律聲明</a>
                                    </li>
                                    <li className={style.footerlistitems}>
                                        <a className={style.footerlistitemslink} href="#">連絡我們</a>
                                    </li>
                                </ul>
                            </div>
                   
                            <div className={style.footerbox}>
                                <ul className={style.footerlist}>
                                    <li className={style.footerlistitems}>
                                        <a className={style.footerlistitemslink} href="#">隱私權</a>
                                    </li>
                                    <li className={style.footerlistitems}>
                                        <a className={style.footerlistitemslink} href="#">訂閱協議</a>
                                    </li>
                                    <li className={style.footerlistitems}>
                                        <a className={style.footerlistitemslink} href="#">媒體資訊</a>
                                    </li>
                                    <li className={style.footerlistitems}>
                                        <a className={style.footerlistitemslink} href="#">投資人關係</a>
                                    </li>
                                </ul>
                            </div>

        <div className={style.footerbelow}>
            <div className={style.container}>
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
