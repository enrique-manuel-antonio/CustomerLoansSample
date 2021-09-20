using System;
using System.ComponentModel.DataAnnotations;

namespace CustomerLoansSample.Models
{
    public class Loan
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public DateTime DateRequested { get; set; }

        [Required]
        public decimal Amount { get; set; }

        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
    }
}
