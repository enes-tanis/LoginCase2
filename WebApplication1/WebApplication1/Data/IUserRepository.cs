using WebApplication1.Models;

namespace WebApplication1.Data
{
    public interface IUserRepository
    {
        User Create(User user);
        Task<bool> FindEmailAsync(string email);

        Task<int> SaveChangesAsync();

        Task<User?> FindUserByEmailAsync(string email);
        //Task<User?> FirstOrDefaultAsync(string email, string password);
    }
}
