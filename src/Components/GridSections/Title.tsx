type Props = {
    heading:string;
    section:string
}

export const Title = ({heading,section}:Props) => {
    return(
        <div id={section} className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full fill-current text-purple-400"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z" />
                </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider uppercase text-white font-serif">
                {heading}
            </h1>
        </div>
    )
}