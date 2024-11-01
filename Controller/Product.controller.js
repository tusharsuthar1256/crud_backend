import Product from "../model/product.model.js";


const getAllProducts =  async (req,res) => {
     try {
          const allProducts = await Product.find();

          return res.status(200).json({
               statusCode:200,
               data:allProducts,
               message:"fetched all products data successfully"
          })
     } catch (error) {
          console.log("Error || error while fetching all products!!");
          
     }
}

const getProductById = async (req,res) => {
     const { id } = req.params;

     if (!id) {
          return res.status(400).json({message:"Please provide valid id for fetching that product data"})
     }

     const productId = await Product.findById(id);
     if (!productId) {
          return  res.status(400).json({
               message:"Provide valid Product ID"
          })
     }

     return res.status(200).json({
          statusCode:200,
          data:productId,
          message:"Fetched specific product by ID successfully"
     })
}

const createProduct = async (req, res) => {
    const { name, description, price } = req.body;

    // Check for required fields
    if (!name || !description || !price) {
        return res.status(400).json({ message: "Please provide all the required fields" });
    }

    try {
        // Create a new product
        const newProduct = await Product.create({
            name,
            description,
            price
        });

        return res.status(200).json({
            statusCode: 200,
            data: newProduct,
            message: "Successfully created a new product"
        });
    } catch (error) {
        return res.status(500).json({
            statusCode: 500,
            message: "Error creating product",
            error: error.message
        });
    }
};

const updateProduct = async (req, res) => {
     const { id } = req.params;

     const {name, description, price} = req.body;

     if (!id || !name || !description || !price) {
          return res.status(400).json({message:"Please provide all the required fields"})
     }

     const productById = await Product.findById(id);

     if (!productById) {
          return res.status(400).json({message:"The specified product does not exist"})
     }

     const updatedProduct = await Product.findByIdAndUpdate(
          id,
          {
               name,
               description,
               price
          },
          {
               new: true
          }
     );

     if (!updatedProduct) {
          return res.status(400).json({message:"The specified product could not be updated"})
     }

     return res.status(200).json({ statusCode: 200, data: updatedProduct, message: "Successfully updated the specified product" })
}

const deleteProduct = async (req,res) => {
     const { id } = req.params;

     if (!id) {
          return res.status(400).json({message:"Please provide the required product ID field"})
     }

     const productId = await Product.findById(id);

     if (!productId) {
          return res.status(400).json({message:"The specified product does not exist"})
     }

     const delProduct = await Product.findByIdAndDelete(id);

     return res.status(200).json({
           statusCode: 200, data: productId, message: "Successfully deleted the specified product"
     })
}

export  {
     createProduct,
     updateProduct,
     deleteProduct,
     getAllProducts,
     getProductById
};
