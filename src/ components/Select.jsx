
function Select({ label, name, selectCategories, handleChange, options, }) {

    return (
        <div className="flex flex-col gap-2 my-4">
            <label htmlFor={name}>
                {label}
            </label>
            <select
                id={name}
                className="rounded-xl p-2 outline-none focus:shadow-lg duration-300 bg-color2/10"
                value={selectCategories}
                onChange={handleChange}
            >
                {
                    options?.map((option) => <option key={option._id} value={option._id}>
                        {option.title}
                    </option>)
                }
            </select>
        </div>
    )
}
export default Select
