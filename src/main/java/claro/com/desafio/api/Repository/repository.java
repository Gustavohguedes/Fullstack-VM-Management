package claro.com.desafio.api.Repository;

import java.util.List;

public interface repository {
    // Define the methods that will be implemented by the repository classes
    void save(Object entity);

    Object findById(Long id);

    void delete(Long id);

    List<Object> findAll();
}
