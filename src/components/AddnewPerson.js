import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddnewPerson(props) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mb-8">
      <button
        onClick={handleShow}
        className="block mx-auto w-64 h-28 px-4 py-1 text-sm text-rose-400 font-semibold rounded-full border border-rose-400 hover:text-white hover:bg-rose-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
      >
        Add new Profile
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="editmodal"
            onSubmit={(e) => {
              if (!name || !position || !age || !location) {
                alert("Please fill in all fields");
                handleClose();
                e.preventDefault();
                return;
              }
              handleClose();
              e.preventDefault();
              props.addNew(name, position, age, location);
              setName("");
              setPosition("");
              setAge("");
              setLocation("");
            }}
            className="w-full max-w-sm"
          >
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name"
                >
                  Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="position"
                >
                  Position
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="position"
                  type="text"
                  value={position}
                  onChange={(e) => {
                    setPosition(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="age"
                >
                  Age
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="age"
                  type="text"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="location"
                >
                  Location
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <button
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded"
            form="editmodal"
          >
            confirm
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddnewPerson;
