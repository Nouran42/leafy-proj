package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.Product;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ProductService {

    Product addNewProduct(Product product);

    List<Product> fetchAllProducts();

    Optional<Product> getProductById(int productId);

    Product updateProduct(int productId, Product product);

    boolean deleteProduct(int productId );


    Product addProductImages(int productId, MultipartFile productImage, MultipartFile additionalProductImage) throws IOException;


    List<Product> getProductsByCategory(String category);
    public List<Product> searchProducts(String productName , String category);
}
