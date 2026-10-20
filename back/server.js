const express = require("express")
const app = express();
require('dotenv').config()
const cors = require('cors')
app.use(cors()) //allowing all regison future it need to be mast chanegs 
app.use(express.json())
const getData = require("./functions/idExtracter");
const timeData = require("./functions/timeIdextractor");
const timevalue = require("./functions/totalTime");



app.get("/", (req, res) => {
    res.send("server started")
})
app.post("/editedplaylist", async (req, res) => {
    try {
        const data = req.body.array
        const timeDataid = await timeData(data);
        const totaltime = await timevalue(timeDataid)
        res.send(totaltime)
    } catch (error) {
        console.log(error.message)
    }


})

app.post('/', async (req, res) => {

    try {
        const url = req.body.youtube_url;
        const list_id = new URL(url).searchParams.get("list");

        if (req.body.full_playlist) {
            console.log(req.body.youtube_url)
            const data = await getData(list_id)

            const timeDataid = await timeData(data);
            const totaltime = await timevalue(timeDataid)
            res.send(totaltime)
            // res.json(totaltime)

        }
        else {
            console.log(req.body.youtube_url)
            const data = await getData(list_id)
            // const timeDataid = await timeData(data);
            res.send(data)
            // res.json(300).send(data)
        }

    } catch (error) {
        console.log(error.message)
    }
    // first we need to check all video length is need or not............ok 

})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})