using WebApplication1.Models;

namespace WebApplication1.Data
{
    public interface IUserRepository
    {
        User Create(User user);
        Task<bool> FindByEmailAsync(string email);

        Task<int> SaveChangesAsync();
        Task<User?> FirstOrDefaultAsync(string email, string password);
    }
}
