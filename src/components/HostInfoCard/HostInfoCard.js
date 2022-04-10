import React from "react";
import "./HostInfoCard.scss";

const HostInfoCard = ({ data }) => {
  const person = data[0];
  console.log(person);
  return (
    <main id="mainHostInfoCard">
      <div className="first-container-card">
        <div className="first-container-card__heading">
          <img
            className="first-container-card__heading__avatar"
            src={person.profilePic}
            alt="Host image"
          />
          <h3>{person.fullName}</h3>
          <span className="graytext">{person.joinedDate} </span>
        </div>
        <div className="first-container-card__underheading">
          <span>
            <i className="fa-solid fa-star "></i>
            {`${person.visited} بار دیده شده`}
          </span>
          {person.verified ? (
            <span>
              <i className="fa-solid fa-badge-check"></i> تایید شده
            </span>
          ) : null}

          {person.rate > 8 ? (
            <span>
              <i className="fa-solid fa-circle-heart"></i> میزبان برتر
            </span>
          ) : (
            <span>
              <i className="fa-solid fa-circle-heart"></i> امتیاز کاربر:{" "}
              {person.rate}
            </span>
          )}
        </div>
        <div className="first-container-card__body">
          <p>
            {person.locationBtio}
          </p>
        </div>
        <div className="first-container-card__footer">
          <h6>لورم ایپسوم</h6>
          <p className="graytext">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و 
          </p>
        </div>
      </div>
      <div className="second-container-card">
        <div>
          <a
            href={`phoneto:${person.phoneNumber}`}
            className="second-container-card__button"
            type="submit"
          >
            ارتباط با میزبان
          </a>
        </div>
        <div className="second-container-card__tip">
          <span>
            <i className="fa-solid fa-note"></i>
            {person.rateInfo}
          </span>
        </div>
      </div>
    </main>
  );
};

export default HostInfoCard;
