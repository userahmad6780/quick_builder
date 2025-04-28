import { Button } from "./ui/button"

function TryQuickBuilder() {
  return (
    <div className="bg-blue-100 px-4 sm:px-[15%] py-5 sm:py-16 mt-10 flex flex-col items-center justify-center ">
        <h1 className="text-2xl md:text-5xl font-semibold mb-5 md:mb-12 text-center">Try quick builder <br/> for resume builder now</h1>
        <div className="mt-2">
            <Button className='text-sm lg:text-xl font-medium py-4 px-2 md:py-6 md:px-3 bg-blue-500 hover:bg-blue-300'>Create my resume</Button>
        </div>
    </div>
  )
}

export default TryQuickBuilder