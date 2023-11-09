export default function Heading({ children }) {
    return (
        <h1 className={"font-bold font-roboto text-emerald-500 pb-3 text-5xl text-center"} >
            {children}
        </h1>
    );
}