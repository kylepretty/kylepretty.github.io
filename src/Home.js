export default function Home() {
    return(
        <div id='home' className='bg-gradient-to-bl from-emerald-500 to-violet-500 min-h-screen'>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-left">
                <h1 className="m-4 text-4xl font-bold tracking-tight text-white">
                    Hey there,
                </h1>
                <h1 className="m-4 text-6xl font-bold tracking-tight text-white">
                    I'm Kyle Pretty.
                </h1>
                <p className="m-4 text-lg font-bold leading-8 text-white">
                    Computer Engineering Student at Memorial University of Newfoundland.
                </p>
                <div className="m-2">
                <a
                    href="https://kylepretty.github.io/KylePrettyResume-6.pdf"
                    class="select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm m-2 py-3 px-6 rounded-full bg-white text-black shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] inline-flex items-center gap-2.5"
                    type="button">
                    Download CV
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                    </svg>
                </a>
                </div>
                </div>
            </div>
        </div>
    )
}