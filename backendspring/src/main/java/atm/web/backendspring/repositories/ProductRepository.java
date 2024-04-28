package atm.web.backendspring.repositories;

import atm.web.backendspring.model.Product;
import atm.web.backendspring.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
}
