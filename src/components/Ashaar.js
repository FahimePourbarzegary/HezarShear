import React, { useState, useEffect } from "react";
import imageSaher from "./../assets/images/moulavi.gif";
import tarh2 from "./../assets/images/tarhAsharPage2.png";
import tarh from "./../assets/images/tarhAshaarPage.svg";
import rahi from "./../assets/images/rahi.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyncAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
function Ashaar() {
  const [ShowData, setShowData] = useState(false);
  return (
    <>
      <a name="ganjineAshar"></a>
      <div className="AsharPage">
        {ShowData ? null : (
          <>
            <div className="shaeranlist">
              <div className="scrollbutton">
                <button className="npbutton">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    size="1x"
                    color="#FFFF"
                  />
                </button>
                <button className="npbutton">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="1x"
                    color="#FFFF"
                    className="next"
                  />
                </button>
              </div>
              <button className="shaer">
                <div className="contentShaerContainer">
                  <img src={rahi} alt="imageSaher" className="imageShaerList" />
                  <p className="nameShaer">رهی معیری</p>
                </div>
              </button>
              <button className="shaer">
                <div className="contentShaerContainer">
                  <img
                    src={imageSaher}
                    alt="imageSaher"
                    className="imageShaerList"
                  />
                  <p className="nameShaer">رهی معیری</p>
                </div>
              </button>
              <button className="shaer">
                <div className="contentShaerContainer">
                  <img
                    src={imageSaher}
                    alt="imageSaher"
                    className="imageShaerList"
                  />
                  <p className="nameShaer">رهی معیری</p>
                </div>
              </button>
              <button className="shaer">
                <div className="contentShaerContainer">
                  <img
                    src={imageSaher}
                    alt="imageSaher"
                    className="imageShaerList"
                  />
                  <p className="nameShaer">رهی معیری</p>
                </div>
              </button>
              <button className="shaer">
                <div className="contentShaerContainer">
                  <img
                    src={imageSaher}
                    alt="imageSaher"
                    className="imageShaerList"
                  />
                  <p className="nameShaer">رهی معیری</p>
                </div>
              </button>
              <button className="shaer">
                <div className="contentShaerContainer">
                  <img
                    src={imageSaher}
                    alt="imageSaher"
                    className="imageShaerList"
                  />
                  <p className="nameShaer">رهی معیری</p>
                </div>
              </button>
              <button className="shaer">
                <div className="contentShaerContainer">
                  <img
                    src={imageSaher}
                    alt="imageSaher"
                    className="imageShaerList"
                  />
                  <p className="nameShaer">رهی معیری</p>
                </div>
              </button>
            </div>
          </>
        )}
        {ShowData ? <img src={tarh2} alt="tarh2" className="tarh2" /> : null}
        <div className="boxContent">
          {ShowData ? (
            <>
              <img src={imageSaher} alt="imageSaher" className="imageSaher" />
              <div className="Ashar">
                <div className="fal">
                  <div className="title">
                    <p> غزل شماره 28:</p>
                  </div>
                  <div className="Ashaar">
                    <div className="byte">
                      <p>شهریست پرظریفان و از هر طرف نگاری</p>
                    </div>
                    <div className="byte">
                      <p>شهریست پرظریفان و از هر طرف نگاری</p>
                    </div>
                    <div className="byte">
                      <p>شهریست پرظریفان و از هر طرف نگاری</p>
                    </div>
                    <div className="byte">
                      <p>شهریست پرظریفان و از هر طرف نگاری</p>
                    </div>
                    <div className="byte">
                      <p>شهریست پرظریفان و از هر طرف نگاری</p>
                    </div>
                    <div className="byte">
                      <p>شهریست پرظریفان و از هر طرف نگاری</p>
                    </div>
                    <div className="byte">
                      <p>شهریست پرظریفان و از هر طرف نگاری</p>
                    </div>
                    <div className="byte">
                      <p>شهریست پرظریفان و از هر طرف نگاری</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="reresh">
                <FontAwesomeIcon icon={faSyncAlt} size="2x" color="gray" />
              </button>
            </>
          ) : (
            <img src={tarh} alt="tarh" className="tarh" />
          )}
        </div>
        <div className="boxShaeer">
          {ShowData ? (
            <div className="shaerContainer">
              <p className="contentShaer">
                مولانا جلال‌الدین محمد بلخی مشهور به مولوی شاعر بزرگ قرن هفتم
                هجری قمری است. وی در سال ۶۰۴ هجری قمری در بلخ زاده شد. پدر وی
                بهاءالدین که از علما و صوفیان بزرگ زمان خود بود به سبب رنجشی که
                بین او و سلطان محمد خوارزمشاه پدید آمده بود از بلخ بیرون آمد و
                بعد از مدتی سیر و سیاحت به قونیه رفت. مولانا بعد از فوت پدر تحت
                تعلیمات برهان‌الدین محقق ترمذی قرار گرفت. ملاقات وی با شمس
                تبریزی در سال ۶۴۲ هجری قمری انقلابی در وی پدید آورد که موجب ترک
                مسند تدریس و فتوای وی شد و به مراقبت نفس و تذهیب باطن پرداخت. وی
                در سال ۶۷۲ هجری قمری در قونیه وفات یافت. از آثار او می‌توان به
                مثنوی، دیوان غزلیات یا کلیات شمس، رباعیات، مکتوبات، فیه مافیه و
                مجالس سبعه اشاره کرد.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Ashaar;
