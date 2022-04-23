
const Category = require('../models/Category');
exports.create = async (req, res) => {
    console.log(req.user);

   const { category} = req.body;
   try {

    const categoryExist = await Category.findOne({category})
    if(categoryExist) {
        return res.status(400).json({
            errorMessage: `${category} өмнө бүртгэгдсэн байна`
        })
    }

    let newCategory = new Category();
    newCategory.category = category;

    newCategory = await newCategory.save();

    res.status(200).json({
        category: newCategory,
        successMessage: `${newCategory.category} үүсгэгдлээ`
    })

   }catch(err){
       console.log('category үүсгэлтийн алдаа', err);
       res.status(500).json({
           errorMesaage: 'Дахин оролдоно уу',
       });
   }
   
}; 
exports.readAll = async (req, res) => {
    
   try {
   const categories = await Category.find({});
   
   res.status(200).json({
       categories: categories
   });
   

   }catch(err){
       console.log('category get алдаа', err);
       res.status(500).json({
           errorMesaage: 'Дахин оролдоно уу',
       });
   }
   
}; 