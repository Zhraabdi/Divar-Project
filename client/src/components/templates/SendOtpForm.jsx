import { sendOtp } from "services/Auth"

function SendOtpForm({mobile, setMobile, setStep}) {

    const submitHandler = async (event) => {
        event.preventDefault()
        if(mobile.length !== 11) return

        const {response, error} = await sendOtp(mobile)
        if (response) setStep(2)
            if (error) console.log(error.response.data.message)
        console.log({response,error})
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
    <form onSubmit={submitHandler} className="max-w-[600px] w-full flex flex-col border border-solid border-gray-300 rounded-md p-8">
        <p className="text-lg font-normal mb-10">ورود به حساب کاربری</p>
        <p className="mb-10 text-xl text-[#a62626]">شمارهٔ موبایل خود را وارد کنید</p>
        <span className="text-gray-700 text-sm mb-5">برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد.</span>
        <input className="mt-[10px] mx-0 mb-5 border border-solid rounded-[5px] p-2 focus:outline-none focus:border-[#a62626] focus:bg-white" type="text" id="input" placeholder="شماره موبایل" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
        <button className="w-[120px] px-[10px] py-[5px] border-none bg-[#a62626] text-white rounded-[5px] cursor-pointer " type="submit">ارسال کد تایید</button>
    </form>
    </div>
  )
}

export default SendOtpForm