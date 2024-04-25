"use client";

import { courses } from "@app/db/schema";
import { Card } from "./card";

type Props = {
    courses: (typeof courses.$inferSelect)[];
    activeCourseId: (typeof courses.$inferSelect)["id"];
};

export function List(props: Props) {
    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {props.courses.map((course) => (
                <Card
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imageSrc={course.imageSrc}
                    onClick={() => {}}
                    disabled={false}
                    active={course.id === props.activeCourseId}
                />
            ))}
        </div>
    );
}
