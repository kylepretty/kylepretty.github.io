import fsae from './/img/fsae/fsae.png'
import dsp from './/img/dsp/dsp.png'
import amp from './/img/amp/amp.png'
import commons1 from './/img/commons/commons.jpeg'
import port from './/img/port.png'

export default function Projects() {
    return(
        <div id='projects' className='bg-gradient-to-tr from-emerald-500 to-violet-500 min-h-screen'>
            <div className="mx-auto py-32 sm:py-48 lg:py-56 max-w-6xl">
                <div className="text-left">
                <h1 className="m-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    My Projects
                </h1>
                <p className="m-4 text-lg font-bold leading-8 text-white">
                    Here's some projects that I've worked on.
                </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mx-2">
                    <img className="m-4 rounded-lg shadow-lg shadow-gray-900/20" src={commons1} alt=''></img>
                    <p className="font-bold leading-8 text-white">Beginner's Soldering Kit</p>
                    <p className="leading-8 text-white text-sm">The Commons, MUN</p>
                    <p className="leading-8 text-gray-200 text-sm">Winter 2024</p>
                    <p className="leading-8 text-white">Designed, simulated and prototyped a PCB for a 555-based toy-piano,
                         with the goal of teaching beginners how to solder through-hole components on a PCB. Prototyping was completed on a CNC mill, 
                         and a student workshop was hosted to test the implementation.</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">KiCad</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">LTSpice</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">FlatCAM</p>
                    </div>
                    <div className="mx-2">
                    <img className="m-4 rounded-lg shadow-lg shadow-gray-900/20" src={fsae} alt=''></img>
                    <p className="font-bold leading-8 text-white">Formula SAE Pedal Box</p>
                    <p className="leading-8 text-white text-sm">Memorial FSAE</p>
                    <p className="leading-8 text-gray-200 text-sm">Spring 2023</p>
                    <p className="leading-8 text-white">Designed and simulated a pedal box for a Formula SAE racecar, 
                        meeting and exceeding the Formula SAE 2023 Rules.
                    </p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">Solidworks</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">Ansys</p>
                    </div>
                    <div className="mx-2">
                    <img className="m-4 rounded-lg shadow-lg shadow-gray-900/20" src={amp} alt=''></img>
                    <p className="font-bold leading-8 text-white">Automotive Class-D Amplifier</p>
                    <p className="leading-8 text-white text-sm">Personal Project</p>
                    <p className="leading-8 text-gray-200 text-sm">Jan 2024 - Present</p>
                    <p className="leading-8 text-white">Designed a 450-watt peak, ultra-low distortion amplifier, based on the TPA3255 IC. The implementation includes custom 6.5 - 17V input to 12V and 51V output DC/DC power supplies, reverse voltage protection and high-to-low level signal conversion.
                    </p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">KiCad</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">PSpice</p>
                    </div>
                    <div className="mx-2">
                    <img className="m-4 rounded-lg shadow-lg shadow-gray-900/20" src={dsp} alt=''></img>
                    <p className="font-bold leading-8 text-white">8-Channel Digital Signal Processor</p>
                    <p className="leading-8 text-white text-sm">Personal Project</p>
                    <p className="leading-8 text-gray-200 text-sm">Jan 2024 - Present</p>
                    <p className="leading-8 text-white">Designed a digital signal processing device based on the ADAU1462 audio processor, intending to perform DSP algorithms on an audio signal to restore and improve sound quality. Input and output signals are processed through Asahi Kasei 32-bit AD and DA converters via SPI. The audio processor will interface with a Nordic nRF52840 for bluetooth audio input and algorithm control.
                    </p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">KiCad</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">PSpice</p>
                    </div>
                    <div className="mx-2">
                    <img className="m-4 rounded-lg shadow-lg shadow-gray-900/20" src={port} alt=''></img>
                    <p className="font-bold leading-8 text-white">Portfolio Website</p>
                    <p className="leading-8 text-white text-sm">Personal Project</p>
                    <p className="leading-8 text-gray-200 text-sm">Summer 2024</p>
                    <p className="leading-8 text-white">Created this website to demonstrate my projects and skills.
                    </p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">React</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">Tailwind</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">GitHub Pages</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">JavaScript</p>
                    </div>
                    <div className="mx-2">
                    <p className="font-bold leading-8 text-white">E-Commerce Website</p>
                    <p className="leading-8 text-white text-sm">Local Small Business</p>
                    <p className="leading-8 text-gray-200 text-sm">Spring 2023</p>
                    <p className="leading-8 text-white">Ongoing design of an E-Commerce website for a local small business.
                    </p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">Django</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">Vue</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">Stripe</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">SQLite</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">Tailwind</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">Python</p>
                    <p className="text-center text-sm m-1 py-2 px-4 rounded-full bg-gray-700/50 text-gray-200 shadow-md shadow-gray-900/10 inline-flex items-center gap-2.5">JavaScript</p>
                    </div>
                </div>
            </div>
        </div>
    )
}