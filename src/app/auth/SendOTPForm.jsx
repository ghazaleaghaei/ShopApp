import TextField from "../../ components/TextField"

function SendOTPForm({
    phoneNumber,
    onChange,
    onSubmit,
}) {
    return <div>
        <form onSubmit={onSubmit}>
            <TextField
                value={phoneNumber}
                onChange={onChange}
                name="phoneNumber"
                label="شماره موبایل"
            />
            <button type="submit">
                ارسال کد تایید
            </button>
        </form>
    </div>
}
export default SendOTPForm
