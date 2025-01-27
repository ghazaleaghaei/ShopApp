import TextField from "../../ components/TextField"

function SendOTPForm({
    phoneNumber,
    onChange,
    onSubmit,
    isLoading,
}) {
    return <div>
        <form onSubmit={onSubmit}>
            <TextField
                value={phoneNumber}
                onChange={onChange}
                name="phoneNumber"
                label="شماره موبایل"
            />
            <button
                type="submit"
                disabled={isLoading}
                className="disabled:opacity-50 w-full rounded-lg bg-primary-900 text-center p-2 text-white"
            >
                ارسال کد تایید
            </button>
        </form>
    </div>
}
export default SendOTPForm
