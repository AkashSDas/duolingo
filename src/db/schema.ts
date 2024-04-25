import { pgTable, uuid, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
    id: uuid("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull(),
});
