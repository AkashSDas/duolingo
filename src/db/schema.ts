import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
    id: uuid("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
