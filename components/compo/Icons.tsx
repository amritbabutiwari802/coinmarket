const ChevaronUp = (props: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
            />
        </svg>
    )
}

const ChevaronDown = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
)

const Star = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
    </svg>
)

const Chart = (props: any) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
    </svg>
)

export default ChevaronUp

const HSlider = (props: any) => (
    <svg
        {...props}
        viewBox="0 0 256 256"
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M83.99951,87.99353h-.00012l-44-.001a4,4,0,0,1,.00012-8h.00012l44,.001a4,4,0,0,1-.00012,8Zm136,84a4.00019,4.00019,0,0,1-4,4H191.65967a23.99507,23.99507,0,0,1-47.32031,0H39.99951a4,4,0,0,1,0-8H144.33936a23.99507,23.99507,0,0,1,47.32031,0h24.33984A4.0002,4.0002,0,0,1,219.99951,171.99353Zm-36,0a16,16,0,1,0-16,16A16.01833,16.01833,0,0,0,183.99951,171.99353Zm-104-88a23.99775,23.99775,0,0,1,47.66016-4l88.33984-.001a4,4,0,0,1,0,8l-88.33984.001a23.99775,23.99775,0,0,1-47.66016-4Zm8,0a16,16,0,1,0,16-16A16.01833,16.01833,0,0,0,87.99951,83.99353Z" />
    </svg>
)

const Table_X = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fill-rule="evenodd"
            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
            clip-rule="evenodd"
        />
    </svg>
)

const ArrowLeft = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
            clip-rule="evenodd"
        />
    </svg>
)

const ArrowRight = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
            clipRule="evenodd"
        />
    </svg>
)

export { Star, Chart, ChevaronDown, HSlider, Table_X, ArrowLeft, ArrowRight }
