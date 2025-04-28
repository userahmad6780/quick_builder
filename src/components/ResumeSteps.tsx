import { assets } from "../assets/assets"

function ResumeSteps() {
  return (
    <div className="px-4 sm:px-[15%] py-5 sm:py-12">
        <div className="mb-5">
            <h1 className="text-2xl md:text-5xl font-semibold text-center pt-5 md:pt-10 pb-10 md:pb-10">Create resume in three steps</h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
            <div className="flex flex-col items-center justify-center gap-2">
                <div>
                    <img className="w-50 h-50 md:w-80 md:h-80 object-contain" src={assets.step1} alt="pick a cv template"/>
                </div>
                <span className="text-indigo-800 text-md md:text-xl font-semibold">
                    Pick a CV template.
                </span>
                <span className="text-sm md:text-lg text-center">
                    Choose a sleek design and layout to get started.
                </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <div>
                    <img className="w-50 h-50 md:w-80 md:h-80 object-contain" src={assets.step2} alt="fill in the blanks"/>
                </div>
                <span className="text-indigo-800 text-md md:text-xl font-semibold">
                    Fill in the blanks.
                </span>
                <span className="text-sm md:text-lg text-center">
                    Type in a few words. Let the Zety CV wizard fill the rest.
                </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <div>
                    <img className="w-50 h-50 md:w-80 md:h-80 object-contain" src={assets.step3} alt="customize your document"/>
                </div>
                <span className="text-indigo-800 text-md md:text-xl font-semibold">
                    Customize your document.
                </span>
                <span className="text-sm md:text-lg text-center">
                    Make it truly yours. Uniqueness in a few clicks.
                </span>
            </div>
        </div>
        
    </div>
  )
}

export default ResumeSteps