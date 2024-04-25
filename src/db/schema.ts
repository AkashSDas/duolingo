import { relations } from "drizzle-orm";
import { pgTable, uuid, text, timestamp, integer } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
    id: uuid("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const userProgress = pgTable("user_progress", {
    userId: text("user_id").primaryKey(),
    userName: text("user_name").notNull().default("User"),
    userImageSrc: text("user_image_src").notNull().default("/mascot.svg"),
    activeCourseId: uuid("active_course_id").references(() => courses.id, {
        onDelete: "cascade",
    }),
    hearts: integer("hearts").notNull().default(5),
    points: integer("points").notNull().default(0),
});

export const coursesRelations = relations(courses, ({ many }) => {
    return {
        userProgress: many(userProgress),
    };
});

export const userProgressRelations = relations(userProgress, ({ one }) => {
    return {
        activeCourse: one(courses, {
            fields: [userProgress.activeCourseId],
            references: [courses.id],
        }),
    };
});
