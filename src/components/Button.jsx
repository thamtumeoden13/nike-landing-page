
const Button = ({ lable, iconURL, backgroundColor, borderColor, textColor }) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 
            border font-montserrat leading-none rounded-full 
            ${backgroundColor
                    ? `${backgroundColor} ${borderColor} ${textColor}`
                    : 'bg-coral-red text-white border-coral-red'
                }`
            }
        >
            {lable}

            {iconURL && <img
                src={iconURL}
                alt="arrow right icon"
                className="ml-2 roudned-full w-5 h-5"
            />}
        </button>
    )
}

export default Button