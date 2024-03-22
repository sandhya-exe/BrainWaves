

//check if demo user
exports.isDemo = async (req, res, next)=> {
    console.log(req.user.email);
   
    if (req.user.email === "sandhya825.hitece2020@gmail.com" || req.user.email === "sandhyarani161002@gmail.com") {
        return res.status(401).json({
            success: false,
            message: "This is a Demo User",
        });
    }
    next();
}