using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _dbContext;
        public UserRepository( AppDbContext dbContext)
        {

            _dbContext = dbContext;

        }
        public User Create(User user)
        {
            _dbContext.User.Add(user);
            return user;
        }

        public async Task<bool> FindByEmailAsync(string email)
        {
            return await _dbContext.User.AnyAsync(u => u.Email == email);
        }

        public async Task<User?> FirstOrDefaultAsync(string email, string password)
        {
           return await _dbContext.User.FirstOrDefaultAsync(u => u.Email == email && u.Password == password);
        }

        public async Task<int> SaveChangesAsync()
        {
            return await _dbContext.SaveChangesAsync();
        }
    }
}
