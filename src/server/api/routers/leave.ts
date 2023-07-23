import { useUser } from "@clerk/nextjs";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const leaveRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.leave.findMany({
      take: 3,
      orderBy: [
        {
          createdDate: "desc",
        },
      ],
    });
  }),

  create: publicProcedure
    .input(
      z.object({
        startDate: z.date(),
        endDate: z.date(),
        reason: z.string().min(1).max(280),
        userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.leave.create({
        data: {
          startDate: input.startDate,
          endDate: input.endDate,
          reason: input.reason,
          userId: input.userId,
        },
      });

      return post;
    }),
});
