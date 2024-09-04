import AuthForm from "@/app/auth/components/AuthForm";
import { auth } from "@/auth"
import { redirect } from "next/navigation";

export default async function BuyPage({ params }: { params: { productID: string } }) {
    const session = await auth();

    if (session) {
        
    }

    return (
        <div>
            <AuthForm></AuthForm>
        </div>
    )
}