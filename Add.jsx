import React from "react";
import "./Add.css";
export function Add() {
  return (
    <div className="whole">
      <div id="add">
        <div className="container1">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" action="" method="post">
                  <h3 className="text-center text-color">Upload a Wallpaper</h3>
                  <div className="Pic">
                    <div className="mini">
                      <a href="https://drive.google.com/drive/my-drive">
                        
                        <i class="fas fa-folder-plus"> </i>
                      </a>
                    </div>
                  </div>
                  <div className="form-group number1">
                    <label for="username" className="text-color">
                      Email-Id:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      class="form-control"
                    />
                  </div>
                  <div className="form-group number2">
                  <select class="form-select form-select-sm"  className="optionLevel" aria-label=".form-select-sm example">
                   <option selected >Categories</option>
                   <option value="1" >Nature</option>
                   <option value="2" >Pets</option>
                   <option value="3" > Cars</option>
                   <option value="4">Tourist</option>
                   
                   </select>
                  </div>
                  <div className="form-group number3">
                    <input
                      type="submit"
                      name="submit"
                      className="btn submit-btn btn-md submission"
                      value="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
