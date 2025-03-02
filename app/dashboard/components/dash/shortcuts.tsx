import Link from "next/link";
import ShortcutButton from "../shortcutButton";
import { getLastViewedChapterURL } from "@/functions/courses/getLastViewedChapter";

export default async function Shortcuts() {

    const LastViewedChapter = await getLastViewedChapterURL();

    return (
        <div className="">
            <p className="uppercase text-sm pb-4">Raccourcis rapides</p>
            <div className="flex flex-wrap md:flex gap-3">
                <Link href={LastViewedChapter ?? "/dashboard/"}>
                    <ShortcutButton icon={"history"} text={"Reprendre mon dernier cours"}></ShortcutButton>
                </Link>
                <Link href={"/privatelessons"}>
                    <ShortcutButton icon={"contact_phone"} text={"Calendrier des visioconférences"}></ShortcutButton>
                </Link>
            </div>
        </div>
    )
}