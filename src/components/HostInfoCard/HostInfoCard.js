import React from "react";
import "./HostInfoCard.scss";
import Avatar from "../../assets/image/avatar.png";

const HostInfoCard = () => {
  return (
    <main id="mainHostInfoCard">
      <div className="first-container-card">
        <div className="first-container-card__heading">
          <img
            className="first-container-card__heading__avatar"
            src={Avatar}
            alt="Host image"
          />
          <h3> نام و نام خانوادگی</h3>
          <span className="graytext">18 فروردین 1400 </span>
        </div>
        <div className="first-container-card__underheading">
          <span>
            <i class="fa-solid fa-star "></i> 50 بار دیده شده
          </span>
          <span>
            <i class="fa-solid fa-badge-check"></i> تایید شده
          </span>

          <span>
            <i class="fa-solid fa-circle-heart"></i> میزبان برتر
          </span>
        </div>
        <div className="first-container-card__body">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خ طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className="first-container-card__footer">
          <h6>لورم ایپسوم</h6>
          <p className="graytext">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>
      </div>
      <div className="second-container-card">
        {/* <div className="second-container-card__heading">
          <span className="graytext">100%:امتیاز بازخورد</span>
          <br />
          <span className="graytext"> 1h :مدت زمان بازدید میانگین</span>
        </div> */}
        <div>
          <button className="second-container-card__button" type="submit">
            ارتباط با میزبان
          </button>
        </div>
        <div className="second-container-card__tip">
          <span>
            <i class="fa-solid fa-note"></i>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </span>
        </div>
      </div>
    </main>
  );
};

export default HostInfoCard;
