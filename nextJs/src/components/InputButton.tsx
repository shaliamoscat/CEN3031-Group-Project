import { useState } from "react";
import { buttonVariants } from "./ui/button";
import InputModal from "./InputPopup";
import { trpc } from "@/app/_trpc/client";

const InputButton = () => {
  // initial state is set as false, so popup is not open
  const [isPopUp, setIsPopUp] = useState(false);
  const utils = trpc.useContext(); //useContext function from tRPC
  // after submit button is clicked, the minutes is passed to populateDb
  const { mutate: populateDb } = trpc.populateDb.useMutation({
    onSuccess: () => {
      // invalidate forces reloading the values in the table
      utils.getUserStreak.invalidate();
      utils.getUserPoints.invalidate();
    },
  });

  const popupSubmit = (minutes: number) => {
    // on clicking submit, populateDb is called
    populateDb({ minutes: minutes }); // with minutes as input parameter
    setIsPopUp(false); // popUp closed
  };
  return (
    <>
      <button
        className={buttonVariants({
          size: "lg",
          className: "mt-6 mr-5",
        })}
        // when button is clicked, popUp opens
        onClick={() => setIsPopUp(true)}
      >
        Enter the minutes exercised today
      </button>
      <InputModal isOpen={isPopUp} onSubmit={popupSubmit} />
    </>
  );
};
export default InputButton;
