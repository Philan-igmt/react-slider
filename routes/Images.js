const express = require("express");

const route = express.Router();

//getting the model/schema
const Image = require("../models/Images");

//gitting all the images
route.get("/", (req, res) => {
  Image.find().then((all_images) => {
    res.json(all_images);
  });
});

//posting the image
route.post("/", (req, res) => {
  const image = new Image({
    URL: req.body.URL,
    name: req.body.name,
    description: req.body.description,
  });

  image
    .save()
    .then(() => {
      res.status(201).json({
        msg: "successful",
      });
    })
    .catch((err) => {
      res.status(400).json({
        err: err,
      });
    });
});

//updating ALL in the image
route.patch("/:id", async (req, res) => {
  try {
    const update_image = await Image.updateOne(
      { _id: req.params.id },
      {
        $set: {
          URL: requestAnimationFrame.body.URL,
          name: req.body.name,
          description: req.body.description,
        },
      }
    );
    res.json(update_image);
  } catch (error) {
    res.json({ mgs: error });
  }
});
//updatin image URL
route.patch("/:id", async (req, res) => {
  try {
    const update_image = await Image.updateOne(
      { _id: req.params.id },
      {
        $set: {
          URL: requestAnimationFrame.body.URL,
        },
      }
    );
    res.json(update_image);
  } catch (error) {
    res.json({ mgs: error });
  }
});
//updating NAME
route.patch("/:id", async (req, res) => {
  try {
    const update_image = await Image.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
        },
      }
    );
    res.json(update_image);
  } catch (error) {
    res.json({ mgs: error });
  }
});
//updating DESCRIPTION
route.patch("/:id", async (req, res) => {
  try {
    const update_image = await Image.updateOne(
      { _id: req.params.id },
      {
        $set: {
          description: req.body.description,
        },
      }
    );
    res.json(update_image);
  } catch (error) {
    res.json({ mgs: error });
  }
});

module.exports = route;
