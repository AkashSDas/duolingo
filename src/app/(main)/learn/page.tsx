import { FeedWrapper } from "@app/components/feed-wrapper";
import { StickyWrapper } from "@app/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@app/components/user-progress";
import { getUserProgress } from "@app/db/queries";
import { redirect } from "next/navigation";

export default async function LearnPage(): Promise<React.JSX.Element> {
    const userProgress = await getUserProgress();

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={{
                        title: "Spanish",
                        imageSrc: "/es.svg",
                    }}
                    heart={5}
                    points={100}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>

            <FeedWrapper>
                <Header title="Spanish" />
            </FeedWrapper>
        </div>
    );
}
