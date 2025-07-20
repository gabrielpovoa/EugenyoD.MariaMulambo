interface GridProps {
    reverse?: boolean;
    children: React.ReactNode;
}

export const Grid = ({ reverse = false, children }: GridProps) => {
    return (
        <section
            className={`grid grid-cols-1 lg:grid-cols-2 shadow-inner ${
                reverse ? "lg:flex lg:flex-row-reverse" : ""
            }`}
        >
            {children}
        </section>
    );
};
