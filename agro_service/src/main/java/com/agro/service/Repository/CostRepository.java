package com.agro.service.Repository;

import com.agro.service.Domain.CostGuide.Cost;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CostRepository  extends MongoRepository<Cost, String> {


}
