import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const BlogHomeCard = ({
  blogLink,
  blogImg,
  blogDate,
  catLink,
  blogCat,
  blogTitle,
  blogAuthor
}) => {
  // console.log(`Author : `, blogAuthor)
  return (
    <Col xl={4} lg={4} md={6}>
      <div className="blog__item mb-40">
        <div className="blog__thumb">
          <Link href={blogLink}>
            <a>
              <img src={blogImg} alt="blog" />
            </a>
          </Link>
        </div>
        <div className="blog__content">
          <div className="blog__date d-flex align-items-center justify-content-start">
            <Link href={`/blog?category=${blogCat}`}>
              <a className="m-btn blog-btn">{blogCat}</a>
            </Link>
          </div>
          <h3>
            <Link href={blogLink}>
              <a>{blogTitle}</a>
            </Link>
          </h3>
          <div className="blog__link">
            <Link href={blogLink}>
              <a className="arrow-btn">
                Continue Reading<i className="fas fa-arrow-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogHomeCard;
