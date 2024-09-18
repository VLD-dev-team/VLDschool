import Link from "next/link";
import ShortcutButton from "../shortcutButton";
import { DatabaseService } from "@/db";
import { getLastViewedChapterURL } from "@/app/services/courses/getLastViewedChapter";

export default async function Shortcuts() {

    const LastViewedChapter = await getLastViewedChapterURL();

    return (
        <div className="bg-[var(--surface)] shadow rounded p-4 md:p-8 md:w-fit">
            <p className="uppercase text-sm pb-4">Raccourcis rapides</p>
            <div className="grid grid-cols-2 md:flex gap-3">
                <Link href={LastViewedChapter ?? "/dashboard/"}>
                    <ShortcutButton icon={"history"} text={"Reprendre la lecture"}></ShortcutButton>
                </Link>
                <Link href={"/privatelessons"}>
                    <ShortcutButton icon={"contact_phone"} text={"Calendrier des visioconférences"}></ShortcutButton>
                </Link>
            </div>
        </div>
    )
}