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
    <div className="min-h-screen flex items-center justify-center">
    <form onSubmit={submitHandler} className="max-w-[600px] w-full flex flex-col border border-solid border-gray-300 rounded-md p-8">
        <p className="text-lg font-normal mb-5">ورود به حساب کاربری</p>
        <h3 className="text-lg font-normal mb-10">کد تأیید را وارد کنید</h3>
        <span className="text-gray-600 text-sm mb-5">کد پیامک‌ شده به شمارۀ «{mobile}» را وارد کنید.</span>
        <input className="mt-[10px] mx-0 mb-5 border border-solid rounded-[5px] p-2 focus:outline-none focus:border-[#a62626] focus:bg-white" type="text" id="input" placeholder="'کد تایید" value={code} onChange={(e) => setCode(e.target.value)}/>

        <button className="w-[120px] px-[10px] py-[5px] border-none bg-[#a62626] text-white rounded-[5px] cursor-pointer" type="submit">ورود</button>
        <button className="w-[170px] bg-white text-[#a62626] border-[#a62626] border border-solid mt-8 rounded-[5px] p-1" onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
    </div>
  )
}

export default CheckOtpForm



