import { checkOtp } from "services/Auth"
import { setCookie } from "utils/cookie";

function CheckOtpForm({code, setCode, mobile, setStep}) {

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log({code,mobile})

        if(code.length !==5) return;
        const {response, error} = await checkOtp(mobile,code);
        console.log({response,error})
        if(response) {
            console.log(response)
            setCookie(response.data)
        }
        if(error) {
            console.log(error.response.data.message)
        }

    }

  return (
    <form onSubmit={submitHandler}>
        <p>ورود به حساب کاربری</p>
        <h3>کد تأیید را وارد کنید</h3>
        <p>کد پیامک‌ شده به شمارۀ «{mobile}» را وارد کنید.</p>
        <label htmlFor="input">کد تایید را وارد کندی</label>
        <input type="text" id="input" placeholder="'کد تایید" value={code} onChange={(e) => setCode(e.target.value)}/>

        <button type="submit">ورود</button>
        <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  )
}

export default CheckOtpForm



