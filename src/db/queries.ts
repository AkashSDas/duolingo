import { cache } from "react";
import { db } from "./drizzle";

export const getCourses = cache(async function () {
    const data = await db.query.courses.findMany();
    return data;
});
