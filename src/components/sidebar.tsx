import { cn } from "@app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;
};

export default function Sidebar(props: Props): React.JSX.Element {
    return (
        <div
            className={cn(
                "flex flex-col h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2",
                props.className
            )}
        >
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image
                        src="/mascot.svg"
                        alt="Duolingo Mascot"
                        height={40}
                        width={40}
                    />

                    <span className="text-2xl font-extrabold text-green-600 tracking-wide">
                        Duolingo
                    </span>
                </div>
            </Link>

            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
                <SidebarItem
                    label="Leaderboard"
                    href="/leaderboard"
                    iconSrc="/leaderboard.svg"
                />
                <SidebarItem
                    label="quests"
                    href="/quests"
                    iconSrc="/quests.svg"
                />
                <SidebarItem label="shop" href="/shop" iconSrc="/shop.svg" />
            </div>

            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    );
}
