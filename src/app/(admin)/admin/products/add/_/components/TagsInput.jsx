"use client"

import { useState } from "react"

function TagsInput({ label, name, tags, setTags }) {

    const [currentTag, setCurrentTag] = useState("")

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && currentTag.trim() !== "") {
            event.preventDefault();
            setTags([...tags, currentTag]);
            setCurrentTag("");
        }
    }
    const handleChange = (e) => {
        setCurrentTag(e.target.value)
    }
    const handleDelete = (tag) => {
        const newTags = tags.filter((item) => item !== tag)
        setTags(newTags)
    }

    return (
        <div className="flex flex-col gap-2 my-4">
            <label htmlFor={name}>
                {label}
            </label>
            <div className="flex flex-col gap-2 border rounded-xl p-2">
                <ul className="flex flex-wrap gap-2 *:bg-secondary-500 *:py-1 *:px-3 *:rounded-lg text-white *:cursor-pointer">
                    {
                        tags?.map((tag, index) => (
                            <li key={index} onClick={() => handleDelete(tag)}>
                                {tag}
                            </li>
                        ))
                    }
                </ul>
                <input
                    id={name}
                    className="outline-none"
                    type="text"
                    autoComplete="off"
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    value={currentTag}
                />
            </div>
        </div>
    )
}
export default TagsInput
