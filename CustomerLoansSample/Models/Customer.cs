using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CustomerLoansSample.Models
{
    public class Customer
    {
        [Required]
        public int Id { get; set; }
        
        [Required]
        public string Name { get; set; }
        
        [Required]
        [RegularExpression(@"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]
        public string Email { get; set; }
        
        [Required]
        public DateTime DateOfBirth { get; set; }

        public List<Loan> Loans { get; set; }
    }
}
