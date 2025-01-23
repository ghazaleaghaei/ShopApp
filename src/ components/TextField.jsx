function TextField({
    name,
    label,
    value,
    type = "text",
    onChange,
}) {
    return (
        <div className="flex flex-col gap-2 my-4">
            <label htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                className="rounded-xl p-3 outline-none focus:shadow-lg duration-300 focus:shadow-secondary-300 focus:border focus:border-primary-300 border"
                type={type}
                autoComplete="off"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
export default TextField
