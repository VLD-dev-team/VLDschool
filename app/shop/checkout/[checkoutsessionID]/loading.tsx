import Loader from "../../buy/[productID]/components/Loader";

export default function Loading() {
    return (
        <div className="md:py-10 h-full">
            <div className="h-full grid place-items-center bg-white rounded-xl md:overflow-scroll shadow-2xl">
                <div className="flex flex-col items-center gap-2"><Loader size={8} stroke={24} color={"var(--neutral)"}></Loader><p>Chargement de Stripe</p></div>
            </div>
        </div>
    )
}