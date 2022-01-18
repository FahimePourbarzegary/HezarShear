import React, { useState, useEffect } from "react";
import tarh2 from "./../assets/images/tarhAsharPage2.png";
import tarh from "./../assets/images/tarhAshaarPage.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyncAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Shaer_Api = "https://ganjgah.ir/api/ganjoor/poets";
const Shaer_Random_Api = "https://ganjgah.ir/api/ganjoor/poem/random?poetId=";
function Ashaar() {
  const [ShowData, setShowData] = useState(false);
  const [idSend, setidSend] = useState("5");
  const [Verses, setVerses] = useState([]);
  const [Shear, setShear] = useState([]);
  const [shaer, setShaer] = useState([]);
  const [ganjoorMetre, setganjoorMetre] = useState([]);
  const [img, setImg] = useState([]);
  useEffect(() => {
    fetch(Shaer_Api)
      .then((res) => res.json())
      .then((data) => {
        setShaer((shaer) => data);
      });

    fetch(Shaer_Random_Api + idSend)
      .then((res) => res.json())
      .then((data) => {
        setVerses((verses) => data.verses);
        setganjoorMetre(data.ganjoorMetre);
        setShear(data);
      });
  }, []);
  const loopVerses = Verses.map((verses, index) => (
    <div className="byt" key={index}>
      <p>{verses.text}</p>
    </div>
  ));
  const ShaerList = shaer.map((shaer) => {
    return (
      <button
        className="shaer"
        onClick={() => {
          setShowData(true);
          setidSend(shaer.id);
          setImg("https://ganjgah.ir" + shaer.imageUrl);
        }}
        key={shaer.id}
      >
        <div className="contentShaerContainer">
          <img
            src={"https://ganjgah.ir" + shaer.imageUrl}
            alt="imageSaher"
            className="imageShaerList"
          />
          <p className="nameShaer">{shaer.name}</p>
        </div>
      </button>
    );
  });

  return (
    <>
      <a name="ganjineAshar"></a>
      <div className="AsharPage">
        {ShowData ? null : (
          <>
            <div className="shaeranlist">{ShaerList}</div>
            <div className="scrollbutton">
              <button className="npbutton">
                <FontAwesomeIcon icon={faChevronLeft} size="1x" color="#FFFF" />
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
          </>
        )}
        {ShowData ? <img src={tarh2} alt="tarh2" className="tarh2" /> : null}
        <div className="boxContent">
          {ShowData ? (
            <>
              <img src={img} alt="imageSaher" className="imageSaher" />
              <div className="Ashar">
                <div className="fal">
                  <div className="title">
                    <p> {Shear.title}:</p>
                  </div>
                  <div className="Ashaar">{loopVerses}</div>
                </div>
              </div>
              <button
                className="reresh"
                onClick={() => {
                  fetch(Shaer_Random_Api + idSend)
                    .then((res) => res.json())
                    .then((data) => {
                      setVerses((verses) => data.verses);
                      setganjoorMetre(data.ganjoorMetre);
                      setShear(data);
                    });
                }}
              >
                <FontAwesomeIcon icon={faSyncAlt} size="2x" color="gray" />
              </button>
              <a
                className="backbutton"
                onClick={() => {
                  setShowData(false);
                }}
              >
                بازگشت
              </a>
            </>
          ) : (
            <img src={tarh} alt="tarh" className="tarh" />
          )}
        </div>
        <div className="boxShaeer">
          {ShowData ? (
            <div className="shaerContainer">
              <p className="contentShaer">{ganjoorMetre.description}</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Ashaar;
