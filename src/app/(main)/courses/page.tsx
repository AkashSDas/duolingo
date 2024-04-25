import { getCourses, getUserProgress } from "@app/db/queries";
import { List } from "./list";

export default async function CoursePage(): Promise<React.JSX.Element> {
    const [courses, userProgress] = await Promise.all([
        getCourses(),
        getUserProgress(),
    ]);

    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">
                Language Courses
            </h1>

            <List
                courses={courses}
                activeCourseId={userProgress?.activeCourseId}
            ></List>
        </div>
    );
}
