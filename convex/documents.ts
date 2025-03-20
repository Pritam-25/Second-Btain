import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Doc, Id } from "./_generated/dataModel";

// Get all tasks
export const get = query({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Not authenticated");
        }

        const documents = await ctx.db.query<Doc>("documents").collect();

        return documents;
    }
})


// Create a new task with the given text
export const createTask = mutation({
    args: {
        title: v.string(),
        parentDocument: v.optional(v.id("documents")),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Not authenticated");
        }

        const userId = identity.subject;

        // Insert the new task into the database
        const document = await ctx.db.insert("documents", {
            title: args.title,
            userId,
            parentDocument: args.parentDocument,
            isArchived: false,
            isPublished: false,
        });
        return document
    },

});