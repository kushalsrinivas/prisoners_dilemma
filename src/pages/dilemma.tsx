import React, { useState } from "react";
interface User {
  index: Number;
  option: string;
}
interface Opponent {
  index: Number;
  option: string;
}
interface Box {
  user: User;
  opponent: Opponent;
}
interface Score {
  user: number;
  opponent: number;
}
function Dilemma() {
  const [rounds, setRounds] = useState(3);
  const [currentRound, setCurrentRound] = useState(0);
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [flag, setFlag] = useState(false);
  const [score, setScore] = useState<Score>();
  const changeColor = (option: string, index: number) => {
    if (currentRound < rounds) {
      const updatedBoxes = boxes.map((box, index) => {
        if (currentRound === index) {
          const updatedBox = { ...box };
          updatedBox.user.option = option;
          updatedBox.opponent.option = getRandomOption();
          return updatedBox;
        }
        return box;
      });
      setBoxes(updatedBoxes);
    }
  };

  const GenBox = () => {
    setFlag(true);
    console.log(boxes);
    const newBoxes: Box[] = [];
    for (let i = 0; i < rounds; i++) {
      const newBox: Box = {
        user: {
          index: i,
          option: "sqaure",
        },
        opponent: {
          index: i,
          option: "sqaure",
        },
      };
      newBoxes.push(newBox);
    }
    setBoxes(newBoxes);
  };

  const getRandomOption = () => {
    const option = Math.floor(Math.random() * 2) === 1 ? "success" : "error";
    return option;
  };

  const Reset = () => {
    setBoxes([]);
    setCurrentRound(0);
    setFlag(false);
  };

  const counter = () => {};
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center m-10 gap-3 card shadow-xl bg-base-200 p-5">
        <div className="grid grid-cols-2 w-full m-auto gap-3 ">
          <button type="submit" className="btn  btn-primary" onClick={GenBox}>
            Start
          </button>
          <button type="submit" className="btn  btn-secondary" onClick={Reset}>
            Reset
          </button>
        </div>
        <input
          type="number"
          placeholder="Number of rounds"
          className="input input-bordered w-full max-w-xs"
          value={rounds}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (isNaN(value) || value < 3 || value > 25) {
            } else {
              setRounds(value);
            }
          }}
        />
      </div>
      <div
        className={`card w-[95%] m-auto ${
          !flag && "opacity-0"
        }  bg-base-100 shadow-xl`}
      >
        <div className="card-body w-full">
          <div className="flex flex-row gap-3 w-full">
            {boxes.map((temp, id) => {
              return (
                <div key={id} className="flex flex-col gap-3 w-full">
                  <button
                    className={`btn btn-${temp.opponent.option}`}
                  ></button>
                  <button className={`btn btn-${temp.user.option}`}></button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="">

      </div>
      <div
        className={`card w-[95%] gap-3 m-auto bg-base-100 mt-10 shadow-xl  `}
      >
        <div className="grid grid-cols-2 card-body">
          <button
            className="btn btn-success"
            onClick={() => {
              if (flag!) {
                changeColor("success", currentRound);
                setCurrentRound(currentRound + 1);
              }
            }}
          >
            coporate
          </button>
          <button
            className="btn btn-error"
            onClick={() => {
              if (flag!) {
                changeColor("error", currentRound);
                setCurrentRound(currentRound + 1);
              }
            }}
          >
            Defect
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dilemma;
