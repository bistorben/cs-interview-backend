import AlbumModel from "../models/albumModel.js";

const addAlbum = async (req, res, next) => {
  try {
    const album = await AlbumModel.create(req.body);
    res.send(album);
  } catch (err) {
    next(err);
  }
};

const getAllAlbum = async (req, res, next) => {
  try {
    const allAlbum = await AlbumModel.find({});
    res.send(allAlbum);
  } catch (err) {
    next(err);
  }
};

const getAlbumById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const album = await AlbumModel.findById(id);

    if (!album) {
      const err = new Error("There is no album with this id");
      err.status = 404;
      throw err;
    }

    res.status(200).send(album);
  } catch (err) {
    next(err);
  }
};

const editAlbumById = async (req, res, next) => {
  const newAlbumData = req.body;
  const { id } = req.params;
  try {
    const updatedAlbum = await AlbumModel.findByIdAndUpdate(id, newAlbumData, {
      new: true,
    });

    if (!updatedAlbum) {
      const err = new Error("There is no album with this id");
      err.status = 404;
      throw err;
    }

    const updatedAlbumList = await AlbumModel.find({});

    res.status(200).send({ updatedAlbum, updatedAlbumList });
  } catch (err) {
    next(err);
  }
};

const rateAlbum = async (req, res, next) => {
  const { id, newRate } = req.body;
  console.log(typeof newRate);
  try {
    const album = await AlbumModel.findById(id);

    if (!album) {
      const err = new Error("There is no Album with this id");
      err.status = 404;
      throw err;
    }

    const oldRate = album.albumRate.rate;
    const oldCount = album.albumRate.count;
    const newAverageRate = (oldRate * oldCount + newRate) / (oldCount + 1);

    await AlbumModel.findByIdAndUpdate(id, {
      $inc: { "albumRate.count": 1 },
      $set: { "albumRate.rate": newAverageRate },
    });

    const allAlbum = await AlbumModel.find({});

    res.status(200).send(allAlbum);
  } catch (err) {
    next(err);
  }
};

const deleteAlbum = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const album = await AlbumModel.findByIdAndDelete(id);

    if (!album) {
      const err = new Error(`There is no album with the id: ${id}`);
      err.status = 404;
      throw err;
    }

    const updatedAlbumList = await AlbumModel.find({});
    res.status(200).send(updatedAlbumList);
  } catch (err) {
    next(err);
  }
};

export {
  addAlbum,
  getAllAlbum,
  rateAlbum,
  getAlbumById,
  deleteAlbum,
  editAlbumById,
};
