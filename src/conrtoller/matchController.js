const axios = require("axios")
const mongoose = require("mongoose");
const model = require("../models/model");



exports.getData = async (req, res) => {
        async function fetchData(){
            let data;
        await axios.get('http://143.198.116.255:7000/match-list?token=nit456789plijnyhbfvrdcsdfghj').then(async (resp) => {
            data = resp.data.result.result
        });
        for (let i = 0; i < data.length; i++) {
            const resorce = new model({
                EventId: data[i]["eventName"],
                EventName: data[i]["eventName"],
                MarketId: data[i]["marketId"]
            })
            resorce.save()
            console.log("Saving ....")
        }
        }
        setInterval(fetchData,50000)
        // return res.send(data)
}
