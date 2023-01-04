import { useContext } from "react";
import { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { TransactionContext } from "../context/TransactionContext";
import Loader from "./Loader";

const Input = ({ placeholder, name, type, value, handleChange }) => {
    return (
        <input
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            onChange={(e) => handleChange(e, name)}
            className="my-2 w-full rounded-md p-4 outline-none bg-transparent text-sm text-slate-300 font-semibold border-2 border-slate-400 "
        />
    );
};

const Welcome = () => {
    const [isLoading, setisLoading] = useState(false);
    const {
        connectWallet,
        currentAccount,
        formData,
        handleChange,
        sendTransaction,
    } = useContext(TransactionContext);

    const handleSubmit = async (e) => {
        const { addressTo, amount, keyword, message } = formData;
        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) {
            console.error("return");
            return;
        }

        setisLoading(true);
        await sendTransaction();
        setisLoading(false);
    };

    return (
        <>
            <div className="flex w-full justify-center items-center flex-wrap">
                <div className="flex md:p-20 py-12 px-4">
                    <div className="flex items-start justif-start flex-col">
                        <h1 className="text-white text-3xl sm:text-5xl py-1">
                            Send Crypto <br /> worldwide{" "}
                        </h1>
                        <p className="text-white mt-5 font-light md:w-9/12 pl-2">
                            Buy & Sell Crypto!.
                        </p>
                        {!currentAccount && (
                            <button
                                className="bg-sky-100 px-4 py-3 text-gray-700 mt-5 rounded-full font-bold"
                                onClick={connectWallet}
                            >
                                Connect Wallet
                            </button>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-start max-sm:w-full px-10 gap-6">
                    <div className="relative p-3 justify-end items-start flex-col rounded-xl h-52 sm:w-96 w-full bg-orange-300 shadow-slate-500 shadow-lg">
                        <span className="flex justify-center items-center h-10 w-10 border-2 border-slate-700 rounded-full">
                            <FaEthereum fontSize={24} />
                        </span>

                        <p className="text-slate-800 font-md right-4 bottom-2 absolute">
                            0x87h...6ytr5
                        </p>
                        <p className="font-semibold uppercase text-slate-800 font-md left-4 bottom-2 absolute">
                            Ethereum
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full ">
                <h1 className="text-slate-200 flex justify-start font-bold text-3xl py-3">
                    Send crypto
                </h1>
                <div className="p-5 md:w-1/2 max-md:w-10/12 rounded-lg flex flex-col justify-start items-center ">
                    <Input
                        placeholder={"Receiver address"}
                        name={"addressTo"}
                        type={"text"}
                        handleChange={handleChange}
                    />
                    <Input
                        placeholder={"Amount (ETH)"}
                        name={"amount"}
                        type={"number"}
                        handleChange={handleChange}
                    />

                    <Input
                        placeholder={"Keyword (Gif)"}
                        name={"keyword"}
                        type={"text"}
                        handleChange={handleChange}
                    />

                    <Input
                        placeholder={"Enter a message"}
                        name={"message"}
                        type={"text"}
                        handleChange={handleChange}
                    />

                    {/* <div className="h-[2px] w-52 bg-slate-50  my-2"></div> */}

                    {isLoading ? (
                        <Loader />
                    ) : (
                        <button
                            type="button"
                            className="w-full bg-sky-100 p-3 rounded-xl font-bold text-gray-600 mt-3"
                            onClick={handleSubmit}
                        >
                            Send Now
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Welcome;
