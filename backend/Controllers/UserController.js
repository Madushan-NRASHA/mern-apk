const Project = require("../Modules/UserModel");

// Data display
const getAllData = async (req, res, next) => {
    let projects;
    try {
        projects = await Project.find();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server Error" });
    }

    if (!projects || projects.length === 0) {
        return res.status(404).json({ message: "Data Not Found" });
    }
    return res.status(200).json({ projects });
}

// Data insert
const addusers = async (req, res, next) => {
    const { projectName, LangName, GitLink, CreateDate } = req.body;

    let newProject;
    try {
        newProject = await Project.create({ projectName, LangName, GitLink, CreateDate });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error Creating Project" });
    }

    return res.status(201).json({ newProject });
}
// Get by id
const GetbyId=async(req,res,next)=>{
    const id=req.params.id;
    let newProject;
    try{
        newProject=await Project.findById(id);
    }catch(err){
        console.log(err);
    }
    if (!newProject) {
        return res.status(400).json({message:"Data not Exist"});
    }
    return res.status(200).json({newProject});
}
// Update by id
const UpdateUser=async(req,res,next)=>{
    const id=req.params.id;
    const { projectName, LangName, GitLink, CreateDate } = req.body;
    let newProject;
    try{
        newProject=await Project.findByIdAndUpdate(id, 
            { projectName:projectName, LangName:LangName, GitLink:GitLink, CreateDate:CreateDate});
        newProject=await newProject.save();
    }catch(err){
        console.log(err)
    }
    if (!newProject) {
        return res.status(400).json({message:"Data not Exist"});
    }
    return res.status(200).json({newProject});
}
// Delete User
const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let newProject;
    try {
        // Correcting the typo to use the correct model name
        newProject = await Project.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error Deleting Project" });
    }
    
    if (!newProject) {
        return res.status(400).json({ message: "Data not Exist" });
    }
    
    return res.status(200).json({ newProject });
}
module.exports = {
    getAllData,
    addusers,
    GetbyId,
    UpdateUser,
    deleteUser
}
