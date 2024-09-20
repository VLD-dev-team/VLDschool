export default function ShortcutButton({ text, icon }: { text: string, icon: string }) {
    return (
        <div className="flex items-center py-3 px-6 gap-2 bg-[var(--primary)] rounded-full text-[var(--on-primary)] h-full overflow-hidden">
            <span className="basis-3 md:basis-auto material-symbols-rounded text-[20px] text-[--on-primary]">{icon}</span>
            <p className="break-words">{text}</p>
        </div>
    )
}