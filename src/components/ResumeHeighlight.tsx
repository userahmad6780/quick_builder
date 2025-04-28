import { assets } from "../assets/assets"

function ResumeHeighlight() {
  return (
    <div className="px-4 sm:px-[15%] py-5 sm:py-12">
        <div className="mb-5">
            <h1 className="text-2xl md:text-5xl font-semibold text-center pt-5 md:pt-10 pb-10 md:pb-15">Get hired fast with a powerful resume</h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-18">
            <div className="flex flex-row gap-5">
                <div>
                    <img className="w-20 h-12 object-contain" src={assets.better_resume} alt="better resume approach"/>
                </div>
                <div className="flex flex-col">
                    <span className="text-indigo-800 text-md md:text-lg font-semibold">
                        A better resume in minutes
                    </span>
                    <span className="text-sm md:text-md">
                        Replace your old resume in a few simple clicks. Our builder gives recruiters what they want.
                    </span>
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <div>
                    <img className="w-20 h-12 object-contain" src={assets.ats} alt="better resume approach"/>
                </div>
                <div className="flex flex-col">
                    <span className="text-indigo-800 text-md md:text-lg font-semibold">
                        ATS-friendly templates
                    </span>
                    <span className="text-sm md:text-md">
                        Tick every box and make sure your resume is never filtered out by the hiring software.
                    </span>
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <div>
                    <img className="w-20 h-12 object-contain" src={assets.pre_writter} alt="better resume approach"/>
                </div>
                <div className="flex flex-col">
                    <span className="text-indigo-800 text-md md:text-lg font-semibold">
                        Pre-written content
                    </span>
                    <span className="text-sm md:text-md">
                        Stop worrying about words. Save time by adding pre-approved, tested content from certified writers.
                    </span>
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <div>
                    <img className="w-20 h-12 object-contain" src={assets.easy_ai} alt="better resume approach"/>
                </div>
                <div className="flex flex-col">
                    <span className="text-indigo-800 text-md md:text-lg font-semibold">
                        Easy with AI
                    </span>
                    <span className="text-sm md:text-md">
                        Quickly generate formal phrases and summaries. Sound professional, faster.
                    </span>
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <div>
                    <img className="w-20 h-12 object-contain" src={assets.beat_competition} alt="better resume approach"/>
                </div>
                <div className="flex flex-col">
                    <span className="text-indigo-800 text-md md:text-lg font-semibold">
                        Beat the competition
                    </span>
                    <span className="text-sm md:text-md">
                        Our tested resume templates are designed to make you more attractive to recruiters.
                    </span>
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <div>
                    <img className="w-20 h-12 object-contain" src={assets.get_paid} alt="better resume approach"/>
                </div>
                <div className="flex flex-col">
                    <span className="text-indigo-800 text-md md:text-lg font-semibold">
                        Get paid more
                    </span>
                    <span className="text-sm md:text-md">
                        A higher salary begins with a strong resume. Our salary analyzer tells you if your job offer is competitive (or not).
                    </span>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default ResumeHeighlight