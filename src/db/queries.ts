import { cache } from "react";
import { db } from "./drizzle";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { userProgress } from "./schema";

export const getCourses = cache(async function () {
    const data = await db.query.courses.findMany();
    return data;
});

export const getUserProgress = cache(async function () {
    const { userId } = auth();
    if (!userId) return null;

    console.log({ userId });
    const data = await db.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
        with: {
            activeCourse: true,
        },
    });

    return data;
});
