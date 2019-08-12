package com.agro.service.Repository.MarketBasePrice;

import com.agro.service.Domain.MarketBasePrice.Comments;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "comment",path = "comment")

public interface CommentRepository extends MongoRepository<Comments,String> {
}
