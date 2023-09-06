export default function now(req,res){
    const date = new Date();
    const format = date.toDateString();

    res.status(200).json({now :format})
}