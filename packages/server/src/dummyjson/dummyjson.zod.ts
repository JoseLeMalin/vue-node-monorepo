import { z } from "zod";

export const CommentCreateSchema = z.object({
  id: z.number(),
  body: z.string(),
  postId: z.number(),
  user: z.object({
    id: z.number(),
    username: z.string(),
  }),
  title: z.string().optional(),
  //idqsdqsd: z.number(),
  //titleqdqsd: z.string(),
});

export type CommentCreate = z.infer<typeof CommentCreateSchema>;
