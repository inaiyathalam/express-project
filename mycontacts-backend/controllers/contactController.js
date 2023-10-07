const asyncHandler = require("express-async-handler")

//@desc Get all Contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async(req,res) => {
    res.status(200).json({message:"Get all contacts"});
})

//@desc Get all Contacts
//@route GET /api/contacts
//@access public
const getContact = asyncHandler( async(req,res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
})

//@desc Create New Contacts
//@route POST /api/contacts
//@access public
const createContact =asyncHandler( async(req,res) => {
    console.log("The request body is : ", req.body)
    const {name, email , mobile} = req.body;
    if (!name || !email || !mobile){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message:"Create Contact"});
}
)
//@desc Update New Contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact =asyncHandler( async(req,res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`});
})

//@desc Delete New Contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact =asyncHandler( async(req,res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
})
module.exports = {getContact,getContacts ,createContact, updateContact, deleteContact}