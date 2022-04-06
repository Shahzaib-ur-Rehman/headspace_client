import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div class="social">
        <a href="#">
          <i class="icon ion-social-instagram"></i>
        </a>
        <a href="#">
          <i class="icon ion-social-snapchat"></i>
        </a>
        <a href="#">
          <i class="icon ion-social-twitter"></i>
        </a>
        <a href="#">
          <i class="icon ion-social-facebook"></i>
        </a>
      </div>
      <div className="p-4">
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">About Us</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Andy</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Blog</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Press & Media</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Research Partnerships</a>
          </li>
          <li class="list-inline-item last">
            <a href="#"> FAQs</a>
          </li>
        </ul>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Buy Headspace</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Brand Partners</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Meditation App</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Books</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Contact Us</a>
          </li>
          <li class="list-inline-item last">
            <a href="#">Careers</a>
          </li>
        </ul>
        <ul class="list-inline">
          <li class="list-inline-item siteMap">
            <a href="#">Site Map</a>
          </li>
        </ul>
      </div>
      <p class="copyright p-3">
        © 2022 HEADSPACE INC. | TERMS & CONDITIONS | PRIVACY POLICY
      </p>
    </div>
  );
};

export default Footer;
