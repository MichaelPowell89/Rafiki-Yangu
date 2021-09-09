import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [open, setOpen] = useState(false);
  const [isToggled, setToggle] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

  const dropDownMenu = () => {
    setToggle(!isToggled);
  };

	return (
	<header class="navbar">
		<div class="container">
			<nav class="navbar">
				<a class="navbar-brand" href="/">
				<img src="images/Rafiki-Yangu-Logo.png" class="nav-logo"></img>
				<img src="images/Rafiki-Yangu-Text.png" class="nav-text"></img>
				</a>
				  <div onClick={handleClick} className="nav-icon">
			 		{open ? <FiX /> : <FiMenu />}
			 	</div>
				<div className={open ? 'nav-links active' : 'nav-links'}>
				  <ul>
            <li class="nav-item">
              <a class="nav-link" href="/OurWishes" onClick={closeMenu}>Our Wishes</a>
            </li>

            
            <li class="nav-item dropdown" onClick={() => setToggle(!isToggled)}>
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">
                What is Rafiki Yangu?
              </a>
              <div className = {isToggled ? "header-dropdown-content" : "dropdown-menu"}>
                <ul>
                  <li><a class="nav-link" href="/Rafiki-Yangu/About">About us</a></li>
                  <li><a class="nav-link" href="/WhoWeHelp">Who we can help</a></li>
                  <li><a class="nav-link" href="/HowYouHelp">How you can help</a></li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/Contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
				  <ul>
                    <li class="social-nav-list-item">
                      <a class="social-nav-link" href="https://www.facebook.com/MakeAWishAust/">
                        <span class="sr-only">Facebook</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="42px" height="42px" class="icon icon-social-facebook ">
                            <g fill="none" fill-rule="evenodd" transform="translate(.6 1)">
                              <path fill="#FFF" d="M18.612 28.418h2.231V20.88a.48.48 0 0 1 .476-.483h2.236l.275-2.161h-2.511a.48.48 0 0 1-.476-.483v-1.995c0-.86.208-2.005 2.003-2.005h1.156v-1.878a23.803 23.803 0 0 0-1.902-.077c-1.052 0-1.927.32-2.53.924-.626.628-.958 1.571-.958 2.726v2.305a.48.48 0 0 1-.475.483H15.95v2.161h2.186a.48.48 0 0 1 .475.483v7.538zm2.707.965h-3.182a.48.48 0 0 1-.476-.482v-7.539h-2.185A.48.48 0 0 1 15 20.88v-3.127a.48.48 0 0 1 .476-.482h2.185v-1.823c0-1.419.429-2.599 1.24-3.413.785-.786 1.891-1.202 3.2-1.202 1.22 0 2.194.095 2.44.128a.48.48 0 0 1 .413.478v2.796a.48.48 0 0 1-.476.482l-1.632.001c-.948 0-1.051.333-1.051 1.04v1.513h2.575c.137 0 .267.06.358.164.09.104.132.243.114.38l-.397 3.126a.478.478 0 0 1-.472.421h-2.178v7.539a.48.48 0 0 1-.476.482z" />
                              <circle cx="20" cy="20" r="20" stroke="#FFF" />
                            </g>
                          </svg>
                      </a>
                    </li>
                    <li class="social-nav-list-item">
                      <a class="social-nav-link" href="https://twitter.com/makeawishaust">
                        <span class="sr-only">Twitter</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="42px" height="42px" class="icon icon-social-twitter ">
                            <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                              <path fill="#FFF" d="M12.457 27.04c1.26.513 2.61.779 3.984.779 3.977 0 6.459-1.86 7.84-3.421 1.733-1.956 2.726-4.543 2.726-7.098 0-.165-.004-.325-.01-.477a.484.484 0 0 1 .2-.415c.273-.196.53-.409.77-.637a8.4 8.4 0 0 1-.72.117.484.484 0 1 1-.308-.897 3.43 3.43 0 0 0 .78-.637 8.28 8.28 0 0 1-1.194.328.488.488 0 0 1-.449-.144 3.423 3.423 0 0 0-2.48-1.069c-1.874 0-3.398 1.518-3.398 3.382 0 .264.03.524.088.772a.483.483 0 0 1-.499.594 11.575 11.575 0 0 1-7.851-3.638 3.373 3.373 0 0 0 1.342 3.873.483.483 0 0 1-.286.888c-.4-.012-.798-.08-1.18-.201a3.398 3.398 0 0 0 2.647 2.598.485.485 0 0 1 .032.943 4.404 4.404 0 0 1-1.1.153 3.403 3.403 0 0 0 2.856 1.647.484.484 0 1 1 .291.866 8.236 8.236 0 0 1-4.081 1.695zm3.984 1.748a11.54 11.54 0 0 1-6.217-1.814.484.484 0 0 1 .32-.89c.284.034.577.051.87.051 1.257 0 2.46-.309 3.536-.9a4.36 4.36 0 0 1-2.804-2.809.483.483 0 0 1 .273-.594 4.355 4.355 0 0 1-1.657-3.485.484.484 0 0 1 .683-.418 4.336 4.336 0 0 1-.061-4.48.487.487 0 0 1 .798-.062 10.596 10.596 0 0 0 7.056 3.815 4.44 4.44 0 0 1-.014-.35c0-2.4 1.961-4.352 4.372-4.352 1.11 0 2.185.426 2.992 1.177a7.307 7.307 0 0 0 2.062-.826.489.489 0 0 1 .551.038.483.483 0 0 1 .16.527 4.324 4.324 0 0 1-.536 1.101c.134-.05.267-.104.398-.162a.488.488 0 0 1 .57.131.48.48 0 0 1 .032.581 8.318 8.318 0 0 1-1.847 1.97c.002.087.003.174.003.263 0 2.787-1.082 5.608-2.969 7.739a10.937 10.937 0 0 1-3.625 2.703c-1.504.694-3.168 1.046-4.946 1.046z" />
                                <circle cx="20" cy="20" r="20" stroke="#FFF" />
                            </g>
                          </svg>
                      </a>
                    </li>
                    <li class="social-nav-list-item">
                      <a class="social-nav-link" href="https://www.instagram.com/makeawishaust/">
                        <span class="sr-only">Instagram</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="42px" height="42px" class="icon icon-social-instagram ">
                            <g fill="none" fill-rule="evenodd" transform="translate(1.4 1)">
                              <g fill="#FFF">
                                <path d="M20 12.625c-2.111 0-2.387.01-3.216.047-.704.032-1.245.135-1.755.333a3.39 3.39 0 0 0-1.226.798 3.39 3.39 0 0 0-.798 1.226c-.198.51-.301 1.051-.333 1.755-.038.829-.047 1.105-.047 3.216s.01 2.387.047 3.216c.032.704.135 1.245.333 1.755.188.484.434.862.798 1.226.364.364.742.61 1.226.798.51.198 1.051.301 1.755.333.829.038 1.105.047 3.216.047s2.387-.01 3.216-.047c.704-.032 1.245-.135 1.755-.333a3.39 3.39 0 0 0 1.226-.798 3.39 3.39 0 0 0 .798-1.226c.198-.51.301-1.051.333-1.755.038-.829.047-1.105.047-3.216s-.01-2.387-.047-3.216c-.032-.704-.135-1.245-.333-1.755a3.39 3.39 0 0 0-.798-1.226 3.39 3.39 0 0 0-1.226-.798c-.51-.198-1.051-.301-1.755-.333-.829-.038-1.105-.047-3.216-.047zm0 15.708c-2.132 0-2.413-.009-3.26-.047-.812-.037-1.447-.16-2.058-.398a4.306 4.306 0 0 1-1.557-1.013 4.306 4.306 0 0 1-1.013-1.557c-.238-.611-.36-1.246-.398-2.058-.038-.847-.047-1.128-.047-3.26 0-2.132.009-2.413.047-3.26.037-.812.16-1.447.398-2.058a4.306 4.306 0 0 1 1.013-1.557 4.306 4.306 0 0 1 1.557-1.013c.611-.238 1.246-.36 2.058-.398.847-.038 1.128-.047 3.26-.047 2.132 0 2.413.009 3.26.047.812.037 1.447.16 2.058.398a4.306 4.306 0 0 1 1.557 1.013c.462.463.775.943 1.013 1.557.238.611.36 1.246.398 2.058.038.847.047 1.128.047 3.26 0 2.132-.009 2.413-.047 3.26-.037.812-.16 1.447-.398 2.058a4.306 4.306 0 0 1-1.013 1.557 4.306 4.306 0 0 1-1.557 1.013c-.611.238-1.246.36-2.058.398-.847.038-1.128.047-3.26.047z" />
                                <path d="M20 16.795A3.209 3.209 0 0 0 16.795 20 3.209 3.209 0 0 0 20 23.205 3.209 3.209 0 0 0 23.205 20 3.209 3.209 0 0 0 20 16.795zm0 7.372A4.171 4.171 0 0 1 15.833 20 4.171 4.171 0 0 1 20 15.833 4.171 4.171 0 0 1 24.167 20 4.171 4.171 0 0 1 20 24.167zm5.208-7.639a1.042 1.042 0 1 1 0-2.084 1.042 1.042 0 0 1 0 2.084z" />
                              </g>
                              <circle cx="20" cy="20" r="20" stroke="#FFF" />
                            </g>
                          </svg>
                        </a>
                      </li>
				  </ul>
			  </div>
			</nav>
		</div>
</header>
	);
};

export default Navbar;