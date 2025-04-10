import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function MultiSelect({ label, name, selected, setSelected, toggleOption, options }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full relative space-y-4 h-fit">
            <label htmlFor={name}>
                {label}
            </label>
            <div
                className="border border-secondary-50 rounded-xl p-3 cursor-pointer items-center w-full inline-flex overflow-x-auto gap-4"
            >
                {
                    selected.length > 0
                        ? selected.map(item => <p
                            key={item._id}
                            className="w-fit bg-secondary-800 text-white rounded-xl px-3 py-1 text-nowrap"
                            onClick={() => setSelected((prev) => prev
                                .filter((filterItem) => filterItem._id !== item._id))
                            }
                        >
                            {item.title}

                        </p>
                        )
                        : <p
                            className="w-full"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            لطفا انتخاب کنید...
                        </p>
                }
                <div onClick={() => setIsOpen(!isOpen)}>
                    <MdOutlineKeyboardArrowDown className="w-6 h-6 text-primary-800" />
                </div>
            </div>

            {isOpen && (
                <div className="absolute z-10 w-full border border-secondary-50 rounded-xl max-h-60 overflow-y-auto shadow">
                    {options.map((option) => (
                        <div
                            key={option._id}
                            className={`flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100 ${selected.includes(option) && 'bg-primary-100'}`}
                            onClick={() => {
                                setIsOpen(!isOpen)
                                toggleOption(option)
                            }}
                        >
                            <span>{option.title}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiSelect
