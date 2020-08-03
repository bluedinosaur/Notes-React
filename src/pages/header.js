import React from "react";

const navbar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home =<span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>{" "}
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Topics
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <button class="dropdown-item html-link">HTML</button>
              <button class="dropdown-item es5-link">ES5 & ES6</button>
              <button class="dropdown-item Afunctions-link">
                Advanced Functions
              </button>
              <button class="dropdown-item Aarrays-link">
                Advanced Arrays
              </button>
              <button class="dropdown-item Aobjects-link">
                Advanced Objects
              </button>
              <button class="dropdown-item PrefPval-link">
                Pass by Reference VS Pass by Value
              </button>
              <button class="dropdown-item TypeC-link">Type Coercion</button>
              <button class="dropdown-item es7-link">ES7 & ES8</button>
              <button class="dropdown-item Aloops-link">Advanced Loops</button>
              <button class="dropdown-item Debug-link">Debugging</button>
              <button class="dropdown-item JavaEngine-link">
                Javascript Engine
              </button>
              <button class="dropdown-item Terminal-link">
                Terminal Commands
              </button>
              <button class="dropdown-item Git-link">Git & Github</button>
            </div>
          </li>
          <li class="nav-item">
            <button onclick="bottomFunction()" id="myBtn" title="Go to bottom">
              To Bottom
            </button>
          </li>
          <li class="nav-item">
            <button onclick="topFunction()" id="myBtnTop" title="Go to top">
              To Top
            </button>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default navbar;
