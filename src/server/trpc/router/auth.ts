import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import bcrypt from "bcryptjs";

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  signUp: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
        role: z.enum(["artist", "curator", "collector"]),
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const hashedPassword = await bcrypt.hash(input.password, 12);
      return await ctx.prisma.user.create({
        data: {
          role: input.role,
          email: input.email,
          name: input.name,
          password: hashedPassword,
        },
      });
    }),
});
