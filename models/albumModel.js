import { Schema, model } from "mongoose";

const albumSchema = new Schema({
  albumName: { type: String, required: true },
  artistName: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  infoText: { type: String, required: true },
  albumRate: {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
    rate: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
});

const AlbumModel = model("Album", albumSchema);

export default AlbumModel;
