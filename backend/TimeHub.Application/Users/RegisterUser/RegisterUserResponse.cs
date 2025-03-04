using TimeHub.Domain.Users;

namespace TimeHub.Application.Users.RegisterUser;

public sealed record RegisterUserResponse(int Id, string FirstName, string LastName, string Email)
{
    public RegisterUserResponse(User user)
        : this(user.Id, user.FirstName.Value, user.LastName.Value, user.Email.Value) { }
}
