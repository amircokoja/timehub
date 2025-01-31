using TimeHub.Domain.Abstractions;

namespace TimeHub.Domain.Users;

public static class UserErrors
{
    public static readonly Error PasswordCannotBeEmpty =
        new("User.PasswordCannotBeEmpty", "Password cannot be empty");
    public static readonly Error PasswordMustBeAtLeast6CharactersLong =
        new(
            "User.PasswordMustBeAtLeast6CharactersLong",
            "Password must be at least 6 characters long"
        );
    public static readonly Error AlreadyPartOfOrganization =
        new("User.AlreadyPartOfOrganization", "User is already part of this organization");
}
