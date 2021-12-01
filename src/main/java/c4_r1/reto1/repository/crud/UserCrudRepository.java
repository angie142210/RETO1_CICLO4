package c4_r1.reto1.repository.crud;


import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

import c4_r1.reto1.model.User;


public interface UserCrudRepository extends CrudRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    Optional<User> findByEmailAndPassword(String email,String password);
    //Optional<User> findByName(String name);
}
