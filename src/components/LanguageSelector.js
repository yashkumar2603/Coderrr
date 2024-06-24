import React, { useState } from "react";
import { LANGUAGE_VERSIONS } from "./constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "text-blue-400";

const LanguageSelector = ({ language, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (lang) => {
        onSelect(lang);
        setIsOpen(false);
    };

    return (
        <div className="ml-2 mb-4">
            <p className="mb-2 text-lg">Language:</p>
            <div className="relative inline-block w-48">
                <button
                    onClick={toggleDropdown}
                    className="btn btn-success"
                >
                    <span>{language}</span>
                    <span className="relative after:content-['>'] after:absolute after:right-0 after:w-4 after:h-4 after:border-transparent after:border-left-solid after:border-left-width 2px after:border-top-transparent after:border-top-width 2px after:border-bottom-transparent after:border-bottom-width 2px after:transform rotate-90 after:transition-transform ease-in-out duration-300">
                    </span>
                </button>
                {isOpen && (
                    <ul className="absolute mt-2 w-full bg-purple-600 text-white rounded-md shadow-lg list-none">
                        {languages.map(([lang, version]) => (
                            <li
                                key={lang}
                                className={`px-4 py-2 cursor-pointer hover:bg-purple-700 flex justify-between items-center`} // Removed bullet points and added hover effect
                                onClick={() => handleSelect(lang)}
                            >
                                {lang}
                                <span className="text-gray-200 text-sm">({version})</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default LanguageSelector;
