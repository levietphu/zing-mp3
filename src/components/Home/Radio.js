import React, { useState, memo } from "react";

const Radio = ({ playList }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="list__playlist__selection">
      <div
        className="slide__radio__list"
        style={{
          transform: `${
            isActive ? "translate3d(-450px, 0 ,0)" : "translate3d(0, 0 ,0)"
          }`,
        }}
      >
        {playList.items.map((item, index) => {
          return (
            <div key={index} className="item__playlist__audio">
              <a href="#">
                <div className="img__playlist__audio">
                  <img src={item.program.thumbnail} alt="" />
                  <div className="option__playlist__audio">
                    <div className="option__audio">
                      {/* <i className="fa-solid fa-play"></i> */}
                      <span className="gif__play">
                        <img
                          src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <svg
                    className="svg circle__radio"
                    fill="transparent"
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="svg-circle-bg"
                      stroke="rgba(255, 255, 255, 0.2)"
                      cx="50"
                      cy="50"
                      r="48.75"
                      strokeWidth="2.5"
                    ></circle>
                    <circle
                      className="svg-circle"
                      stroke="#ff4b4a"
                      cx="50"
                      cy="50"
                      r="48.75"
                      strokeWidth="2.5"
                      strokeDasharray="306.3052837250048"
                      strokeDashoffset="120"
                      style={{
                        transition: "stroke-dashoffset 850ms ease-in-out 0s",
                      }}
                    ></circle>
                  </svg>
                </div>
                <div className="band__name__audio">
                  <img src={item.host.thumbnail} alt="" />
                </div>
                <div className="icon__live__audio">
                  <img
                    src="https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg"
                    alt=""
                  />
                </div>
              </a>
              <div className="title__playlist__audio">
                <span className="title_audio">{item.host.name}</span>
                <p className="count__listens">{item.activeUsers} đang nghe</p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`btn__radio__prev ${!isActive ? "unprev__audio" : ""}`}
        onClick={() => setIsActive(false)}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div
        className={`btn__radio__next ${isActive ? "unprev__audio" : ""}`}
        onClick={() => {
          if (isActive) {
            return setIsActive(false);
          }
          setIsActive(true);
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default memo(Radio);
