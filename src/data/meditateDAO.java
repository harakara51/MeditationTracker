package data;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import entities.meditation;

@Transactional
public class meditateDAO {
	@PersistenceContext
	EntityManager em;


	public List<meditation>  getAllDays () {
	 
		List<meditation> allobj = (List<meditation>)em.createNamedQuery("getalldays").getResultList();
	
		return allobj;
	}
	
	public meditation  getTimeMeditatedByDay (String date) {
		 
		meditation singleobj = (meditation)em.createNamedQuery("getSingleDay").setParameter("name", date).getSingleResult();
	
		return singleobj;
	}
	
	
	public void createLog (String log) {
		
		ObjectMapper mapper = new ObjectMapper();
		meditation meditate;
		try
		{
			System.out.println("before creating meditate object");
			meditate = mapper.readValue(log, meditation.class);
			System.out.println(meditate);
			em.persist(meditate);
		} catch (JsonParseException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		
	
	}
}
