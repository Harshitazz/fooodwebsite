import React, { useEffect, useRef, useState } from "react";
import { RiRobot2Line } from "react-icons/ri";
import { FaArrowUpLong } from "react-icons/fa6";
import Typing from "./Typing";
import "./Chatbot.css"
const Chatbot = () => {
  const [array, setArray] = useState([]);
  const query = useRef("");
  const [typing, setTyping] = useState(false);

  const handleQuery = async () => {
    setArray((prevarray) => [...prevarray, `YOU : ${query.current.value}`]);

    const url = "https://open-ai21.p.rapidapi.com/conversationgpt35";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "45296566e5mshb8b83931712c647p17b02ajsn58555a72f0c0",
        "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: query.current.value,
          },
        ],
        web_access: false,
        system_prompt: "",
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 256,
      }),
    };

    try {
      setTyping(true);
      const response = await fetch(url, options);
      const json = await response.json();
      setArray((prevarray) => [...prevarray, `AI : ${json.result}`]);
      setTyping(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    query.current.value = "";
  }, [array]);
  return (
    <>
      <div className="row min-vh-100 overflow-hidden"style={{backgroundColor:"16213e"}}>
        <div className="col-3 left-comp d-flex flex-column ">
          <div className="d-flex text-white justify-content-between">
            <h3 className="mt-5" style={{color:"white"}}>Chatbot-AI</h3>
            <h3 className="mt-5">
              <RiRobot2Line style={{color:"white"}} />
            </h3>
          </div>
          <hr style={{ color: "black" }} />
          <div className="w-100 mx-1 ">
            <button
              type="button"
              className="btn btn-primary mx-auto my-3 w-100"
            >
              + New Connection
            </button>

            <button
              type="button"
              className="btn btn-outline-light text-center my-3 mx-auto w-100"
              onClick={() => {
                query.current.value = "what is keto diet?";
                handleQuery();
              }}
            >
              "what is keto diet?"
            </button>
            <button
              type="button"
              className="btn btn-outline-light text-center my-3 mx-auto w-100"
              onClick={() => {
                query.current.value = "food for diabetes?";
                handleQuery();
              }}
            >
              "food for diabetes?"
            </button>
            <button
              type="button"
              className="btn btn-outline-light text-center my-3 mx-auto w-100"
              onClick={() => {
                query.current.value = "which food has low lactose?.";
                handleQuery();
              }}
            >
              "which food has low lactose?."
            </button>
            <button
              type="button"
              className="btn btn-outline-light text-center my-3 w-100 mx-auto"
              onClick={() => {
                query.current.value = "health benefits of mango?";
                handleQuery();
              }}
            >
              "health benefits of mango?"
            </button>
          </div>
        </div>
        <div className="col-9">
          <div className="right-comp">
            <div className="logo-desc text-light">
              <div className="icon">
                <RiRobot2Line style={{color:"black"}}/>
              </div>
              <h1>AI Chatbot</h1>
            </div>
            <div className="chat text-light overflow-auto">
              {array.map((item) => {
                return (
                  <div
                    className="mb-4 rounded border border-light p-2 text-dark " style={{fontSize:'1rem'}}
                    key={item}
                  >
                    {item}
                  </div>
                );
              })}
              {typing && <Typing />}
            </div>
            <div className="d-flex  justify-content-around input-div flex-nowrap ">
              <textarea
                className="text-dark overflow-auto p-2"
                placeholder="Ask your question here..."
                ref={query}
              />
              <button
                type="button"
                onClick={handleQuery}
                className="btn btn-success send"
              >
                <FaArrowUpLong style={{ height: "2rem" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;