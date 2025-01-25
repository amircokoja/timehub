namespace TimeHub.Api.Controllers.Users.Models;

public class RegisterUserRequest
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Role { get; set; }
    public string Password { get; set; }
    public string ConfirmPassword { get; set; }
}
