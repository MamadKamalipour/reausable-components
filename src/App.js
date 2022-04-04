import { useState } from "react";
import "./assets/fontawesome/pro/css/all.css";
import VilaFinder from "./components/VilaFinder";
import FlippableCard from "./components/FlippableCard/FlippableCard";
import "./App.scss";
import TopNavImage from "./assets/image/topnavbanner.jpg";
import Logo from "./assets/image/logo.png";
import bannerImage from "./assets/image/banner.jpg";
import CustomButton from "./components/CustomButton/CustomButton";
import TopNavBanner from "./components/TopNavBanner/TopNavBanner";
import Header from "./components/Header/Header";
import Heading from "./components/Heading/Heading";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import VilaCard from "./components/VilaCard/VilaCard";
import Slider from "./components/Slider/Slider";
import BlogCard from "./components/BlogCard/BlogCard";
import Accordion from "./components/Accordion/Accordion";
import FlipOnHover from "./components/FlippableCard/FlippableCard2";
import FlippableCard2 from "./components/FlippableCard/FlippableCard2";
import Table from "./components/Table/Table";
import CustomCalendar from "./components/CustomCalendar/CustomCalendar";
import VilaFeauters from "./components/VilaFeauters/VilaFeauters";


const tableOption = [
  {
    id: 1,
    title: "روابط شبکه‌­ای",
    desc: "	ما به دنبال برقراری روابط میان فردی فراتر از سمت، سطح و واحد جهت آشنایی با تجارب و تخصص همدیگر و افزایش سرمایه اجتماعی سازمان هستیم.",
  },
  {
    id: 2,
    title: "تعهد حرفه­‌ای",
    desc: "	ما به دنبال ارزیابی تعهد، در تمامی ابعاد آن بوده و به دنبال ارزش افزوده دو طرفه برای سازمان و همکارانمان هستیم.	ما به دنبال ارزیابی تعهد، در تمامی ابعاد آن بوده و به دنبال ارزش افزوده دو طرفه برای سازمان و همکارانمان هستیم.",
  },
  {
    id: 3,
    title: "توانمندسازی",
    desc: "	ما به دنبال ارتقای دائمی دانش و مهارت‌­ها در ابعاد رفتاری و شغلی و بهینه‌­سازی توانایی‌­ها در راستانی نیازهای سازمان هستیم.",
  },
  {
    id: 4,
    title: "توسعه و تعالی",
    desc: "	ما به دنبال تسهیل تعالی سازمان هستیم تا آنکه زمینه تعالی واحدهای سازمانی و خود را فراهم سازیم.",
  },
  {
    id: 5,
    title: "تیم‌سازی بهینه",
    desc: "	ما برای ایده‌­های خود به دنبال تیمی خواهیم بود تا آن را به عمل رسانده و تبدیل به محصول کنیم.",
  },
];
const FlippableCard2Items = [
  // {
  //   id: 1,
  //   title: "fghjk",
  //   desc: "dfghjk",
  //   backTitle: "fghj",
  // },
  {
    id: 2,
    title: "fghjk",
    desc: "dfghjk",
    backTitle: "fghj",
  },
  {
    id: 3,
    title: "fghjk",
    desc: "dfghjk",
    backTitle: "fghj",
  },
];
const items = [
  {
    id: 1,
    htmlId: "Accordion1",
    headingId: "head1",
    label: "چطور در سایت ثبت نام کنم؟",
    content:
      "برای ثبت‌نام از منوی بالای صفحه به قسمت «ثبت‌نام» بروید و شماره تلفن همراه خود را وارد کنید، کلید ورود را بزنید، پیامکی حاوی یک کد شش رقمی دریافت می‌کنید این کد را در قسمت مربوط به کد وارد کنید. در مرحله‌ی بعد با وارد کردن اطلاعاتی شامل نام و نام‌خانوادگی و تعیین کلمه‌ی عبور ثبت نام شما کامل خواهد شد. شماره تلفن همراه شما بعدا به عنوان نام کاربری شما شناخته خواهد شد.",
  },
  {
    id: 2,
    htmlId: "Accordion2",
    headingId: "head2",
    label: "چقدر زمان میبرد که میزبان نسبت به درخواست رزرو پاسخگو باشد؟",
    content:
      "ما تلاش می‌کنیم که با آموزش مناسب به میزبان‌ها، آن‌ها را نسبت به پاسخگویی درخواست‌ها در کمترین زمان ممکن ترغیب نماییم.",
  },
  {
    id: 3,
    htmlId: "Accordion3",
    headingId: "head3",
    label: "هر اقامتگاه را برای چه مدت می‌توانم اجاره کنم؟",
    content:
      "حداقل و حداکثر زمان اجاره هر اقامتگاه در صفحه‌ی اقامتگاه توسط میزبان مشخص شده است.",
  },
];

const cardData = [
  {
    id: 1,
    frontIcon: "fa fa-home",
    frontTitle: "front title 1",
    frontDesc: "front desc",
    backIcon: "back icon",
    backTitle: "back title",
    status: "top",
    backgroundImageOverlay: "rgba(0, 0, 0, 0.44)",
    backDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    backgroundImage:
      "https://cdn.jabama.com/image/jabama-images/1447261/557a9a44-c06b-4b7a-8d18-23295f6a33b3.png",
  },
  {
    id: 2,
    frontIcon: "fa fa-home",
    frontTitle: "front title 2",
    frontDesc: "front desc",
    backIcon: "back icon",
    backTitle: "back title",
    status: "top",
    backgroundImageOverlay: "rgba(0, 0, 0, 0.44)",
    backDesc:
      "Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    backgroundImage:
      "https://cdn.jabama.com/image/jabama-images/1447261/034720d1-4929-4c0f-a151-1c1e417f4c5e.png",
  },
  {
    id: 3,
    frontIcon: "fa fa-home",
    frontTitle: "front title 3",
    frontDesc: "front desc",
    backIcon: "back icon",
    backTitle: "back title",
    status: "top",
    backgroundImageOverlay: "rgba(0, 0, 0, 0.44)",
    backDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    backgroundImage:
      "https://cdn.jabama.com/image/jabama-images/1447261/db2e2a7d-a90d-4585-bcc2-5c0e6380fed5.png",
  },
];
const vilaData = [
  {
    id: 1,
    gallery: [
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    ],
    link: "https://google.com",
    title: "1ویلا استخردار",
    rating: "4.6",
    location: "گیلان، انزلی",
    rooms: 2,
    price: "730000",
    priceWithDiscount: "500000",
    isVerified: true,
    discountPresentage: 20,
  },
  {
    id: 2,
    gallery: [
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    ],
    link: "https://google.com",
    title: "2ویلا استخردار",
    rating: "4.6",
    voters: "26",
    location: "گیلان، انزلی",
    rooms: 2,
    price: "730000",
    priceWithDiscount: "500000",
    isVerified: false,
    discountPresentage: 7,
  },
  {
    id: 3,
    gallery: [
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    ],
    link: "https://google.com",
    title: "3ویلا استخردار",
    rating: "4.6",
    voters: "26",
    location: "گیلان، انزلی",
    rooms: 2,
    price: "730000",
    priceWithDiscount: "500000",
    isVerified: true,
    discountPresentage: 0,
  },
  {
    id: 4,
    gallery: [
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    ],
    link: "https://google.com",
    title: "4ویلا استخردار",
    rating: "4.6",
    voters: "26",
    location: "گیلان، انزلی",
    rooms: 2,
    price: "730000",
    priceWithDiscount: "500000",
    isVerified: false,
    discountPresentage: 0,
  },
  {
    id: 5,
    gallery: [
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    ],
    link: "https://google.com",
    title: "5ویلا استخردار",
    rating: "4.6",
    voters: "26",
    location: "گیلان، انزلی",
    rooms: 2,
    price: "730000",
    priceWithDiscount: "500000",
    isVerified: false,
    discountPresentage: 0,
  },
  {
    id: 6,
    gallery: [
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    ],
    link: "https://google.com",
    title: "6ویلا استخردار",
    rating: "4.6",
    voters: "26",
    location: "گیلان، انزلی",
    rooms: 2,
    price: "730000",
    priceWithDiscount: "500000",
    isVerified: false,
    discountPresentage: 0,
  },
  {
    id: 7,
    gallery: [
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    ],
    link: "https://google.com",
    title: "7ویلا استخردار",
    rating: "4.6",
    voters: "26",
    location: "گیلان، انزلی",
    rooms: 2,
    price: "730000",
    priceWithDiscount: "500000",
    isVerified: false,
    discountPresentage: 35,
  },
  {
    id: 8,
    gallery: [
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    ],
    link: "https://google.com",
    title: "8ویلا استخردار",
    rating: "4.6",
    voters: "26",
    location: "گیلان، انزلی",
    rooms: 2,
    price: "730000",
    priceWithDiscount: "500000",
    isVerified: false,
    discountPresentage: 0,
  },
];
const blogData = [
  {
    id: 1,
    image:
      "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
    title: "پست بلاگ آزمایشی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
  },
  {
    id: 2,
    image:
      "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    title: "پست بلاگ آزمایشی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
  },
  {
    id: 3,
    image:
      "https://i.picsum.photos/id/572/536/354.jpg?hmac=LH_xl3VtYKAAEcOQJpsrPecFrg-hDX3wQGexX5mmINM",
    title: "پست بلاگ آزمایشی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و ",
  },
];
function App() {
  const [selectedDate, setSelectedDate] = useState(new Date);

  return (
    <div className="App">
      <TopNavBanner image={TopNavImage} alt="top nav" />
      <Header logo={Logo} isSticky={true} />
      <VilaFinder />
      <div className="card-wrapper">
        {cardData.map((card) => (
          <FlippableCard
            key={card.id}
            frontIcon={card.frontIcon}
            frontTitle={card.frontTitle}
            frontDesc={card.frontDesc}
            backIcon={card.backIcon}
            backTitle={card.backTitle}
            status={card.status}
            backgroundImageOverlay={card.backgroundImageOverlay}
            backDesc={card.backDesc}
            backgroundImage={card.backgroundImage}
          />
        ))}
      </div>
      <CustomButton
        type="primary"
        text="سلام"
        isDisabled={false}
        icon="fa fa-home"
        // if type is CustomBtn
        // csColor="#fff"
        // csBorderColor="violet"
        // csOnFocusBoxShadow=" 0 0 0 0.25rem rgb(238 130 238 / 87%)"
      />
      <Heading tag="h6"></Heading>

      <Banner link="https://www.google.com" image={bannerImage} />
      <div
        id="card-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "1rem auto",
          padding: "1rem",
          gap: "5px",
        }}
      >
        {vilaData.map((vila) => (
          <VilaCard data={vila} gallery={vila.gallery} key={vila.id} />
        ))}
      </div>
      <div
        className="vilaSlider"
        style={{ direction: "ltr", width: "80%", margin: "1rem auto" }}
      >
        <Slider
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
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
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {vilaData.map((vila) => (
            <VilaCard data={vila} gallery={vila.gallery} key={vila.id} />
          ))}
        </Slider>
      </div>
      <div style={{ height: "50%" }}>
        <Slider
          additionalTransfrom={0}
          arrows={true}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
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
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {blogData.map((blog) => (
            <BlogCard data={blog} key={blog.id} />
          ))}
        </Slider>
        <div className="container">
          <div className="row flex-column flex-md-row">
            {FlippableCard2Items.map((card) => (
              <div className="col-3" key={card.id}>
                <FlippableCard2
                  title={card.title}
                  desc={card.desc}
                  backTitle={card.backTitle}
                />
              </div>
            ))}
          </div>
        </div>
        <Accordion items={items} />
        <Table data={tableOption} />


      </div>

      <CustomCalendar value={selectedDate} onValueChange={(e) => setSelectedDate(e)}/>
      
      <VilaFeauters />
      <Footer />
      
    </div>
  );
}

export default App;
