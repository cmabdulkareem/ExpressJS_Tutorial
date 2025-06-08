const getAdminPage = (req, res) => {
    res.status(200).json({message: 'Admin Homepage'})
}

const getProductsPage = (req, res) => {
    res.status(200).json({message: 'Products Page'})
}

export default {
    getAdminPage,
    getProductsPage
}