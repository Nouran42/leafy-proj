package com.example.graduationProject.Controller;

import com.example.graduationProject.Entity.Product;
import com.example.graduationProject.Entity.User;
import com.example.graduationProject.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {
    @Autowired
    ProductService productService;

    @PostMapping("/products/create")
    public Product addNewProduct(@RequestBody Product product){
        return productService.addNewProduct(product);
    }

    @PatchMapping("products/addImages/{productId}")
        public Product addProductImages(@PathVariable int productId, @RequestParam(required = true) MultipartFile productImage,
                                    @RequestParam(required = false) MultipartFile additionalProductImage) throws IOException {
        return productService.addProductImages(productId, productImage, additionalProductImage);
    }
    @GetMapping("/products/all")
    public List<Product> getAllProducts(@RequestParam(value = "category", required = false) String category) {
        if (category != null && !category.isEmpty()) {
            return productService.getProductsByCategory(category);
        } else {
            return productService.fetchAllProducts();
        }
    }



    @GetMapping("/get/products/{productId}")
    public Optional<Product> getProductById(@PathVariable("productId") int productId){
        return productService.getProductById(productId);
    }


    @PutMapping("/update/products/{productId}")
    public Product updateProduct(@PathVariable ("productId") int productId,  @RequestBody  Product product){
        product.setProductId(productId);
        return productService.updateProduct(productId , product);

    }
    @DeleteMapping("/delete/products/{productId}")
    public boolean deleteProduct(@PathVariable ("productId") int productId){
        return productService.deleteProduct(productId);
    }

//    @GetMapping("/search")
//    public ResponseEntity<List<Product>> searchProducts(
//             @RequestParam(required = false) String productName,
//            @RequestParam (required = false) String category) {
//        List<Product> products = productService.searchProducts(productName, category);
//        return ResponseEntity.ok(products);
//    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProducts(@RequestParam String searchTerm) {
        List<Product> products;
        if (searchTerm.contains(",")) {
            // Invalid request if searchTerm contains a comma
            return ResponseEntity.badRequest().body(null);
        }
        if (searchTerm != null && !searchTerm.trim().isEmpty()) {
            products = productService.searchProducts(searchTerm, searchTerm);
        } else {
            products = productService.searchProducts(null, null);
        }
        return ResponseEntity.ok(products);
    }

}
