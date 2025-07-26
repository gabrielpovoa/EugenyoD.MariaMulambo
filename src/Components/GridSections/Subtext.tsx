type Props = {
    content:string;
    section:string
}

export const Subtext = ({content,section}:Props) => {
    return (
        <div id={section}>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-100 font-serif mb-6">
                {content}
            </p>
        </div>
    )
}