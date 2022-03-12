import React, { useState } from "react";

type Props = {
  onCloseModal: Function;
};

const Modal = (props: Props) => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div>
      <div
        className=" rounded-lg py-12 bg-[#0000009f] w-full h-full  transition duration-150 ease-in-out z-50 fixed top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg mt-28"
        >
          <div className="relative py-8 px-5 md:px-10 dark:border-none bg-white shadow-md rounded border  border-gray-400">
            <div className="w-full flex justify-start text-gray-600 mb-3">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_form-svg1.svg"
                alt="icon"
              />
            </div>
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              Enter Billing Details
            </h1>

            <div className="relative mb-5 mt-2">
              <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_form-svg2.svg"
                  alt="icon"
                />
              </div>
              <input
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                type="text"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                placeholder="0xab xxxx xxxx xxxx xxxx"
              />
            </div>
            <input
              id="name"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              type="number"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Amount"
            />

            <div className="flex items-center justify-start w-full">
              <button className="w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                Submit
              </button>
              <button
                onClick={() => props.onCloseModal()}
                className=" w-full focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              >
                Cancel
              </button>
            </div>
            <button
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              aria-label="close modal"
              role="button"
              onClick={() => props.onCloseModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
