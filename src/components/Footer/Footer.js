import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <main id="mainFooter">
      <div className="footer">
        {/* row 2 */}
        <div className="row g-0">
          {/* coulmn 1 */}
          <div className="col-12 col-md-6 col-lg-3 p-0 pt-3 text-center">
            <h2>لینک های دسترسی</h2>
            <ul>
              <li>
                {" "}
                <a href="/">چگونه مهمان شوم</a>
              </li>
              <li>
                <a href="/">چگونه میزبان شوم</a>
              </li>
              <li>
                <a href="/"> سایر سوالات متداول</a>
              </li>
            </ul>
          </div>
          {/* coulmn 2 */}
          <div className="col-12 col-md-6 col-lg-3 p-0 pt-3 text-center">
            <h2>درباره ما</h2>
            <ul>
              <li>
                <a href="/">وبلاگ</a>
              </li>
              <li>
                <a href="/">تماس با ما</a>
              </li>
              <li>
                <a href="/">بیشتر</a>
              </li>
              <li>
                <a href="/"> پشتیبانی</a>
              </li>
            </ul>
          </div>
          {/* coulmn 3 */}
          <div className="col-12 col-md-6 col-lg-3 p-0 pt-3 text-center">
            <h2>قوانین و مقررات</h2>
            <ul>
              <li>
                <a href="/"> قوانین و راهنمای میزبان</a>
              </li>
              <li>
                <a href="/"> قوانین و مقررات رزرو</a>
              </li>
            </ul>
          </div>
          {/* coulmn 4 */}
          <div className="col-12 col-md-6 col-lg-3 p-0 pt-3 text-center">
            <h2>شبکه های اجتماعی</h2>
            <ul>
              <li>
                <a href="/">لینکدین</a>
              </li>
              <li>
                <a href="/">اینستاگرام</a>
              </li>
              <li>
                <a href="/">توییتر</a>
              </li>
              <li>
                <a href="/">تلگرام</a>
              </li>
              <li>
                <a href="/">اپارات</a>
              </li>
            </ul>
          </div>
        </div>
        {/* row 2 */}
        <div className="footer__bottom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="1000"
            height="1000"
            viewBox="0 0 1000 1000"
          >
            <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" />
            <g
              transform="matrix(0.7217 0 0 2.4661 489.3902 845.0024)"
              id="883260"
            >
              <path
                vector-effect="non-scaling-stroke"
                transform=" translate(-720, -256)"
                d="M 0 256 L 80 240 C 160 224 320 192 480 192 C 640 192 800 224 960 234.7 C 1120 245 1280 235 1360 229.3 L 1440 224 L 1440 320 L 1360 320 C 1280 320 1120 320 960 320 C 800 320 640 320 480 320 C 320 320 160 320 80 320 L 0 320 Z"
                stroke-linecap="round"
              />
            </g>
          </svg>
          <p className="copyright"> ©️ folan bisar </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
