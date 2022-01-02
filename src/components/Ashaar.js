import React from "react";
import imageSaher from "./../assets/images/sadi.png";
import tarh2 from "./../assets/images/tarhAsharPage2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
function Ashaar() {
  return (
    <>
      <a name="ganjineAshar"></a>
      <div className="AsharPage">
        <img src={tarh2} alt="tarh2" className="tarh2" />
        <div className="boxContent">
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
            <FontAwesomeIcon icon={faSyncAlt} size={30} color="gray" />
          </button>
        </div>
        <div className="boxShaeer">
          <div className="shaerContainer">
            <p className="contentShaer">
              مولانا جلال‌الدین محمد بلخی مشهور به مولوی شاعر بزرگ قرن هفتم هجری
              قمری است. وی در سال ۶۰۴ هجری قمری در بلخ زاده شد. پدر وی بهاءالدین
              که از علما و صوفیان بزرگ زمان خود بود به سبب رنجشی که بین او و
              سلطان محمد خوارزمشاه پدید آمده بود از بلخ بیرون آمد و بعد از مدتی
              سیر و سیاحت به قونیه رفت. مولانا بعد از فوت پدر تحت تعلیمات
              برهان‌الدین محقق ترمذی قرار گرفت. ملاقات وی با شمس تبریزی در سال
              ۶۴۲ هجری قمری انقلابی در وی پدید آورد که موجب ترک مسند تدریس و
              فتوای وی شد و به مراقبت نفس و تذهیب باطن پرداخت. وی در سال ۶۷۲
              هجری قمری در قونیه وفات یافت. از آثار او می‌توان به مثنوی، دیوان
              غزلیات یا کلیات شمس، رباعیات، مکتوبات، فیه مافیه و مجالس سبعه
              اشاره کرد.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ashaar;
