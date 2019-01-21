using Microsoft.EntityFrameworkCore;
namespace loginAPI.Model
{
    public class EFloginContext : DbContext
    {
        public DbSet<User> User { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost;Database=login;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }
}