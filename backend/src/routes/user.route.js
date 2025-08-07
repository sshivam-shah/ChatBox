import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  acceptFriendRequest,
  getFriendRequests,
  getMyFriends,
  getOutgoingFriendReqs,
  getRecommendedUsers,
  sendFriendRequest,
} from "../controllers/user.controller.js";

const router = express.Router();

router.use(protectRoute); // Apply protectRoute middleware to all routes in this file

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

router.post("friend-request/:id", sendFriendRequest);
router.put("friend-request/accept:id", acceptFriendRequest);

router.get("/friend- requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);

export default router;
