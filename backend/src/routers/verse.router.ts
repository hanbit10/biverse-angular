import { Router } from "express";
import { sample_tags, sample_verse } from "../data";
import asyncHandler from "express-async-handler";
import { sample_users } from "../data";
import { VerseModel } from "../../models/verse.model";
const router = Router();

router.get(
  "/seed",
  asyncHandler(async (req, res) => {
    const versesCount = await VerseModel.countDocuments();
    if (versesCount > 0) {
      res.send("Seed is already done!");
      return;
    }

    await VerseModel.create(sample_verse);
    res.send("Seed Is Done!");
  })
);

//shows the text in URL: http://localhost:5000/api/verses
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const verses = await VerseModel.find();
    res.send(verses);
  })
);

//This is the get api of search Term.
//It has the same built as in frontend
//cuz of :searchTerm use params
router.get(
  "/search/:searchTerm",
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, "i");
    // const searchTerm = req.params.searchTerm;
    // const verses = sample_verse.filter((verse) =>
    //   verse.name?.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    const verses = await VerseModel.find({ name: { $regex: searchRegex } });
    res.send(verses);
  })
);

router.get(
  "/tags",
  asyncHandler(async (req, res) => {
    const tags = await VerseModel.aggregate([
      {
        $unwind: "$tags",
      },
      {
        $group: {
          _id: "$tags",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
          count: "$count",
        },
      },
    ]).sort({ count: -1 });

    const all = {
      name: "All",
      count: await VerseModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })

  //2 verses 3 tags, unwind tags => 6 verses tags 1 item
);

router.get(
  "/tags/:tagNamee",
  asyncHandler(async (req, res) => {
    // const tagName = req.params.tagNamee;
    // const verses = sample_verse.filter((verse) => verse.tags?.includes(tagName));
    const verses = await VerseModel.find({ tags: req.params.tagNamee });
    res.send(verses);
  })
);

router.get(
  "/:verseIDD",
  asyncHandler(async (req, res) => {
    const verses = await VerseModel.findById(req.params.verseIDD);
    res.send(verses);
  })
);

export default router;
