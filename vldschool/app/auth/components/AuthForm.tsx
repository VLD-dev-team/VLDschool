import EmailForm from "./EmailForm";
import GoogleAuthButton from "./GoogleForm";

export default function AuthForm() {
    return (
        <div className="w-full">
            <GoogleAuthButton />
            <EmailForm />
        </div>
    )
}