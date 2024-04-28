package atm.web.backendspring.repositories;

import atm.web.backendspring.model.Role;
import atm.web.backendspring.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
    Optional<Role> findByName(String email);
}
