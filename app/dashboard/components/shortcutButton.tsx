export default function ShortcutButton({text, icon} : {text: string, icon: string}) {
    return (
        <div className="flex items-center p-3 md:px-6 gap-2 bg-[var(--primary)] rounded md:rounded-full text-[var(--on-primary)]">
            <span className="basis-3 md:basis-auto material-symbols-rounded text-[20px] text-[--on-primary]">{icon}</span>
            <p>{text}</p>
        </div>
    )
}