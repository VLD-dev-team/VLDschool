import Loader from "../../buy/[productID]/components/Loader";

export default function Loading() {
    return (
        <div className="w-full h-full grid place-items-center">
            <div className="flex flex-col items-center gap-2"><Loader size={8} stroke={24} color={"var(--neutral)"}></Loader><p>Finalisation du paiement</p></div>
        </div>
    )
}