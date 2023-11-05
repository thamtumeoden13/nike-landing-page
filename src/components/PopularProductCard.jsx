import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex-1 flex flex-col w-full max-sm:w-full">
            <img
                src={imgURL}
                alt={name}
                className="w-[280]px h-[280px]"
            />
            <div className="mt-8 flex justify-start gap-2.5">
                <img
                    src={star}
                    alt="rating"
                    width={24}
                    height={24}
                />
                <p className="leading-normal text-xl font-montserrat text-slate-gray">(4.5)</p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">{name}</h3>
            <p className="mt-2 text-xl leading-normal font-montserrat font-semibold text-coral-red">{price}</p>
        </div>
    )
}

export default PopularProductCard