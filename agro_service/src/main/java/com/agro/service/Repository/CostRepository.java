package com.agro.service.Repository;

import com.agro.service.Domain.CostGuide.Cost;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "cost", path = "cost")
public interface CostRepository  extends MongoRepository<Cost, String> {


}
