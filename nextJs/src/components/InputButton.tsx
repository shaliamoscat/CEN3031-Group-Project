import { useState } from "react";
import { buttonVariants } from "./ui/button";
import InputModal from "./InputPopup";
import { trpc } from "@/app/_trpc/client";

const InputButton = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  const utils = trpc.useContext();
  const { mutate: populateDb } = trpc.populateDb.useMutation({
    onSuccess: () => {
      utils.getUserStreak.invalidate();
    },
  });

  const popupSubmit = (minutes: number) => {
    populateDb({ minutes: minutes });
    setIsPopUp(false);
  };
  return (
    <>
      <button
        className={buttonVariants({
          size: "lg",
          className: "mt-6 mr-5",
        })}
        // href="dashboard"
        // target="_blank"
        onClick={() => setIsPopUp(true)}
      >
        Enter the minutes exercised today
      </button>
      <InputModal isOpen={isPopUp} onSubmit={popupSubmit} />
    </>
  );
};
export default InputButton;
