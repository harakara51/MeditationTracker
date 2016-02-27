package controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import data.meditateBean;
import data.meditateDAO;
import entities.meditation;

@Controller
public class myController
{
	@Autowired
	meditateDAO meditateDAO;

	@ResponseBody
	@RequestMapping("ping")
	public String ping()
	{

		return "pong";
	}

	@ResponseBody
	@RequestMapping("meditate")

	public List<meditation> getALLdays()

	{
		System.out.println("inside controller meditate");
		return meditateDAO.getAllDays();
	}

	@RequestMapping("/date/{date}")
	@ResponseBody
	public meditation getDate(@PathVariable String date)
	{
		System.out.println("insdie getDate method :" + date);

		System.out.println(meditateDAO.getTimeMeditatedByDay(date));
		return meditateDAO.getTimeMeditatedByDay(date);
	}
	
	@ResponseBody
    @RequestMapping(path = "newLog", method = RequestMethod.POST)
    public Boolean createLog(@RequestBody String meditate) {
        System.out.println("inside createLOG method " +meditate);

       meditateDAO.createLog(meditate);
        return true;
    }

}
