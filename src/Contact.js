export default function Contact() {
    return(
        <div id='contact' className='bg-white min-h-screen'>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-left">
                <h1 className="m-4 text-4xl font-bold tracking-tight text-black sm:text-6xl">
                    Contact Me
                </h1>
                <p className="m-4 text-lg font-bold leading-8 text-black">
                    Send me an email at klpretty@mun.ca.
                </p>
                <div className="m-2">
                <a
                    href="mailto:klpretty@mun.ca"
                    class="align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 px-6 rounded-full bg-gradient-to-bl from-emerald-500 to-violet-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] inline-flex items-center gap-2.5"
                    type="button">
                    Email
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </a>
                </div>
                </div>
            </div>
    </div>
    )
}