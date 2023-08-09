import React from "react";
import { useCountdown } from "./useCountDown";
import DateTimeDisplay from "./DateTimeDisplay";
import img1 from "./images/icon-facebook.svg";
import img2 from "./images/icon-instagram.svg";
import img3 from "./images/icon-pinterest.svg";

const images = [
  {
    id: 1,
    img: [img1, img2, img3],
  },
];

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};
const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <div className="show-counter">
        <div>
          <DateTimeDisplay value={days} isDanger={days <= 3} />
        </div>
        <div>
          <DateTimeDisplay value={hours} isDanger={false} />
        </div>
        <div>
          <DateTimeDisplay value={minutes} isDanger={false} />
        </div>
        <div>
          <DateTimeDisplay value={seconds} isDanger={false} />
        </div>
      </div>
      <div className="show-times">
        <div>
          <DateTimeDisplay type={"days"} />
        </div>
        <div>
          <DateTimeDisplay type={"Hours"} />
        </div>
        <div>
          <DateTimeDisplay type={"Minutes"} />
        </div>
        <div>
          <DateTimeDisplay type={"Seconds"} />
        </div>
      </div>
      <div className="social">
        {images.map((item) =>
          item.img.map((imgitems) => <img src={imgitems} alt="" />)
        )}
      </div>
    </>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
