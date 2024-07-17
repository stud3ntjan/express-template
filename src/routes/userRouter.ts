// src/routes/userRoutes.ts
import { Router, Request, Response } from "express";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */

/**
 * @swagger
 * /user/{userId}:
 *   get:
 *     summary: Get a user by userId
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: The user information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get("/:userId", (req: Request, res: Response) => {
  const { userId } = req.params;

  // Mock user data
  const user = {
    userId,
    name: "John Doe",
    email: "john.doe@example.com",
  };

  res.status(200).json(user);
});

export default router;
