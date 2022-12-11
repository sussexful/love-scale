import React from "react";
import { useEffect, useState } from "react";
import { fetchResult } from "./API/fetcherFunction";

interface Names {
    fname: string,
    sname: string,
}

interface ResponseObject {
    fname: string,
    sname: string,
    percentage: string,
    result: string
}

function App() {
    const [nameInputs, setNameInputs] = useState({} as Names);
    const [result, setResult] = useState<ResponseObject | null>(null)
    const [warning, setWarning] = useState(false);

    async function isFetched() {
        await fetchResult<ResponseObject>(nameInputs.fname, nameInputs.sname)
            .then(data => setResult(data))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (Boolean(Number(nameInputs.fname)) !== true && Boolean(Number(nameInputs.sname)) !== true) {
            if (typeof nameInputs.fname === "string" && typeof nameInputs.sname === "string") {
                if (nameInputs.fname.trim() && nameInputs.sname.trim()) {
                    isFetched();
                    setNameInputs({
                        fname: "",
                        sname: ""
                    });
                }
            }
        }
        else {
            setWarning(true);
            setResult(null)
            setNameInputs({
                fname: "",
                sname: ""
            })
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setNameInputs(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    useEffect(() => {
        setTimeout(() => setWarning(false), 2000)
    }, [warning])

    return (
        <div className="bg-midnight-500 font-indieFlower h-screen p-4 md:p-10">
            <h1 className="text-center text-6xl text-red-500">Love Scale</h1>
            <p className="text-center text-magic-mint-500 text-2xl">Put your love on the scale</p>
            <form
                className="flex justify-center my-4"
                onSubmit={handleSubmit}>
                <fieldset className="border p-4 w-full md:w-0">
                    <legend className="text-red-500">Name</legend>
                    <label>
                        <p className="text-magic-mint-500">Your Name</p>
                        <input
                            type="text"
                            className="bg-gray-700 px-4 py-2 md:w-96 w-full my-2 outline-none"
                            name="fname"
                            onChange={handleChange}
                            placeholder="Enter your Name"
                            value={nameInputs.fname || ""} />
                    </label>
                    <label>
                        <p className="text-magic-mint-500">Your Partner's Name</p>
                        <input
                            type="text"
                            className="bg-gray-700 px-4 py-2 md:w-96 w-full my-2 outline-none"
                            name="sname"
                            onChange={handleChange}
                            placeholder="Enter your Partner's Name"
                            value={nameInputs.sname || ""} />
                    </label>
                    <button
                        className="border float-right mt-2 p-2 rounded-md text-magic-mint-500"
                        type="submit">See Result</button>
                </fieldset>
            </form>
            {warning && <p className="text-center text-red-500 text-lg">Names can not be empty and name can not be a number!!</p>}
            {result &&
                <div className="text-center">
                    <p className="text-lg text-white my-2"><strong className="text-magic-mint-500">Your Name: </strong>{result.sname}</p>
                    <p className="text-lg text-white my-2"><strong className="text-magic-mint-500">Your Partner's Name: </strong>{result.fname}</p>
                    {(+result.percentage < 50) ?
                        <p className="text-lg text-red-500 my-2"><strong className="text-magic-mint-500">Percentage: </strong>{result.percentage}</p> :
                        <p className="text-lg text-blue-500 my-2"><strong className="text-magic-mint-500">Percentage: </strong>{result.percentage}</p>}
                    <p className="text-lg text-white my-2"><strong className="text-magic-mint-500">Result: </strong>{result.result}</p>
                </div>}
        </div>
    )
}

export default App;