// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { contractRouter } from "./contract/contrat";
import { authRouter } from "./auth";

export const appRouter = router({
  contract: contractRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
