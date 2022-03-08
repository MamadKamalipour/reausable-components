import React from "react";
import Heading from "../Heading/Heading";
import CustomButton from "../CustomButton/CustomButton";
import "./BlogCard.scss"
function BlogCard({ data }) {
  return (
    <div className="blogcard">
      <div className="blogcard__image">
        <img src={data.image} alt={data.image} />
      </div>
      <div className="blogcard__conent">
        <Heading tag="h4" className="blogcard__conent__title">
          {data.title}
        </Heading>
        <p className="blogcard__conent__desc">{data.description}</p>
        <CustomButton
          type="primary"
          text="...مشاهده بیشتر"
          isDisabled={false}
        />
      </div>
    </div>
  );
}

export default BlogCard;
