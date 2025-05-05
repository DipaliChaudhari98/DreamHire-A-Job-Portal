package com.Main.Utility;

import java.security.SecureRandom;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import com.Main.Entity.Sequence;
import com.Main.Exception.JobPortalException;

@Component
public class Utilities {

    private static MongoOperations mongoOperation;

    @Autowired
    public Utilities(MongoOperations mongoOperation) {
        this.mongoOperation = mongoOperation;
    }
    
    @Autowired
    public void setMongoOperation(MongoOperations mongoOperations)
    {
    	Utilities.mongoOperation=mongoOperation;
    }

    public static Long getNextSequence(String key) throws JobPortalException {
        Query query = new Query(Criteria.where("_id").is(key));
        Update update = new Update().inc("seq", 1);
        FindAndModifyOptions options = new FindAndModifyOptions().returnNew(true);

        Sequence seq = mongoOperation.findAndModify(query, update, options, Sequence.class);
        if (seq == null) throw new JobPortalException("Unable to get sequence id for key: " + key);
        return seq.getSeq();
    }
    public static String generateOTP()
    {
    	StringBuilder otp=new StringBuilder();
    	SecureRandom random=new SecureRandom();
    	for(int i=0;i<6;i++) {
    		otp.append(random.nextInt(10)); 
    		}
    	return otp.toString();
    }
}
