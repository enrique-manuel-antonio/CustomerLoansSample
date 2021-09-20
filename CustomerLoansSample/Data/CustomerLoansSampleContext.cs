using Microsoft.EntityFrameworkCore;
using CustomerLoansSample.Models;

namespace CustomerLoansSample.Data
{
    public class CustomerLoansSampleContext : DbContext
    {
        public CustomerLoansSampleContext (DbContextOptions<CustomerLoansSampleContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>()
                .HasIndex(c => c.Email)
                .IsUnique(true);

            modelBuilder.Entity<Loan>()
                .HasOne(l => l.Customer)
                .WithMany(c => c.Loans)
                .HasForeignKey(f => f.CustomerId);
        }

        public DbSet<Customer> Customer { get; set; }

        public DbSet<Loan> Loan { get; set; }
    }
}
