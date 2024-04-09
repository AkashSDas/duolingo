import MobileHeader from "@app/components/mobile-header";
import Sidebar from "@app/components/sidebar";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export default function MainGroupLayout(props: Props): React.JSX.Element {
    return (
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex" />
            <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
                <div className="max-w-[1056px] mx-auto pt-6 h-full">
                    {props.children}
                </div>
            </main>
        </>
    );
}
