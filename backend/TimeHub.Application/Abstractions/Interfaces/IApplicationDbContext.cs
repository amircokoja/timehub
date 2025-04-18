using Microsoft.EntityFrameworkCore;

namespace TimeHub.Application.Abstractions.Interfaces;

public interface IApplicationDbContext
{
    DbSet<TEntity> Set<TEntity>()
        where TEntity : class;
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
