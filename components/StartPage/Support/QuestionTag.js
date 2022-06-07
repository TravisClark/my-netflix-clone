import React, {useState} from "react";

function QuestionTag({question, answer}) {
    const [isTagOpen, setIsTagOpen] = useState(false);
  return (
    <div className="flex flex-col w-full max-w-2xl mt-2 text-md text-left text-white cursor-pointer md:text-xl">
      <div className="bg-tagColor py-4 px-6" onClick={()=>setIsTagOpen(prevState => !prevState)}>{question}</div>
      {isTagOpen && <div className="mt-1 bg-tagColor transition duration-500 px-4 py-2">
        {answer}
      </div>}
    </div>
  );
}

export default QuestionTag;
