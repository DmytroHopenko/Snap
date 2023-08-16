import React from "react";
import $ from 'jquery';

export default function Header() {
  $('header').ready(function(){
  $('.burger-menu-but').click(function(){
    $('.mobile-fill').css('display','flex')
    $('.mobile-fill').addClass('animationShow')
    $('.burger-menu').addClass('animationMenuShow')
  });
  $('.close-menu').click(function(){
    $('.mobile-fill').css('display','none')
    $('.mobile-fill').removeClass('animationShow')
    $('.burger-menu').removeClass('animationMenuShow')
  });
  $('#droped-left').click(function(){
    $('#droped-right').removeClass('active-right-margin')
    $('.drop-list-right').removeClass('active')
    $(this).addClass('active-left-margin')
    $('.drop-list-left').addClass('active')
  });
  $('#droped-right').click(function(){
    $('#droped-left').removeClass('active-left-margin')
    $('.drop-list-left').removeClass('active')
    $(this).addClass('active-right-margin')
    $('.drop-list-right').addClass('active')
  });
})
  return (
    <header>
      <span>snap</span>
      <svg
        className="burger-menu-but"
        width="32"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#151515" fill-rule="evenodd">
          <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
        </g>
      </svg>
      <div className="mobile-fill">
      <div className="burger-menu">
      <svg className="close-menu" width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z"/><path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"/></g></svg>
        <nav>
          <ul>
            <li id="droped-left">
              <a href="/" className="main-link">
                Features
                <ul className="drop-list-left">
                  <li className="droped-li">
                    <div>
                      <svg
                        width="14"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z"
                          fill="#726CEE"
                        />
                      </svg>
                    </div>
                    <a href="/">Todo List</a>
                  </li>
                  <li className="droped-li">
                    <div>
                      <svg
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z"
                          fill="#4BB1DA"
                        />
                      </svg>
                    </div>
                    <a href="/">Calendar</a>
                  </li>
                  <li className="droped-li">
                    <div>
                      <svg
                        width="13"
                        height="17"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z"
                          fill="#EDD556"
                        />
                      </svg>
                    </div>
                    <a href="/">Reminders</a>
                  </li>
                  <li className="droped-li">
                    <div>
                      <svg
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z"
                          fill="#8E4CB6"
                        />
                      </svg>
                    </div>
                    <a href="/">Planning</a>
                  </li>
                </ul>
              </a>
              <svg className="upp-down-1" width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#686868"
                  stroke-width="1.5"
                  fill="none"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </li>
            <li id="droped-right">
              <a href="/" className="main-link">
                Company
                <ul className="drop-list-right">
                  <li className="droped-li">
                    <a href="/">History</a>
                  </li>
                  <li className="droped-li">
                    <a href="/">Our Team</a>
                  </li>
                  <li className="droped-li">
                    <a href="/">Blog</a>
                  </li>
                </ul>
              </a>
              <svg className="upp-down-2" width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#686868"
                  stroke-width="1.5"
                  fill="none"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </li>
            <li>
              <a href="/" className="main-link">
                Careers
              </a>
            </li>
            <li>
              <a href="/" className="main-link">
                About
              </a>
            </li>
          </ul>
        </nav>
        <div className="form-wrap">
          <a href="/" className="login">
            Login
          </a>
          <a href="/" className="register">
            Register
          </a>
        </div>
      </div>
      </div>
    </header>
  );
}