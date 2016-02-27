package data;

public class meditateBean
{

	
	private int hours;
	private String day;
	
	
	
	/**
	 * @return the hours
	 */
	public int getHours()
	{
		return hours;
	}
	/**
	 * @return the day
	 */
	public String getDay()
	{
		return day;
	}
	/**
	 * @param hours the hours to set
	 */
	public void setHours(int hours)
	{
		this.hours = hours;
	}
	/**
	 * @param day the day to set
	 */
	public void setDay(String day)
	{
		this.day = day;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString()
	{
		return "meditateBean [hours=" + hours + ", day=" + day + "]";
	}
	public meditateBean(int hours, String day)
	{
		super();
		this.hours = hours;
		this.day = day;
	}
	
}
