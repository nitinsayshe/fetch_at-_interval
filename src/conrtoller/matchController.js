const axios = require("axios")
const mongoose = require("mongoose");
const model = require("../models/model");



exports.getData = async (req, res) => {
    // function to fetch and store the data in mongodb    
    async function fetchData(){ 
            let data;
            //fetch data from api using axios
        await axios.get('http://143.198.116.255:7000/match-list?token=nit456789plijnyhbfvrdcsdfghj').then(async (resp) => {
            data = resp.data.result.result
        });

        for (let i = 0; i < data.length; i++) {
            let findEvent=await model.findOneAndUpdate({EventId: data[i]["eventId"]},{EventName: data[i]["eventName"],MarketId: data[i]["marketId"]})
            console.log(findEvent)
            if(!findEvent){
                await model.create({EventId: data[i]["eventId"],
                EventName: data[i]["eventName"],
                MarketId: data[i]["marketId"]})
                console.log(`Created data...${i+1}`)
            }else{
                console.log(`Updating data...${i+1}`)
            }
            
        }
        }
        setInterval(fetchData,100000,"Loading Data....")
}
