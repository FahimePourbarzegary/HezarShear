import React from "react";

import logo from "./../assets/images/logo.svg";
import imagemainPage from "./../assets/images/imagemainPage.svg";

function MainPage() {
  return (
    <>
      <div className="MainPage">
        <a name="MainPage" href="/">
          {" "}
        </a>
        <img src={logo} alt="logo" className="logo" />

        <div className="navbar">
          <button
            className="navbarbutton"
            onClick={(e) => {
              window.location.reload();
              setTimeout(() => {
                e.preventDefault();
              }, 2000);
            }}
          >
            <a href="#falhafez">فال حافظ</a>
          </button>

          <button className="navbarbutton">
            <a href="#ganjineAshar">گنجینه اشعار</a>
          </button>

          <button className="navbarbutton">
            <a href="#about">درباره ما</a>
          </button>
        </div>
        <div className="mainContent">
          <img
            src={imagemainPage}
            alt="imagemainPage"
            className="imagemainpage"
          />
          <div className="contextContainer">
            <p className="contextMain">
              تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و هنر، از دیرباز با
              شعر و ادبیات در هم پیچیده و ایران،مهد پرورش شاعران بزرگی بوده و در
              گیر و دار فراز و نشیب هایی که در طول تاریخ بر آن گذشته،اما شاهنامه
              وزین و پارسی پرور فردوسی بزرگ، اشعار روح بخش مولانا و عشق بازی اش
              با حق،غزل های عاشقانه و عارفانه عالم گیر در دیوان حافظ،اندیشه ژرف
              و عرفان ناب عطار نیشابوریهمه و همه همچون مرهمی بر زخم های کوچک و
              بزرگش .تسکین داده اند
            </p>
            <div className="buttonContainer">
              <form>
                <button
                  className="buttonstyle"
                  onClick={(e) => {
                    window.location.reload();
                    setTimeout(() => {
                      e.preventDefault();
                    }, 2000);
                  }}
                >
                  <a href="#falhafez">فال حافظ</a>
                </button>

                <button className="buttonstyle">
                  <a href="#ganjineAshar">گنجینه اشعار</a>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
