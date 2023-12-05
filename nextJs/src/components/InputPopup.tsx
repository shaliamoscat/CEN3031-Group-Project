import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "react-modal";

// modal for inputting excerise min
interface InputPopup {
  isOpen: boolean; // bool: modal is open or not.
  onSubmit: (minutes: number) => void;
}
const InputModal: React.FC<InputPopup> = ({ isOpen, onSubmit }) => {
  // useState sets initial state of minutes as 0
  // setMinutes used to update the state
  const [minutes, setMinutes] = useState(0); // State for storing the input value
  const router = useRouter(); // nextjs router
  // event handling
  const handleSubmit = (event: React.FormEvent) => {
    // prevents page from reloading
    event.preventDefault();
    // calls onSubmit function with minutes as parameter
    onSubmit(minutes);
    // navigates to dashboard page once submit button is clicked
    router.push("/dashboard");
  };

  return (
    <Modal
      isOpen={isOpen}
      // sets minutes to 0 when modal is closed
      onRequestClose={() => setMinutes(0)}
      className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center"
    >
      <div className="bg-white rounded p-8 inline-block">
        <form
          // handleSubmit function called when form is submitted
          onSubmit={handleSubmit}
          className="flex flex-col items-center"
        >
          <label className="font-semibold mb-4">
            Enter the minutes exercised today:
          </label>
          <div className="flex flex-col items-center mt-4">
            <input
              type="number"
              value={minutes}
              // to update state of minutes
              onChange={(e) => setMinutes(Number(e.target.value))}
              className="border-2 border-gray-300 rounded p-2"
            />
            <button
              type="submit"
              className="mt-4 bg-black rounded p-2 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default InputModal;
