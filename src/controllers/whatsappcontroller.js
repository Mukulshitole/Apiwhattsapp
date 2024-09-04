const Verifytoken = (req , res) =>{

    try{
    var acsessToken = "HGKSAHVDGHJASKJ900505GDJA"; // i created my own token for testing 
    var token = req.query("hub.verify_token");
    }catch(e){
        res.status(400).send();
    }



    res.send("hi verifyingtoken");
}

const ReceivedMessage = (req , res) => {
    res.send("hello received ");
}

module.exports ={ //with the help of these we can call this function in router
    Verifytoken,
    ReceivedMessage,
}