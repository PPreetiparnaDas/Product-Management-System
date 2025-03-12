package com.otz.reposatory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.otz.Entity.Product;
@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(path="product")
public interface ProductRepo extends JpaRepository<Product ,Integer>{

}
