namespace TimeHub.Api.Controllers.TimeLogs.Models;

public class CreateTimeLogRequest
{
    public string Description { get; set; }
    public DateTime Start { get; set; }
    public DateTime End { get; set; }
    public int? ProjectId { get; set; }
    public int Seconds { get; set; }
}
