const express = require("express");
const router = express.Router();
const { UserVisit, User } = require("../models");

router.get("/mostvisits", async (req, res, next) => {
    try {
        let users = await User.findAll({
            attributes: ["name", "id"]
        })
        let results = []
        for (let user of users) {
            let where = {
                userId: user.id
            }
            let uservisits = await UserVisit.findAndCountAll({
                where,
                attributes: ["pagename"]
            })
            results = [
                ...results,
                {
                    User: user.name,
                    TotalVisit: uservisits.count,
                    Pages: uservisits.rows
                }
            ]
        }

        results = results.sort(function (a, b) {
            return b.TotalVisit - a.TotalVisit
        })

        return res.json({
            data: {
                results
            }
        })
    } catch (err) {
        return res.json({
            success: false,
            message: err.message,
        });
    }
})

module.exports = router;