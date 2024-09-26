import React from 'react'
import "./Skills.css";

const SkillCard = ({heading,title,color}) => {
    return (
        <div className=" box h-72 w-60 relative rounded-2xl bg-[#121212] overflow-hidden flex-shrink-0 text-center flex flex-col gap-10">

            <div className={`extradiv`} style={{backgroundColor:color}}></div>

            <div className="absolute top-10 right-2 flex flex-col gap-10">
                <h2>{heading} </h2>
                <p>{title}</p>
            </div>

        </div>
    )
}

export default SkillCard
