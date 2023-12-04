import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "react-modal";

interface InputPopup {
  isOpen: boolean;
  onSubmit: (minutes: number) => void;
}

const InputModal: React.FC<InputPopup> = ({ isOpen, onSubmit }) => {
  const [minutes, setMinutes] = useState(0);
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(minutes);
    router.push("/dashboard");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setMinutes(0)}
      className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center"
    >
      <div className="bg-white rounded p-8 inline-block">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label className="font-semibold mb-4">
            Enter the minutes exercised today:
          </label>
          <div className="flex flex-col items-center mt-4">
            <input
              type="number"
              value={minutes}
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
