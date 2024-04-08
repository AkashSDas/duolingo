import {
    ClerkLoading,
    ClerkLoaded,
    SignedIn,
    UserButton,
    SignedOut,
    SignInButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Loader } from "lucide-react";
import { Button } from "@app/components/ui/button";

export function Header(): React.JSX.Element {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
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

                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>

                <ClerkLoaded>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>

                    <SignedOut>
                        <SignInButton
                            mode="modal"
                            afterSignInUrl="/learn"
                            afterSignUpUrl="/learn"
                        >
                            <Button size="lg" variant="ghost">
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    );
}
