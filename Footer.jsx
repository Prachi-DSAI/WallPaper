import React from "react";
import {Link} from 'react-router-dom';
export function Footer() {
  return (
    <div>
      <footer class="page-footer font-small bg-primary pt-4">
        <div class="container text-center text-md-left">
          <div class="row">
            <div class="col-md-4 mx-auto">
              <h1 class="logo text-light mt-3 mb-4"> wallscraft</h1>
              <p>
                Wallscraft is an online community of desktop wallpapers
                enthusiasts. Join now to share and explore tons of collections
                of awesome wallpapers.
              </p>
            </div>
            {/* <hr class="clearfix w-100 d-md-none"> */}
            <div class="col-md-2 mx-auto">
              <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Tools</h5>
              <ul class="list-unstyled">
                <Link to="/Add">
                <li>
                  <a href="#!">Upload a wallpaper</a>
                </li>
                </Link>
                <Link to="/">
                <li>
                  <a href="#!">Request a wallpaper</a>
                </li>
                </Link>
              </ul>
            </div>
            {/* <hr class="clearfix w-100 d-md-none"> */}
            
          </div>
        </div>
        <ul class="list-unstyled list-inline text-center py-2">
          <li class="list-inline-item">
            <h5 class="mb-1">Register for free</h5>
          </li>
         
          <li class="list-inline-item">
          <Link to="/SignUp">
            <a href="#!" class="btn btn-danger btn-rounded">
              Sign up!
            </a>
            </Link>
          </li>
          
        </ul>
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1" href="https://www.facebook.com/">
              <i class="fa fa-facebook"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1" href="https://twitter.com/">
              <i class="fa fa-twitter"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1" href="https://myaccount.google.com">
              <i class="fa fa-google-plus"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-li mx-1" href="https://www.instagram.com/">
              <i class="fa fa-instagram"> </i>
            </a>
          </li>
        </ul>
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="#"> wallscraft</a>
        </div>
      </footer>
    </div>
  );
}
