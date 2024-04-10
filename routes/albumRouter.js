import express from "express";
import {
  addAlbum,
  deleteAlbum,
  editAlbumById,
  getAlbumById,
  getAllAlbum,
  rateAlbum,
} from "../controllers/albumController.js";

const router = express.Router();

router.route("/").get(getAllAlbum).post(addAlbum);
router.route("/:id").get(getAlbumById);
router.route("/rate").put(rateAlbum);
router.route("/delete/:id").delete(deleteAlbum);
router.route("/edit/:id").put(editAlbumById);

export default router;
