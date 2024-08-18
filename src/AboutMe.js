import kyle from './/img/IMG_1450.JPG'

export default function AboutMe() {
    return(
        <div id='aboutme' className='bg-white min-h-screen'>
            <div className="flex mx-auto max-w-6xl py-32 sm:py-48 lg:py-56 flex-col md:flex-row">
                <img className="m-4 max-w-xs rounded-xl shadow-xl shadow-gray-900/50" src={kyle} alt=''></img>
                <div className="text-left m-4">
                <h1 className="m-4 text-4xl font-bold tracking-tight text-black sm:text-6xl">
                    About Me
                </h1>
                <p className="m-4 text-lg font-bold leading-8 text-black">
                    I am currently enrolled in the Bachelor's of Computer Engineering Co-op program at Memorial University of Newfoundland. I have an interest and various skills in circuit design, embedded and full stack development, and computer-aided design.
                </p>
                <p className="m-4 text-lg font-bold leading-8 text-black">
                    When I'm not working on my various projects, I enjoy playing team-based and simulation video games, playing and writing music, and working on my car.
                </p>
                </div>
            </div>
    </div>
    )
}