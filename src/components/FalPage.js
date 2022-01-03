import React, { useEffect, useState } from "react";
const FalHafez_Api = "https://ganjgah.ir/api/ganjoor/hafez/faal";
function FalPage() {
  const [Fal, setFal] = useState([]);
  const [Verses, setVerses] = useState([]);
  const [music, setmusic] = useState([]);
  useEffect(() => {
    fetch(FalHafez_Api)
      .then((res) => res.json())
      .then((data) => {
        setFal(data);
        setVerses(data.verses);

        setmusic(data.recitations[0].mp3Url);
      });
  }, []);

  const loopVerses = Verses.map((verses, index) => (
    <div className="byt" key={index}>
      <p>{verses.text}</p>
    </div>
  ));

  return (
    <div className="FalPage">
      <a name="falhafez"></a>
      <div className="mainCard">
        <div className="falContainer">
          <div className="fal">
            <div className="title">
              <p>{Fal.title} </p>
            </div>
            <div className="ghazaliat">{loopVerses}</div>
          </div>

          <div className="audio">
            <audio controls src={music}></audio>
          </div>
        </div>
        <div className="maniFal">
          <p className="manifal"> ای صاحب فال:</p>
          <p className="maniiFal">
            روز های غم و سختی به زودی تمام خواهد شد و خبر های خوشی به شما میرسد،
            چنان ذوق زده خواهی شد که برای خودتان هم غیر قابل باور است مطمن باش
            که دیگر ناراحتی های تو دوام ندارد و به زودی روزگار خوشی فرا خواهد
            رسید.
          </p>
        </div>
        <button className="buttonFal">
          <a href="MainPage">بازگشت به صفحه اصلی</a>
        </button>
      </div>
    </div>
  );
}

export default FalPage;
