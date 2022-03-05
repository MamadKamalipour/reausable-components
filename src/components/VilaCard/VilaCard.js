import React from "react";
import starSvg from "../../assets/image/star.svg";
import Carousel from "react-multi-carousel";
import "./VilaCard.scss";
const VilaCard = ({ data, gallery }) => {
  return (
    <>
      <div className="card" key={data.id}>
        <div className="card__header">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay={false}
            autoPlaySpeed={10000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
              },
            }}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {gallery.map((item, index) => (
              <img src={item} alt="house-gallery" key={index} />
            ))}
          </Carousel>
        </div>
        <div className="card__body">
          <div className="card__body__rating">
            <img src={starSvg} alt="starSvg" />
            <p>{data.rating}</p>
            <span>({data.voters})</span>
          </div>
          <div className="card__body__title">
            <h2>{data.title}</h2>
          </div>
          <div className="card__body__info">
            <p className="location">{data.location}</p>
            <p className="rooms">-{data.rooms} اتاق</p>
          </div>
          <div className="card__body__price">
            {data.discountPresentage !== 0 ? (
              <>
                <s>{data.price}</s>
                <strong>{data.priceWithDiscount}</strong>
              </>
            ) : (
              <strong>{data.price}</strong>
            )}

            <strong>تومان</strong>
            <p>/هرشب</p>
          </div>
        </div>
        <div className="card__footer">
          <div className="card__footer__badges">
            {data.isInstanceReservation && (
              <div className="card__footer__badges--badge1">
                <span>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6842 3.60279C18.2055 2.944 17.7132 2 16.8484 2H10.1317C9.75652 2 9.40996 2.19159 9.22321 2.50227L4.14052 10.9577C3.73978 11.6243 4.2439 12.4554 5.04904 12.4554H8.47764L5.24755 20.5203C4.78108 21.5406 6.04257 22.473 6.89092 21.735L20 9.33119H13.151L17.6842 3.60279Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  رزرو آنی و قطعی
                </span>
              </div>
            )}
            {data.discountPresentage !== 0 ? (
              <div className="card__footer__badges--badge2">
                <span>{data.discountPresentage}% تخفیف</span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VilaCard;
